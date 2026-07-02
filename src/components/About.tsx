export default function About() {
  const highlights = [
    {
      title: 'Heterogeneous Integration',
      desc: 'Merging CMOS logic, photonic communication, and MEMS sensors on a single silicon substrate for maximal efficiency.',
      icon: '🧬',
      color: 'rgba(52,211,153,0.12)',
    },
    {
      title: 'Neuromorphic Architecture',
      desc: 'Designing event-driven analog compute circuits that mimic brain-like plasticity for ultra-low-power inference.',
      icon: '🧠',
      color: 'rgba(245,158,11,0.1)',
    },
    {
      title: 'Kinematic Synthesis & SLAM',
      desc: 'Developing sub-millimeter positioning precision and high-accuracy real-time autonomous mapping for mobile robotics.',
      icon: '🛰',
      color: 'rgba(45,212,191,0.1)',
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
                <span style={{ color: 'var(--clr-emerald)' }}>■</span> 4nm ASIC Design
              </div>
              <div className="about__chip-badge about__chip-badge--2" id="about-badge-2">
                <span style={{ color: 'var(--clr-gold)' }}>■</span> ROS2 Navigation
              </div>
            </div>
          </div>

          {/* Right Column: Bio */}
          <div className="about__content">
            <div className="section-label">
              <span style={{ color: 'var(--clr-emerald)' }}>G</span> Who We Are
            </div>
            <h2 className="section-title">Bridging Silicon,{' '}
              <span className="gradient-text">Cognition</span>,{' '}
              and Kinetic Motion
            </h2>
            <p className="section-subtitle" style={{ marginBottom: '1.5rem' }}>
              Govintek was founded by a group of semiconductor architects and robotics researchers who foresaw the upcoming convergence of high-performance computing and embodied intelligence.
            </p>
            <p className="section-subtitle" style={{ marginBottom: '2.5rem' }}>
              Today we are a premier deep-technology design house — building prototype hardware, custom chip layouts, AI models optimized for edge processors, and advanced robotic solutions for aerospace, industry 4.0, and biomedical sectors.
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
