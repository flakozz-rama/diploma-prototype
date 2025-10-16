import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Video, MessageSquare, Calendar, Users, Clock, Star, Play } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";

export function CoachDashboard() {
  const pendingVideos = [
    {
      client: "John Doe",
      exercise: "Deadlift",
      duration: "2:45",
      uploaded: "1 hour ago",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    },
    {
      client: "Jane Smith",
      exercise: "Bench Press",
      duration: "1:30",
      uploaded: "3 hours ago",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
    },
    {
      client: "Mike Wilson",
      exercise: "Squat",
      duration: "2:15",
      uploaded: "5 hours ago",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
    },
  ];

  const activeChats = [
    {
      client: "John Doe",
      lastMessage: "Thanks for the feedback on my form!",
      time: "10 min ago",
      unread: 1,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    },
    {
      client: "Sarah Brown",
      lastMessage: "When is our next session?",
      time: "1 hour ago",
      unread: 2,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    {
      client: "Alex Johnson",
      lastMessage: "I've completed week 4!",
      time: "2 hours ago",
      unread: 0,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    },
  ];

  const upcomingSessions = [
    {
      client: "John Doe",
      date: "Today",
      time: "2:00 PM - 3:00 PM",
      type: "Strength Training",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    },
    {
      client: "Sarah Brown",
      date: "Tomorrow",
      time: "10:00 AM - 11:00 AM",
      type: "Weight Loss Consultation",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    {
      client: "Mike Wilson",
      date: "Oct 9",
      time: "4:00 PM - 5:00 PM",
      type: "Nutrition Planning",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1>Coach Dashboard</h1>
        <p className="text-[#64748B]">Manage your clients, sessions, and video reviews</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <div className="w-12 h-12 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-[#3B82F6]" />
              </div>
            </div>
            <div className="text-3xl font-bold text-[#3B82F6]">24</div>
            <p className="text-sm text-[#64748B] mt-1">Active Clients</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/10 flex items-center justify-center">
                <Video className="h-6 w-6 text-[#F59E0B]" />
              </div>
            </div>
            <div className="text-3xl font-bold text-[#F59E0B]">7</div>
            <p className="text-sm text-[#64748B] mt-1">Pending Reviews</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <div className="w-12 h-12 rounded-xl bg-[#22D3EE]/10 flex items-center justify-center">
                <Calendar className="h-6 w-6 text-[#22D3EE]" />
              </div>
            </div>
            <div className="text-3xl font-bold text-[#22D3EE]">12</div>
            <p className="text-sm text-[#64748B] mt-1">Weekly Sessions</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <div className="w-12 h-12 rounded-xl bg-[#10B981]/10 flex items-center justify-center">
                <Star className="h-6 w-6 text-[#10B981]" />
              </div>
            </div>
            <div className="text-3xl font-bold text-[#10B981]">4.9</div>
            <p className="text-sm text-[#64748B] mt-1">Average Rating</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="videos" className="space-y-6">
        <TabsList className="grid w-full max-w-2xl grid-cols-3">
          <TabsTrigger value="videos">
            <Video className="h-4 w-4 mr-2" />
            Technique Analysis
          </TabsTrigger>
          <TabsTrigger value="consultations">
            <MessageSquare className="h-4 w-4 mr-2" />
            Consultations
          </TabsTrigger>
          <TabsTrigger value="schedule">
            <Calendar className="h-4 w-4 mr-2" />
            Schedule
          </TabsTrigger>
        </TabsList>

        <TabsContent value="videos" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Pending Video Reviews</CardTitle>
              <CardDescription>Review and provide feedback on client exercise videos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingVideos.map((video, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 border rounded-lg hover:bg-[#F8FAFC] transition-colors">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={video.avatar} />
                      <AvatarFallback className="bg-gradient-to-br from-[#3B82F6] to-[#22D3EE] text-white">
                        {video.client.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="font-medium">{video.client}</h4>
                      <p className="text-sm text-[#64748B]">{video.exercise} • {video.duration}</p>
                    </div>
                    <div className="text-sm text-[#64748B]">{video.uploaded}</div>
                    <Button className="gradient-primary text-white">
                      <Play className="h-4 w-4 mr-2" />
                      Review
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="consultations" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Active Consultations</CardTitle>
              <CardDescription>Ongoing conversations with your clients</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {activeChats.map((chat, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 border rounded-lg hover:bg-[#F8FAFC] transition-colors cursor-pointer">
                    <Avatar>
                      <AvatarImage src={chat.avatar} />
                      <AvatarFallback className="bg-gradient-to-br from-[#3B82F6] to-[#22D3EE] text-white">
                        {chat.client.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium">{chat.client}</h4>
                        <span className="text-xs text-[#64748B]">{chat.time}</span>
                      </div>
                      <p className="text-sm text-[#64748B] truncate">{chat.lastMessage}</p>
                    </div>
                    {chat.unread > 0 && (
                      <Badge className="bg-[#3B82F6]">{chat.unread}</Badge>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="schedule" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Sessions</CardTitle>
              <CardDescription>Your schedule for the next few days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingSessions.map((session, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className="w-16 text-center">
                          <div className="text-sm font-medium text-[#3B82F6]">{session.date}</div>
                          <div className="text-xs text-[#64748B] mt-1 flex items-center justify-center gap-1">
                            <Clock className="h-3 w-3" />
                            1h
                          </div>
                        </div>
                        <div className="h-12 w-px bg-[#E2E8F0]"></div>
                        <Avatar>
                          <AvatarImage src={session.avatar} />
                          <AvatarFallback className="bg-gradient-to-br from-[#3B82F6] to-[#22D3EE] text-white">
                            {session.client.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h4 className="font-medium">{session.client}</h4>
                          <p className="text-sm text-[#64748B]">{session.type}</p>
                        </div>
                        <div className="text-sm text-[#64748B]">{session.time}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Button className="w-full mt-4" variant="outline">
                View Full Calendar
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
