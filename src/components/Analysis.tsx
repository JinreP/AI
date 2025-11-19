"use client";
import { useState } from "react";
import { Generate } from "./Generate";
import { Document, Star } from "./icons/Icons";
import { Text } from "./Texts";
import Image from "next/image";

export function Analysis() {
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [detectedObjects, setDetectedObjects] = useState<any[]>([]);
  const [analyzing, setAnalyzing] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedImage(file);
      const url = URL.createObjectURL(file);
      setUploadedImageUrl(url);
      setDetectedObjects([]);
    }
  };

  const analyzeImage = async () => {
    if (!uploadedImage) return;

    setAnalyzing(true);
    setDetectedObjects([]);

    try {
      const formData = new FormData();
      formData.append("image", uploadedImage);

      const response = await fetch("/api/object-detection", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setDetectedObjects(data.objects || []);
      } else {
        console.error("Failed to analyze image");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setAnalyzing(false);
    }
  };
  return (
    <div>
      <Text text="Image analysis" />
      <Generate
        placeholder="file"
        type="file"
        handleImageUpload={handleImageUpload}
        analyzeImage={analyzeImage}
        uploadedImageUrl={uploadedImageUrl}
      />

      <div className="flex flex-col">
        <div className="flex items-center mt-3 gap-3">
          <Document />
          <h1 className="text-2xl font-bold">Here is the summary</h1>
        </div>
        {detectedObjects.length > 0 && (
          <div>
            <div className="mt-4">
              <h3 className="font-bold ">Detected Objects:</h3>
              <ul className="">
                {detectedObjects.map((obj, index) => (
                  <li key={index} className="text-sm">
                    <span className="">{obj.label}</span>
                    {obj.score && (
                      <span className="text-gray-600 ml-2">
                        ({(obj.score * 100).toFixed(1)}%)
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        {/* {!analyzing ? (
          <p className="text-gray-500">
            First, enter your image to recognize an ingredients.
          </p>
        ) : (
          <div>
            {detectedObjects.length > 0 && (
              <div>
                <div className="mt-4">
                  <h3 className="font-bold ">Detected Objects:</h3>
                  <ul className="">
                    {detectedObjects.map((obj, index) => (
                      <li key={index} className="text-sm">
                        <span className="">{obj.label}</span>
                        {obj.score && (
                          <span className="text-gray-600 ml-2">
                            ({(obj.score * 100).toFixed(1)}%)
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        )} */}
      </div>
    </div>
  );
}
