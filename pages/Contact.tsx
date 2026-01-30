
import React, { useState, useEffect, useMemo } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, AlertCircle } from 'lucide-react';

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  organization?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    message: ''
  });
  
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    organization: false,
    message: false
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  // Validation Logic
  const errors = useMemo(() => {
    const e: FormErrors = {};
    
    // Name validation
    if (!form.name.trim()) {
      e.name = 'Full name is required';
    } else if (form.name.trim().length < 3) {
      e.name = 'Name must be at least 3 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      e.email = 'Email address is required';
    } else if (!emailRegex.test(form.email)) {
      e.email = 'Please enter a valid email address';
    }

    // Phone validation (Standard Indian 10-digit format)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!form.phone.trim()) {
      e.phone = 'Phone number is required';
    } else if (!phoneRegex.test(form.phone.replace(/\s/g, ''))) {
      e.phone = 'Enter a valid 10-digit mobile number';
    }

    // Organization validation
    if (!form.organization.trim()) {
      e.organization = 'Organization name is required';
    }

    // Message validation
    if (!form.message.trim()) {
      e.message = 'Please tell us about your requirements';
    } else if (form.message.trim().length < 10) {
      e.message = 'Message should be at least 10 characters';
    }

    return e;
  }, [form]);

  const isFormValid = Object.keys(errors).length === 0;

  const handleBlur = (field: keyof typeof touched) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) {
      // Mark all as touched to show errors
      setTouched({
        name: true,
        email: true,
        phone: true,
        organization: true,
        message: true
      });
      return;
    }

    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', phone: '', organization: '', message: '' });
      setTouched({ name: false, email: false, phone: false, organization: false, message: false });
    }, 1500);
  };

  const renderError = (field: keyof FormErrors) => {
    if (touched[field as keyof typeof touched] && errors[field]) {
      return (
        <p className="mt-1 text-xs text-red-500 dark:text-red-400 flex items-center animate-in fade-in slide-in-from-top-1">
          <AlertCircle className="w-3 h-3 mr-1" />
          {errors[field]}
        </p>
      );
    }
    return null;
  };

  const getInputClass = (field: keyof FormErrors) => {
    const base = "w-full px-4 py-3 rounded-xl border bg-medical-50 dark:bg-slate-700 text-medical-900 dark:text-slate-100 focus:outline-none focus:ring-2 transition-all";
    const errorState = touched[field as keyof typeof touched] && errors[field] 
      ? "border-red-500 ring-red-500/10 focus:ring-red-500 focus:border-red-500" 
      : "border-medical-100 dark:border-slate-700 focus:ring-medical-600 focus:border-medical-600";
    return `${base} ${errorState}`;
  };

  return (
    <div className="pt-32 pb-24 bg-medical-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-medical-900 dark:text-slate-100 mb-6">Let's Talk</h1>
          <p className="text-xl text-medical-700 dark:text-slate-400 max-w-2xl mx-auto">
            Ready to upgrade your healthcare facility? Schedule a personalized demo or speak with our sales experts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-medical-100 dark:border-slate-700 transition-colors">
              <h3 className="text-xl font-bold text-medical-900 dark:text-slate-100 mb-6 flex items-center">
                <MessageSquare className="w-6 h-6 mr-2 text-medical-600 dark:text-medical-400" /> Support Channels
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-medical-50 dark:bg-slate-700 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-medical-600 dark:text-medical-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-medical-900 dark:text-slate-100">Email Us</p>
                    <p className="text-medical-600 dark:text-slate-400">sales@medicore.com</p>
                    <p className="text-medical-600 dark:text-slate-400">support@medicore.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-medical-50 dark:bg-slate-700 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-medical-600 dark:text-medical-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-medical-900 dark:text-slate-100">Call Us</p>
                    <p className="text-medical-600 dark:text-slate-400">+91 (120) 456-7890</p>
                    <p className="text-medical-600 dark:text-slate-400">+91 987-654-3210</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-medical-50 dark:bg-slate-700 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-medical-600 dark:text-medical-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-medical-900 dark:text-slate-100">Visit Us</p>
                    <p className="text-medical-600 dark:text-slate-400">Tech Park Tower, Sector 62, Noida, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-medical-900 dark:bg-slate-800 text-white p-8 rounded-2xl transition-colors">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Clock className="w-6 h-6 mr-2 text-accent-teal" /> Business Hours
              </h3>
              <ul className="space-y-2 text-medical-200 dark:text-slate-300">
                <li className="flex justify-between"><span>Mon - Fri:</span> <span>9:00 AM - 6:30 PM</span></li>
                <li className="flex justify-between"><span>Saturday:</span> <span>10:00 AM - 2:00 PM</span></li>
                <li className="flex justify-between"><span>Sunday:</span> <span>Closed</span></li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-slate-800 p-10 rounded-3xl shadow-lg border border-medical-100 dark:border-slate-700 transition-colors">
              {status === 'success' ? (
                <div className="py-20 text-center animate-in fade-in zoom-in duration-300">
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-10 h-10" />
                  </div>
                  <h2 className="text-3xl font-bold text-medical-900 dark:text-slate-100 mb-4">Request Sent!</h2>
                  <p className="text-lg text-medical-600 dark:text-slate-400 mb-8">Thank you for your interest. A product specialist will contact you within 24 hours.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="bg-medical-600 dark:bg-medical-500 text-white px-8 py-3 rounded-full font-bold hover:bg-medical-700 dark:hover:bg-medical-600 transition-all active:scale-95"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-medical-900 dark:text-slate-300 flex justify-between">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input 
                        id="name"
                        type="text" 
                        autoComplete="name"
                        value={form.name}
                        onChange={(e) => setForm({...form, name: e.target.value})}
                        onBlur={() => handleBlur('name')}
                        className={getInputClass('name')}
                        placeholder="Dr. Rajesh Kumar"
                      />
                      {renderError('name')}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-medical-900 dark:text-slate-300 flex justify-between">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input 
                        id="email"
                        type="email" 
                        autoComplete="email"
                        value={form.email}
                        onChange={(e) => setForm({...form, email: e.target.value})}
                        onBlur={() => handleBlur('email')}
                        className={getInputClass('email')}
                        placeholder="rajesh@hospital.com"
                      />
                      {renderError('email')}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-semibold text-medical-900 dark:text-slate-300 flex justify-between">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input 
                        id="phone"
                        type="tel" 
                        autoComplete="tel"
                        value={form.phone}
                        onChange={(e) => setForm({...form, phone: e.target.value})}
                        onBlur={() => handleBlur('phone')}
                        className={getInputClass('phone')}
                        placeholder="99999 99999"
                      />
                      {renderError('phone')}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="org" className="text-sm font-semibold text-medical-900 dark:text-slate-300 flex justify-between">
                        Organization <span className="text-red-500">*</span>
                      </label>
                      <input 
                        id="org"
                        type="text" 
                        value={form.organization}
                        onChange={(e) => setForm({...form, organization: e.target.value})}
                        onBlur={() => handleBlur('organization')}
                        className={getInputClass('organization')}
                        placeholder="City Lifeline Hospital"
                      />
                      {renderError('organization')}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-medical-900 dark:text-slate-300 flex justify-between">
                      How can we help? <span className="text-red-500">*</span>
                    </label>
                    <textarea 
                      id="message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({...form, message: e.target.value})}
                      onBlur={() => handleBlur('message')}
                      className={getInputClass('message')}
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                    {renderError('message')}
                  </div>
                  <div className="pt-2">
                    <button 
                      type="submit"
                      disabled={status === 'submitting' || (Object.keys(touched).some(k => touched[k as keyof typeof touched]) && !isFormValid)}
                      className="w-full bg-medical-600 dark:bg-medical-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-medical-700 dark:hover:bg-medical-600 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center active:scale-[0.99]"
                    >
                      {status === 'submitting' ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : 'Request Consultation'}
                    </button>
                    {!isFormValid && Object.values(touched).some(v => v) && (
                      <p className="text-center text-xs text-medical-500 dark:text-slate-500 mt-4">
                        Please correct the errors above to submit the form.
                      </p>
                    )}
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
        
        {/* Map Placeholder */}
        <div className="mt-20 h-96 w-full bg-medical-200 dark:bg-slate-800 rounded-3xl overflow-hidden shadow-inner flex items-center justify-center relative border border-medical-300 dark:border-slate-700 transition-colors">
          <img src="https://picsum.photos/seed/location/1200/400" className="absolute inset-0 object-cover opacity-60 dark:opacity-30" alt="Map Location" />
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl relative z-10 flex items-center space-x-4">
            <MapPin className="text-medical-600 dark:text-medical-400 w-10 h-10" />
            <div>
              <p className="font-bold text-medical-900 dark:text-slate-100">MediCore Global Headquarters</p>
              <p className="text-sm text-medical-600 dark:text-slate-400">Noida Sector 62, Uttar Pradesh, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
