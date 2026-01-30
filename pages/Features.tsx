
import React from 'react';
import { Shield, RefreshCw, Smartphone, BarChart3, Lock, Users2, Database, LayoutGrid } from 'lucide-react';

const Features: React.FC = () => {
  const allFeatures = [
    { id: 'f-1', title: 'Data Security', icon: <Lock />, desc: 'End-to-end encryption with advanced audit logs for all clinical and financial transactions.' },
    { id: 'f-2', title: 'HL7 Integration', icon: <RefreshCw />, desc: 'Standardized messaging for seamless interoperability with third-party systems and devices.' },
    { id: 'f-3', title: 'Mobile Readiness', icon: <Smartphone />, desc: 'Access clinical data and management dashboards on-the-go with responsive mobile interfaces.' },
    { id: 'f-4', title: 'Advanced Analytics', icon: <BarChart3 />, desc: 'Real-time MIS reports and data visualization for informed administrative decisions.' },
    { id: 'f-5', title: 'Multi-Location Support', icon: <LayoutGrid />, desc: 'Centralized management for hospital chains and multi-branch laboratory operations.' },
    { id: 'f-6', title: 'Compliance Ready', icon: <Shield />, desc: 'Strict adherence to NABH, NABL, and ABDM standards for regulatory excellence.' },
    { id: 'f-7', title: 'Role-Based Access', icon: <Users2 />, desc: 'Define granular permissions for doctors, nurses, lab techs, and billing staff.' },
    { id: 'f-8', title: 'Cloud/On-Premise', icon: <Database />, desc: 'Flexible deployment options including hybrid cloud to match your IT strategy.' },
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-medical-600 font-bold tracking-widest uppercase text-sm">Capabilities</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-medical-900 mt-4 mb-6">Engineered for Performance</h1>
          <p className="text-xl text-medical-600 max-w-3xl mx-auto">
            Beyond just software modules, we provide a robust technical foundation that ensures your facility runs smoothly 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {allFeatures.map((f) => (
            <div key={f.id} className="group">
              <div className="w-14 h-14 bg-medical-50 rounded-2xl flex items-center justify-center text-medical-600 mb-6 group-hover:bg-medical-600 group-hover:text-white transition-all duration-300">
                {React.cloneElement(f.icon as React.ReactElement<{ className?: string }>, { className: 'w-7 h-7' })}
              </div>
              <h3 className="text-xl font-bold text-medical-900 mb-3">{f.title}</h3>
              <p className="text-medical-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-32 p-12 bg-medical-50 rounded-3xl border border-medical-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-medical-900 mb-6">Designed for Indian Healthcare Workflows</h2>
              <p className="text-lg text-medical-700 mb-6 leading-relaxed">
                Most international HIMS fail in India because they don't understand the unique challenges of OPD volume, TPA complexities, and localized reporting requirements.
              </p>
              <ul className="space-y-4">
                {['Integrated GST Compliance', 'Ayushman Bharat (ABDM) Integration', 'Local Language Report Support', 'TPA/Insurance Management for 50+ Providers'].map((item, i) => (
                  <li key={i} className="flex items-center text-medical-800 font-semibold">
                    <div className="w-2 h-2 bg-medical-600 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative group">
              <img src="https://picsum.photos/seed/hosp-tech/600/400" className="rounded-2xl shadow-lg border-4 border-white group-hover:scale-105 transition-transform duration-500" alt="Technology Integration" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
