export type FoodCategory =
  | "Appetizers"
  | "Mains"
  | "Desserts"
  | "Drinks"
  | "Salads";

export interface Nutrition {
  calories: number;
  protein: string;
  carbs: string;
  fat: string;
}

export interface Food {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: FoodCategory;
  restaurantId: string;
  chefId: string;
  rating: number;
  reviewCount: number;
  tags: string[];
  nutrition: Nutrition;
  isPopular?: boolean;
  isNew?: boolean;
}

export interface Restaurant {
  id: string;
  name: string;
  description: string;
  image: string;
  cuisine: string;
  rating: number;
  location: string;
  openHours: string;
  phone: string;
}

export interface Chef {
  id: string;
  name: string;
  image: string;
  specialty: string;
  restaurantId: string;
  experience: string;
  rating: number;
}

export type OrderStatus =
  | "pending"
  | "confirmed"
  | "preparing"
  | "ready"
  | "delivering"
  | "delivered";

export interface OrderTimelineEvent {
  status: OrderStatus;
  timestamp: string;
  message: string;
}

export interface Order {
  id: string;
  customerId: string;
  restaurantId: string;
  items: { foodId: string; name: string; quantity: number; price: number }[];
  total: number;
  status: OrderStatus;
  createdAt: string;
  deliveryAddress: string;
  timeline: OrderTimelineEvent[];
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  address: string;
  joinDate: string;
  totalOrders: number;
  preferences: string[];
}

export interface Review {
  id: string;
  foodId: string;
  customerId: string;
  customerName: string;
  customerAvatar: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Recipe {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  author: string;
  cookTime: string;
  difficulty: "Easy" | "Medium" | "Hard";
  category: string;
  ingredients: string[];
  steps: string[];
  publishedAt: string;
}

export interface AnalyticsData {
  revenue: { month: string; revenue: number; orders: number }[];
  popularItems: { name: string; orders: number; revenue: number }[];
  dailyOrders: { day: string; orders: number }[];
  categoryBreakdown: { category: string; value: number }[];
}

export interface CartItem {
  foodId: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export interface AIRecommendation {
  id: string;
  foodId: string;
  reason: string;
  confidence: number;
  matchTags: string[];
}
