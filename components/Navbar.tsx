
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, HeartPulse, ChevronRight, Sun, Moon } from 'lucide-react';
import { NAV_LINKS } from '../constants.tsx';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode }) => {
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

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 dark:bg-slate-900/90 shadow-md backdrop-blur-md py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 outline-none group">
            <HeartPulse className="h-8 w-8 text-medical-600 dark:text-medical-400 group-hover:scale-110 transition-transform" />
            <span className="text-2xl font-display font-bold text-medical-900 dark:text-slate-100">
              MediCore
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-semibold transition-colors ${
                    location.pathname === link.href 
                      ? 'text-medical-600 dark:text-medical-400' 
                      : 'text-medical-800 dark:text-slate-300 hover:text-medical-600 dark:hover:text-medical-400'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-2"></div>

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <Link
              to="/contact"
              className="bg-medical-600 dark:bg-medical-500 text-white px-6 py-2.5 rounded-full font-bold hover:bg-medical-700 dark:hover:bg-medical-600 transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center space-x-2 ring-4 ring-medical-600/10"
            >
              <span>Request Demo</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-medical-900 dark:text-slate-100 p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden bg-white dark:bg-slate-900 shadow-xl absolute w-full left-0 py-4 px-4 space-y-2 transition-all duration-300 origin-top ${
        isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
      }`}>
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className={`block px-3 py-2 text-base font-medium rounded-lg ${
              location.pathname === link.href
                ? 'bg-medical-50 dark:bg-slate-800 text-medical-600 dark:text-medical-400'
                : 'text-medical-800 dark:text-slate-300 hover:bg-medical-50 dark:hover:bg-slate-800'
            }`}
          >
            {link.label}
          </Link>
        ))}
        <Link
          to="/contact"
          className="flex items-center justify-center space-x-2 w-full text-center bg-medical-600 dark:bg-medical-500 text-white px-6 py-3 rounded-lg font-bold shadow-lg"
        >
          <span>Request Demo</span>
          <ChevronRight className="w-5 h-5" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
