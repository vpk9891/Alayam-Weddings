export interface Venue {
  id: string;
  name: string;
  tagline: string;
  category: 'Heritage Palace' | 'Courtyard Estate' | 'Luxury Ballroom' | 'Scenic Destination';
  location: string;
  city: string;
  capacityMin: number;
  capacityMax: number;
  recommendedGuests: string;
  venueRentalStarting: string;
  twoFunctionEstimate: string; // for 250-300 guests
  image: string;
  features: string[];
  description: string;
  mandapSetting: string;
  parkingCapacity: string;
  roomsCount: number;
  highlights: string[];
}

export const VENUES_DATA: Venue[] = [
  {
    id: 'avana-heritage-estate',
    name: 'Avana Heritage Courtyard & Mango Orchards',
    tagline: '100-year-old stone courtyard framed by ancient banyans and brass oil lamps',
    category: 'Courtyard Estate',
    location: 'Kanakapura Road, Bangalore South',
    city: 'Bangalore',
    capacityMin: 200,
    capacityMax: 800,
    recommendedGuests: '250 - 450 Guests',
    venueRentalStarting: '₹3,50,000',
    twoFunctionEstimate: '₹14,80,000',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Open-air central courtyard with terracotta tile roofs',
      'Ancient Banyan Tree Mandap altar with natural shade',
      '32 Air-conditioned guest suites for close family',
      'Dedicated vegetarian kitchen with traditional brass vessels',
      'Valet parking for 220 vehicles with buggy service'
    ],
    description: 'An idyllic heritage sanctuary with carved stone pillars, lily ponds, and rustic Chettinad woodwork. Avana provides the nostalgic warmth of ancestral village celebrations paired with high-end luxury hospitality.',
    mandapSetting: 'Under the 150-year sacred Banyan canopy or inside the carved granite open courtyard',
    parkingCapacity: '220+ Cars',
    roomsCount: 32,
    highlights: ['Heritage Courtyard', 'Banyan Tree Mandap', 'Lush Organic Orchards', 'Eco-Conscious Decor Friendly']
  },
  {
    id: 'royal-palace-pavilion',
    name: 'The Royal Pavilion at Palace Enclave',
    tagline: 'Regal Tudor architecture, ornate grand chandeliers, and vast manicured lawns',
    category: 'Heritage Palace',
    location: 'Palace Grounds, Jayamahal, Central Bangalore',
    city: 'Bangalore',
    capacityMin: 400,
    capacityMax: 1800,
    recommendedGuests: '300 - 800 Guests',
    venueRentalStarting: '₹6,00,000',
    twoFunctionEstimate: '₹22,50,000',
    image: 'https://images.unsplash.com/photo-1545232979-fbf68fe9b10d?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Colossal 28-foot ceiling grand hall with vintage crystal chandeliers',
      '45,000 sq.ft. carpet lawn for starlit evening receptions',
      'Separate air-conditioned bridal and groom suites with salon setup',
      'Prime central Bangalore location with dual arterial gate access',
      'Dedicated generator infrastructure for massive light setups'
    ],
    description: 'The epitome of aristocratic South Indian wedding grandeur. Designed for families who desire sweeping scale, imperial procession entries with royal nadaswaram ensembles, and high-impact floral production.',
    mandapSetting: 'Raised 40-foot circular podium with 360-degree guest sightlines and tiered seating',
    parkingCapacity: '600+ Cars',
    roomsCount: 18,
    highlights: ['Imperial Grandeur', 'High Ceiling Ballroom', 'Central Bangalore', 'Royal Procession Route']
  },
  {
    id: 'the-glasshouse-conservatory',
    name: 'The Glasshouse Conservatory & Water Gardens',
    tagline: 'Contemporary botanical architecture with illuminated reflecting pools',
    category: 'Luxury Ballroom',
    location: 'Hebbal, Bangalore North',
    city: 'Bangalore',
    capacityMin: 150,
    capacityMax: 500,
    recommendedGuests: '200 - 350 Guests',
    venueRentalStarting: '₹4,20,000',
    twoFunctionEstimate: '₹16,50,000',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Full-glass climate-controlled atrium with panoramic sky views',
      'Sunken lotus pond with floating candle stages',
      'Integrated intelligent mood lighting & acoustic-damped ceiling',
      'Chef-curated live interactive gourmet cooking pavilions',
      'Direct 25-minute connection from Kempegowda International Airport'
    ],
    description: 'Where contemporary European glasshouse aesthetics meet classic wedding ceremonies. Flooded with golden natural daylight for morning muhurthams and transforming into a luminous starlit dream for evening cocktail receptions.',
    mandapSetting: 'Floating glass deck overlooking illuminated water lily ponds',
    parkingCapacity: '250 Cars',
    roomsCount: 24,
    highlights: ['All-Weather Glasshouse', 'Airport Proximity', 'Acoustic Sound Stage', 'Sunset Viewpoint']
  },
  {
    id: 'suryodayam-vedic-mantapa',
    name: 'Suryodayam Vedic Kalyana Mantapa',
    tagline: 'Authentic Dravidian stone sanctuary designed according to sacred Vastu shastra',
    category: 'Heritage Palace',
    location: 'Malleswaram / Rajajinagar Environs',
    city: 'Bangalore',
    capacityMin: 250,
    capacityMax: 700,
    recommendedGuests: '250 - 400 Guests',
    venueRentalStarting: '₹2,80,000',
    twoFunctionEstimate: '₹12,90,000',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Hand-carved granite pillars reminiscent of Hampi architecture',
      'Elevated traditional Homam fire altar with smoke ventilation system',
      'Traditional banana leaf dining hall seating 350 guests simultaneously',
      'Temple bell entrance archway and brass deepam walkways',
      'Dedicated priest accommodation and samagri storage chambers'
    ],
    description: 'Built for couples who prioritize sacred Vedic rituals and timeless traditional atmosphere. Every arch and pillar exudes devotional reverence, providing an unmatched setting for traditional silk sarees, jasmine fragrances, and auspicious morning muhurthams.',
    mandapSetting: 'Sacred stone vimanam mandap with carved Ashtalakshmi motifs and natural oil lamps',
    parkingCapacity: '180 Cars',
    roomsCount: 20,
    highlights: ['Vedic Architecture', 'Traditional Dining Hall', 'Homam Compliant', 'Auspicious Vastu Alignment']
  },
  {
    id: 'nandi-mist-amphitheatre',
    name: 'Nandi Hills Mist Resort & Amphitheatre',
    tagline: 'Panoramic cliffside amphitheatre with misty mountain views and open-sky lawns',
    category: 'Scenic Destination',
    location: 'Nandi Hills Foothills, Chikkaballapur',
    city: 'Destination / Bangalore Outskirts',
    capacityMin: 180,
    capacityMax: 650,
    recommendedGuests: '200 - 450 Guests',
    venueRentalStarting: '₹4,80,000',
    twoFunctionEstimate: '₹18,20,000',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Natural amphitheatre overlooking the morning mist valley',
      '55 Luxury villa suites with private plunge pools',
      'Sunset cocktail deck with 180-degree cliffside vistas',
      'Bonfire lawn for post-sangeet family gatherings',
      'Helipad access and express airport shuttle service'
    ],
    description: 'Escape the city rush without booking flights. Nestled just 45 minutes from Bangalore, this destination retreat delivers destination wedding glamour with effortless accessibility for grandparents and guests alike.',
    mandapSetting: 'Cantilevered infinity deck suspended over the mist valley',
    parkingCapacity: '300 Cars',
    roomsCount: 55,
    highlights: ['Misty Mountain Views', 'Villa Resort Stay', 'Destination Feel', 'Helipad Facility']
  },
  {
    id: 'kabini-waterside-palms',
    name: 'Kabini Waterside Pavilion & Forest Sanctuary',
    tagline: 'Intimate waterfront sanctuary flanked by teak forests and serene backwaters',
    category: 'Scenic Destination',
    location: 'Kabini Riverfront, Karnataka',
    city: 'Destination',
    capacityMin: 100,
    capacityMax: 350,
    recommendedGuests: '150 - 250 Guests',
    venueRentalStarting: '₹5,50,000',
    twoFunctionEstimate: '₹21,00,000',
    image: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Direct riverfront vows with floating bamboo rafts',
      'Private 40-cottage luxury wildlife reserve buyout',
      'Campfire barbecue and folk musical evenings under ancient trees',
      'Eco-luxury wellness spa for bride and family pre-wedding relaxation',
      'Curated boat cruise entries for the couple'
    ],
    description: 'For couples dreaming of an unforgettable boutique wedding retreat. Unhurried conversations, gentle river breezes, and candlelit dinners under the southern stars make this our most coveted sanctuary.',
    mandapSetting: 'Overwater wooden deck framed by indigenous lotus blooms and brass thalis',
    parkingCapacity: '120 Cars',
    roomsCount: 40,
    highlights: ['Waterfront Vows', 'Full Resort Buyout', 'Intimate Luxury', 'Wilderness Serenity']
  }
];

