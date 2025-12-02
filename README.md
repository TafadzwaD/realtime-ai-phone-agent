# 📞 AI Voice Agent with NestJS, Twilio SIP, and OpenAI

This project implements a **real-time AI Voice Agent** that you can call. It leverages **NestJS** for a scalable backend, **Twilio SIP Trunking** for telephony, and **OpenAI's realtime-api** for a seamless, low-latency, conversational experience using the native **Session Initiation Protocol (SIP)**.

-----

## 📺 Video Tutorial: Build Your Own AI Voice Agent\!

**Want to see the entire development process step-by-step?**

Learn how to develop a real-time AI Voice Agent with NestJS, Twilio SIP Trunking, and OpenAI realtime-api by watching the full tutorial:

> **▶️ Watch the full guide here: [Creating a Real-time AI Voice Agent with NestJS, Twilio, and OpenAI](https://www.youtube.com/watch?v=FtdEA0ravaM&list=PLX8Kj-tc4dHYNcDj7rTxB4FOxy7RGBlmg&index=1)**

-----

## ✨ Features

* **SIP Integration:** Uses **Twilio SIP Trunking** to forward calls to OpenAI's SIP gateway, ensuring a high-quality, reliable voice connection.
* **Real-time Conversation**
* **Webhook Verification:** Securely verifies incoming requests from OpenAI using the provided verification key to ensure payload integrity.
* **Scalable Architecture:** Built with **NestJS**, following a modular structure and **separation of concerns** (e.g., dedicated `PhoneService`).
* **Call Termination:** Implements functionality to terminate the call via the OpenAI API when the user hangs up.

## 🚀 Getting Started

Follow the steps below to set up and run the project.

### Prerequisites

* Node.js (LTS recommended)
* Twilio Account, Phone Number, and SIP Trunk configuration.
* OpenAI API Key and an account provisioned for SIP access.
* A tunneling service (like **ngrok**) is needed to expose your local server for the OpenAI webhook response.

### Installation

1.  Clone the repository:

    ```bash
    $ git clone <repository-url>
    $ cd <project-directory>
    ```

2.  Install dependencies:

    ```bash
    $ npm install
    ```

3.  Configure your environment variables. Create a `.env` file in the root directory:

    ```
    # Example .env file
    OPENAI_API_KEY=sk-...
    # Key used by OpenAI to verify webhooks sent back to your server
    OPENAI_WEBHOOK_VERIFICATION_KEY=your_webhook_verification_key
    ```

### Running the App

Run the application in development mode:

```bash
# watch mode
$ npm run start:dev
```

-----

## ⚙️ Configuration Steps

### 1\. Twilio SIP Trunk Setup

Configure your Twilio SIP Trunk to point to the **OpenAI SIP Domain**. When a call comes into your Twilio number, Twilio will forward the media and signaling to OpenAI's servers.

### 2\. OpenAI Webhook Configuration

OpenAI will handle the real-time audio and conversation. When the call is completed or requires server interaction (e.g., for logging or ending the session), OpenAI sends a **webhook** back to your NestJS application.

1.  Start a tunneling service (e.g., using ngrok on port 3000):

    ```bash
    $ ngrok http 3000
    ```

    Copy the public HTTPS URL (e.g., `https://abcdefg.ngrok.io`).

2.  In your OpenAI configuration, set the **Webhook URL** to point to your public URL plus the endpoint handling these events (e.g., `https://abcdefg.ngrok.io/webhook`).

### 3\. Webhook Verification

Your NestJS application uses the `OPENAI_WEBHOOK_VERIFICATION_KEY` to validate that the webhook payload received in the `/webhook` endpoint is legitimately coming from OpenAI. This is a crucial security step.

-----

## 🌐 Connect & Collaborate

This project is a great starting point, but implementing advanced features can be complex.

* **Technical Deep-Dives & Collaboration:** If you have **complex implementation questions**, want to **collaborate on new features**, or need **advanced guidance** on Twilio/OpenAI integrations, let's connect.
* **General Support & Tutorials:** For questions, deep dives, and other video tutorials on Node.js, NestJS, and AI development, connect with me on YouTube!

  > **Developer Channel:** [https://www.youtube.com/@tafadzwad](https://www.youtube.com/@tafadzwad)

---

## Project Acknowledgements

This project is built using the NestJS framework. For more information on NestJS, please visit the links below:

* Website - [https://nestjs.com](https://nestjs.com/)
* Twitter - [@nestframework](https://twitter.com/nestframework)


