import { NextRequest, NextResponse } from "next/server";

const { InferenceClient } = require("@huggingface/inference");

const HF_TOKEN = process.env.HF_TOKEN;
const inference = new InferenceClient(HF_TOKEN);

export const POST = async (req: NextRequest) => {
  try {
    const formData = await req.formData();
    const image = formData.get("image") as File;
    if (!image) {
      return NextResponse.json({ error: "no image provided" }, { status: 400 });
    }
    const results = (await inference.objectDetection({
      model: "facebook/detr-resnet-50",
      data: image,
    })) as any;

    const objects = results
      .filter((obj: any) => obj.score > 0.5)
      .map((obj: any) => ({
        label: obj.label,
        score: obj.score,
        box: obj.box,
      }));
    return NextResponse.json({ objects });
  } catch (error) {
    console.log(error, "error in object detection");
    return NextResponse.json(
      {
        message: "Server error",
      },
      { status: 500 }
    );
  }
};
