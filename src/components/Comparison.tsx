import { Card, CardContent } from "@/components/ui/card";
import { X, Check } from "lucide-react";

export const Comparison = () => {
  return (
    <div className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Break Free from the Diet Cycle
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Stop the endless cycle of restrictive diets and discover a sustainable approach
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-destructive/30">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-6 text-destructive">Traditional Diets</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <X className="h-5 w-5 text-destructive mt-1" />
                  <span>Restrictive eating patterns that leave you hungry</span>
                </div>
                <div className="flex items-start gap-3">
                  <X className="h-5 w-5 text-destructive mt-1" />
                  <span>Quick fixes that lead to eventual weight regain</span>
                </div>
                <div className="flex items-start gap-3">
                  <X className="h-5 w-5 text-destructive mt-1" />
                  <span>One-size-fits-all approaches that ignore your body's needs</span>
                </div>
                <div className="flex items-start gap-3">
                  <X className="h-5 w-5 text-destructive mt-1" />
                  <span>Constant hunger and cravings</span>
                </div>
                <div className="flex items-start gap-3">
                  <X className="h-5 w-5 text-destructive mt-1" />
                  <span>Guilt and shame around food choices</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-primary">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-6 text-primary">Our Approach</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-1" />
                  <span>Sustainable habits that fit your lifestyle</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-1" />
                  <span>Blood sugar balancing for natural appetite control</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-1" />
                  <span>Personalized approach based on your body's needs</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-1" />
                  <span>Stable energy throughout the day</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-1" />
                  <span>Freedom from food obsession</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};