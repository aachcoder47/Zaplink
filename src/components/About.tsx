export default function About() {
  const highlights = [
    {
      title: 'Full-Stack Engineering',
      desc: 'End-to-end development covering frontend interfaces, robust backend APIs, and reliable database structures.',
      icon: '⚙️',
      color: 'rgba(245,158,11,0.12)',
    },
    {
      title: 'Agile Methodology',
      desc: 'Iterative and flexible development cycles to ensure your product adapts to market needs and feedback.',
      icon: '🔄',
      color: 'rgba(245,158,11,0.1)',
    },
    {
      title: 'Performance & Security',
      desc: 'Optimization for lightning-fast load times and rigorous security protocols to protect user data.',
      icon: '🛡️',
      color: 'rgba(245,158,11,0.1)',
    },
  ]

  return (
    <section className="about" id="about" aria-label="About Govintek">
      <div className="container">
        <div className="about__inner">
          {/* Left Column: Interactive Visual */}
          <div className="about__visual">
            <div className="about__chip">
              <div className="about__chip-inner">
                {/* Connecting lines */}
                <div className="about__chip-lines" aria-hidden="true">
                  <div className="about__chip-line" style={{ top: '50%', left: '0', right: '0', height: '1px' }} />
                  <div className="about__chip-line" style={{ left: '50%', top: '0', bottom: '0', width: '1px' }} />
                  <div className="about__chip-line" style={{ top: '25%', left: '10%', right: '10%', height: '1px', opacity: 0.5 }} />
                  <div className="about__chip-line" style={{ top: '75%', left: '10%', right: '10%', height: '1px', opacity: 0.5 }} />
                </div>
                {/* Core */}
                <div className="about__chip-core">
                  G
                </div>
              </div>

              {/* Floating tech badges */}
              <div className="about__chip-badge about__chip-badge--1" id="about-badge-1">
                <span style={{ color: 'var(--clr-emerald)' }}>■</span> Agile Workflows
              </div>
              <div className="about__chip-badge about__chip-badge--2" id="about-badge-2">
                <span style={{ color: 'var(--clr-gold)' }}>■</span> Top-Tier Talent
              </div>
            </div>
          </div>

          {/* Right Column: Bio */}
          <div className="about__content">
            <div className="section-label">
              <span style={{ color: 'var(--clr-emerald)' }}>i</span> Who We Are
            </div>
            <h2 className="section-title">Your Partner in{' '}
              <span className="gradient-text">Digital</span>{' '}
              Transformation
            </h2>
            <p className="section-subtitle" style={{ marginBottom: '1.5rem' }}>
              Govintek was built by a group of passionate technologists and designers dedicated to helping businesses succeed in the digital era.
            </p>
            <p className="section-subtitle" style={{ marginBottom: '2.5rem' }}>
              Today we are a leading IT solutions provider — crafting beautiful web apps, intuitive mobile applications, and scalable backend services for startups and enterprises worldwide.
            </p>

            <div className="about__features">
              {highlights.map((item, i) => (
                <div key={i} className="about__feature" id={`about-feature-${i}`}>
                  <div
                    className="about__feature-icon"
                    style={{ background: item.color }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
