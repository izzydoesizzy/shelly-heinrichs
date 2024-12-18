import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router-dom";

export const WeightLossCalculator = () => {
  const [currentWeight, setCurrentWeight] = useState("");
  const [goalWeight, setGoalWeight] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [showProgram, setShowProgram] = useState(false);

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
    const minWeeks = Math.ceil(weightToLose / 2);
    const maxWeeks = Math.ceil(weightToLose);
    
    setResult(`Based on healthy weight loss guidelines, it may take between ${minWeeks}-${maxWeeks} weeks to reach your goal weight.`);
    setShowProgram(true);
    toast.success("Calculation complete!");
  };

  const programFeatures = [
    "12 Weekly Group Coaching Calls (60 minutes each)",
    "Personalized Resources: Meal plans, recipes, and guides for blood sugar balance",
    "Exercise tips for all fitness levels",
    "Progress Tracker: Weekly updates for weight, measurements, and energy levels",
    "Community Support: Private group chat for accountability and encouragement"
  ];

  return (
    <>
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

      <Dialog open={showProgram} onOpenChange={setShowProgram}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold mb-4">Your Personalized Group Coaching Program</DialogTitle>
            <DialogDescription>
              Based on your goals, here's our comprehensive program designed to help you succeed:
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Program Features</h3>
              <div className="grid gap-3">
                {programFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Investment Options</h3>
              <div className="space-y-3">
                <div className="p-4 bg-accent rounded-lg">
                  <p className="font-medium">Full Payment</p>
                  <p className="text-2xl font-bold">$750</p>
                  <p className="text-sm text-muted-foreground">One-time payment</p>
                </div>
                <div className="p-4 bg-accent rounded-lg">
                  <p className="font-medium">Payment Plan</p>
                  <p className="text-2xl font-bold">$250/month</p>
                  <p className="text-sm text-muted-foreground">For 6 months</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                * Flexible payment options available. Contact us to discuss your needs.
              </p>
            </div>

            <div className="flex gap-4">
              <Button className="w-full" onClick={() => window.location.href = "/contact"}>
                Contact Us
              </Button>
              <Link to="/progress" className="w-full">
                <Button variant="outline" className="w-full">
                  View Progress Tracker Demo
                </Button>
              </Link>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};