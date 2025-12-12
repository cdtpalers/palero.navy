import { GoogleGenAI } from "@google/genai";
import { SYSTEM_PROMPT } from '../constants';

const apiKey = process.env.API_KEY || '';

let aiClient: GoogleGenAI | null = null;

export const getAIClient = () => {
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
};

export const generateResponse = async (userMessage: string, history: {role: 'user' | 'model', content: string}[]) => {
  try {
    const ai = getAIClient();
    
    // Transform history for the API
    // Note: This simple implementation just sends the last message with system prompt context for simplicity in this stateless demo,
    // or uses chat if we want to maintain state. Let's use generateContent with system instruction.
    
    // Construct a prompt that includes history context roughly
    const conversation = history.map(h => `${h.role}: ${h.content}`).join('\n');
    const fullPrompt = `
      ${conversation}
      user: ${userMessage}
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: fullPrompt,
      config: {
        systemInstruction: SYSTEM_PROMPT,
      }
    });
    
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Connection disrupted. Secure line unstable. Please try again.";
  }
};