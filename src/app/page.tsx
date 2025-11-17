"use client";

import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  age: number;
};
export default function Home() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((res) => setUsers(res.users));
  }, []);
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      {users.map((user, i) => {
        return (
          <div key={i}>
            <h1>Name :{user.name}</h1>
            <h1>Age :{user.age}</h1>
          </div>
        );
      })}
    </div>
  );
}
