import { Buttons } from "./Buttons";
import { Generate } from "./Generate";
import { Document, Star } from "./icons/Icons";
import { Text } from "./Texts";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Ingredient() {
  return (
    <div>
      <Text text={"Ingredient recognition"} />

      <div className="flex flex-col gap-4 mt-3">
        <p className="text-gray-400">
          Describe the food, and AI will detect the ingredients.
        </p>
        <Generate placeholder="Орц тодорхойлох" type="text" />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center mt-4 gap-3">
          <Document />
          <h1 className="text-2xl font-bold">Identified Ingredients</h1>
        </div>
        <p className="text-gray-500">
          First, enter your text to recognize an ingredients.{" "}
        </p>
      </div>
    </div>
  );
}
