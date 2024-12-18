import { Button } from "@/components/ui/button";

export const CallToAction = () => {
  return (
    <div className="py-16 bg-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-6">
          The Choice Is Yours
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          You can continue struggling with diets that don't work, or you can choose a proven approach that will help you achieve lasting results. The time to transform your relationship with food is now.
        </p>
        <Button 
          size="lg"
          onClick={() => window.open("https://calendly.com/clearcareer/discovery-call", "_blank")}
        >
          Apply to Join Today!
        </Button>
      </div>
    </div>
  );
};