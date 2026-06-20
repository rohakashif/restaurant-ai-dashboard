"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Settings,
  UtensilsCrossed,
  ShoppingBag,
  Sparkles,
  User,
  MapPin,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { APP_NAME } from "@/lib/constants";

const sidebarLinks = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/management", label: "Management", icon: Settings },
  { href: "/menu", label: "Menu", icon: UtensilsCrossed },
  { href: "/tracking", label: "Orders", icon: ShoppingBag },
  { href: "/ai-recommendations", label: "AI Picks", icon: Sparkles },
  { href: "/profile", label: "Profile", icon: User },
  { href: "/contact", label: "Contact", icon: MapPin },
];

interface DashboardSidebarProps {
  pathname?: string;
}

export function DashboardSidebar({ pathname = "" }: DashboardSidebarProps) {
  return (
    <aside className="hidden w-64 flex-col border-r bg-card lg:flex">
      <div className="flex h-16 items-center gap-2 border-b px-6">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary">
          <span className="text-xs font-bold text-white">C</span>
        </div>
        <span className="font-display font-bold">{APP_NAME}</span>
      </div>
      <nav className="flex-1 space-y-1 p-4">
        {sidebarLinks.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Icon className="h-4 w-4" />
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
