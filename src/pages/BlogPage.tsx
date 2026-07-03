import { useState } from 'react'

const articles = [
  {
    title: '10 Proven UX Patterns That Boost Mobile App Retention',
    category: 'Design',
    date: 'June 28, 2026',
    readTime: '6 min read',
    excerpt: 'We analyzed 50+ apps that achieved 40%+ Day-30 retention. Here are the patterns they all share — from onboarding to habit loops.',
    emoji: '📱',
    featured: true,
  },
  {
    title: 'Why Next.js 15 is the Default Choice for Enterprise Web Apps',
    category: 'Engineering',
    date: 'June 20, 2026',
    readTime: '8 min read',
    excerpt: "Server Components, the App Router, and edge caching have changed the game. Here's our engineering team's full breakdown.",
    emoji: '⚡',
    featured: false,
  },
  {
    title: 'The Real Cost of a Bad API Architecture',
    category: 'Engineering',
    date: 'June 14, 2026',
    readTime: '7 min read',
    excerpt: 'Technical debt accrued from poor API design costs teams 30% more in maintenance. We break down how to get it right from day one.',
    emoji: '🔗',
    featured: false,
  },
  {
    title: 'How We Shipped a Healthcare SaaS in 12 Weeks',
    category: 'Case Study',
    date: 'June 7, 2026',
    readTime: '10 min read',
    excerpt: 'A deep dive into our sprint planning, team structure, and technical decisions that enabled a HIPAA-compliant platform to launch on time.',
    emoji: '🏥',
    featured: false,
  },
  {
    title: 'Integrating AI Chatbots in B2B Portals: A Practical Guide',
    category: 'AI',
    date: 'May 30, 2026',
    readTime: '9 min read',
    excerpt: "How to build context-aware, secure AI assistants using OpenAI and LangChain — with real production patterns we've used at Govintek.",
    emoji: '🤖',
    featured: false,
  },
  {
    title: 'Design Tokens: Building a Scalable Design System from Scratch',
    category: 'Design',
    date: 'May 22, 2026',
    readTime: '5 min read',
    excerpt: 'Our design team shares how we built a token-based system that works across Figma, React, and React Native without inconsistencies.',
    emoji: '🎨',
    featured: false,
  },
  {
    title: 'Kubernetes for Early-Stage Startups: Overkill or Essential?',
    category: 'DevOps',
    date: 'May 15, 2026',
    readTime: '6 min read',
    excerpt: 'When does a startup actually need Kubernetes? We lay out the honest answer — and what to use instead in your early days.',
    emoji: '☁️',
    featured: false,
  },
]

const categories = ['All', 'Engineering', 'Design', 'AI', 'DevOps', 'Case Study']
const categoryColors: Record<string, string> = {
  Engineering: '#f59e0b',
  Design: '#d97706',
  AI: '#fbbf24',
  DevOps: '#b45309',
  'Case Study': '#f59e0b',
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const featured = articles.find(a => a.featured)!
  const filtered = activeCategory === 'All'
    ? articles.filter(a => !a.featured)
    : articles.filter(a => !a.featured && a.category === activeCategory)

  return (
    <div style={{ paddingTop: '5rem' }}>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #fffbeb 0%, #ffffff 60%)', padding: '4rem 0 3rem', borderBottom: '1px solid rgba(245,158,11,0.1)' }}>
        <div className="container">
          <div className="section-label" style={{ marginBottom: '1.5rem' }}>
            <span style={{ color: 'var(--clr-emerald)' }}>📝</span> Insights
          </div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', maxWidth: '700px' }}>
            Ideas from the <span className="gradient-text">Govintek</span> Team
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '540px' }}>
            Engineering deep-dives, design thinking, AI explainers, and behind-the-scenes of our best work.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section style={{ padding: '4rem 0 0', background: '#fff' }}>
        <div className="container">
          <div className="section-label" style={{ marginBottom: '1.5rem' }}>
            <span style={{ color: 'var(--clr-emerald)' }}>⭐</span> Featured
          </div>
          <div className="card-glass" style={{ padding: '3rem', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3rem', alignItems: 'center', borderTop: '4px solid #f59e0b' }}>
            <div style={{ fontSize: '8rem', textAlign: 'center', background: 'linear-gradient(135deg, #fffbeb, #fef3c7)', borderRadius: 'var(--radius-lg)', padding: '2rem', aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {featured.emoji}
            </div>
            <div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '0.08em', background: 'rgba(245,158,11,0.1)', padding: '0.2rem 0.7rem', borderRadius: '99px' }}>{featured.category}</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--clr-muted)' }}>{featured.date}</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--clr-muted)' }}>· {featured.readTime}</span>
              </div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, lineHeight: 1.2, letterSpacing: '-0.025em', marginBottom: '1rem' }}>{featured.title}</h2>
              <p style={{ color: 'var(--clr-muted-2)', lineHeight: 1.7, marginBottom: '1.5rem' }}>{featured.excerpt}</p>
              <a href="#" className="btn btn-primary" style={{ display: 'inline-flex' }}>Read Article →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section style={{ padding: '4rem 0 5rem', background: '#fff' }}>
        <div className="container">
          {/* Category filter */}
          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                style={{
                  padding: '0.4rem 1.25rem',
                  borderRadius: '99px',
                  border: `1.5px solid ${activeCategory === c ? '#f59e0b' : 'rgba(0,0,0,0.12)'}`,
                  background: activeCategory === c ? 'linear-gradient(135deg, #fbbf24, #f59e0b)' : 'transparent',
                  color: activeCategory === c ? '#000' : 'var(--clr-muted)',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {c}
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {filtered.map((a, i) => (
              <article key={i} className="card-glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }} id={`article-${i}`}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>{a.emoji}</div>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
                    color: categoryColors[a.category] || '#f59e0b',
                    textTransform: 'uppercase', letterSpacing: '0.08em',
                    background: `${categoryColors[a.category]}18` || 'rgba(245,158,11,0.08)',
                    padding: '0.15rem 0.6rem', borderRadius: '99px',
                  }}>{a.category}</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--clr-muted)' }}>{a.readTime}</span>
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, lineHeight: 1.35, letterSpacing: '-0.01em', marginBottom: '0.75rem', flex: 1 }}>{a.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--clr-muted-2)', lineHeight: 1.7, marginBottom: '1.25rem' }}>{a.excerpt}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid var(--clr-border)' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--clr-muted)' }}>{a.date}</span>
                  <a href="#" style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--clr-emerald)', textDecoration: 'none' }}>Read →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section style={{ padding: '5rem 0', background: '#fffbeb' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📬</div>
          <h2 className="section-title">Stay in the Loop</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 2rem' }}>
            Get our best articles, case studies, and engineering insights delivered to your inbox — biweekly, no spam.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', maxWidth: '420px', margin: '0 auto' }}>
            <input
              className="cta-form__input"
              placeholder="Your email address"
              type="email"
              id="blog-newsletter-email"
              style={{ borderRadius: '99px' }}
            />
            <button className="btn btn-primary" style={{ whiteSpace: 'nowrap' }} id="blog-newsletter-btn">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  )
}
