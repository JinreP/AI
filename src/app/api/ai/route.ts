import { NextRequest } from "next/server";
import { InferenceClient } from "@huggingface/inference";

const HF_TOKEN = process.env.HF_TOKEN;
const inference = new InferenceClient(HF_TOKEN);

export const POST = async (req: NextRequest) => {
  const data = await req.json();
  console.log(data);
  const image = (await inference.textToImage({
    // provider: "nscale",
    model: "black-forest-labs/FLUX.1-schnell",
    inputs: data.prompt,
  })) as any;
  console.log(image);
  const buffer = await image.arrayBuffer();
  console.log(buffer);

  return new Response(buffer, {
    headers: {
      "Content-Type": "image/png",
    },
  });
};
