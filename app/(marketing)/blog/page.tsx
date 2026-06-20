import { RecipeCard } from "@/components/blog/RecipeCard";
import { PageHeader } from "@/components/shared/PageHeader";
import { recipes } from "@/data/recipes";

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader
        title="Recipes & Blog"
        description="Discover chef-curated recipes and culinary inspiration"
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe, i) => (
          <RecipeCard key={recipe.id} recipe={recipe} index={i} />
        ))}
      </div>
    </div>
  );
}
