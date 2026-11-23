import React from 'react';
import { Phone, Mail, ArrowRight, ShieldCheck } from 'lucide-react';

interface SignatureOnboardingSectionProps {
  onOpenPaymentModal: () => void;
}

export const SignatureOnboardingSection: React.FC<SignatureOnboardingSectionProps> = ({
  onOpenPaymentModal
}) => {
  return (
    <section id="onboarding" className="py-20 bg-white border-t border-b border-[#E8DEC8] relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header from Deck */}
        <div className="text-center space-y-3">
          <span className="text-[11px] font-semibold tracking-[0.25em] text-[#9B783E] uppercase block">
            YOUR NEXT STEP
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#221C18] tracking-tight">
            Begin with your venue
          </h2>
          <p className="text-sm text-[#68574B] font-light max-w-lg mx-auto leading-relaxed">
            Everything starts with the right venue. Let our team curate the finest options for your date, guest count and style.
          </p>
        </div>

        {/* The Exact ₹2,999 Onboarding Card from Attachment */}
        <div className="rounded-2xl border-2 border-[#C5A869] bg-[#FAF7F2] p-8 sm:p-10 silk-shadow text-center space-y-5 relative">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#9B783E] uppercase block">
            VENUE CURATION ONBOARDING
          </span>

          <div className="py-1">
            <span className="text-5xl sm:text-6xl font-serif font-bold text-[#221C18] font-mono tabular-nums tracking-tight">
              ₹2,999
            </span>
          </div>

          <div className="inline-block">
            <div className="px-5 py-2 rounded-full gold-gradient-bg text-white font-bold text-xs tracking-wider uppercase shadow-sm">
              100% REFUNDABLE ON VENUE BOOKING
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#68574B] italic font-light">
            Risk-free: it returns to you when you book your venue with us.
          </p>
        </div>

        {/* 4 Process Steps from Deck */}
        <div className="space-y-6 max-w-xl mx-auto">
          {/* Step 1 */}
          <div className="flex items-start gap-4 sm:gap-6 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full gold-gradient-bg text-white font-serif font-bold text-base flex items-center justify-center shrink-0 shadow-sm">
              1
            </div>
            <div className="space-y-0.5 pt-0.5">
              <h3 className="text-base font-serif font-bold text-[#221C18]">
                Pay ₹2,999
              </h3>
              <p className="text-xs sm:text-sm text-[#68574B] font-light leading-relaxed">
                Confirms your onboarding and assigns your dedicated venue curator.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-4 sm:gap-6 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full gold-gradient-bg text-white font-serif font-bold text-base flex items-center justify-center shrink-0 shadow-sm">
              2
            </div>
            <div className="space-y-0.5 pt-0.5">
              <h3 className="text-base font-serif font-bold text-[#221C18]">
                Share your vision
              </h3>
              <p className="text-xs sm:text-sm text-[#68574B] font-light leading-relaxed">
                Date, guest count, city, budget and the feel you want.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-4 sm:gap-6 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full gold-gradient-bg text-white font-serif font-bold text-base flex items-center justify-center shrink-0 shadow-sm">
              3
            </div>
            <div className="space-y-0.5 pt-0.5">
              <h3 className="text-base font-serif font-bold text-[#221C18]">
                Receive your shortlist
              </h3>
              <p className="text-xs sm:text-sm text-[#68574B] font-light leading-relaxed">
                Hand-picked venues with pricing, plus assisted site visits.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex items-start gap-4 sm:gap-6 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full gold-gradient-bg text-white font-serif font-bold text-base flex items-center justify-center shrink-0 shadow-sm">
              4
            </div>
            <div className="space-y-0.5 pt-0.5">
              <h3 className="text-base font-serif font-bold text-[#221C18]">
                Book & get refunded
              </h3>
              <p className="text-xs sm:text-sm text-[#68574B] font-light leading-relaxed">
                Confirm your venue and your ₹2,999 comes back to you.
              </p>
            </div>
          </div>
        </div>

        {/* Razorpay CTA Button */}
        <div className="text-center pt-2 space-y-3">
          <button
            onClick={onOpenPaymentModal}
            className="w-full sm:w-auto px-10 py-4 text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase text-white gold-gradient-bg rounded hover:brightness-105 shadow-md shadow-[#B89552]/20 transition-all transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Pay ₹2,999 via Razorpay</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <p className="text-[11px] text-[#8C7768] flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#B89552]" />
            <span>Escrow Guarantee: 100% credited back directly upon your venue booking</span>
          </p>
        </div>

        {/* Dividing line */}
        <div className="w-24 h-[1px] bg-[#E8DEC8] mx-auto my-8" />

        {/* Contact info from deck */}
        <div className="text-center space-y-2">
          <h4 className="text-lg font-serif font-semibold text-[#221C18]">
            Let us start planning the day you have always imagined
          </h4>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-medium text-[#9B783E]">
            <a href="tel:+919741885957" className="hover:text-[#221C18] transition-colors flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-[#B89552]" />
              <span>+91 97418 85957</span>
            </a>
            <span>•</span>
            <a href="mailto:admin@alayamweddings.in" className="hover:text-[#221C18] transition-colors flex items-center gap-1">
              <Mail className="w-3.5 h-3.5 text-[#B89552]" />
              <span>admin@alayamweddings.in</span>
            </a>
            <span>•</span>
            <a href="https://www.alayamweddings.in" target="_blank" rel="noreferrer" className="hover:text-[#221C18] transition-colors">
              www.alayamweddings.in
            </a>
          </div>
        </div>

        {/* Footnote from deck */}
        <div className="pt-6 border-t border-[#F4EFE6]">
          <p className="text-[11px] text-[#8C7768] text-center leading-relaxed font-light">
            Package prices are exclusive of GST and include venue and catering for 250–300 guests across two functions (wedding and reception). Additional guests, functions and upgrades are quoted extra. Final quotation follows a requirement discussion and is subject to date and venue availability.
          </p>
        </div>
      </div>
    </section>
  );
};
