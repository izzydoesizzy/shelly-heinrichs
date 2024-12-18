import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-background">
      <div className="relative pt-16 pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              <span className="block">Finding Freedom From</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
                The Diet Roller Coaster
              </span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-base text-muted-foreground sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
              Balance your blood sugar naturally, lose weight without hunger or guilt, and restore your energy with the Empowered Wellness Method.
            </p>
            <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Button className="w-full" size="lg">
                  Get Started Today
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};