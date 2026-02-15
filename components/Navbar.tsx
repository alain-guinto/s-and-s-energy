
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const Logo = () => (
    <div className="relative w-12 h-12 flex items-center justify-center">
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md overflow-visible">
        <circle cx="50" cy="50" r="48" fill="#B8860B" />
        <path 
          d="M72,32 C65,24 55,22 45,22 C32,22 22,32 22,48 C22,64 78,56 78,76 C78,88 68,95 50,95 C32,95 24,88 22,78" 
          stroke="white" 
          strokeWidth="11" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          fill="none" 
        />
      </svg>
    </div>
  );

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Why Us', href: '#benefits' },
    { name: 'Savings', href: '#savings' },
    { name: 'Installations', href: '#projects' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center group">
          <Logo />
          <div className="ml-3 flex flex-col leading-none">
            <span className={`text-xl md:text-2xl font-black tracking-tight ${isScrolled ? 'text-blue-950' : 'text-white'}`}>S&S SOLAR</span>
            <span className={`text-[10px] uppercase tracking-[0.25em] font-bold ${isScrolled ? 'text-yellow-700' : 'text-yellow-400'}`}>Smart Solutions</span>
          </div>
        </a>
        
        <div className={`hidden md:flex items-center space-x-8 font-bold ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleLinkClick(e, link.href)}
              className="hover:text-yellow-500 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-yellow-500 after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="bg-yellow-500 text-blue-950 px-6 py-2 rounded-full font-bold hover:bg-yellow-400 transition-all shadow-md transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Get a Quote
          </a>
        </div>

        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-blue-950' : 'text-yellow-500'}`}
        >
          {isMobileMenuOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl absolute top-full left-0 w-full p-6 space-y-4 flex flex-col items-center animate-fade-in-down">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-xl font-bold text-gray-800 hover:text-yellow-600 transition-colors w-full text-center py-2"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="w-full bg-blue-950 text-white text-center py-4 rounded-xl font-bold text-lg"
          >
            Get Free Site Visit
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
