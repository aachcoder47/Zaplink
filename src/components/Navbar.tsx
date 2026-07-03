import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const pages = [
    { to: '/services', label: 'Services' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/about', label: 'About' },
    { to: '/blog', label: 'Blog' },
    { to: '/careers', label: 'Careers' },
  ]

  const homeLinks = [
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#portfolio', label: 'Work' },
    { href: '#team', label: 'Team' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="container">
        <div className="navbar__inner">
          {/* Logo */}
          <Link to="/" className="navbar__logo" id="nav-logo">
            <div className="navbar__logo-icon" aria-hidden="true">G</div>
            <span className="gradient-text">Govintek</span>
          </Link>

          {/* Desktop Nav */}
          <ul className="navbar__nav" role="list">
            {isHome
              ? homeLinks.map(link => (
                  <li key={link.href}>
                    <a href={link.href} id={`nav-${link.label.toLowerCase()}`}>{link.label}</a>
                  </li>
                ))
              : pages.map(page => (
                  <li key={page.to}>
                    <Link
                      to={page.to}
                      id={`nav-${page.label.toLowerCase()}`}
                      style={location.pathname === page.to ? { color: 'var(--clr-emerald)' } : {}}
                    >
                      {page.label}
                    </Link>
                  </li>
                ))}
          </ul>

          {/* Actions */}
          <div className="navbar__actions">
            <Link to="/contact" className="btn btn-primary" id="nav-cta">
              Get in Touch ↗
            </Link>
            <button
              className="navbar__menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-label="Toggle mobile menu"
              id="nav-menu-btn"
            >
              <span style={menuOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}} />
              <span style={menuOpen ? { opacity: 0 } : {}} />
              <span style={menuOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            style={{
              background: 'rgba(255,255,255,0.97)',
              backdropFilter: 'blur(24px)',
              borderTop: '1px solid var(--clr-border)',
              padding: '1.5rem 0',
              marginTop: '0.5rem',
            }}
            id="mobile-menu"
          >
            {pages.map(page => (
              <Link
                key={page.to}
                to={page.to}
                style={{
                  display: 'block',
                  padding: '0.75rem 0',
                  color: 'var(--clr-muted-2)',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: 500,
                  borderBottom: '1px solid var(--clr-border)',
                  transition: 'color 0.2s',
                }}
                onClick={() => setMenuOpen(false)}
                id={`mobile-nav-${page.label.toLowerCase()}`}
              >
                {page.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn btn-primary"
              style={{ marginTop: '1.25rem', display: 'inline-flex' }}
              onClick={() => setMenuOpen(false)}
            >
              💬 Get in Touch
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
