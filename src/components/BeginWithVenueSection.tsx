import React from 'react';
import { Phone, CheckCircle2, ArrowRight, ExternalLink, MessageCircle } from 'lucide-react';

interface BeginWithVenueSectionProps {
  onOpenCurateModal: () => void;
  onOpenDeckViewer: () => void;
}

export const BeginWithVenueSection: React.FC<BeginWithVenueSectionProps> = ({
  onOpenCurateModal,
  onOpenDeckViewer
}) => {
  return (
    <section id="onboarding" className="py-20 lg:py-28 bg-[#091E15] relative overflow-hidden border-t border-b border-[#D4AF37]/20">
      {/* Decorative floral/mandala watermark SVG in background */}
      <div className="absolute -right-24 -top-24 w-96 h-96 opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-[#D4AF37]">
          <circle cx="100" cy="100" r="80" strokeWidth="1" />
          <circle cx="100" cy="100" r="60" strokeWidth="1" strokeDasharray="4 4" />
          <polygon points="100,20 180,100 100,180 20,100" strokeWidth="1" />
          <polygon points="100,30 170,100 100,170 30,100" strokeWidth="1" />
          <circle cx="100" cy="100" r="40" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header from user deck */}
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#C89E50] uppercase block">
            YOUR NEXT STEP
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#FCFBF7] tracking-tight">
            Begin with your venue
          </h2>
          <p className="text-sm sm:text-base text-[#EDE3D0]/85 max-w-xl mx-auto font-light leading-relaxed">
            Everything starts with the right venue. Let our team curate the finest options for your date, guest count and style.
          </p>
        </div>

        {/* The Exact Signature Venue Curation Onboarding Card from Attachment */}
        <div className="rounded-2xl border-2 border-[#D4AF37]/70 bg-[#0B251A] p-6 sm:p-10 shadow-2xl relative transition-all hover:border-[#E5C378]">
          <div className="text-center space-y-4">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#C89E50] uppercase">
              VENUE CURATION ONBOARDING
            </span>

            {/* Price display */}
            <div className="py-2">
              <span className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#FCFBF7] tracking-tight font-mono tabular-nums">
                ₹2,999
              </span>
            </div>

            {/* Guarantee badge */}
            <div className="inline-block">
              <div className="px-5 py-2 rounded-full bg-[#C89E50] text-[#0B2219] font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md">
                100% REFUNDABLE ON VENUE BOOKING
              </div>
            </div>

            {/* Risk-free reassurance */}
            <p className="text-xs sm:text-sm text-[#A3B9A8] italic font-light pt-1">
              Risk-free: it returns to you when you book your venue with us.
            </p>
          </div>
        </div>

        {/* 4 Process Steps from Deck */}
        <div className="mt-12 space-y-6 sm:space-y-8 max-w-2xl mx-auto">
          {/* Step 1 */}
          <div className="flex items-start gap-4 sm:gap-6 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#C89E50] text-[#0B2219] font-serif font-bold text-base sm:text-lg flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform">
              1
            </div>
            <div className="space-y-1 pt-0.5">
              <h3 className="text-base sm:text-lg font-serif font-bold text-[#FCFBF7]">
                Pay ₹2,999
              </h3>
              <p className="text-xs sm:text-sm text-[#EDE3D0]/80 leading-relaxed font-light">
                Confirms your onboarding and assigns your dedicated venue curator.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-4 sm:gap-6 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#C89E50] text-[#0B2219] font-serif font-bold text-base sm:text-lg flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform">
              2
            </div>
            <div className="space-y-1 pt-0.5">
              <h3 className="text-base sm:text-lg font-serif font-bold text-[#FCFBF7]">
                Share your vision
              </h3>
              <p className="text-xs sm:text-sm text-[#EDE3D0]/80 leading-relaxed font-light">
                Date, guest count, city, budget and the feel you want.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-4 sm:gap-6 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#C89E50] text-[#0B2219] font-serif font-bold text-base sm:text-lg flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform">
              3
            </div>
            <div className="space-y-1 pt-0.5">
              <h3 className="text-base sm:text-lg font-serif font-bold text-[#FCFBF7]">
                Receive your shortlist
              </h3>
              <p className="text-xs sm:text-sm text-[#EDE3D0]/80 leading-relaxed font-light">
                Hand-picked venues with pricing, plus assisted site visits.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex items-start gap-4 sm:gap-6 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#C89E50] text-[#0B2219] font-serif font-bold text-base sm:text-lg flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform">
              4
            </div>
            <div className="space-y-1 pt-0.5">
              <h3 className="text-base sm:text-lg font-serif font-bold text-[#FCFBF7]">
                Book & get refunded
              </h3>
              <p className="text-xs sm:text-sm text-[#EDE3D0]/80 leading-relaxed font-light">
                Confirm your venue and your ₹2,999 comes back to you.
              </p>
            </div>
          </div>
        </div>

        {/* Central Action Area & CTA */}
        <div className="mt-12 text-center space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenCurateModal}
              className="w-full sm:w-auto px-8 py-4 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#0B2219] bg-gradient-to-r from-[#E5C378] via-[#D4AF37] to-[#C89E50] rounded-sm hover:brightness-110 shadow-xl shadow-[#D4AF37]/20 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer"
            >
              <span>Start Onboarding (Pay ₹2,999 Refundable)</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="https://wa.me/919741885957?text=Hi%20Alayam%20Weddings,%20I%20would%20like%20to%20begin%20venue%20curation%20onboarding."
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-6 py-4 text-xs sm:text-sm font-medium tracking-wide text-[#F3EDE2] bg-[#123828] border border-[#D4AF37]/40 rounded-sm hover:border-[#D4AF37] hover:bg-[#164431] transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          <div className="pt-2">
            <button
              onClick={onOpenDeckViewer}
              className="inline-flex items-center gap-1.5 text-xs text-[#C89E50] hover:text-[#E5C378] underline underline-offset-4 cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>View Original Alayam Brand Deck Document</span>
            </button>
          </div>
        </div>

        {/* Decorative Gold Divider Rule */}
        <div className="my-14 flex items-center justify-center">
          <div className="w-28 h-[1px] bg-[#C89E50]" />
        </div>

        {/* Callout & Contact from Deck */}
        <div className="text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#FCFBF7]">
            Let us start planning the day you have always imagined
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-3 text-sm sm:text-base font-medium text-[#C89E50]">
            <a href="tel:+919741885957" className="hover:text-[#FCFBF7] transition-colors flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>+91 97418 85957</span>
            </a>
            <span className="text-[#C89E50]/60 hidden sm:inline">•</span>
            <a href="https://www.alayamweddings.in" target="_blank" rel="noreferrer" className="hover:text-[#FCFBF7] transition-colors">
              www.alayamweddings.in
            </a>
          </div>
        </div>

        {/* Footnote from user deck */}
        <div className="mt-12 pt-6 border-t border-[#D4AF37]/15">
          <p className="text-[11px] sm:text-xs text-[#A3B9A8]/80 text-center leading-relaxed font-light max-w-3xl mx-auto">
            Package prices are exclusive of GST and include venue and catering for 250–300 guests across two functions (wedding and reception). Additional guests, functions and upgrades are quoted extra. Final quotation follows a requirement discussion and is subject to date and venue availability.
          </p>
        </div>
      </div>
    </section>
  );
};
