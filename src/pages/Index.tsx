import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { WeightLossCalculator } from "@/components/WeightLossCalculator";
import { AboutShelly } from "@/components/AboutShelly";
import { Testimonials } from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="min-h-screen flex flex-col">
        <div className="flex-1 grid lg:grid-cols-2 gap-8 items-center py-12">
          <Hero />
          <div className="px-4 sm:px-6 lg:px-8">
            <WeightLossCalculator />
          </div>
        </div>
        <div className="bg-gradient-to-b from-background to-muted py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6 bg-card rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-primary mb-2">23+</div>
                <div className="text-muted-foreground">Average Pounds Lost</div>
              </div>
              <div className="p-6 bg-card rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-primary mb-2">80%</div>
                <div className="text-muted-foreground">Report Better Energy</div>
              </div>
              <div className="p-6 bg-card rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-primary mb-2">90%</div>
                <div className="text-muted-foreground">Maintain Results</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
      <AboutShelly />
      <Benefits />
    </div>
  );
};

export default Index;