import React from 'react';
import { Link } from 'react-router-dom';

const EssentialDetail = () => {
  const features = [
    {
      title: "Exterior Hand Wash",
      description: "Professional hand washing using premium car shampoo and microfiber materials",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Interior Cleaning",
      description: "Complete interior vacuuming and surface cleaning including dashboard and console",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      title: "Wheel & Tire Care",
      description: "Deep cleaning of wheels, wheel wells, and tire dressing for a perfect finish",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Glass Treatment",
      description: "Interior and exterior glass cleaning for crystal clear visibility",
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
      title: "Initial Inspection",
      description: "Thorough assessment of vehicle condition and specific areas needing attention"
    },
    {
      step: 2,
      title: "Pre-Rinse",
      description: "Initial rinse to remove loose dirt and debris before contact washing"
    },
    {
      step: 3,
      title: "Two-Bucket Wash Method",
      description: "Using our premium car shampoo and the safe two-bucket method, we carefully clean your vehicle's exterior"
    },
    {
      step: 4,
      title: "Wheel & Tire Detail",
      description: "Special attention is given to wheels, wheel wells, and tires using dedicated cleaning products"
    },
    {
      step: 5,
      title: "Interior Deep Clean",
      description: "Complete interior vacuuming and surface cleaning, including all compartments and trunk area"
    },
    {
      step: 6,
      title: "Final Inspection",
      description: "A detailed final inspection ensures every aspect meets our high standards"
    }
  ];

  const faqs = [
    {
      question: "How long does the Essential Detail service take?",
      answer: "The Essential Detail typically takes 2-3 hours, depending on your vehicle's size and condition"
    },
    {
      question: "Is this service safe for all vehicle types?",
      answer: "Yes, our Essential Detail service is safe for all vehicle types. We use premium, pH-neutral products that are gentle yet effective"
    },
    {
      question: "How often should I get the Essential Detail?",
      answer: "For optimal maintenance, we recommend the Essential Detail every 4-6 weeks, depending on your driving conditions and vehicle exposure"
    },
    {
      question: "What's the difference between Essential and Premium Detail?",
      answer: "The Essential Detail focuses on fundamental cleaning and maintenance, while our Premium Detail includes additional services like paint decontamination and protective coating"
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
            Essential Detail
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our foundational detailing package, delivering a thorough clean inside and out
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking?service=essential"
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
              What's <span className="text-accent">Included</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our Essential Detail package includes a comprehensive set of services to keep your vehicle looking its best
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
              Our <span className="text-accent">Process</span>
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto font-light">
              Experience our methodical approach to delivering exceptional results
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
              Find answers to frequently asked questions about our Essential Detail service
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
            Ready to Transform Your Vehicle?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book your Essential Detail service today and experience the difference professional detailing can make
          </p>
          <Link
            to="/booking?service=essential"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-accent/25"
          >
            Schedule Your Detail
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EssentialDetail; 