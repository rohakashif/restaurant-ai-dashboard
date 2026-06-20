"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Check, CreditCard, MapPin } from "lucide-react";
import { checkoutSchema, CheckoutFormData } from "@/lib/validations";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store/cart-store";
import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";

const steps = [
  { id: 1, title: "Delivery", icon: MapPin },
  { id: 2, title: "Payment", icon: CreditCard },
  { id: 3, title: "Confirm", icon: Check },
];

export default function CheckoutPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const items = useCartStore((s) => s.items);
  const total = useCartStore((s) => s.getTotal());
  const clearCart = useCartStore((s) => s.clearCart);

  const form = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      zipCode: "",
    },
  });

  const deliveryFee = 4.99;
  const tax = total * 0.08;
  const grandTotal = total + deliveryFee + tax;

  const handleNext = async () => {
    if (step === 1) {
      const valid = await form.trigger(["name", "email", "phone", "address", "city", "zipCode"]);
      if (valid) setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };

  const handleConfirm = () => {
    clearCart();
    toast.success("Order placed successfully!");
    router.push("/tracking");
  };

  if (items.length === 0 && step < 3) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold">No items to checkout</h1>
        <Button variant="gradient" className="mt-4" asChild>
          <a href="/menu">Browse Menu</a>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader title="Checkout" description="Complete your order" />

      <div className="mb-8 flex justify-center gap-4">
        {steps.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.id}
              className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium ${
                step >= s.id
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground"
              }`}
            >
              <Icon className="h-4 w-4" />
              {s.title}
            </div>
          );
        })}
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {step === 1 && (
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Delivery Information</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <div className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Address</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="grid gap-4 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>City</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="zipCode"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Zip Code</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </Form>
              </CardContent>
            </Card>
          )}

          {step === 2 && (
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-xl border-2 border-primary bg-primary/5 p-4">
                  <div className="flex items-center gap-3">
                    <CreditCard className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Credit Card (Demo)</p>
                      <p className="text-sm text-muted-foreground">
                        This is a demo checkout — no real payment required
                      </p>
                    </div>
                  </div>
                </div>
                <Input placeholder="Card Number" value="4242 4242 4242 4242" readOnly />
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="MM/YY" value="12/28" readOnly />
                  <Input placeholder="CVC" value="123" readOnly />
                </div>
              </CardContent>
            </Card>
          )}

          {step === 3 && (
            <Card className="glass-card">
              <CardContent className="flex flex-col items-center p-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10">
                  <Check className="h-8 w-8 text-emerald-500" />
                </div>
                <h2 className="mt-4 text-2xl font-bold">Ready to place order?</h2>
                <p className="mt-2 text-muted-foreground">
                  Review your order details and confirm
                </p>
                <Button variant="gradient" size="lg" className="mt-6" onClick={handleConfirm}>
                  Place Order — {formatPrice(grandTotal)}
                </Button>
              </CardContent>
            </Card>
          )}

          {step < 3 && (
            <Button variant="gradient" className="mt-4" onClick={handleNext}>
              Continue
            </Button>
          )}
        </div>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {items.map((item) => (
              <div key={item.foodId} className="flex justify-between text-sm">
                <span>{item.name} x{item.quantity}</span>
                <span>{formatPrice(item.price * item.quantity)}</span>
              </div>
            ))}
            <Separator />
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Delivery</span>
              <span>{formatPrice(deliveryFee)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Tax</span>
              <span>{formatPrice(tax)}</span>
            </div>
            <Separator />
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>{formatPrice(grandTotal)}</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
