import { type ReactNode, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])

  return (
    <>
      <Navbar />
      <main>{children}</main>
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