export interface WeddingPackage {
  id: string;
  name: string;
  badge?: string;
  subtitle: string;
  priceStarting: string;
  guestScope: string;
  functionsIncluded: string;
  inclusions: string[];
  idealFor: string;
}

export const WEDDING_PACKAGES: WeddingPackage[] = [
  {
    id: 'venue-curation',
    name: 'Venue Curation Onboarding',
    badge: '100% REFUNDABLE DEPOSIT',
    subtitle: 'The risk-free first step: dedicated curator, custom shortlists & price negotiation',
    priceStarting: '₹2,999',
    guestScope: 'Any guest size & location',
    functionsIncluded: 'All wedding events',
    inclusions: [
      'Dedicated Alayam Senior Venue Curator assigned in 2 hours',
      'Handpicked shortlist of 4–6 venues matched to your date & aesthetic',
      'Pre-negotiated preferred rates (averaging ₹2L–₹5L in savings)',
      'Assisted private site visits with Alayam hospitality manager',
      '100% of ₹2,999 refunded directly on your venue booking contract'
    ],
    idealFor: 'Couples beginning their journey who want expert guidance and zero risk'
  },
  {
    id: 'signature-two-function',
    name: 'The Signature Celebration',
    badge: 'MOST POPULAR',
    subtitle: 'Complete venue, authentic gourmet catering, and exquisite floral scenography',
    priceStarting: '₹14,50,000',
    guestScope: '250 – 300 Guests',
    functionsIncluded: 'Two Functions (Muhurtham & Reception)',
    inclusions: [
      'Full curated venue hire (heritage courtyard or luxury hall)',
      'Traditional Banana Leaf Sadhya / Royal Multi-Cuisine Feast for 250-300 guests',
      'Bespoke Mandap design with fresh indigenous florals & temple bells',
      'State-of-the-art sound, warm stage lighting & mood illumination',
      'Day-of Wedding Director and 4 shadow coordinators for 14 hours',
      'Exclusive vendor contract negotiation & billing audit'
    ],
    idealFor: 'Couples wanting an effortless, picture-perfect celebration with transparent pricing'
  },
  {
    id: 'royal-grandeur',
    name: 'The Royal Grandeur',
    badge: 'LUXURY PRODUCTION',
    subtitle: 'Multi-day immersion with architectural decor, celebrity catering, and guest concierge',
    priceStarting: '₹26,00,000',
    guestScope: '350 – 500 Guests',
    functionsIncluded: 'Three to Four Functions (Sangeet, Haldi, Muhurtham, Reception)',
    inclusions: [
      'Imperial Palace or 5-Star Resort Grounds curation & date lock',
      'Artisanal multi-state catering with 8 live interactive cooking stations',
      'Monumental mandap scenography, custom floral ceilings & candlescapes',
      'Complete artist booking (Shehnai masters, DJ, acoustic sangeet band)',
      'Dedicated bridal stylist suite concierge & guest airport transport fleet',
      'Full cinematic 4K drone videography & archival editorial photography'
    ],
    idealFor: 'Families hosting milestone multi-day weddings with discerning out-of-town guests'
  }
];

