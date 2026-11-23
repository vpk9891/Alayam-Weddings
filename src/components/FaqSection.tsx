import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Why do you charge ₹2,999 upfront and how is it 100% refundable?',
      a: 'The ₹2,999 fee filters for serious couples and immediately assigns a dedicated Senior Venue Curator who spends 10+ hours scouting dates, auditing venue contracts, and coordinating private site visits. When you confirm your chosen venue through Alayam, 100% of the ₹2,999 is directly credited back on your contract invoice. It is completely risk-free.'
    },
    {
      q: 'What is included in the 250–300 guest, 2-function package?',
      a: 'As outlined in our official deck terms, the package includes complete venue hire, authentic catering across two functions (e.g. traditional banana leaf Kalyana Sadhya for Muhurtham and royal dinner banquet for Reception), bespoke floral mandap scenography, stage lighting, sound production, and day-of wedding direction. Additional guests, functions, and luxury upgrades are quoted transparently.'
    },
    {
      q: 'Can we bring our own family Vedic priest or traditional caterer?',
      a: 'Yes, absolutely. While Alayam works with Bangalore’s most celebrated culinary masters and temple priests, we seamlessly accommodate your preferred family Vadhyar (priest) or ancestral catering team, providing them with dedicated kitchen logistics, brassware, and ceremonial samagri.'
    },
    {
      q: 'Do you curate venues outside Bangalore?',
      a: 'Yes. Beyond Bangalore (Palace Grounds, Kanakapura, Hebbal, Yelahanka, Whitefield), we actively curate heritage palaces in Mysore, misty coffee estate resorts in Coorg & Sakleshpur, riverside sanctuaries in Kabini, and beachfront retreats along the Karnataka and Tamil Nadu coasts.'
    },
    {
      q: 'How much do couples typically save on venue booking through Alayam?',
      a: 'Because we book hundreds of wedding dates across our portfolio each year, venue owners extend institutional partner tariffs to our couples. Families typically save between ₹2,00,000 to ₹4,50,000 compared to walk-in inquiries, in addition to securing waivers on high-voltage generator and corkage charges.'
    },
    {
      q: 'How fast will my dedicated curator reach out after onboarding?',
      a: 'Within 2 hours of completing your ₹2,999 onboarding, your dedicated Senior Curator will connect directly via WhatsApp and phone to review your vision, dates, and guest profile before sharing your tailored shortlist within 24 to 48 hours.'
    }
  ];

  return (
    <section className="py-20 bg-[#091E15] relative border-t border-[#D4AF37]/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-14">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#C89E50] uppercase block">
            CLARITY & CONFIDENCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#FCFBF7] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#EDE3D0]/80 font-light max-w-xl mx-auto">
            Everything you need to know about our venue curation onboarding, packages, and ritual orchestration.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#0B251A] border border-[#D4AF37]/25 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-serif font-bold text-[#FCFBF7]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#D4AF37] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#EDE3D0]/80 leading-relaxed font-light border-t border-[#D4AF37]/10 mt-1">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
