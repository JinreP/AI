import { Button } from "./ui/button";

export function Navbar() {
  return (
    <div className="flex items-center justify-center w-full h-[70px] gap-5 border-2">
      <h1 className="font-bold text-2xl pr-220">AI Tools</h1>
      <Button variant={"secondary"} className="bg-gray-100 font-bold">
        Food Generator
      </Button>
      <Button variant={"secondary"}>Image Capture</Button>
    </div>
  );
}
