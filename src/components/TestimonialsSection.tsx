import React from 'react';
import { TESTIMONIALS } from '../data/venues';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-[#FAF7F2] border-t border-[#E8DEC8] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header styled like reference image */}
        <div className="text-center space-y-2">
          <span className="text-[11px] font-semibold tracking-[0.25em] text-[#9B783E] uppercase block">
            VERIFIED EXPERIENCES
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#221C18] tracking-tight">
            Client Testimonials
          </h2>
          <div className="w-16 h-[1px] bg-[#C5A869] mx-auto mt-2" />
        </div>

        {/* 3 Editorial Testimonial Columns styled like AURUM ATELIER reference */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="space-y-4 px-2">
              <span className="text-3xl font-serif text-[#C5A869] block leading-none select-none">
                “
              </span>

              <p className="text-xs sm:text-sm text-[#4B3E35] leading-relaxed font-light italic">
                {t.quote}
              </p>

              <div className="pt-2 space-y-0.5">
                <h4 className="text-xs uppercase tracking-widest font-semibold text-[#221C18]">
                  {t.couple}
                </h4>
                <div className="text-[11px] text-[#9B783E] font-light">
                  <span>{t.venueBooked}</span>
                  <span className="mx-1.5 opacity-60">·</span>
                  <span>{t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
