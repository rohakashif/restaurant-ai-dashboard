"use client";

import { usePathname } from "next/navigation";
import { DashboardSidebar } from "@/components/layout/DashboardSidebar";
import { ThemeToggle } from "@/components/shared/ThemeToggle";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen">
      <DashboardSidebar pathname={pathname} />
      <div className="flex-1">
        <header className="flex h-16 items-center justify-between border-b px-6">
          <div />
          <ThemeToggle />
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
