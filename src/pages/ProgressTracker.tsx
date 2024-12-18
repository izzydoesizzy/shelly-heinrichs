import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProgressTracker = () => {
  // This would typically come from a database
  const progressData = [
    {
      name: "Example Name",
      weekOneWeight: "200 lbs",
      currentWeight: "195 lbs",
      measurementChange: "-2 inches",
      energyLevel: "8",
      weeklyGoal: "Add 1 veggie per meal",
      wins: "Felt more energized this week!"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">
              Member Progress Tracker
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Week 1 Weight</TableHead>
                    <TableHead>Current Weight</TableHead>
                    <TableHead>Measurement Change</TableHead>
                    <TableHead>Energy Level (1-10)</TableHead>
                    <TableHead>Weekly Goal</TableHead>
                    <TableHead>Wins This Week</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {progressData.map((entry, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{entry.name}</TableCell>
                      <TableCell>{entry.weekOneWeight}</TableCell>
                      <TableCell>{entry.currentWeight}</TableCell>
                      <TableCell>{entry.measurementChange}</TableCell>
                      <TableCell>{entry.energyLevel}</TableCell>
                      <TableCell>{entry.weeklyGoal}</TableCell>
                      <TableCell>{entry.wins}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProgressTracker;