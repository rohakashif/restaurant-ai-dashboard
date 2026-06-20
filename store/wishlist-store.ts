import { create } from "zustand";
import { persist } from "zustand/middleware";

interface WishlistStore {
  items: string[];
  add: (foodId: string) => void;
  remove: (foodId: string) => void;
  toggle: (foodId: string) => void;
  isInWishlist: (foodId: string) => boolean;
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],
      add: (foodId) => {
        if (!get().items.includes(foodId)) {
          set({ items: [...get().items, foodId] });
        }
      },
      remove: (foodId) => {
        set({ items: get().items.filter((id) => id !== foodId) });
      },
      toggle: (foodId) => {
        if (get().isInWishlist(foodId)) {
          get().remove(foodId);
        } else {
          get().add(foodId);
        }
      },
      isInWishlist: (foodId) => get().items.includes(foodId),
    }),
    { name: "culina-wishlist" }
  )
);
