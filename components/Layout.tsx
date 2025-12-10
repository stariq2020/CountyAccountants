import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Linkedin, Facebook, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-600">
      {/* Top Bar - Info */}
      <div className="bg-navy-900 text-slate-300 py-2 text-xs md:text-sm hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center hover:text-white transition-colors cursor-pointer">
              <Phone className="w-3 h-3 mr-2 text-gold-500" /> +44 (0)20 7993 6180
            </span>
            <span className="flex items-center hover:text-white transition-colors cursor-pointer">
              <Mail className="w-3 h-3 mr-2 text-gold-500" /> info@countyaccountants.co.uk
            </span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-3 h-3" /></a>
            <a href="#" className="hover:text-white transition-colors"><Facebook className="w-3 h-3" /></a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav 
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <div className="bg-navy-900 text-white p-2 mr-3 group-hover:bg-gold-500 transition-colors duration-300">
                 <span className="font-serif font-bold text-xl">CA</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg md:text-xl text-navy-900 leading-none">COUNTY</span>
                <span className="text-xs tracking-widest text-slate-500 uppercase">Accountants Ltd</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-gold-600 ${
                    location.pathname === link.path ? 'text-navy-900 font-semibold' : 'text-slate-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact">
                <Button className="py-2 px-5 text-sm">Get a Consultation</Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-navy-900 hover:text-gold-600 focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-3 rounded-md text-base font-medium ${
                    location.pathname === link.path ? 'bg-slate-50 text-gold-600' : 'text-slate-600 hover:text-navy-900 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-4 px-3">
                 <Link to="/contact">
                  <Button fullWidth>Get a Consultation</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-navy-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="font-serif font-bold text-2xl text-white">COUNTY</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Serving UK SMEs since 2009. We provide clarity, compliance, and strategic growth advice to businesses across the country.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-slate-400 hover:text-gold-500 transition-colors"><Linkedin className="w-5 h-5"/></a>
              <a href="#" className="text-slate-400 hover:text-gold-500 transition-colors"><Facebook className="w-5 h-5"/></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-6 text-gold-500">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-slate-400 hover:text-white text-sm transition-colors flex items-center">
                    <ChevronRight className="w-3 h-3 mr-2 text-gold-500" /> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-6 text-gold-500">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white text-sm transition-colors flex items-center">
                  <ChevronRight className="w-3 h-3 mr-2 text-gold-500" /> Bookkeeping
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white text-sm transition-colors flex items-center">
                  <ChevronRight className="w-3 h-3 mr-2 text-gold-500" /> Taxation
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white text-sm transition-colors flex items-center">
                  <ChevronRight className="w-3 h-3 mr-2 text-gold-500" /> Business Advisory
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white text-sm transition-colors flex items-center">
                  <ChevronRight className="w-3 h-3 mr-2 text-gold-500" /> Management Accounts
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-6 text-gold-500">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start text-slate-400 text-sm">
                <MapPin className="w-5 h-5 mr-3 text-gold-500 flex-shrink-0" />
                <span>438 Streatham High Road,<br/>London. SW16 3PX</span>
              </li>
              <li className="flex items-center text-slate-400 text-sm">
                <Phone className="w-5 h-5 mr-3 text-gold-500 flex-shrink-0" />
                <span>+44 (0)20 7993 6180</span>
              </li>
              <li className="flex items-center text-slate-400 text-sm">
                <Mail className="w-5 h-5 mr-3 text-gold-500 flex-shrink-0" />
                <span>info@countyaccountants.co.uk</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} County Accountants Limited. Registered in England & Wales.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;