import { useEffect, useRef } from 'react'

interface MetricProps {
  end: number
  suffix: string
  label: string
  sublabel: string
}

function CounterMetric({ end, suffix, label, sublabel }: MetricProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        let start = 0
        const duration = 1800
        const step = (timestamp: number, startTime: number) => {
          const progress = Math.min((timestamp - startTime) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          el.textContent = Math.floor(eased * end) + suffix
          if (progress < 1) requestAnimationFrame(ts => step(ts, startTime))
        }
        requestAnimationFrame(ts => step(ts, ts))
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [end, suffix])

  return (
    <div className="metric-item" aria-label={`${end}${suffix} ${label}`}>
      <div className="metric-item__value" ref={ref}>0{suffix}</div>
      <div className="metric-item__label">{label}</div>
      <div className="metric-item__sublabel">{sublabel}</div>
    </div>
  )
}

export default function Metrics() {
  const metrics = [
    { end: 150, suffix: '+', label: 'Projects Delivered', sublabel: 'across 12 industries' },
    { end: 40, suffix: '+', label: 'Global Clients', sublabel: 'in 18 countries' },
    { end: 98, suffix: '%', label: 'Client Satisfaction', sublabel: 'avg. from post-project surveys' },
    { end: 12, suffix: '', label: 'Patents Filed', sublabel: 'silicon & robotics IP' },
  ]

  return (
    <section className="metrics" id="metrics" aria-label="Govintek key metrics">
      <div className="container">
        <div className="metrics__grid">
          {metrics.map((m, i) => (
            <CounterMetric key={i} {...m} />
          ))}
        </div>
      </div>
    </section>
  )
}
