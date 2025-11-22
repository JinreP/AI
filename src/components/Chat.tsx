import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";

export function ChatBot() {
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
                {" "}
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
              <p className=" bg-black w-fit text-white px-4 py-1 rounded-2xl text-[14px]">
                How can I help you today?{" "}
              </p>
              <div className="flex items-center gap-2 absolute bottom-5">
                <Input
                  placeholder="Type your message..."
                  className="rounded-1 border w-[250px]"
                />
                <Button className="bg-black rounded-[50%]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_3313_577)">
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
