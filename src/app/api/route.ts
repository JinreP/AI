import { title } from "process";

export const dynamic = "force-static";

export async function GET() {
  const foods = [
    {
      id: 1,
      title: "BBQ Pizza",
      completed: false,
    },
    {
      id: 2,
      title: "BBQ Chicken",
      completed: false,
    },
    {
      id: 3,
      title: "Burger",
      completed: false,
    },
  ];

  return Response.json({ foods });
}
