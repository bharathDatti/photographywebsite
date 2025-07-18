import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { User, Calendar, Heart, Settings, Camera, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const UserDashboard = () => {
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [activeTab, setActiveTab] = useState('overview');
  const { toast } = useToast();

  useEffect(() => {
    const userData = localStorage.getItem('silverfox_user');
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
      
      const allBookings = JSON.parse(localStorage.getItem('silverfox_bookings') || '[]');
      const userBookings = allBookings.filter(booking => booking.email === parsedUser.email);
      setBookings(userBookings);
    }
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'text-green-600 bg-green-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      case 'cancelled': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const handleFeatureClick = (feature) => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  if (!user) {
    return (
      <div className="pt-16 min-h-screen bg-secondary flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground">Please log in to access your dashboard.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Dashboard - Silver Fox Photography</title>
        <meta name="description" content="Manage your Silver Fox Photography bookings, view your gallery, and update your profile." />
      </Helmet>

      <div className="bg-secondary text-foreground min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
              Welcome back, {user.name}!
            </h1>
            <p className="text-muted-foreground">
              Manage your bookings and explore your photography journey with us.
            </p>
          </motion.div>

          {/* Navigation Tabs */}
          <div className="mb-8">
            <div className="border-b border-border">
              <nav className="-mb-px flex space-x-8">
                {[
                  { id: 'overview', label: 'Overview', icon: User },
                  { id: 'bookings', label: 'My Bookings', icon: Calendar },
                  { id: 'gallery', label: 'My Gallery', icon: Camera },
                  { id: 'profile', label: 'Profile', icon: Settings }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center py-2 px-1 border-b-2 font-medium text-sm ${
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

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Stats Cards */}
                <div className="bg-card rounded-lg shadow-lg p-6">
                  <div className="flex items-center">
                    <Calendar className="h-8 w-8 text-[var(--primary-gold)]" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-muted-foreground">Total Bookings</p>
                      <p className="text-2xl font-bold text-card-foreground">{bookings.length}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-lg shadow-lg p-6">
                  <div className="flex items-center">
                    <Camera className="h-8 w-8 text-[var(--primary-gold)]" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-muted-foreground">Photos Captured</p>
                      <p className="text-2xl font-bold text-card-foreground">
                        {bookings.filter(b => b.status === 'confirmed').length * 150}+
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-lg shadow-lg p-6">
                  <div className="flex items-center">
                    <Heart className="h-8 w-8 text-[var(--primary-gold)]" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-muted-foreground">Favorite Photos</p>
                      <p className="text-2xl font-bold text-card-foreground">24</p>
                    </div>
                  </div>
                </div>

                {/* Recent Bookings */}
                <div className="md:col-span-2 lg:col-span-3 bg-card rounded-lg shadow-lg p-6">
                  <h3 className="font-serif text-xl font-semibold text-card-foreground mb-4">
                    Recent Bookings
                  </h3>
                  {bookings.length > 0 ? (
                    <div className="space-y-4">
                      {bookings.slice(0, 3).map((booking) => (
                        <div key={booking.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                              <Camera className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <p className="font-medium text-card-foreground">{booking.eventType}</p>
                              <p className="text-sm text-muted-foreground">{booking.eventDate} at {booking.eventTime}</p>
                            </div>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                            {booking.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground">No bookings yet. Book your first session!</p>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'bookings' && (
              <div className="bg-card rounded-lg shadow-lg">
                <div className="p-6 border-b border-border">
                  <h3 className="font-serif text-xl font-semibold text-card-foreground">
                    My Bookings
                  </h3>
                </div>
                <div className="p-6">
                  {bookings.length > 0 ? (
                    <div className="space-y-6">
                      {bookings.map((booking) => (
                        <div key={booking.id} className="border border-border rounded-lg p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h4 className="font-semibold text-card-foreground text-lg capitalize">
                                {booking.eventType} Photography
                              </h4>
                              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-2 ${getStatusColor(booking.status)}`}>
                                {booking.status}
                              </span>
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleFeatureClick('booking details')}
                            >
                              View Details
                            </Button>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            <div className="flex items-center text-muted-foreground">
                              <Calendar className="h-4 w-4 mr-2" />
                              {booking.eventDate}
                            </div>
                            <div className="flex items-center text-muted-foreground">
                              <Clock className="h-4 w-4 mr-2" />
                              {booking.eventTime}
                            </div>
                            <div className="flex items-center text-muted-foreground">
                              <MapPin className="h-4 w-4 mr-2" />
                              {booking.location}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-muted-foreground mb-4">No bookings yet</p>
                      <Button className="bg-gradient-gold text-white hover:opacity-90">
                        Book Your First Session
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'gallery' && (
              <div className="bg-card rounded-lg shadow-lg">
                <div className="p-6 border-b border-border">
                  <h3 className="font-serif text-xl font-semibold text-card-foreground">
                    My Photo Gallery
                  </h3>
                </div>
                <div className="p-6">
                  <div className="text-center py-12">
                    <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-muted-foreground mb-4">Your photos will appear here after your sessions</p>
                    <Button 
                      className="bg-gradient-gold text-white hover:opacity-90"
                      onClick={() => handleFeatureClick('gallery')}
                    >
                      Upload Photos
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="bg-card rounded-lg shadow-lg">
                <div className="p-6 border-b border-border">
                  <h3 className="font-serif text-xl font-semibold text-card-foreground">
                    Profile Settings
                  </h3>
                </div>
                <div className="p-6">
                  <div className="max-w-md space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-card-foreground mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={user.name}
                        readOnly
                        className="w-full px-4 py-3 border border-border rounded-lg bg-secondary text-muted-foreground"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-card-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={user.email}
                        readOnly
                        className="w-full px-4 py-3 border border-border rounded-lg bg-secondary text-muted-foreground"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-card-foreground mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={user.phone}
                        readOnly
                        className="w-full px-4 py-3 border border-border rounded-lg bg-secondary text-muted-foreground"
                      />
                    </div>
                    <Button 
                      className="bg-gradient-gold text-white hover:opacity-90"
                      onClick={() => handleFeatureClick('profile edit')}
                    >
                      Edit Profile
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;