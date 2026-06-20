"use client";

import { motion } from "framer-motion";
import { MapPin, Check } from "lucide-react";
import { activeOrder } from "@/data/orders";
import { restaurants } from "@/data/restaurants";
import { formatPrice, formatDate } from "@/lib/utils";
import { PageHeader } from "@/components/shared/PageHeader";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

const statusProgress: Record<string, number> = {
  pending: 10,
  confirmed: 25,
  preparing: 50,
  ready: 70,
  delivering: 85,
  delivered: 100,
};

export default function TrackingPage() {
  const order = activeOrder;
  const restaurant = restaurants.find((r) => r.id === order.restaurantId);
  const progress = statusProgress[order.status] || 0;

  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader
        title="Order Tracking"
        description={`Tracking order ${order.id}`}
      />

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <Card className="glass-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Order Status</CardTitle>
                <Badge variant="default">{order.status}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <Progress value={progress} className="h-3" />
              <p className="mt-2 text-sm text-muted-foreground">
                {progress}% complete
              </p>
              <div className="mt-8 space-y-6">
                {order.timeline.map((event, i) => (
                  <motion.div
                    key={event.status}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                        i < order.timeline.length
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      }`}
                    >
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium">{event.message}</p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(event.timestamp).toLocaleTimeString()}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardContent className="flex h-48 items-center justify-center p-6">
              <div className="text-center">
                <MapPin className="mx-auto h-12 w-12 text-primary" />
                <p className="mt-3 font-medium">Live Map</p>
                <p className="text-sm text-muted-foreground">
                  Driver location preview (demo)
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Order Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Restaurant</p>
              <p className="font-medium">{restaurant?.name}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Order Date</p>
              <p className="font-medium">{formatDate(order.createdAt)}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Delivery Address</p>
              <p className="font-medium">{order.deliveryAddress}</p>
            </div>
            <Separator />
            {order.items.map((item) => (
              <div key={item.foodId} className="flex justify-between text-sm">
                <span>{item.name} x{item.quantity}</span>
                <span>{formatPrice(item.price * item.quantity)}</span>
              </div>
            ))}
            <Separator />
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>{formatPrice(order.total)}</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
