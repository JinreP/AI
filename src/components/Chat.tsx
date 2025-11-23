"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import { useState } from "react";

export function ChatBot() {
  const [input, setInput] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    try {
      setLoading(true);
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input }),
      });
      const data = await res.json();

      setAnswers((prev) => [...prev, input, data.message]);
    } catch (error) {
      console.error(error);
    } finally {
      setInput("");

      setLoading(false);
    }
  };
  return (
    <div className="absolute right-0 bottom-5">
      <Popover>
        <PopoverTrigger asChild>
          <Button className="bg-white border-2 w-12 h-12 shrink-0">
            <Image
              width={15}
              height={15}
              src={"https://www.svgrepo.com/show/50042/chat-messages.svg"}
              alt="send icon"
              unoptimized
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="h-[350px]">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="leading-none font-medium">Chat assistant</h4>
                <Button className="bg-white w-8 h-8 rounded-2xl border flex items-center justify-center p-0">
                  <svg
                    className="w-2 h-2"
                    width="4"
                    height="4"
                    viewBox="0 0 9 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.5 0.5L0.5 8.5M0.5 0.5L8.5 8.5"
                      stroke="#18181B"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>{" "}
              </div>
              <div className="h-[250px] overflow-y-auto pr-2 flex flex-col gap-2">
                {answers.map((answer, i) => {
                  const isUser = i % 2 === 0;
                  return (
                    <div
                      key={i}
                      className={`flex ${
                        isUser ? "justify-end" : "justify-start"
                      }`}
                    >
                      <p
                        className={` w-fit  px-4 py-1 rounded-2xl text-[14px]  max-w-[250px]  ${
                          isUser
                            ? "bg-blue-500 text-white"
                            : "bg-black text-white"
                        }`}
                      >
                        {answer}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center gap-2 absolute bottom-5">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="rounded-1 border w-[250px]"
                />
                <Button
                  className="bg-black rounded-[50%]"
                  onClick={handleSend}
                  disabled={loading}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_3313_577)">
                      <path
                        d="M14.6666 1.33337L7.33325 8.66671M14.6666 1.33337L9.99992 14.6667L7.33325 8.66671M14.6666 1.33337L1.33325 6.00004L7.33325 8.66671"
                        stroke="#FAFAFA"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3313_577">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </PopoverContent>{" "}
      </Popover>
    </div>
  );
}
