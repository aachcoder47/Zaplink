import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
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

// Pages
import ServicesPage from './pages/ServicesPage'
import PortfolioPage from './pages/PortfolioPage'
import AboutPage from './pages/AboutPage'
import CareersPage from './pages/CareersPage'
import ContactPage from './pages/ContactPage'
import BlogPage from './pages/BlogPage'

function HomePage() {
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
                ENTERPRISE WEB DEVELOPMENT
              </div>
              <div className="ticker__item">
                <span className="ticker__item-dot" />
                MOBILE APP SOLUTIONS (iOS & ANDROID)
              </div>
              <div className="ticker__item">
                <span className="ticker__item-dot" />
                UI/UX DESIGN & PROTOTYPING
              </div>
              <div className="ticker__item">
                <span className="ticker__item-dot" />
                AI & MACHINE LEARNING INTEGRATION
              </div>
              <div className="ticker__item">
                <span className="ticker__item-dot" />
                ISO 9001 & ISO 27001 CERTIFIED AGENCY
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

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<Layout><ServicesPage /></Layout>} />
      <Route path="/portfolio" element={<Layout><PortfolioPage /></Layout>} />
      <Route path="/about" element={<Layout><AboutPage /></Layout>} />
      <Route path="/careers" element={<Layout><CareersPage /></Layout>} />
      <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
      <Route path="/blog" element={<Layout><BlogPage /></Layout>} />
    </Routes>
  )
}

export default App
