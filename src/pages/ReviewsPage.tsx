import { Link } from 'react-router-dom'
import { property } from '../data/property'
import { exteriorImage } from '../data/images'

const reviews = [
  {
    text: 'The hot tub above the tree line at sunset — absolutely magical. We\'ve stayed at many cabins across the country, but Nirvana is in a class entirely its own. Already planning our return trip.',
    author: 'The Henderson Family',
    origin: 'Dallas, TX',
    platform: 'Airbnb',
    stars: 5,
    date: 'March 2025',
  },
  {
    text: 'Arrived with twelve people and everyone had their own private space. The kitchen was perfect for big group cooking, the game room kept the kids entertained for hours, and the forest views are simply breathtaking.',
    author: 'Sarah M.',
    origin: 'Oklahoma City, OK',
    platform: 'VRBO',
    stars: 5,
    date: 'February 2025',
  },
  {
    text: 'Immaculately clean, beautifully appointed, and the host communication was exceptional. The firepit and gazebo made for unforgettable evenings. We\'ve found our forever cabin.',
    author: 'James & Priya R.',
    origin: 'Austin, TX',
    platform: 'Direct',
    stars: 5,
    date: 'January 2025',
  },
  {
    text: 'Five bedrooms all with private ensuites — we never waited for a bathroom once across 10 guests. The EV charger was such a thoughtful touch. The perfect blend of luxury and untouched nature.',
    author: 'The Nguyen Group',
    origin: 'Houston, TX',
    platform: 'Airbnb',
    stars: 5,
    date: 'December 2024',
  },
  {
    text: 'We\'ve rented cabins in the Smokies, Asheville, and Colorado — Nirvana rivals all of them. The great room with floor-to-ceiling forest views took our breath away the moment we walked in.',
    author: 'Mark & Claire T.',
    origin: 'Little Rock, AR',
    platform: 'VRBO',
    stars: 5,
    date: 'November 2024',
  },
  {
    text: 'The owner\'s personal touch is evident everywhere — from the starter supplies to the local tips they left. This is what vacation rental hospitality should feel like.',
    author: 'Ananya & Raj K.',
    origin: 'Frisco, TX',
    platform: 'Direct',
    stars: 5,
    date: 'October 2024',
  },
]

function Stars({ n = 5 }: { n?: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`w-3 h-3 ${i < n ? 'text-[#B8965A]' : 'text-[#E0D9CE]'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function ReviewsPage() {
  return (
    <div style={{ backgroundColor: '#F7F4EF', paddingTop: '80px' }}>

      {/* Hero banner */}
      <div className="relative overflow-hidden" style={{ height: '45vh', minHeight: '320px' }}>
        <img
          src={exteriorImage.url}
          alt="Nirvana Cabin"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(26,43,34,0.7)' }} />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <p className="text-xs tracking-[0.22em] uppercase font-medium text-[#D4B483] mb-4">Guest Reviews</p>
          <div className="w-10 h-px bg-[#B8965A] mx-auto mb-6" />
          <h1
            className="font-display font-light text-white"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            What guests are saying
          </h1>
          <div className="flex items-center gap-3 mt-6">
            <Stars />
            <span className="text-white/60 text-sm font-light tracking-wide">5.0 across all platforms</span>
          </div>
        </div>
      </div>

      {/* Rating summary */}
      <div style={{ backgroundColor: '#1A2B22' }} className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-px bg-white/10">
            {[
              { label: 'Cleanliness', score: '5.0' },
              { label: 'Communication', score: '5.0' },
              { label: 'Location', score: '5.0' },
              { label: 'Check-In', score: '5.0' },
              { label: 'Accuracy', score: '5.0' },
              { label: 'Value', score: '5.0' },
            ].map(({ label, score }) => (
              <div key={label} className="text-center py-8 px-4" style={{ backgroundColor: '#1A2B22' }}>
                <p className="font-display text-3xl font-light text-[#D4B483]">{score}</p>
                <p className="text-xs tracking-[0.15em] uppercase text-white/40 mt-2 font-light">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E0D9CE]">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="p-10 hover:bg-white transition-colors duration-300"
              style={{ backgroundColor: '#F7F4EF' }}
            >
              <Stars n={r.stars} />
              <blockquote className="font-display text-lg font-light text-[#1A2B22] italic leading-relaxed mt-6 mb-8">
                "{r.text}"
              </blockquote>
              <div className="pt-6 border-t border-[#E0D9CE]">
                <p className="text-sm font-medium text-[#1A2B22] tracking-wide">{r.author}</p>
                <p className="text-xs text-[#B5A898] tracking-wide mt-1 font-light">{r.origin} · {r.platform} · {r.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ backgroundColor: '#F2EFE9' }} className="py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="w-10 h-px bg-[#B8965A] mx-auto mb-8" />
          <h2
            className="font-display font-light text-[#1A2B22] mb-4"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
          >
            Create your own memories at Nirvana
          </h2>
          <p className="text-sm text-[#7A6B55] font-light mb-10 leading-relaxed">
            Join the guests who've discovered why Nirvana is unlike any other cabin in Broken Bow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/book"
              className="px-10 py-4 bg-[#1A2B22] text-white text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#2C4A38] transition-colors"
            >
              Reserve Your Stay
            </Link>
            <a
              href={`mailto:${property.email}`}
              className="px-10 py-4 border border-[#1A2B22] text-[#1A2B22] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#1A2B22] hover:text-white transition-colors"
            >
              Send an Inquiry
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
