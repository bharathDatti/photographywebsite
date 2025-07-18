
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check for admin credentials
    if (formData.email === 'admin@silverfoxphoto.com' && formData.password === 'admin123') {
      const adminUser = {
        id: 1,
        name: 'Admin User',
        email: 'admin@silverfoxphoto.com',
        role: 'admin'
      };
      localStorage.setItem('silverfox_user', JSON.stringify(adminUser));
      toast({
        title: "Welcome back, Admin!",
        description: "You have been logged in successfully.",
      });
      navigate('/admin');
      return;
    }
    
    // Check for existing users
    const users = JSON.parse(localStorage.getItem('silverfox_users') || '[]');
    const user = users.find(u => u.email === formData.email && u.password === formData.password);
    
    if (user) {
      localStorage.setItem('silverfox_user', JSON.stringify(user));
      toast({
        title: "Welcome back!",
        description: "You have been logged in successfully.",
      });
      navigate('/dashboard');
    } else {
      toast({
        title: "Login failed",
        description: "Invalid email or password. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Login - Silver Fox Photography</title>
        <meta name="description" content="Login to your Silver Fox Photography account to access your dashboard, bookings, and gallery." />
      </Helmet>

      <div className="pt-16 min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center items-center mb-6">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center">
                <Camera className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="font-serif text-3xl font-bold text-[var(--primary-charcoal)]">
              Welcome Back
            </h1>
            <p className="mt-2 text-[var(--text-gray)]">
              Sign in to your Silver Fox Photography account
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[var(--primary-charcoal)] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-gold)] focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--primary-charcoal)] mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-gold)] focus:border-transparent transition-colors pr-12"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[var(--text-gray)] hover:text-[var(--primary-gold)] transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <Button type="submit" className="w-full bg-gradient-gold text-white hover:opacity-90 py-3">
                Sign In
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-[var(--text-gray)]">
                Don't have an account?{' '}
                <Link to="/register" className="text-[var(--primary-gold)] hover:underline font-medium">
                  Sign up here
                </Link>
              </p>
            </div>

            {/* Demo Credentials */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-[var(--text-gray)] mb-2 font-medium">Demo Credentials:</p>
              <p className="text-xs text-[var(--text-gray)]">
                Admin: admin@silverfoxphoto.com / admin123
              </p>
              <p className="text-xs text-[var(--text-gray)]">
                User: Create account via registration
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Login;
