
import React, { useState } from 'react';
import { WHY_US_DETAILS } from '../constants';
import { FeatureDetail } from '../types';

const Features: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<FeatureDetail | null>(null);

  return (
    <section id="benefits" className="py-24 bg-gray-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 skew-x-12 transform origin-top translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose <span className="text-yellow-500">S&S Solar?</span></h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            We don't just install panels; we engineer custom energy solutions. Click on our core pillars to see the technical advantage.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {WHY_US_DETAILS.map((feature, idx) => (
            <div 
              key={idx} 
              onClick={() => setActiveFeature(feature === activeFeature ? null : feature)}
              className={`cursor-pointer p-8 rounded-3xl border transition-all group relative ${activeFeature === feature ? 'bg-blue-900 border-yellow-500 shadow-2xl scale-105' : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/30'}`}
            >
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">{feature.icon}</div>
              <h4 className={`text-2xl font-bold mb-4 ${activeFeature === feature ? 'text-white' : 'text-yellow-500'}`}>{feature.title}</h4>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">{feature.desc}</p>
              
              <div className="flex items-center text-xs font-bold uppercase tracking-widest text-yellow-500 opacity-60 group-hover:opacity-100 transition-opacity">
                {activeFeature === feature ? 'Close Details' : 'Click for more info'} 
                <svg className={`ml-2 w-4 h-4 transform transition-transform ${activeFeature === feature ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>

              {activeFeature === feature && (
                <div className="mt-8 pt-8 border-t border-white/20 animate-fade-in">
                  <p className="text-blue-100 leading-relaxed italic">{feature.longDesc}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          <div className="lg:w-1/2 bg-white/5 backdrop-blur-lg border border-white/10 p-10 rounded-3xl flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-6 flex items-center">
              <span className="mr-3 text-3xl">👷‍♂️</span> Engineered for PH
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Our structures are designed for wind loads of up to 250kph. We use 100% rust-proof aluminum and stainless steel components to prevent corrosion in coastal areas of the Philippines.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center text-sm font-bold bg-white/10 p-3 rounded-xl"><span className="text-yellow-500 mr-2">✓</span> Licensed Engineers</div>
              <div className="flex items-center text-sm font-bold bg-white/10 p-3 rounded-xl"><span className="text-yellow-500 mr-2">✓</span> Site Safety Audit</div>
              <div className="flex items-center text-sm font-bold bg-white/10 p-3 rounded-xl"><span className="text-yellow-500 mr-2">✓</span> Permit Assistance</div>
              <div className="flex items-center text-sm font-bold bg-white/10 p-3 rounded-xl"><span className="text-yellow-500 mr-2">✓</span> After-Sales Support</div>
            </div>
          </div>
          <div className="lg:w-1/2 bg-blue-600 p-10 rounded-3xl relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/20 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <h3 className="text-3xl font-bold mb-6">Net Metering Support</h3>
            <p className="text-blue-50 mb-8 text-lg">
              We guide you through the entire Meralco or DU application process. Start earning credits for your excess solar power immediately after installation.
            </p>
            <div className="bg-blue-900/40 p-6 rounded-2xl border border-blue-400/30">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs uppercase font-bold tracking-widest text-blue-200">Processing Time</span>
                <span className="text-yellow-400 font-bold">~4 Weeks</span>
              </div>
              <div className="w-full bg-blue-900 h-2 rounded-full overflow-hidden">
                <div className="bg-yellow-400 h-full w-3/4 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
