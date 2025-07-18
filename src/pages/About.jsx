import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Camera, Award, Users, Heart, Star, MapPin } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Camera, label: 'Photos Captured', value: '50,000+' },
    { icon: Users, label: 'Happy Clients', value: '1,200+' },
    { icon: Award, label: 'Awards Won', value: '25+' },
    { icon: Star, label: 'Years Experience', value: '10+' },
  ];

  const team = [
    {
      name: 'Arjun Mehta',
      role: 'Lead Photographer & Founder',
      experience: '10+ years',
      specialization: 'Wedding & Portrait Photography',
      image: 'Professional Indian male photographer Arjun Mehta with camera in studio setting'
    },
    {
      name: 'Priya Sharma',
      role: 'Senior Photographer',
      experience: '8+ years',
      specialization: 'Fashion & Event Photography',
      image: 'Professional Indian female photographer Priya Sharma with professional camera equipment'
    },
    {
      name: 'Vikram Singh',
      role: 'Creative Director',
      experience: '7+ years',
      specialization: 'Commercial & Editorial Photography',
      image: 'Creative Indian photographer Vikram Singh in modern photography studio'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'We are passionate about capturing the beauty and emotion in every moment, bringing artistic vision to life through our lens.'
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our work, from technical precision to creative storytelling.'
    },
    {
      icon: Users,
      title: 'Connection',
      description: 'We believe in building genuine connections with our clients to capture authentic emotions and natural moments.'
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'We continuously evolve our techniques and embrace new technologies to deliver cutting-edge photography services.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Silver Fox Photography</title>
        <meta name="description" content="Learn about Silver Fox Photography's journey, our passionate team of photographers, and our commitment to capturing life's precious moments across India." />
      </Helmet>

      <div className="bg-background text-foreground">
        {/* Header */}
        <section className="py-20 bg-neutral-900 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                About Silver Fox Photography
              </h1>
              <p className="text-xl text-gray-300">
                Capturing life's precious moments with passion, creativity, and artistic excellence
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  Founded in 2014, Silver Fox Photography began as a dream to capture the beauty 
                  and emotion of India's most precious moments. What started as a small studio in 
                  Mumbai has grown into one of India's most trusted photography brands.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our journey has been defined by our commitment to excellence, innovation, and 
                  genuine connection with our clients. We believe that every photograph should 
                  tell a story, evoke emotion, and preserve memories for generations to come.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, we're proud to have captured over 50,000 precious moments across India, 
                  from intimate family portraits to grand wedding celebrations, each one unique 
                  and meaningful.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img  
                  className="w-full h-96 object-cover rounded-lg shadow-xl hover-lift" 
                  alt="Silver Fox Photography studio with professional equipment and team"
                 src="https://images.unsplash.com/photo-1597848808458-046a618c5717" />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-gold rounded-full flex items-center justify-center">
                  <Camera className="h-12 w-12 text-white" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-neutral-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <stat.icon className="h-8 w-8 text-[var(--primary-gold)] mx-auto mb-4" />
                  <div className="text-2xl md:text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                These core values guide everything we do and shape our approach to photography and client relationships.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center bg-card p-6 rounded-lg shadow-lg hover-lift"
                >
                  <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-card-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Meet Our Team
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Our talented team of photographers brings together years of experience, 
                creative vision, and passion for capturing beautiful moments.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center bg-secondary rounded-lg overflow-hidden hover-lift"
                >
                  <img  
                    className="w-full h-80 object-cover" 
                    alt={`${member.name} - ${member.role}`}
                   src="https://images.unsplash.com/photo-1644424235476-295f24d503d9" />
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                      {member.name}
                    </h3>
                    <p className="text-[var(--primary-gold)] font-medium mb-2">{member.role}</p>
                    <p className="text-muted-foreground text-sm mb-2">{member.experience}</p>
                    <p className="text-muted-foreground text-sm">{member.specialization}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Studio
                </h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  Located in the heart of Mumbai, our state-of-the-art studio is equipped with 
                  the latest photography equipment and technology. We also travel across India 
                  to capture your special moments wherever they may be.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-[var(--primary-gold)]" />
                    <span className="text-muted-foreground">
                      123 Photography Street, Mumbai, Maharashtra 400001
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Camera className="h-5 w-5 text-[var(--primary-gold)]" />
                    <span className="text-muted-foreground">
                      Professional studio with natural lighting
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-[var(--primary-gold)]" />
                    <span className="text-muted-foreground">
                      On-location services across India
                    </span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img  
                  className="w-full h-96 object-cover rounded-lg shadow-xl hover-lift" 
                  alt="Silver Fox Photography studio interior with professional equipment"
                 src="https://images.unsplash.com/photo-1597848808458-046a618c5717" />
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;