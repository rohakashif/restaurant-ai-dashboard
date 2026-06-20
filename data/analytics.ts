import { AnalyticsData } from "@/types";

export const analyticsData: AnalyticsData = {
  revenue: [
    { month: "Jul", revenue: 12400, orders: 320 },
    { month: "Aug", revenue: 14200, orders: 380 },
    { month: "Sep", revenue: 13800, orders: 350 },
    { month: "Oct", revenue: 16500, orders: 420 },
    { month: "Nov", revenue: 18200, orders: 465 },
    { month: "Dec", revenue: 21500, orders: 540 },
  ],
  popularItems: [
    { name: "Butter Chicken", orders: 567, revenue: 10758 },
    { name: "Omakase Sashimi", orders: 412, revenue: 18948 },
    { name: "Tiramisu", orders: 312, revenue: 3739 },
    { name: "Truffle Risotto", orders: 234, revenue: 6787 },
    { name: "Margherita Pizza", orders: 289, revenue: 4911 },
  ],
  dailyOrders: [
    { day: "Mon", orders: 68 },
    { day: "Tue", orders: 72 },
    { day: "Wed", orders: 85 },
    { day: "Thu", orders: 78 },
    { day: "Fri", orders: 110 },
    { day: "Sat", orders: 125 },
    { day: "Sun", orders: 98 },
  ],
  categoryBreakdown: [
    { category: "Mains", value: 45 },
    { category: "Appetizers", value: 20 },
    { category: "Desserts", value: 15 },
    { category: "Drinks", value: 10 },
    { category: "Salads", value: 10 },
  ],
};
