
import React from 'react';
import { Link } from 'react-router-dom';
import { HeartPulse, Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-medical-900 dark:bg-slate-950 text-white pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <HeartPulse className="h-8 w-8 text-medical-400 dark:text-medical-500" />
              <span className="text-2xl font-display font-bold">MediCore</span>
            </div>
            <p className="text-medical-200 dark:text-slate-400 leading-relaxed">
              Transforming healthcare delivery through innovative digital solutions. Leading provider of HIMS and LIMS software in India and beyond.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-medical-800 dark:bg-slate-800 rounded-full hover:bg-medical-700 dark:hover:bg-slate-700 transition-colors" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-medical-800 dark:bg-slate-800 rounded-full hover:bg-medical-700 dark:hover:bg-slate-700 transition-colors" aria-label="Twitter"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-medical-800 dark:bg-slate-800 rounded-full hover:bg-medical-700 dark:hover:bg-slate-700 transition-colors" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-medical-200 dark:text-slate-400">
              <li><Link to="/" className="hover:text-white dark:hover:text-medical-400 transition-colors">Home</Link></li>
              <li><Link to="/products" className="hover:text-white dark:hover:text-medical-400 transition-colors">Products</Link></li>
              <li><Link to="/features" className="hover:text-white dark:hover:text-medical-400 transition-colors">Key Features</Link></li>
              <li><Link to="/about" className="hover:text-white dark:hover:text-medical-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white dark:hover:text-medical-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Support</h3>
            <ul className="space-y-4 text-medical-200 dark:text-slate-400">
              <li><a href="#" className="hover:text-white dark:hover:text-medical-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white dark:hover:text-medical-400 transition-colors">Client Support</a></li>
              <li><a href="#" className="hover:text-white dark:hover:text-medical-400 transition-colors">Implementation</a></li>
              <li><a href="#" className="hover:text-white dark:hover:text-medical-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white dark:hover:text-medical-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Get in Touch</h3>
            <ul className="space-y-4 text-medical-200 dark:text-slate-400">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-medical-400 dark:text-medical-500 shrink-0" />
                <span>Tech Park Tower, Sector 62, Noida, UP, India 201301</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-medical-400 dark:text-medical-500 shrink-0" />
                <span>+91 (120) 456-7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-medical-400 dark:text-medical-500 shrink-0" />
                <span>sales@medicore.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-medical-800 dark:border-slate-800 pt-8 text-center text-medical-400 dark:text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} MediCore Healthcare Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
