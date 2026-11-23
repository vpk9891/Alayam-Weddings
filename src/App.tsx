import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyAssistedSection } from './components/WhyAssistedSection';
import { SelectedVenuesSection } from './components/SelectedVenuesSection';
import { SignatureOnboardingSection } from './components/SignatureOnboardingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';
import { RazorpayCheckoutModal } from './components/RazorpayCheckoutModal';
import { Venue } from './data/venues';
import { ShieldCheck, Phone } from 'lucide-react';

export default function App() {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState<boolean>(false);
  const [selectedVenue, setSelectedVenue] = useState<Venue | null>(null);

  const handleOpenPaymentModal = (venue?: Venue | null) => {
    setSelectedVenue(venue || null);
    setIsPaymentModalOpen(true);
  };

  const handleExploreVenues = () => {
    const el = document.getElementById('venues');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#221C18] flex flex-col font-sans selection:bg-[#C5A869]/30 selection:text-[#221C18]">
      {/* Top Bar matching Aurum luxury aesthetic */}
      <Navbar onOpenPaymentModal={() => handleOpenPaymentModal()} />

      {/* Main Clean Conversion Landing Page */}
      <main className="flex-1">
        {/* 1. Hero Section with direct ₹2,999 Razorpay CTA */}
        <Hero
          onOpenPaymentModal={() => handleOpenPaymentModal()}
          onExploreVenues={handleExploreVenues}
        />

        {/* 2. Importance of Assisted Venue Curation & Market Scarcity */}
        <WhyAssistedSection
          onOpenPaymentModal={() => handleOpenPaymentModal()}
        />

        {/* 3. Selected Venues (styled like Selected Works in reference) */}
        <SelectedVenuesSection
          onSelectVenueForPayment={(venue) => handleOpenPaymentModal(venue)}
        />

        {/* 4. Signature ₹2,999 Onboarding Section (From User Deck Page 7) */}
        <SignatureOnboardingSection
          onOpenPaymentModal={() => handleOpenPaymentModal()}
        />

        {/* 5. Client Testimonials (styled like Aurum reference) */}
        <TestimonialsSection />
      </main>

      {/* Footer */}
      <Footer onOpenPaymentModal={() => handleOpenPaymentModal()} />

      {/* Sticky Mobile Quick Razorpay Action Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#E8DEC8] px-4 py-2.5 flex items-center justify-between gap-3 shadow-xl">
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 text-xs text-[#221C18] font-bold font-mono tabular-nums">
            <span>₹2,999</span>
            <span className="text-[10px] text-[#9B783E] font-normal uppercase">Onboarding</span>
          </div>
          <span className="text-[10px] text-[#25D366] flex items-center gap-1 font-semibold">
            <ShieldCheck className="w-3 h-3" />
            100% Refundable
          </span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="tel:+919741885957"
            className="p-2.5 rounded bg-white border border-[#E8DEC8] text-[#9B783E]"
            aria-label="Call Alayam"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => handleOpenPaymentModal()}
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white gold-gradient-bg rounded shadow cursor-pointer"
          >
            Pay with Razorpay
          </button>
        </div>
      </div>

      {/* Official Razorpay Checkout Modal */}
      <RazorpayCheckoutModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        selectedVenue={selectedVenue}
      />
    </div>
  );
}
