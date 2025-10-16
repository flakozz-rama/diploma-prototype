import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface LoginProps {
  onNavigate: (page: string) => void;
  onLogin: (role: 'user' | 'coach' | 'admin' | 'support') => void;
}

export function Login({ onNavigate, onLogin }: LoginProps) {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo purposes, login as user by default
    onLogin('user');
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                <span className="text-white text-2xl font-bold">AI</span>
              </div>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-[#3B82F6] to-[#22D3EE] bg-clip-text text-transparent">
              AI Gym Pro
            </h1>
            <p className="mt-2 text-[#64748B]">
              {isRegister ? 'Create your account' : 'Welcome back! Please login to your account'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1"
                  required
                />
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1"
                  required
                />
              </div>

              {isRegister && (
                <div>
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="mt-1"
                    required
                  />
                </div>
              )}
            </div>

            {!isRegister && (
              <div className="flex items-center justify-end">
                <button
                  type="button"
                  className="text-sm text-[#3B82F6] hover:underline"
                >
                  Forgot password?
                </button>
              </div>
            )}

            <Button type="submit" className="w-full gradient-primary text-white">
              {isRegister ? 'Register' : 'Login'}
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#E2E8F0]"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-[#64748B]">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button type="button" variant="outline" className="w-full">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </Button>
              <Button type="button" variant="outline" className="w-full">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                Apple
              </Button>
            </div>

            <div className="text-center">
              <button
                type="button"
                onClick={() => setIsRegister(!isRegister)}
                className="text-sm text-[#64748B]"
              >
                {isRegister ? (
                  <>
                    Already have an account?{' '}
                    <span className="text-[#3B82F6] font-medium">Login</span>
                  </>
                ) : (
                  <>
                    Don't have an account?{' '}
                    <span className="text-[#3B82F6] font-medium">Register</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick role selection for demo */}
            <div className="pt-4 border-t">
              <p className="text-xs text-[#64748B] mb-2 text-center">Demo: Login as</p>
              <div className="grid grid-cols-2 gap-2">
                <Button type="button" variant="outline" size="sm" onClick={() => onLogin('user')}>
                  User
                </Button>
                <Button type="button" variant="outline" size="sm" onClick={() => onLogin('coach')}>
                  Coach
                </Button>
                <Button type="button" variant="outline" size="sm" onClick={() => onLogin('admin')}>
                  Admin
                </Button>
                <Button type="button" variant="outline" size="sm" onClick={() => onLogin('support')}>
                  Support
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="hidden lg:flex flex-1 relative">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1744551472726-24a3eb12e82a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBmaXRuZXNzJTIwbW9kZXJufGVufDF8fHx8MTc1OTgxOTAyNnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Gym background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-overlay flex items-center justify-center">
          <div className="text-center text-white p-8 max-w-lg">
            <h2 className="text-4xl font-bold mb-4">Train Smarter with AI</h2>
            <p className="text-lg opacity-90">
              Get personalized workout plans, nutrition guidance, and expert coaching powered by artificial intelligence
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
