import React from 'react';
import { MapPin, Users, ArrowRight } from 'lucide-react';
import { VENUES_DATA, Venue } from '../data/venues';

interface SelectedVenuesSectionProps {
  onSelectVenueForPayment: (venue: Venue) => void;
}

export const SelectedVenuesSection: React.FC<SelectedVenuesSectionProps> = ({
  onSelectVenueForPayment
}) => {
  return (
    <section id="venues" className="py-20 bg-[#FAF7F2] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header styled after the user's reference image 'Selected Works' */}
        <div className="text-center space-y-3">
          <span className="text-[11px] font-semibold tracking-[0.25em] text-[#9B783E] uppercase block">
            CURATED PORTFOLIO
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#221C18] tracking-tight">
            Selected Venues
          </h2>
          <div className="w-16 h-[1px] bg-[#C5A869] mx-auto mt-2" />
          <p className="text-xs sm:text-sm text-[#68574B] max-w-lg mx-auto font-light leading-relaxed pt-1">
            Hand-audited heritage courtyards, palace grounds, and contemporary glasshouses across Bangalore & South India.
          </p>
        </div>

        {/* Selected Works Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {VENUES_DATA.slice(0, 6).map((venue) => (
            <div
              key={venue.id}
              className="bg-white border border-[#E8DEC8] rounded-lg overflow-hidden group hover:border-[#C5A869] transition-all duration-300 flex flex-col silk-shadow"
            >
              {/* Photo Frame */}
              <div className="relative h-60 w-full overflow-hidden bg-[#F4EFE6]">
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-[#9B783E] text-[10px] font-semibold tracking-widest uppercase rounded-sm border border-[#E8DEC8]">
                    {venue.category}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#E2CCA0]" />
                    {venue.city}
                  </span>
                  <span className="flex items-center gap-1 font-mono tabular-nums">
                    <Users className="w-3 h-3 text-[#E2CCA0]" />
                    {venue.recommendedGuests}
                  </span>
                </div>
              </div>

              {/* Venue Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <h3 className="text-lg font-serif font-semibold text-[#221C18] group-hover:text-[#B89552] transition-colors leading-tight">
                    {venue.name}
                  </h3>
                  <p className="text-xs text-[#68574B] line-clamp-2 font-light leading-relaxed">
                    {venue.tagline}
                  </p>
                </div>

                {/* Key feature pills */}
                <div className="pt-2 border-t border-[#F4EFE6] flex items-baseline justify-between text-xs">
                  <div>
                    <span className="text-[10px] text-[#8C7768] uppercase tracking-wider block">
                      Rental Guide
                    </span>
                    <span className="text-sm font-serif font-bold text-[#9B783E] font-mono tabular-nums">
                      {venue.venueRentalStarting}
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] text-[#8C7768] uppercase tracking-wider block">
                      Assisted Saving
                    </span>
                    <span className="text-xs font-semibold text-[#221C18]">
                      Avg. ₹2L - ₹3.5L
                    </span>
                  </div>
                </div>

                {/* Direct Action */}
                <button
                  onClick={() => onSelectVenueForPayment(venue)}
                  className="w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-[#221C18] bg-[#F5EFE6] hover:bg-[#EAE2D3] border border-[#E8DEC8] hover:border-[#C5A869] rounded transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Curate This Venue (₹2,999)</span>
                  <ArrowRight className="w-3 h-3 text-[#B89552]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
