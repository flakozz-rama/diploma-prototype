import { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Login } from './components/pages/Login';
import { Dashboard } from './components/pages/Dashboard';
import { Nutrition } from './components/pages/Nutrition';
import { Workouts } from './components/pages/Workouts';
import { Consultations } from './components/pages/Consultations';
import { CoachDashboard } from './components/pages/CoachDashboard';
import { AdminPanel } from './components/pages/AdminPanel';
import { SupportDashboard } from './components/pages/SupportDashboard';
import { Profile } from './components/pages/Profile';
import { Toaster } from './components/ui/sonner';

type UserRole = 'user' | 'coach' | 'admin' | 'support';
type Page = 
  | 'login'
  | 'dashboard'
  | 'nutrition'
  | 'workouts'
  | 'consultations'
  | 'coach-dashboard'
  | 'admin-users'
  | 'admin-content'
  | 'support-dashboard'
  | 'profile';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('login');
  const [userRole, setUserRole] = useState<UserRole>('user');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const currentUser = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
    role: userRole,
  };

  const handleLogin = (role: UserRole) => {
    setUserRole(role);
    setIsAuthenticated(true);
    
    // Navigate to appropriate dashboard based on role
    switch (role) {
      case 'coach':
        setCurrentPage('coach-dashboard');
        break;
      case 'admin':
        setCurrentPage('admin-users');
        break;
      case 'support':
        setCurrentPage('support-dashboard');
        break;
      default:
        setCurrentPage('dashboard');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage('login');
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
  };

  // Show login page if not authenticated
  if (!isAuthenticated || currentPage === 'login') {
    return (
      <>
        <Login onNavigate={handleNavigate} onLogin={handleLogin} />
        <Toaster />
      </>
    );
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard onNavigate={handleNavigate} />;
      case 'nutrition':
        return <Nutrition />;
      case 'workouts':
        return <Workouts />;
      case 'consultations':
        return <Consultations />;
      case 'coach-dashboard':
        return <CoachDashboard />;
      case 'admin-users':
      case 'admin-content':
        return <AdminPanel />;
      case 'support-dashboard':
        return <SupportDashboard />;
      case 'profile':
        return <Profile onLogout={handleLogout} />;
      default:
        return <Dashboard onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header 
        onNavigate={handleNavigate} 
        currentUser={currentUser}
        onLogout={handleLogout}
      />
      
      <div className="flex">
        <Sidebar 
          currentPage={currentPage} 
          onNavigate={handleNavigate}
          userRole={userRole}
        />
        
        <main className="flex-1 ml-64 mt-16 p-8">
          <div className="max-w-7xl mx-auto">
            {renderPage()}
          </div>
        </main>
      </div>

      <Toaster />
    </div>
  );
}
