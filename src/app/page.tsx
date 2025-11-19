"use client";

import { Analysis } from "@/components/Analysis";
import { Buttons } from "@/components/Buttons";
import { ChatBot } from "@/components/Chat";
import { Content } from "@/components/Content";
import { Ingredient } from "@/components/Ingredient";
import { Navbar } from "@/components/Navbar";
import { useEffect, useState } from "react";

export default function Home() {
  const [page, setPage] = useState(0);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <ChatBot />
      <Buttons page={page} setPage={setPage} />

      {page === 0 && <Analysis />}

      {page === 1 && <Ingredient />}

      {page === 2 && <Content />}
    </div>
  );
}
