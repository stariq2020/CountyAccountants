import React from 'react';
import { Calculator, LineChart, FileText, PieChart, Briefcase, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Services: React.FC = () => {
  const servicesList = [
    {
      id: 'bookkeeping',
      title: 'Bookkeeping & VAT',
      icon: Calculator,
      description: 'Accurate, timely, and compliant bookkeeping services. We manage your daily records and ensure VAT returns are filed correctly and on time, giving you peace of mind.',
      features: ['Monthly / Quarterly Bookkeeping', 'VAT Returns & Compliance', 'Cloud Accounting Setup (Xero/QuickBooks)', 'Supplier & Customer Management']
    },
    {
      id: 'management',
      title: 'Management Accounts',
      icon: PieChart,
      description: 'Go beyond the statutory requirements. Our management accounts provide you with up-to-date financial data, helping you make informed decisions throughout the year.',
      features: ['Monthly Financial Reports', 'KPI Tracking', 'Cash Flow Analysis', 'Budget vs Actuals']
    },
    {
      id: 'tax',
      title: 'Taxation Services',
      icon: FileText,
      description: 'Comprehensive tax planning and compliance for businesses and individuals. We identify efficiencies to minimize your liability while ensuring full compliance with HMRC.',
      features: ['Corporation Tax', 'Self Assessment', 'Capital Gains Tax', 'R&D Tax Credits']
    },
    {
      id: 'advisory',
      title: 'Business Advisory',
      icon: LineChart,
      description: 'Strategic guidance to help your business grow. From startup formation to exit strategies, we act as your sounding board and financial partner.',
      features: ['Business Planning', 'Financial Forecasting', 'Growth Strategy', 'Mergers & Acquisitions Support']
    },
    {
      id: 'payroll',
      title: 'Payroll & CIS',
      icon: Briefcase,
      description: 'Remove the headache of payroll processing. We handle everything from payslips to pension auto-enrolment and CIS returns for construction industry clients.',
      features: ['Weekly/Monthly Payroll', 'Pension Auto-Enrolment', 'CIS Returns', 'P11D Expenses Benefits']
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-navy-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Services</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light">
            Tailored financial solutions designed to support your business at every stage of its journey.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 gap-12">
          {servicesList.map((service, index) => (
            <div 
              key={service.id} 
              className={`flex flex-col md:flex-row gap-8 bg-white p-8 rounded-lg shadow-sm border border-slate-100 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="md:w-1/3 flex flex-col items-center justify-center bg-slate-50 rounded p-8">
                <service.icon className="w-16 h-16 text-gold-600 mb-4" />
                <h3 className="text-2xl font-serif font-bold text-navy-900 text-center">{service.title}</h3>
              </div>
              <div className="md:w-2/3 flex flex-col justify-center">
                <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <Link to="/contact">
                    <Button variant="outline">Enquire about {service.title}</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Box */}
      <div className="bg-white py-16 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">Not sure what you need?</h2>
          <p className="text-slate-600 mb-8">
            Every business is unique. Contact us for a bespoke package tailored to your specific requirements.
          </p>
          <Link to="/contact">
            <Button>Speak to an Advisor</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;