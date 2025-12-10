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
            <Link to="/" className="flex items-center gap-3 group">
              {/* Custom SVG Logo */}
              <div className="relative w-12 h-12 flex-shrink-0">
                <svg viewBox="0 0 100 100" className="w-full h-full text-navy-900 group-hover:text-navy-800 transition-colors" fill="currentColor">
                  {/* Outer Box */}
                  <path d="M5 5H95V95H5Z" stroke="currentColor" strokeWidth="8" fill="none" />
                  
                  {/* Bars */}
                  <rect x="22" y="50" width="14" height="30" />
                  <rect x="43" y="35" width="14" height="45" />
                  <rect x="64" y="20" width="14" height="60" />
                  
                  {/* Swoosh - visual cut using white stroke (matches bg) */}
                  <path d="M10 85 Q 50 65 90 25" stroke="white" strokeWidth="6" fill="none" className="stroke-white" />
                </svg>
              </div>

              {/* Text */}
              <div className="flex flex-col justify-center">
                <span className="font-serif font-bold text-2xl text-navy-900 leading-none tracking-wide">COUNTY</span>
                <span className="font-sans font-bold text-xs text-navy-900 tracking-[0.2em] uppercase mt-0.5">ACCOUNTANTS</span>
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
            <div className="flex items-center space-x-3">
               <span className="font-serif font-bold text-2xl text-white tracking-wide">COUNTY</span>
               <span className="font-sans font-medium text-xs text-slate-300 tracking-widest uppercase border-l border-slate-600 pl-3">Accountants</span>
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