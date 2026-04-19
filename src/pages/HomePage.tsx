import { Link } from 'react-router-dom'
import { property } from '../data/property'
import {
  images,
  heroImage    as heroImg,
  hotTubImage  as img2,
  firepitImage as img3,
  livingImage  as img4,
  exteriorImage       as img5,
  gazeboNightImage    as img6,
  windowWallImage     as img7,
  arcadeImage         as img8,
} from '../data/images'

function EyebrowLabel({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <p className={`text-xs tracking-[0.22em] uppercase font-medium mb-3 ${light ? 'text-[#D4B483]' : 'text-[#B8965A]'}`}>
      {children}
    </p>
  )
}

function ThinRule({ light = false }: { light?: boolean }) {
  return <div className={`w-10 h-px mt-4 mb-8 ${light ? 'bg-[#B8965A]/60' : 'bg-[#B8965A]'}`} />
}

export default function HomePage() {
  return (
    <div style={{ backgroundColor: '#F7F4EF' }}>

      {/* ── HERO ── fullbleed cinematic */}
      <section className="relative h-screen min-h-[560px] sm:min-h-[680px] overflow-hidden">
        <img
          src={heroImg.url}
          alt="Nirvana Cabin under the stars"
          className="absolute inset-0 w-full h-full object-cover scale-105"
          style={{ objectPosition: 'center 40%' }}
        />
        {/* layered gradient: dark bottom, slight vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/65" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.35)_100%)]" />

        {/* Hero text */}
        <div className="relative h-full flex flex-col items-center justify-end pb-16 sm:pb-24 px-6 text-center text-white">
          <div className="animate-fade-up">
            <EyebrowLabel light>Broken Bow, Oklahoma</EyebrowLabel>
            <h1
              className="font-display font-light text-white mb-6"
              style={{ fontSize: 'clamp(2.75rem, 9vw, 7.5rem)', letterSpacing: '0.08em', lineHeight: 1 }}
            >
              Nirvana Cabin
            </h1>
            <p className="text-[11px] sm:text-sm text-white/70 tracking-[0.18em] uppercase mb-10 font-light">
              5 Bedrooms &nbsp;·&nbsp; Sleeps 2–16 &nbsp;·&nbsp; Hot Tub Above the Tree Line
            </p>
          </div>
          <div className="animate-fade-up animate-fade-up-delay-2 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto items-stretch sm:items-center">
            <Link
              to="/book"
              className="px-8 sm:px-10 py-4 bg-[#B8965A] text-white text-xs tracking-[0.22em] uppercase font-medium hover:bg-[#A07F47] transition-colors text-center"
            >
              Reserve Your Stay
            </Link>
            <Link
              to="/photos"
              className="px-8 sm:px-10 py-4 border border-white/50 text-white text-xs tracking-[0.22em] uppercase font-medium hover:border-white hover:bg-white/10 transition-all text-center"
            >
              View Photos
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up animate-fade-up-delay-3">
          <div className="w-px h-10 bg-white/30 animate-pulse" />
        </div>
      </section>

      {/* ── INTRO EDITORIAL ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20 sm:py-28 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Left: large image */}
          <div className="lg:col-span-7 relative">
            <img
              src={img2.url}
              alt="Elevated hot tub with forest views"
              className="w-full object-cover"
              style={{ height: '55vh', minHeight: '360px', maxHeight: '600px' }}
            />
            {/* floating stat card */}
            <div className="absolute bottom-4 right-4 sm:-bottom-8 sm:-right-4 lg:-right-10 bg-[#1A2B22] text-white px-6 py-5 sm:px-8 sm:py-6 shadow-2xl">
              <p className="font-display text-3xl sm:text-4xl font-light text-[#D4B483]">16</p>
              <p className="text-[10px] sm:text-xs tracking-[0.18em] uppercase text-white/50 mt-1">Max Guests</p>
            </div>
          </div>

          {/* Right: copy */}
          <div className="lg:col-span-5 lg:pl-4">
            <EyebrowLabel>The Property</EyebrowLabel>
            <ThinRule />
            <h2
              className="font-display font-light text-[#1A2B22] mb-8 leading-[1.1]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
            >
              A Sanctuary{' '}
              <em className="font-light italic">Above the Forest</em>
            </h2>
            <div className="space-y-5 text-[#5C5C4A] leading-relaxed font-light" style={{ fontSize: '0.95rem' }}>
              <p>
                As you arrive at Nirvana, a sense of tranquility greets you. Follow the long, sloping driveway
                to ample parking and a cozy firepit surrounded by seating for seven, illuminated by
                enchanting string lights.
              </p>
              <p>
                Step through the front door and into the breathtaking great room — an open-concept haven
                where a chef's kitchen, dining area, and living room seamlessly blend. Towering
                floor-to-ceiling windows frame sweeping views of the lush Ouachita National Forest and
                distant mountains.
              </p>
              <p>
                Five ensuite bedrooms. Multiple private balconies. An elevated hot tub above the tree
                line. A private gazebo glowing at night. This is not just a cabin — it's a world of its own.
              </p>
            </div>
            <Link
              to="/book"
              className="inline-flex items-center gap-3 mt-10 text-xs tracking-[0.2em] uppercase font-medium text-[#B8965A] hover:gap-5 transition-all duration-300"
            >
              Check Availability
              <span className="w-8 h-px bg-[#B8965A] inline-block" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── THREE-COLUMN ATMOSPHERE ── */}
      <section style={{ backgroundColor: '#1A2B22' }} className="py-20 sm:py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <EyebrowLabel light>The Experience</EyebrowLabel>
            <h2
              className="font-display font-light text-white"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Crafted for those who seek<br />
              <em className="italic text-[#D4B483]">more than ordinary</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
            {[
              {
                img: img3,
                title: 'Firepit & Night Skies',
                body: 'Gather beneath an unobstructed canopy of stars. The sunken firepit seats seven, perfect for late-night conversations and toasted marshmallows.',
              },
              {
                img: img6,
                title: 'Hot Tub Above the Trees',
                body: 'Soak in the elevated hot tub as the sunset paints the sky above the Ouachita forest. Drained and sanitized after every stay.',
              },
              {
                img: img7,
                title: 'Open-Plan Great Room',
                body: 'Floor-to-ceiling windows frame living, dining, and the chef\'s kitchen into one seamless, light-filled social space.',
              },
            ].map(({ img, title, body }) => (
              <div key={title} className="relative group overflow-hidden h-[360px] sm:h-[420px] lg:h-[480px]">
                <img
                  src={img.url}
                  alt={title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="font-display text-2xl font-light text-white mb-3">{title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed font-light">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS — minimal list ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20 sm:py-28 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4">
            <EyebrowLabel>Amenities</EyebrowLabel>
            <ThinRule />
            <h2
              className="font-display font-light text-[#1A2B22] leading-[1.1]"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)' }}
            >
              Everything for an{' '}
              <em className="italic">exceptional</em> stay
            </h2>
            <Link
              to="/book"
              className="inline-flex items-center gap-3 mt-10 text-xs tracking-[0.2em] uppercase font-medium text-[#B8965A] hover:gap-5 transition-all duration-300"
            >
              Book Now
              <span className="w-8 h-px bg-[#B8965A] inline-block" />
            </Link>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
              {property.highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-start gap-5 py-6 border-b border-[#E0D9CE] group"
                >
                  <span className="text-[#B8965A] font-display text-lg font-light flex-shrink-0 w-6 text-right">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-[#1A2B22] text-sm leading-relaxed font-light tracking-wide group-hover:text-[#B8965A] transition-colors">
                    {h}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BEDROOMS ── dark */}
      <section style={{ backgroundColor: '#F2EFE9' }} className="py-20 sm:py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <EyebrowLabel>Accommodations</EyebrowLabel>
            <ThinRule />
            <h2
              className="font-display font-light text-[#1A2B22] -mt-4"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)' }}
            >
              Five ensuite bedrooms,<br />
              <em className="italic">each a retreat within a retreat</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-[#E0D9CE]">
            {property.bedrooms_detail.map((bed) => (
              <div key={bed.name} className="bg-[#F2EFE9] p-8 hover:bg-white transition-colors group">
                <p className="text-xs tracking-[0.2em] uppercase text-[#B8965A] mb-4">{bed.floor}</p>
                <h3 className="font-display text-xl font-light text-[#1A2B22] mb-3 leading-tight">{bed.name}</h3>
                <p className="text-sm text-[#7A6B55] mb-2 font-light">{bed.beds}</p>
                <p className="text-xs text-[#B5A898] leading-relaxed font-light">{bed.features}</p>
                <div className="mt-5 pt-5 border-t border-[#E0D9CE]">
                  <span className="font-display text-3xl font-light text-[#1A2B22]">{bed.sleeps}</span>
                  <span className="text-xs text-[#B5A898] ml-2 tracking-wide">guests</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO EDITORIAL ── wide strip */}
      <section className="py-20 sm:py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <EyebrowLabel>Gallery</EyebrowLabel>
              <ThinRule />
              <h2
                className="font-display font-light text-[#1A2B22] -mt-4"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)' }}
              >
                Every angle, a postcard
              </h2>
            </div>
            <Link
              to="/photos"
              className="text-xs tracking-[0.2em] uppercase font-medium text-[#B8965A] hover:gap-5 inline-flex items-center gap-3 transition-all duration-300 flex-shrink-0"
            >
              All {images.length} Photos
              <span className="w-8 h-px bg-[#B8965A] inline-block" />
            </Link>
          </div>
        </div>

        {/* Full-bleed horizontal scroll */}
        <div className="flex gap-3 overflow-x-auto pb-3 px-6 lg:px-12"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {images.slice(0, 14).map(img => (
            <div key={img.id} className="flex-shrink-0 overflow-hidden group w-[260px] h-[340px] sm:w-[320px] sm:h-[420px]">
              <img
                src={img.url}
                alt={img.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── OWNER NOTE ── */}
      <section style={{ backgroundColor: '#1A2B22' }} className="py-20 sm:py-28 lg:py-36">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <div className="w-10 h-px bg-[#B8965A] mx-auto mb-10" />
          <blockquote
            className="font-display font-light text-white/85 italic leading-relaxed"
            style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}
          >
            "{property.owner_note}"
          </blockquote>
          <div className="w-10 h-px bg-[#B8965A] mx-auto mt-10 mb-6" />
          <p className="text-xs tracking-[0.25em] uppercase text-[#B8965A]/70">The Nirvana Cabin Team</p>
        </div>
      </section>

      {/* ── HOUSE RULES ── refined */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-3">
            <EyebrowLabel>Before You Arrive</EyebrowLabel>
            <ThinRule />
            <h2 className="font-display text-2xl font-light text-[#1A2B22] -mt-4">
              House Rules
            </h2>
          </div>
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-0">
            {property.rules.map((rule, i) => (
              <div key={i} className="flex items-start gap-4 py-4 border-b border-[#E0D9CE]">
                <span className="w-1 h-1 rounded-full bg-[#B8965A] flex-shrink-0 mt-2" />
                <p className="text-sm text-[#5C5C4A] font-light leading-relaxed">{rule}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative overflow-hidden" style={{ height: '60vh', minHeight: '360px' }}>
        <img
          src={img5.url}
          alt="Nirvana Cabin exterior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1A2B22]/65" />
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-6">
          <EyebrowLabel light>Availability</EyebrowLabel>
          <h2
            className="font-display font-light text-white mb-8"
            style={{ fontSize: 'clamp(1.75rem, 5vw, 3.5rem)' }}
          >
            Your retreat awaits
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto max-w-xs sm:max-w-none">
            <Link
              to="/book"
              className="px-8 sm:px-12 py-4 bg-[#B8965A] text-white text-xs tracking-[0.22em] uppercase font-medium hover:bg-[#A07F47] transition-colors text-center"
            >
              Reserve Now
            </Link>
            <a
              href={`tel:${property.phone}`}
              className="px-8 sm:px-12 py-4 border border-white/40 text-white text-xs tracking-[0.22em] uppercase font-medium hover:bg-white/10 transition-colors text-center"
            >
              {property.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
