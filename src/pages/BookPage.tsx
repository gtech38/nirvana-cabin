import { getBookingWidgetUrl, getBookingPageUrl, OWNERREZ_PROPERTY_ID } from '../booking/ownerrez'
import { property } from '../data/property'
import { hotTubImage } from '../data/images'

export default function BookPage() {
  const widgetUrl = getBookingWidgetUrl()
  const bookingPageUrl = getBookingPageUrl()

  return (
    <div style={{ backgroundColor: '#F7F4EF', paddingTop: '80px' }}>

      {/* Page header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-12 sm:pt-16 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <p className="text-xs tracking-[0.22em] uppercase font-medium text-[#B8965A] mb-3">Reservations</p>
            <div className="w-10 h-px bg-[#B8965A] mb-8" />
            <h1
              className="font-display font-light text-[#1A2B22] -mt-2 mb-6"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              Reserve Your Stay
            </h1>
            <p className="text-sm text-[#7A6B55] font-light leading-relaxed max-w-sm">
              5 bedrooms · 6 bathrooms · sleeps up to 16 guests<br />
              Broken Bow, Oklahoma
            </p>
          </div>
          <div className="hidden lg:block overflow-hidden" style={{ height: '340px' }}>
            <img
              src={hotTubImage.url}
              alt="Hot tub above the forest"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">

          {/* Left: booking widget / setup */}
          <div className="lg:col-span-2">
            {OWNERREZ_PROPERTY_ID ? (
              <div className="overflow-hidden border border-[#E0D9CE]">
                <iframe
                  src={widgetUrl}
                  title="Book Nirvana Cabin"
                  className="w-full border-none"
                  style={{ minHeight: '640px' }}
                  allow="payment"
                />
              </div>
            ) : (
              <div className="border border-[#E0D9CE] p-10" style={{ backgroundColor: '#F2EFE9' }}>
                <p className="text-xs tracking-[0.2em] uppercase text-[#B8965A] mb-3">Setup Required</p>
                <div className="w-8 h-px bg-[#B8965A] mb-6" />
                <h2 className="font-display text-2xl font-light text-[#1A2B22] mb-4">
                  OwnerRez Booking Widget
                </h2>
                <p className="text-sm text-[#7A6B55] font-light leading-relaxed mb-6">
                  The inline booking calendar will appear here once your OwnerRez property ID is configured.
                  Add it to your <code className="text-xs bg-[#E0D9CE] px-1.5 py-0.5 text-[#1A2B22]">.env</code> file:
                </p>
                <div className="bg-[#1A2B22] text-white/80 p-5 text-xs font-mono mb-6 leading-relaxed overflow-x-auto whitespace-nowrap">
                  <span className="text-[#B8965A]">VITE_OWNERREZ_PROPERTY_ID</span>=your_property_id_here
                </div>
                <p className="text-xs text-[#B5A898] font-light mb-8">
                  Find your ID in OwnerRez → Properties → [Nirvana] → Settings
                </p>
                <a
                  href={bookingPageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase font-medium text-[#B8965A] hover:gap-5 transition-all duration-300"
                >
                  Open OwnerRez booking page
                  <span className="w-8 h-px bg-[#B8965A] inline-block" />
                </a>
              </div>
            )}
          </div>

          {/* Right: contact + property details */}
          <div className="space-y-0">
            <div className="border border-[#E0D9CE] p-6 sm:p-8 hover:bg-white transition-colors"
              style={{ backgroundColor: '#F7F4EF' }}>
              <p className="text-xs tracking-[0.18em] uppercase text-[#B8965A] mb-5">Call Us</p>
              <p className="text-xs text-[#7A6B55] font-light mb-3 leading-relaxed">
                Speak directly with our team for availability and custom requests.
              </p>
              <a
                href={`tel:${property.phone}`}
                className="font-display text-2xl font-light text-[#1A2B22] hover:text-[#B8965A] transition-colors"
              >
                {property.phone}
              </a>
            </div>

            <div className="border border-t-0 border-[#E0D9CE] p-8 hover:bg-white transition-colors"
              style={{ backgroundColor: '#F7F4EF' }}>
              <p className="text-xs tracking-[0.18em] uppercase text-[#B8965A] mb-5">Email</p>
              <p className="text-xs text-[#7A6B55] font-light mb-3 leading-relaxed">
                Inquiries answered within a few hours.
              </p>
              <a
                href={`mailto:${property.email}?subject=Nirvana Cabin Inquiry`}
                className="text-sm text-[#1A2B22] hover:text-[#B8965A] transition-colors font-light break-all"
              >
                {property.email}
              </a>
            </div>

            <div className="border border-t-0 border-[#E0D9CE] p-6 sm:p-8" style={{ backgroundColor: '#F7F4EF' }}>
              <p className="text-xs tracking-[0.18em] uppercase text-[#B8965A] mb-6">Property Details</p>
              {[
                ['Bedrooms', '5'],
                ['Bathrooms', '6 (5 full, 1 half)'],
                ['Max Guests', '16'],
                ['Min Renter Age', '21'],
                ['Security Deposit', '$300'],
                ['Location', 'Broken Bow, OK'],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between items-center py-3 border-b border-[#E0D9CE] last:border-0">
                  <span className="text-xs text-[#B5A898] tracking-wide font-light">{k}</span>
                  <span className="text-xs text-[#1A2B22] font-medium tracking-wide">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Trust signals */}
      <div style={{ backgroundColor: '#1A2B22' }} className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
            {[
              { label: 'Secure Booking', body: 'Payments processed securely through OwnerRez with end-to-end encryption.' },
              { label: 'Instant Confirmation', body: 'Receive your booking confirmation and access details immediately by email.' },
              { label: 'Personal Service', body: 'Our team is available before, during, and after your stay for anything you need.' },
            ].map(({ label, body }) => (
              <div key={label} className="p-8 sm:p-10 text-center" style={{ backgroundColor: '#1A2B22' }}>
                <div className="w-6 h-px bg-[#B8965A] mx-auto mb-6" />
                <p className="text-xs tracking-[0.2em] uppercase text-[#B8965A] mb-3">{label}</p>
                <p className="text-sm text-white/50 font-light leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
