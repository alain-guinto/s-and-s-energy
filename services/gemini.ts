
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_PROMPT } from "../constants";

let ai: GoogleGenAI | null = null;

const getAiClient = () => {
  if (!ai) {
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY || 'DUMMY_KEY' });
  }
  return ai;
};

export const getSolarAdvice = async (userMessage: string) => {
  try {
    const client = getAiClient();
    const response = await client.models.generateContent({
      model: "gemini-2.0-flash-exp",
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to my solar knowledge base right now. Please call us at 09155769185 for immediate assistance!";
  }
};
