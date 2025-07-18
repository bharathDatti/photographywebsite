import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Users, Calendar, Camera, MessageSquare, BarChart3, Settings } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import AdminOverview from '@/components/admin/AdminOverview';
import AdminBookings from '@/components/admin/AdminBookings';
import AdminUsers from '@/components/admin/AdminUsers';
import AdminInquiries from '@/components/admin/AdminInquiries';
import AdminGallery from '@/components/admin/AdminGallery';
import AdminSettings from '@/components/admin/AdminSettings';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [bookings, setBookings] = useState([]);
  const [users, setUsers] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const { toast } = useToast();

  useEffect(() => {
    setBookings(JSON.parse(localStorage.getItem('silverfox_bookings') || '[]'));
    setUsers(JSON.parse(localStorage.getItem('silverfox_users') || '[]'));
    setInquiries(JSON.parse(localStorage.getItem('silverfox_inquiries') || '[]'));
  }, []);

  const updateBookingStatus = (bookingId, newStatus) => {
    const updatedBookings = bookings.map(booking =>
      booking.id === bookingId ? { ...booking, status: newStatus } : booking
    );
    setBookings(updatedBookings);
    localStorage.setItem('silverfox_bookings', JSON.stringify(updatedBookings));
    
    toast({
      title: "Booking updated",
      description: `Booking status changed to ${newStatus}`,
    });
  };

  const deleteUser = (userId) => {
    const updatedUsers = users.filter(user => user.id !== userId);
    setUsers(updatedUsers);
    localStorage.setItem('silverfox_users', JSON.stringify(updatedUsers));
    
    toast({
      title: "User deleted",
      description: "User has been removed from the system",
    });
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <AdminOverview bookings={bookings} users={users} inquiries={inquiries} />;
      case 'bookings':
        return <AdminBookings bookings={bookings} updateBookingStatus={updateBookingStatus} />;
      case 'users':
        return <AdminUsers users={users} deleteUser={deleteUser} />;
      case 'gallery':
        return <AdminGallery />;
      case 'inquiries':
        return <AdminInquiries inquiries={inquiries} />;
      case 'settings':
        return <AdminSettings />;
      default:
        return null;
    }
  };

  const navItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'bookings', label: 'Bookings', icon: Calendar },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'gallery', label: 'Gallery', icon: Camera },
    { id: 'inquiries', label: 'Inquiries', icon: MessageSquare },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  return (
    <>
      <Helmet>
        <title>Admin Dashboard - Silver Fox Photography</title>
        <meta name="description" content="Admin dashboard for managing Silver Fox Photography bookings, users, and content." />
      </Helmet>

      <div className="bg-secondary text-foreground min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
              Admin Dashboard
            </h1>
            <p className="text-muted-foreground">
              Manage your photography business from one central location.
            </p>
          </motion.div>

          <div className="mb-8">
            <div className="border-b border-border">
              <nav className="-mb-px flex space-x-8 overflow-x-auto">
                {navItems.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'border-[var(--primary-gold)] text-[var(--primary-gold)]'
                        : 'border-transparent text-muted-foreground hover:text-foreground hover:border-gray-300'
                    }`}
                  >
                    <tab.icon className="h-4 w-4 mr-2" />
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {renderContent()}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;