import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { property } from '../../data/property'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/photos', label: 'Photos' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/location', label: 'Location' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const transparent = isHome && !scrolled && !menuOpen
  const textColor = transparent ? 'text-white' : 'text-[#1A2B22]'
  const logoColor = transparent ? 'text-white' : 'text-[#1A2B22]'
  const borderColor = transparent ? 'border-white/20' : 'border-[#B8965A]'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        transparent
          ? 'bg-transparent'
          : 'bg-[#F7F4EF]/97 backdrop-blur-md shadow-[0_1px_0_0_rgba(184,150,90,0.2)]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">

          {/* Desktop left nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.slice(0, 2).map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `text-xs tracking-[0.18em] uppercase font-medium transition-colors duration-300 ${
                    isActive
                      ? (transparent ? 'text-[#D4B483]' : 'text-[#B8965A]')
                      : `${textColor} hover:text-[#B8965A]`
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Wordmark — centered on desktop, left on mobile */}
          <Link
            to="/"
            className={`font-display text-lg sm:text-xl lg:text-2xl font-light tracking-[0.08em] sm:tracking-[0.12em] uppercase whitespace-nowrap transition-colors duration-300 ${logoColor} hover:text-[#B8965A] lg:absolute lg:left-1/2 lg:-translate-x-1/2`}
          >
            {property.name}
          </Link>

          {/* Desktop right nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.slice(2).map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `text-xs tracking-[0.18em] uppercase font-medium transition-colors duration-300 ${
                    isActive
                      ? (transparent ? 'text-[#D4B483]' : 'text-[#B8965A]')
                      : `${textColor} hover:text-[#B8965A]`
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <Link
              to="/book"
              className={`text-xs tracking-[0.18em] uppercase font-medium px-5 py-2.5 border transition-all duration-300 ${borderColor} ${textColor} hover:bg-[#B8965A] hover:border-[#B8965A] hover:text-white`}
            >
              Reserve
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className={`lg:hidden ml-auto p-3 -mr-1 transition-colors ${textColor}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-px transition-all duration-300 ${transparent ? 'bg-white' : 'bg-[#1A2B22]'} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-px transition-all duration-300 ${transparent ? 'bg-white' : 'bg-[#1A2B22]'} ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-px transition-all duration-300 ${transparent ? 'bg-white' : 'bg-[#1A2B22]'} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#1A2B22] text-white px-6 py-8 flex flex-col gap-6">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `font-display text-2xl font-light tracking-wide transition-colors ${
                  isActive ? 'text-[#D4B483]' : 'text-white hover:text-[#D4B483]'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/book"
            onClick={() => setMenuOpen(false)}
            className="mt-2 text-xs tracking-[0.2em] uppercase font-medium px-6 py-4 border border-[#B8965A] text-[#D4B483] text-center hover:bg-[#B8965A] hover:text-white transition-colors"
          >
            Reserve Your Stay
          </Link>
        </div>
      )}
    </header>
  )
}
