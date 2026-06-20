"use client";

import { toast } from "sonner";
import { Food } from "@/types";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart-store";

interface AddToCartButtonProps {
  food: Food;
}

export function AddToCartButton({ food }: AddToCartButtonProps) {
  const addItem = useCartStore((s) => s.addItem);

  return (
    <Button
      variant="gradient"
      size="lg"
      className="mt-6"
      onClick={() => {
        addItem({
          foodId: food.id,
          name: food.name,
          price: food.price,
          image: food.image,
        });
        toast.success(`${food.name} added to cart`);
      }}
    >
      Add to Cart
    </Button>
  );
}
