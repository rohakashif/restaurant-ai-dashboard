import {
  DollarSign,
  ShoppingBag,
  Users,
  TrendingUp,
} from "lucide-react";
import { analyticsData } from "@/data/analytics";
import { PageHeader } from "@/components/shared/PageHeader";
import { StatCard } from "@/components/dashboard/StatCard";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { OrderChart } from "@/components/dashboard/OrderChart";
import { RecentOrders } from "@/components/dashboard/RecentOrders";

export default function DashboardPage() {
  const latestRevenue = analyticsData.revenue[analyticsData.revenue.length - 1];

  return (
    <div>
      <PageHeader
        title="Restaurant Dashboard"
        description="Overview of your restaurant performance"
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Revenue"
          value={`$${latestRevenue.revenue.toLocaleString()}`}
          change="+12.5% from last month"
          trend="up"
          icon={DollarSign}
        />
        <StatCard
          title="Total Orders"
          value={latestRevenue.orders.toString()}
          change="+8.2% from last month"
          trend="up"
          icon={ShoppingBag}
        />
        <StatCard
          title="Active Customers"
          value="1,284"
          change="+5.1% from last month"
          trend="up"
          icon={Users}
        />
        <StatCard
          title="Avg. Order Value"
          value="$39.80"
          change="+3.4% from last month"
          trend="up"
          icon={TrendingUp}
        />
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <RevenueChart />
        <OrderChart />
      </div>
      <div className="mt-8">
        <RecentOrders />
      </div>
    </div>
  );
}
