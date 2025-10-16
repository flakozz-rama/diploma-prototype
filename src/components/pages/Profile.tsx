import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { User, Settings, Target, Camera } from "lucide-react";
import { Progress } from "../ui/progress";

interface ProfileProps {
  onLogout: () => void;
}

export function Profile({ onLogout }: ProfileProps) {
  return (
    <div className="space-y-6">
      <div>
        <h1>Profile & Settings</h1>
        <p className="text-[#64748B]">Manage your account and preferences</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="profile">
            <User className="h-4 w-4 mr-2" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="goals">
            <Target className="h-4 w-4 mr-2" />
            Goals
          </TabsTrigger>
          <TabsTrigger value="settings">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Update your profile details</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" />
                      <AvatarFallback className="bg-gradient-to-br from-[#3B82F6] to-[#22D3EE] text-white text-2xl">
                        JD
                      </AvatarFallback>
                    </Avatar>
                    <Button 
                      size="icon" 
                      className="absolute bottom-0 right-0 rounded-full w-8 h-8 gradient-primary text-white"
                    >
                      <Camera className="h-4 w-4" />
                    </Button>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">John Doe</h3>
                    <p className="text-sm text-[#64748B] mb-2">john.doe@example.com</p>
                    <Button variant="outline" size="sm">Change Photo</Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="John" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Doe" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="john.doe@example.com" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="age">Age</Label>
                    <Input id="age" type="number" defaultValue="28" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="gender">Gender</Label>
                    <Select defaultValue="male">
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button className="gradient-primary text-white">Save Changes</Button>
                  <Button variant="outline">Cancel</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Body Stats</CardTitle>
              <CardDescription>Track your physical measurements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Label htmlFor="height">Height (cm)</Label>
                  <Input id="height" type="number" defaultValue="178" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="weight">Weight (kg)</Label>
                  <Input id="weight" type="number" defaultValue="75" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="bodyfat">Body Fat %</Label>
                  <Input id="bodyfat" type="number" defaultValue="15" className="mt-1" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="goals" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Fitness Goals</CardTitle>
              <CardDescription>Set and track your fitness objectives</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="primaryGoal">Primary Goal</Label>
                  <Select defaultValue="weight-loss">
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weight-loss">Weight Loss</SelectItem>
                      <SelectItem value="muscle-gain">Muscle Gain</SelectItem>
                      <SelectItem value="strength">Build Strength</SelectItem>
                      <SelectItem value="endurance">Improve Endurance</SelectItem>
                      <SelectItem value="general">General Fitness</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="targetWeight">Target Weight (kg)</Label>
                    <Input id="targetWeight" type="number" defaultValue="70" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="targetDate">Target Date</Label>
                    <Input id="targetDate" type="date" className="mt-1" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Goal Progress</span>
                    <span className="text-[#3B82F6]">60%</span>
                  </div>
                  <Progress value={60} className="mb-2" />
                  <p className="text-sm text-[#64748B]">
                    You've lost 3kg out of your 5kg goal. Keep going!
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <Card className="bg-[#F8FAFC]">
                    <CardContent className="pt-6">
                      <h4 className="font-medium mb-2">Weekly Workout Target</h4>
                      <div className="text-3xl font-bold text-[#3B82F6] mb-1">5 days</div>
                      <Progress value={80} className="mt-2" />
                      <p className="text-sm text-[#64748B] mt-2">4 of 5 completed this week</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-[#F8FAFC]">
                    <CardContent className="pt-6">
                      <h4 className="font-medium mb-2">Daily Calorie Target</h4>
                      <div className="text-3xl font-bold text-[#22D3EE] mb-1">2,200</div>
                      <Progress value={90} className="mt-2" />
                      <p className="text-sm text-[#64748B] mt-2">1,980 consumed today</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Manage your account preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-3">Notifications</h4>
                  <div className="space-y-3">
                    {[
                      { label: "Email notifications", description: "Receive updates via email" },
                      { label: "Push notifications", description: "Get alerts on your device" },
                      { label: "Workout reminders", description: "Daily workout prompts" },
                      { label: "Progress updates", description: "Weekly progress reports" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-[#F8FAFC]">
                        <div>
                          <p className="font-medium text-sm">{item.label}</p>
                          <p className="text-xs text-[#64748B]">{item.description}</p>
                        </div>
                        <input type="checkbox" defaultChecked className="w-4 h-4" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-medium mb-3">Privacy</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-[#F8FAFC]">
                      <div>
                        <p className="font-medium text-sm">Profile visibility</p>
                        <p className="text-xs text-[#64748B]">Who can see your profile</p>
                      </div>
                      <Select defaultValue="private">
                        <SelectTrigger className="w-[140px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="public">Public</SelectItem>
                          <SelectItem value="friends">Friends Only</SelectItem>
                          <SelectItem value="private">Private</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-medium mb-3">Security</h4>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      Change Password
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      Two-Factor Authentication
                    </Button>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-medium mb-3 text-[#EF4444]">Danger Zone</h4>
                  <div className="space-y-3">
                    <Button 
                      variant="outline" 
                      className="w-full justify-start text-[#EF4444] border-[#EF4444] hover:bg-[#EF4444]/10"
                      onClick={onLogout}
                    >
                      Logout
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start text-[#EF4444] border-[#EF4444] hover:bg-[#EF4444]/10"
                    >
                      Delete Account
                    </Button>
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
