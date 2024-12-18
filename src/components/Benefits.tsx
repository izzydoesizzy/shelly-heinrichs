import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, Brain, Heart, Battery } from "lucide-react";

const benefits = [
  {
    title: "Balance Blood Sugar",
    description: "Learn how to naturally stabilize your blood sugar levels and reduce cravings.",
    icon: Scale,
  },
  {
    title: "Transform Mindset",
    description: "Develop a healthy relationship with food and break free from diet mentality.",
    icon: Brain,
  },
  {
    title: "Sustainable Results",
    description: "Create lasting changes through small, consistent steps that add up over time.",
    icon: Heart,
  },
  {
    title: "Restore Energy",
    description: "Feel energized throughout the day without relying on caffeine or sugar.",
    icon: Battery,
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
          <p className="mt-4 text-xl text-muted-foreground">
            A holistic approach to sustainable weight loss and wellness
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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