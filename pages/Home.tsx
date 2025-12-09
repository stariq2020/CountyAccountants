import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, FileText, ShieldCheck, Users, ArrowRight, BarChart3 } from 'lucide-react';
import Button from '../components/Button';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1920&auto=format&fit=crop" 
            alt="Accounting Team Collaborating in Modern Office" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-900/80 mix-blend-multiply"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Accounting & <br/>
              <span className="text-gold-500">Business Advisory</span> <br/>
              for UK SMEs.
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl font-light leading-relaxed">
              We move beyond the numbers to provide strategic insight, compliance security, and growth planning for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button className="w-full sm:w-auto">Get a Free Consultation</Button>
              </Link>
              <Link to="/services">
                <Button variant="white" className="w-full sm:w-auto">Explore Our Services</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Stats / Trust Section */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-navy-900">14+</h3>
              <p className="text-sm text-slate-500 uppercase tracking-wide">Years Experience</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-navy-900">500+</h3>
              <p className="text-sm text-slate-500 uppercase tracking-wide">Clients Served</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-navy-900">100%</h3>
              <p className="text-sm text-slate-500 uppercase tracking-wide">Cloud Compliant</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-navy-900">£50m+</h3>
              <p className="text-sm text-slate-500 uppercase tracking-wide">Managed Assets</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Preview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gold-600 font-medium tracking-wide uppercase text-sm mb-2">What We Do</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-navy-900">Comprehensive Financial Solutions</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border-t-4 border-navy-900">
              <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                <FileText className="w-7 h-7 text-navy-900" />
              </div>
              <h4 className="text-xl font-bold text-navy-900 mb-3">Bookkeeping & Accounts</h4>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Seamless management of your daily financial records, annual accounts, and VAT returns. We ensure accuracy so you can focus on growth.
              </p>
              <Link to="/services" className="text-gold-600 font-medium flex items-center hover:text-gold-500">
                Learn more <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border-t-4 border-gold-500">
              <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-gold-600" />
              </div>
              <h4 className="text-xl font-bold text-navy-900 mb-3">Business Advisory</h4>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Strategic planning, forecasting, and operational advice to take your business to the next level. We are your partners in success.
              </p>
              <Link to="/services" className="text-gold-600 font-medium flex items-center hover:text-gold-500">
                Learn more <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border-t-4 border-navy-900">
              <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7 text-navy-900" />
              </div>
              <h4 className="text-xl font-bold text-navy-900 mb-3">Taxation & Compliance</h4>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Expert handling of Corporation Tax, Personal Tax, and HMRC compliance. We minimize liability while ensuring full adherence to the law.
              </p>
              <Link to="/services" className="text-gold-600 font-medium flex items-center hover:text-gold-500">
                Learn more <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/services">
              <Button variant="outline">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-navy-900 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-gold-500 font-medium tracking-wide uppercase text-sm mb-2">Why Choose Us</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">More Than Just Accountants. <br/>We Are Your Partners.</h3>
              <p className="text-slate-300 mb-8 leading-relaxed text-lg">
                At County Accountants Limited, we understand the unique challenges faced by UK SMEs. Our approach combines big-firm expertise with the personal attention of a local partner.
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <Users className="w-6 h-6 text-gold-500" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-white">Personalised Service</h4>
                    <p className="text-slate-400 mt-1">Dedicated account managers who know your business inside out.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <BarChart3 className="w-6 h-6 text-gold-500" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-white">Proactive Advice</h4>
                    <p className="text-slate-400 mt-1">We don't just report history; we help you shape your financial future.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <ShieldCheck className="w-6 h-6 text-gold-500" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-white">Transparent Pricing</h4>
                    <p className="text-slate-400 mt-1">Clear, fixed monthly fees with no surprise bills or hidden costs.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/meeting/800/600" 
                alt="Client Meeting" 
                className="rounded-lg shadow-2xl border border-slate-700"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded shadow-lg hidden md:block max-w-xs">
                <p className="text-navy-900 font-serif italic text-lg">"County Accountants transformed how we view our finances. Highly recommended."</p>
                <p className="text-slate-500 text-sm mt-4 font-bold">— James Wilson, Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">Ready to streamline your business finances?</h2>
          <p className="text-slate-600 mb-8 text-lg">
            Book a complimentary 30-minute consultation with our senior advisors to discuss your needs.
          </p>
          <Link to="/contact">
            <Button size="lg" className="shadow-lg shadow-gold-500/20">Get In Touch</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;