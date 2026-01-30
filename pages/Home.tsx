
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Hospital } from 'lucide-react';
import { KEY_FEATURES } from '../constants.tsx';

const Home: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-medical-50 dark:bg-slate-900 pb-20 pt-16 lg:pt-32 transition-colors duration-300">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-medical-100/50 dark:from-medical-900/20 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-medical-100 dark:bg-slate-800 text-medical-700 dark:text-medical-400 text-sm font-semibold mb-6">
                <ShieldCheck className="w-4 h-4 mr-2" />
                NABH & NABL Compliant Solutions
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-medical-900 dark:text-slate-100 leading-tight mb-6">
                Next-Gen Healthcare <span className="text-medical-600 dark:text-medical-400">Operating System</span>
              </h1>
              <p className="text-xl text-medical-700 dark:text-slate-400 mb-8 leading-relaxed max-w-xl">
                Integrated HIMS & LIMS designed for hospitals, diagnostic labs, and healthcare trusts. Enterprise-grade security with local Indian workflow expertise.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/contact" className="bg-medical-600 dark:bg-medical-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-medical-700 dark:hover:bg-medical-600 transition-all shadow-lg hover:shadow-xl flex items-center justify-center group">
                  Request Demo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/products" className="bg-white dark:bg-slate-800 text-medical-800 dark:text-slate-100 border-2 border-medical-200 dark:border-slate-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-medical-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center">
                  Explore Products
                </Link>
              </div>
              
              <div className="mt-12 flex items-center space-x-8 text-medical-500 dark:text-slate-500">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-medical-900 dark:text-slate-100">500+</span>
                  <span className="text-sm">Installations</span>
                </div>
                <div className="w-px h-10 bg-medical-200 dark:bg-slate-800"></div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-medical-900 dark:text-slate-100">10M+</span>
                  <span className="text-sm">Patient Records</span>
                </div>
                <div className="w-px h-10 bg-medical-200 dark:bg-slate-800"></div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-medical-900 dark:text-slate-100">99.9%</span>
                  <span className="text-sm">Uptime</span>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-4 bg-medical-400/10 dark:bg-medical-400/5 blur-3xl rounded-full group-hover:bg-medical-400/20 transition-colors"></div>
              <img 
                src="https://picsum.photos/seed/med-dashboard/800/600" 
                alt="Healthcare Management Dashboard" 
                className="relative rounded-2xl shadow-2xl border-8 border-white dark:border-slate-800 transform hover:-translate-y-2 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white dark:bg-slate-900 border-y border-medical-100 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-medical-400 dark:text-slate-500 uppercase tracking-widest mb-8">
            Trusted by Leading Institutions Across India
          </p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 dark:invert dark:opacity-40 dark:hover:opacity-100 transition-all duration-500">
            <div className="flex items-center space-x-2 text-xl font-bold text-medical-900 dark:text-slate-100"><Hospital className="w-6 h-6" /> <span>Apex Health</span></div>
            <div className="flex items-center space-x-2 text-xl font-bold text-medical-900 dark:text-slate-100"><Hospital className="w-6 h-6" /> <span>Metropolis Med</span></div>
            <div className="flex items-center space-x-2 text-xl font-bold text-medical-900 dark:text-slate-100"><Hospital className="w-6 h-6" /> <span>Trust Care</span></div>
            <div className="flex items-center space-x-2 text-xl font-bold text-medical-900 dark:text-slate-100"><Hospital className="w-6 h-6" /> <span>Medicity</span></div>
          </div>
        </div>
      </section>

      {/* Quick Highlights */}
      <section className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-medical-900 dark:text-slate-100 mb-4">Powerful Features for Modern Medicine</h2>
          <p className="text-lg text-medical-600 dark:text-slate-400 max-w-2xl mx-auto">
            Our comprehensive suite addresses every aspect of hospital and laboratory operations.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {KEY_FEATURES.map((feature, idx) => (
            <div key={idx} className="p-8 rounded-2xl border border-medical-100 dark:border-slate-800 hover:border-medical-200 dark:hover:border-slate-700 hover:shadow-xl transition-all group bg-white dark:bg-slate-800/50">
              <div className="w-12 h-12 bg-medical-50 dark:bg-slate-800 rounded-xl flex items-center justify-center text-medical-600 dark:text-medical-400 mb-6 group-hover:bg-medical-600 dark:group-hover:bg-medical-500 group-hover:text-white transition-all">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-medical-900 dark:text-slate-100 mb-3">{feature.title}</h3>
              <p className="text-medical-600 dark:text-slate-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-medical-600 dark:bg-medical-700 relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">Ready to Digitalize Your Healthcare Facility?</h2>
          <p className="text-xl text-medical-100 mb-10 max-w-3xl mx-auto">
            Join hundreds of satisfied hospitals and laboratories. Let us help you streamline operations and improve patient care.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/contact" className="bg-white text-medical-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-medical-50 transition-all shadow-2xl active:scale-95">
              Book a Free Demo
            </Link>
            <Link to="/contact" className="bg-medical-800 dark:bg-slate-900 text-white border border-medical-500 dark:border-slate-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-medical-900 dark:hover:bg-black transition-all active:scale-95">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
