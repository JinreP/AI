import { User } from "@/utils/models/user.schema";
import connectDB from "@/utils/mongodb";
import { NextRequest } from "next/server";

export const dynamic = "force-static";

export async function GET() {
  await connectDB();
  const users = await User.find();
  return Response.json({ users });
}

export async function POST(request: Request) {
  await connectDB();
  const body = await request.json();
  await User.create(body);
  return Response.json({ message: "User created", user: body });
}

export async function DELETE(req: NextRequest) {
  await connectDB();
  const { id } = await req.json();

  if (!id) {
    return Response.json({ message: "id is required" });
  }
  
  await User.findByIdAndDelete(id);

  return Response.json({ message: "user is deleted" });
}
