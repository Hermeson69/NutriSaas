import { cn } from "@/lib/utils";
import {
  Dumbbell,
  Flame,
  BookmarkIcon,
  Activity as Running,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

interface MetricsCardProps {
  className?: string;
}

export function FitnessMetrics({ className }: MetricsCardProps) {
  const caloriesBurned = 1457;
  const calorieGoal = 3000;
  const caloriePercentage = Math.round((caloriesBurned / calorieGoal) * 100);
  const nextWorkout = "Back";

  // const days = ["D", "S", "T", "Q", "Q", "S", "S"]

  // const runData = [10, 30, 45, 40, 20, 35, 15]

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-4", className)}>
      {/* Run Card */}
      <Card className="bg-green-800 text-white overflow-hidden h-[230px]">
        <CardHeader className="flex flex-row items-center justify-between pb-1">
          <div className="flex items-center space-x-2">
            <Running className="h-6 w-6" />
            <CardTitle>Run</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium">This Day:</p>
              <p className="text-2xl font-bold">{caloriesBurned} Kcl</p>
            </div>

            <div className="h-24 relative">
              <div className="absolute inset-0 flex items-end justify-between"></div>

              {/* <div className="absolute bottom-0 left-1 right-2 flex justify-between">
                {days.map((day, index) => (
                  <div key={index} className="text-xs">
                    {day}
                  </div>
                ))}
              </div> */}

              {/* <div className="absolute left-0 top-0 bottom-6 w-[2px] bg-white" />

              <div className="absolute left-0 right-0 bottom-6 h-[2px] bg-white" /> */}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Gym Card */}
      <Card className="bg-black text-white  h-[230px]">
        <CardHeader className="flex flex-row items-center justify-between pb-1">
          <div className="flex items-center space-x-2">
            <Dumbbell className="h-6 w-6" />
            <CardTitle>Gym</CardTitle>
          </div>
          <BookmarkIcon className="h-5 w-5 text-white" />
        </CardHeader>
        <CardContent className="flex flex-col space-y-17">
          <div>
            <p className="text-sm font-medium">Next Exercise Day:</p>
          </div>

          <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
            {nextWorkout}
          </Button>
        </CardContent>
      </Card>

      {/* Calorie Goal Card */}
      <Card className="bg-orange-400 text-white  h-[230px]">
        <CardHeader className="flex flex-row items-center justify-between pb-1">
          <div className="flex items-center space-x-2">
            <Flame className="h-6 w-6" />
            <CardTitle>Daily Calorie Goal</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center space-y-3">
          <div className="text-center">
            <p className="text-2xl font-bold">
              {caloriesBurned} / {calorieGoal} Kcl
            </p>
          </div>

          <div className="relative h-22 w-22">
            <div className="absolute inset-0 rounded-full border-4 border-white/20" />

            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke="white"
                strokeWidth="6"
                strokeDasharray="289.02652413026095"
                strokeDashoffset={
                  289.02652413026095 * (1 - caloriePercentage / 100)
                }
                strokeLinecap="round"
                transform="rotate(-90 50 50)"
                className="transition-all duration-500 ease-in-out"
              />
            </svg>

            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-xl font-bold">{caloriePercentage}%</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
