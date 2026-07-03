import { useState } from 'react'

const contactInfo = [
  { icon: '💬', label: 'WhatsApp', value: '+91 74620 85177', href: 'https://wa.me/917462085177' },
  { icon: '📧', label: 'Email', value: 'ritwikr850@gmail.com', href: 'mailto:ritwikr850@gmail.com' },
  { icon: '📍', label: 'Office', value: 'Patna, Bihar, India', href: '#' },
  { icon: '🕐', label: 'Hours', value: 'Mon–Fri, 9am–7pm IST', href: '#' },
]

const services = [
  'Enterprise Web Development',
  'Mobile App Development',
  'UI/UX Design',
  'Cloud & DevOps',
  'AI & Machine Learning',
  'Other / Not Sure',
]

const budgets = [
  'Under $10K',
  '$10K – $25K',
  '$25K – $50K',
  '$50K – $100K',
  '$100K+',
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', budget: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div style={{ paddingTop: '5rem' }}>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #fffbeb 0%, #ffffff 60%)', padding: '4rem 0 3rem', borderBottom: '1px solid rgba(245,158,11,0.1)' }}>
        <div className="container">
          <div className="section-label" style={{ marginBottom: '1.5rem' }}>
            <span style={{ color: 'var(--clr-emerald)' }}>✉</span> Get in Touch
          </div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', maxWidth: '600px' }}>
            Let's Build Something <span className="gradient-text">Great</span>
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '520px' }}>
            Ready to start your next project? Reach out and we'll get back to you within 24 hours with a plan.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section style={{ padding: '5rem 0', background: '#fff' }}>
        <div className="container">
          <div className="grid-cols-1-1-6" style={{ gap: '4rem', alignItems: 'start' }}>
            {/* Left: Info */}
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem' }}>Contact Information</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '3rem' }}>
                {contactInfo.map((c, i) => (
                  <a
                    key={i}
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="card-glass"
                    style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: 'inherit', transition: 'transform 0.2s' }}
                    id={`contact-info-${i}`}
                  >
                    <div style={{ fontSize: '1.5rem', width: '44px', height: '44px', background: 'rgba(245,158,11,0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {c.icon}
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--clr-emerald)', marginBottom: '0.15rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{c.label}</div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--clr-text)' }}>{c.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social */}
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--clr-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Follow Us</div>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  {[{ l: '▶', h: 'https://youtube.com' }, { l: '𝕏', h: 'https://x.com' }, { l: 'in', h: 'https://linkedin.com' }].map((s, i) => (
                    <a key={i} href={s.h} target="_blank" rel="noopener noreferrer" className="footer__brand-social" style={{ width: '42px', height: '42px' }}>
                      {s.l}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="card-glass" style={{ padding: '3rem' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>🎉</div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>Message Received!</h3>
                  <p style={{ color: 'var(--clr-muted-2)', lineHeight: 1.7 }}>
                    Thank you for reaching out. Our team will review your project details and get back to you within 24 business hours.
                  </p>
                  <div className="cta-form__success" style={{ marginTop: '1.5rem' }}>✓ Expect a response by tomorrow</div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="cta-form" style={{ maxWidth: '100%' }}>
                  <h2 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '1.5rem' }}>Tell Us About Your Project</h2>
                  <div className="cta-form__row">
                    <div className="cta-form__group">
                      <label className="cta-form__label">Full Name *</label>
                      <input className="cta-form__input" name="name" required value={form.name} onChange={handleChange} placeholder="John Doe" id="contact-name" />
                    </div>
                    <div className="cta-form__group">
                      <label className="cta-form__label">Email *</label>
                      <input className="cta-form__input" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="john@company.com" id="contact-email" />
                    </div>
                  </div>
                  <div className="cta-form__group">
                    <label className="cta-form__label">Company Name</label>
                    <input className="cta-form__input" name="company" value={form.company} onChange={handleChange} placeholder="Acme Corp" id="contact-company" />
                  </div>
                  <div className="cta-form__row">
                    <div className="cta-form__group">
                      <label className="cta-form__label">Service Needed</label>
                      <select className="cta-form__select" name="service" value={form.service} onChange={handleChange} id="contact-service">
                        <option value="">Select a service…</option>
                        {services.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div className="cta-form__group">
                      <label className="cta-form__label">Budget Range</label>
                      <select className="cta-form__select" name="budget" value={form.budget} onChange={handleChange} id="contact-budget">
                        <option value="">Select budget…</option>
                        {budgets.map(b => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="cta-form__group">
                    <label className="cta-form__label">Project Brief *</label>
                    <textarea className="cta-form__textarea" name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="Tell us about your project goals, timeline, and any specific requirements…" id="contact-message" />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} id="contact-submit">
                    Send Message ↗
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ quick stats strip */}
      <section style={{ padding: '3rem 0', background: '#fffbeb', borderTop: '1px solid rgba(245,158,11,0.1)' }}>
        <div className="container">
          <div className="grid-cols-3" style={{ gap: '2rem', textAlign: 'center' }}>
            {[
              { val: '24h', label: 'Guaranteed Response Time' },
              { val: 'Free', label: 'Initial Consultation' },
              { val: 'NDA', label: 'Signed Before We Start' },
            ].map((s, i) => (
              <div key={i}>
                <div className="hero__stat-value" style={{ fontSize: '2.5rem' }}>{s.val}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--clr-muted-2)', marginTop: '0.4rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
