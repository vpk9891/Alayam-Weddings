import React, { useState } from 'react';
import { X, Users, MapPin, CheckCircle, Car, Home, Calendar, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { Venue } from '../data/venues';

interface VenueDetailModalProps {
  venue: Venue | null;
  onClose: () => void;
  onBookCuration: (venueName: string) => void;
}

export const VenueDetailModal: React.FC<VenueDetailModalProps> = ({
  venue,
  onClose,
  onBookCuration
}) => {
  const [siteVisitDate, setSiteVisitDate] = useState('');
  const [coupleName, setCoupleName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!venue) return null;

  const handleSiteVisitSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber || !coupleName) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-[#0B2219] border border-[#D4AF37]/40 rounded-xl overflow-hidden shadow-2xl my-8 text-[#EDE3D0]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-[#EDE3D0]/80 hover:text-[#FCFBF7] bg-[#071711]/70 rounded-full border border-[#D4AF37]/20 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Hero Banner */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          <img
            src={venue.image}
            alt={venue.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2219] via-[#0B2219]/40 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6">
            <span className="px-3 py-1 bg-[#D4AF37] text-[#0B2219] text-xs font-bold uppercase tracking-wider rounded-sm inline-block mb-2">
              {venue.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#FCFBF7]">
              {venue.name}
            </h2>
            <p className="text-xs sm:text-sm text-[#C7B58A] flex items-center gap-1.5 mt-1">
              <MapPin className="w-4 h-4 text-[#D4AF37]" />
              <span>{venue.location}</span>
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[60vh] overflow-y-auto">
          {/* Key Facts Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-lg bg-[#071711] border border-[#D4AF37]/20">
            <div>
              <span className="text-[11px] text-[#A3B9A8] block uppercase tracking-wide">Capacity</span>
              <span className="text-sm font-semibold text-[#FCFBF7] flex items-center gap-1 mt-0.5 font-mono tabular-nums">
                <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
                {venue.recommendedGuests}
              </span>
            </div>

            <div>
              <span className="text-[11px] text-[#A3B9A8] block uppercase tracking-wide">Guest Rooms</span>
              <span className="text-sm font-semibold text-[#FCFBF7] flex items-center gap-1 mt-0.5 font-mono tabular-nums">
                <Home className="w-3.5 h-3.5 text-[#D4AF37]" />
                {venue.roomsCount} AC Suites
              </span>
            </div>

            <div>
              <span className="text-[11px] text-[#A3B9A8] block uppercase tracking-wide">Valet Parking</span>
              <span className="text-sm font-semibold text-[#FCFBF7] flex items-center gap-1 mt-0.5 font-mono tabular-nums">
                <Car className="w-3.5 h-3.5 text-[#D4AF37]" />
                {venue.parkingCapacity}
              </span>
            </div>

            <div>
              <span className="text-[11px] text-[#A3B9A8] block uppercase tracking-wide">Rental Starting</span>
              <span className="text-sm font-semibold text-[#D4AF37] font-mono tabular-nums block mt-0.5">
                {venue.venueRentalStarting}
              </span>
            </div>
          </div>

          {/* Description & Mandap Details */}
          <div className="space-y-3">
            <h3 className="text-lg font-serif font-bold text-[#FCFBF7]">
              Architectural & Ritual Setting
            </h3>
            <p className="text-sm text-[#EDE3D0]/80 leading-relaxed font-light">
              {venue.description}
            </p>

            <div className="p-4 rounded-lg bg-[#0E2C20] border border-[#D4AF37]/20 space-y-1 mt-3">
              <span className="text-xs font-semibold uppercase text-[#D4AF37] tracking-wider block">
                Signature Mandap Setting
              </span>
              <p className="text-xs sm:text-sm text-[#F3EDE2]/90 leading-relaxed">
                {venue.mandapSetting}
              </p>
            </div>
          </div>

          {/* Venue Highlights & Inclusions */}
          <div className="space-y-3">
            <h3 className="text-lg font-serif font-bold text-[#FCFBF7]">
              Key Infrastructure & Amenities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {venue.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#EDE3D0]/85">
                  <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Transparent Package Estimate Note */}
          <div className="p-4 rounded-lg bg-[#071711] border border-[#D4AF37]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs text-[#C89E50] font-semibold uppercase tracking-wider block">
                Two-Function Full Celebration Ballpark
              </span>
              <span className="text-xl sm:text-2xl font-serif font-bold text-[#FCFBF7] font-mono tabular-nums">
                {venue.twoFunctionEstimate}
              </span>
              <p className="text-[11px] text-[#A3B9A8] mt-0.5">
                Includes venue rental, authentic catering for 250–300 guests across 2 functions, floral mandap, sound and coordination.
              </p>
            </div>

            <button
              onClick={() => {
                onClose();
                onBookCuration(venue.name);
              }}
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#0B2219] bg-[#D4AF37] hover:bg-[#E5C378] transition-colors rounded-sm shrink-0 shadow-md cursor-pointer"
            >
              Curate This Venue (₹2,999 Refundable)
            </button>
          </div>

          {/* Assisted Site Visit Scheduling Form */}
          <div className="pt-4 border-t border-[#D4AF37]/20">
            <h3 className="text-base font-serif font-bold text-[#FCFBF7] mb-2">
              Request Assisted Private Site Audit
            </h3>
            <p className="text-xs text-[#A3B9A8] mb-4">
              Tour this venue accompanied by an Alayam senior wedding producer who checks acoustics, power load, and vendor logistics.
            </p>

            {submitted ? (
              <div className="p-4 rounded bg-[#103827] border border-[#25D366]/40 text-center space-y-2">
                <CheckCircle className="w-8 h-8 text-[#25D366] mx-auto" />
                <h4 className="text-sm font-semibold text-[#FCFBF7]">Site Visit Request Received!</h4>
                <p className="text-xs text-[#EDE3D0]/80">
                  Our venue director will WhatsApp you within 2 business hours to confirm the date and lock gate access.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSiteVisitSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="text-[11px] uppercase tracking-wide text-[#A3B9A8] block mb-1">Couple Names</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Ananya & Vivek"
                    value={coupleName}
                    onChange={(e) => setCoupleName(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-[#071711] border border-[#D4AF37]/30 rounded text-[#FCFBF7] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wide text-[#A3B9A8] block mb-1">WhatsApp Mobile</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-[#071711] border border-[#D4AF37]/30 rounded text-[#FCFBF7] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wide text-[#A3B9A8] block mb-1">Preferred Date</label>
                  <div className="flex gap-2">
                    <input
                      type="date"
                      value={siteVisitDate}
                      onChange={(e) => setSiteVisitDate(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-[#071711] border border-[#D4AF37]/30 rounded text-[#FCFBF7] focus:outline-none focus:border-[#D4AF37]"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#D4AF37] text-[#0B2219] font-bold text-xs uppercase tracking-wider rounded shrink-0 hover:bg-[#E5C378] transition-colors cursor-pointer"
                    >
                      Book Visit
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
