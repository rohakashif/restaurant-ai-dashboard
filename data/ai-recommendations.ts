import { AIRecommendation } from "@/types";

export const aiRecommendations: AIRecommendation[] = [
  {
    id: "ai-1",
    foodId: "food-1",
    reason: "Based on your love for premium Italian dishes and vegetarian options",
    confidence: 94,
    matchTags: ["premium", "vegetarian", "italian"],
  },
  {
    id: "ai-2",
    foodId: "food-5",
    reason: "Perfect light complement to your usual mains — great for your healthy preferences",
    confidence: 88,
    matchTags: ["salad", "light", "healthy"],
  },
  {
    id: "ai-3",
    foodId: "food-9",
    reason: "You enjoyed Italian mains — this classic dessert pairs perfectly",
    confidence: 91,
    matchTags: ["dessert", "italian"],
  },
  {
    id: "ai-4",
    foodId: "food-4",
    reason: "Trending among users with similar taste profiles this week",
    confidence: 82,
    matchTags: ["italian", "vegetarian"],
  },
  {
    id: "ai-5",
    foodId: "food-8",
    reason: "Great appetizer to start your Italian dining experience",
    confidence: 79,
    matchTags: ["appetizer", "vegetarian", "italian"],
  },
];
