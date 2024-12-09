import {
    GoogleGenerativeAI,
  } from "@google/generative-ai";
  
  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY as string;
  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt: string) {
    const chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage(prompt);

    return result.response.text();
  }
  
  export default run;