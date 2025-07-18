
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Gallery from '@/pages/Gallery';
import Services from '@/pages/Services';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Booking from '@/pages/Booking';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import UserDashboard from '@/pages/UserDashboard.jsx';
import AdminDashboard from '@/pages/AdminDashboard.jsx';

function App() {
  return (
    <Router>
      <Helmet>
        <title>Silver Fox Photography - Premium Indian Photography Services</title>
        <meta name="description" content="Silver Fox Photography offers premium wedding, event, and portrait photography services across India. Capturing your precious moments with artistic excellence." />
        <meta name="keywords" content="photography, wedding photography, event photography, portrait photography, India, Silver Fox" />
        <meta property="og:title" content="Silver Fox Photography - Premium Indian Photography Services" />
        <meta property="og:description" content="Capturing your precious moments with artistic excellence across India" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Layout>
      
      <Toaster />
    </Router>
  );
}

export default App;
