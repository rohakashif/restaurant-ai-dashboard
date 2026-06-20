"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Shield,
  Zap,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { foods } from "@/data/foods";
import { FoodCard } from "@/components/menu/FoodCard";

const features = [
  {
    icon: Sparkles,
    title: "AI Recommendations",
    description: "Personalized dish suggestions powered by machine learning.",
  },
  {
    icon: TrendingUp,
    title: "Real-time Analytics",
    description: "Track revenue, orders, and performance with live dashboards.",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "End-to-end encrypted checkout with multiple payment options.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Optimized routing ensures your food arrives fresh and fast.",
  },
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Restaurant Owner",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    text: "CulinaAI transformed how we manage orders and understand our customers.",
  },
  {
    name: "James Chen",
    role: "Head Chef",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    text: "The AI recommendations increased our repeat orders by 40% in just two months.",
  },
  {
    name: "Emily Rodriguez",
    role: "Food Blogger",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    text: "Beautiful interface, seamless ordering experience. My readers love it!",
  },
];

export default function LandingPage() {
  return (
  <div className="relative overflow-hidden">
    <div className="orb -left-32 top-20 h-96 w-96 bg-violet-500" />
    <div className="orb -right-32 top-60 h-80 w-80 bg-amber-400" />

    {/* Hero */}
    <section className="container mx-auto px-4 py-20 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-4xl text-center"
      >
        <Badge variant="secondary" className="mb-6">
          <Sparkles className="mr-1 h-3 w-3" />
          AI-Powered Food Platform
        </Badge>
        <h1 className="font-display text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          The Future of{" "}
          <span className="gradient-text">Restaurant</span> Management
        </h1>
        <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
          Premium SaaS dashboard for restaurants. Manage menus, track orders,
          delight customers with AI recommendations, and grow your business.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button variant="gradient" size="lg" asChild>
            <Link href="/menu">
              Explore Menu
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/dashboard">View Dashboard</Link>
          </Button>
        </div>
        <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            <span>4.9 Rating</span>
          </div>
          <div>500+ Restaurants</div>
          <div>50K+ Orders</div>
        </div>
      </motion.div>
    </section>

    {/* Features */}
    <section className="container mx-auto px-4 py-20">
      <div className="text-center">
        <h2 className="font-display text-3xl font-bold">Why CulinaAI?</h2>
        <p className="mt-2 text-muted-foreground">
          Everything you need to run a modern restaurant
        </p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card h-full">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Popular Dishes */}
    <section className="container mx-auto px-4 py-20">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display text-3xl font-bold">Popular Dishes</h2>
          <p className="mt-2 text-muted-foreground">Trending this week</p>
        </div>
        <Button variant="outline" asChild>
          <Link href="/menu">View All</Link>
        </Button>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {foods.filter((f) => f.isPopular).map((food, i) => (
          <FoodCard key={food.id} food={food} index={i} />
        ))}
      </div>
    </section>

    {/* Testimonials */}
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-center font-display text-3xl font-bold">
        Loved by Restaurants
      </h2>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card h-full">
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground">&ldquo;{t.text}&rdquo;</p>
                <div className="mt-4 flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={t.avatar} />
                    <AvatarFallback>{t.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="container mx-auto px-4 py-20">
      <Card className="glass-card overflow-hidden">
        <CardContent className="flex flex-col items-center p-12 text-center">
          <h2 className="font-display text-3xl font-bold">
            Ready to transform your restaurant?
          </h2>
          <p className="mt-3 max-w-lg text-muted-foreground">
            Join hundreds of restaurants already using CulinaAI to streamline
            operations and delight customers.
          </p>
          <Button variant="gradient" size="lg" className="mt-8" asChild>
            <Link href="/register">
              Get Started Free
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </section>
  </div>
  );
}
