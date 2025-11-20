import { InputTypes } from "@/lib/types";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Image from "next/image";

export function Generate(Props: any) {
  const {
    placeholder,
    type,
    handleImageUpload,
    analyzeImage,
    uploadedImageUrl,
  } = Props;
  return (
    <div>
      <div className="flex flex-col items-end justify-end gap-5 relative ">
        <Input
          className="w-[540px] h-[150px] pb-20 "
          placeholder={placeholder}
          type={type}
          onChange={handleImageUpload}
        />
        <Button
          className="bg-gray-500 text-white w-[250px]  "
          onClick={analyzeImage}
        >
          Generate
        </Button>
        {uploadedImageUrl && (
          <Image
            className="absolute  w-[220px] he-[220px] left-2 top-0"
            src={uploadedImageUrl}
            alt="uploaded image"
            width={220}
            height={220}
            unoptimized
          />
        )}
      </div>
    </div>
  );
}
