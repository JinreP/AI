import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function POST(req: Request) {
  const { prompt } = await req.json();

  console.log();

  const result = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [
      {
        text: `give short answers and don't repeat user's message User: ${prompt}`,
      },
    ],
  });
  const text = result.text || "";

  console.log(text);
  return Response.json({ message: text }, { status: 200 });
}
