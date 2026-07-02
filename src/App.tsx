import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Metrics from './components/Metrics'
import Services from './components/Services'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Tech from './components/Tech'
import Team from './components/Team'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <>
      {/* Premium Header */}
      <Navbar />

      {/* Hero Section with animated particle network */}
      <Hero />

      {/* Continuous Marquee Ticker */}
      <section className="ticker" aria-label="Ticker updates">
        <div className="ticker__track">
          {[...Array(3)].map((_, groupIdx) => (
            <div key={groupIdx} style={{ display: 'flex', gap: '3rem' }}>
              <div className="ticker__item">
                <span className="ticker__item-dot" />
                SYSTEM STATUS: ALL CORE MODULES OPERATIONAL
              </div>
              <div className="ticker__item">
                <span className="ticker__item-dot" />
                NEXT TAPE-OUT: AETHER-5 3NM CHIP DESIGN (Q3 2026)
              </div>
              <div className="ticker__item">
                <span className="ticker__item-dot" />
                ROBOTICS FLEET: 12,000+ CUMULATIVE RUNTIME HOURS
              </div>
              <div className="ticker__item">
                <span className="ticker__item-dot" />
                AI INFERENCE LATENCY: &lt; 1.2ms EDGE INFERENCE
              </div>
              <div className="ticker__item">
                <span className="ticker__item-dot" />
                ISO 9001 &amp; ISO 27001 COMPLIANT LABS
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Animated Metrics Counter Strip */}
      <Metrics />

      {/* Services Showcase */}
      <Services />

      {/* About Section */}
      <About />

      {/* Portfolio Deployments (YouTube Videos) */}
      <Portfolio />

      {/* Tech Stack Grid */}
      <Tech />

      {/* Brain Trust / Team */}
      <Team />

      {/* Call to Action & Contact */}
      <CTA />

      {/* Structured Footer */}
      <Footer />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/917462085177"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
        id="whatsapp-float-btn"
      >
        💬
        <span className="whatsapp-float__tooltip">+91 74620 85177</span>
      </a>
    </>
  )
}

export default App
