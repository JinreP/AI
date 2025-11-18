"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Image from "next/image";
import { Spinner } from "./ui/spinner";

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
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-bold text-3xl pr-145 mb-5   ">AI Food Creator</h1>
      <Input
        placeholder="Enter a food description (e.g., 'Try our new spicy chicken ramen...')"
        className="w-[800px] pb-21 h-[130px]"
        onKeyDown={(e) => e.key === "Enter" && generateImage()}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <Button
        variant={"secondary"}
        className="w-[800px] mt-10"
        onClick={generateImage}
        disabled={loading || !prompt.trim()}
      >
        {loading ? (
          <div className="flex items-center gap-2">
            <Spinner /> <p>Processing...</p>
          </div>
        ) : (
          "Generate Image & Extract Info"
        )}
      </Button>

      {loading ? (
        <div className="flex flex-col items-center justify-center border-2 w-[800px] h-[200px] mt-10">
          <Spinner className="size-10 " />
          <h1 className="text-gray-400">Working on it...</h1>
        </div>
      ) : (
        <div>
          {images && (
            <div className="mt-5">
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
      <div className="w-[800px] h-[70px] pb-5 border-2 rounded-2xl flex items-center justify-start pl-5 mt-10">
        <h1 className="font-bold text-2xl">Extracted Info</h1>
      </div>
    </div>
  );
}
