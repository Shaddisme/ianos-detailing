import React from 'react';
import { Link } from 'react-router-dom';

const CeramicCoating = () => {
  const features = [
    {
      title: "9H Hardness Protection",
      description: "Superior scratch resistance and protection against environmental contaminants",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Hydrophobic Surface",
      description: "Extreme water repellency making maintenance easier and protecting against water spots",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
      )
    },
    {
      title: "UV Protection",
      description: "Shields your vehicle's paint from harmful UV rays and oxidation",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: "Chemical Resistance",
      description: "Protection against harsh chemicals, bird droppings, and tree sap",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    }
  ];

  const process = [
    {
      step: 1,
      title: "Paint Correction",
      description: "Complete paint correction to remove swirls, scratches, and imperfections before coating application"
    },
    {
      step: 2,
      title: "Surface Preparation",
      description: "Thorough decontamination and cleaning to ensure proper coating adhesion"
    },
    {
      step: 3,
      title: "Panel Wipe",
      description: "Special solution application to remove any oils or residues, creating a perfectly clean surface"
    },
    {
      step: 4,
      title: "Coating Application",
      description: "Professional application of ceramic coating in a controlled environment"
    },
    {
      step: 5,
      title: "Curing Process",
      description: "Monitored curing time in optimal conditions to ensure maximum coating performance"
    },
    {
      step: 6,
      title: "Final Inspection",
      description: "Detailed inspection and testing of coating properties and finish quality"
    }
  ];

  const faqs = [
    {
      question: "How long does ceramic coating last?",
      answer: "Our professional ceramic coating can last 5+ years with proper maintenance and care"
    },
    {
      question: "Is ceramic coating worth the investment?",
      answer: "Yes, ceramic coating provides superior protection, enhances gloss, and reduces maintenance needs, making it cost-effective over time"
    },
    {
      question: "Do I need paint correction before ceramic coating?",
      answer: "Yes, paint correction is essential before coating application to ensure the best possible finish and longevity"
    },
    {
      question: "How do I maintain a ceramic coated vehicle?",
      answer: "Regular washing with pH-neutral car shampoo and avoiding automatic car washes will help maintain the coating's performance"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-semibold mb-6">
            Ceramic Coating
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Ultimate protection and shine that lasts for years
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking?service=ceramic-coating"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-accent/25"
            >
              Book Now
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/10 hover:border-white/20 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white/5">
              View Pricing
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-semibold mb-6">
              Key <span className="text-accent">Benefits</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the ultimate in paint protection with our professional ceramic coating service
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-start p-6 bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 mr-4 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-semibold mb-6 text-white">
              Application <span className="text-accent">Process</span>
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto font-light">
              Our meticulous process ensures optimal coating performance and longevity
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {process.map((step, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
              >
                <div className="flex items-center mb-4">
                  <span className="text-4xl font-bold text-accent mr-4">
                    {String(step.step).padStart(2, '0')}
                  </span>
                  <h3 className="text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                </div>
                <p className="text-white/80">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-semibold mb-6">
              Common <span className="text-accent">Questions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Learn more about our ceramic coating service and its benefits
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="mb-6 bg-gray-50 rounded-2xl p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-6 text-white">
            Ready to Protect Your Investment?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Give your vehicle the ultimate protection it deserves with our professional ceramic coating service
          </p>
          <Link
            to="/booking?service=ceramic-coating"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-accent/25"
          >
            Schedule Your Coating
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CeramicCoating; 