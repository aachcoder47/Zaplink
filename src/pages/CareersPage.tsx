import { useState } from 'react'
import { Link } from 'react-router-dom'

const roles = [
  {
    title: 'Senior Full-Stack Engineer',
    dept: 'Engineering',
    type: 'Full-time',
    location: 'Remote / Patna',
    tags: ['React', 'Node.js', 'AWS'],
    desc: 'Lead technical architecture and development for enterprise-grade web applications.',
  },
  {
    title: 'UI/UX Designer',
    dept: 'Design',
    type: 'Full-time',
    location: 'Remote / Patna',
    tags: ['Figma', 'User Research', 'Prototyping'],
    desc: 'Craft beautiful, accessible, and conversion-optimized user experiences.',
  },
  {
    title: 'React Native Developer',
    dept: 'Mobile',
    type: 'Full-time',
    location: 'Remote',
    tags: ['React Native', 'iOS', 'Android'],
    desc: 'Build cross-platform mobile applications used by millions of users worldwide.',
  },
  {
    title: 'DevOps Engineer',
    dept: 'Infrastructure',
    type: 'Full-time',
    location: 'Remote',
    tags: ['AWS', 'Docker', 'Kubernetes'],
    desc: 'Design and maintain scalable, secure cloud infrastructure across global regions.',
  },
]

const benefits = [
  { icon: '🌍', title: 'Remote-First', desc: 'Work from anywhere in the world. We have team members in 15+ countries.' },
  { icon: '📈', title: 'Growth Budget', desc: '$2,000/year per person for courses, conferences, and books.' },
  { icon: '🏥', title: 'Health Coverage', desc: 'Comprehensive medical, dental, and mental health coverage for you and your family.' },
  { icon: '🏖️', title: 'Flexible Time Off', desc: 'Unlimited PTO policy — we trust you to manage your time like an adult.' },
  { icon: '💻', title: 'Top Gear', desc: 'Latest MacBook Pro, 4K monitor, and any tools you need to do your best work.' },
  { icon: '🤝', title: 'Equity', desc: 'All full-time employees receive stock options. We grow together.' },
]

export default function CareersPage() {
  const [openRole, setOpenRole] = useState<number | null>(null)

  return (
    <div style={{ paddingTop: '5rem' }}>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #fffbeb 0%, #ffffff 60%)', padding: '5rem 0 4rem', borderBottom: '1px solid rgba(245,158,11,0.1)' }}>
        <div className="container">
          <div className="section-label" style={{ marginBottom: '1.5rem' }}>
            <span style={{ color: 'var(--clr-emerald)' }}>🚀</span> Join Us
          </div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', maxWidth: '700px' }}>
            Build Your Career at <span className="gradient-text">Govintek</span>
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '560px' }}>
            Join a team of 150+ passionate engineers, designers, and strategists building the next generation of digital products. Remote-first. Growth-obsessed.
          </p>
          <a href="#open-roles" className="btn btn-primary">View Open Roles ↓</a>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ padding: '5rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-label"><span style={{ color: 'var(--clr-emerald)' }}>✨</span> Why Govintek</div>
            <h2 className="section-title">Perks & <span className="gradient-text">Benefits</span></h2>
          </div>
          <div className="grid-cols-3" style={{ gap: '1.5rem' }}>
            {benefits.map((b, i) => (
              <div key={i} className="card-glass" style={{ padding: '2rem' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{b.icon}</div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.5rem' }}>{b.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--clr-muted-2)', lineHeight: 1.7 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section id="open-roles" style={{ padding: '5rem 0', background: '#fffbeb' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-label"><span style={{ color: 'var(--clr-emerald)' }}>💼</span> Open Roles</div>
            <h2 className="section-title">{roles.length} Positions <span className="gradient-text">Available</span></h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '860px', margin: '0 auto' }}>
            {roles.map((r, i) => (
              <div key={i} className="card-glass" style={{ padding: '2rem', cursor: 'pointer', borderLeft: '4px solid #f59e0b' }} id={`role-${i}`}>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}
                  onClick={() => setOpenRole(openRole === i ? null : i)}
                >
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.4rem' }}>{r.title}</h3>
                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--clr-emerald)' }}>{r.dept}</span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--clr-muted)' }}>• {r.type}</span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--clr-muted)' }}>• 📍 {r.location}</span>
                    </div>
                  </div>
                  <div style={{ fontSize: '1.2rem', color: 'var(--clr-emerald)', flexShrink: 0, transform: openRole === i ? 'rotate(180deg)' : '', transition: 'transform 0.3s' }}>▼</div>
                </div>
                {openRole === i && (
                  <div style={{ marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: '1px solid var(--clr-border)' }}>
                    <p style={{ fontSize: '0.9rem', color: 'var(--clr-muted-2)', marginBottom: '1rem', lineHeight: 1.7 }}>{r.desc}</p>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                      {r.tags.map((t, j) => <span key={j} className="service-card__tag">{t}</span>)}
                    </div>
                    <Link to="/contact" className="btn btn-primary" style={{ display: 'inline-flex', padding: '0.65rem 1.5rem', fontSize: '0.875rem' }}>
                      Apply Now ↗
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* No role fit */}
      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>Don't see a perfect fit?</h3>
          <p style={{ color: 'var(--clr-muted)', marginBottom: '2rem', maxWidth: '480px', margin: '0 auto 2rem' }}>
            We're always on the lookout for exceptional talent. Send us your portfolio and we'll keep you in mind.
          </p>
          <Link to="/contact" className="btn btn-outline">Send Open Application</Link>
        </div>
      </section>
    </div>
  )
}
