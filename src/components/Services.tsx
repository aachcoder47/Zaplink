export default function Services() {
  const services = [
    {
      no: '01',
      icon: '💻',
      title: 'Enterprise Web Development',
      desc: 'Scalable, secure, and responsive web applications built with modern frameworks to streamline your business operations and drive growth.',
      tags: ['React', 'Next.js', 'Node.js', 'Cloud'],
      color: 'rgba(245,158,11,0.08)',
      iconBg: 'rgba(245,158,11,0.1)',
      iconBorder: 'rgba(245,158,11,0.25)',
      line: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
    },
    {
      no: '02',
      icon: '📱',
      title: 'Mobile App Solutions',
      desc: 'Native and cross-platform mobile experiences designed to engage users on iOS and Android with intuitive interfaces and robust performance.',
      tags: ['iOS', 'Android', 'React Native', 'Flutter'],
      color: 'rgba(245,158,11,0.08)',
      iconBg: 'rgba(245,158,11,0.1)',
      iconBorder: 'rgba(245,158,11,0.25)',
      line: 'linear-gradient(135deg, #f59e0b, #d97706)',
    },
    {
      no: '03',
      icon: '🎨',
      title: 'UI/UX Design',
      desc: 'User-centric design processes that translate complex requirements into beautiful, intuitive, and accessible digital interfaces.',
      tags: ['Figma', 'Prototyping', 'User Research', 'Wireframing'],
      color: 'rgba(245,158,11,0.08)',
      iconBg: 'rgba(245,158,11,0.1)',
      iconBorder: 'rgba(245,158,11,0.25)',
      line: 'linear-gradient(135deg, #fbbf24, #d97706)',
    },
  ]

  return (
    <section className="services" id="services" aria-label="Services section">
      <div className="container">
        <div className="services__header">
          <div className="section-label">
            <span style={{ color: 'var(--clr-emerald)' }}>⚡</span> Our Expertise
          </div>
          <h2 className="section-title">Digital <span className="gradient-text">Excellence</span> Delivered</h2>
          <p className="section-subtitle">
            We transform visionary ideas into robust digital products. Our expert teams deliver end-to-end IT solutions for modern businesses.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, i) => (
            <div
              key={i}
              className="card-glass service-card"
              style={{
                '--card-glow': service.color,
                '--card-line': service.line,
              } as React.CSSProperties}
              id={`service-card-${i}`}
            >
              <div className="service-card__number">{service.no}</div>
              <div
                className="service-card__icon"
                style={{
                  background: service.iconBg,
                  borderColor: service.iconBorder,
                }}
              >
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <div className="service-card__tags">
                {service.tags.map((tag, j) => (
                  <span key={j} className="service-card__tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
