import {
  BadRequestException,
  Controller,
  Get,
  HttpCode,
  Post,
  RawBodyRequest,
  Req,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { AppService } from './app.service';
import { OpenAI } from 'openai';
import { RealtimeCallIncomingWebhookEvent } from 'openai/resources/webhooks';
import { Request, Response } from 'express';
import { PhoneService } from './phone/phone.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly phoneService: PhoneService,
  ) {}
  private readonly client = new OpenAI();
  private readonly webhookSecret = process.env.OPENAI_WEBHOOK_VERIFICATION_KEY;

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('webhook')
  @HttpCode(200)
  async webhook(@Req() req: RawBodyRequest<Request>) {
    try {
      const event = await this.client.webhooks.unwrap(
        req.rawBody!.toString(),
        req.headers,
        this.webhookSecret!,
      );

      if (event.type === 'realtime.call.incoming') {
        return this.phoneService.handleIncomingCall();
      }

      return 'pong';
    } catch (e) {
      if (e instanceof OpenAI.InvalidWebhookSignatureError) {
        throw new UnauthorizedException('Invalid signature');
      } else {
        throw new BadRequestException(e.message);
      }
    }
  }
}
