import React, { useState } from 'react';
import { Search, Users, MapPin, ArrowRight, Eye, Sparkles } from 'lucide-react';
import { VENUES_DATA, Venue } from '../data/venues';

interface VenuePortfolioProps {
  onSelectVenue: (venue: Venue) => void;
  onBookCuration: (venueName?: string) => void;
}

export const VenuePortfolio: React.FC<VenuePortfolioProps> = ({
  onSelectVenue,
  onBookCuration
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [capacityFilter, setCapacityFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Heritage Palace', 'Courtyard Estate', 'Luxury Ballroom', 'Scenic Destination'];

  const filteredVenues = VENUES_DATA.filter((venue) => {
    // Category match
    const categoryMatch = selectedCategory === 'All' || venue.category === selectedCategory;
    
    // Capacity match
    let capacityMatch = true;
    if (capacityFilter === 'intimate') {
      capacityMatch = venue.capacityMin <= 250;
    } else if (capacityFilter === 'mid') {
      capacityMatch = venue.capacityMax >= 250 && venue.capacityMin <= 500;
    } else if (capacityFilter === 'grand') {
      capacityMatch = venue.capacityMax > 600;
    }

    // Search query match
    const searchMatch = 
      venue.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      venue.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      venue.highlights.some(h => h.toLowerCase().includes(searchQuery.toLowerCase()));

    return categoryMatch && capacityMatch && searchMatch;
  });

  return (
    <section id="venues" className="py-20 bg-[#071711] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#C89E50] uppercase block">
            PREMIUM VENUE PORTFOLIO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#FCFBF7] tracking-tight">
            Curated Spaces for Auspicious Moments
          </h2>
          <p className="text-sm sm:text-base text-[#EDE3D0]/80 font-light leading-relaxed">
            Every venue in the Alayam collection is personally audited for ritual suitability, acoustic quality, guest transit ease, and heritage charm.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="space-y-4 mb-10">
          {/* Category Tabs (Functional buttons with active styling) */}
          <div className="flex items-center justify-start sm:justify-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-medium rounded-full transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#D4AF37] text-[#0B2219] font-bold shadow-md shadow-[#D4AF37]/20'
                    : 'bg-[#0E281D] text-[#EDE3D0]/80 hover:text-[#FCFBF7] border border-[#D4AF37]/20'
                }`}
              >
                {cat === 'All' ? 'All Styles' : cat}
              </button>
            ))}
          </div>

          {/* Secondary Controls: Search & Capacity */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-3 bg-[#0B2219] border border-[#D4AF37]/20 rounded-lg">
            {/* Search */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-[#A3B9A8] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by venue, area or feature..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-[#071711] border border-[#D4AF37]/25 rounded text-[#FCFBF7] placeholder-[#A3B9A8]/60 focus:outline-none focus:border-[#D4AF37]"
              />
            </div>

            {/* Capacity Segmented Filter */}
            <div className="flex items-center gap-1 w-full sm:w-auto justify-end">
              <span className="text-[11px] text-[#A3B9A8] uppercase tracking-wider mr-2 hidden md:inline">
                Guest Capacity:
              </span>
              <button
                onClick={() => setCapacityFilter('all')}
                className={`px-2.5 py-1 text-xs rounded transition-colors cursor-pointer ${
                  capacityFilter === 'all' ? 'bg-[#184634] text-[#D4AF37] font-semibold' : 'text-[#EDE3D0]/70 hover:text-[#FCFBF7]'
                }`}
              >
                Any
              </button>
              <button
                onClick={() => setCapacityFilter('intimate')}
                className={`px-2.5 py-1 text-xs rounded transition-colors cursor-pointer ${
                  capacityFilter === 'intimate' ? 'bg-[#184634] text-[#D4AF37] font-semibold' : 'text-[#EDE3D0]/70 hover:text-[#FCFBF7]'
                }`}
              >
                &lt; 250
              </button>
              <button
                onClick={() => setCapacityFilter('mid')}
                className={`px-2.5 py-1 text-xs rounded transition-colors cursor-pointer ${
                  capacityFilter === 'mid' ? 'bg-[#184634] text-[#D4AF37] font-semibold' : 'text-[#EDE3D0]/70 hover:text-[#FCFBF7]'
                }`}
              >
                250 – 500
              </button>
              <button
                onClick={() => setCapacityFilter('grand')}
                className={`px-2.5 py-1 text-xs rounded transition-colors cursor-pointer ${
                  capacityFilter === 'grand' ? 'bg-[#184634] text-[#D4AF37] font-semibold' : 'text-[#EDE3D0]/70 hover:text-[#FCFBF7]'
                }`}
              >
                500+
              </button>
            </div>
          </div>
        </div>

        {/* Venue Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredVenues.map((venue) => (
            <div
              key={venue.id}
              className="bg-[#0A1E15] border border-[#D4AF37]/25 rounded-xl overflow-hidden hover:border-[#D4AF37]/70 transition-all duration-300 flex flex-col group shadow-lg"
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative h-60 w-full overflow-hidden bg-[#071711]">
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E15] via-transparent to-black/30" />
                
                {/* Style badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded bg-[#071711]/80 backdrop-blur-sm border border-[#D4AF37]/30 text-[#D4AF37] text-[11px] font-semibold tracking-wider uppercase">
                    {venue.category}
                  </span>
                </div>

                {/* Location indicator */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-[#EDE3D0]">
                  <span className="flex items-center gap-1 bg-[#0A1E15]/90 px-2 py-0.5 rounded text-[11px]">
                    <MapPin className="w-3 h-3 text-[#D4AF37]" />
                    {venue.city}
                  </span>
                  <span className="flex items-center gap-1 bg-[#0A1E15]/90 px-2 py-0.5 rounded text-[11px] font-mono tabular-nums">
                    <Users className="w-3 h-3 text-[#D4AF37]" />
                    {venue.recommendedGuests}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-serif font-bold text-[#FCFBF7] group-hover:text-[#D4AF37] transition-colors leading-tight">
                    {venue.name}
                  </h3>
                  <p className="text-xs text-[#A3B9A8] line-clamp-2 leading-relaxed">
                    {venue.tagline}
                  </p>
                </div>

                {/* Feature highlight tags (unboxed text separators per constitution) */}
                <div className="pt-2 border-t border-[#D4AF37]/15">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-[#C7B58A]">
                    {venue.highlights.slice(0, 3).map((hl, i) => (
                      <React.Fragment key={i}>
                        {i > 0 && <span aria-hidden="true" className="text-[#D4AF37]/40">·</span>}
                        <span>{hl}</span>
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Pricing Guide */}
                <div className="pt-3 border-t border-[#D4AF37]/15 flex items-baseline justify-between">
                  <div>
                    <span className="text-[10px] text-[#A3B9A8] uppercase tracking-wider block">
                      Venue Hire From
                    </span>
                    <span className="text-base font-serif font-bold text-[#D4AF37] font-mono tabular-nums">
                      {venue.venueRentalStarting}
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] text-[#A3B9A8] uppercase tracking-wider block">
                      2-Function Ballpark
                    </span>
                    <span className="text-xs font-semibold text-[#FCFBF7] font-mono tabular-nums">
                      ~{venue.twoFunctionEstimate}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <button
                    onClick={() => onSelectVenue(venue)}
                    className="py-2.5 px-3 text-xs font-medium text-[#EDE3D0] bg-[#102B1F] hover:bg-[#163D2B] border border-[#D4AF37]/30 rounded transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>View Dossier</span>
                  </button>

                  <button
                    onClick={() => onBookCuration(venue.name)}
                    className="py-2.5 px-3 text-xs font-semibold uppercase tracking-wider text-[#0B2219] bg-[#D4AF37] hover:bg-[#E5C378] transition-colors rounded shadow-sm flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Curate</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state if search finds nothing */}
        {filteredVenues.length === 0 && (
          <div className="text-center py-16 bg-[#0A1E15] border border-[#D4AF37]/20 rounded-xl p-8 space-y-4">
            <Sparkles className="w-8 h-8 text-[#D4AF37] mx-auto" />
            <h3 className="text-lg font-serif font-bold text-[#FCFBF7]">No matching venues found</h3>
            <p className="text-xs text-[#A3B9A8] max-w-md mx-auto">
              We have an unlisted catalog of 70+ private ancestral homes, estates, and boutique resorts not published online.
            </p>
            <button
              onClick={() => onBookCuration()}
              className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0B2219] bg-[#D4AF37] rounded-sm hover:bg-[#E5C378] transition-colors cursor-pointer"
            >
              Ask Curator for Custom Unlisted Search
            </button>
          </div>
        )}

        {/* Bottom Banner for custom venue curation */}
        <div className="mt-14 p-6 sm:p-8 rounded-xl bg-gradient-to-r from-[#0C291C] via-[#0F3625] to-[#0C291C] border border-[#D4AF37]/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#FCFBF7]">
              Have a specific private estate or ancestral temple in mind?
            </h3>
            <p className="text-xs sm:text-sm text-[#EDE3D0]/80">
              Our venue scouting team handles permits, acoustic clearances, electricity load upgrades, and luxury tenting for any private estate.
            </p>
          </div>

          <button
            onClick={() => onBookCuration()}
            className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#0B2219] bg-[#D4AF37] hover:bg-[#E5C378] transition-all rounded shadow-md whitespace-nowrap shrink-0 cursor-pointer"
          >
            Start Venue Curation (₹2,999)
          </button>
        </div>
      </div>
    </section>
  );
};
