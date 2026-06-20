import { Customer } from "@/types";

export const customers: Customer[] = [
  {
    id: "cust-1",
    name: "Sarah Mitchell",
    email: "sarah.mitchell@email.com",
    phone: "+1 (555) 987-6543",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    address: "742 Evergreen Terrace, NYC",
    joinDate: "2023-06-15",
    totalOrders: 47,
    preferences: ["vegetarian", "italian", "healthy"],
  },
];

export const currentCustomer = customers[0];
