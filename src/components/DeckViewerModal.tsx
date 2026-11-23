import React from 'react';
import { X, Download, ShieldCheck } from 'lucide-react';

interface DeckViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedOnboarding: () => void;
}

export const DeckViewerModal: React.FC<DeckViewerModalProps> = ({
  isOpen,
  onClose,
  onProceedOnboarding
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl bg-[#091E15] border border-[#D4AF37]/50 rounded-2xl shadow-2xl overflow-hidden my-auto text-[#EDE3D0] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0B251A] px-6 py-4 border-b border-[#D4AF37]/20 flex items-center justify-between">
          <div>
            <h3 className="text-sm sm:text-base font-serif font-bold text-[#FCFBF7]">
              Alayam Weddings · Official Onboarding Brochure
            </h3>
            <p className="text-[11px] text-[#C89E50]">
              Page 7/7 · Venue Curation Protocol & Guarantee Policy
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#EDE3D0]/70 hover:text-[#FCFBF7] rounded-full hover:bg-[#071711] transition-colors"
            aria-label="Close document viewer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Document Display Canvas */}
        <div className="p-4 sm:p-6 flex items-center justify-center bg-[#05110c] overflow-auto max-h-[70vh]">
          <div className="relative max-w-md w-full rounded-lg overflow-hidden border border-[#D4AF37]/30 shadow-2xl">
            <img
              src="/assets/aistudio/Screenshot_2026-11-08_at_5.09.14_PM_cf8ce7b4.png"
              alt="Alayam Weddings Onboarding Document"
              className="w-full h-auto object-contain block"
            />
          </div>
        </div>

        {/* Footer with action */}
        <div className="bg-[#0B251A] p-4 sm:p-6 border-t border-[#D4AF37]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-[#A3B9A8]">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            <span>₹2,999 100% Refundable on your venue contract</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-xs text-[#EDE3D0] hover:text-[#FCFBF7] transition-colors cursor-pointer"
            >
              Close Document
            </button>
            <button
              onClick={() => {
                onClose();
                onProceedOnboarding();
              }}
              className="w-full sm:w-auto px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0B2219] bg-[#D4AF37] hover:bg-[#E5C378] transition-colors rounded-sm cursor-pointer shadow-md"
            >
              Start Onboarding (₹2,999)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
