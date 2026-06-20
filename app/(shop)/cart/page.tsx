"use client";

import { useCartStore } from "@/store/cart-store";
import { CartItemRow } from "@/components/cart/CartItem";
import { CartSummary } from "@/components/cart/CartSummary";
import { EmptyState } from "@/components/shared/EmptyState";
import { PageHeader } from "@/components/shared/PageHeader";

export default function CartPage() {
  const items = useCartStore((s) => s.items);

  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader title="Your Cart" description="Review your order before checkout" />
      {items.length === 0 ? (
        <EmptyState
          title="Your cart is empty"
          description="Browse our menu and add some delicious dishes!"
          actionLabel="Browse Menu"
          href="/menu"
        />
      ) : (
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            {items.map((item) => (
              <CartItemRow key={item.foodId} item={item} />
            ))}
          </div>
          <CartSummary />
        </div>
      )}
    </div>
  );
}
