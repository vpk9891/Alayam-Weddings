import React from 'react';
import { ShieldCheck, ArrowRight, Clock, Star, Check } from 'lucide-react';

interface HeroProps {
  onOpenPaymentModal: () => void;
  onExploreVenues: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPaymentModal, onExploreVenues }) => {
  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Decorative Silk & Golden Flow Ambient Backdrop */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-gradient-to-b from-[#EAE2D3] via-[#F4EFE6] to-transparent blur-3xl rounded-full" />
        <div className="absolute top-12 right-0 w-[400px] h-[400px] bg-[#E2CCA0]/30 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Subtle Luxury Kicker */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E8DEC8] text-[#9B783E] text-xs font-medium tracking-[0.2em] uppercase silk-shadow">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B89552]"></span>
          <span>South India's Premier Assisted Venue Curation</span>
        </div>

        {/* Hero Title styled like the reference Aurum design */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif tracking-[0.08em] text-[#221C18] uppercase leading-[1.2]">
            ELEVATE YOUR CELEBRATION.<br />
            <span className="font-light italic font-serif text-[#B89552]">
              BEGIN WITH THE RIGHT VENUE.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#68574B] max-w-2xl mx-auto font-light leading-relaxed">
            Good wedding venues are fiercely competitive and get booked 9–12 months in advance. We secure priority dates, negotiate insider rates, and accompany you on private site audits.
          </p>
        </div>

        {/* Central High-Converting ₹2,999 Razorpay Action Card */}
        <div className="max-w-xl mx-auto p-6 sm:p-8 bg-white border border-[#E8DEC8] rounded-xl silk-shadow relative space-y-6">
          <div className="space-y-2">
            <span className="text-[11px] font-semibold tracking-[0.25em] text-[#9B783E] uppercase block">
              VENUE CURATION ONBOARDING
            </span>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-5xl sm:text-6xl font-serif font-bold text-[#221C18] font-mono tabular-nums">
                ₹2,999
              </span>
            </div>
            
            <div className="inline-block pt-1">
              <span className="px-3.5 py-1 rounded-full bg-[#F5EFE6] border border-[#E8DEC8] text-[#9B783E] text-xs font-semibold tracking-wider uppercase">
                100% REFUNDABLE ON VENUE BOOKING
              </span>
            </div>
            
            <p className="text-xs text-[#8C7768] font-light">
              Risk-free: Credited back directly against your venue invoice upon booking.
            </p>
          </div>

          {/* Quick value checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left text-xs text-[#4B3E35] border-y border-[#F4EFE6] py-3.5">
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-[#B89552] shrink-0" />
              <span>Dedicated Senior Venue Curator</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-[#B89552] shrink-0" />
              <span>Priority date holds at 85+ venues</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-[#B89552] shrink-0" />
              <span>Accompanied private site audits</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-[#B89552] shrink-0" />
              <span>Save ₹2L–₹4L in negotiated rates</span>
            </div>
          </div>

          {/* Razorpay Primary Pay Button */}
          <div className="space-y-3 pt-1">
            <button
              onClick={onOpenPaymentModal}
              className="w-full py-4 text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase text-white gold-gradient-bg rounded hover:brightness-105 shadow-md shadow-[#B89552]/20 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Pay ₹2,999 with Razorpay</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-3 text-[11px] text-[#8C7768]">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#B89552]" />
                Razorpay Secure
              </span>
              <span>·</span>
              <span>Instant UPI (GPay/PhonePe) & Cards</span>
              <span>·</span>
              <span>100% Refundable</span>
            </div>
          </div>
        </div>

        {/* Proof Strip */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs text-[#8C7768]">
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-base text-[#221C18] font-mono tabular-nums">85+</span>
            <span>Audited Venues</span>
          </div>
          <span className="text-[#E8DEC8] hidden sm:inline">|</span>
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-base text-[#221C18] font-mono tabular-nums">450+</span>
            <span>Weddings Curated</span>
          </div>
          <span className="text-[#E8DEC8] hidden sm:inline">|</span>
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-base text-[#221C18] font-mono tabular-nums">₹0 Net</span>
            <span>Cost to Couples</span>
          </div>
          <span className="text-[#E8DEC8] hidden sm:inline">|</span>
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-base text-[#221C18] font-mono tabular-nums">4.9/5</span>
            <span>Couple Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
};
