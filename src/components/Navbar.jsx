import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Navbar.css'
import { siteContent } from '../content/siteContent'
import { PdfModal } from './PdfModal'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [activeResume, setActiveResume] = useState(null)
  const { profile, navbar } = siteContent

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e, id) => {
    e.preventDefault()
    setIsMobileOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navLinks = navbar.links
  const resumeHref = profile.links.resume
  const resumeTitle = navbar.resumeTitle || navbar.resumeButtonLabel || 'Resume'

  const openResume = () => {
    if (!resumeHref) return
    setIsMobileOpen(false)
    setActiveResume({
      title: resumeTitle,
      url: resumeHref,
    })
  }

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a
          href="#"
          className="navbar__logo"
          onClick={(e) => scrollToSection(e, 'app')}
        >
          {profile.logo}
          <span className="navbar__logo-dot">{navbar.logoDot}</span>
        </a>

        {/* Desktop Links */}
        <div className="navbar__links">
          {navLinks.map((link, i) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="navbar__link"
              onClick={(e) => scrollToSection(e, link.id)}
            >
              <span className="navbar__link-num">0{i + 1}</span>
              {link.label}
            </a>
          ))}
          {resumeHref && (
            <button
              type="button"
              className="navbar__resume-btn"
              aria-label={navbar.resumeButtonLabel}
              onClick={openResume}
            >
              {navbar.resumeButtonLabel}
            </button>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className={`navbar__burger ${isMobileOpen ? 'navbar__burger--open' : ''}`}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={navbar.toggleLabel}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.id}
                href={`#${link.id}`}
                className="navbar__mobile-link"
                onClick={(e) => scrollToSection(e, link.id)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="navbar__link-num">0{i + 1}</span>
                {link.label}
              </motion.a>
            ))}
            {resumeHref && (
              <motion.button
                type="button"
                className="navbar__mobile-resume-btn"
                onClick={openResume}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                {navbar.resumeButtonLabel}
              </motion.button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <PdfModal
        pdfDocument={activeResume}
        onClose={() => setActiveResume(null)}
        closeText={navbar.pdfCloseText || 'Close'}
        closeAriaLabel={navbar.pdfCloseAriaLabel || 'Close resume viewer'}
      />
    </nav>
  )
}
