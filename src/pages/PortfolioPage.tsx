import { useState } from 'react'
import { Link } from 'react-router-dom'

const projects = [
  {
    title: 'FinFlow Dashboard',
    category: 'Web',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    desc: 'Enterprise financial analytics platform processing $2B+ transactions monthly with real-time dashboards.',
    emoji: '📊',
    color: '#fbbf24',
    featured: true,
  },
  {
    title: 'ShopNative App',
    category: 'Mobile',
    tags: ['React Native', 'Firebase'],
    desc: 'Cross-platform e-commerce app with AR product try-on, rated 4.8★ with 500K+ downloads.',
    emoji: '🛍️',
    color: '#f59e0b',
    featured: false,
  },
  {
    title: 'MediConnect Portal',
    category: 'Web',
    tags: ['Next.js', 'GraphQL', 'AWS'],
    desc: 'HIPAA-compliant telemedicine platform connecting 30,000 patients with physicians nationwide.',
    emoji: '🏥',
    color: '#d97706',
    featured: false,
  },
  {
    title: 'Nomad Travel App',
    category: 'Mobile',
    tags: ['Flutter', 'Google Maps API'],
    desc: 'AI-powered travel planner with offline-first architecture used in 80+ countries.',
    emoji: '✈️',
    color: '#fbbf24',
    featured: false,
  },
  {
    title: 'BuildAI Design System',
    category: 'Design',
    tags: ['Figma', 'Storybook', 'Design Tokens'],
    desc: 'Comprehensive design system with 200+ components adopted by 4 Fortune 500 clients.',
    emoji: '🎨',
    color: '#f59e0b',
    featured: false,
  },
  {
    title: 'EduLearn Platform',
    category: 'Web',
    tags: ['React', 'Django', 'WebRTC'],
    desc: 'Live learning management system with real-time video classes and AI-powered assessments.',
    emoji: '📚',
    color: '#d97706',
    featured: false,
  },
  {
    title: 'FleetTrack Dashboard',
    category: 'Web',
    tags: ['Vue.js', 'Mapbox', 'IoT'],
    desc: 'Real-time fleet management system tracking 12,000+ vehicles across 6 countries.',
    emoji: '🚛',
    color: '#fbbf24',
    featured: false,
  },
  {
    title: 'Pulse Fitness App',
    category: 'Mobile',
    tags: ['Swift', 'HealthKit', 'ML'],
    desc: 'Native iOS fitness app with AI coaching features, 200K users in 3 months post-launch.',
    emoji: '💪',
    color: '#f59e0b',
    featured: false,
  },
  {
    title: 'AgroVision UI',
    category: 'Design',
    tags: ['Figma', 'Research', 'Prototyping'],
    desc: 'Award-winning UX redesign for agricultural IoT platform improving farmer productivity by 40%.',
    emoji: '🌱',
    color: '#d97706',
    featured: false,
  },
]

const filters = ['All', 'Web', 'Mobile', 'Design']

export default function PortfolioPage() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <div style={{ paddingTop: '5rem' }}>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #fffbeb 0%, #ffffff 60%)', padding: '5rem 0 4rem', borderBottom: '1px solid rgba(245,158,11,0.1)' }}>
        <div className="container">
          <div className="section-label" style={{ marginBottom: '1.5rem' }}>
            <span style={{ color: 'var(--clr-emerald)' }}>✦</span> Our Work
          </div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', maxWidth: '700px' }}>
            Products We're <span className="gradient-text">Proud Of</span>
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '560px' }}>
            Over 400 digital products shipped across web, mobile, and design. Here are some highlights.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActive(f)}
                style={{
                  padding: '0.5rem 1.5rem',
                  borderRadius: '99px',
                  border: `1.5px solid ${active === f ? '#f59e0b' : 'rgba(0,0,0,0.12)'}`,
                  background: active === f ? 'linear-gradient(135deg, #fbbf24, #f59e0b)' : 'transparent',
                  color: active === f ? '#000' : 'var(--clr-muted)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid-cols-3" style={{ gap: '1.75rem' }}>
            {filtered.map((p, i) => (
              <div
                key={i}
                className="card-glass"
                style={{
                  padding: '2.5rem',
                  gridColumn: p.featured && i === 0 ? 'span 2' : undefined,
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  cursor: 'pointer',
                  borderTop: `3px solid ${p.color}`,
                }}
                id={`project-${i}`}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1.25rem', lineHeight: 1 }}>{p.emoji}</div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                  {p.tags.map((t, j) => (
                    <span key={j} className="service-card__tag">{t}</span>
                  ))}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>{p.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--clr-muted-2)', lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 0', background: '#fffbeb' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Want to be our next success story?</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 2rem' }}>Let's build something great together.</p>
          <Link to="/contact" className="btn btn-primary">Start Your Project ↗</Link>
        </div>
      </section>
    </div>
  )
}
