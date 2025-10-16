import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Users, Shield, Search, MoreHorizontal, CheckCircle, XCircle, Clock } from "lucide-react";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export function AdminPanel() {
  const users = [
    {
      name: "John Doe",
      email: "john@example.com",
      role: "User",
      status: "Active",
      joined: "Jan 15, 2025",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    },
    {
      name: "Sarah Johnson",
      email: "sarah@example.com",
      role: "Coach",
      status: "Active",
      joined: "Dec 20, 2024",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    {
      name: "Mike Chen",
      email: "mike@example.com",
      role: "Coach",
      status: "Active",
      joined: "Nov 5, 2024",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
    },
    {
      name: "Emily Brown",
      email: "emily@example.com",
      role: "User",
      status: "Suspended",
      joined: "Oct 12, 2024",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    },
    {
      name: "David Wilson",
      email: "david@example.com",
      role: "Support",
      status: "Active",
      joined: "Sep 8, 2024",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    },
  ];

  const pendingContent = [
    {
      type: "Workout Plan",
      title: "Advanced Powerlifting Program",
      author: "Mike Chen",
      submitted: "2 hours ago",
      status: "Pending",
    },
    {
      type: "Meal Plan",
      title: "Keto Diet for Weight Loss",
      author: "Sarah Johnson",
      submitted: "5 hours ago",
      status: "Pending",
    },
    {
      type: "Video Analysis",
      title: "Squat Form Tutorial",
      author: "Mike Chen",
      submitted: "1 day ago",
      status: "Pending",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1>Admin Panel</h1>
        <p className="text-[#64748B]">Manage users, content, and platform settings</p>
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
            <div className="text-3xl font-bold text-[#3B82F6]">1,247</div>
            <p className="text-sm text-[#64748B] mt-1">Total Users</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <div className="w-12 h-12 rounded-xl bg-[#22D3EE]/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-[#22D3EE]" />
              </div>
            </div>
            <div className="text-3xl font-bold text-[#22D3EE]">48</div>
            <p className="text-sm text-[#64748B] mt-1">Active Coaches</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/10 flex items-center justify-center">
                <Clock className="h-6 w-6 text-[#F59E0B]" />
              </div>
            </div>
            <div className="text-3xl font-bold text-[#F59E0B]">23</div>
            <p className="text-sm text-[#64748B] mt-1">Pending Reviews</p>
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
            <p className="text-sm text-[#64748B] mt-1">Approved This Week</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="users" className="space-y-6">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="users">
            <Users className="h-4 w-4 mr-2" />
            User Management
          </TabsTrigger>
          <TabsTrigger value="content">
            <Shield className="h-4 w-4 mr-2" />
            Content Moderation
          </TabsTrigger>
        </TabsList>

        <TabsContent value="users" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>User Management</CardTitle>
                  <CardDescription>Manage user accounts, roles, and permissions</CardDescription>
                </div>
                <div className="flex gap-2">
                  <div className="relative w-64">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#64748B]" />
                    <Input placeholder="Search users..." className="pl-10" />
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Joined</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src={user.avatar} />
                            <AvatarFallback className="bg-gradient-to-br from-[#3B82F6] to-[#22D3EE] text-white text-xs">
                              {user.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <span className="font-medium">{user.name}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-[#64748B]">{user.email}</TableCell>
                      <TableCell>
                        <Badge 
                          variant="outline"
                          className={
                            user.role === 'Coach' ? 'border-[#3B82F6] text-[#3B82F6]' :
                            user.role === 'Support' ? 'border-[#F59E0B] text-[#F59E0B]' :
                            'border-[#64748B] text-[#64748B]'
                          }
                        >
                          {user.role}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge 
                          className={
                            user.status === 'Active' 
                              ? 'bg-[#10B981] hover:bg-[#10B981]' 
                              : 'bg-[#EF4444] hover:bg-[#EF4444]'
                          }
                        >
                          {user.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-[#64748B]">{user.joined}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>View Profile</DropdownMenuItem>
                            <DropdownMenuItem>Edit Role</DropdownMenuItem>
                            <DropdownMenuItem>Reset Password</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-[#EF4444]">
                              {user.status === 'Active' ? 'Suspend User' : 'Activate User'}
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="content" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Content Moderation</CardTitle>
              <CardDescription>Review and approve user-generated content</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingContent.map((item, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge variant="outline" className="border-[#3B82F6] text-[#3B82F6]">
                              {item.type}
                            </Badge>
                            <h4 className="font-medium">{item.title}</h4>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-[#64748B]">
                            <span>By {item.author}</span>
                            <span>•</span>
                            <span>{item.submitted}</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Review
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="text-[#10B981] border-[#10B981] hover:bg-[#10B981]/10"
                          >
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Approve
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="text-[#EF4444] border-[#EF4444] hover:bg-[#EF4444]/10"
                          >
                            <XCircle className="h-4 w-4 mr-1" />
                            Reject
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
