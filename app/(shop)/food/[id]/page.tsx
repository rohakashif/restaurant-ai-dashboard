import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Star, ArrowLeft } from "lucide-react";
import { getFoodById, getRelatedFoods } from "@/data/foods";
import { getReviewsByFoodId } from "@/data/reviews";
import { chefs } from "@/data/chefs";
import { restaurants } from "@/data/restaurants";
import { formatPrice } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FoodCard } from "@/components/menu/FoodCard";
import { AddToCartButton } from "@/components/menu/AddToCartButton";

export default async function FoodDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const food = getFoodById(id);

  if (!food) notFound();

  const reviews = getReviewsByFoodId(id);
  const related = getRelatedFoods(id);
  const chef = chefs.find((c) => c.id === food.chefId);
  const restaurant = restaurants.find((r) => r.id === food.restaurantId);

  return (
    <div className="container mx-auto px-4 py-12">
      <Button variant="ghost" asChild className="mb-6">
        <Link href="/menu">
          <ArrowLeft className="h-4 w-4" />
          Back to Menu
        </Link>
      </Button>
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="relative h-64 overflow-hidden rounded-2xl sm:h-96">
          <Image
            src={food.image}
            alt={food.name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
        <div>
          <div className="flex flex-wrap gap-2">
            <Badge>{food.category}</Badge>
            {food.isPopular && <Badge variant="warning">Popular</Badge>}
            {food.isNew && <Badge variant="success">New</Badge>}
          </div>
          <h1 className="mt-4 font-display text-3xl font-bold">{food.name}</h1>
          <div className="mt-2 flex items-center gap-2">
            <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
            <span className="font-medium">{food.rating}</span>
            <span className="text-muted-foreground">
              ({food.reviewCount} reviews)
            </span>
          </div>
          <p className="mt-4 text-muted-foreground">{food.description}</p>
          <p className="mt-6 text-3xl font-bold">{formatPrice(food.price)}</p>
          <AddToCartButton food={food} />
          <Separator className="my-6" />
          <h3 className="font-semibold">Nutrition</h3>
          <div className="mt-3 grid grid-cols-4 gap-4">
            <div className="rounded-xl bg-muted p-3 text-center">
              <p className="text-xs text-muted-foreground">Calories</p>
              <p className="font-semibold">{food.nutrition.calories}</p>
            </div>
            <div className="rounded-xl bg-muted p-3 text-center">
              <p className="text-xs text-muted-foreground">Protein</p>
              <p className="font-semibold">{food.nutrition.protein}</p>
            </div>
            <div className="rounded-xl bg-muted p-3 text-center">
              <p className="text-xs text-muted-foreground">Carbs</p>
              <p className="font-semibold">{food.nutrition.carbs}</p>
            </div>
            <div className="rounded-xl bg-muted p-3 text-center">
              <p className="text-xs text-muted-foreground">Fat</p>
              <p className="font-semibold">{food.nutrition.fat}</p>
            </div>
          </div>
          {chef && restaurant && (
            <Card className="mt-6 glass-card">
              <CardContent className="flex items-center gap-4 p-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={chef.image} />
                  <AvatarFallback>{chef.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{chef.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {chef.specialty} at {restaurant.name}
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {reviews.length > 0 && (
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold">Reviews</h2>
          <div className="mt-6 space-y-4">
            {reviews.map((review) => (
              <Card key={review.id} className="glass-card">
                <CardContent className="flex gap-4 p-4">
                  <Avatar>
                    <AvatarImage src={review.customerAvatar} />
                    <AvatarFallback>{review.customerName[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{review.customerName}</p>
                      <div className="flex">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {review.comment}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold">You might also like</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((f, i) => (
              <FoodCard key={f.id} food={f} index={i} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
