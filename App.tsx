
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import SavingsCalculator from './components/SavingsCalculator';
import ProjectsGallery from './components/ProjectsGallery';
import SolarAdvisor from './components/SolarAdvisor';
import { CONTACT_NUMBERS } from './constants';
import logo from './assets/logo.svg';


const App: React.FC = () => {
  const LogoIcon = () => (
    <img src={logo} alt="S&S Solar" className="w-full h-full object-contain" />
  );

  return (
    <div className="min-h-screen selection:bg-yellow-200 selection:text-blue-900">
      <Navbar />

      <main>
        <Hero />

        {/* Brand Bar / Trust Indicators */}
        <section className="bg-white py-16 border-b border-gray-50">
          <div className="container mx-auto px-6">
            <p className="text-center text-xs font-black uppercase tracking-[0.5em] text-gray-400 mb-10">Trusted Technology Partners</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-32 opacity-40 hover:opacity-100 transition-opacity duration-700 grayscale hover:grayscale-0">
              <div className="text-4xl font-black text-orange-600 tracking-tighter italic">ENPHASE.</div>
              <div className="text-4xl font-black text-red-600 tracking-widest uppercase">ATMOCE</div>
              <div className="flex items-center group cursor-default">
                <div className="w-10 h-10 transition-transform group-hover:scale-110">
                  <LogoIcon />
                </div>
                <span className="ml-3 text-3xl font-black text-blue-950 tracking-tight">S&S SOLAR</span>
              </div>
              <div className="text-3xl font-black text-blue-700 tracking-tighter">MERALCO <span className="text-sm align-top font-bold text-gray-400 uppercase">Registered</span></div>
            </div>
          </div>
        </section>

        <Features />
        <SavingsCalculator />
        <ProjectsGallery />

        {/* Contact CTA Section */}
        <section id="contact" className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-950">
            <div className="absolute inset-0 solar-gradient opacity-10"></div>
          </div>

          <div className="container mx-auto px-6 text-center relative z-10 text-white">
            <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tight">Ready for <span className="text-yellow-500">Energy Independence?</span></h2>
            <p className="text-xl md:text-2xl mb-16 max-w-4xl mx-auto opacity-80 leading-relaxed font-medium">
              Join hundreds of Filipino families who have stopped worrying about their electricity bills. We handle everything—from engineering design to Net Metering approval.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-stretch gap-10">
              <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-12 rounded-[40px] w-full max-w-md group hover:bg-white/10 transition-all">
                <div className="text-5xl mb-8 group-hover:scale-110 transition-transform">📱</div>
                <h4 className="text-2xl font-black mb-6">Call or Viber</h4>
                <div className="space-y-4">
                  {CONTACT_NUMBERS.map(num => (
                    <a key={num} href={`tel:${num}`} className="block text-3xl font-black text-yellow-500 hover:text-yellow-400 transition-colors tracking-tight">{num}</a>
                  ))}
                </div>
                <p className="mt-8 text-sm text-blue-200 font-bold uppercase tracking-widest">Available Nationwide</p>
              </div>

              <div className="bg-white text-blue-900 p-12 rounded-[40px] w-full max-w-md shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                <div className="text-5xl mb-8 group-hover:rotate-12 transition-transform">🏡</div>
                <h4 className="text-2xl font-black mb-6">Free Site Assessment</h4>
                <p className="text-gray-500 mb-10 text-lg leading-relaxed">Let our licensed engineers visit your home and provide a custom proposal tailored to your roof.</p>
                <button
                  onClick={() => alert("Redirecting to survey booking...")}
                  className="w-full bg-blue-950 text-white py-5 rounded-2xl font-black text-xl hover:bg-blue-800 transition-all shadow-xl hover:-translate-y-1"
                >
                  Request Survey
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white text-blue-950 py-20 border-t border-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-16">
            <div className="max-w-sm">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12">
                  <LogoIcon />
                </div>
                <span className="text-2xl font-black tracking-tighter">S&S SOLAR</span>
              </div>
              <p className="text-gray-500 leading-relaxed font-medium">
                Pioneering sustainable energy solutions in the Philippines through advanced microinverter technology and expert engineering precision.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-20 gap-y-10">
              <div>
                <h5 className="font-black uppercase tracking-widest text-xs mb-6 text-yellow-600">Quick Links</h5>
                <ul className="space-y-4 text-sm font-bold text-gray-600">
                  <li><a href="#benefits" className="hover:text-blue-900 transition-colors">Why Choose Us</a></li>
                  <li><a href="#savings" className="hover:text-blue-900 transition-colors">ROI Calculator</a></li>
                  <li><a href="#projects" className="hover:text-blue-900 transition-colors">Portfolio</a></li>
                  <li><a href="#contact" className="hover:text-blue-900 transition-colors">Contact Support</a></li>
                </ul>
              </div>
              <div>
                <h5 className="font-black uppercase tracking-widest text-xs mb-6 text-yellow-600">Resources</h5>
                <ul className="space-y-4 text-sm font-bold text-gray-600">
                  <li><a href="#" className="hover:text-blue-900 transition-colors">Net Metering Guide</a></li>
                  <li><a href="#" className="hover:text-blue-900 transition-colors">Solar Maintenance</a></li>
                  <li><a href="#" className="hover:text-blue-900 transition-colors">FAQ</a></li>
                  <li><a href="#" className="hover:text-blue-900 transition-colors">Energy Blog</a></li>
                </ul>
              </div>
              <div className="col-span-2 md:col-span-1">
                <h5 className="font-black uppercase tracking-widest text-xs mb-6 text-yellow-600">Connect</h5>
                <div className="flex space-x-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center hover:bg-blue-50 transition-colors cursor-pointer text-blue-900">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-black text-gray-400 uppercase tracking-widest">
            <div>&copy; {new Date().getFullYear()} S&S Solar Philippines. No more high electric bills.</div>
            <div className="flex space-x-8">
              <a href="#" className="hover:text-blue-900">Privacy Policy</a>
              <a href="#" className="hover:text-blue-900">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>

      <SolarAdvisor />
    </div>
  );
};

export default App;
