import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, ChefHat, ArrowLeft } from "lucide-react";
import { getRecipeBySlug } from "@/data/recipes";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default async function RecipeDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);

  if (!recipe) notFound();

  return (
    <div className="container mx-auto px-4 py-12">
      <Button variant="ghost" asChild className="mb-6">
        <Link href="/blog">
          <ArrowLeft className="h-4 w-4" />
          Back to Recipes
        </Link>
      </Button>
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="relative h-64 overflow-hidden rounded-2xl lg:h-96">
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
        <div>
          <div className="flex flex-wrap gap-2">
            <Badge>{recipe.category}</Badge>
            <Badge variant="outline">{recipe.difficulty}</Badge>
          </div>
          <h1 className="mt-4 font-display text-3xl font-bold">{recipe.title}</h1>
          <p className="mt-3 text-muted-foreground">{recipe.description}</p>
          <div className="mt-4 flex items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {recipe.cookTime}
            </span>
            <span className="flex items-center gap-1">
              <ChefHat className="h-4 w-4" />
              {recipe.author}
            </span>
          </div>
          <Separator className="my-6" />
          <h2 className="font-semibold">Ingredients</h2>
          <ul className="mt-3 space-y-2">
            {recipe.ingredients.map((item) => (
              <li key={item} className="text-sm text-muted-foreground">
                • {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Card className="glass-card mt-8">
        <CardContent className="p-6">
          <h2 className="font-semibold">Instructions</h2>
          <ol className="mt-4 space-y-4">
            {recipe.steps.map((step, i) => (
              <li key={i} className="flex gap-4 text-sm">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  {i + 1}
                </span>
                <span className="text-muted-foreground">{step}</span>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>
    </div>
  );
}
