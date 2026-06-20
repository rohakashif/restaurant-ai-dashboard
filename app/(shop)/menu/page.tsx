"use client";

import { useMemo, useState } from "react";
import { foods } from "@/data/foods";
import { useDebounce } from "@/hooks/use-debounce";
import { FilterBar } from "@/components/menu/FilterBar";
import { FoodGrid } from "@/components/menu/FoodGrid";
import { PageHeader } from "@/components/shared/PageHeader";

export default function MenuPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("popular");
  const debouncedSearch = useDebounce(search);

  const filteredFoods = useMemo(() => {
    let result = [...foods];

    if (category !== "All") {
      result = result.filter((f) => f.category === category);
    }

    if (debouncedSearch) {
      const q = debouncedSearch.toLowerCase();
      result = result.filter(
        (f) =>
          f.name.toLowerCase().includes(q) ||
          f.description.toLowerCase().includes(q) ||
          f.tags.some((t) => t.includes(q))
      );
    }

    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        result.sort((a, b) => (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0));
    }

    return result;
  }, [category, debouncedSearch, sortBy]);

  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader
        title="Our Menu"
        description="Discover delicious dishes from top restaurants"
      />
      <FilterBar
        search={search}
        onSearchChange={setSearch}
        category={category}
        onCategoryChange={setCategory}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />
      <div className="mt-8">
        <FoodGrid foods={filteredFoods} />
      </div>
    </div>
  );
}
