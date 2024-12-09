# Gemini Clone

This project is a clone of the Gemini Large Language Model (LLM) by Google. It's just for practice and learning purposes.

The application interacts with users through intelligent conversational AI, utilizing the Google Generative AI API to generate responses based on user input.

## Live Version

You can try out the live version of the application here:  
[Gemini - Live Version](https://gemini-zeta-lilac.vercel.app/)

## Features

- **Generative AI Responses:** Uses Google’s Gemini LLM to generate intelligent responses.
- **Predefined Suggestions:** Includes preset prompts for quick access to common queries.
- **Real-Time Chat Interface:** Seamless interaction with the AI for various topics like tech, travel, and urban planning.
- **Multi-Topic Assistance:** Provides responses across a range of subjects, including brainstorming and summarization.

## Technologies Used

- **Frontend:**
  - React
  - TypeScript
  - Tailwind CSS (for styling)
  - Vite (for fast development)

- **API Integration:**
  - Google Generative AI (Gemini) API

## Purpose

This project is primarily for practicing:
- **React with TypeScript** for building a robust, type-safe frontend.
- **Tailwind CSS** for efficient and customizable styling.
- **Google API integration** to work with generative models like Gemini and understand API calls and responses.

## Getting Started

To set up the project locally, follow the instructions below:

### 1. Clone the Repository

```bash
git clone https://github.com/Haitam-Elgharras/Gemini.git
cd gemini
```

### 2. Install Dependencies

Make sure you have Node.js installed, and then install the dependencies:

```bash
npm install
```

### 3. Set up Environment Variables

Create a `.env` file in the root of the project and add your Google API key:

```bash
VITE_GOOGLE_API_KEY=your-api-key-here
```

Replace `your-api-key-here` with your actual Google API key.

### 4. Run the Development Server

To start the app locally, run:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

## Deployment

This project is deployed using [Vercel](https://vercel.com/), and the live version can be accessed from the link provided above.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push the branch (`git push origin feature-name`).
5. Submit a pull request.


### Some pictures of the app:
![Home](/src/assets/demo-images/image.png)
![loading](/src/assets/demo-images/loading.png)
![ask](/src/assets/demo-images/ask.png)