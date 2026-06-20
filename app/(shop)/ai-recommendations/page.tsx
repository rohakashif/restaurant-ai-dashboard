"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { aiRecommendations } from "@/data/ai-recommendations";
import { getFoodById } from "@/data/foods";
import { currentCustomer } from "@/data/customers";
import { RecommendationCard } from "@/components/ai/RecommendationCard";
import { PageHeader } from "@/components/shared/PageHeader";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function AIRecommendationsPage() {
  const recommendations = aiRecommendations
    .map((rec) => {
      const food = getFoodById(rec.foodId);
      return food ? { rec, food } : null;
    })
    .filter(Boolean) as { rec: typeof aiRecommendations[0]; food: NonNullable<ReturnType<typeof getFoodById>> }[];

  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader
        title="AI Recommendations"
        description="Personalized picks based on your taste profile"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card className="glass-card mb-8 overflow-hidden">
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl gradient-primary">
              <Sparkles className="h-7 w-7 text-white" />
            </div>
            <div>
              <h2 className="font-semibold">
                Hi {currentCustomer.name.split(" ")[0]}! Here&apos;s what we think you&apos;ll love
              </h2>
              <div className="text-sm text-muted-foreground">
                Based on your preferences:
                {currentCustomer.preferences.map((p) => (
                  <Badge key={p} variant="outline" className="ml-1">{p}</Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recommendations.map(({ rec, food }, i) => (
          <RecommendationCard
            key={rec.id}
            recommendation={rec}
            food={food}
            index={i}
          />
        ))}
      </div>
    </div>
  );
}
