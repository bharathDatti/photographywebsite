import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, Camera, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Home = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <>
      <Helmet>
        <title>Silver Fox Photography - Artistry in Every Frame</title>
        <meta name="description" content="Experience premium photography with Silver Fox. Specializing in weddings, portraits, and events with a modern, artistic touch." />
      </Helmet>

      <div className="bg-black text-white">
        {/* Hero Section */}
        <section className="h-screen flex flex-col justify-center items-center text-center relative overflow-hidden">
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 z-0"
          >
            <img 
              className="w-full h-full object-cover opacity-40"
              alt="Dramatic black and white portrait of an Indian bride"
             src="https://images.unsplash.com/photo-1633382148761-d56d55cee3cd" />
          </motion.div>
          
          <div className="relative z-10 px-4">
            <motion.h1
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-4"
            >
              Artistry in Every Frame.
            </motion.h1>
            <motion.p
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-8"
            >
              Silver Fox Photography. Redefining moments with a blend of modern aesthetics and timeless emotion.
            </motion.p>
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
              className="flex gap-4 justify-center"
            >
              <Link to="/gallery">
                <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-500 rounded-full px-8">
                  Explore Gallery
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-neutral-700 text-neutral-300 hover:bg-neutral-900 hover:text-white rounded-full px-8">
                  Our Services <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Featured Work Section */}
        <section className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">Featured Work</h2>
              <p className="text-lg text-neutral-400 mt-2">A glimpse into our world of visual storytelling.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group relative overflow-hidden rounded-lg">
                <img  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Indian wedding ceremony" src="https://images.unsplash.com/photo-1499318582548-7c7f62bf3bae" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold">Weddings</h3>
                  <p className="text-sm">Timeless celebrations</p>
                </div>
              </motion.div>
              <div className="grid grid-cols-1 gap-4">
                <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group relative overflow-hidden rounded-lg">
                  <img  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Fashion portrait" src="https://images.unsplash.com/photo-1547283731-f1564bf5918f" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold">Fashion</h3>
                    <p className="text-sm">Styled elegance</p>
                  </div>
                </motion.div>
                <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group relative overflow-hidden rounded-lg">
                  <img  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Candid portrait" src="https://images.unsplash.com/photo-1562901169-5bf47e283c3a" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold">Portraits</h3>
                    <p className="text-sm">Authentic expressions</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Ethos Section */}
        <section className="py-24 bg-neutral-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Camera size={32} className="mx-auto mb-4 text-blue-500" />
                <h3 className="text-xl font-bold text-white mb-2">Modern Vision</h3>
                <p className="text-neutral-400">We use state-of-the-art equipment and techniques to deliver exceptional quality.</p>
              </motion.div>
              <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <Users size={32} className="mx-auto mb-4 text-blue-500" />
                <h3 className="text-xl font-bold text-white mb-2">Client-Centric</h3>
                <p className="text-neutral-400">Your story is unique. We tailor our approach to perfectly match your vision.</p>
              </motion.div>
              <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.4 }}>
                <Award size={32} className="mx-auto mb-4 text-blue-500" />
                <h3 className="text-xl font-bold text-white mb-2">Award-Winning</h3>
                <p className="text-neutral-400">Recognized for our creative excellence and dedication to the craft of photography.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-black text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
              Ready to tell your story?
            </motion.h2>
            <motion.p variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-lg text-neutral-300 max-w-xl mx-auto mb-8">
              Let's collaborate to create something extraordinary. Reach out to us for a consultation.
            </motion.p>
            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.4 }}>
              <Link to="/contact">
                <Button size="lg" className="bg-white text-black hover:bg-neutral-200 rounded-full px-8">
                  Get in Touch
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;