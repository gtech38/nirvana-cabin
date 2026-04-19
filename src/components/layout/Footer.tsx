import { Link } from 'react-router-dom'
import { property } from '../../data/property'

export default function Footer() {
  return (
    <footer className="bg-[#1A2B22] text-white/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 sm:pt-20 pb-10">

        {/* Top: wordmark + tagline */}
        <div className="text-center mb-12 pb-12 sm:mb-16 sm:pb-16 border-b border-white/10">
          <p className="text-xs tracking-[0.25em] uppercase text-[#B8965A] mb-4">Broken Bow, Oklahoma</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-[0.08em] uppercase mb-4 break-words">
            {property.name}
          </h2>
          <p className="text-sm text-white/40 tracking-wide">
            5 Bedrooms · 6 Bathrooms · Sleeps 2–16
          </p>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mb-12 sm:mb-16">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#B8965A] mb-5">Explore</p>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/photos', label: 'Photos' },
                { to: '/reviews', label: 'Reviews' },
                { to: '/location', label: 'Location' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-white/60 hover:text-white/90 transition-colors tracking-wide">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#B8965A] mb-5">Reserve</p>
            <ul className="space-y-3">
              <li>
                <Link to="/book" className="text-sm text-white/60 hover:text-white/90 transition-colors tracking-wide">
                  Book a Stay
                </Link>
              </li>
              <li>
                <a href={`mailto:${property.email}`} className="text-sm text-white/60 hover:text-white/90 transition-colors tracking-wide">
                  Send an Inquiry
                </a>
              </li>
              <li>
                <a href={`tel:${property.phone}`} className="text-sm text-white/60 hover:text-white/90 transition-colors tracking-wide">
                  {property.phone}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#B8965A] mb-5">Contact</p>
            <ul className="space-y-3">
              <li>
                <a href={`mailto:${property.email}`} className="text-sm text-white/60 hover:text-white/90 transition-colors tracking-wide break-all">
                  {property.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#B8965A] mb-5">Follow</p>
            <div className="flex flex-col gap-3">
              <a href={property.facebook} target="_blank" rel="noopener noreferrer"
                className="text-sm text-white/60 hover:text-white/90 transition-colors tracking-wide">
                Facebook
              </a>
              <a href={property.instagram} target="_blank" rel="noopener noreferrer"
                className="text-sm text-white/60 hover:text-white/90 transition-colors tracking-wide">
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30 tracking-widest uppercase">
            © {new Date().getFullYear()} {property.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/20 tracking-wide">
            Hochatown · Broken Bow · Oklahoma
          </p>
        </div>
      </div>
    </footer>
  )
}
