import React from 'react';
import {
  MapPin,
  Flower2,
  Utensils,
  Camera,
  Music,
  Sparkles,
  MailCheck,
  ClipboardCheck,
  Check,
  ArrowRight
} from 'lucide-react';

export interface EventServiceItem {
  id: string;
  index: string;
  title: string;
  shortLabel: string;
  subtitle: string;
  description: string;
  highlights: string[];
  icon: React.ComponentType<{ className?: string }>;
}

export const EVENT_SERVICES: EventServiceItem[] = [
  {
    id: 'venue',
    index: '01',
    title: 'Assisted Venue Curation',
    shortLabel: 'Venue Curation',
    subtitle: 'Where every celebration begins',
    description:
      'Priority date locks, wholesale partner rate negotiations, and accompanied acoustic and logistics audits across 85+ heritage estates and luxury venues.',
    highlights: ['Priority date holds', 'Avg. ₹2L–₹4L saved', 'Accompanied site audits'],
    icon: MapPin
  },
  {
    id: 'decor',
    index: '02',
    title: 'Bespoke Decor & Mandap Design',
    shortLabel: 'Decor & Mandap',
    subtitle: 'Architectural florals & scenography',
    description:
      'Custom 3D mandap concepts, fragrant Madurai malli & temple florals, reception backdrops, warm 2700K mood lighting, and brass oil lamp avenues.',
    highlights: ['3D stage renders', 'Fresh indigenous florals', 'Custom mood lighting'],
    icon: Flower2
  },
  {
    id: 'catering',
    index: '03',
    title: 'Fine Catering & Kalyana Sadhya',
    shortLabel: 'Catering',
    subtitle: 'Traditional feasts & gourmet stations',
    description:
      'Authentic banana-leaf Kalyana Sadhya, royal multi-cuisine spreads, live filter coffee & chaat pavilions, and private menu tastings with master chefs.',
    highlights: ['Chef tasting sessions', 'Dedicated veg kitchens', 'Live gourmet counters'],
    icon: Utensils
  },
  {
    id: 'photography',
    index: '04',
    title: 'Photography & Cinematic Films',
    shortLabel: 'Photography',
    subtitle: 'Editorial stills & 4K wedding cinema',
    description:
      'Candid documentary photographers, 4K aerial drone coverage, same-day reception edits, bridal portraits, and handcrafted archival heirloom albums.',
    highlights: ['Candid & editorial crew', '4K drone cinema', 'Heirloom photo albums'],
    icon: Camera
  },
  {
    id: 'dj',
    index: '05',
    title: 'DJ, Live Music & Sangeet Audio',
    shortLabel: 'DJ & Entertainment',
    subtitle: 'Soundscapes from dawn rituals to afterparty',
    description:
      'High-energy Sangeet DJs, concert-grade acoustic rigs, renowned Nadaswaram & Thavil masters for muhurthams, and live acoustic cocktail bands.',
    highlights: ['Celebration DJs & MC', 'Nadaswaram ensembles', 'Concert sound & truss'],
    icon: Music
  },
  {
    id: 'makeup',
    index: '06',
    title: 'Bridal Makeup & Family Styling',
    shortLabel: 'Makeup & Styling',
    subtitle: 'Editorial glam & silk saree draping',
    description:
      'Vetted celebrity & bridal makeup artists, traditional Kanjeevaram & heirloom saree draping specialists, groom styling, and on-site touch-up suites.',
    highlights: ['HD & airbrush bridal', 'Expert saree drapers', 'Guest styling lounge'],
    icon: Sparkles
  },
  {
    id: 'rsvp',
    index: '07',
    title: 'Digital RSVP & Guest Hospitality',
    shortLabel: 'RSVP & Hospitality',
    subtitle: 'Effortless five-star guest care',
    description:
      'Automated WhatsApp RSVP tracking, digital wedding itineraries, airport & rail shuttle dispatch, hotel room block management, and room hampers.',
    highlights: ['WhatsApp RSVP desk', 'Airport fleet transfers', 'Curated room hampers'],
    icon: MailCheck
  },
  {
    id: 'turnkey',
    index: '08',
    title: 'Ritual Prep & Day-Of Direction',
    shortLabel: 'Turnkey Management',
    subtitle: 'Single-point accountability',
    description:
      'Vedic priest coordination, complete homam samagri procurement, vendor invoice audits, and a dedicated Wedding Director with shadow coordinators.',
    highlights: ['Priest & samagri prep', 'Single-contract billing', '14-hr shadow crew'],
    icon: ClipboardCheck
  }
];

interface OneStopServicesSectionProps {
  selectedServices: string[];
  onToggleService: (serviceLabel: string) => void;
  onSelectAllServices: () => void;
  onProceedWithServices: () => void;
}

