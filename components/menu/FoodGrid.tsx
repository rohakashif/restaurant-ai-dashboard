import { Food } from "@/types";
import { FoodCard } from "./FoodCard";

interface FoodGridProps {
  foods: Food[];
}

export function FoodGrid({ foods }: FoodGridProps) {
  if (foods.length === 0) {
    return (
      <p className="py-12 text-center text-muted-foreground">
        No items found. Try adjusting your filters.
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {foods.map((food, i) => (
        <FoodCard key={food.id} food={food} index={i} />
      ))}
    </div>
  );
}
