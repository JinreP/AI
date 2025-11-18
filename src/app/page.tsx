"use client";

import { ChatBot } from "@/components/Chat";
import { Content } from "@/components/Content";
import { Navbar } from "@/components/Navbar";
import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  age: number;
};
export default function Home() {
  // const [users, setUsers] = useState<User[]>([]);

  // useEffect(() => {
  //   fetch("/api/users")
  //     .then((res) => res.json())
  //     .then((res) => setUsers(res.users));
  // }, []);
  return (
    <div className="w-full h-screen ">
      <Navbar />
      <Content />
      <ChatBot />
    </div>
  );
}