export const OneStopServicesSection: React.FC<OneStopServicesSectionProps> = ({
  selectedServices,
  onToggleService,
  onSelectAllServices,
  onProceedWithServices
}) => {
  const allSelected = selectedServices.length === EVENT_SERVICES.length;

  return (
    <section id="services" className="py-20 bg-white border-t border-[#E8DEC8] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-[11px] font-semibold tracking-[0.25em] text-[#9B783E] uppercase block">
            ONE-STOP EVENT MANAGEMENT
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#221C18] tracking-tight">
            Venue First. Everything Else Under One Roof.
          </h2>
          <div className="w-16 h-[1px] bg-[#C5A869] mx-auto mt-2" />
          <p className="text-xs sm:text-sm text-[#68574B] font-light leading-relaxed pt-1">
            Why coordinate 12 separate vendors? Once we lock your venue, Alayam manages your entire celebration end-to-end with pre-vetted specialists and single-point accountability.
          </p>
        </div>

        {/* Interactive Selection Toolbar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 py-3 rounded-lg bg-[#FAF7F2] border border-[#E8DEC8]">
          <div className="text-xs text-[#4B3E35] text-center sm:text-left">
            <span className="font-semibold text-[#221C18]">Build your turnkey brief:</span>{' '}
            <span className="text-[#68574B]">
              Select the services you need alongside your venue ({selectedServices.length} selected)
            </span>
          </div>

          <button
            type="button"
            onClick={onSelectAllServices}
            className="px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider rounded border border-[#C5A869] text-[#9B783E] bg-white hover:bg-[#F5EFE6] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            {allSelected ? 'Reset Selection' : 'Select All (Full Turnkey)'}
          </button>
        </div>

        {/* 8-Service Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {EVENT_SERVICES.map((service) => {
            const Icon = service.icon;
            const isSelected = selectedServices.includes(service.shortLabel);

            return (
              <button
                key={service.id}
                type="button"
                onClick={() => onToggleService(service.shortLabel)}
                className={`text-left p-5 rounded-xl border transition-all duration-200 flex flex-col justify-between cursor-pointer group ${
                  isSelected
                    ? 'bg-[#FAF7F2] border-[#B89552] ring-1 ring-[#B89552]/40 silk-shadow'
                    : 'bg-white border-[#E8DEC8] hover:border-[#C5A869]'
                }`}
              >
                <div className="space-y-3">
                  {/* Top Row: Index + Icon + Selection Check */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono font-semibold text-[#9B783E] tabular-nums">
                        {service.index}.
                      </span>
                      <div className="w-8 h-8 rounded-full bg-[#F5EFE6] border border-[#E8DEC8] flex items-center justify-center text-[#B89552] group-hover:bg-[#B89552] group-hover:text-white transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center border transition-colors ${
                        isSelected
                          ? 'bg-[#B89552] border-[#B89552] text-white'
                          : 'border-[#DCD0BD] bg-white text-transparent'
                      }`}
                      aria-hidden="true"
                    >
                      <Check className="w-3 h-3" />
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-base font-serif font-semibold text-[#221C18] leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-[11px] text-[#9B783E] font-medium mt-0.5">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#68574B] font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Unboxed metadata highlights */}
                <div className="pt-4 mt-4 border-t border-[#F4EFE6] flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[10px] text-[#8C7768]">
                  {service.highlights.map((hl, idx) => (
                    <React.Fragment key={idx}>
                      {idx > 0 && <span aria-hidden="true">·</span>}
                      <span>{hl}</span>
                    </React.Fragment>
                  ))}
                </div>
              </button>
            );
          })}
        </div>

        {/* One-Stop Conversion Strip */}
        <div className="p-6 sm:p-8 rounded-xl bg-[#FAF7F2] border border-[#C5A869]/60 silk-shadow flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9B783E] block">
              ALL-IN-ONE CONCIERGE ADVANTAGE
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-semibold text-[#221C18]">
              Start with your ₹2,999 Venue Curation to unlock bundled vendor rate cards
            </h3>
            <p className="text-xs sm:text-sm text-[#68574B] font-light max-w-2xl">
              Your ₹2,999 refundable deposit assigns a dedicated producer who brings curated Decor, Catering, Photography, DJ, Makeup, and RSVP quotes alongside your venue shortlist.
            </p>
          </div>

          <button
            type="button"
            onClick={onProceedWithServices}
            className="w-full md:w-auto px-7 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-white gold-gradient-bg rounded hover:brightness-105 shadow-md shadow-[#B89552]/20 transition-all whitespace-nowrap shrink-0 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Pay ₹2,999 & Lock Team</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
