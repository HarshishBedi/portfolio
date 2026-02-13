import React from 'react'
import './Hero.css'

export function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-grid-overlay"></div>
      <div className="container hero-container">
        <div className="hero-meta">
          <span className="meta-item">STATUS: ONLINE</span>
          <span className="meta-item">LOC: NJ, USA</span>
          <span className="meta-item">ROLE: MLE</span>
        </div>
        
        <div className="hero-main">
          <h1 className="hero-title">
            HARSHISH<br />
            SINGH BEDI
          </h1>
          <div className="hero-divider"></div>
          <p className="hero-subtitle">
            Engineer specialized in Machine Learning and Scalable Systems.
            Building high-frequency trading parsers and document intelligence.
          </p>
        </div>

        <div className="hero-footer-actions">
          <a href="#projects" className="action-link">
            [ VIEW_WORK ]
          </a>
          <a href="#contact" className="action-link">
            [ CONTACT_ME ]
          </a>
        </div>
      </div>
    </section>
  )
}
