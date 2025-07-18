
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', 'Wedding', 'Portrait', 'Event', 'Family', 'Fashion'];

  const galleryImages = [
    {
      id: 1,
      title: 'Traditional Bride',
      category: 'Wedding',
      image: 'Stunning Indian bride in red and gold lehenga with intricate jewelry and henna designs'
    },
    {
      id: 2,
      title: 'Couple Romance',
      category: 'Portrait',
      image: 'Romantic Indian couple in traditional attire during sunset golden hour photography'
    },
    {
      id: 3,
      title: 'Cultural Dance',
      category: 'Event',
      image: 'Vibrant Indian classical dancers in colorful costumes performing traditional dance'
    },
    {
      id: 4,
      title: 'Family Joy',
      category: 'Family',
      image: 'Happy Indian joint family in traditional clothing celebrating together outdoors'
    },
    {
      id: 5,
      title: 'Fashion Portrait',
      category: 'Fashion',
      image: 'Elegant Indian model in contemporary fusion wear with dramatic lighting'
    },
    {
      id: 6,
      title: 'Wedding Ceremony',
      category: 'Wedding',
      image: 'Sacred Indian wedding ceremony with bride and groom around holy fire'
    },
    {
      id: 7,
      title: 'Bridal Makeup',
      category: 'Portrait',
      image: 'Close-up of Indian bride with traditional makeup and gold jewelry details'
    },
    {
      id: 8,
      title: 'Corporate Event',
      category: 'Event',
      image: 'Professional Indian corporate event with elegant decorations and lighting'
    },
    {
      id: 9,
      title: 'Maternity Shoot',
      category: 'Family',
      image: 'Beautiful Indian expecting mother in flowing dress in natural outdoor setting'
    },
    {
      id: 10,
      title: 'Fashion Editorial',
      category: 'Fashion',
      image: 'High-fashion Indian model in designer saree with artistic studio lighting'
    },
    {
      id: 11,
      title: 'Engagement Ring',
      category: 'Wedding',
      image: 'Artistic close-up of Indian engagement ring with traditional henna patterns'
    },
    {
      id: 12,
      title: 'Children Portrait',
      category: 'Family',
      image: 'Adorable Indian children in traditional festival clothes playing together'
    }
  ];

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Photography Gallery - Silver Fox Photography</title>
        <meta name="description" content="Explore our stunning collection of wedding, portrait, event, and family photography. Browse through our gallery of beautiful moments captured across India." />
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
                Photography Gallery
              </h1>
              <p className="text-xl text-gray-300">
                Discover our collection of beautiful moments captured with passion and artistry
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Buttons */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category 
                    ? "bg-gradient-gold text-white" 
                    : "border-[var(--primary-gold)] text-[var(--primary-gold)] hover:bg-[var(--primary-gold)] hover:text-white"
                  }
                >
                  <Filter className="h-4 w-4 mr-2" />
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer hover-lift"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative overflow-hidden rounded-lg image-overlay">
                    <img  
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" 
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
            </motion.div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <Button
                variant="ghost"
                size="sm"
                className="absolute -top-12 right-0 text-white hover:text-[var(--primary-gold)]"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </Button>
              <img  
                className="max-w-full max-h-[80vh] object-contain rounded-lg" 
                alt={selectedImage.title}
               src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <p className="text-[var(--primary-gold)] font-medium">{selectedImage.category}</p>
                <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Gallery;
