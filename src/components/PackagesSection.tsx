import React from 'react';
import { Check, ShieldCheck, ArrowRight, Info } from 'lucide-react';
import { WEDDING_PACKAGES } from '../data/venues';

interface PackagesSectionProps {
  onOpenCurateModal: () => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onOpenCurateModal }) => {
  return (
    <section id="packages" className="py-20 lg:py-28 bg-[#071711] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#C89E50] uppercase block">
            TRANSPARENT WEDDING PACKAGES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#FCFBF7] tracking-tight">
            Curated Pricing. Absolute Clarity.
          </h2>
          <p className="text-sm sm:text-base text-[#EDE3D0]/80 font-light leading-relaxed">
            No ambiguous estimates or undisclosed kickbacks. We work on fixed curation or transparent all-inclusive tiers.
          </p>
        </div>

        {/* 3 Tier Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {WEDDING_PACKAGES.map((pkg) => {
            const isFeatured = pkg.id === 'signature-two-function';
            const isOnboarding = pkg.id === 'venue-curation';

            return (
              <div
                key={pkg.id}
                className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all relative ${
                  isFeatured
                    ? 'bg-[#0E2F21] border-2 border-[#D4AF37] shadow-2xl scale-[1.02] ring-1 ring-[#D4AF37]/50'
                    : 'bg-[#0A1E15] border border-[#D4AF37]/25 hover:border-[#D4AF37]/60 shadow-xl'
                }`}
              >
                {/* Badge if present */}
                {pkg.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className={`px-4 py-1 text-[10px] font-bold tracking-widest uppercase rounded-full shadow-md ${
                      isOnboarding 
                        ? 'bg-[#C89E50] text-[#0B2219]'
                        : isFeatured 
                          ? 'bg-[#D4AF37] text-[#0B2219]' 
                          : 'bg-[#184634] text-[#D4AF37] border border-[#D4AF37]/30'
                    }`}>
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Title & Subtitle */}
                  <div className="space-y-2 pt-2">
                    <h3 className="text-2xl font-serif font-bold text-[#FCFBF7]">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-[#A3B9A8] min-h-[32px] leading-relaxed">
                      {pkg.subtitle}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="py-2 border-y border-[#D4AF37]/15">
                    <span className="text-4xl sm:text-5xl font-serif font-bold text-[#FCFBF7] font-mono tabular-nums">
                      {pkg.priceStarting}
                    </span>
                    <span className="text-xs text-[#C7B58A] block mt-1">
                      {isOnboarding ? '100% refundable upon venue booking' : 'Complete package ballpark (Excl. GST)'}
                    </span>
                  </div>

                  {/* Scope details */}
                  <div className="space-y-1 text-xs text-[#EDE3D0]/90">
                    <div className="flex items-center justify-between">
                      <span className="text-[#A3B9A8]">Guest Scope:</span>
                      <span className="font-semibold text-[#FCFBF7]">{pkg.guestScope}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#A3B9A8]">Events Covered:</span>
                      <span className="font-semibold text-[#FCFBF7]">{pkg.functionsIncluded}</span>
                    </div>
                  </div>

                  {/* Inclusions List */}
                  <div className="space-y-3 pt-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#D4AF37] block">
                      Package Inclusions:
                    </span>
                    <ul className="space-y-2.5">
                      {pkg.inclusions.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-[#EDE3D0]/85">
                          <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action Area */}
                <div className="pt-8 mt-6 border-t border-[#D4AF37]/15 space-y-3">
                  <p className="text-[11px] text-[#A3B9A8] italic text-center">
                    Ideal for: {pkg.idealFor}
                  </p>

                  <button
                    onClick={onOpenCurateModal}
                    className={`w-full py-3.5 px-4 text-xs font-bold uppercase tracking-wider rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                      isFeatured
                        ? 'bg-[#D4AF37] hover:bg-[#E5C378] text-[#0B2219]'
                        : 'bg-[#123828] hover:bg-[#184634] text-[#FCFBF7] border border-[#D4AF37]/40'
                    }`}
                  >
                    <span>{isOnboarding ? 'Start With Venue Curation' : 'Inquire for Custom Dates'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Explicit Pricing Policy Footnote */}
        <div className="mt-12 p-4 sm:p-6 rounded-lg bg-[#0B2219] border border-[#D4AF37]/20 flex items-start gap-3.5 max-w-4xl mx-auto">
          <Info className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs text-[#EDE3D0]/80 leading-relaxed font-light">
            <span className="font-semibold text-[#FCFBF7] block">Official Pricing Terms & GST Policy:</span>
            <p>
              Package prices are exclusive of 18% GST and include venue hire and authentic catering for 250–300 guests across two functions (wedding and reception). Additional guests, extra rituals, and premium decor upgrades are quoted extra. Final formal quotation follows a requirement consultation and is strictly subject to auspicious date and venue availability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
