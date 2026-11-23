import React, { useState } from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenPaymentModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPaymentModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DEC8] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        {/* Left Nav (Desktop) */}
        <nav className="hidden lg:flex items-center gap-7 text-xs uppercase tracking-[0.15em] font-medium text-[#4B3E35]">
          <a href="#why-assisted" className="hover:text-[#B89552] transition-colors whitespace-nowrap">
            Why Assisted
          </a>
          <a href="#venues" className="hover:text-[#B89552] transition-colors whitespace-nowrap">
            Selected Venues
          </a>
        </nav>

        {/* Brand Center Wordmark */}
        <a 
          href="/" 
          className="text-center group flex flex-col items-center justify-center shrink-0"
        >
          <span className="text-xl sm:text-2xl font-cinzel font-semibold tracking-[0.25em] text-[#221C18] group-hover:text-[#B89552] transition-colors">
            ALAYAM
          </span>
          <span className="text-[10px] uppercase font-light tracking-[0.35em] text-[#B89552] -mt-0.5">
            WEDDINGS
          </span>
        </a>

        {/* Right Nav (Desktop) */}
        <div className="hidden lg:flex items-center gap-7">
          <nav className="flex items-center gap-7 text-xs uppercase tracking-[0.15em] font-medium text-[#4B3E35]">
            <a href="#services" className="hover:text-[#B89552] transition-colors whitespace-nowrap">
              Services
            </a>
            <a href="#onboarding" className="hover:text-[#B89552] transition-colors whitespace-nowrap">
              The ₹2,999 Step
            </a>
            <a href="#reviews" className="hover:text-[#B89552] transition-colors whitespace-nowrap">
              Reviews
            </a>
          </nav>

          <button
            onClick={onOpenPaymentModal}
            className="px-5 py-2.5 text-xs font-semibold tracking-[0.15em] uppercase text-white gold-gradient-bg rounded-sm hover:brightness-105 shadow-sm transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5"
          >
            <span>Pay ₹2,999</span>
            <span className="text-[10px] opacity-90 font-light">(100% Refundable)</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center gap-2.5">
          <button
            onClick={onOpenPaymentModal}
            className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white gold-gradient-bg rounded-sm cursor-pointer"
          >
            Pay ₹2,999
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#221C18] hover:text-[#B89552]"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-[#E8DEC8] px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3 text-xs uppercase tracking-widest text-[#342B24]">
            <a 
              href="#why-assisted" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#B89552]"
            >
              Why Assisted Venue Curation
            </a>
            <a 
              href="#venues" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#B89552]"
            >
              Selected Venues
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#B89552]"
            >
              End-to-End Services
            </a>
            <a 
              href="#onboarding" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#B89552] text-[#B89552] font-semibold"
            >
              Pay ₹2,999 Onboarding (100% Refundable)
            </a>
            <a 
              href="#reviews" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#B89552]"
            >
              Client Testimonials
            </a>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenPaymentModal();
            }}
            className="w-full py-3 text-center text-xs font-semibold uppercase tracking-widest text-white gold-gradient-bg rounded-sm cursor-pointer shadow-sm"
          >
            Pay ₹2,999 via Razorpay
          </button>
        </div>
      )}
    </header>
  );
};
