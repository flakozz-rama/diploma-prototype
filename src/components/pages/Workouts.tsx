import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Dumbbell, Target, Upload, Download, CheckCircle, Play, Calendar } from "lucide-react";
import { Progress } from "../ui/progress";
import { Badge } from "../ui/badge";

export function Workouts() {
  const [showPlan, setShowPlan] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setShowAnalysis(true);
    }, 3000);
  };

  const myPrograms = [
    {
      name: "Full Body Strength",
      duration: "8 weeks",
      progress: 65,
      workoutsCompleted: 26,
      totalWorkouts: 40,
      nextWorkout: "Monday - Upper Body",
    },
    {
      name: "Weight Loss Challenge",
      duration: "12 weeks",
      progress: 42,
      workoutsCompleted: 25,
      totalWorkouts: 60,
      nextWorkout: "Wednesday - HIIT Cardio",
    },
  ];

  const workoutPlan = [
    {
      day: "Monday",
      focus: "Upper Body Push",
      exercises: [
        { name: "Bench Press", sets: "4 x 8-10" },
        { name: "Overhead Press", sets: "3 x 10-12" },
        { name: "Incline Dumbbell Press", sets: "3 x 10-12" },
        { name: "Tricep Dips", sets: "3 x 12-15" },
      ],
    },
    {
      day: "Tuesday",
      focus: "Lower Body",
      exercises: [
        { name: "Squats", sets: "4 x 8-10" },
        { name: "Romanian Deadlifts", sets: "3 x 10-12" },
        { name: "Leg Press", sets: "3 x 12-15" },
        { name: "Leg Curls", sets: "3 x 12-15" },
      ],
    },
    {
      day: "Wednesday",
      focus: "Rest / Active Recovery",
      exercises: [],
    },
    {
      day: "Thursday",
      focus: "Upper Body Pull",
      exercises: [
        { name: "Pull-ups", sets: "4 x 8-10" },
        { name: "Barbell Rows", sets: "3 x 10-12" },
        { name: "Lat Pulldowns", sets: "3 x 10-12" },
        { name: "Bicep Curls", sets: "3 x 12-15" },
      ],
    },
    {
      day: "Friday",
      focus: "Full Body",
      exercises: [
        { name: "Deadlifts", sets: "4 x 6-8" },
        { name: "Bench Press", sets: "3 x 8-10" },
        { name: "Squats", sets: "3 x 8-10" },
        { name: "Pull-ups", sets: "3 x max" },
      ],
    },
  ];

  const previousAnalyses = [
    {
      exercise: "Squat",
      date: "2 days ago",
      score: 92,
      feedback: "Excellent form! Keep your chest up and knees tracking over toes.",
    },
    {
      exercise: "Bench Press",
      date: "5 days ago",
      score: 78,
      feedback: "Good effort. Try to keep your elbows at 45 degrees and maintain a slight arch.",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1>Workouts</h1>
        <p className="text-[#64748B]">Generate custom plans, track progress, and analyze your technique</p>
      </div>

      <Tabs defaultValue="generate" className="space-y-6">
        <TabsList className="grid w-full max-w-2xl grid-cols-3">
          <TabsTrigger value="generate">
            <Target className="h-4 w-4 mr-2" />
            Generate Plan
          </TabsTrigger>
          <TabsTrigger value="programs">
            <Dumbbell className="h-4 w-4 mr-2" />
            My Programs
          </TabsTrigger>
          <TabsTrigger value="analysis">
            <Upload className="h-4 w-4 mr-2" />
            Technique Analysis
          </TabsTrigger>
        </TabsList>

        <TabsContent value="generate" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Generate AI Workout Plan</CardTitle>
              <CardDescription>Get a personalized training program based on your goals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="goal">Training Goal</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select your goal" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weight-loss">Weight Loss</SelectItem>
                      <SelectItem value="muscle-gain">Muscle Gain</SelectItem>
                      <SelectItem value="endurance">Endurance</SelectItem>
                      <SelectItem value="strength">Strength</SelectItem>
                      <SelectItem value="general">General Fitness</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="duration">Program Duration</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="4">4 weeks</SelectItem>
                      <SelectItem value="8">8 weeks</SelectItem>
                      <SelectItem value="12">12 weeks</SelectItem>
                      <SelectItem value="16">16 weeks</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="days">Days per Week</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Training frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3">3 days</SelectItem>
                      <SelectItem value="4">4 days</SelectItem>
                      <SelectItem value="5">5 days</SelectItem>
                      <SelectItem value="6">6 days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="level">Experience Level</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button 
                className="w-full gradient-primary text-white"
                onClick={() => setShowPlan(true)}
              >
                Generate Workout Plan
              </Button>
            </CardContent>
          </Card>

          {showPlan && (
            <Card className="border-2 border-[#3B82F6]">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Your 8-Week Muscle Gain Program</CardTitle>
                    <CardDescription>AI-generated plan tailored to your goals</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </Button>
                    <Button className="gradient-primary text-white" size="sm">
                      Save Plan
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {workoutPlan.map((day, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-semibold">{day.day}</h4>
                            <p className="text-sm text-[#64748B]">{day.focus}</p>
                          </div>
                          {day.exercises.length > 0 && (
                            <Badge className="bg-[#3B82F6]">
                              {day.exercises.length} exercises
                            </Badge>
                          )}
                        </div>
                        {day.exercises.length > 0 ? (
                          <div className="space-y-2">
                            {day.exercises.map((exercise, i) => (
                              <div key={i} className="flex justify-between items-center p-2 bg-[#F8FAFC] rounded-lg">
                                <span className="text-sm">{exercise.name}</span>
                                <span className="text-sm font-medium text-[#64748B]">{exercise.sets}</span>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-sm text-[#64748B] italic">Rest day - light stretching or walking recommended</p>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="programs" className="space-y-6">
          <div className="grid gap-6">
            {myPrograms.map((program, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{program.name}</h3>
                      <p className="text-sm text-[#64748B]">{program.duration} program</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Calendar className="h-4 w-4 mr-2" />
                        View Schedule
                      </Button>
                      <Button className="gradient-primary text-white" size="sm">
                        <Play className="h-4 w-4 mr-2" />
                        Start Workout
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Progress</span>
                        <span className="font-medium text-[#3B82F6]">{program.progress}%</span>
                      </div>
                      <Progress value={program.progress} />
                    </div>

                    <div className="flex items-center justify-between text-sm pt-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-[#10B981]" />
                        <span>{program.workoutsCompleted}/{program.totalWorkouts} workouts completed</span>
                      </div>
                      <div className="text-[#64748B]">
                        Next: <span className="text-[#1E293B] font-medium">{program.nextWorkout}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analysis" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Upload Exercise Video</CardTitle>
              <CardDescription>Get AI-powered technique analysis and feedback</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-[#E2E8F0] rounded-xl p-8 text-center">
                <Upload className="h-12 w-12 mx-auto text-[#64748B] mb-4" />
                <h3 className="font-medium mb-2">Drag and drop your video here</h3>
                <p className="text-sm text-[#64748B] mb-4">or click to browse files</p>
                <Input
                  type="file"
                  accept="video/*"
                  onChange={handleFileChange}
                  className="hidden"
                  id="video-upload"
                />
                <label htmlFor="video-upload">
                  <Button variant="outline" asChild>
                    <span>Choose File</span>
                  </Button>
                </label>
                {selectedFile && (
                  <p className="mt-4 text-sm text-[#3B82F6]">Selected: {selectedFile.name}</p>
                )}
              </div>

              {selectedFile && !analyzing && !showAnalysis && (
                <Button 
                  className="w-full mt-4 gradient-primary text-white"
                  onClick={handleUpload}
                >
                  Analyze Video
                </Button>
              )}

              {analyzing && (
                <div className="mt-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 border-4 border-[#3B82F6] border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-[#64748B]">Analyzing your technique...</p>
                </div>
              )}

              {showAnalysis && (
                <Card className="mt-6 border-2 border-[#10B981]">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Analysis Complete</CardTitle>
                        <CardDescription>Squat - October 7, 2025</CardDescription>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-[#10B981]">88</div>
                        <div className="text-sm text-[#64748B]">Score</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">✓ Strengths</h4>
                        <ul className="space-y-1 text-sm text-[#64748B]">
                          <li>• Excellent depth - breaking parallel consistently</li>
                          <li>• Good bar path - staying vertical throughout movement</li>
                          <li>• Proper breathing technique</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">⚠ Areas for Improvement</h4>
                        <ul className="space-y-1 text-sm text-[#64748B]">
                          <li>• Knees caving slightly inward on ascent - focus on pushing knees out</li>
                          <li>• Lower back rounding at bottom - work on hip mobility</li>
                        </ul>
                      </div>
                      <div className="pt-4 border-t">
                        <h4 className="font-medium mb-2">Recommendations</h4>
                        <p className="text-sm text-[#64748B]">
                          Add hip flexor stretches to your warm-up routine and practice goblet squats to reinforce proper knee tracking.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Previous Analyses</CardTitle>
              <CardDescription>Your video analysis history</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {previousAnalyses.map((analysis, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 border rounded-lg hover:bg-[#F8FAFC] transition-colors cursor-pointer">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#22D3EE] flex items-center justify-center text-white font-bold">
                      {analysis.score}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{analysis.exercise}</h4>
                      <p className="text-sm text-[#64748B]">{analysis.feedback}</p>
                    </div>
                    <div className="text-sm text-[#64748B]">{analysis.date}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
