import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#team', label: 'Team' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="container">
        <div className="navbar__inner">
          {/* Logo */}
          <a href="#hero" className="navbar__logo" id="nav-logo">
            <div className="navbar__logo-icon" aria-hidden="true">G</div>
            <span className="gradient-text">Govintek</span>
          </a>

          {/* Desktop Nav */}
          <ul className="navbar__nav" role="list">
            {navLinks.map(link => (
              <li key={link.href}>
                <a href={link.href} id={`nav-${link.label.toLowerCase()}`}>{link.label}</a>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="navbar__actions">
            <a href="#contact" className="btn btn-primary" id="nav-cta">
              Get in Touch ↗
            </a>
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
              background: 'rgba(2,11,6,0.97)',
              backdropFilter: 'blur(24px)',
              borderTop: '1px solid var(--clr-border)',
              padding: '1.5rem 0',
              marginTop: '0.5rem',
            }}
            id="mobile-menu"
          >
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
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
                id={`mobile-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/917462085177"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ marginTop: '1.25rem', display: 'inline-flex' }}
              onClick={() => setMenuOpen(false)}
            >
              💬 WhatsApp Us
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
