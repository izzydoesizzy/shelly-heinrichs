import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="relative">
        <div className="text-left">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            <span className="block">Finding Freedom From</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
              The Diet Roller Coaster
            </span>
          </h1>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg md:mt-5 md:text-xl max-w-md">
            Balance your blood sugar naturally, lose weight without hunger or guilt, and restore your energy with the Empowered Wellness Method.
          </p>
          <div className="mt-5 sm:mt-8">
            <Button className="w-full sm:w-auto" size="lg">
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};