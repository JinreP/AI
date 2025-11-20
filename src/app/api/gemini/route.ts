import { GoogleGenAI } from "@google/genai";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({});

export async function POST(req: Request) {
  const body = req.json();
  const { prompt } = await body;
  console.log();

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });
  console.log(response.text);
  return Response.json({ message: response }, { status: 200 });
}
