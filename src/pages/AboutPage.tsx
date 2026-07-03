import { Link } from 'react-router-dom'

const values = [
  { icon: '🎯', title: 'Outcome-Driven', desc: 'We measure success by your results — not just delivery. Every project is tied to a tangible business goal.' },
  { icon: '🤝', title: 'Transparent Partnership', desc: 'No black boxes. You have full visibility into timelines, budgets, and code. We are your co-founders, not just contractors.' },
  { icon: '⚡', title: 'Speed Without Compromise', desc: 'We ship fast through rigorous processes, not by cutting corners. Quality and velocity are not mutually exclusive.' },
  { icon: '🌍', title: 'Global Mindset', desc: 'With clients in 25+ countries, we bring international perspective and cross-cultural product sensitivity.' },
  { icon: '🧠', title: 'Continuous Learning', desc: 'Technology evolves daily. Our team dedicates time weekly to mastering emerging tools, frameworks, and methodologies.' },
  { icon: '🛡️', title: 'Security First', desc: 'Security is built in from day one — not bolted on later. We follow OWASP, SOC 2 practices, and data privacy standards.' },
]

const timeline = [
  { year: '2012', event: 'Founded in Ahmedabad by a team of 5 engineers with a shared vision for digital excellence.' },
  { year: '2015', event: 'Reached 50 clients milestone. Expanded mobile development division with Flutter and React Native.' },
  { year: '2017', event: 'Opened offices in San Francisco and London. Grew team to 120+ specialists.' },
  { year: '2019', event: 'Launched enterprise division serving Fortune 500 companies. Won 3 design industry awards.' },
  { year: '2022', event: 'Crossed 400+ projects delivered. Launched AI/ML practice with dedicated machine learning team.' },
  { year: '2024', event: 'Recognized as a top 10 global web agency by Clutch with 98% client satisfaction rate.' },
]

const team = [
  { name: 'Arjun Mehta', role: 'CEO & Co-Founder', avatar: '👨‍💼', bio: '15 years scaling digital products from 0 to 1M users.' },
  { name: 'Priya Sharma', role: 'CTO', avatar: '👩‍💻', bio: 'Ex-Google engineer. Expert in distributed systems and cloud.' },
  { name: 'Raj Patel', role: 'Head of Design', avatar: '🎨', bio: 'Award-winning UX designer with a passion for accessible UI.' },
  { name: 'Nisha Kapoor', role: 'VP Engineering', avatar: '⚙️', bio: 'Leads a team of 60+ engineers across 3 time zones.' },
]

export default function AboutPage() {
  return (
    <div style={{ paddingTop: '5rem' }}>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #fffbeb 0%, #ffffff 60%)', padding: '5rem 0 4rem', borderBottom: '1px solid rgba(245,158,11,0.1)' }}>
        <div className="container">
          <div className="grid-cols-1-1" style={{ gap: '4rem', alignItems: 'center' }}>
            <div>
              <div className="section-label" style={{ marginBottom: '1.5rem' }}>
                <span style={{ color: 'var(--clr-emerald)' }}>i</span> Who We Are
              </div>
              <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                We Are <span className="gradient-text">Govintek</span>
              </h1>
              <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
                A global IT agency of 150+ digital specialists — engineers, designers, and strategists — united by a passion for building extraordinary software.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-primary">Work With Us ↗</Link>
                <Link to="/careers" className="btn btn-outline">Join Our Team</Link>
              </div>
            </div>
            <div className="grid-cols-1-1" style={{ gap: '1rem' }}>
              {[
                { val: '400+', label: 'Projects Delivered' },
                { val: '150+', label: 'Team Members' },
                { val: '25+', label: 'Countries Served' },
                { val: '12+', label: 'Years Experience' },
              ].map((s, i) => (
                <div key={i} className="card-glass" style={{ padding: '2rem', textAlign: 'center' }}>
                  <div className="hero__stat-value">{s.val}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--clr-muted-2)', marginTop: '0.4rem' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story / Timeline */}
      <section style={{ padding: '5rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-label"><span style={{ color: 'var(--clr-emerald)' }}>📅</span> Our Journey</div>
            <h2 className="section-title">Built Over a <span className="gradient-text">Decade</span></h2>
          </div>
          <div style={{ position: 'relative', maxWidth: '720px', margin: '0 auto' }}>
            <div style={{ position: 'absolute', left: '16px', top: 0, bottom: 0, width: '2px', background: 'linear-gradient(to bottom, #fbbf24, #f59e0b)' }} />
            {timeline.map((t, i) => (
              <div key={i} style={{ display: 'flex', gap: '2rem', marginBottom: '2.5rem', paddingLeft: '3rem', position: 'relative' }}>
                <div style={{ position: 'absolute', left: '7px', top: '6px', width: '18px', height: '18px', background: 'linear-gradient(135deg, #fbbf24, #f59e0b)', borderRadius: '50%', border: '3px solid #fff', boxShadow: '0 0 0 3px rgba(245,158,11,0.2)' }} />
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--clr-emerald)', fontWeight: 700, marginBottom: '0.4rem' }}>{t.year}</div>
                  <p style={{ fontSize: '0.95rem', color: 'var(--clr-muted)', lineHeight: 1.7 }}>{t.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '5rem 0', background: '#fffbeb' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-label"><span style={{ color: 'var(--clr-emerald)' }}>❤️</span> Our Values</div>
            <h2 className="section-title">The Principles That <span className="gradient-text">Drive Us</span></h2>
          </div>
          <div className="grid-cols-3" style={{ gap: '1.5rem' }}>
            {values.map((v, i) => (
              <div key={i} className="card-glass" style={{ padding: '2rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{v.icon}</div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.6rem' }}>{v.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--clr-muted-2)', lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section style={{ padding: '5rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-label"><span style={{ color: 'var(--clr-emerald)' }}>👥</span> Leadership</div>
            <h2 className="section-title">The <span className="gradient-text">Minds</span> Behind Govintek</h2>
          </div>
          <div className="team__grid">
            {team.map((m, i) => (
              <div key={i} className="card-glass team-card" id={`about-team-${i}`}>
                <div className="team-card__avatar">
                  <div className="team-card__avatar-ring" aria-hidden="true" />
                  {m.avatar}
                </div>
                <h3 className="team-card__name">{m.name}</h3>
                <div className="team-card__role">{m.role}</div>
                <p className="team-card__bio">{m.bio}</p>
                <div className="team-card__socials">
                  <a href="#" className="team-card__social" aria-label={`${m.name} LinkedIn`}>in</a>
                  <a href="#" className="team-card__social" aria-label={`${m.name} Twitter`}>𝕏</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 0', background: '#fffbeb' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Ready to Build Together?</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 2rem' }}>Join 50+ companies who trust Govintek with their most important digital products.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">Get in Touch ↗</Link>
            <Link to="/careers" className="btn btn-outline">Join Our Team</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
