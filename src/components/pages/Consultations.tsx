import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Search, Star, MessageSquare, Send, Paperclip, Video, Phone } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

export function Consultations() {
  const [selectedChat, setSelectedChat] = useState(0);
  const [message, setMessage] = useState("");

  const coaches = [
    {
      name: "Sarah Johnson",
      specialty: "Weight Loss & Nutrition",
      rating: 4.9,
      reviews: 127,
      price: "$50/session",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      available: true,
    },
    {
      name: "Mike Chen",
      specialty: "Strength Training",
      rating: 4.8,
      reviews: 98,
      price: "$45/session",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
      available: true,
    },
    {
      name: "Emily Rodriguez",
      specialty: "Yoga & Flexibility",
      rating: 5.0,
      reviews: 156,
      price: "$40/session",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
      available: false,
    },
    {
      name: "David Thompson",
      specialty: "HIIT & Cardio",
      rating: 4.7,
      reviews: 84,
      price: "$48/session",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      available: true,
    },
  ];

  const chats = [
    {
      coach: "Sarah Johnson",
      lastMessage: "Great progress! Let's increase the intensity next week.",
      time: "2h ago",
      unread: 2,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    {
      coach: "Mike Chen",
      lastMessage: "Don't forget to warm up properly before heavy lifts",
      time: "1d ago",
      unread: 0,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
    },
  ];

  const messages = [
    {
      sender: "coach",
      text: "Hi John! How did yesterday's workout go?",
      time: "10:30 AM",
    },
    {
      sender: "user",
      text: "It was tough but I completed all sets! Feeling great today.",
      time: "10:32 AM",
    },
    {
      sender: "coach",
      text: "Excellent! That's what I like to hear. Your form is improving significantly.",
      time: "10:33 AM",
    },
    {
      sender: "user",
      text: "Thanks! I uploaded a video of my squat. Could you check my form?",
      time: "10:35 AM",
    },
    {
      sender: "coach",
      text: "Just reviewed it. Your depth is perfect and knees are tracking well. Keep it up!",
      time: "11:02 AM",
    },
  ];

  const sendMessage = () => {
    if (message.trim()) {
      setMessage("");
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1>Consultations</h1>
        <p className="text-[#64748B]">Connect with expert coaches for personalized guidance</p>
      </div>

      <Tabs defaultValue="find" className="space-y-6">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="find">
            <Search className="h-4 w-4 mr-2" />
            Find a Coach
          </TabsTrigger>
          <TabsTrigger value="chats">
            <MessageSquare className="h-4 w-4 mr-2" />
            My Chats
          </TabsTrigger>
        </TabsList>

        <TabsContent value="find" className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="Search coaches by name or specialty..."
                    className="w-full"
                  />
                </div>
                <div className="flex gap-2">
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Specialization" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Specialties</SelectItem>
                      <SelectItem value="weight-loss">Weight Loss</SelectItem>
                      <SelectItem value="strength">Strength Training</SelectItem>
                      <SelectItem value="yoga">Yoga</SelectItem>
                      <SelectItem value="cardio">Cardio</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Coaches</SelectItem>
                      <SelectItem value="available">Available Now</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coaches.map((coach, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={coach.avatar} />
                      <AvatarFallback className="bg-gradient-to-br from-[#3B82F6] to-[#22D3EE] text-white">
                        {coach.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold">{coach.name}</h3>
                        {coach.available && (
                          <Badge className="bg-[#10B981] text-white text-xs">Available</Badge>
                        )}
                      </div>
                      <p className="text-sm text-[#64748B] mb-2">{coach.specialty}</p>
                      <div className="flex items-center gap-3 text-sm">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-[#F59E0B] text-[#F59E0B]" />
                          <span className="font-medium">{coach.rating}</span>
                          <span className="text-[#64748B]">({coach.reviews})</span>
                        </div>
                        <span className="text-[#3B82F6] font-medium">{coach.price}</span>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full gradient-primary text-white">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Start Chat
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="chats" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Chat List */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle className="text-lg">Recent Chats</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y">
                  {chats.map((chat, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedChat(index)}
                      className={`p-4 cursor-pointer transition-colors ${
                        selectedChat === index ? 'bg-[#F8FAFC]' : 'hover:bg-[#F8FAFC]'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <Avatar>
                          <AvatarImage src={chat.avatar} />
                          <AvatarFallback className="bg-gradient-to-br from-[#3B82F6] to-[#22D3EE] text-white">
                            {chat.coach.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-medium text-sm truncate">{chat.coach}</h4>
                            <span className="text-xs text-[#64748B]">{chat.time}</span>
                          </div>
                          <p className="text-sm text-[#64748B] truncate">{chat.lastMessage}</p>
                        </div>
                        {chat.unread > 0 && (
                          <div className="w-5 h-5 rounded-full bg-[#3B82F6] text-white text-xs flex items-center justify-center flex-shrink-0">
                            {chat.unread}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Chat Window */}
            <Card className="lg:col-span-2 flex flex-col h-[600px]">
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={chats[selectedChat].avatar} />
                      <AvatarFallback className="bg-gradient-to-br from-[#3B82F6] to-[#22D3EE] text-white">
                        {chats[selectedChat].coach.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{chats[selectedChat].coach}</h3>
                      <p className="text-xs text-[#64748B]">Online</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Video className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex-1 overflow-y-auto p-6">
                <div className="space-y-4">
                  {messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                          msg.sender === 'user'
                            ? 'gradient-primary text-white'
                            : 'bg-[#F1F5F9] text-[#1E293B]'
                        }`}
                      >
                        <p className="text-sm">{msg.text}</p>
                        <p className={`text-xs mt-1 ${
                          msg.sender === 'user' ? 'text-white/70' : 'text-[#64748B]'
                        }`}>
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>

              <div className="p-4 border-t">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon">
                    <Paperclip className="h-4 w-4" />
                  </Button>
                  <Input
                    placeholder="Type a message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    className="flex-1"
                  />
                  <Button 
                    className="gradient-primary text-white"
                    onClick={sendMessage}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
