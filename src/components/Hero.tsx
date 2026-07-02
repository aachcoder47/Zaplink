import { useEffect, useRef } from 'react'

export default function Hero() {
  const stats = [
    { value: '150+', label: 'Projects Delivered' },
    { value: '40+', label: 'Global Clients' },
    { value: '12', label: 'Patents Filed' },
    { value: '98%', label: 'Client Satisfaction' },
  ]

  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number }[] = []
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 1.8 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      })
    }

    let raf: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(52,211,153,${p.alpha})`
        ctx.fill()
      })
      // draw connections
      particles.forEach((p, i) => {
        particles.slice(i + 1).forEach(q => {
          const dist = Math.hypot(p.x - q.x, p.y - q.y)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = `rgba(52,211,153,${0.07 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })
      raf = requestAnimationFrame(animate)
    }
    animate()

    const onResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <section className="hero" id="hero" aria-label="Hero section">
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, opacity: 0.5 }}
        aria-hidden="true"
      />

      {/* Background effects */}
      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />
      <div className="hero__orb hero__orb--3" aria-hidden="true" />
      <div className="hero__orb hero__orb--4" aria-hidden="true" />

      <div className="container">
        <div className="hero__content">
          {/* Badge */}
          <div className="hero__badge" id="hero-badge">
            <span className="hero__badge-dot" aria-hidden="true" />
            Now Accepting Projects — 2026
          </div>

          {/* Title */}
          <h1 className="hero__title">
            Engineering the{' '}
            <span className="gradient-text">Intelligent</span>
            <br />
            Machines of <span className="gradient-text-gold">Tomorrow</span>
          </h1>

          {/* Description */}
          <p className="hero__description">
            <strong style={{ color: 'var(--clr-emerald)', fontWeight: 600 }}>Govintek</strong> is a deep-tech agency at the frontier of{' '}
            <strong style={{ color: 'var(--clr-emerald)', fontWeight: 600 }}>Semiconductors</strong>,{' '}
            <strong style={{ color: 'var(--clr-gold)', fontWeight: 600 }}>Artificial Intelligence</strong>, and{' '}
            <strong style={{ color: 'var(--clr-teal)', fontWeight: 600 }}>Robotics</strong>.
            We build the hardware, intelligence, and machines that define tomorrow.
          </p>

          {/* CTA */}
          <div className="hero__cta">
            <a href="#portfolio" className="btn btn-primary" id="hero-cta-portfolio">
              View Our Work ↗
            </a>
            <a href="#services" className="btn btn-outline" id="hero-cta-services">
              Explore Services
            </a>
            <a
              href="https://wa.me/917462085177"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
              id="hero-cta-whatsapp"
            >
              💬 WhatsApp Us
            </a>
          </div>

          {/* Trust indicators */}
          <div className="hero__trust">
            <div className="hero__trust-item">
              <span className="hero__trust-icon">✓</span> ISO 9001 Certified
            </div>
            <div className="hero__trust-item">
              <span className="hero__trust-icon">✓</span> NDA Protected
            </div>
            <div className="hero__trust-item">
              <span className="hero__trust-icon">✓</span> 24h Response
            </div>
          </div>

          {/* Stats */}
          <div className="hero__stats" id="hero-stats">
            {stats.map((stat, i) => (
              <div key={i} className="hero__stat" id={`hero-stat-${i}`}>
                <div className="hero__stat-value">{stat.value}</div>
                <div className="hero__stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 3D Visual */}
        <div className="hero__visual" aria-hidden="true">
          <HeroVisual />
        </div>
      </div>
    </section>
  )
}

function HeroVisual() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {/* Outer ring */}
      <div style={{
        position: 'absolute',
        width: '480px',
        height: '480px',
        borderRadius: '50%',
        border: '1px solid rgba(52,211,153,0.08)',
        animation: 'spin 20s linear infinite',
      }} />
      {/* Middle ring */}
      <div style={{
        position: 'absolute',
        width: '360px',
        height: '360px',
        borderRadius: '50%',
        border: '1px solid rgba(245,158,11,0.1)',
        animation: 'spin 15s linear infinite reverse',
      }} />
      {/* Inner ring */}
      <div style={{
        position: 'absolute',
        width: '240px',
        height: '240px',
        borderRadius: '50%',
        border: '1px dashed rgba(52,211,153,0.15)',
        animation: 'spin 10s linear infinite',
      }} />

      {/* Center chip */}
      <div style={{
        width: '130px',
        height: '130px',
        background: 'linear-gradient(135deg, rgba(52,211,153,0.14), rgba(245,158,11,0.1))',
        border: '2px solid rgba(52,211,153,0.35)',
        borderRadius: '22px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2.75rem',
        position: 'relative',
        zIndex: 2,
        boxShadow: '0 0 70px rgba(52,211,153,0.2), inset 0 0 30px rgba(52,211,153,0.06)',
        animation: 'core-pulse 3s ease-in-out infinite',
      }}>
        G
      </div>

      {/* Orbiting dots */}
      {[0, 60, 120, 180, 240, 300].map((deg, i) => (
        <div key={i} style={{
          position: 'absolute',
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          background: i % 2 === 0 ? 'var(--clr-emerald)' : 'var(--clr-gold)',
          boxShadow: `0 0 12px ${i % 2 === 0 ? 'var(--clr-emerald)' : 'var(--clr-gold)'}`,
          transform: `rotate(${deg}deg) translateX(180px)`,
          animation: `orbit-${i} 8s linear infinite`,
        }} />
      ))}

      {/* Floating data cards */}
      <div style={{
        position: 'absolute',
        top: '15%',
        right: '-30px',
        background: 'rgba(7,21,16,0.95)',
        border: '1px solid rgba(52,211,153,0.2)',
        borderRadius: '12px',
        padding: '0.75rem 1rem',
        fontSize: '0.78rem',
        fontWeight: 600,
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        animation: 'badge-float 4s ease-in-out infinite',
        whiteSpace: 'nowrap',
      }}>
        <span style={{ color: 'var(--clr-emerald)' }}>▲</span> 4nm ASIC Ready
      </div>
      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '-20px',
        background: 'rgba(7,21,16,0.95)',
        border: '1px solid rgba(245,158,11,0.2)',
        borderRadius: '12px',
        padding: '0.75rem 1rem',
        fontSize: '0.78rem',
        fontWeight: 600,
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        animation: 'badge-float 4s ease-in-out infinite',
        animationDelay: '-2s',
        whiteSpace: 'nowrap',
      }}>
        <span style={{ color: 'var(--clr-gold)' }}>●</span> ROS2 Navigation
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes badge-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </div>
  )
}
