import { useState } from 'react'
import { images, type CabinImage } from '../data/images'

const categories: { key: CabinImage['category'] | 'all'; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'exterior', label: 'Exterior' },
  { key: 'living', label: 'Living' },
  { key: 'kitchen', label: 'Kitchen' },
  { key: 'bedroom', label: 'Bedrooms' },
  { key: 'bathroom', label: 'Bathrooms' },
  { key: 'outdoor', label: 'Outdoor' },
  { key: 'gameroom', label: 'Game Room' },
]

export default function PhotosPage() {
  const [activeCategory, setActiveCategory] = useState<CabinImage['category'] | 'all'>('all')
  const [lightbox, setLightbox] = useState<{ img: CabinImage; idx: number } | null>(null)

  const filtered = activeCategory === 'all' ? images : images.filter(i => i.category === activeCategory)

  const navigate = (dir: 1 | -1) => {
    if (!lightbox) return
    const next = (lightbox.idx + dir + filtered.length) % filtered.length
    setLightbox({ img: filtered[next], idx: next })
  }

  return (
    <div style={{ backgroundColor: '#F7F4EF', paddingTop: '80px' }}>

      {/* Page header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-12">
        <p className="text-xs tracking-[0.22em] uppercase font-medium text-[#B8965A] mb-3">Gallery</p>
        <div className="w-10 h-px bg-[#B8965A] mb-8" />
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <h1
            className="font-display font-light text-[#1A2B22] -mt-2"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            {filtered.length} photographs
          </h1>
          <p className="text-sm text-[#7A6B55] font-light tracking-wide">Nirvana Cabin · Broken Bow, Oklahoma</p>
        </div>
      </div>

      {/* Filter row */}
      <div className="border-t border-b border-[#E0D9CE] sticky top-20 z-30" style={{ backgroundColor: '#F7F4EF' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-0 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
            {categories.map(({ key, label }) => {
              const count = key === 'all' ? images.length : images.filter(i => i.category === key).length
              return (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`flex-shrink-0 px-5 py-4 text-xs tracking-[0.18em] uppercase font-medium transition-all border-b-2 ${
                    activeCategory === key
                      ? 'text-[#1A2B22] border-[#B8965A]'
                      : 'text-[#B5A898] border-transparent hover:text-[#1A2B22]'
                  }`}
                >
                  {label}
                  <span className="ml-2 text-[#B8965A]/70">{count}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Masonry grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-2 space-y-2">
          {filtered.map((img, idx) => (
            <div
              key={img.id}
              className="break-inside-avoid cursor-pointer group relative overflow-hidden"
              onClick={() => setLightbox({ img, idx })}
            >
              <img
                src={img.url}
                alt={img.caption}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-103 block"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#1A2B22]/0 group-hover:bg-[#1A2B22]/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xs font-light tracking-wide leading-snug">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: 'rgba(26,43,34,0.97)' }}
          onClick={() => setLightbox(null)}
        >
          {/* Close */}
          <button
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
            onClick={() => setLightbox(null)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 text-xs tracking-[0.2em] text-white/40 uppercase">
            {lightbox.idx + 1} / {filtered.length}
          </div>

          {/* Prev */}
          <button
            className="absolute left-4 lg:left-8 text-white/50 hover:text-white transition-colors p-2"
            onClick={e => { e.stopPropagation(); navigate(-1) }}
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image */}
          <div className="max-w-5xl w-full px-16 lg:px-24" onClick={e => e.stopPropagation()}>
            <img
              src={lightbox.img.url}
              alt={lightbox.img.caption}
              className="w-full max-h-[80vh] object-contain"
            />
            <p className="text-white/40 text-xs tracking-[0.15em] text-center mt-4 font-light uppercase">
              {lightbox.img.caption}
            </p>
          </div>

          {/* Next */}
          <button
            className="absolute right-4 lg:right-8 text-white/50 hover:text-white transition-colors p-2"
            onClick={e => { e.stopPropagation(); navigate(1) }}
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}
