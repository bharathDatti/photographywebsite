import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, MessageSquare, BarChart3 } from 'lucide-react';

const AdminOverview = ({ bookings, users, inquiries }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'text-green-600 bg-green-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      case 'cancelled': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const stats = [
    { label: 'Total Bookings', value: bookings.length, icon: Calendar, color: 'text-blue-600' },
    { label: 'Total Users', value: users.length, icon: Users, color: 'text-green-600' },
    { label: 'Pending Bookings', value: bookings.filter(b => b.status === 'pending').length, icon: Calendar, color: 'text-yellow-600' },
    { label: 'New Inquiries', value: inquiries.filter(i => i.status === 'new').length, icon: MessageSquare, color: 'text-purple-600' }
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <div className="flex items-center">
              <stat.icon className={`h-8 w-8 ${stat.color}`} />
              <div className="ml-4">
                <p className="text-sm font-medium text-[var(--text-gray)]">{stat.label}</p>
                <p className="text-2xl font-bold text-[var(--primary-charcoal)]">{stat.value}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="font-serif text-xl font-semibold text-[var(--primary-charcoal)] mb-4">
            Recent Bookings
          </h3>
          {bookings.slice(0, 5).map((booking) => (
            <div key={booking.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
              <div>
                <p className="font-medium text-[var(--primary-charcoal)]">{booking.name}</p>
                <p className="text-sm text-[var(--text-gray)]">{booking.eventType} - {booking.eventDate}</p>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                {booking.status}
              </span>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="font-serif text-xl font-semibold text-[var(--primary-charcoal)] mb-4">
            Recent Users
          </h3>
          {users.slice(0, 5).map((user) => (
            <div key={user.id} className="flex items-center py-3 border-b border-gray-100 last:border-b-0">
              <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center text-white font-medium">
                {user.name.charAt(0)}
              </div>
              <div className="ml-3">
                <p className="font-medium text-[var(--primary-charcoal)]">{user.name}</p>
                <p className="text-sm text-[var(--text-gray)]">{user.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminOverview;