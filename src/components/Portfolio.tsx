export default function Portfolio() {
  const videos = [
    { id: 'Sxbg287Ax4M', title: 'Project Showcase 1' },
    { id: 'ZftkeJeTNeM', title: 'Project Showcase 2' },
    { id: 'tij7emQfJM0', title: 'Project Showcase 3' },
  ]

  return (
    <section className="portfolio" id="portfolio" aria-label="Govintek Portfolio">
      <div className="container">
        <div className="portfolio__header">
          <div>
            <div className="section-label">
              <span style={{ color: 'var(--clr-emerald)' }}>✦</span> Case Studies
            </div>
            <h2 className="section-title">Selected Digital Products</h2>
            <p className="section-subtitle" style={{ marginBottom: 0 }}>
              Watch our latest software showcases and product overviews.
            </p>
          </div>
        </div>

        <div 
          className="portfolio__grid" 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem', 
            marginTop: '3rem' 
          }}
        >
          {videos.map((vid, i) => (
            <div 
              key={i} 
              className="card-glass" 
              style={{ 
                padding: 0, 
                overflow: 'hidden', 
                aspectRatio: '16/9',
                borderRadius: 'var(--radius-lg)'
              }}
            >
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${vid.id}`}
                title={vid.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{ display: 'block' }}
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
