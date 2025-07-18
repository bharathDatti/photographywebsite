
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const sections = {
    'Services': [
      { name: 'Wedding', path: '/services' },
      { name: 'Events', path: '/services' },
      { name: 'Portraits', path: '/services' },
      { name: 'Fashion', path: '/services' },
    ],
    'Account': [
      { name: 'Manage Account', path: '/dashboard' },
      { name: 'Login', path: '/login' },
      { name: 'Register', path: '/register' },
    ],
    'Company': [
      { name: 'About Silver Fox', path: '/about' },
      { name: 'Gallery', path: '/gallery' },
      { name: 'Contact Us', path: '/contact' },
    ],
  };

  return (
    <footer className="bg-neutral-900 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <span className="text-lg font-semibold text-white">Silver Fox</span>
          </div>
          {Object.entries(sections).map(([title, links]) => (
            <div key={title}>
              <span className="text-sm font-medium text-neutral-500">{title}</span>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-sm hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Silver Fox Photography. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-white transition-colors"><Instagram size={18} /></a>
            <a href="#" className="hover:text-white transition-colors"><Facebook size={18} /></a>
            <a href="#" className="hover:text-white transition-colors"><Twitter size={18} /></a>
            <Link to="/about" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/about" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
