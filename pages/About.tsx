
import React from 'react';
import { Target, Eye, Award, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-medical-900 dark:text-slate-100 mb-8 leading-tight">
              Pioneering <span className="text-medical-600 dark:text-medical-400">Digital Transformation</span> in Healthcare
            </h1>
            <p className="text-lg text-medical-700 dark:text-slate-400 mb-6 leading-relaxed">
              Founded in 2012, MediCore Solutions began with a simple mission: to make world-class healthcare IT accessible to every medical facility, regardless of size or budget.
            </p>
            <p className="text-lg text-medical-700 dark:text-slate-400 leading-relaxed">
              Today, we are a leading provider of HIMS and LIMS solutions in South Asia, powering over 500+ institutions. Our team combines deep expertise in clinical workflows with cutting-edge software engineering to deliver products that truly make a difference.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://picsum.photos/seed/team1/400/300" className="rounded-2xl shadow-lg dark:border-4 dark:border-slate-800" alt="Team" />
            <img src="https://picsum.photos/seed/team2/400/300" className="rounded-2xl shadow-lg mt-8 dark:border-4 dark:border-slate-800" alt="Office" />
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          <div className="text-center p-8 rounded-3xl bg-medical-50 dark:bg-slate-800/50 border border-medical-100 dark:border-slate-800 transition-colors">
            <div className="w-16 h-16 bg-white dark:bg-slate-700 rounded-2xl flex items-center justify-center text-medical-600 dark:text-medical-400 mx-auto mb-6 shadow-sm">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-medical-900 dark:text-slate-100 mb-4">Our Mission</h3>
            <p className="text-medical-600 dark:text-slate-400">To simplify healthcare operations through intuitive technology that saves time and lives.</p>
          </div>
          <div className="text-center p-8 rounded-3xl bg-medical-50 dark:bg-slate-800/50 border border-medical-100 dark:border-slate-800 transition-colors">
            <div className="w-16 h-16 bg-white dark:bg-slate-700 rounded-2xl flex items-center justify-center text-medical-600 dark:text-medical-400 mx-auto mb-6 shadow-sm">
              <Eye className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-medical-900 dark:text-slate-100 mb-4">Our Vision</h3>
            <p className="text-medical-600 dark:text-slate-400">To be the digital backbone of a connected, efficient, and patient-centric healthcare ecosystem.</p>
          </div>
          <div className="text-center p-8 rounded-3xl bg-medical-50 dark:bg-slate-800/50 border border-medical-100 dark:border-slate-800 transition-colors">
            <div className="w-16 h-16 bg-white dark:bg-slate-700 rounded-2xl flex items-center justify-center text-medical-600 dark:text-medical-400 mx-auto mb-6 shadow-sm">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-medical-900 dark:text-slate-100 mb-4">Our Commitment</h3>
            <p className="text-medical-600 dark:text-slate-400">Uncompromising data security, absolute compliance, and reliable 24/7 local support.</p>
          </div>
        </div>

        {/* Compliance */}
        <div className="bg-medical-900 dark:bg-slate-800 text-white rounded-3xl p-12 overflow-hidden relative transition-colors duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold mb-6">A Compliance-Driven Approach</h2>
              <p className="text-medical-200 dark:text-slate-300 text-lg mb-8 leading-relaxed">
                We understand that healthcare software is more than just tools—it's about regulatory peace of mind. Our development lifecycle follows ISO 27001 standards and ensures you are always ready for NABH/NABL inspections.
              </p>
              <div className="space-y-4">
                {['ISO 27001 Certified Security', 'HIPAA Compliant Data Handling', 'NABH/NABL Standards Built-in', 'GDPR/DPDP Ready'].map((text, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-accent-teal" />
                    <span className="text-lg font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-8">
                <div className="w-32 h-32 bg-white/10 dark:bg-slate-700/50 rounded-2xl border border-white/20 dark:border-slate-600 flex flex-col items-center justify-center backdrop-blur-sm">
                  <span className="text-3xl font-bold">12+</span>
                  <span className="text-xs uppercase">Years Exp.</span>
                </div>
                <div className="w-32 h-32 bg-white/10 dark:bg-slate-700/50 rounded-2xl border border-white/20 dark:border-slate-600 flex flex-col items-center justify-center backdrop-blur-sm mt-8">
                  <span className="text-3xl font-bold">100%</span>
                  <span className="text-xs uppercase">Compliance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
