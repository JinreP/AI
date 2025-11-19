"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Image from "next/image";
import { Spinner } from "./ui/spinner";
import { Text } from "./Texts";
import { ImageIcon } from "./icons/Icons";

export function Content() {
  const [prompt, setPrompt] = useState("");
  const [images, setImages] = useState("");
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setImages("");

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      if (res.ok) {
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
        setImages(url);
      } else {
        console.error("failed to generate image");
      }
      setLoading(false);
    } catch (error) {
      console.error(error, "error");
    }
  };

  return (
    <div className="flex flex-col items-start justify-center gap-3">
      <Text text={"Food image creator"} />
      <p className="text-gray-500 ">
        What food image do you want? Describe it briefly.
      </p>
      <div className="flex flex-col items-end justify-end">
        <Input
          placeholder="Хоолны тайлбар"
          className="w-[540px] pb-21 h-[130px]"
          onKeyDown={(e) => e.key === "Enter" && generateImage()}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <Button
          variant={"secondary"}
          className="w-[250px] mt-10"
          onClick={generateImage}
          disabled={loading || !prompt.trim()}
        >
          {loading ? (
            <div className="flex items-center gap-2">
              <Spinner /> <p>Processing...</p>
            </div>
          ) : (
            "Generate Image"
          )}
        </Button>
      </div>

      <div className="flex items-center gap-3">
        <ImageIcon /> <h1 className="text-2xl font-bold">Result</h1>
      </div>
      {!loading ? (
        <p className="text-gray-500">
          First, enter your text to generate an image.
        </p>
      ) : (
        <p className="text-gray-400">
          Working on your image just wait for moment.
        </p>
      )}

      {loading ? (
        <div className="flex flex-col items-center justify-center border-2 w-[540px] h-[200px] mt-10">
          <Spinner className="size-10 " />
        </div>
      ) : (
        <div>
          {images && (
            <div className="mt-5 w-[540px] border-2 rounded-2xl h-[500px]">
              <h1></h1>
              <Image
                unoptimized
                width={400}
                height={400}
                alt="aaa"
                src={images}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
