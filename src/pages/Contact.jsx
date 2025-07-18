
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
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
    
    // Store inquiry in localStorage
    const inquiries = JSON.parse(localStorage.getItem('silverfox_inquiries') || '[]');
    const newInquiry = {
      id: Date.now(),
      ...formData,
      date: new Date().toISOString(),
      status: 'new'
    };
    
    inquiries.push(newInquiry);
    localStorage.setItem('silverfox_inquiries', JSON.stringify(inquiries));
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 98765 43210', '+91 87654 32109'],
      action: 'tel:+919876543210'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@silverfoxphoto.com', 'bookings@silverfoxphoto.com'],
      action: 'mailto:info@silverfoxphoto.com'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Photography Street', 'Mumbai, Maharashtra 400001'],
      action: 'https://maps.google.com'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon - Sat: 9:00 AM - 8:00 PM', 'Sun: 10:00 AM - 6:00 PM'],
      action: null
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Silver Fox Photography</title>
        <meta name="description" content="Get in touch with Silver Fox Photography for bookings, inquiries, and consultations. Located in Mumbai with services across India." />
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
                Contact Us
              </h1>
              <p className="text-xl text-gray-300">
                Let's discuss your photography needs and create something beautiful together
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="font-serif text-3xl font-bold text-[var(--primary-charcoal)] mb-6">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[var(--primary-charcoal)] mb-2">
                        Name *
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
                        Phone *
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
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[var(--primary-charcoal)] mb-2">
                      Email *
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
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-gold)] focus:border-transparent transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="Wedding Photography">Wedding Photography</option>
                      <option value="Event Photography">Event Photography</option>
                      <option value="Portrait Session">Portrait Session</option>
                      <option value="Commercial Photography">Commercial Photography</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[var(--primary-charcoal)] mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-gold)] focus:border-transparent transition-colors resize-none"
                      placeholder="Tell us about your photography needs, event details, preferred dates, and any specific requirements..."
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full bg-gradient-gold text-white hover:opacity-90">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="font-serif text-3xl font-bold text-[var(--primary-charcoal)] mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-[var(--text-gray)] text-lg leading-relaxed">
                    We'd love to hear from you! Whether you're planning a wedding, need professional 
                    portraits, or have any questions about our services, don't hesitate to reach out.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[var(--primary-charcoal)] mb-2">
                          {info.title}
                        </h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-[var(--text-gray)]">
                            {info.action ? (
                              <a 
                                href={info.action} 
                                className="hover:text-[var(--primary-gold)] transition-colors"
                              >
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="font-semibold text-[var(--primary-charcoal)] mb-4">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 bg-[var(--primary-gold)] rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-[var(--primary-gold)] rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-[var(--primary-gold)] rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--primary-charcoal)] mb-4">
                Visit Our Studio
              </h2>
              <p className="text-[var(--text-gray)] text-lg">
                Located in the heart of Mumbai, our studio is easily accessible and equipped with state-of-the-art facilities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="h-96 bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-[var(--primary-gold)] mx-auto mb-4" />
                  <p className="text-[var(--text-gray)]">Interactive map will be integrated here</p>
                  <p className="text-sm text-[var(--text-gray)] mt-2">
                    123 Photography Street, Mumbai, Maharashtra 400001
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
