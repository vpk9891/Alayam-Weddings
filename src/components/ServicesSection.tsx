import React from 'react';
import { Sparkles, Utensils, Flower2, Clock, Users, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onOpenCurateModal: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenCurateModal }) => {
  const services = [
    {
      index: '01',
      title: 'Venue Scouting & Escrow Rate Negotiation',
      subtitle: 'Securing prime dates with institutional pricing leverage',
      icon: Sparkles,
      description: 'We eliminate the back-and-forth headache of booking wedding venues. Our direct contracts with palace estates, private farmhouses, and 5-star properties unlock preferred seasonal dates and pre-negotiated tariffs that save families an average of ₹2.5 to ₹4 Lakhs.',
      deliverables: [
        'Curated 48-hour shortlist with verified muhurtham date availability',
        'Transparent cost audit eliminating surprise generator/electricity surcharges',
        'Accompanied site visits with architectural sound and light evaluation',
        '100% of your ₹2,999 curation deposit refunded upon booking confirmation'
      ]
    },
    {
      index: '02',
      title: 'Architectural Scenography & Floral Mandaps',
      subtitle: 'Living art infused with traditional botanical heritage',
      icon: Flower2,
      description: 'From sculpted stone mandaps draped in fragrant Madurai malli (jasmine) and marigolds to contemporary illuminated glass pavilions, our scenography team crafts sets that honor tradition while photographing like modern high fashion.',
      deliverables: [
        '3D photorealistic render of your wedding mandap & reception stage',
        'Sustainable, locally sourced indigenous South Indian temple florals',
        'Warm 2700K ambient stage lighting balanced for wedding photography',
        'Custom ceremonial entrance arches and brass oil lamp (kuthu vilakku) avenues'
      ]
    },
    {
      index: '03',
      title: 'Epicurean Feasts & Kalyana Sadhya Feasts',
      subtitle: 'Authentic multi-generational dining experiences that guests celebrate for years',
      icon: Utensils,
      description: 'The soul of any South Indian wedding is its culinary excellence. We curate master caterers specializing in traditional banana-leaf Kalyana Sadhya feasts, royal Chettinad spreads, and contemporary live interactive gourmet dessert lounges.',
      deliverables: [
        'Private tasting sessions with master culinary chefs and sweetmakers',
        'Pure vegetarian dedicated kitchen protocols with authentic brass thalis',
        'Live artisanal filter coffee counters, tender coconut bars, and regional mithai',
        'Disciplined dining hall stewards ensuring seamless 300-guest batch turnarounds'
      ]
    },
    {
      index: '04',
      title: 'Ritual Precision & Muhurtham Orchestration',
      subtitle: 'Auspicious timing honored without chaotic rushing',
      icon: Clock,
      description: 'Traditional wedding ceremonies involve sacred mantras, auspicious muhurtham windows, and deep emotional significance. Our ceremonial coordinators ensure priests have every sacred samagri in place so the rituals flow serenely.',
      deliverables: [
        'Vedic priest consultation and complete samagri logistics management',
        'Renowned Nadaswaram, Thavil, and Carnatic Shehnai artist coordination',
        'Exact muhurtham countdown management with zero altar disturbance',
        'Shadow coordinator by the bride and groom’s side for all 14 hours'
      ]
    },
    {
      index: '05',
      title: 'Bridal Concierge & Guest Hospitality',
      subtitle: 'Five-star warmth for family, elders, and out-of-town guests',
      icon: Users,
      description: 'Your close relatives and elders should feel like honored royal guests, not event organizers. We manage hotel room allotments, airport pickups, luggage tags, emergency saree draping, and personalized welcome hampers.',
      deliverables: [
        'Digital RSVP dashboard and personalized WhatsApp guest assistance desk',
        'Dedicated airport and railway station shuttle coordination',
        'On-site hospitality helpdesk with guest room hamper distribution',
        'Professional saree draping artists and bridal salon logistics management'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#091E15] relative overflow-hidden border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#C89E50] uppercase block">
            END-TO-END PLANNING SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#FCFBF7] tracking-tight">
            Curated Execution. Zero Compromise.
          </h2>
          <p className="text-sm sm:text-base text-[#EDE3D0]/80 font-light leading-relaxed">
            We operate with the discipline of architectural directors and the warmth of extended family. Every detail from the first venue visit to the final vidai farewell is orchestrated with perfection.
          </p>
        </div>

        {/* Numbered Editorial Service Cards */}
        <div className="space-y-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.index}
                className="bg-[#0B251A] border border-[#D4AF37]/25 hover:border-[#D4AF37]/60 rounded-xl p-6 sm:p-10 transition-all duration-300 shadow-xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Index & Title */}
                  <div className="lg:col-span-5 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-[#D4AF37] tracking-widest px-2.5 py-1 rounded bg-[#071711] border border-[#D4AF37]/20">
                        {service.index}
                      </span>
                      <Icon className="w-5 h-5 text-[#D4AF37]" />
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#FCFBF7] leading-tight">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#C89E50] font-medium tracking-wide">
                      {service.subtitle}
                    </p>

                    <p className="text-xs sm:text-sm text-[#EDE3D0]/80 leading-relaxed font-light pt-2">
                      {service.description}
                    </p>
                  </div>

                  {/* Right Column: Key Deliverables */}
                  <div className="lg:col-span-7 bg-[#071711]/70 border border-[#D4AF37]/15 rounded-lg p-6 space-y-4">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#A3B9A8] block">
                      Guaranteed Planning Inclusions
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {service.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-[#EDE3D0]/90">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0 mt-1.5" />
                          <span className="leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Conversion Banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 rounded-xl bg-[#0B251A] border border-[#D4AF37]/30">
            <span className="text-xs sm:text-sm text-[#EDE3D0]">
              Ready to meet your dedicated wedding curator?
            </span>
            <button
              onClick={onOpenCurateModal}
              className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0B2219] bg-[#D4AF37] hover:bg-[#E5C378] transition-colors rounded-sm flex items-center gap-2 cursor-pointer"
            >
              <span>Start With Your Venue (₹2,999)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
