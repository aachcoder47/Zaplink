import React from 'react';

export default function CTA() {
  return (
    <section className="cta-section" id="contact" aria-label="Contact Govintek">
      <div className="container">
        <div className="cta-box" id="contact-container">
          <div className="cta-box__glow" aria-hidden="true" />
          <div className="cta-box__glow-2" aria-hidden="true" />

          <div className="section-label" style={{ margin: '0 auto 1.5rem' }}>
            <span style={{ color: 'var(--clr-emerald)' }}>✉</span> Collaborative Projects
          </div>

          <h2 className="cta-box__title">
            Let's Build the <span className="gradient-text">Future</span>
          </h2>
          <p className="cta-box__sub">
            Ready to design custom silicon, optimize neural models, or deploy automated kinematics? Reach out to our engineering directors.
          </p>

          {/* Direct contact links */}
          <div className="cta-box__contact-links">
            <a
              href="https://wa.me/917462085177"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-box__contact-link"
              id="contact-whatsapp"
            >
              <span>💬</span> WhatsApp: +91 74620 85177
            </a>
            <a
              href="https://www.youtube.com/@Ritwik8908"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-box__contact-link"
              id="contact-youtube"
            >
              <span>▶</span> YouTube Channel
            </a>
            <a
              href="https://x.com/RajRitwik74853"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-box__contact-link"
              id="contact-twitter"
            >
              <span>𝕏</span> Follow on X
            </a>
          </div>

          {/* Typeform CTA button */}
          <a
            href="https://form.typeform.com/to/f0WnDYw2"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            id="contact-typeform"
            style={{ display: 'inline-block', margin: '2.5rem 0' }}
          >
            Start Project Brief
          </a>
        </div>
      </div>
    </section>
  );
}
