export default function Team() {
  const members = [
    {
      name: 'Ritwik Raj',
      role: 'Key Member & Engineer',
      bio: 'Leading the integration of multidisciplinary engineering and AI solutions.',
      avatar: '👨‍💻',
    }
  ]

  return (
    <section className="team" id="team" aria-label="Govintek Team">
      <div className="container">
        <div className="team__header">
          <div className="section-label">
            <span style={{ color: 'var(--clr-emerald)' }}>👥</span> Brain Trust
          </div>
          <h2 className="section-title">The Engineering Minds</h2>
          <p className="section-subtitle" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            Our strength lies in our multidisciplinary expertise. We combine deep academic research with battle-tested industrial execution.
          </p>
        </div>

        <div className="team__grid">
          {members.map((m, i) => (
            <div key={i} className="card-glass team-card" id={`team-member-${i}`}>
              <div className="team-card__avatar">
                <div className="team-card__avatar-ring" aria-hidden="true" />
                {m.avatar}
              </div>
              <h3 className="team-card__name">{m.name}</h3>
              <div className="team-card__role">{m.role}</div>
              <p className="team-card__bio">{m.bio}</p>
              <div className="team-card__socials">
                <a href="#" className="team-card__social" aria-label={`${m.name}'s LinkedIn`}>
                  in
                </a>
                <a href="#" className="team-card__social" aria-label={`${m.name}'s Github`}>
                  git
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
