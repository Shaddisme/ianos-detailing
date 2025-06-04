import React from 'react';
import { Link } from 'react-router-dom';

const PaintProtectionFilm = () => {
  const features = [
    {
      title: "Impact Protection",
      description: "Self-healing film that absorbs impacts from rocks, debris, and road hazards",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Self-Healing Technology",
      description: "Advanced film that automatically repairs minor scratches with heat",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "UV Protection",
      description: "Prevents paint oxidation and fading from sun exposure",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: "Optical Clarity",
      description: "Crystal clear film that maintains your vehicle's original appearance",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    }
  ];

  const process = [
    {
      step: 1,
      title: "Surface Preparation",
      description: "Thorough cleaning and decontamination of the paint surface"
    },
    {
      step: 2,
      title: "Paint Correction",
      description: "Optional paint correction to ensure perfect surface before film application"
    },
    {
      step: 3,
      title: "Digital Cutting",
      description: "Precise computer-cut film patterns specific to your vehicle model"
    },
    {
      step: 4,
      title: "Professional Installation",
      description: "Expert application using advanced techniques and tools"
    },
    {
      step: 5,
      title: "Quality Control",
      description: "Detailed inspection to ensure perfect installation and coverage"
    },
    {
      step: 6,
      title: "Curing Period",
      description: "Monitored curing time to ensure optimal film adhesion and performance"
    }
  ];

  const faqs = [
    {
      question: "How long does PPF last?",
      answer: "Our premium paint protection film typically lasts 7-10 years with proper maintenance"
    },
    {
      question: "Is PPF worth the investment?",
      answer: "Yes, PPF provides superior protection against physical damage and maintains your vehicle's value by preserving its paint"
    },
    {
      question: "Can PPF be removed?",
      answer: "Yes, PPF can be safely removed by professionals without damaging the underlying paint"
    },
    {
      question: "Does PPF change the appearance of my paint?",
      answer: "No, our high-quality PPF is virtually invisible and maintains the original look of your paint"
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
            Paint Protection Film
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Ultimate invisible shield for your vehicle's paint
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking?service=ppf"
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
              PPF <span className="text-accent">Benefits</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover why Paint Protection Film is the ultimate choice for preserving your vehicle's finish
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
              Installation <span className="text-accent">Process</span>
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto font-light">
              Our meticulous process ensures perfect PPF installation and long-lasting protection
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
              Learn more about Paint Protection Film and its benefits
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
            Protect Your Investment
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Give your vehicle the ultimate protection it deserves with our professional PPF installation
          </p>
          <Link
            to="/booking?service=ppf"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-accent/25"
          >
            Schedule Installation
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PaintProtectionFilm; 