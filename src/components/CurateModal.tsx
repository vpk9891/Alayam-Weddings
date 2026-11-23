import React, { useState } from 'react';
import { X, Check, ShieldCheck, ArrowRight, ArrowLeft, Phone, Calendar, Users, MapPin, Sparkles, Heart } from 'lucide-react';

interface CurateModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedVenue?: string;
}

export const CurateModal: React.FC<CurateModalProps> = ({
  isOpen,
  onClose,
  preselectedVenue
}) => {
  const [step, setStep] = useState<number>(1);

  // Form State
  const [weddingDate, setWeddingDate] = useState<string>('');
  const [isDateFlexible, setIsDateFlexible] = useState<boolean>(true);
  const [functions, setFunctions] = useState<string[]>(['Wedding / Muhurtham', 'Reception']);
  
  const [guestCount, setGuestCount] = useState<string>('250-300');
  const [preferredVibe, setPreferredVibe] = useState<string>('Traditional Heritage Courtyard');
  
  const [preferredLocation, setPreferredLocation] = useState<string>(preselectedVenue ? 'Specific Venue Chosen' : 'Bangalore South (Kanakapura / Bannerghatta)');
  const [budgetRange, setBudgetRange] = useState<string>('₹15L – ₹25L');

  const [partner1Name, setPartner1Name] = useState<string>('');
  const [partner2Name, setPartner2Name] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [emailAddress, setEmailAddress] = useState<string>('');
  const [specialNotes, setSpecialNotes] = useState<string>(preselectedVenue ? `Interested in ${preselectedVenue}` : '');

  // Payment simulated state
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [bookingRefId, setBookingRefId] = useState<string>('');

  if (!isOpen) return null;

  const toggleFunction = (fn: string) => {
    if (functions.includes(fn)) {
      if (functions.length > 1) {
        setFunctions(functions.filter(f => f !== fn));
      }
    } else {
      setFunctions([...functions, fn]);
    }
  };

  const handleSimulatePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setBookingRefId(`ALM-${Math.floor(100000 + Math.random() * 900000)}`);
      setStep(5); // Success step
    }, 1200);
  };

  const handleClose = () => {
    onClose();
    // Reset after delay
    setTimeout(() => {
      setStep(1);
      setIsProcessing(false);
      setBookingRefId('');
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-[#091E15] border border-[#D4AF37]/50 rounded-2xl shadow-2xl overflow-hidden my-auto text-[#EDE3D0]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Ribbon */}
        <div className="bg-[#0B251A] px-6 py-4 border-b border-[#D4AF37]/20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-cinzel font-bold text-sm text-[#FCFBF7] tracking-wider">
              ALAYAM WEDDINGS
            </span>
            <span className="text-[#D4AF37] text-xs font-mono">·</span>
            <span className="text-xs text-[#C89E50] uppercase tracking-wider font-semibold">
              Venue Curation Onboarding
            </span>
          </div>

          <button
            onClick={handleClose}
            className="p-1.5 text-[#EDE3D0]/70 hover:text-[#FCFBF7] rounded-full hover:bg-[#071711] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress indicator (Steps 1 to 4) */}
        {step < 5 && (
          <div className="px-6 pt-5 pb-2">
            <div className="flex items-center justify-between text-[11px] text-[#A3B9A8] uppercase tracking-wider mb-2">
              <span className={step >= 1 ? 'text-[#D4AF37] font-semibold' : ''}>1. Dates & Events</span>
              <span className={step >= 2 ? 'text-[#D4AF37] font-semibold' : ''}>2. Guests & Style</span>
              <span className={step >= 3 ? 'text-[#D4AF37] font-semibold' : ''}>3. Budget & Area</span>
              <span className={step >= 4 ? 'text-[#D4AF37] font-semibold' : ''}>4. Confirm & Deposit</span>
            </div>
            <div className="w-full bg-[#071711] h-1.5 rounded-full overflow-hidden">
              <div 
                className="bg-gradient-to-r from-[#D4AF37] to-[#E5C378] h-full transition-all duration-300"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Step Contents */}
        <div className="p-6 sm:p-8">
          {/* STEP 1: Dates & Functions */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#FCFBF7]">
                  When are you planning to celebrate?
                </h3>
                <p className="text-xs text-[#A3B9A8]">
                  We check muhurtham dates with top venues in real time.
                </p>
              </div>

              <div className="space-y-3">
                <label className="text-xs uppercase tracking-wide text-[#A3B9A8] block">
                  Estimated Wedding Date / Month
                </label>
                <input
                  type="date"
                  value={weddingDate}
                  onChange={(e) => setWeddingDate(e.target.value)}
                  className="w-full px-4 py-3 text-sm bg-[#071711] border border-[#D4AF37]/30 rounded-lg text-[#FCFBF7] focus:outline-none focus:border-[#D4AF37]"
                />
                
                <label className="flex items-center gap-2 text-xs text-[#EDE3D0]/80 cursor-pointer pt-1">
                  <input
                    type="checkbox"
                    checked={isDateFlexible}
                    onChange={(e) => setIsDateFlexible(e.target.checked)}
                    className="accent-[#D4AF37] rounded"
                  />
                  <span>Dates are flexible (+/- 2 weeks based on muhurtham availability)</span>
                </label>
              </div>

              <div className="space-y-3">
                <label className="text-xs uppercase tracking-wide text-[#A3B9A8] block">
                  Functions You Wish to Host
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    'Wedding / Muhurtham',
                    'Grand Reception',
                    'Sangeet / Cocktail',
                    'Haldi & Mehendi',
                    'Vedic Vratham / Pooja',
                    'Post-Wedding Brunch'
                  ].map((fn) => {
                    const isSelected = functions.includes(fn);
                    return (
                      <button
                        key={fn}
                        type="button"
                        onClick={() => toggleFunction(fn)}
                        className={`p-3 text-xs rounded-lg border text-left flex items-center justify-between cursor-pointer transition-colors ${
                          isSelected
                            ? 'bg-[#143E2C] border-[#D4AF37] text-[#FCFBF7] font-semibold'
                            : 'bg-[#071711] border-[#D4AF37]/20 text-[#EDE3D0]/75 hover:border-[#D4AF37]/50'
                        }`}
                      >
                        <span>{fn}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-[#D4AF37]" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#0B2219] bg-[#D4AF37] hover:bg-[#E5C378] transition-colors rounded-sm flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Next: Guest Count & Style</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Guests & Vibe */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#FCFBF7]">
                  Guest Count & Aesthetic Vision
                </h3>
                <p className="text-xs text-[#A3B9A8]">
                  Helps your curator shortlist spaces with optimal dining and mandap acoustics.
                </p>
              </div>

              <div className="space-y-3">
                <label className="text-xs uppercase tracking-wide text-[#A3B9A8] block">
                  Expected Guest Count
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { label: '100 – 200', desc: 'Intimate' },
                    { label: '250 – 350', desc: 'Classic South' },
                    { label: '400 – 600', desc: 'Grand Scale' },
                    { label: '700+', desc: 'Imperial Mega' }
                  ].map((g) => (
                    <button
                      key={g.label}
                      type="button"
                      onClick={() => setGuestCount(g.label)}
                      className={`p-3 rounded-lg border text-left cursor-pointer transition-colors ${
                        guestCount === g.label
                          ? 'bg-[#143E2C] border-[#D4AF37] text-[#FCFBF7] font-semibold'
                          : 'bg-[#071711] border-[#D4AF37]/20 text-[#EDE3D0]/75 hover:border-[#D4AF37]/50'
                      }`}
                    >
                      <span className="block text-xs font-bold">{g.label}</span>
                      <span className="block text-[10px] text-[#A3B9A8]">{g.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs uppercase tracking-wide text-[#A3B9A8] block">
                  Preferred Architectural Setting
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    { title: 'Traditional Heritage Courtyard', desc: 'Stone pillars, red tiles, sacred banyan tree' },
                    { title: 'Royal Palace Grounds', desc: 'High ceilings, grand chandeliers, imperial scale' },
                    { title: 'Modern Glasshouse & Water Garden', desc: 'All-weather botanical glass atrium & mood lighting' },
                    { title: 'Scenic Destination Retreat', desc: 'Cliffside or riverside sanctuary with villa stay' }
                  ].map((vibe) => (
                    <button
                      key={vibe.title}
                      type="button"
                      onClick={() => setPreferredVibe(vibe.title)}
                      className={`p-3.5 rounded-lg border text-left cursor-pointer transition-colors ${
                        preferredVibe === vibe.title
                          ? 'bg-[#143E2C] border-[#D4AF37] text-[#FCFBF7] font-semibold'
                          : 'bg-[#071711] border-[#D4AF37]/20 text-[#EDE3D0]/75 hover:border-[#D4AF37]/50'
                      }`}
                    >
                      <span className="block text-xs font-bold">{vibe.title}</span>
                      <span className="block text-[10px] text-[#A3B9A8] mt-0.5">{vibe.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2.5 text-xs text-[#A3B9A8] hover:text-[#FCFBF7] flex items-center gap-1 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#0B2219] bg-[#D4AF37] hover:bg-[#E5C378] transition-colors rounded-sm flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Next: Location & Budget</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Location & Target Budget */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#FCFBF7]">
                  Preferred Location & Investment
                </h3>
                <p className="text-xs text-[#A3B9A8]">
                  We filter exclusively for locations within your comfort zone.
                </p>
              </div>

              <div className="space-y-3">
                <label className="text-xs uppercase tracking-wide text-[#A3B9A8] block">
                  City & Geographic Region
                </label>
                <select
                  value={preferredLocation}
                  onChange={(e) => setPreferredLocation(e.target.value)}
                  className="w-full px-4 py-3 text-xs bg-[#071711] border border-[#D4AF37]/30 rounded-lg text-[#FCFBF7] focus:outline-none focus:border-[#D4AF37]"
                >
                  <option value="Bangalore South (Kanakapura / Bannerghatta)">Bangalore South (Kanakapura / Bannerghatta Heritage Courtyards)</option>
                  <option value="Central Bangalore (Palace Grounds / Jayamahal)">Central Bangalore (Palace Grounds / Jayamahal / Sadashivanagar)</option>
                  <option value="Bangalore North (Airport Corridor / Hebbal / Yelahanka)">Bangalore North (Airport Corridor / Hebbal / Yelahanka Glasshouses)</option>
                  <option value="Mysore Environs & Heritage Enclave">Mysore Environs & Royal Heritage Palaces</option>
                  <option value="Coorg / Kabini / Destination Karnataka">Coorg / Kabini / Scenic Destination Resorts</option>
                  <option value="Open to Curator Recommendations">Open to Curator's Top Recommendations</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="text-xs uppercase tracking-wide text-[#A3B9A8] block">
                  Estimated Total Wedding Budget (All-Inclusive)
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    '₹10L – ₹15L (Essential)',
                    '₹15L – ₹25L (Signature)',
                    '₹25L – ₹40L (Luxury)',
                    '₹40L+ (Imperial Grandeur)'
                  ].map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setBudgetRange(b)}
                      className={`p-3 rounded-lg border text-left cursor-pointer transition-colors ${
                        budgetRange === b
                          ? 'bg-[#143E2C] border-[#D4AF37] text-[#FCFBF7] font-semibold'
                          : 'bg-[#071711] border-[#D4AF37]/20 text-[#EDE3D0]/75 hover:border-[#D4AF37]/50'
                      }`}
                    >
                      <span className="block text-xs font-bold">{b}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-4 py-2.5 text-xs text-[#A3B9A8] hover:text-[#FCFBF7] flex items-center gap-1 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#0B2219] bg-[#D4AF37] hover:bg-[#E5C378] transition-colors rounded-sm flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Next: Couple Details & Deposit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Couple Details & ₹2,999 Deposit */}
          {step === 4 && (
            <div className="space-y-6">
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#FCFBF7]">
                  Confirm Onboarding & Assign Curator
                </h3>
                <p className="text-xs text-[#A3B9A8]">
                  Your ₹2,999 deposit is held in escrow and 100% refunded when you confirm your venue.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] uppercase tracking-wide text-[#A3B9A8] block mb-1">
                    Bride / Groom Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ananya Rao"
                    value={partner1Name}
                    onChange={(e) => setPartner1Name(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#071711] border border-[#D4AF37]/30 rounded text-[#FCFBF7] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wide text-[#A3B9A8] block mb-1">
                    Partner Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Vikram Swaminathan"
                    value={partner2Name}
                    onChange={(e) => setPartner2Name(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#071711] border border-[#D4AF37]/30 rounded text-[#FCFBF7] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] uppercase tracking-wide text-[#A3B9A8] block mb-1">
                    WhatsApp Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98450 12345"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#071711] border border-[#D4AF37]/30 rounded text-[#FCFBF7] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wide text-[#A3B9A8] block mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="couple@wedding.com"
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#071711] border border-[#D4AF37]/30 rounded text-[#FCFBF7] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              {/* Order Summary Box */}
              <div className="p-4 rounded-xl bg-[#071711] border border-[#D4AF37]/30 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-[#D4AF37]/15">
                  <span className="text-xs font-semibold text-[#FCFBF7]">
                    Venue Curation Onboarding Fee
                  </span>
                  <span className="text-base font-serif font-bold text-[#D4AF37] font-mono tabular-nums">
                    ₹2,999
                  </span>
                </div>

                <div className="space-y-1.5 text-[11px] text-[#A3B9A8]">
                  <div className="flex items-center gap-1.5 text-[#25D366]">
                    <ShieldCheck className="w-4 h-4 shrink-0" />
                    <span className="font-semibold">100% Refundable Guarantee</span>
                  </div>
                  <p className="leading-relaxed">
                    Credited back directly against your venue booking contract. Zero risk, 0% platform surcharge.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-4 py-2.5 text-xs text-[#A3B9A8] hover:text-[#FCFBF7] flex items-center gap-1 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>

                <button
                  type="button"
                  disabled={isProcessing || !partner1Name || !phoneNumber}
                  onClick={handleSimulatePayment}
                  className="px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-[#0B2219] bg-gradient-to-r from-[#E5C378] via-[#D4AF37] to-[#C89E50] hover:brightness-110 disabled:opacity-50 transition-all rounded shadow-lg flex items-center gap-2 cursor-pointer"
                >
                  {isProcessing ? (
                    <div className="flex items-center gap-2">
                      <div className="w-3.5 h-3.5 border-2 border-[#0B2219] border-t-transparent rounded-full animate-spin" />
                      <span>Confirming Escrow...</span>
                    </div>
                  ) : (
                    <>
                      <span>Confirm & Onboard (₹2,999)</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* STEP 5: Success & Confirmation */}
          {step === 5 && (
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#143E2C] border-2 border-[#25D366] text-[#25D366] flex items-center justify-center mx-auto shadow-xl">
                <Check className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-[#C89E50] font-semibold">
                  ONBOARDING CONFIRMED & DEPOSIT ESCROWED
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#FCFBF7]">
                  Welcome to Alayam Weddings
                </h3>
                <p className="text-xs sm:text-sm text-[#EDE3D0]/80 max-w-md mx-auto leading-relaxed">
                  Congratulations <span className="text-[#FCFBF7] font-semibold">{partner1Name || 'Dear Couple'}</span>! Your venue onboarding has been registered under booking ID:
                </p>
                <div className="inline-block py-1 px-3 bg-[#071711] border border-[#D4AF37]/30 rounded text-sm font-mono font-bold text-[#D4AF37]">
                  {bookingRefId}
                </div>
              </div>

              {/* Assigned Curator Card */}
              <div className="p-4 sm:p-5 rounded-xl bg-[#0B251A] border border-[#D4AF37]/30 text-left max-w-md mx-auto space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#184634] border border-[#D4AF37]/40 flex items-center justify-center text-sm font-serif font-bold text-[#D4AF37]">
                    LN
                  </div>
                  <div>
                    <span className="text-[10px] text-[#A3B9A8] uppercase tracking-wider block">Assigned Senior Curator</span>
                    <h4 className="text-sm font-serif font-bold text-[#FCFBF7]">Lakshmi Narayanan</h4>
                    <span className="text-xs text-[#C89E50]">Director of Venue Partnerships</span>
                  </div>
                </div>

                <p className="text-[11px] text-[#EDE3D0]/80 border-t border-[#D4AF37]/15 pt-2 leading-relaxed">
                  Lakshmi has received your guest profile ({guestCount} guests, {preferredVibe}) and is assembling your personalized 4-venue shortlist with preferred pricing.
                </p>
              </div>

              {/* Immediate WhatsApp Outreach */}
              <div className="space-y-3 max-w-md mx-auto">
                <a
                  href={`https://wa.me/919741885957?text=Hi%20Alayam%20Weddings,%20my%20name%20is%20${encodeURIComponent(partner1Name || 'Couple')}%20and%20my%20onboarding%20reference%20is%20${bookingRefId}.%20I'd%20love%20to%20connect%20with%20my%20curator.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 px-4 rounded text-xs font-bold uppercase tracking-wider text-[#0B2219] bg-[#25D366] hover:bg-[#20bd5a] transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  <Phone className="w-4 h-4" />
                  <span>Connect with Curator on WhatsApp</span>
                </a>

                <button
                  onClick={handleClose}
                  className="w-full py-2.5 text-xs text-[#A3B9A8] hover:text-[#FCFBF7] transition-colors cursor-pointer"
                >
                  Return to Website & Browse Venues
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
