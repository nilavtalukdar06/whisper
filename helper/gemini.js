import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "GEMINI_API_KEY" });

const main = async () => {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents:
      "Generate 3 creative and thought-provoking anonymous questions, each 10-15 words long, separated by a vertical bar (|).",
  });
  return response.text;
};

export default main;
