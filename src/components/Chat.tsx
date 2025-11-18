import Image from "next/image";
import { Button } from "./ui/button";

export function ChatBot() {
  return (
    <div className="absolute right-0 bottom-5">
      <Button className="bg-white border-2 w-12 h-12 shrink-0">
        <Image
          width={15}
          height={15}
          src={"https://www.svgrepo.com/show/50042/chat-messages.svg"}
          alt="send icon"
          unoptimized
        />
      </Button>
    </div>
  );
}
