import { Link } from 'react-router-dom'

const services = [
  {
    icon: '💻',
    title: 'Enterprise Web Development',
    short: 'Scalable, secure full-stack web applications.',
    desc: 'From SaaS dashboards to enterprise portals, we design and build web applications that are fast, reliable, and built to grow with your business. Our full-stack expertise spans React frontends to Node.js microservices and cloud deployments.',
    tags: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
    color: 'rgba(245,158,11,0.08)',
    accent: '#f59e0b',
  },
  {
    icon: '📱',
    title: 'Mobile App Development',
    short: 'Native iOS & Android and cross-platform apps.',
    desc: 'We craft intuitive, high-performance mobile applications using React Native and Flutter. From concept to App Store deployment, we deliver mobile products your users will love — on both iOS and Android.',
    tags: ['React Native', 'Flutter', 'iOS', 'Android', 'Firebase'],
    color: 'rgba(245,158,11,0.08)',
    accent: '#d97706',
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    short: 'Beautiful, user-centric digital interfaces.',
    desc: 'Our designers create visually compelling and highly intuitive interfaces backed by user research, wireframing, and prototyping. Every pixel serves a purpose — driving conversion, engagement, and brand trust.',
    tags: ['Figma', 'User Research', 'Prototyping', 'Design Systems', 'Accessibility'],
    color: 'rgba(245,158,11,0.08)',
    accent: '#fbbf24',
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    short: 'Scalable infrastructure for modern applications.',
    desc: 'We architect and manage cloud infrastructure on AWS, GCP, and Azure. CI/CD pipelines, containerization with Docker/Kubernetes, and 24/7 monitoring keep your application resilient and cost-efficient.',
    tags: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'CI/CD'],
    color: 'rgba(245,158,11,0.08)',
    accent: '#f59e0b',
  },
  {
    icon: '🤖',
    title: 'AI & Machine Learning',
    short: 'Intelligent features powered by modern AI.',
    desc: 'We integrate AI capabilities — chatbots, recommendation engines, image recognition, and NLP — directly into your products. We leverage OpenAI, custom model fine-tuning, and TensorFlow for production-ready AI.',
    tags: ['OpenAI', 'TensorFlow', 'Python', 'NLP', 'Computer Vision'],
    color: 'rgba(245,158,11,0.08)',
    accent: '#d97706',
  },
  {
    icon: '🔗',
    title: 'API & Backend Services',
    short: 'Robust APIs and microservices at scale.',
    desc: 'We architect RESTful and GraphQL APIs that are fast, secure, and well-documented. Our microservices architecture ensures your backend is independently deployable and highly maintainable.',
    tags: ['REST', 'GraphQL', 'Node.js', 'Python', 'Microservices'],
    color: 'rgba(245,158,11,0.08)',
    accent: '#fbbf24',
  },
]

const process = [
  { step: '01', title: 'Discovery & Strategy', desc: 'We deep-dive into your business goals, user personas, and competitive landscape to define a clear digital roadmap.', icon: '🔍' },
  { step: '02', title: 'Design & Prototype', desc: 'Our designers craft wireframes and interactive prototypes, validated through user testing before a single line of code is written.', icon: '✏️' },
  { step: '03', title: 'Agile Development', desc: 'Development happens in two-week sprints with regular demos. You see progress early and often — no surprises at launch.', icon: '⚙️' },
  { step: '04', title: 'Launch & Scale', desc: 'We handle deployment, monitoring, and post-launch optimization. Your success is our success — we stay with you long-term.', icon: '🚀' },
]

export default function ServicesPage() {
  return (
    <div style={{ paddingTop: '5rem' }}>
      {/* Hero */}
      <section className="page-hero" style={{ background: 'linear-gradient(135deg, #fffbeb 0%, #ffffff 60%)', borderBottom: '1px solid rgba(245,158,11,0.1)', padding: '5rem 0 4rem' }}>
        <div className="container">
          <div className="section-label" style={{ marginBottom: '1.5rem' }}>
            <span style={{ color: 'var(--clr-emerald)' }}>⚡</span> What We Do
          </div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', maxWidth: '700px' }}>
            Services Built for <span className="gradient-text">Modern Businesses</span>
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '580px' }}>
            From concept to deployment, we provide end-to-end digital services that help startups and enterprises grow through technology.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">Start a Project ↗</Link>
            <Link to="/portfolio" className="btn btn-outline">View Our Work</Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: '5rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-label"><span style={{ color: 'var(--clr-emerald)' }}>■</span> All Services</div>
            <h2 className="section-title">Everything You Need to <span className="gradient-text">Succeed Online</span></h2>
          </div>
          <div className="services__grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {services.map((s, i) => (
              <div key={i} className="card-glass service-card" id={`svc-${i}`} style={{ '--card-glow': s.color, '--card-line': `linear-gradient(135deg, ${s.accent}, ${s.accent}99)` } as React.CSSProperties}>
                <div className="service-card__number">{String(i + 1).padStart(2, '0')}</div>
                <div className="service-card__icon" style={{ background: s.color, borderColor: `${s.accent}44`, fontSize: '1.8rem' }}>{s.icon}</div>
                <h3>{s.title}</h3>
                <p style={{ color: 'var(--clr-muted)', marginBottom: '1rem' }}>{s.desc}</p>
                <div className="service-card__tags">
                  {s.tags.map((t, j) => <span key={j} className="service-card__tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section style={{ padding: '5rem 0', background: '#fffbeb' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-label"><span style={{ color: 'var(--clr-emerald)' }}>→</span> Our Process</div>
            <h2 className="section-title">How We Work</h2>
            <p className="section-subtitle" style={{ margin: '0 auto 0' }}>
              A transparent, collaborative process that keeps you informed and in control at every stage.
            </p>
          </div>
          <div className="grid-cols-4" style={{ gap: '2rem' }}>
            {process.map((p, i) => (
              <div key={i} className="card-glass" style={{ padding: '2.5rem 2rem', textAlign: 'center', position: 'relative' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{p.icon}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--clr-emerald)', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>{p.step}</div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.75rem' }}>{p.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--clr-muted-2)', lineHeight: 1.7 }}>{p.desc}</p>
                {i < process.length - 1 && (
                  <div style={{ position: 'absolute', right: '-1.25rem', top: '50%', transform: 'translateY(-50%)', fontSize: '1.25rem', color: 'var(--clr-emerald)', zIndex: 2 }}>→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 0', background: '#fff' }}>
        <div className="container">
          <div className="cta-box" style={{ background: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)', border: '1px solid rgba(245,158,11,0.2)' }}>
            <div className="cta-box__glow" aria-hidden="true" />
            <h2 className="cta-box__title">Ready to Start Your Project?</h2>
            <p className="cta-box__sub" style={{ color: 'var(--clr-muted)' }}>Tell us about your idea and we'll craft a tailored proposal within 48 hours.</p>
            <Link to="/contact" className="btn btn-primary" style={{ display: 'inline-flex', marginTop: '1rem' }}>Get a Free Consultation ↗</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
