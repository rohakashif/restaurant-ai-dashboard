import { Review } from "@/types";

export const reviews: Review[] = [
  {
    id: "rev-1",
    foodId: "food-1",
    customerId: "cust-1",
    customerName: "Sarah Mitchell",
    customerAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    rating: 5,
    comment: "Absolutely divine! The truffle flavor is incredible and the risotto is perfectly creamy.",
    date: "2024-12-10",
  },
  {
    id: "rev-2",
    foodId: "food-1",
    customerId: "cust-2",
    customerName: "James Chen",
    customerAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    rating: 5,
    comment: "Best risotto I've ever had. Worth every penny!",
    date: "2024-12-05",
  },
  {
    id: "rev-3",
    foodId: "food-2",
    customerId: "cust-3",
    customerName: "Emily Rodriguez",
    customerAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    rating: 5,
    comment: "The sashimi was incredibly fresh. Chef Yuki is a master!",
    date: "2024-12-18",
  },
  {
    id: "rev-4",
    foodId: "food-3",
    customerId: "cust-4",
    customerName: "Michael Brown",
    customerAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    rating: 4,
    comment: "Rich and flavorful butter chicken. A bit spicy but delicious.",
    date: "2024-12-15",
  },
  {
    id: "rev-5",
    foodId: "food-9",
    customerId: "cust-5",
    customerName: "Lisa Wang",
    customerAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
    rating: 5,
    comment: "Perfect tiramisu! Light, creamy, and the espresso flavor is spot on.",
    date: "2024-12-08",
  },
];

export function getReviewsByFoodId(foodId: string): Review[] {
  return reviews.filter((r) => r.foodId === foodId);
}
