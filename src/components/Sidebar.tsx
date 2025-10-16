import { Home, Apple, Dumbbell, MessageSquare, User, Users, Shield, Headphones, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "./ui/utils";
import { Button } from "./ui/button";
import { useState } from "react";

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  userRole: 'user' | 'coach' | 'admin' | 'support';
}

export function Sidebar({ currentPage, onNavigate, userRole }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  const getUserMenuItems = () => {
    const items = [
      { id: 'dashboard', label: 'Dashboard', icon: Home },
      { id: 'nutrition', label: 'Nutrition', icon: Apple },
      { id: 'workouts', label: 'Workouts', icon: Dumbbell },
      { id: 'consultations', label: 'Consultations', icon: MessageSquare },
      { id: 'profile', label: 'Profile', icon: User },
    ];

    if (userRole === 'coach') {
      return [
        { id: 'coach-dashboard', label: 'Coach Dashboard', icon: Dumbbell },
        { id: 'consultations', label: 'Consultations', icon: MessageSquare },
        { id: 'profile', label: 'Profile', icon: User },
      ];
    }

    if (userRole === 'admin') {
      return [
        { id: 'admin-users', label: 'User Management', icon: Users },
        { id: 'admin-content', label: 'Content Moderation', icon: Shield },
        { id: 'profile', label: 'Profile', icon: User },
      ];
    }

    if (userRole === 'support') {
      return [
        { id: 'support-dashboard', label: 'Support Tickets', icon: Headphones },
        { id: 'profile', label: 'Profile', icon: User },
      ];
    }

    return items;
  };

  const menuItems = getUserMenuItems();

  return (
    <aside
      className={cn(
        "fixed left-0 top-16 h-[calc(100vh-4rem)] bg-white border-r transition-all duration-300 z-40",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex flex-col h-full">
        <div className="flex-1 py-6">
          <nav className="space-y-2 px-3">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              
              return (
                <Button
                  key={item.id}
                  variant={isActive ? "default" : "ghost"}
                  className={cn(
                    "w-full justify-start gap-3 transition-all",
                    isActive && "gradient-primary text-white hover:opacity-90",
                    !isActive && "hover:bg-[#F1F5F9]",
                    collapsed && "justify-center px-0"
                  )}
                  onClick={() => onNavigate(item.id)}
                >
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  {!collapsed && <span>{item.label}</span>}
                </Button>
              );
            })}
          </nav>
        </div>

        <div className="p-3 border-t">
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-center"
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <>
                <ChevronLeft className="h-4 w-4 mr-2" />
                <span>Collapse</span>
              </>
            )}
          </Button>
        </div>
      </div>
    </aside>
  );
}
