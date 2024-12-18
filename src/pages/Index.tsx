import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { WeightLossCalculator } from "@/components/WeightLossCalculator";
import { AboutShelly } from "@/components/AboutShelly";
import { Testimonials } from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutShelly />
      <div className="py-12 bg-gradient-to-b from-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">
              Calculate Your Journey
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Get a personalized timeline for reaching your weight loss goals
            </p>
          </div>
          <WeightLossCalculator />
        </div>
      </div>
      <Benefits />
      <Testimonials />
    </div>
  );
};

export default Index;