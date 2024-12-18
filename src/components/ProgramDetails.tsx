import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

export const ProgramDetails = () => {
  const features = [
    "Weekly group coaching calls for personalized guidance and support",
    "Custom meal plans tailored to your preferences and lifestyle",
    "Blood sugar balancing protocols and education",
    "Private community support for accountability",
    "Access to exclusive recipes and resources",
    "Progress tracking tools and templates",
  ];

  return (
    <div className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Your Journey to Sustainable Weight Loss
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            A comprehensive 12-week program designed to transform your relationship with food
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">What You'll Get</h3>
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-1" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Program Timeline</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium">Weeks 1-4: Foundation</h4>
                <p className="text-muted-foreground">Understanding blood sugar, establishing healthy habits, and creating your personalized plan.</p>
              </div>
              <div>
                <h4 className="font-medium">Weeks 5-8: Implementation</h4>
                <p className="text-muted-foreground">Putting your plan into action, addressing challenges, and refining your approach.</p>
              </div>
              <div>
                <h4 className="font-medium">Weeks 9-12: Integration</h4>
                <p className="text-muted-foreground">Solidifying habits, preparing for long-term success, and creating your maintenance plan.</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};