import { Button } from "./ui/button";

export function Buttons({ page, setPage }: any) {
  return (
    <div className="mb-3 pr-28">
      <Button
        variant={"secondary"}
        onClick={() => setPage(0)}
        className="hover:bg-white hover:text-black text-gray-400"
      >
        Image analysis
      </Button>
      <Button
        variant={"secondary"}
        onClick={() => setPage(1)}
        className="hover:bg-white hover:text-black text-gray-400"
      >
        Ingredient recognation
      </Button>
      <Button
        variant={"secondary"}
        onClick={() => setPage(2)}
        className="hover:bg-white hover:text-black text-gray-400"
      >
        Image creator
      </Button>
    </div>
  );
}
