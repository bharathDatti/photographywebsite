
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Camera, Heart, Users, Briefcase, Star, ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Wedding Photography',
      description: 'Complete wedding coverage from pre-wedding shoots to reception ceremonies',
      features: ['Pre-wedding photoshoot', 'Ceremony coverage', 'Reception photography', 'Edited high-resolution images', 'Online gallery'],
      price: 'Starting from ₹75,000',
      image: 'Beautiful Indian wedding ceremony with bride and groom in traditional attire'
    },
    {
      icon: Users,
      title: 'Event Photography',
      description: 'Professional coverage for corporate events, parties, and special celebrations',
      features: ['Event documentation', 'Candid moments', 'Group photography', 'Same-day preview', 'Professional editing'],
      price: 'Starting from ₹25,000',
      image: 'Elegant Indian corporate event with professional lighting and decorations'
    },
    {
      icon: Camera,
      title: 'Portrait Sessions',
      description: 'Individual, couple, and family portrait sessions in studio or outdoor locations',
      features: ['Studio or outdoor shoot', 'Professional lighting', 'Wardrobe consultation', 'Retouched images', 'Print options'],
      price: 'Starting from ₹15,000',
      image: 'Professional Indian family portrait in traditional clothing with warm lighting'
    },
    {
      icon: Star,
      title: 'Fashion Photography',
      description: 'High-end fashion and modeling photography for portfolios and campaigns',
      features: ['Studio setup', 'Professional styling', 'Multiple looks', 'High-fashion editing', 'Portfolio ready images'],
      price: 'Starting from ₹30,000',
      image: 'High-fashion Indian model in designer outfit with dramatic studio lighting'
    },
    {
      icon: Briefcase,
      title: 'Commercial Photography',
      description: 'Product photography, corporate headshots, and business promotional content',
      features: ['Product photography', 'Corporate headshots', 'Brand photography', 'Commercial licensing', 'Quick turnaround'],
      price: 'Starting from ₹20,000',
      image: 'Professional Indian business team in modern office setting'
    },
    {
      icon: Heart,
      title: 'Maternity & Newborn',
      description: 'Gentle and artistic photography for expecting mothers and newborn babies',
      features: ['Maternity sessions', 'Newborn photography', 'Family inclusion', 'Safe posing', 'Artistic editing'],
      price: 'Starting from ₹18,000',
      image: 'Beautiful Indian expecting mother in flowing dress in natural outdoor setting'
    }
  ];

  const packages = [
    {
      name: 'Essential',
      price: '₹50,000',
      duration: '6 hours',
      features: [
        '1 Professional photographer',
        '200+ edited photos',
        'Online gallery',
        'Basic retouching',
        '2-week delivery'
      ]
    },
    {
      name: 'Premium',
      price: '₹1,00,000',
      duration: '8 hours',
      features: [
        '2 Professional photographers',
        '400+ edited photos',
        'Online gallery + USB',
        'Advanced retouching',
        '1-week delivery',
        'Engagement shoot included'
      ],
      popular: true
    },
    {
      name: 'Luxury',
      price: '₹1,50,000',
      duration: '12 hours',
      features: [
        '3 Professional photographers',
        '600+ edited photos',
        'Premium album + USB',
        'Cinematic editing',
        '3-day delivery',
        'Pre-wedding + engagement',
        'Same-day highlights'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Photography Services - Silver Fox Photography</title>
        <meta name="description" content="Professional photography services including weddings, events, portraits, fashion, and commercial photography. Premium packages available across India." />
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
                Our Photography Services
              </h1>
              <p className="text-xl text-gray-300">
                Professional photography services tailored to capture your most precious moments
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-lg overflow-hidden hover-lift"
                >
                  <div className="relative h-64">
                    <img  
                      className="w-full h-full object-cover" 
                      alt={service.title}
                     src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                    <div className="absolute top-4 left-4 bg-gradient-gold text-white p-3 rounded-full">
                      <service.icon className="h-6 w-6" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-serif text-2xl font-bold text-[var(--primary-charcoal)] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-[var(--text-gray)] mb-4">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-[var(--text-gray)]">
                          <Check className="h-4 w-4 text-[var(--primary-gold)] mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-[var(--primary-gold)]">
                        {service.price}
                      </span>
                      <Link to="/booking">
                        <Button className="bg-gradient-gold text-white hover:opacity-90">
                          Book Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Wedding Packages */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--primary-charcoal)] mb-4">
                Wedding Photography Packages
              </h2>
              <p className="text-[var(--text-gray)] text-lg max-w-2xl mx-auto">
                Choose the perfect package for your special day. All packages include professional editing and online gallery.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-white rounded-lg shadow-lg overflow-hidden hover-lift ${
                    pkg.popular ? 'ring-2 ring-[var(--primary-gold)] relative' : ''
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <span className="bg-gradient-gold text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="p-8">
                    <h3 className="font-serif text-2xl font-bold text-[var(--primary-charcoal)] mb-2">
                      {pkg.name}
                    </h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-[var(--primary-gold)]">{pkg.price}</span>
                      <span className="text-[var(--text-gray)] ml-2">({pkg.duration})</span>
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-[var(--text-gray)]">
                          <Check className="h-4 w-4 text-[var(--primary-gold)] mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Link to="/booking">
                      <Button 
                        className={`w-full ${
                          pkg.popular 
                            ? 'bg-gradient-gold text-white hover:opacity-90' 
                            : 'border-[var(--primary-gold)] text-[var(--primary-gold)] hover:bg-[var(--primary-gold)] hover:text-white'
                        }`}
                        variant={pkg.popular ? 'default' : 'outline'}
                      >
                        Choose {pkg.name}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[var(--primary-charcoal)] to-gray-800 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Ready to Book Your Session?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss your photography needs and create something beautiful together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/booking">
                  <Button size="lg" className="bg-gradient-gold text-white hover:opacity-90 px-8">
                    Book Now
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[var(--primary-charcoal)] px-8">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
