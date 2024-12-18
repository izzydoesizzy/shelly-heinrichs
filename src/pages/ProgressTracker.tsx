import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Line, LineChart, XAxis, YAxis, ReferenceLine, CartesianGrid } from "recharts";
import { PlusCircle } from "lucide-react";
import { ProfileNav } from "@/components/tracker/ProfileNav";
import { MotivationalQuote } from "@/components/tracker/MotivationalQuote";
import { GoalMetrics } from "@/components/tracker/GoalMetrics";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ProgressTracker = () => {
  const [progressData, setProgressData] = useState([
    {
      name: "Sarah Johnson",
      weekOneWeight: "185 lbs",
      currentWeight: "178 lbs",
      measurementChange: "-3 inches",
      energyLevel: "9",
      weeklyGoal: "30 min daily walks",
      wins: "Completed all planned workouts!"
    },
    {
      name: "Emily Davis",
      weekOneWeight: "165 lbs",
      currentWeight: "158 lbs",
      measurementChange: "-2.5 inches",
      energyLevel: "8",
      weeklyGoal: "Meal prep Sundays",
      wins: "No sugar cravings this week"
    },
    {
      name: "Maria Rodriguez",
      weekOneWeight: "195 lbs",
      currentWeight: "187 lbs",
      measurementChange: "-3.5 inches",
      energyLevel: "7",
      weeklyGoal: "Strength training 3x/week",
      wins: "Hit new PR in deadlifts!"
    },
    {
      name: "Lisa Chen",
      weekOneWeight: "155 lbs",
      currentWeight: "149 lbs",
      measurementChange: "-2 inches",
      energyLevel: "9",
      weeklyGoal: "8 glasses of water daily",
      wins: "Consistent energy all week"
    },
    {
      name: "Amanda Taylor",
      weekOneWeight: "175 lbs",
      currentWeight: "168 lbs",
      measurementChange: "-2.8 inches",
      energyLevel: "8",
      weeklyGoal: "Yoga 2x/week",
      wins: "Better sleep quality"
    }
  ]);

  const [newEntry, setNewEntry] = useState({
    name: "",
    weekOneWeight: "",
    currentWeight: "",
    measurementChange: "",
    energyLevel: "",
    weeklyGoal: "",
    wins: ""
  });

  const weightData = [
    { week: "Week 1", weight: 185 },
    { week: "Week 2", weight: 183 },
    { week: "Week 3", weight: 181 },
    { week: "Week 4", weight: 180 },
    { week: "Week 5", weight: 178 },
    { week: "Week 6", weight: 176 }
  ];

  const startWeight = 185;
  const currentWeight = 176;
  const goalWeight = 165;

  const handleAddEntry = () => {
    if (newEntry.name && newEntry.currentWeight) {
      setProgressData([...progressData, newEntry]);
      setNewEntry({
        name: "",
        weekOneWeight: "",
        currentWeight: "",
        measurementChange: "",
        energyLevel: "",
        weeklyGoal: "",
        wins: ""
      });
    }
  };

  const leaderboardData = [...progressData].sort((a, b) => {
    const aLoss = parseInt(a.weekOneWeight) - parseInt(a.currentWeight);
    const bLoss = parseInt(b.weekOneWeight) - parseInt(b.currentWeight);
    return bLoss - aLoss;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <ProfileNav />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <h1 className="text-2xl font-bold text-primary">Let's GO Maria! 💪</h1>
        
        <MotivationalQuote />
        
        <GoalMetrics 
          startWeight={startWeight}
          currentWeight={currentWeight}
          goalWeight={goalWeight}
        />

        <Card>
          <CardHeader>
            <CardTitle>Weight Progress Over Time</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <AspectRatio ratio={2/1} className="h-[50px] mb-4">
              <ChartContainer
                config={{
                  weight: {
                    theme: {
                      light: "hsl(var(--primary))",
                      dark: "hsl(var(--primary))"
                    }
                  }
                }}
              >
                <LineChart data={weightData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal vertical />
                  <XAxis 
                    dataKey="week"
                    tick={{ fill: 'hsl(var(--foreground))' }}
                    tickLine={{ stroke: 'hsl(var(--border))' }}
                  />
                  <YAxis 
                    domain={[160, 190]}
                    ticks={[160, 165, 170, 175, 180, 185, 190]}
                    tick={{ fill: 'hsl(var(--foreground))' }}
                    tickLine={{ stroke: 'hsl(var(--border))' }}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <ReferenceLine 
                    y={startWeight} 
                    label="Start" 
                    stroke="hsl(var(--muted-foreground))" 
                    strokeDasharray="3 3" 
                  />
                  <ReferenceLine 
                    y={goalWeight} 
                    label="Goal" 
                    stroke="hsl(var(--primary))" 
                    strokeDasharray="3 3" 
                  />
                  <Line
                    type="monotone"
                    dataKey="weight"
                    name="weight"
                    strokeWidth={2}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ChartContainer>
            </AspectRatio>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Member Leaderboard</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {leaderboardData.slice(0, 3).map((member, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-card rounded-lg shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-2xl font-bold text-primary">#{index + 1}</div>
                    <div>
                      <div className="font-semibold">{member.name}</div>
                      <div className="text-sm text-muted-foreground">
                        Lost: {parseInt(member.weekOneWeight) - parseInt(member.currentWeight)} lbs
                      </div>
                    </div>
                  </div>
                  <div className="text-lg font-semibold text-primary">
                    {member.currentWeight}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>Member Progress Tracker</span>
              <Button onClick={handleAddEntry} className="gap-2">
                <PlusCircle className="h-4 w-4" />
                Add Entry
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Input
                placeholder="Name"
                value={newEntry.name}
                onChange={(e) => setNewEntry({ ...newEntry, name: e.target.value })}
              />
              <Input
                placeholder="Current Weight"
                value={newEntry.currentWeight}
                onChange={(e) => setNewEntry({ ...newEntry, currentWeight: e.target.value })}
              />
              <Input
                placeholder="Weekly Goal"
                value={newEntry.weeklyGoal}
                onChange={(e) => setNewEntry({ ...newEntry, weeklyGoal: e.target.value })}
              />
            </div>

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
