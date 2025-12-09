import React from 'react';
import { Target, Heart, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative py-24 bg-slate-100">
        <div className="absolute inset-0 bg-navy-900/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
             <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-6">About Us</h1>
             <p className="text-xl text-slate-600 leading-relaxed">
               Founded in 2009, County Accountants Limited has established itself as a trusted partner for SMEs across the UK. We believe in building lasting relationships based on integrity, expertise, and genuine care for your business success.
             </p>
          </div>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-navy-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-navy-900" />
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-3">Our Mission</h3>
            <p className="text-slate-600">
              To empower small businesses with financial clarity and strategic direction, enabling them to thrive in a competitive landscape.
            </p>
          </div>
          <div className="text-center p-6">
             <div className="w-16 h-16 bg-navy-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-navy-900" />
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-3">Client Focus</h3>
            <p className="text-slate-600">
              We treat your business as if it were our own. No jargon, no hidden fees—just honest, practical advice tailored to you.
            </p>
          </div>
          <div className="text-center p-6">
             <div className="w-16 h-16 bg-navy-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-navy-900" />
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-3">Excellence</h3>
            <p className="text-slate-600">
              We stay ahead of regulatory changes and technological advancements to provide top-tier service standards.
            </p>
          </div>
        </div>
      </div>

      {/* Director Profile */}
      <div className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl flex flex-col md:flex-row">
            <div className="md:w-2/5">
              <img 
                src="https://picsum.photos/seed/director/600/800" 
                alt="Sarah Jenkins, Director" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
              <h4 className="text-gold-600 font-bold uppercase tracking-wide text-sm mb-2">The Director</h4>
              <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">Sarah Jenkins <span className="text-lg font-sans font-normal text-slate-500">FCA</span></h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                With over 20 years of experience in practice and industry, Sarah founded County Accountants Limited with a vision to bridge the gap between traditional compliance and modern business advisory.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                "I started this firm because I saw too many small business owners overwhelmed by their finances. My goal is to take that stress away and replace it with confidence. When our clients succeed, we succeed."
              </p>
              <div>
                <Link to="/contact">
                  <Button>Contact Sarah's Team</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;