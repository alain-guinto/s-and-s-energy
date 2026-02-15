
import { Project, SavingsTier, FeatureDetail } from './types';

export const RESIDENTIAL_SAVINGS: SavingsTier[] = [
  { 
    size: "3 kW", 
    target: "Small home", 
    savingsRange: "₱3,000 – ₱4,500",
    roi: "4.2 Years",
    breakdown: ["Ideal for 2-3 AC units", "Saves ~360kWh/month", "Covers day-time base load"]
  },
  { 
    size: "5 kW", 
    target: "Average household", 
    savingsRange: "₱6,000 – ₱8,000",
    roi: "4.0 Years",
    breakdown: ["Ideal for 4-5 AC units + Fridge", "Saves ~600kWh/month", "Significant Net Metering potential"]
  },
  { 
    size: "10 kW", 
    target: "Large home", 
    savingsRange: "₱12,000 – ₱16,000",
    roi: "3.8 Years",
    breakdown: ["Whole house coverage", "Saves ~1,200kWh/month", "Best value for high-consumption homes"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Modern Residence",
    location: "Malabon, Metro Manila",
    capacity: "6.25 kW On-Grid System",
    description: "Full rooftop array for a modern urban residence.",
    imageUrl: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800", // Logically assets/project-1.jpg
    category: 'Residential',
    detailedInfo: ["16 x 390W Mono-PERC Panels", "Enphase IQ7+ Microinverters", "Completed in 3 days", "Real-time mobile monitoring"]
  },
  {
    id: 2,
    title: "Urban Smart Home",
    location: "Mandaluyong City",
    capacity: "4.375 kW On-Grid System",
    description: "Compact microinverter-based system for city living.",
    imageUrl: "https://images.unsplash.com/photo-1509391366360-fe5bb584850a?auto=format&fit=crop&q=80&w=800", // Logically assets/project-2.jpg
    category: 'Residential',
    detailedInfo: ["11 x 400W High-Efficiency Panels", "Atmoce M-ELV Inverters", "Zero-export configuration", "Integrated with smart home hub"]
  },
  {
    id: 3,
    title: "Agricultural Facility",
    location: "Los Banos, Laguna",
    capacity: "8 kW On-Grid System",
    description: "High-yield system optimized for local climate conditions.",
    imageUrl: "https://images.unsplash.com/photo-1466611653911-954ffaa137d8?auto=format&fit=crop&q=80&w=800", // Logically assets/project-3.jpg
    category: 'Commercial',
    detailedInfo: ["20 x 400W Panels", "Reinforced structural mounting", "Typhoon-ready design", "Net Metering certified"]
  },
  {
    id: 4,
    title: "Commercial Warehouse",
    location: "Santiago, Isabela",
    capacity: "13 kW On-Grid System",
    description: "Large scale installation for energy-intensive operations.",
    imageUrl: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=800", // Logically assets/project-4.jpg
    category: 'Commercial',
    detailedInfo: ["32 x 410W High-Capacity Panels", "Commercial-grade racking", "Annual savings: ₱150,000+", "Zero maintenance plan included"]
  }
];

export const WHY_US_DETAILS: FeatureDetail[] = [
  { 
    title: "Premium Microinverters", 
    desc: "Higher energy production and panel-level control.", 
    icon: "⚡",
    longDesc: "Unlike standard string inverters where shading on one panel affects the whole string, our Enphase and Atmoce microinverters allow each panel to operate independently. This results in 5-15% more energy production over the system's life."
  },
  { 
    title: "Superior Safety", 
    desc: "Safe low-voltage AC on your roof.", 
    icon: "🛡️",
    longDesc: "Traditional systems have up to 600V-1000V of dangerous high-voltage DC current. Our microinverters convert power to standard AC right at the panel, making your home much safer from fire hazards."
  },
  { 
    title: "25-Year Warranty", 
    desc: "The longest reliability in the industry.", 
    icon: "✅",
    longDesc: "We provide industry-leading warranties. Most string inverters need replacement every 10 years. Our microinverters are designed to last 25 years, matching the lifespan of the solar panels themselves."
  }
];

export const CONTACT_NUMBERS = ["09155769185", "09778293838"];

export const SYSTEM_PROMPT = `
You are the S&S Solar Smart Advisor. Use the following company facts:
- We use Enphase and Atmoce Microinverter technology.
- Key benefits: Higher energy production, No single point of failure, Safer, Better shading performance.
- All systems are battery-ready.
- Net Metering assistance provided.
- Savings: 3kW (~3.5k/mo), 5kW (~7k/mo), 10kW (~14k/mo).
- Contact: 09155769185 or 09778293838.
- Nationwide service in Philippines.
Keep responses professional, concise, and informative. Use markdown for better readability.
`;
