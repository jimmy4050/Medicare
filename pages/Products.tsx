
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import { HIMS_MODULES, LIMS_MODULES } from '../constants.tsx';

const Products: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-medical-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-medical-900 dark:text-slate-100 mb-6">Our Solutions</h1>
          <p className="text-xl text-medical-700 dark:text-slate-400 max-w-3xl mx-auto">
            Comprehensive, modular, and scalable software suites tailored for diverse healthcare needs.
          </p>
        </div>

        {/* HIMS Section */}
        <div className="mb-24">
          <div className="flex items-center space-x-4 mb-10">
            <div className="h-10 w-2 bg-medical-600 dark:bg-medical-500 rounded-full"></div>
            <h2 className="text-3xl font-display font-bold text-medical-900 dark:text-slate-100">Hospital Management (HIMS)</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {HIMS_MODULES.map((module) => (
              <div key={module.id} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-medical-100 dark:border-slate-700 group">
                <div className="w-12 h-12 bg-medical-50 dark:bg-slate-700 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {module.icon}
                </div>
                <h3 className="text-xl font-bold text-medical-900 dark:text-slate-100 mb-3">{module.title}</h3>
                <p className="text-medical-600 dark:text-slate-400 mb-6">{module.description}</p>
                <ul className="space-y-2">
                  {module.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-medical-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-accent-teal mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* LIMS Section */}
        <div>
          <div className="flex items-center space-x-4 mb-10">
            <div className="h-10 w-2 bg-accent-teal rounded-full"></div>
            <h2 className="text-3xl font-display font-bold text-medical-900 dark:text-slate-100">Laboratory Information (LIMS)</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {LIMS_MODULES.map((module) => (
              <div key={module.id} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-medical-100 dark:border-slate-700 flex flex-col sm:flex-row gap-8">
                <div className="w-16 h-16 bg-medical-50 dark:bg-slate-700 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-medical-100 dark:group-hover:bg-slate-600 transition-colors">
                  {module.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-medical-900 dark:text-slate-100 mb-3">{module.title}</h3>
                  <p className="text-medical-600 dark:text-slate-400 mb-6 leading-relaxed">{module.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                    {module.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-medical-700 dark:text-slate-300 font-medium">
                        <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Speciality Highlight */}
        <div className="mt-24 bg-medical-900 dark:bg-slate-800 rounded-3xl p-12 text-white overflow-hidden relative group transition-colors duration-300">
          <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity">
            <CheckCircle2 className="w-64 h-64" />
          </div>
          <div className="max-w-2xl relative z-10">
            <h2 className="text-3xl font-display font-bold mb-6">Built for Trust & Charity Hospitals</h2>
            <p className="text-xl text-medical-200 dark:text-slate-300 mb-8 leading-relaxed">
              We offer special pricing and tailored workflows for non-profit and trust-run medical institutions. 
              Our mission is to enable affordable digital transformation for the social sector.
            </p>
            <Link to="/contact" className="inline-flex items-center text-white dark:text-medical-400 font-bold text-lg hover:underline underline-offset-8">
              Learn about our Trust Program <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
