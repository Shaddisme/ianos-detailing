import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const testimonials = [
    {
      name: "Michael R.",
      vehicle: "Tesla Model 3",
      service: "Premium Detail",
      image: "/testimonials/michael.jpg",
      text: "Absolutely blown away by the attention to detail. My Tesla looks better than when I first got it. The ceramic coating has made maintenance so much easier.",
      rating: 5
    },
    {
      name: "Sophie L.",
      vehicle: "BMW X5",
      service: "Ultimate Detail",
      image: "/testimonials/sophie.jpg",
      text: "Professional, punctual, and perfect results. The two-stage paint correction removed years of swirl marks. Worth every penny!",
      rating: 5
    },
    {
      name: "David M.",
      vehicle: "Porsche 911",
      service: "Premium Detail",
      image: "/testimonials/david.jpg",
      text: "As a car enthusiast, I'm very particular about who touches my vehicle. Iano's exceeded all expectations. Their knowledge and expertise are unmatched.",
      rating: 5
    },
    {
      name: "Emma T.",
      vehicle: "Mercedes C300",
      service: "Essential Detail",
      image: "/testimonials/emma.jpg",
      text: "First-time customer and definitely coming back! The team was professional, and my car hasn't looked this good since I bought it.",
      rating: 5
    },
    {
      name: "James P.",
      vehicle: "Audi RS7",
      service: "Ultimate Detail",
      image: "/testimonials/james.jpg",
      text: "The ceramic coating is a game-changer. Six months later and water still beads like day one. Incredible attention to detail!",
      rating: 5
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
    className: "gap-6",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };

  const stats = [
    {
      value: "500+",
      label: "Satisfied Clients",
      description: "Trust us with their vehicles monthly"
    },
    {
      value: "5000+",
      label: "Cars Detailed",
      description: "Experience you can count on"
    },
    {
      value: "100%",
      label: "Satisfaction Rate",
      description: "Our commitment to excellence"
    },
    {
      value: "15+",
      label: "Years Experience",
      description: "Professional expertise"
    }
  ];

  const features = [
    {
      title: "Premium Products",
      description: "We use only the highest-grade detailing products and ceramic coatings, ensuring lasting protection and shine.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      title: "Expert Technicians",
      description: "Our certified detailing professionals have years of experience working with luxury and exotic vehicles.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Mobile Service",
      description: "We come to you! Our fully-equipped mobile units serve the entire Montreal area for your convenience.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Guaranteed Results",
      description: "If you're not completely satisfied with our service, we'll make it right - no questions asked.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'exterior', name: 'Exterior Detailing' },
    { id: 'interior', name: 'Interior Detailing' },
    { id: 'paint', name: 'Paint Correction' },
    { id: 'ceramic', name: 'Ceramic Coating' }
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'exterior',
      title: 'Full Exterior Detail',
      description: 'Complete exterior transformation including paint correction and ceramic coating',
      beforeImage: '/gallery/placeholder-before.jpg',
      afterImage: '/gallery/placeholder-after.jpg',
      vehicleType: 'Luxury Sedan'
    },
    {
      id: 2,
      category: 'interior',
      title: 'Premium Interior Detail',
      description: 'Deep cleaning and leather conditioning for a showroom-fresh interior',
      beforeImage: '/gallery/placeholder-before.jpg',
      afterImage: '/gallery/placeholder-after.jpg',
      vehicleType: 'SUV'
    },
    {
      id: 3,
      category: 'paint',
      title: 'Paint Correction',
      description: 'Removal of deep scratches and swirl marks',
      beforeImage: '/gallery/placeholder-before.jpg',
      afterImage: '/gallery/placeholder-after.jpg',
      vehicleType: 'Sports Car'
    },
    {
      id: 4,
      category: 'ceramic',
      title: 'Ceramic Coating',
      description: 'Long-lasting protection with premium ceramic coating',
      beforeImage: '/gallery/placeholder-before.jpg',
      afterImage: '/gallery/placeholder-after.jpg',
      vehicleType: 'Exotic'
    },
    {
      id: 5,
      category: 'exterior',
      title: 'Wheel & Tire Detail',
      description: 'Deep cleaning and protection for wheels and tires',
      beforeImage: '/gallery/placeholder-before.jpg',
      afterImage: '/gallery/placeholder-after.jpg',
      vehicleType: 'Performance Vehicle'
    },
    {
      id: 6,
      category: 'interior',
      title: 'Interior Restoration',
      description: 'Complete interior revival with stain removal and fabric protection',
      beforeImage: '/gallery/placeholder-before.jpg',
      afterImage: '/gallery/placeholder-after.jpg',
      vehicleType: 'Family SUV'
    }
  ];

  const filteredGallery = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'essential',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic will be implemented later
    console.log('Form submitted:', formData);
  };

  const businessHours = [
    { day: 'Monday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Tuesday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Wednesday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Thursday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Friday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "How long does a detailing service typically take?",
      answer: "Service duration varies based on the package and vehicle condition. Essential Detail typically takes 3-4 hours, Premium Detail 5-6 hours, and Ultimate Detail can take up to 8 hours or more for the best results."
    },
    {
      question: "Do you come to my location?",
      answer: "Yes! We offer mobile detailing services throughout the Greater Montreal area. We bring all necessary equipment and products to your location, requiring only access to water and electricity."
    },
    {
      question: "What's included in your ceramic coating service?",
      answer: "Our ceramic coating service includes thorough paint preparation (decontamination, clay bar treatment, and paint correction), followed by the professional application of a premium ceramic coating. This provides long-lasting protection, enhanced gloss, and hydrophobic properties for up to 5 years."
    },
    {
      question: "How often should I get my car detailed?",
      answer: "For optimal maintenance, we recommend a basic detail every 3-4 months. However, this can vary based on your driving conditions, vehicle exposure to elements, and personal preferences. We can create a custom maintenance schedule for your specific needs."
    },
    {
      question: "What products do you use?",
      answer: "We exclusively use premium, professional-grade products from industry-leading brands. All our products are pH-neutral, environmentally friendly, and safe for all vehicle surfaces while delivering exceptional results."
    },
    {
      question: "Do you offer any guarantees?",
      answer: "Yes! We offer a 100% satisfaction guarantee on all our services. If you're not completely satisfied with any aspect of our work, we'll make it right at no additional cost."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-24 w-full">
          <div className="max-w-3xl mx-auto text-center">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-semibold tracking-tight mb-8">
              <span className="text-white">Premium</span>
              <br className="hidden sm:block" />
              <span className="text-accent">Auto Detailing</span>
            </h1>
            
            {/* Tagline */}
            <p className="text-xl md:text-2xl font-body text-gray-300 mb-12 leading-relaxed">
              Driven by Detail – Showroom Shine,
              <br className="hidden sm:block" />
              Delivered in Montreal
            </p>
            
            {/* Features List */}
            <div className="max-w-2xl mx-auto mb-12">
              <ul className="inline-flex flex-col gap-3 text-left text-gray-300">
                <li className="flex items-center bg-white/5 rounded-lg px-6 py-3 backdrop-blur-sm">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-medium">Professional Grade Products & Equipment</span>
                </li>
                <li className="flex items-center bg-white/5 rounded-lg px-6 py-3 backdrop-blur-sm">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-medium">Certified & Experienced Technicians</span>
                </li>
                <li className="flex items-center bg-white/5 rounded-lg px-6 py-3 backdrop-blur-sm">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-medium">Mobile Service Throughout Montreal</span>
                </li>
                <li className="flex items-center bg-white/5 rounded-lg px-6 py-3 backdrop-blur-sm">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-medium">100% Satisfaction Guaranteed</span>
                </li>
              </ul>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/booking" 
                className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-accent/25"
              >
                Book Now
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link 
                to="/services" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/10 hover:border-white/20 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white/5"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-primary via-primary/50 to-transparent"></div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-primary relative">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-6">
              Our <span className="text-accent">Services</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Choose from our carefully crafted packages, each designed to restore and protect your vehicle's appearance
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Essential Package */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1">
              <div className="p-8">
                <h3 className="text-2xl font-heading font-semibold mb-4">Essential Detail</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-heading font-bold">$149</span>
                  <span className="text-text-secondary ml-2">/ session</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-text">
                    <svg className="w-5 h-5 mr-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Exterior Hand Wash
                  </li>
                  <li className="flex items-center text-text">
                    <svg className="w-5 h-5 mr-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Wheel & Tire Cleaning
                  </li>
                  <li className="flex items-center text-text">
                    <svg className="w-5 h-5 mr-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Interior Vacuum & Wipe Down
                  </li>
                </ul>
                <Link 
                  to="/booking?package=essential"
                  className="block w-full py-3 px-6 text-center bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors"
                >
                  Book Essential Detail
                </Link>
              </div>
            </div>

            {/* Premium Package */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1 relative">
              <div className="absolute top-4 right-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-heading font-semibold mb-4">Premium Detail</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-heading font-bold">$249</span>
                  <span className="text-text-secondary ml-2">/ session</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-text">
                    <svg className="w-5 h-5 mr-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Everything in Essential
                  </li>
                  <li className="flex items-center text-text">
                    <svg className="w-5 h-5 mr-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Paint Decontamination
                  </li>
                  <li className="flex items-center text-text">
                    <svg className="w-5 h-5 mr-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    One-Step Paint Correction
                  </li>
                  <li className="flex items-center text-text">
                    <svg className="w-5 h-5 mr-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Sealant Application
                  </li>
                </ul>
                <Link 
                  to="/booking?package=premium"
                  className="block w-full py-3 px-6 text-center bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors"
                >
                  Book Premium Detail
                </Link>
              </div>
            </div>

            {/* Ultimate Package */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1">
              <div className="p-8">
                <h3 className="text-2xl font-heading font-semibold mb-4">Ultimate Detail</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-heading font-bold">$399</span>
                  <span className="text-text-secondary ml-2">/ session</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-text">
                    <svg className="w-5 h-5 mr-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Everything in Premium
                  </li>
                  <li className="flex items-center text-text">
                    <svg className="w-5 h-5 mr-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Two-Stage Paint Correction
                  </li>
                  <li className="flex items-center text-text">
                    <svg className="w-5 h-5 mr-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Ceramic Coating
                  </li>
                  <li className="flex items-center text-text">
                    <svg className="w-5 h-5 mr-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Interior Deep Clean
                  </li>
                </ul>
                <Link 
                  to="/booking?package=ultimate"
                  className="block w-full py-3 px-6 text-center bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors"
                >
                  Book Ultimate Detail
                </Link>
              </div>
            </div>
          </div>

          {/* View All Services Link */}
          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="inline-flex items-center text-accent hover:text-accent/80 font-semibold transition-colors"
            >
              View All Services
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-primary to-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-6 text-white">
              Client <span className="text-accent">Testimonials</span>
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto font-light">
              Don't just take our word for it. Here's what our clients have to say about their experience with Iano's Detailing.
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className="mx-auto max-w-[90%] md:max-w-full">
            <Slider {...sliderSettings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-3">
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-accent/30 transition-all duration-300 h-full mx-2 group">
                    {/* Rating */}
                    <div className="flex mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg 
                          key={i}
                          className="w-5 h-5 text-accent"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-white text-lg mb-6 font-light leading-relaxed">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Client Info */}
                    <div className="flex items-center mt-auto">
                      <div className="flex-1">
                        <h4 className="text-white font-semibold">{testimonial.name}</h4>
                        <div className="text-white/80 text-sm">
                          <span>{testimonial.vehicle}</span>
                          <span className="mx-2">•</span>
                          <span>{testimonial.service}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20">
            <Link 
              to="/reviews"
              className="inline-flex items-center text-accent hover:text-accent/80 font-semibold transition-colors"
            >
              Read More Reviews
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Custom styles for Slick carousel */}
        <style jsx>{`
          .slick-dots {
            @apply bottom-[-2rem];
          }
          .slick-dots li button:before {
            @apply text-white/50 text-xs transition-colors duration-300;
          }
          .slick-dots li.slick-active button:before {
            @apply text-accent;
          }
          .slick-prev, .slick-next {
            @apply w-10 h-10 bg-white/10 rounded-full z-10 transition-all duration-300 hover:bg-white/20 before:content-none;
          }
          .slick-prev {
            @apply left-4 md:left-[-3rem];
          }
          .slick-next {
            @apply right-4 md:right-[-3rem];
          }
          @media (max-width: 640px) {
            .slick-prev, .slick-next {
              @apply hidden;
            }
          }
        `}</style>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gray-100 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-6">
              Why Choose <span className="text-accent">Iano's</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the difference of professional detailing services backed by years of expertise and a commitment to excellence.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-start p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-12 h-12 mr-4 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent/20 transition-colors duration-300">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link
              to="/booking"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-accent/25"
            >
              Book Your Detail
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-gradient-to-b from-primary to-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-6 text-white">
              Our <span className="text-accent">Work</span>
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto font-light">
              Browse through our portfolio of transformations and see the quality of our detailing services firsthand.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-accent text-white shadow-lg shadow-accent/25'
                    : 'bg-white/15 text-white hover:bg-white/25'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGallery.map(item => (
              <div 
                key={item.id}
                className="group relative bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-accent/30 transition-all duration-300"
              >
                {/* Image Container */}
                <div className="aspect-w-16 aspect-h-12 bg-white/5">
                  <div className="w-full h-full flex">
                    {/* Before Image - Left Half */}
                    <div className="w-1/2 h-full bg-black/30 flex items-center justify-center">
                      <span className="text-white font-semibold">Before</span>
                    </div>
                    {/* After Image - Right Half */}
                    <div className="w-1/2 h-full bg-black/20 flex items-center justify-center">
                      <span className="text-white font-semibold">After</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/90 mb-3 font-light leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center text-sm">
                    <span className="inline-block px-3 py-1 bg-white/15 text-white rounded-full font-medium">
                      {item.vehicleType}
                    </span>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-all duration-300 pointer-events-none" />
              </div>
            ))}
          </div>

          {/* View More CTA */}
          <div className="text-center mt-16">
            <Link
              to="/gallery"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-accent/25"
            >
              View Full Gallery
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-6">
              Common <span className="text-accent">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Find answers to frequently asked questions about our detailing services and process.
            </p>
          </div>

          {/* FAQ Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-100"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between"
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  <span className={`ml-6 flex-shrink-0 text-accent transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`px-8 transition-all duration-300 ease-in-out overflow-hidden ${
                    openFaq === index ? 'max-h-96 pb-6' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* More Questions CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Still have questions? We're here to help!
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-accent/25"
            >
              Contact Us
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-24 bg-gradient-to-b from-primary to-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-6 text-white">
              Latest <span className="text-accent">News</span>
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto font-light">
              Expert tips, industry insights, and updates from Montreal's premier auto detailing service.
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
              <div className="aspect-w-16 aspect-h-9 bg-black/20">
                {/* Image placeholder */}
                <div className="w-full h-full flex items-center justify-center text-white/40">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-sm text-accent font-medium">Tips & Tricks</span>
                  <span className="mx-2 text-white/30">•</span>
                  <span className="text-sm text-white/60">5 min read</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Winter Car Care: Protecting Your Vehicle from Salt and Snow
                </h3>
                <p className="text-white/80 mb-4">
                  Essential tips for maintaining your car's finish during harsh Montreal winters. Learn about protective coatings and washing techniques.
                </p>
                <Link 
                  to="/blog/winter-car-care"
                  className="inline-flex items-center text-accent hover:text-accent/80 font-medium"
                >
                  Read More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
              <div className="aspect-w-16 aspect-h-9 bg-black/20">
                {/* Image placeholder */}
                <div className="w-full h-full flex items-center justify-center text-white/40">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-sm text-accent font-medium">Product Guide</span>
                  <span className="mx-2 text-white/30">•</span>
                  <span className="text-sm text-white/60">4 min read</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Ceramic Coating vs. Traditional Wax: Making the Right Choice
                </h3>
                <p className="text-white/80 mb-4">
                  Compare the benefits and drawbacks of ceramic coatings and traditional waxes to decide which protection is best for your vehicle.
                </p>
                <Link 
                  to="/blog/ceramic-vs-wax"
                  className="inline-flex items-center text-accent hover:text-accent/80 font-medium"
                >
                  Read More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
              <div className="aspect-w-16 aspect-h-9 bg-black/20">
                {/* Image placeholder */}
                <div className="w-full h-full flex items-center justify-center text-white/40">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-sm text-accent font-medium">DIY Guide</span>
                  <span className="mx-2 text-white/30">•</span>
                  <span className="text-sm text-white/60">6 min read</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  5 Essential Steps for a Showroom-Worthy Interior
                </h3>
                <p className="text-white/80 mb-4">
                  Learn professional techniques for maintaining your car's interior, from leather care to proper vacuuming methods.
                </p>
                <Link 
                  to="/blog/interior-detailing-guide"
                  className="inline-flex items-center text-accent hover:text-accent/80 font-medium"
                >
                  Read More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* View All Posts CTA */}
          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-accent/25"
            >
              View All Posts
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact & Booking Section */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-6">
              Book Your <span className="text-accent">Detail</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transform your vehicle with our professional detailing services. Book an appointment or reach out with any questions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-6">Quick Booking</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Package
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
                  >
                    <option value="essential">Essential Detail</option>
                    <option value="premium">Premium Detail</option>
                    <option value="ultimate">Ultimate Detail</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Notes
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-accent/25"
                >
                  Request Booking
                </button>
              </form>
            </div>

            {/* Contact Info & Hours */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600">+1 (514) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">info@ianosdetailing.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900">Service Area</h4>
                      <p className="text-gray-600">Greater Montreal Area</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-semibold mb-6">Business Hours</h3>
                <div className="space-y-3">
                  {businessHours.map(({ day, hours }) => (
                    <div key={day} className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">{day}</span>
                      <span className="text-gray-600">{hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Area Map Placeholder */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-semibold mb-6">Service Coverage</h3>
                <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Map will be integrated here</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        {/* Main Footer */}
        <div className="py-16 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Company Info */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Iano's Detailing</h3>
                <p className="text-gray-400 mb-6">
                  Montreal's premier auto detailing service, delivering showroom-quality results for every vehicle.
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.27.2-6.78,2.71-7,7C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.27,2.71,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.27-.2,6.78-2.71,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.27-2.71-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.95,4.57a10,10,0,0,1-2.82.77,4.93,4.93,0,0,0,2.16-2.72,9.78,9.78,0,0,1-3.12,1.19,4.92,4.92,0,0,0-8.39,4.49A14,14,0,0,1,1.64,3.16,4.92,4.92,0,0,0,3.19,9.72,4.86,4.86,0,0,1,.62,9.11v.06A4.92,4.92,0,0,0,4.88,14a5,5,0,0,1-2.21.08,4.92,4.92,0,0,0,4.6,3.42,9.87,9.87,0,0,1-6.1,2.1A10.12,10.12,0,0,1,0,19.52a14,14,0,0,0,7.55,2.21c9.06,0,14-7.5,14-14V6.82A10,10,0,0,0,23.95,4.57Z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
                <ul className="space-y-4">
                  <li>
                    <Link to="/services" className="text-gray-400 hover:text-accent transition-colors duration-300">
                      Our Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/gallery" className="text-gray-400 hover:text-accent transition-colors duration-300">
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" className="text-gray-400 hover:text-accent transition-colors duration-300">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-gray-400 hover:text-accent transition-colors duration-300">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-gray-400 hover:text-accent transition-colors duration-300">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Services</h3>
                <ul className="space-y-4">
                  <li>
                    <Link to="/services/essential" className="text-gray-400 hover:text-accent transition-colors duration-300">
                      Essential Detail
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/premium" className="text-gray-400 hover:text-accent transition-colors duration-300">
                      Premium Detail
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/ultimate" className="text-gray-400 hover:text-accent transition-colors duration-300">
                      Ultimate Detail
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/ceramic-coating" className="text-gray-400 hover:text-accent transition-colors duration-300">
                      Ceramic Coating
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/paint-correction" className="text-gray-400 hover:text-accent transition-colors duration-300">
                      Paint Correction
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-400">+1 (514) 123-4567</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-400">info@ianosdetailing.com</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-400">Greater Montreal Area</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Iano's Detailing. All rights reserved.
              </div>
              <div className="flex space-x-6">
                <Link to="/privacy" className="text-gray-400 hover:text-accent text-sm transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-400 hover:text-accent text-sm transition-colors duration-300">
                  Terms of Service
                </Link>
                <Link to="/sitemap" className="text-gray-400 hover:text-accent text-sm transition-colors duration-300">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home; 