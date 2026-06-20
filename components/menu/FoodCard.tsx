"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Plus, Star } from "lucide-react";
import { toast } from "sonner";
import { Food } from "@/types";
import { formatPrice } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart-store";
import { useWishlistStore } from "@/store/wishlist-store";

interface FoodCardProps {
  food: Food;
  index?: number;
}

export function FoodCard({ food, index = 0 }: FoodCardProps) {
  const addItem = useCartStore((s) => s.addItem);
  const { toggle, isInWishlist } = useWishlistStore();
  const inWishlist = isInWishlist(food.id);

  const handleAddToCart = () => {
    addItem({
      foodId: food.id,
      name: food.name,
      price: food.price,
      image: food.image,
    });
    toast.success(`${food.name} added to cart`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="group glass-card overflow-hidden"
    >
      <Link href={`/food/${food.id}`}>
        <div className="relative h-48 overflow-hidden">
          <Image
            src={food.image}
            alt={food.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute left-3 top-3 flex gap-2">
            {food.isPopular && <Badge variant="warning">Popular</Badge>}
            {food.isNew && <Badge variant="success">New</Badge>}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-3 top-3 h-8 w-8 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/40"
            onClick={(e) => {
              e.preventDefault();
              toggle(food.id);
              toast(inWishlist ? "Removed from wishlist" : "Added to wishlist");
            }}
          >
            <Heart
              className={`h-4 w-4 ${inWishlist ? "fill-red-500 text-red-500" : "text-white"}`}
            />
          </Button>
        </div>
      </Link>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <Link href={`/food/${food.id}`}>
            <h3 className="font-semibold leading-tight hover:text-primary">{food.name}</h3>
          </Link>
          <div className="flex items-center gap-1 text-sm">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            <span>{food.rating}</span>
          </div>
        </div>
        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
          {food.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold">{formatPrice(food.price)}</span>
          <Button size="sm" variant="gradient" onClick={handleAddToCart}>
            <Plus className="h-4 w-4" />
            Add
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
