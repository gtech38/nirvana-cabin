import { Link } from 'react-router-dom'
import { property } from '../data/property'
import { firepitImage } from '../data/images'

const driveTimes = [
  { city: 'Dallas, TX', time: '~3 hours' },
  { city: 'Oklahoma City, OK', time: '~3.5 hours' },
  { city: 'Little Rock, AR', time: '~2.5 hours' },
  { city: 'Tulsa, OK', time: '~3 hours' },
  { city: 'Fort Worth, TX', time: '~3 hours' },
]

const attractions = [
  { name: 'Beavers Bend State Park', distance: '5 min', description: 'Hiking, fly fishing, and canoeing on the Mountain Fork River through pristine wilderness.' },
  { name: 'Hochatown', distance: '5 min', description: 'Boutique shops, acclaimed restaurants, craft breweries, and local wineries in a charming village.' },
  { name: 'Broken Bow Lake', distance: '10 min', description: '14,000 acres of crystal-clear water. Premier boating, kayaking, and bass fishing.' },
  { name: 'Ouachita National Forest', distance: 'Surrounding', description: 'Over 1.8 million acres of pristine wilderness and ancient mountain trails at your doorstep.' },
  { name: 'Grateful Head Pizza', distance: '5 min', description: 'The local favorite — wood-fired pizza with seasonal toppings in a relaxed forest setting.' },
  { name: 'Cedar Creek Golf Course', distance: '10 min', description: 'Scenic 18-hole course carved through the Ouachita Mountains with stunning elevation changes.' },
  { name: 'Beavers Bend Zip Line', distance: '8 min', description: 'Soar through the forest canopy on guided zip line tours with views of the Mountain Fork River.' },
  { name: 'The Landing Bar & Grill', distance: '8 min', description: 'Lakeside dining and live music with front-row views of Broken Bow Lake at sunset.' },
]

export default function LocationPage() {
  return (
    <div style={{ backgroundColor: '#F7F4EF', paddingTop: '80px' }}>

      {/* Hero */}
      <div className="relative overflow-hidden" style={{ height: '55vh', minHeight: '380px' }}>
        <img
          src={firepitImage.url}
          alt="Broken Bow forest landscape"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(26,43,34,0.60)' }} />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <p className="text-xs tracking-[0.22em] uppercase font-medium text-[#D4B483] mb-4">Location</p>
          <div className="w-10 h-px bg-[#B8965A] mx-auto mb-6" />
          <h1
            className="font-display font-light text-white"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            Broken Bow, Oklahoma
          </h1>
          <p className="text-white/60 text-sm tracking-[0.15em] font-light mt-4">
            Heart of the Ouachita Mountains
          </p>
        </div>
      </div>

      {/* Getting there + map */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          <div>
            <p className="text-xs tracking-[0.22em] uppercase font-medium text-[#B8965A] mb-3">Getting Here</p>
            <div className="w-10 h-px bg-[#B8965A] mb-8" />
            <h2
              className="font-display font-light text-[#1A2B22] mb-8 -mt-2"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
            >
              A scenic drive through the mountains
            </h2>
            <div className="space-y-5 text-[#5C5C4A] text-sm leading-relaxed font-light">
              <p>
                Nirvana Cabin is nestled in the wooded hills of Broken Bow — a town that has quietly become
                Oklahoma's premier nature escape. The exact address is provided upon booking confirmation.
              </p>
              <p>
                Accessible by car from Dallas in about three hours. The final stretch of the drive winds
                through the Ouachita Mountains, arriving in a landscape of pine forests and clear rivers
                that feels a world apart.
              </p>
              <p>
                An EV charger is available on-site. The driveway is long and sloping — perfect for a gentle
                arrival and departure from the everyday.
              </p>
            </div>

            <div className="mt-12 border-t border-[#E0D9CE]">
              <p className="text-xs tracking-[0.18em] uppercase text-[#B8965A] mt-8 mb-5">Drive Times</p>
              {driveTimes.map(({ city, time }) => (
                <div key={city} className="flex justify-between items-center py-4 border-b border-[#E0D9CE]">
                  <span className="text-sm text-[#1A2B22] font-light tracking-wide">{city}</span>
                  <span className="text-sm text-[#B8965A] font-medium tracking-wide">{time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map placeholder */}
          <div>
            <div
              className="overflow-hidden flex items-center justify-center"
              style={{ height: '480px', backgroundColor: '#E0D9CE' }}
            >
              <div className="text-center px-10">
                <svg className="w-10 h-10 mx-auto mb-4" style={{ color: '#B5A898' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="font-display text-xl font-light text-[#1A2B22] mb-2">Broken Bow, Oklahoma</p>
                <p className="text-xs text-[#7A6B55] tracking-wide font-light mb-6">
                  Exact address shared upon booking
                </p>
                <a
                  href="https://maps.google.com/?q=Hochatown+Oklahoma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase font-medium text-[#B8965A] hover:gap-5 transition-all duration-300"
                >
                  Open in Maps
                  <span className="w-8 h-px bg-[#B8965A] inline-block" />
                </a>
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-px mt-px bg-[#E0D9CE]">
              {[
                { value: '5 min', label: 'to Hochatown' },
                { value: '5 min', label: 'to Beavers Bend' },
                { value: '10 min', label: 'to the Lake' },
              ].map(({ value, label }) => (
                <div key={label} className="text-center py-6" style={{ backgroundColor: '#F7F4EF' }}>
                  <p className="font-display text-2xl font-light text-[#1A2B22]">{value}</p>
                  <p className="text-xs tracking-[0.12em] text-[#B5A898] mt-1 font-light">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Attractions */}
      <div style={{ backgroundColor: '#1A2B22' }} className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-14">
            <p className="text-xs tracking-[0.22em] uppercase font-medium text-[#B8965A] mb-3">Nearby</p>
            <div className="w-10 h-px bg-[#B8965A] mb-8" />
            <h2
              className="font-display font-light text-white -mt-2"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
            >
              Explore the region
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {attractions.map(({ name, distance, description }) => (
              <div
                key={name}
                className="p-8 hover:bg-white/5 transition-colors"
                style={{ backgroundColor: '#1A2B22' }}
              >
                <p className="text-xs tracking-[0.18em] uppercase text-[#B8965A] mb-4">{distance}</p>
                <h3 className="font-display text-xl font-light text-white mb-3 leading-tight">{name}</h3>
                <p className="text-sm text-white/50 leading-relaxed font-light">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="max-w-3xl mx-auto px-6 py-24 text-center">
        <div className="w-10 h-px bg-[#B8965A] mx-auto mb-10" />
        <h2
          className="font-display font-light text-[#1A2B22] mb-4"
          style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
        >
          Questions about the area?
        </h2>
        <p className="text-sm text-[#7A6B55] font-light mb-10 leading-relaxed">
          We're happy to share local dining tips, hidden hiking trails, and seasonal recommendations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:${property.phone}`}
            className="px-10 py-4 bg-[#1A2B22] text-white text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#2C4A38] transition-colors"
          >
            {property.phone}
          </a>
          <Link
            to="/book"
            className="px-10 py-4 border border-[#1A2B22] text-[#1A2B22] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#1A2B22] hover:text-white transition-colors"
          >
            Reserve Your Stay
          </Link>
        </div>
      </div>
    </div>
  )
}
