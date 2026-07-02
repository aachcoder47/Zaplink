export default function Testimonials() {
  const reviews = [
    {
      stars: 5,
      quote: "Govintek redesigned our custom MCU core and reduced energy draw by 42%. Their integrated approach to hardware design and micro-kernel AI compilation is unmatched.",
      name: "Dr. Arthur Pendelton",
      company: "Apex Aerospace Solutions",
      avatar: "👨‍🚀",
    },
    {
      stars: 5,
      quote: "The autonomous fleet navigation firmware delivered by Govintek runs flawlessly. Our bots handle chaotic warehouse floors with 99.9% uptime and zero collisions.",
      name: "Miriam Vance",
      company: "Logix Autonomous Supply Chain",
      avatar: "👩‍💼",
    },
    {
      stars: 5,
      quote: "We co-developed a custom Edge-CV chip layout. Govintek handled the synthesis, routing, and tape-out preparation under an extremely aggressive timeline.",
      name: "Hiroshi Sato",
      company: "OmniSight Tech Labs",
      avatar: "👨‍🔬",
    },
  ]

  return (
    <section className="testimonials" id="testimonials" aria-label="Client Testimonials">
      <div className="container">
        <div className="testimonials__header">
          <div className="section-label">
            <span style={{ color: 'var(--clr-gold)' }}>★</span> Social Proof
          </div>
          <h2 className="section-title">
            Trusted by <span className="gradient-text">Tech Pioneers</span>
          </h2>
          <p className="section-subtitle" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            Hear from engineering directors and research executives who have integrated our deep-tech solutions.
          </p>
        </div>

        <div className="testimonials__grid">
          {reviews.map((r, i) => (
            <div key={i} className="card-glass testimonial-card" id={`testimonial-${i}`}>
              <div className="testimonial-card__stars">
                {Array.from({ length: r.stars }).map((_, idx) => (
                  <span key={idx} className="testimonial-card__star">★</span>
                ))}
              </div>
              <div className="testimonial-card__quote">"</div>
              <p className="testimonial-card__text">{r.quote}</p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar" aria-hidden="true">
                  {r.avatar}
                </div>
                <div>
                  <div className="testimonial-card__name">{r.name}</div>
                  <div className="testimonial-card__title">{r.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
