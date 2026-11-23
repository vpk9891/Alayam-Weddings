import React from 'react';
import { AlertTriangle, CheckCircle2, Shield, Calendar, Award, Sparkles, ArrowRight } from 'lucide-react';

interface WhyAssistedSectionProps {
  onOpenPaymentModal: () => void;
}

export const WhyAssistedSection: React.FC<WhyAssistedSectionProps> = ({ onOpenPaymentModal }) => {
  return (
    <section id="why-assisted" className="py-20 bg-white border-t border-b border-[#E8DEC8] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="text-[11px] font-semibold tracking-[0.25em] text-[#9B783E] uppercase block">
            THE REALITY OF SOUTH INDIAN WEDDINGS
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#221C18] tracking-tight">
            Why Assisted Venue Curation is Critical
          </h2>
          <p className="text-sm sm:text-base text-[#68574B] max-w-2xl mx-auto font-light leading-relaxed">
            There is massive demand for aesthetic heritage venues, but extreme scarcity. Couples who search on their own waste months and pay inflated prices.
          </p>
        </div>

        {/* The 2-Column Comparison: Solo Hunting vs Alayam Assisted */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Searching On Your Own */}
          <div className="p-6 sm:p-8 rounded-xl bg-[#FAF7F2] border border-[#EAE2D3] space-y-6">
            <div className="flex items-center gap-2.5 text-[#9B783E]">
              <AlertTriangle className="w-5 h-5 text-[#B89552]" />
              <h3 className="text-lg font-serif font-semibold text-[#221C18]">
                Searching On Your Own
              </h3>
            </div>

            <ul className="space-y-4 text-xs sm:text-sm text-[#68574B] leading-relaxed">
              <li className="flex items-start gap-2.5">
                <span className="text-[#B89552] font-bold mt-0.5">✕</span>
                <span><strong>Lost Dates:</strong> Top venues book 9–12 months in advance. By the time you inquire, your auspicious muhurtham date is gone.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#B89552] font-bold mt-0.5">✕</span>
                <span><strong>Retail Markup:</strong> Walk-in inquiries receive high non-negotiable rack rates with surprise vendor royalty fees.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#B89552] font-bold mt-0.5">✕</span>
                <span><strong>Hidden Logistics Traps:</strong> Venues rarely disclose poor acoustics, inadequate power load, or unlivable bridal rooms until after deposit.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#B89552] font-bold mt-0.5">✕</span>
                <span><strong>Exhausting Coordination:</strong> Endless phone calls to unresponsive managers during your work hours.</span>
              </li>
            </ul>
          </div>

          {/* With Alayam Assisted Curation */}
          <div className="p-6 sm:p-8 rounded-xl bg-white border-2 border-[#C5A869] silk-shadow space-y-6 relative">
            <div className="absolute -top-3 right-6">
              <span className="px-3 py-1 rounded-full bg-[#B89552] text-white text-[10px] font-bold tracking-widest uppercase">
                THE ALAYAM ADVANTAGE
              </span>
            </div>

            <div className="flex items-center gap-2.5 text-[#B89552]">
              <Sparkles className="w-5 h-5" />
              <h3 className="text-lg font-serif font-semibold text-[#221C18]">
                With Alayam Assisted Curation
              </h3>
            </div>

            <ul className="space-y-4 text-xs sm:text-sm text-[#4B3E35] leading-relaxed">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#B89552] shrink-0 mt-0.5" />
                <span><strong>Priority Calendar Holds:</strong> Institutional ties with palace estates and private owners unlock reserved dates.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#B89552] shrink-0 mt-0.5" />
                <span><strong>Wholesale Price Savings:</strong> Bulk annual booking leverage saves you an average of ₹2L to ₹4.5L on final billing.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#B89552] shrink-0 mt-0.5" />
                <span><strong>Accompanied Site Audits:</strong> A senior wedding director walks the property with you, testing acoustics and power backups.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#B89552] shrink-0 mt-0.5" />
                <span><strong>100% Refundable Guarantee:</strong> Your ₹2,999 fee is returned in full upon booking your venue through us.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Mid-Section Conversion Callout */}
        <div className="text-center pt-4">
          <button
            onClick={onOpenPaymentModal}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white gold-gradient-bg rounded hover:brightness-105 shadow transition-all cursor-pointer"
          >
            <span>Secure Your Venue with Curator (₹2,999)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
