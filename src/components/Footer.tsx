export default function Footer() {
  const links1 = [
    { label: 'Web Applications', href: '#services' },
    { label: 'Mobile Solutions', href: '#services' },
    { label: 'UI/UX Design', href: '#services' },
    { label: 'Digital Products', href: '#portfolio' },
  ]
  const links2 = [
    { label: 'Engineering Team', href: '#team' },
    { label: 'Research Papers', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Developer API', href: '#' },
  ]
  const links3 = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Responsible AI Policy', href: '#' },
    { label: 'Security & Certifications', href: '#' },
  ]

  return (
    <footer className="footer" aria-label="Page footer">
      <div className="container">
        <div className="footer__inner">
          {/* Brand */}
          <div className="footer__brand">
            <a
              href="#hero"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.7rem',
                textDecoration: 'none',
                fontSize: '1.3rem',
                fontWeight: 800,
                color: 'inherit',
                letterSpacing: '-0.03em',
              }}
              id="footer-logo"
            >
              <span style={{
                width: '34px',
                height: '34px',
                background: 'var(--grad-brand)',
                borderRadius: '9px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1rem',
                color: '#000',
                fontWeight: 900,
              }}>G</span>
              Govintek
            </a>
            <p>
              Delivering premium digital experiences at the intersection of powerful engineering, seamless design, and business strategy.
            </p>

            {/* Social links */}
            <div className="footer__brand-socials">
              <a
                href="https://www.youtube.com/@Ritwik8908"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__brand-social"
                aria-label="Govintek YouTube"
                title="YouTube"
              >
                ▶
              </a>
              <a
                href="https://x.com/RajRitwik74853"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__brand-social"
                aria-label="Govintek Twitter/X"
                title="X (Twitter)"
              >
                𝕏
              </a>
              <a
                href="https://wa.me/917462085177"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__brand-social"
                aria-label="Govintek WhatsApp"
                title="WhatsApp"
              >
                💬
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div className="footer__col">
            <h5>Core Capabilities</h5>
            <ul role="list">
              {links1.map((link, idx) => (
                <li key={idx}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Links 2 */}
          <div className="footer__col">
            <h5>Company</h5>
            <ul role="list">
              {links2.map((link, idx) => (
                <li key={idx}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Links 3 */}
          <div className="footer__col">
            <h5>Trust & Safety</h5>
            <ul role="list">
              {links3.map((link, idx) => (
                <li key={idx}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Govintek Agency Inc. All rights reserved.</p>
          <div className="footer__socials">
            <a
              href="https://www.youtube.com/@Ritwik8908"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social"
              aria-label="YouTube"
            >▶</a>
            <a
              href="https://x.com/RajRitwik74853"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social"
              aria-label="X / Twitter"
            >𝕏</a>
            <a
              href="https://wa.me/917462085177"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social"
              aria-label="WhatsApp"
            >wa</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
