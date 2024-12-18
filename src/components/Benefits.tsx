import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, Brain, Heart, Battery, Leaf } from "lucide-react";

const benefits = [
  {
    title: "Nutrition",
    description: "Learn to nourish your body with whole, unprocessed foods that stabilize blood sugar and reduce cravings.",
    icon: Leaf,
  },
  {
    title: "Mindset & Habits",
    description: "Transform your relationship with food by focusing on abundance rather than restriction.",
    icon: Brain,
  },
  {
    title: "Sustainable Results",
    description: "Create lasting changes through small, consistent steps that compound over time.",
    icon: Heart,
  },
  {
    title: "Energy & Vitality",
    description: "Feel energized throughout the day without relying on caffeine or sugar crashes.",
    icon: Battery,
  },
  {
    title: "Blood Sugar Balance",
    description: "Naturally stabilize your blood sugar levels to reduce cravings and support weight loss.",
    icon: Scale,
  },
];

export const Benefits = () => {
  return (
    <div className="py-12 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            The Empowered Wellness Method
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            A holistic approach that combines nutrition science with sustainable lifestyle changes to help you achieve lasting results.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <benefit.icon className="h-8 w-8 text-primary" />
                <CardTitle className="mt-4">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{benefit.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};