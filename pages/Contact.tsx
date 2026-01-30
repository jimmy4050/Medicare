
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', phone: '', organization: '', message: '' });
    }, 1500);
  };

  return (
    <div className="pt-32 pb-24 bg-medical-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-medical-900 mb-6">Let's Talk</h1>
          <p className="text-xl text-medical-700 max-w-2xl mx-auto">
            Ready to upgrade your healthcare facility? Schedule a personalized demo or speak with our sales experts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-medical-100">
              <h3 className="text-xl font-bold text-medical-900 mb-6 flex items-center">
                <MessageSquare className="w-6 h-6 mr-2 text-medical-600" /> Support Channels
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-medical-50 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-medical-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-medical-900">Email Us</p>
                    <p className="text-medical-600">sales@medicore.com</p>
                    <p className="text-medical-600">support@medicore.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-medical-50 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-medical-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-medical-900">Call Us</p>
                    <p className="text-medical-600">+91 (120) 456-7890</p>
                    <p className="text-medical-600">+91 987-654-3210</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-medical-50 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-medical-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-medical-900">Visit Us</p>
                    <p className="text-medical-600">Tech Park Tower, Sector 62, Noida, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-medical-900 text-white p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Clock className="w-6 h-6 mr-2 text-accent-teal" /> Business Hours
              </h3>
              <ul className="space-y-2 text-medical-200">
                <li className="flex justify-between"><span>Mon - Fri:</span> <span>9:00 AM - 6:30 PM</span></li>
                <li className="flex justify-between"><span>Saturday:</span> <span>10:00 AM - 2:00 PM</span></li>
                <li className="flex justify-between"><span>Sunday:</span> <span>Closed</span></li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-medical-100">
              {status === 'success' ? (
                <div className="py-20 text-center animate-in fade-in zoom-in duration-300">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-10 h-10" />
                  </div>
                  <h2 className="text-3xl font-bold text-medical-900 mb-4">Request Sent!</h2>
                  <p className="text-lg text-medical-600 mb-8">Thank you for your interest. A product specialist will contact you within 24 hours.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="bg-medical-600 text-white px-8 py-3 rounded-full font-bold hover:bg-medical-700 transition-all active:scale-95"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-medical-900">Full Name</label>
                      <input 
                        id="name"
                        required
                        type="text" 
                        value={form.name}
                        onChange={(e) => setForm({...form, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-medical-100 bg-medical-50 focus:outline-none focus:ring-2 focus:ring-medical-600 transition-all"
                        placeholder="Dr. Rajesh Kumar"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-medical-900">Email Address</label>
                      <input 
                        id="email"
                        required
                        type="email" 
                        value={form.email}
                        onChange={(e) => setForm({...form, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-medical-100 bg-medical-50 focus:outline-none focus:ring-2 focus:ring-medical-600 transition-all"
                        placeholder="rajesh@hospital.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-semibold text-medical-900">Phone Number</label>
                      <input 
                        id="phone"
                        required
                        type="tel" 
                        value={form.phone}
                        onChange={(e) => setForm({...form, phone: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-medical-100 bg-medical-50 focus:outline-none focus:ring-2 focus:ring-medical-600 transition-all"
                        placeholder="+91 99999 99999"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="org" className="text-sm font-semibold text-medical-900">Organization Name</label>
                      <input 
                        id="org"
                        required
                        type="text" 
                        value={form.organization}
                        onChange={(e) => setForm({...form, organization: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-medical-100 bg-medical-50 focus:outline-none focus:ring-2 focus:ring-medical-600 transition-all"
                        placeholder="City Lifeline Hospital"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-medical-900">How can we help?</label>
                    <textarea 
                      id="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({...form, message: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-medical-100 bg-medical-50 focus:outline-none focus:ring-2 focus:ring-medical-600 transition-all resize-none"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>
                  <button 
                    disabled={status === 'submitting'}
                    className="w-full bg-medical-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-medical-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 flex items-center justify-center active:scale-[0.99]"
                  >
                    {status === 'submitting' ? 'Sending...' : 'Request Consultation'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
        
        {/* Map Placeholder */}
        <div className="mt-20 h-96 w-full bg-medical-200 rounded-3xl overflow-hidden shadow-inner flex items-center justify-center relative border border-medical-300">
          <img src="https://picsum.photos/seed/location/1200/400" className="absolute inset-0 object-cover opacity-60" alt="Map Location" />
          <div className="bg-white p-6 rounded-2xl shadow-xl relative z-10 flex items-center space-x-4">
            <MapPin className="text-medical-600 w-10 h-10" />
            <div>
              <p className="font-bold text-medical-900">MediCore Global Headquarters</p>
              <p className="text-sm text-medical-600">Noida Sector 62, Uttar Pradesh, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
