import { useEffect } from 'react'
import {
  OWNERREZ_WIDGET_SCRIPT_URL,
  OWNERREZ_PROPERTY_GUID,
  OWNERREZ_CALENDAR_WIDGET_ID,
  OWNERREZ_BOOKING_WIDGET_ID,
  OWNERREZ_WIDGETS_CONFIGURED,
  getBookingPageUrl,
} from '../booking/ownerrez'
import { property } from '../data/property'
import { hotTubImage } from '../data/images'

/**
 * OwnerRez widget.js scans the DOM for <div class="ownerrez-widget"> elements
 * on load. We inject a fresh <script> on mount so the scan runs every time
 * the user navigates to /book (SPA navigation won't re-execute the script
 * otherwise). The div elements must already be rendered before the script
 * runs — useEffect guarantees post-render execution.
 */
function useOwnerRezWidget(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return
    const script = document.createElement('script')
    script.src = OWNERREZ_WIDGET_SCRIPT_URL
    script.async = true
    document.body.appendChild(script)
    return () => {
      script.remove()
    }
  }, [])
}

export default function BookPage() {
  useOwnerRezWidget(OWNERREZ_WIDGETS_CONFIGURED)

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

          {/* Left: OwnerRez widgets */}
          <div className="lg:col-span-2 space-y-10">

            {OWNERREZ_WIDGETS_CONFIGURED ? (
              <>
                {/* Availability calendar */}
                <section>
                  <p className="text-xs tracking-[0.2em] uppercase font-medium text-[#B8965A] mb-3">Availability</p>
                  <div className="w-8 h-px bg-[#B8965A] mb-6" />
                  <h2 className="font-display text-2xl font-light text-[#1A2B22] mb-6">
                    Available dates
                  </h2>
                  <p className="text-xs text-[#7A6B55] font-light mb-5 leading-relaxed">
                    Scroll below the calendar to book or send an inquiry.
                  </p>
                  <div className="border border-[#E0D9CE] p-4 sm:p-6" style={{ backgroundColor: '#FFFFFF' }}>
                    <div
                      className="ownerrez-widget"
                      data-widgetid={OWNERREZ_CALENDAR_WIDGET_ID}
                      data-propertyid={OWNERREZ_PROPERTY_GUID}
                      data-widget-type="Multi Month Calendar - Multiple Month Calendar"
                    />
                  </div>
                </section>

                {/* Booking / Inquiry form */}
                <section>
                  <p className="text-xs tracking-[0.2em] uppercase font-medium text-[#B8965A] mb-3">Reserve</p>
                  <div className="w-8 h-px bg-[#B8965A] mb-6" />
                  <h2 className="font-display text-2xl font-light text-[#1A2B22] mb-6">
                    Book or send an inquiry
                  </h2>
                  <div className="border border-[#E0D9CE] p-4 sm:p-6" style={{ backgroundColor: '#FFFFFF' }}>
                    <div
                      className="ownerrez-widget"
                      data-widgetid={OWNERREZ_BOOKING_WIDGET_ID}
                      data-propertyid={OWNERREZ_PROPERTY_GUID}
                      data-widget-type="Booking/Inquiry"
                    />
                  </div>
                  <p className="text-xs text-[#7A6B55] font-light italic mt-5 leading-relaxed">
                    Pricing shown includes all fees and taxes. You will receive an itemized invoice at
                    the time of booking and on your quote if you send an inquiry.
                  </p>
                </section>
              </>
            ) : (
              <div className="border border-[#E0D9CE] p-10" style={{ backgroundColor: '#F2EFE9' }}>
                <p className="text-xs tracking-[0.2em] uppercase text-[#B8965A] mb-3">Setup Required</p>
                <div className="w-8 h-px bg-[#B8965A] mb-6" />
                <h2 className="font-display text-2xl font-light text-[#1A2B22] mb-4">
                  Booking widgets not configured
                </h2>
                <p className="text-sm text-[#7A6B55] font-light leading-relaxed mb-6">
                  The inline booking calendar will appear here once the OwnerRez widget IDs
                  are set in the environment. Copy <code className="text-xs bg-[#E0D9CE] px-1.5 py-0.5 text-[#1A2B22]">.env.example</code> to
                  <code className="text-xs bg-[#E0D9CE] px-1.5 py-0.5 text-[#1A2B22] ml-1">.env</code> and fill in the required values.
                </p>
                <a
                  href={getBookingPageUrl()}
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

            <div className="border border-t-0 border-[#E0D9CE] p-6 sm:p-8 hover:bg-white transition-colors"
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
