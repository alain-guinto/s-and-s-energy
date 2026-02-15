import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.svg';

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

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Why Us', href: '#benefits' },
    { name: 'Savings', href: '#savings' },
    { name: 'Installations', href: '#projects' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-xl py-2' : 'bg-transparent py-4 md:py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center group">
          <div className="relative w-12 h-12 md:w-14 md:h-14 overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center p-1 transition-transform group-hover:scale-105">
            <img src={logo} alt="S&S Solar Logo" className="w-full h-full object-contain" />
          </div>
          <div className="ml-4 flex flex-col justify-center leading-none">
            <span className={`text-xl md:text-2xl font-black tracking-tight ${isScrolled ? 'text-blue-950' : 'text-white'}`}>S&S SOLAR</span>
            <div className="mt-1">
              <span className={`text-[10px] md:text-[11px] uppercase tracking-wider font-black px-2 py-0.5 rounded shadow-sm bg-yellow-500 text-blue-950`}>
                Smart Solutions
              </span>
            </div>
          </div>
        </a>

        <div className={`hidden md:flex items-center space-x-10 font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="hover:text-yellow-500 transition-all relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-yellow-500 after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="bg-yellow-500 text-blue-950 px-8 py-3 rounded-2xl font-black hover:bg-yellow-400 transition-all shadow-lg transform hover:-translate-y-1 active:translate-y-0"
          >
            Get a Quote
          </a>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-2 rounded-xl transition-colors ${isScrolled ? 'text-blue-950 bg-gray-100' : 'text-yellow-500 bg-white/10'}`}
        >
          {isMobileMenuOpen ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-2xl border-t border-gray-100 shadow-2xl absolute top-full left-0 w-full p-8 space-y-6 flex flex-col items-center animate-fade-in-down">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-2xl font-black text-gray-900 hover:text-yellow-600 transition-colors w-full text-center"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="w-full bg-blue-950 text-white text-center py-5 rounded-2xl font-black text-xl shadow-xl"
          >
            Get Free Site Visit
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
