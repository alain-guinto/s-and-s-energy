
import React from 'react';

const Hero: React.FC = () => {
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
          className="absolute inset-0 w-full h-full object-cover opacity-60 ken-burns"
        >
          <source src="https://player.vimeo.com/external/461873722.hd.mp4?s=f4961858a72c1c68f9b9f91a5472855160c8835f&profile_id=175" type="video/mp4" />
          {/* Fallback image if video fails */}
          <img 
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1920" 
            alt="Solar Panels Background" 
            className="w-full h-full object-cover"
          />
        </video>
        
        {/* Overlay Layers */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/40 to-transparent z-10"></div>
        <div className="absolute inset-0 overlay-grid z-10"></div>
        
        {/* Energy Sparkle Effect */}
        <div className="absolute inset-0 z-10 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-ping [animation-duration:3s]"></div>
          <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-yellow-400 rounded-full animate-ping [animation-duration:4s]"></div>
          <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-yellow-400 rounded-full animate-ping [animation-duration:5s]"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-20 text-white">
        <div className="max-w-3xl animate-fade-in-down">
          <div className="inline-flex items-center space-x-3 mb-6 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
            </span>
            <h2 className="text-yellow-400 text-xs md:text-sm font-black uppercase tracking-widest">
              Engineered Solar Intelligence
            </h2>
          </div>

          <h1 className="text-5xl md:text-8xl font-black leading-none mb-8 drop-shadow-2xl">
            Powering a <br />
            <span className="text-yellow-500 energy-text-glow">Smarter</span> Future
          </h1>
          
          <p className="text-lg md:text-2xl text-blue-50 mb-12 max-w-2xl leading-relaxed opacity-90 font-medium">
            Unlock the true potential of your roof with Tier-1 Microinverter technology. Safe, efficient, and built for the Philippines.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="#contact" 
              className="group bg-yellow-500 text-blue-950 px-10 py-5 rounded-2xl font-black text-lg hover:bg-yellow-400 transition-all text-center shadow-[0_20px_50px_rgba(234,179,8,0.3)] hover:-translate-y-1 active:translate-y-0"
            >
              Get Free Site Visit
              <svg className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
            <a 
              href="#savings" 
              className="bg-white/5 backdrop-blur-xl border-2 border-white/10 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/10 transition-all text-center hover:border-white/30"
            >
              Calculate ROI
            </a>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-x-12 gap-y-4 text-sm md:text-base font-bold text-blue-200">
            <div className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3 shadow-[0_0_10px_rgba(74,222,128,0.5)]"></span> 25-Year Warranty</div>
            <div className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3 shadow-[0_0_10px_rgba(96,165,250,0.5)]"></span> Net Metering Ready</div>
            <div className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 shadow-[0_0_10px_rgba(250,204,21,0.5)]"></span> Real-time App</div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2 backdrop-blur-sm">
          <div className="w-1 h-2 bg-yellow-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
