import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenPaymentModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPaymentModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F5EFE6] border-t border-[#E8DEC8] text-[#342B24] pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div>
              <span className="text-xl font-cinzel font-semibold tracking-[0.25em] text-[#221C18] block">
                ALAYAM
              </span>
              <span className="text-[10px] uppercase font-light tracking-[0.35em] text-[#9B783E] block">
                WEDDINGS
              </span>
            </div>

            <p className="text-xs text-[#68574B] leading-relaxed font-light max-w-sm">
              South India's premier assisted wedding venue curation house. We ensure couples secure their auspicious dates with pre-negotiated wholesale rates and zero risk.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#9B783E] font-medium">
              <ShieldCheck className="w-4 h-4 text-[#B89552]" />
              <span>₹2,999 100% Refundable on your venue booking contract</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#221C18] block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs text-[#68574B]">
              <li><a href="#why-assisted" className="hover:text-[#B89552] transition-colors">Why Assisted Curation</a></li>
              <li><a href="#venues" className="hover:text-[#B89552] transition-colors">Selected Venues</a></li>
              <li><a href="#onboarding" className="hover:text-[#B89552] transition-colors">The ₹2,999 Offer</a></li>
              <li><a href="#reviews" className="hover:text-[#B89552] transition-colors">Client Testimonials</a></li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#221C18] block">
              Direct Contact
            </span>
            <ul className="space-y-2.5 text-xs text-[#68574B]">
              <li>
                <a href="tel:+919741885957" className="hover:text-[#B89552] transition-colors flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#B89552]" />
                  <span>+91 97418 85957</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/919741885957" target="_blank" rel="noreferrer" className="hover:text-[#B89552] transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#25D366]"></span>
                  <span>WhatsApp Concierge</span>
                </a>
              </li>
              <li>
                <a href="mailto:hello@alayamweddings.in" className="hover:text-[#B89552] transition-colors flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#B89552]" />
                  <span>hello@alayamweddings.in</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 pt-1 text-[11px]">
                  <MapPin className="w-3.5 h-3.5 text-[#B89552] shrink-0 mt-0.5" />
                  <span>Jayamahal & Indiranagar, Bangalore</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#E8DEC8] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C7768]">
          <span>© {new Date().getFullYear()} Alayam Weddings. All rights reserved.</span>
          
          <div className="flex items-center gap-6">
            <a href="https://www.alayamweddings.in" target="_blank" rel="noreferrer" className="hover:text-[#B89552]">
              www.alayamweddings.in
            </a>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-[#221C18] transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#B89552]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
