import React, { useState } from 'react';
import { Calculator, Sparkles, Check, ArrowRight, ShieldAlert } from 'lucide-react';

interface BudgetCalculatorProps {
  onOpenCurateModal: () => void;
}

export const BudgetCalculator: React.FC<BudgetCalculatorProps> = ({ onOpenCurateModal }) => {
  const [guests, setGuests] = useState<number>(300);
  const [functionsCount, setFunctionsCount] = useState<number>(2);
  const [cateringTier, setCateringTier] = useState<'traditional' | 'royal' | 'gourmet'>('royal');
  const [decorTier, setDecorTier] = useState<'classic' | 'luxury' | 'imperial'>('luxury');

  // Math models
  const cateringRates = {
    traditional: 1150,
    royal: 1650,
    gourmet: 2350
  };

  const decorRates = {
    classic: 320000,
    luxury: 580000,
    imperial: 1100000
  };

  const venueBaseRate = functionsCount === 1 ? 280000 : functionsCount === 2 ? 450000 : 750000;
  
  // Total catering = rate * guests * functionsCount (with adjustment for secondary functions like haldi/sangeet)
  const totalCatering = Math.round(cateringRates[cateringTier] * guests * (functionsCount === 1 ? 1 : functionsCount * 0.85));
  const totalDecor = Math.round(decorRates[decorTier] * (functionsCount === 1 ? 0.75 : functionsCount === 2 ? 1 : 1.4));
  const productionAndCoordination = 180000;

  const subtotal = venueBaseRate + totalCatering + totalDecor + productionAndCoordination;
  const estimatedGst = Math.round(subtotal * 0.18);
  const grandTotal = subtotal + estimatedGst;
  const perGuestCost = Math.round(grandTotal / guests);

  const formatINR = (val: number) => {
    return '₹' + val.toLocaleString('en-IN');
  };

  return (
    <section id="calculator" className="py-20 lg:py-28 bg-[#091E15] relative border-t border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#102B1F] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Wedding Cost Planner</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#FCFBF7] tracking-tight">
            Estimate Your Celebration Investment
          </h2>
          <p className="text-sm sm:text-base text-[#EDE3D0]/80 font-light leading-relaxed">
            Adjust guest count, functions, and culinary preferences to see a transparent real-world ballpark for top South Indian venues.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Sliders & Options */}
          <div className="lg:col-span-7 bg-[#0B251A] border border-[#D4AF37]/30 rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl">
            {/* Guest Count Slider */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#FCFBF7]">
                  Estimated Guest Count
                </label>
                <span className="text-xl font-serif font-bold text-[#D4AF37] font-mono tabular-nums">
                  {guests} Guests
                </span>
              </div>
              <input
                type="range"
                min="100"
                max="800"
                step="25"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full h-2 bg-[#071711] rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
              />
              <div className="flex justify-between text-[11px] text-[#A3B9A8]">
                <span>100 (Intimate)</span>
                <span>300 (Standard)</span>
                <span>500 (Grand)</span>
                <span>800+ (Imperial)</span>
              </div>
            </div>

            {/* Number of Functions */}
            <div className="space-y-3">
              <label className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#FCFBF7] block">
                Number of Functions
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { count: 1, label: '1 Event', desc: 'Muhurtham Only' },
                  { count: 2, label: '2 Events', desc: 'Wedding & Reception' },
                  { count: 3, label: '3 Events', desc: '+ Sangeet / Haldi' },
                  { count: 4, label: '4 Events', desc: 'Full Multi-Day' }
                ].map((item) => (
                  <button
                    key={item.count}
                    type="button"
                    onClick={() => setFunctionsCount(item.count)}
                    className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                      functionsCount === item.count
                        ? 'bg-[#143E2C] border-[#D4AF37] shadow-md'
                        : 'bg-[#071711] border-[#D4AF37]/20 hover:border-[#D4AF37]/50'
                    }`}
                  >
                    <span className="block text-xs font-bold text-[#FCFBF7]">{item.label}</span>
                    <span className="block text-[10px] text-[#A3B9A8] mt-0.5">{item.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Catering Taste & Style */}
            <div className="space-y-3">
              <label className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#FCFBF7] block">
                Culinary Experience Tier
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  {
                    key: 'traditional',
                    title: 'Authentic Sadhya',
                    price: '₹1,150/plate',
                    desc: 'Classic Banana Leaf with 24 traditional varieties'
                  },
                  {
                    key: 'royal',
                    title: 'Royal South & North',
                    price: '₹1,650/plate',
                    desc: 'Curated multi-cuisine feast with artisanal live stations'
                  },
                  {
                    key: 'gourmet',
                    title: 'Gourmet Fusion',
                    price: '₹2,350/plate',
                    desc: 'Celebrity chefs, live chaat, dim sums, and dessert lounge'
                  }
                ].map((tier) => (
                  <button
                    key={tier.key}
                    type="button"
                    onClick={() => setCateringTier(tier.key as any)}
                    className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer ${
                      cateringTier === tier.key
                        ? 'bg-[#143E2C] border-[#D4AF37] shadow-md'
                        : 'bg-[#071711] border-[#D4AF37]/20 hover:border-[#D4AF37]/50'
                    }`}
                  >
                    <span className="block text-xs font-bold text-[#FCFBF7]">{tier.title}</span>
                    <span className="block text-[11px] text-[#D4AF37] font-mono tabular-nums my-0.5">{tier.price}</span>
                    <span className="block text-[10px] text-[#A3B9A8] leading-tight">{tier.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Decor & Floral Scenography */}
            <div className="space-y-3">
              <label className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#FCFBF7] block">
                Scenography & Mandap Scale
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { key: 'classic', title: 'Classic Floral', desc: 'Fresh jasmine & marigold floral mandap' },
                  { key: 'luxury', title: 'Luxury Scenography', desc: 'Custom temple arches, floral ceiling & mood lights' },
                  { key: 'imperial', title: 'Imperial Production', desc: 'Monumental 360-degree stage, chandeliers & kinetic lights' }
                ].map((d) => (
                  <button
                    key={d.key}
                    type="button"
                    onClick={() => setDecorTier(d.key as any)}
                    className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                      decorTier === d.key
                        ? 'bg-[#143E2C] border-[#D4AF37] shadow-md'
                        : 'bg-[#071711] border-[#D4AF37]/20 hover:border-[#D4AF37]/50'
                    }`}
                  >
                    <span className="block text-xs font-bold text-[#FCFBF7]">{d.title}</span>
                    <span className="block text-[10px] text-[#A3B9A8] mt-0.5">{d.desc}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Quote Breakdown */}
          <div className="lg:col-span-5 bg-[#0C2A1E] border-2 border-[#D4AF37]/50 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl sticky top-24">
            <div className="border-b border-[#D4AF37]/20 pb-4">
              <span className="text-xs uppercase tracking-widest text-[#C89E50] block font-semibold">
                Estimated Investment Ballpark
              </span>
              <div className="mt-2 flex items-baseline justify-between">
                <span className="text-3xl sm:text-4xl font-serif font-bold text-[#FCFBF7] font-mono tabular-nums">
                  {formatINR(grandTotal)}
                </span>
                <span className="text-xs text-[#A3B9A8] font-mono tabular-nums">
                  ~{formatINR(perGuestCost)} / guest
                </span>
              </div>
              <span className="text-[11px] text-[#A3B9A8] block mt-1">
                (Inclusive of estimated 18% GST across all vendors)
              </span>
            </div>

            {/* Itemized breakdown */}
            <div className="space-y-3 text-xs text-[#EDE3D0]">
              <div className="flex justify-between py-1 border-b border-[#D4AF37]/10">
                <span className="text-[#A3B9A8]">Curated Venue Rental (Est.)</span>
                <span className="font-semibold text-[#FCFBF7] font-mono tabular-nums">{formatINR(venueBaseRate)}</span>
              </div>

              <div className="flex justify-between py-1 border-b border-[#D4AF37]/10">
                <span className="text-[#A3B9A8]">
                  Catering ({guests} guests × {functionsCount} function{functionsCount > 1 ? 's' : ''})
                </span>
                <span className="font-semibold text-[#FCFBF7] font-mono tabular-nums">{formatINR(totalCatering)}</span>
              </div>

              <div className="flex justify-between py-1 border-b border-[#D4AF37]/10">
                <span className="text-[#A3B9A8]">Mandap & Scenography</span>
                <span className="font-semibold text-[#FCFBF7] font-mono tabular-nums">{formatINR(totalDecor)}</span>
              </div>

              <div className="flex justify-between py-1 border-b border-[#D4AF37]/10">
                <span className="text-[#A3B9A8]">Sound, Shadow Coordinators & Day-of Direction</span>
                <span className="font-semibold text-[#FCFBF7] font-mono tabular-nums">{formatINR(productionAndCoordination)}</span>
              </div>

              <div className="flex justify-between py-1 border-b border-[#D4AF37]/10">
                <span className="text-[#A3B9A8]">Estimated 18% GST</span>
                <span className="font-semibold text-[#D4AF37] font-mono tabular-nums">{formatINR(estimatedGst)}</span>
              </div>
            </div>

            {/* How Alayam Saves Money */}
            <div className="p-3.5 rounded-lg bg-[#071711] border border-[#D4AF37]/25 space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs text-[#D4AF37] font-semibold">
                <Sparkles className="w-4 h-4" />
                <span>Alayam Institutional Savings Benefit</span>
              </div>
              <p className="text-[11px] text-[#EDE3D0]/80 leading-relaxed font-light">
                Couples who book via Alayam typically save between <strong className="text-[#FCFBF7]">₹2,00,000 to ₹4,50,000</strong> compared to direct walk-in quotes through our bulk calendar allotments.
              </p>
            </div>

            {/* Call to action */}
            <button
              onClick={onOpenCurateModal}
              className="w-full py-4 text-xs font-bold uppercase tracking-wider text-[#0B2219] bg-gradient-to-r from-[#E5C378] via-[#D4AF37] to-[#C89E50] hover:brightness-110 transition-all rounded shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Lock This Budget with Curator (₹2,999)</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-[10px] text-center text-[#A3B9A8]">
              Risk-Free Guarantee: The ₹2,999 deposit is 100% refunded when you confirm your venue.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
