
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import SavingsCalculator from './components/SavingsCalculator';
import ProjectsGallery from './components/ProjectsGallery';
import SolarAdvisor from './components/SolarAdvisor';
import { CONTACT_NUMBERS } from './constants';

const App: React.FC = () => {
  const FooterLogo = () => (
    <div className="relative w-10 h-10 flex items-center justify-center">
      <svg viewBox="0 0 100 100" className="w-full h-full">
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

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Brand Bar */}
        <section className="bg-white py-12 border-b">
          <div className="container mx-auto px-6 flex flex-wrap justify-center items-center gap-12 md:gap-24 grayscale opacity-60">
            <div className="text-3xl font-black text-orange-600 tracking-tighter italic">ENPHASE.</div>
            <div className="text-3xl font-black text-red-500 tracking-widest uppercase">ATMOCE</div>
            <div className="text-3xl font-black text-blue-950 flex items-center">
              <FooterLogo />
              <span className="ml-2">S&S SOLAR</span>
            </div>
          </div>
        </section>

        <Features />
        <SavingsCalculator />
        <ProjectsGallery />

        {/* Contact CTA Section */}
        <section id="contact" className="py-24 solar-gradient text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8">Ready to Start Your Solar Journey?</h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
              Get a free consultation and site assessment today. We'll analyze your roof, your consumption, and design the perfect system for your budget.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl w-full max-w-sm">
                <div className="text-3xl mb-4">📞</div>
                <h4 className="text-xl font-bold mb-4">Call or Viber Us</h4>
                {CONTACT_NUMBERS.map(num => (
                  <p key={num} className="text-2xl font-black text-yellow-400 mb-2">{num}</p>
                ))}
              </div>
              
              <div className="bg-white text-blue-900 p-8 rounded-2xl w-full max-w-sm shadow-2xl">
                <div className="text-3xl mb-4">✉️</div>
                <h4 className="text-xl font-bold mb-4">Free Consultation</h4>
                <button className="w-full bg-blue-900 text-white py-4 rounded-xl font-bold hover:bg-blue-800 transition-colors">
                  Request Site Visit
                </button>
                <p className="mt-4 text-sm text-gray-500 italic">S&S Solar: Powering a Smarter, Cleaner Future</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-950 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center border-b border-white/10 pb-8 mb-8 gap-6">
            <div className="flex items-center space-x-2">
              <FooterLogo />
              <span className="text-xl font-bold tracking-tight">S&S SOLAR</span>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-yellow-400">Privacy Policy</a>
              <a href="#" className="hover:text-yellow-400">Terms of Service</a>
              <a href="#" className="hover:text-yellow-400">Net Metering Guide</a>
            </div>
          </div>
          <div className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} S&S Solar Philippines. All Rights Reserved. Nationwide Service.
          </div>
        </div>
      </footer>

      <SolarAdvisor />
    </div>
  );
};

export default App;
