import { Activity, Apple, Dumbbell, MessageSquare, TrendingUp, Video, Calendar, Target } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface DashboardProps {
  onNavigate: (page: string) => void;
}

const weeklyData = [
  { day: 'Mon', calories: 2200 },
  { day: 'Tue', calories: 2400 },
  { day: 'Wed', calories: 2100 },
  { day: 'Thu', calories: 2600 },
  { day: 'Fri', calories: 2300 },
  { day: 'Sat', calories: 2800 },
  { day: 'Sun', calories: 2500 },
];

export function Dashboard({ onNavigate }: DashboardProps) {
  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-2xl gradient-primary p-8 text-white">
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-2">Train Smarter with AI</h1>
          <p className="text-lg opacity-90">Welcome back, John! Ready to crush your fitness goals today?</p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 right-20 w-48 h-48 bg-white/10 rounded-full"></div>
      </div>

      {/* Quick Access Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card 
          className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-[#3B82F6]"
          onClick={() => onNavigate('nutrition')}
        >
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center">
                <Apple className="h-6 w-6 text-[#3B82F6]" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-1">Calculate Nutrition</h3>
            <p className="text-sm text-[#64748B]">Get your personalized macro plan</p>
          </CardContent>
        </Card>

        <Card 
          className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-[#22D3EE]"
          onClick={() => onNavigate('workouts')}
        >
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#22D3EE]/10 flex items-center justify-center">
                <Dumbbell className="h-6 w-6 text-[#22D3EE]" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-1">Generate Workout Plan</h3>
            <p className="text-sm text-[#64748B]">AI-powered training programs</p>
          </CardContent>
        </Card>

        <Card 
          className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-[#10B981]"
          onClick={() => onNavigate('workouts')}
        >
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#10B981]/10 flex items-center justify-center">
                <Video className="h-6 w-6 text-[#10B981]" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-1">Upload Exercise Video</h3>
            <p className="text-sm text-[#64748B]">Get AI technique analysis</p>
          </CardContent>
        </Card>

        <Card 
          className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-[#F59E0B]"
          onClick={() => onNavigate('consultations')}
        >
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/10 flex items-center justify-center">
                <MessageSquare className="h-6 w-6 text-[#F59E0B]" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-1">Consult with a Coach</h3>
            <p className="text-sm text-[#64748B]">Connect with expert trainers</p>
          </CardContent>
        </Card>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Weekly Calorie Burn</CardTitle>
            <CardDescription>Your activity over the past 7 days</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={weeklyData}>
                <defs>
                  <linearGradient id="colorCalories" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#22D3EE" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis dataKey="day" stroke="#64748B" />
                <YAxis stroke="#64748B" />
                <Tooltip />
                <Area 
                  type="monotone" 
                  dataKey="calories" 
                  stroke="#3B82F6" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorCalories)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <Activity className="h-4 w-4 text-[#3B82F6]" />
                Workouts This Week
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-[#3B82F6]">4/5</div>
              <Progress value={80} className="mt-3" />
              <p className="text-sm text-[#64748B] mt-2">Great progress! Keep it up</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <Target className="h-4 w-4 text-[#10B981]" />
                Current Goal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg font-semibold">Lose 5kg</div>
              <Progress value={60} className="mt-3" />
              <p className="text-sm text-[#64748B] mt-2">3kg down, 2kg to go!</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <Calendar className="h-4 w-4 text-[#22D3EE]" />
                Streak
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-[#22D3EE]">12 days</div>
              <p className="text-sm text-[#64748B] mt-2">🔥 You're on fire!</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Your latest achievements and updates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { icon: Dumbbell, color: '#3B82F6', title: 'Completed Full Body Workout', time: '2 hours ago' },
              { icon: Apple, color: '#10B981', title: 'Hit daily calorie goal', time: '5 hours ago' },
              { icon: Video, color: '#22D3EE', title: 'Video analysis completed', time: 'Yesterday' },
              { icon: TrendingUp, color: '#F59E0B', title: 'New personal record!', time: '2 days ago' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-[#F8FAFC] transition-colors">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${activity.color}15` }}
                >
                  <activity.icon className="h-5 w-5" style={{ color: activity.color }} />
                </div>
                <div className="flex-1">
                  <p className="font-medium">{activity.title}</p>
                  <p className="text-sm text-[#64748B]">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
