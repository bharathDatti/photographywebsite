
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Camera, Users, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    eventTime: '',
    location: '',
    guestCount: '',
    duration: '',
    package: '',
    budget: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Store booking in localStorage
    const bookings = JSON.parse(localStorage.getItem('silverfox_bookings') || '[]');
    const newBooking = {
      id: Date.now(),
      ...formData,
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    
    bookings.push(newBooking);
    localStorage.setItem('silverfox_bookings', JSON.stringify(bookings));
    
    toast({
      title: "Booking request submitted!",
      description: "We'll contact you within 24 hours to confirm your booking.",
    });
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      eventDate: '',
      eventTime: '',
      location: '',
      guestCount: '',
      duration: '',
      package: '',
      budget: '',
      message: ''
    });
  };

  const eventTypes = [
    { value: 'wedding', label: 'Wedding Photography', icon: Heart },
    { value: 'portrait', label: 'Portrait Session', icon: Camera },
    { value: 'event', label: 'Event Photography', icon: Users },
    { value: 'commercial', label: 'Commercial Photography', icon: Camera },
    { value: 'fashion', label: 'Fashion Photography', icon: Camera },
    { value: 'maternity', label: 'Maternity & Newborn', icon: Heart }
  ];

  const packages = [
    { value: 'essential', label: 'Essential Package - ₹50,000' },
    { value: 'premium', label: 'Premium Package - ₹1,00,000' },
    { value: 'luxury', label: 'Luxury Package - ₹1,50,000' },
    { value: 'custom', label: 'Custom Package' }
  ];

  return (
    <>
      <Helmet>
        <title>Book Photography Session - Silver Fox Photography</title>
        <meta name="description" content="Book your photography session with Silver Fox Photography. Professional wedding, event, portrait, and commercial photography services across India." />
      </Helmet>

      <div className="pt-16">
        {/* Header */}
        <section className="py-20 bg-gradient-to-r from-[var(--primary-charcoal)] to-gray-800 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                Book Your Photography Session
              </h1>
              <p className="text-xl text-gray-300">
                Let's capture your special moments together. Fill out the form below to get started.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="font-serif text-2xl font-bold text-[var(--primary-charcoal)] mb-6">
                    Personal Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[var(--primary-charcoal)] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-gold)] focus:border-transparent transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--primary-charcoal)] mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-gold)] focus:border-transparent transition-colors"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-[var(--primary-charcoal)] mb-2">
                        Email Address *
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
                  </div>
                </div>

                {/* Event Details */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="font-serif text-2xl font-bold text-[var(--primary-charcoal)] mb-6">
                    Event Details
                  </h2>
                  
                  {/* Event Type Selection */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-[var(--primary-charcoal)] mb-4">
                      Photography Type *
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {eventTypes.map((type) => (
                        <label
                          key={type.value}
                          className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                            formData.eventType === type.value
                              ? 'border-[var(--primary-gold)] bg-[var(--accent-gold)]'
                              : 'border-gray-300 hover:border-[var(--primary-gold)]'
                          }`}
                        >
                          <input
                            type="radio"
                            name="eventType"
                            value={type.value}
                            checked={formData.eventType === type.value}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <type.icon className="h-6 w-6 text-[var(--primary-gold)] mr-3" />
                          <span className="text-sm font-medium text-[var(--primary-charcoal)]">
                            {type.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[var(--primary-charcoal)] mb-2">
                        <Calendar className="inline h-4 w-4 mr-2" />
                        Event Date *
                      </label>
                      <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-gold)] focus:border-transparent transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--primary-charcoal)] mb-2">
                        <Clock className="inline h-4 w-4 mr-2" />
                        Event Time *
                      </label>
                      <input
                        type="time"
                        name="eventTime"
                        value={formData.eventTime}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-gold)] focus:border-transparent transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--primary-charcoal)] mb-2">
                        <MapPin className="inline h-4 w-4 mr-2" />
                        Location *
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-gold)] focus:border-transparent transition-colors"
                        placeholder="Event venue or location"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--primary-charcoal)] mb-2">
                        <Users className="inline h-4 w-4 mr-2" />
                        Guest Count
                      </label>
                      <select
                        name="guestCount"
                        value={formData.guestCount}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-gold)] focus:border-transparent transition-colors"
                      >
                        <option value="">Select guest count</option>
                        <option value="1-10">1-10 people</option>
                        <option value="11-50">11-50 people</option>
                        <option value="51-100">51-100 people</option>
                        <option value="101-200">101-200 people</option>
                        <option value="200+">200+ people</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--primary-charcoal)] mb-2">
                        Duration
                      </label>
                      <select
                        name="duration"
                        value={formData.duration}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-gold)] focus:border-transparent transition-colors"
                      >
                        <option value="">Select duration</option>
                        <option value="2-4 hours">2-4 hours</option>
                        <option value="4-6 hours">4-6 hours</option>
                        <option value="6-8 hours">6-8 hours</option>
                        <option value="8-12 hours">8-12 hours</option>
                        <option value="Full day">Full day</option>
                        <option value="Multiple days">Multiple days</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--primary-charcoal)] mb-2">
                        Package Preference
                      </label>
                      <select
                        name="package"
                        value={formData.package}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-gold)] focus:border-transparent transition-colors"
                      >
                        <option value="">Select package</option>
                        {packages.map((pkg) => (
                          <option key={pkg.value} value={pkg.value}>
                            {pkg.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="font-serif text-2xl font-bold text-[var(--primary-charcoal)] mb-6">
                    Additional Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[var(--primary-charcoal)] mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-gold)] focus:border-transparent transition-colors"
                      >
                        <option value="">Select budget range</option>
                        <option value="Under ₹50,000">Under ₹50,000</option>
                        <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                        <option value="₹1,00,000 - ₹2,00,000">₹1,00,000 - ₹2,00,000</option>
                        <option value="₹2,00,000 - ₹3,00,000">₹2,00,000 - ₹3,00,000</option>
                        <option value="Above ₹3,00,000">Above ₹3,00,000</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-[var(--primary-charcoal)] mb-2">
                        Special Requirements or Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-gold)] focus:border-transparent transition-colors resize-none"
                        placeholder="Tell us about any special requirements, specific shots you want, or any other details that would help us serve you better..."
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <Button type="submit" size="lg" className="bg-gradient-gold text-white hover:opacity-90 px-12">
                    Submit Booking Request
                  </Button>
                  <p className="text-sm text-[var(--text-gray)] mt-4">
                    We'll review your request and contact you within 24 hours to confirm availability and discuss details.
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Booking;
