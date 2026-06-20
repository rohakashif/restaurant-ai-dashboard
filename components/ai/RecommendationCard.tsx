"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Plus } from "lucide-react";
import { toast } from "sonner";
import { Food } from "@/types";
import { AIRecommendation } from "@/types";
import { formatPrice } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useCartStore } from "@/store/cart-store";

interface RecommendationCardProps {
  recommendation: AIRecommendation;
  food: Food;
  index?: number;
}

export function RecommendationCard({
  recommendation,
  food,
  index = 0,
}: RecommendationCardProps) {
  const addItem = useCartStore((s) => s.addItem);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="glass-card overflow-hidden">
        <div className="relative h-40">
          <Image
            src={food.image}
            alt={food.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-3 left-3 right-3">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-amber-400" />
              <span className="text-sm font-medium text-white">
                {recommendation.confidence}% match
              </span>
            </div>
            <Progress value={recommendation.confidence} className="mt-2 h-1" />
          </div>
        </div>
        <CardContent className="p-4">
          <Link href={`/food/${food.id}`}>
            <h3 className="font-semibold hover:text-primary">{food.name}</h3>
          </Link>
          <p className="mt-1 text-sm text-muted-foreground">{recommendation.reason}</p>
          <div className="mt-2 flex flex-wrap gap-1">
            {recommendation.matchTags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="font-bold">{formatPrice(food.price)}</span>
            <Button
              size="sm"
              variant="gradient"
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
              <Plus className="h-4 w-4" />
              Add
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
