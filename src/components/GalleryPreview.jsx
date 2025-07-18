
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GalleryPreview = () => {
  const galleryImages = [
    {
      id: 1,
      title: 'Traditional Wedding',
      category: 'Wedding',
      image: 'Beautiful Indian bride in red lehenga with intricate gold jewelry and henna'
    },
    {
      id: 2,
      title: 'Couple Portrait',
      category: 'Portrait',
      image: 'Romantic Indian couple in traditional attire during golden hour photography'
    },
    {
      id: 3,
      title: 'Cultural Celebration',
      category: 'Event',
      image: 'Vibrant Indian cultural festival with colorful decorations and traditional dancers'
    },
    {
      id: 4,
      title: 'Family Moments',
      category: 'Family',
      image: 'Happy Indian family of four in traditional clothing in beautiful garden setting'
    },
    {
      id: 5,
      title: 'Bridal Portrait',
      category: 'Portrait',
      image: 'Elegant Indian bride with traditional jewelry and makeup in natural lighting'
    },
    {
      id: 6,
      title: 'Wedding Ceremony',
      category: 'Wedding',
      image: 'Indian wedding ceremony with sacred fire and traditional rituals'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--primary-charcoal)] mb-4">
            Our Photography Gallery
          </h2>
          <p className="text-[var(--text-gray)] text-lg max-w-2xl mx-auto">
            Explore our collection of beautiful moments captured across India. 
            Each photograph tells a unique story of love, joy, and celebration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer hover-lift"
            >
              <div className="relative overflow-hidden rounded-lg image-overlay">
                <img  
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500" 
                  alt={image.title}
                 src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm text-[var(--primary-gold)] font-medium">{image.category}</p>
                    <h3 className="text-lg font-semibold">{image.title}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/gallery">
            <Button size="lg" className="bg-gradient-gold text-white hover:opacity-90">
              View Full Gallery
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryPreview;
