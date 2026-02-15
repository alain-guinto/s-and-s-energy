
import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
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
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Animated Background Container */}
      <div className="absolute inset-0 z-0 bg-blue-950">
        {/* Video Background */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          poster="https://images.unsplash.com/photo-1509391366360-fe5bb584850a?auto=format&fit=crop&q=80&w=1920"
          className="absolute inset-0 w-full h-full object-cover opacity-50 ken-burns"
        >
          <source src="https://player.vimeo.com/external/461873722.hd.mp4?s=f4961858a72c1c68f9b9f91a5472855160c8835f&profile_id=175" type="video/mp4" />
        </video>
        
        {/* Overlay Layers */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-950 via-blue-950/40 to-transparent z-10"></div>
        <div className="absolute inset-0 overlay-grid z-10"></div>
        
        {/* Particle / Energy Effect */}
        <div className="absolute inset-0 z-10 opacity-30 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-ping [animation-duration:3.5s]"></div>
          <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping [animation-duration:5s]"></div>
          <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-ping [animation-duration:4.2s]"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-20 text-white pt-24 md:pt-32">
        <div className="max-w-4xl animate-fade-in-down">
          <div className="inline-flex items-center space-x-3 mb-8 bg-white/5 backdrop-blur-xl px-6 py-3 rounded-full border border-white/10 shadow-2xl">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
            </span>
            <h2 className="text-yellow-400 text-xs md:text-sm font-black uppercase tracking-[0.3em]">
              The Gold Standard in Solar
            </h2>
          </div>

          <h1 className="text-6xl md:text-9xl font-black leading-[0.9] mb-10 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
            Powering a <br />
            <span className="text-yellow-500 energy-text-glow">Smarter</span> Future
          </h1>
          
          <p className="text-xl md:text-3xl text-blue-50 mb-14 max-w-3xl leading-relaxed opacity-95 font-medium border-l-4 border-yellow-500 pl-8">
            Advanced Microinverter solutions for the Filipino household. <br />
            <span className="text-yellow-400 font-black">25-Year Reliability. 100% Peace of Mind.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8">
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, '#contact')}
              className="group relative overflow-hidden bg-yellow-500 text-blue-950 px-12 py-6 rounded-3xl font-black text-xl hover:bg-yellow-400 transition-all text-center shadow-[0_25px_60px_rgba(234,179,8,0.4)] hover:-translate-y-1.5 active:translate-y-0"
            >
              <span className="relative z-10 flex items-center justify-center">
                Get Free Site Visit
                <svg className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
            </a>
            <a 
              href="#savings" 
              onClick={(e) => scrollToSection(e, '#savings')}
              className="bg-white/10 backdrop-blur-2xl border-2 border-white/20 text-white px-12 py-6 rounded-3xl font-black text-xl hover:bg-white/20 transition-all text-center hover:border-white/50 shadow-xl"
            >
              Calculate ROI
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-col items-center space-y-4 opacity-50 hover:opacity-100 transition-opacity">
           <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/60">Discover More</span>
           <div className="w-1 h-12 bg-gradient-to-b from-yellow-500 to-transparent rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
