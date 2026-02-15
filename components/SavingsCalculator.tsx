
import React, { useState } from 'react';
import { RESIDENTIAL_SAVINGS } from '../constants';
import { SavingsTier } from '../types';

const SavingsCalculator: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<SavingsTier | null>(null);

  return (
    <section id="savings" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">Investment & Savings</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Click on a system size to see the detailed breakdown and return on investment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {RESIDENTIAL_SAVINGS.map((tier, idx) => (
            <div 
              key={idx} 
              onClick={() => setSelectedTier(tier === selectedTier ? null : tier)}
              className={`cursor-pointer group rounded-3xl p-8 border transition-all relative overflow-hidden ${selectedTier === tier ? 'bg-blue-50 border-blue-900 shadow-xl' : 'bg-gray-50 border-gray-100 hover:shadow-lg'}`}
            >
              <div className={`text-4xl font-black mb-2 transition-colors ${selectedTier === tier ? 'text-blue-900' : 'text-yellow-600'}`}>{tier.size}</div>
              <h3 className="text-xl font-bold text-blue-900 mb-6">{tier.target}</h3>
              
              <div className="bg-blue-900 text-white p-6 rounded-2xl text-center mb-6 shadow-md transform group-hover:-translate-y-1 transition-transform">
                <p className="text-xs opacity-70 uppercase tracking-widest mb-1">Estimated Savings</p>
                <p className="text-3xl font-black">{tier.savingsRange}</p>
              </div>

              {selectedTier === tier ? (
                <div className="animate-fade-in-down space-y-4">
                  <div className="pt-4 border-t border-blue-200">
                    <h4 className="text-sm font-black text-blue-900 uppercase tracking-widest mb-3">SA Info Breakdown:</h4>
                    <ul className="space-y-2">
                      {tier.breakdown.map((item, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-700">
                          <span className="text-green-500 mr-2">●</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-blue-200">
                    <span className="text-xs font-bold text-gray-500 uppercase">Est. ROI</span>
                    <span className="text-lg font-black text-blue-900">{tier.roi}</span>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center text-xs font-bold text-blue-900 opacity-40 group-hover:opacity-100 transition-opacity uppercase tracking-widest mt-4">
                  Click to Expand Details
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-blue-900 rounded-[40px] p-12 text-white flex flex-col lg:flex-row items-center gap-16 shadow-2xl">
          <div className="lg:w-1/2">
             <h3 className="text-4xl font-black mb-6">Commercial Solar ROI</h3>
             <p className="text-blue-100 text-lg mb-8 leading-relaxed">
               For businesses, solar is a direct addition to the bottom line. By offsetting peak demand charges, businesses often see an ROI of under 3.5 years.
             </p>
             <div className="space-y-4">
               {[
                 { label: "Small Biz (15-30kW)", save: "₱25k-45k/mo" },
                 { label: "Medium Biz (50-100kW)", save: "₱80k-160k/mo" },
                 { label: "Industrial (100kW+)", save: "₱200k+/mo" }
               ].map((item, i) => (
                 <div key={i} className="flex justify-between items-center p-4 bg-white/10 rounded-xl border border-white/10 hover:bg-white/20 transition-colors">
                   <span className="font-bold">{item.label}</span>
                   <span className="text-yellow-400 font-black">{item.save}</span>
                 </div>
               ))}
             </div>
          </div>
          <div className="lg:w-1/2 bg-white rounded-3xl p-10 text-blue-900 shadow-inner">
             <div className="flex items-center justify-between mb-8">
               <h4 className="text-2xl font-bold">Typical Billing Loop</h4>
               <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase">Net Metered</span>
             </div>
             <div className="space-y-6">
                <div className="relative pl-8 border-l-2 border-dashed border-gray-200 pb-6">
                   <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-900"></div>
                   <h5 className="font-bold mb-1">Daylight Production</h5>
                   <p className="text-sm text-gray-500">Solar powers loads first. Excess exported to grid.</p>
                </div>
                <div className="relative pl-8 border-l-2 border-dashed border-gray-200 pb-6">
                   <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                   <h5 className="font-bold mb-1">Evening Import</h5>
                   <p className="text-sm text-gray-500">Grid provides power. Credits from day offset the cost.</p>
                </div>
                <div className="relative pl-8">
                   <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-yellow-500"></div>
                   <h5 className="font-bold mb-1">Monthly Billing</h5>
                   <p className="text-sm text-gray-500">Meralco computes net difference. Bill significantly lower.</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavingsCalculator;
