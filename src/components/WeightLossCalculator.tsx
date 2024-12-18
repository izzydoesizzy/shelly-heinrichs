import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

export const WeightLossCalculator = () => {
  const [currentWeight, setCurrentWeight] = useState("");
  const [goalWeight, setGoalWeight] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const calculateTimeline = () => {
    const current = parseFloat(currentWeight);
    const goal = parseFloat(goalWeight);
    
    if (isNaN(current) || isNaN(goal)) {
      toast.error("Please enter valid numbers for weight");
      return;
    }
    
    if (goal >= current) {
      toast.error("Goal weight should be less than current weight");
      return;
    }

    const weightToLose = current - goal;
    // Assuming healthy weight loss of 1-2 pounds per week
    const minWeeks = Math.ceil(weightToLose / 2);
    const maxWeeks = Math.ceil(weightToLose);
    
    setResult(`Based on healthy weight loss guidelines, it may take between ${minWeeks}-${maxWeeks} weeks to reach your goal weight.`);
    toast.success("Calculation complete!");
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Weight Loss Timeline Calculator</CardTitle>
        <CardDescription>
          Calculate how long it might take to reach your goal weight in a healthy, sustainable way.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Current Weight (lbs)</label>
          <Input
            type="number"
            placeholder="Enter current weight"
            value={currentWeight}
            onChange={(e) => setCurrentWeight(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Goal Weight (lbs)</label>
          <Input
            type="number"
            placeholder="Enter goal weight"
            value={goalWeight}
            onChange={(e) => setGoalWeight(e.target.value)}
          />
        </div>
        <Button 
          className="w-full"
          onClick={calculateTimeline}
        >
          Calculate Timeline
        </Button>
        {result && (
          <div className="mt-4 p-4 bg-accent rounded-lg text-accent-foreground">
            {result}
          </div>
        )}
      </CardContent>
    </Card>
  );
};