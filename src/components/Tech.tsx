export default function Tech() {
  const techs = [
    { name: 'React', icon: '⚛️', category: 'Frontend' },
    { name: 'Next.js', icon: '▲', category: 'Framework' },
    { name: 'Node.js', icon: '🟩', category: 'Backend' },
    { name: 'TypeScript', icon: '📘', category: 'Language' },
    { name: 'AWS', icon: '☁️', category: 'Cloud' },
    { name: 'MongoDB', icon: '🍃', category: 'Database' },
    { name: 'PostgreSQL', icon: '🐘', category: 'Database' },
    { name: 'Tailwind CSS', icon: '🌊', category: 'Styling' },
    { name: 'Figma', icon: '🎨', category: 'Design' },
    { name: 'React Native', icon: '📱', category: 'Mobile' },
    { name: 'GraphQL', icon: '🔗', category: 'API' },
    { name: 'Docker', icon: '🐳', category: 'DevOps' },
  ]

  return (
    <section className="tech" id="tech" aria-label="Technology Stack">
      <div className="container">
        <div className="tech__header">
          <div className="section-label">
            <span style={{ color: 'var(--clr-emerald)' }}>■</span> Technology Stack
          </div>
          <h2 className="section-title">Modern Technologies</h2>
          <p className="section-subtitle" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            We leverage industry-leading tools, frameworks, and modern technologies to deliver robust and scalable software solutions.
          </p>
        </div>

        <div className="tech__grid">
          {techs.map((tech, i) => (
            <div key={i} className="card-glass tech-item" id={`tech-item-${i}`}>
              <div className="tech-item__icon" aria-hidden="true">
                {tech.icon}
              </div>
              <div>
                <div className="tech-item__name">{tech.name}</div>
                <div 
                  style={{ 
                    fontFamily: 'var(--font-mono)', 
                    fontSize: '0.62rem', 
                    color: 'var(--clr-emerald)', 
                    textTransform: 'uppercase', 
                    marginTop: '0.2rem',
                    opacity: 0.8
                  }}
                >
                  {tech.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
