import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  // State to manage mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: "Ceramic Coating", path: "/services/ceramic-coating" },
    { name: "Paint Correction", path: "/services/paint-correction" },
    { name: "Paint Protection Film", path: "/services/paint-protection-film" },
    { name: "Essential Detail", path: "/services/essential-detail" }
  ];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services", hasDropdown: true },
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    // Main header container with fixed positioning and shadow
    <header className="fixed top-0 left-0 right-0 bg-primary shadow-sm z-50">
      {/* Content wrapper with max width and padding */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo container */}
        <div className="flex-shrink-0">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <img 
              src="/images/Logo.PNG" 
              alt="IANO'S - Driven by Detail" 
              className="h-12 w-auto" 
            />
          </Link>
        </div>

        {/* Hamburger menu button - visible only on mobile */}
        <button 
          className="lg:hidden flex flex-col justify-between w-7 h-5 bg-transparent border-0 cursor-pointer p-0"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {/* Animated hamburger menu bars */}
          <span className={`w-full h-0.5 bg-text transition-transform duration-300 ${
            isMenuOpen ? 'translate-y-2 rotate-45' : ''
          }`}></span>
          <span className={`w-full h-0.5 bg-text transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-0' : ''
          }`}></span>
          <span className={`w-full h-0.5 bg-text transition-transform duration-300 ${
            isMenuOpen ? '-translate-y-2 -rotate-45' : ''
          }`}></span>
        </button>

        {/* Desktop Navigation */}
        <nav className={`lg:flex items-center space-x-8 ${isMenuOpen ? 'absolute top-full left-0 right-0 bg-primary shadow-lg lg:shadow-none p-4 lg:p-0 lg:relative lg:bg-transparent' : 'hidden lg:flex'}`}>
          {navLinks.map((link, index) => (
            <div key={index} className="relative group">
              {link.hasDropdown ? (
                <>
                  <button
                    className="text-text hover:text-accent transition-colors duration-300 py-2 flex items-center space-x-1"
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    onMouseEnter={() => setIsServicesOpen(true)}
                  >
                    <span>{link.name}</span>
                    <svg className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {/* Services Dropdown */}
                  <div
                    className={`${isServicesOpen ? 'block' : 'hidden'} lg:hidden lg:group-hover:block absolute left-0 mt-2 w-64 bg-primary shadow-xl rounded-lg overflow-hidden z-50`}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <div className="py-2">
                      <Link
                        to="/services"
                        className="block px-4 py-2 text-text hover:bg-accent/10 hover:text-accent transition-colors duration-300"
                        onClick={() => {
                          setIsServicesOpen(false);
                          setIsMenuOpen(false);
                        }}
                      >
                        All Services
                      </Link>
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          to={service.path}
                          className="block px-4 py-2 text-text hover:bg-accent/10 hover:text-accent transition-colors duration-300"
                          onClick={() => {
                            setIsServicesOpen(false);
                            setIsMenuOpen(false);
                          }}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  to={link.path}
                  className="text-text hover:text-accent transition-colors duration-300 py-2 block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <Link
            to="/booking"
            className="inline-flex items-center justify-center px-4 py-2 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-accent/25"
            onClick={() => setIsMenuOpen(false)}
          >
            Book Now
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header; 