import { Order } from "@/types";

export const orders: Order[] = [
  {
    id: "ORD-2024-001",
    customerId: "cust-1",
    restaurantId: "rest-2",
    items: [
      { foodId: "food-2", name: "Omakase Sashimi Platter", quantity: 1, price: 45.99 },
      { foodId: "food-6", name: "Edamame", quantity: 2, price: 7.99 },
      { foodId: "food-10", name: "Mochi Ice Cream", quantity: 1, price: 9.99 },
    ],
    total: 70.98,
    status: "delivering",
    createdAt: "2024-12-18T18:30:00",
    deliveryAddress: "742 Evergreen Terrace, NYC",
    timeline: [
      { status: "pending", timestamp: "2024-12-18T18:30:00", message: "Order placed successfully" },
      { status: "confirmed", timestamp: "2024-12-18T18:32:00", message: "Restaurant confirmed your order" },
      { status: "preparing", timestamp: "2024-12-18T18:45:00", message: "Chef is preparing your meal" },
      { status: "ready", timestamp: "2024-12-18T19:15:00", message: "Order is ready for pickup" },
      { status: "delivering", timestamp: "2024-12-18T19:25:00", message: "Driver is on the way" },
    ],
  },
  {
    id: "ORD-2024-002",
    customerId: "cust-1",
    restaurantId: "rest-3",
    items: [
      { foodId: "food-3", name: "Butter Chicken", quantity: 2, price: 18.99 },
      { foodId: "food-7", name: "Samosas (3pc)", quantity: 1, price: 8.99 },
    ],
    total: 52.97,
    status: "delivered",
    createdAt: "2024-12-15T12:00:00",
    deliveryAddress: "742 Evergreen Terrace, NYC",
    timeline: [
      { status: "pending", timestamp: "2024-12-15T12:00:00", message: "Order placed successfully" },
      { status: "confirmed", timestamp: "2024-12-15T12:02:00", message: "Restaurant confirmed your order" },
      { status: "preparing", timestamp: "2024-12-15T12:15:00", message: "Chef is preparing your meal" },
      { status: "ready", timestamp: "2024-12-15T12:45:00", message: "Order is ready" },
      { status: "delivering", timestamp: "2024-12-15T12:50:00", message: "Driver is on the way" },
      { status: "delivered", timestamp: "2024-12-15T13:10:00", message: "Order delivered successfully" },
    ],
  },
  {
    id: "ORD-2024-003",
    customerId: "cust-1",
    restaurantId: "rest-1",
    items: [
      { foodId: "food-1", name: "Truffle Risotto", quantity: 1, price: 28.99 },
      { foodId: "food-5", name: "Caesar Salad", quantity: 1, price: 12.99 },
    ],
    total: 41.98,
    status: "delivered",
    createdAt: "2024-12-10T19:00:00",
    deliveryAddress: "742 Evergreen Terrace, NYC",
    timeline: [
      { status: "pending", timestamp: "2024-12-10T19:00:00", message: "Order placed successfully" },
      { status: "confirmed", timestamp: "2024-12-10T19:02:00", message: "Restaurant confirmed your order" },
      { status: "preparing", timestamp: "2024-12-10T19:15:00", message: "Chef is preparing your meal" },
      { status: "ready", timestamp: "2024-12-10T19:40:00", message: "Order is ready" },
      { status: "delivering", timestamp: "2024-12-10T19:45:00", message: "Driver is on the way" },
      { status: "delivered", timestamp: "2024-12-10T20:05:00", message: "Order delivered successfully" },
    ],
  },
];

export const activeOrder = orders[0];
