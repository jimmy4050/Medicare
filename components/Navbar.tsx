
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, HeartPulse } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 outline-none group">
            <HeartPulse className="h-8 w-8 text-medical-600 group-hover:scale-110 transition-transform" />
            <span className="text-2xl font-display font-bold text-medical-900">
              MediCore
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-semibold transition-colors ${
                  location.pathname === link.href 
                    ? 'text-medical-600' 
                    : 'text-medical-800 hover:text-medical-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-medical-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-medical-700 transition-all shadow-lg hover:shadow-xl active:scale-95"
            >
              Request Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-medical-900 p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden bg-white shadow-xl absolute w-full left-0 py-4 px-4 space-y-2 transition-all duration-300 origin-top ${
        isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
      }`}>
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className={`block px-3 py-2 text-base font-medium rounded-lg ${
              location.pathname === link.href
                ? 'bg-medical-50 text-medical-600'
                : 'text-medical-800 hover:bg-medical-50'
            }`}
          >
            {link.label}
          </Link>
        ))}
        <Link
          to="/contact"
          className="block w-full text-center bg-medical-600 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Request Demo
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
