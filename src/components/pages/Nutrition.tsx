import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Calculator, UtensilsCrossed, Download, RefreshCw } from "lucide-react";
import { Progress } from "../ui/progress";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Nutrition() {
  const [showResults, setShowResults] = useState(false);
  const [formData, setFormData] = useState({
    gender: '',
    age: '',
    height: '',
    weight: '',
    activity: '',
  });

  const calculateCalories = () => {
    setShowResults(true);
  };

  const mealPlan = [
    {
      meal: "Breakfast",
      time: "7:00 AM",
      items: ["Oatmeal with berries", "2 eggs", "Greek yogurt"],
      calories: 450,
      protein: 28,
      carbs: 52,
      fats: 12,
    },
    {
      meal: "Lunch",
      time: "12:30 PM",
      items: ["Grilled chicken breast", "Brown rice", "Mixed vegetables"],
      calories: 550,
      protein: 45,
      carbs: 60,
      fats: 15,
    },
    {
      meal: "Snack",
      time: "3:30 PM",
      items: ["Protein shake", "Banana", "Almonds"],
      calories: 320,
      protein: 25,
      carbs: 35,
      fats: 10,
    },
    {
      meal: "Dinner",
      time: "7:00 PM",
      items: ["Salmon fillet", "Sweet potato", "Asparagus"],
      calories: 580,
      protein: 42,
      carbs: 48,
      fats: 22,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1>Nutrition</h1>
        <p className="text-[#64748B]">Calculate your daily needs and get AI-powered meal plans</p>
      </div>

      <Tabs defaultValue="calculator" className="space-y-6">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="calculator">
            <Calculator className="h-4 w-4 mr-2" />
            Calculator
          </TabsTrigger>
          <TabsTrigger value="mealplan">
            <UtensilsCrossed className="h-4 w-4 mr-2" />
            Meal Plan
          </TabsTrigger>
        </TabsList>

        <TabsContent value="calculator" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Calorie & Macro Calculator</CardTitle>
              <CardDescription>Enter your details to get personalized nutrition recommendations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="gender">Gender</Label>
                    <Select onValueChange={(value) => setFormData({...formData, gender: value})}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="age">Age</Label>
                    <Input
                      id="age"
                      type="number"
                      placeholder="25"
                      className="mt-1"
                      onChange={(e) => setFormData({...formData, age: e.target.value})}
                    />
                  </div>

                  <div>
                    <Label htmlFor="height">Height (cm)</Label>
                    <Input
                      id="height"
                      type="number"
                      placeholder="175"
                      className="mt-1"
                      onChange={(e) => setFormData({...formData, height: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="weight">Weight (kg)</Label>
                    <Input
                      id="weight"
                      type="number"
                      placeholder="70"
                      className="mt-1"
                      onChange={(e) => setFormData({...formData, weight: e.target.value})}
                    />
                  </div>

                  <div>
                    <Label htmlFor="activity">Activity Level</Label>
                    <Select onValueChange={(value) => setFormData({...formData, activity: value})}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select activity level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sedentary">Sedentary (little or no exercise)</SelectItem>
                        <SelectItem value="light">Light (1-3 days/week)</SelectItem>
                        <SelectItem value="moderate">Moderate (3-5 days/week)</SelectItem>
                        <SelectItem value="active">Active (6-7 days/week)</SelectItem>
                        <SelectItem value="very-active">Very Active (2x per day)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button 
                    className="w-full mt-4 gradient-primary text-white"
                    onClick={calculateCalories}
                  >
                    Calculate
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {showResults && (
            <Card className="border-2 border-[#3B82F6]">
              <CardHeader>
                <CardTitle>Your Nutrition Plan</CardTitle>
                <CardDescription>Based on your profile and goals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-6 bg-gradient-to-br from-[#3B82F6]/10 to-[#22D3EE]/10 rounded-xl">
                    <div className="text-3xl font-bold text-[#3B82F6]">2,400</div>
                    <div className="text-sm text-[#64748B] mt-1">Daily Calories</div>
                  </div>
                  <div className="text-center p-6 bg-[#10B981]/10 rounded-xl">
                    <div className="text-3xl font-bold text-[#10B981]">180g</div>
                    <div className="text-sm text-[#64748B] mt-1">Protein</div>
                  </div>
                  <div className="text-center p-6 bg-[#F59E0B]/10 rounded-xl">
                    <div className="text-3xl font-bold text-[#F59E0B]">240g</div>
                    <div className="text-sm text-[#64748B] mt-1">Carbs</div>
                  </div>
                  <div className="text-center p-6 bg-[#EF4444]/10 rounded-xl">
                    <div className="text-3xl font-bold text-[#EF4444]">67g</div>
                    <div className="text-sm text-[#64748B] mt-1">Fats</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Protein (30%)</span>
                      <span className="text-[#10B981]">180g</span>
                    </div>
                    <Progress value={30} className="bg-[#10B981]/20" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Carbs (40%)</span>
                      <span className="text-[#F59E0B]">240g</span>
                    </div>
                    <Progress value={40} className="bg-[#F59E0B]/20" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Fats (25%)</span>
                      <span className="text-[#EF4444]">67g</span>
                    </div>
                    <Progress value={25} className="bg-[#EF4444]/20" />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="mealplan" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>AI-Generated Meal Plan</CardTitle>
                  <CardDescription>Personalized daily meal suggestions</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Regenerate
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {mealPlan.map((meal, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/4 p-6 bg-gradient-to-br from-[#3B82F6]/5 to-[#22D3EE]/5">
                          <h3 className="text-xl font-semibold">{meal.meal}</h3>
                          <p className="text-sm text-[#64748B]">{meal.time}</p>
                          <div className="mt-4 text-2xl font-bold text-[#3B82F6]">
                            {meal.calories} cal
                          </div>
                        </div>
                        <div className="flex-1 p-6">
                          <div className="space-y-2 mb-4">
                            {meal.items.map((item, i) => (
                              <div key={i} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]"></div>
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                          <div className="flex gap-4 text-sm">
                            <div className="flex items-center gap-1">
                              <div className="w-3 h-3 rounded-full bg-[#10B981]"></div>
                              <span className="text-[#64748B]">Protein:</span>
                              <span className="font-medium">{meal.protein}g</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="w-3 h-3 rounded-full bg-[#F59E0B]"></div>
                              <span className="text-[#64748B]">Carbs:</span>
                              <span className="font-medium">{meal.carbs}g</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="w-3 h-3 rounded-full bg-[#EF4444]"></div>
                              <span className="text-[#64748B]">Fats:</span>
                              <span className="font-medium">{meal.fats}g</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-6 p-4 bg-[#F8FAFC] rounded-xl">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Daily Total</span>
                  <div className="flex gap-6 text-sm">
                    <span>Calories: <strong>1,900</strong></span>
                    <span>Protein: <strong>140g</strong></span>
                    <span>Carbs: <strong>195g</strong></span>
                    <span>Fats: <strong>59g</strong></span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
