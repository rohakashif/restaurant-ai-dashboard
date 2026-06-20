export const APP_NAME = "CulinaAI";
export const APP_DESCRIPTION =
  "Premium AI-powered restaurant management and food ordering platform";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/ai-recommendations", label: "AI Picks" },
  { href: "/blog", label: "Recipes" },
  { href: "/contact", label: "Contact" },
];

export const DASHBOARD_LINKS = [
  { href: "/dashboard", label: "Dashboard", icon: "LayoutDashboard" },
  { href: "/management", label: "Management", icon: "Settings" },
  { href: "/menu", label: "Menu", icon: "UtensilsCrossed" },
  { href: "/orders", label: "Orders", icon: "ShoppingBag" },
];

export const FOOD_CATEGORIES = [
  "All",
  "Appetizers",
  "Mains",
  "Desserts",
  "Drinks",
  "Salads",
] as const;

export const ORDER_STATUSES = [
  "pending",
  "confirmed",
  "preparing",
  "ready",
  "delivering",
  "delivered",
] as const;
