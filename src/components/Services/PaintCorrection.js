import React from 'react';
import { Link } from 'react-router-dom';

const PaintCorrection = () => {
  const features = [
    {
      title: "Swirl Mark Removal",
      description: "Professional elimination of swirl marks and light scratches for a mirror finish",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Deep Scratch Treatment",
      description: "Advanced techniques to minimize the appearance of deeper paint scratches",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      title: "Paint Restoration",
      description: "Complete restoration of oxidized and faded paint to its original glory",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
    {
      title: "Paint Enhancement",
      description: "Improvement of gloss and clarity for a showroom-quality finish",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    }
  ];

  const process = [
    {
      step: 1,
      title: "Paint Analysis",
      description: "Thorough inspection and measurement of paint thickness to determine correction approach"
    },
    {
      step: 2,
      title: "Surface Preparation",
      description: "Complete decontamination and cleaning of the paint surface"
    },
    {
      step: 3,
      title: "Test Spot",
      description: "Testing correction methods on a small area to determine the optimal approach"
    },
    {
      step: 4,
      title: "Multi-Stage Correction",
      description: "Progressive correction using various compounds and pads for best results"
    },
    {
      step: 5,
      title: "Refinement",
      description: "Final polishing stage to achieve maximum gloss and clarity"
    },
    {
      step: 6,
      title: "Protection",
      description: "Application of paint sealant or coating to protect the corrected finish"
    }
  ];

  const faqs = [
    {
      question: "How long does paint correction take?",
      answer: "A full paint correction typically takes 1-3 days depending on vehicle size and condition"
    },
    {
      question: "Will paint correction remove all scratches?",
      answer: "While paint correction can remove most surface defects, very deep scratches may require additional treatments or repainting"
    },
    {
      question: "How long will the results last?",
      answer: "With proper care and maintenance, paint correction results can last several years. We recommend applying a protective coating for longest-lasting results"
    },
    {
      question: "Is paint correction safe for my vehicle?",
      answer: "Yes, our professional paint correction is safe when performed by our experienced technicians using proper techniques and equipment"
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
            Paint Correction
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Restore your vehicle's finish to better than showroom condition
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking?service=paint-correction"
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
              Our <span className="text-accent">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional paint correction services to restore your vehicle's appearance
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
              Our detailed approach ensures the best possible results for your vehicle
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
              Learn more about our paint correction process and what to expect
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
            Ready to Restore Your Vehicle's Shine?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book your paint correction service today and experience the difference professional detailing can make
          </p>
          <Link
            to="/booking?service=paint-correction"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-accent/25"
          >
            Schedule Your Service
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PaintCorrection; 