import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const GoalMetrics = ({ 
  startWeight,
  currentWeight,
  goalWeight 
}: { 
  startWeight: number;
  currentWeight: number;
  goalWeight: number;
}) => {
  const totalWeightToLose = startWeight - goalWeight;
  const weightLostSoFar = startWeight - currentWeight;
  const progressPercentage = Math.round((weightLostSoFar / totalWeightToLose) * 100);

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Starting Weight</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{startWeight} lbs</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Current Weight</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{currentWeight} lbs</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold text-primary">{progressPercentage}%</p>
          <p className="text-xs text-muted-foreground">toward {goalWeight} lbs goal</p>
        </CardContent>
      </Card>
    </div>
  );
};