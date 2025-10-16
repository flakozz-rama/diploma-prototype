import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Headphones, AlertCircle, CheckCircle, Clock, MessageSquare, Send } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

export function SupportDashboard() {
  const [selectedTicket, setSelectedTicket] = useState<number | null>(null);
  const [message, setMessage] = useState("");

  const tickets = [
    {
      id: "TKT-1024",
      user: "John Doe",
      email: "john@example.com",
      issue: "Payment Issue",
      status: "Open",
      priority: "High",
      created: "2 hours ago",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    },
    {
      id: "TKT-1023",
      user: "Sarah Johnson",
      email: "sarah@example.com",
      issue: "Video Upload Error",
      status: "In Progress",
      priority: "Medium",
      created: "5 hours ago",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    {
      id: "TKT-1022",
      user: "Mike Chen",
      email: "mike@example.com",
      issue: "Account Access",
      status: "Open",
      priority: "High",
      created: "1 day ago",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
    },
    {
      id: "TKT-1021",
      user: "Emily Brown",
      email: "emily@example.com",
      issue: "General Inquiry",
      status: "Resolved",
      priority: "Low",
      created: "2 days ago",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    },
  ];

  const ticketMessages = [
    {
      sender: "user",
      text: "Hi, I'm having trouble with my payment. My credit card keeps getting declined.",
      time: "2 hours ago",
    },
    {
      sender: "support",
      text: "Hello John! I'm sorry to hear you're experiencing issues. Let me help you resolve this.",
      time: "1 hour 55 min ago",
    },
    {
      sender: "support",
      text: "Can you please verify that your billing address matches the one on your credit card?",
      time: "1 hour 55 min ago",
    },
    {
      sender: "user",
      text: "Yes, I've double-checked and everything matches correctly.",
      time: "1 hour 50 min ago",
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-[#EF4444] hover:bg-[#EF4444]';
      case 'Medium':
        return 'bg-[#F59E0B] hover:bg-[#F59E0B]';
      case 'Low':
        return 'bg-[#10B981] hover:bg-[#10B981]';
      default:
        return 'bg-[#64748B] hover:bg-[#64748B]';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open':
        return 'border-[#3B82F6] text-[#3B82F6]';
      case 'In Progress':
        return 'border-[#F59E0B] text-[#F59E0B]';
      case 'Resolved':
        return 'border-[#10B981] text-[#10B981]';
      default:
        return 'border-[#64748B] text-[#64748B]';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1>Support Dashboard</h1>
        <p className="text-[#64748B]">Manage support tickets and help users</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <div className="w-12 h-12 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center">
                <AlertCircle className="h-6 w-6 text-[#3B82F6]" />
              </div>
            </div>
            <div className="text-3xl font-bold text-[#3B82F6]">24</div>
            <p className="text-sm text-[#64748B] mt-1">Open Tickets</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/10 flex items-center justify-center">
                <Clock className="h-6 w-6 text-[#F59E0B]" />
              </div>
            </div>
            <div className="text-3xl font-bold text-[#F59E0B]">12</div>
            <p className="text-sm text-[#64748B] mt-1">In Progress</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <div className="w-12 h-12 rounded-xl bg-[#10B981]/10 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-[#10B981]" />
              </div>
            </div>
            <div className="text-3xl font-bold text-[#10B981]">156</div>
            <p className="text-sm text-[#64748B] mt-1">Resolved Today</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <div className="w-12 h-12 rounded-xl bg-[#22D3EE]/10 flex items-center justify-center">
                <Headphones className="h-6 w-6 text-[#22D3EE]" />
              </div>
            </div>
            <div className="text-3xl font-bold text-[#22D3EE]">4.2h</div>
            <p className="text-sm text-[#64748B] mt-1">Avg Response Time</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Tickets List */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Support Tickets</CardTitle>
                <CardDescription>Manage and respond to user inquiries</CardDescription>
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-[150px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Tickets</SelectItem>
                  <SelectItem value="open">Open</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="resolved">Resolved</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Issue</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Created</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tickets.map((ticket, index) => (
                  <TableRow 
                    key={index}
                    className="cursor-pointer hover:bg-[#F8FAFC]"
                    onClick={() => setSelectedTicket(index)}
                  >
                    <TableCell className="font-mono text-sm">{ticket.id}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={ticket.avatar} />
                          <AvatarFallback className="bg-gradient-to-br from-[#3B82F6] to-[#22D3EE] text-white text-xs">
                            {ticket.user.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium text-sm">{ticket.user}</div>
                          <div className="text-xs text-[#64748B]">{ticket.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{ticket.issue}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={getStatusColor(ticket.status)}>
                        {ticket.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getPriorityColor(ticket.priority)}>
                        {ticket.priority}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-[#64748B] text-sm">{ticket.created}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Ticket Detail */}
        <Card className="h-fit">
          <CardHeader>
            <CardTitle className="text-lg">
              {selectedTicket !== null ? tickets[selectedTicket].id : 'Select a Ticket'}
            </CardTitle>
            {selectedTicket !== null && (
              <CardDescription>{tickets[selectedTicket].issue}</CardDescription>
            )}
          </CardHeader>
          {selectedTicket !== null ? (
            <>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 pb-4 border-b">
                    <Avatar>
                      <AvatarImage src={tickets[selectedTicket].avatar} />
                      <AvatarFallback className="bg-gradient-to-br from-[#3B82F6] to-[#22D3EE] text-white">
                        {tickets[selectedTicket].user.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-medium">{tickets[selectedTicket].user}</div>
                      <div className="text-sm text-[#64748B]">{tickets[selectedTicket].email}</div>
                    </div>
                  </div>

                  <div className="space-y-3 max-h-[300px] overflow-y-auto">
                    {ticketMessages.map((msg, index) => (
                      <div
                        key={index}
                        className={`flex ${msg.sender === 'support' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[85%] rounded-xl px-3 py-2 ${
                            msg.sender === 'support'
                              ? 'gradient-primary text-white'
                              : 'bg-[#F1F5F9] text-[#1E293B]'
                          }`}
                        >
                          <p className="text-sm">{msg.text}</p>
                          <p className={`text-xs mt-1 ${
                            msg.sender === 'support' ? 'text-white/70' : 'text-[#64748B]'
                          }`}>
                            {msg.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t space-y-3">
                    <div className="flex items-center gap-2">
                      <Input
                        placeholder="Type your response..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                      <Button className="gradient-primary text-white" size="icon">
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        Assign to Agent
                      </Button>
                      <Button 
                        className="flex-1 bg-[#10B981] hover:bg-[#10B981]/90 text-white" 
                        size="sm"
                      >
                        Close Ticket
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </>
          ) : (
            <CardContent>
              <div className="text-center py-8 text-[#64748B]">
                <MessageSquare className="h-12 w-12 mx-auto mb-3 opacity-50" />
                <p>Select a ticket to view details</p>
              </div>
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  );
}
