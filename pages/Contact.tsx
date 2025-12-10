import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import Button from '../components/Button';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="bg-white min-h-screen">
       {/* Header */}
       <div className="bg-navy-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-slate-300">We'd love to hear from you. Get in touch for a free initial consultation.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-navy-900 mb-8">Get in Touch</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-gold-100 p-3 rounded-full mr-4">
                  <Phone className="w-6 h-6 text-gold-600" />
                </div>
                <div>
                  <h3 className="font-bold text-navy-900">Contact Numbers</h3>
                  <div className="text-slate-600 mt-1 space-y-1">
                    <p><span className="font-medium text-navy-900 w-16 inline-block">Phone:</span> <a href="tel:+442079936180" className="hover:text-gold-600">+44 (0)20 7993 6180</a></p>
                    <p><span className="font-medium text-navy-900 w-16 inline-block">Mobile:</span> <a href="tel:+447903735920" className="hover:text-gold-600">+44 (0)79 0373 5920</a></p>
                    <p><span className="font-medium text-navy-900 w-16 inline-block">Fax:</span> +44 (0)20 7183 2877</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gold-100 p-3 rounded-full mr-4">
                  <Mail className="w-6 h-6 text-gold-600" />
                </div>
                <div>
                  <h3 className="font-bold text-navy-900">Email</h3>
                  <p className="text-slate-600 mb-1">Our friendly team is here to help.</p>
                  <a href="mailto:info@countyaccountants.co.uk" className="text-gold-600 font-medium hover:underline">info@countyaccountants.co.uk</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gold-100 p-3 rounded-full mr-4">
                  <MapPin className="w-6 h-6 text-gold-600" />
                </div>
                <div>
                  <h3 className="font-bold text-navy-900">Office</h3>
                  <p className="text-slate-600">
                    438 Streatham High Road,<br />
                    London. SW16 3PX
                  </p>
                </div>
              </div>

               <div className="flex items-start">
                <div className="bg-gold-100 p-3 rounded-full mr-4">
                  <Clock className="w-6 h-6 text-gold-600" />
                </div>
                <div>
                  <h3 className="font-bold text-navy-900">Office Hours</h3>
                  <div className="text-slate-600 mt-1 space-y-1">
                     <div className="flex justify-between w-48"><span>Mon - Sat:</span> <span>10:00 to 18:00</span></div>
                     <div className="flex justify-between w-48"><span>Sunday:</span> <span>Closed</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 w-full h-64 bg-slate-100 rounded-lg overflow-hidden relative">
               <img src="https://picsum.photos/seed/map/800/400" className="w-full h-full object-cover opacity-80" alt="Map Location" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <Button variant="white" className="shadow-lg pointer-events-none">
                    <MapPin className="w-4 h-4 mr-2 text-red-500" /> Locate Us
                 </Button>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 p-8 md:p-10 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-serif font-bold text-navy-900 mb-6">Send us a Message</h2>
            
            {formStatus === 'success' ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg text-center">
                <h3 className="font-bold text-xl mb-2">Message Sent!</h3>
                <p>Thank you for contacting us. One of our advisors will get back to you shortly.</p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-4 text-green-800 underline hover:text-green-900"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      required
                      className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      required
                      className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1">Service Interested In</label>
                  <select 
                    id="service" 
                    className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition bg-white"
                  >
                    <option value="">Select a service...</option>
                    <option value="bookkeeping">Bookkeeping</option>
                    <option value="tax">Taxation</option>
                    <option value="advisory">Business Advisory</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <Button 
                  type="submit" 
                  fullWidth 
                  disabled={formStatus === 'submitting'}
                  className="flex items-center justify-center"
                >
                  {formStatus === 'submitting' ? 'Sending...' : (
                    <>Send Message <Send className="w-4 h-4 ml-2" /></>
                  )}
                </Button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;