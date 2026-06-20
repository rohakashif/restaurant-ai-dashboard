"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ChefHat } from "lucide-react";
import { Recipe } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface RecipeCardProps {
  recipe: Recipe;
  index?: number;
}

export function RecipeCard({ recipe, index = 0 }: RecipeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -4 }}
    >
      <Link href={`/blog/${recipe.slug}`}>
        <Card className="glass-card overflow-hidden group">
          <div className="relative h-48 overflow-hidden">
            <Image
              src={recipe.image}
              alt={recipe.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <Badge className="absolute left-3 top-3" variant="secondary">
              {recipe.category}
            </Badge>
          </div>
          <CardContent className="p-4">
            <h3 className="font-semibold leading-tight group-hover:text-primary">
              {recipe.title}
            </h3>
            <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
              {recipe.description}
            </p>
            <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {recipe.cookTime}
              </span>
              <span className="flex items-center gap-1">
                <ChefHat className="h-3.5 w-3.5" />
                {recipe.author}
              </span>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