export const TESTIMONIALS = [
  {
    quote: "Finding a venue in Bangalore for 300 guests that felt traditional yet modern felt impossible until we paid the ₹2,999 fee. Alayam showed us Avana Estate, negotiated ₹3.2 Lakhs off the peak-season quote, and refunded our fee instantly. The day was pure poetry.",
    couple: "Pooja & Harish Raman",
    venueBooked: "Avana Heritage Estate",
    guests: "320 Guests",
    date: "February 2026",
    location: "Bangalore South"
  },
  {
    quote: "The transparency is what won our parents over. No hidden surcharges, no surprise vendor cuts. The banana leaf lunch was praised by every single relative, and the floral mandap looked like a temple straight out of Thanjavur.",
    couple: "Aishwarya & Karthik Menon",
    venueBooked: "The Royal Palace Pavilion",
    guests: "500 Guests",
    date: "January 2026",
    location: "Palace Grounds"
  },
  {
    quote: "Both my partner and I live in London and had to plan our wedding remotely. Having an Alayam curator take us on virtual 3D walkthroughs and manage the venue dates was an absolute lifesaver. We didn't stress for a single minute.",
    couple: "Meera & Siddharth Swamy",
    venueBooked: "The Glasshouse Conservatory",
    guests: "250 Guests",
    date: "December 2025",
    location: "Bangalore North"
  }
];
