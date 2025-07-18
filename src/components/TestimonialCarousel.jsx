
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Priya & Arjun Sharma',
      location: 'Mumbai, Maharashtra',
      rating: 5,
      text: 'Silver Fox Photography made our wedding day absolutely magical! Their attention to detail and ability to capture candid moments was incredible. Every photo tells our love story beautifully.',
      image: 'Happy Indian couple Priya and Arjun in wedding attire smiling together'
    },
    {
      id: 2,
      name: 'Meera Patel',
      location: 'Ahmedabad, Gujarat',
      rating: 5,
      text: 'The team was professional, creative, and made us feel so comfortable during our family portrait session. The photos exceeded our expectations and captured our family bond perfectly.',
      image: 'Elegant Indian woman Meera Patel in traditional saree with warm smile'
    },
    {
      id: 3,
      name: 'Rajesh & Kavya Nair',
      location: 'Kochi, Kerala',
      rating: 5,
      text: 'From our engagement to our wedding, Silver Fox Photography was with us every step of the way. Their artistic vision and technical expertise resulted in stunning photographs we will treasure forever.',
      image: 'Beautiful Kerala couple Rajesh and Kavya in traditional Kerala wedding attire'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--primary-charcoal)] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-[var(--text-gray)] text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our happy clients have to say about their experience with Silver Fox Photography.
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-xl p-8 md:p-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-[var(--primary-gold)] fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg md:text-xl text-[var(--primary-charcoal)] mb-6 leading-relaxed italic">
                    "{testimonials[currentIndex].text}"
                  </blockquote>
                  <div>
                    <p className="font-semibold text-[var(--primary-charcoal)] text-lg">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-[var(--text-gray)]">
                      {testimonials[currentIndex].location}
                    </p>
                  </div>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <img  
                    className="w-48 h-48 object-cover rounded-full shadow-lg" 
                    alt={`${testimonials[currentIndex].name} testimonial photo`}
                   src="https://images.unsplash.com/photo-1644424235476-295f24d503d9" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={goToPrevious}
              className="rounded-full p-2"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-[var(--primary-gold)]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={goToNext}
              className="rounded-full p-2"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
