import React from 'react'
import { FadeIn } from './FadeIn'
import './Contact.css'

export function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container contact__inner">
        <FadeIn>
          <div className="section-label">
            <span className="section-number">04</span>
            <span className="section-title">Contact</span>
            <div className="section-line"></div>
          </div>
        </FadeIn>

        <div className="contact__layout">
          {/* Left: CTA */}
          <FadeIn direction="left" delay={0.15}>
            <h2 className="contact__heading">
              Let's build
              <br />
              something <span className="contact__heading-accent">great</span>
            </h2>
            <p className="contact__text">
              Open to collaborations, research opportunities, and interesting engineering challenges.
              Drop a message or reach out through any of the channels below.
            </p>

            <div className="contact__links">
              <a href="mailto:harshishsbedi@gmail.com" className="contact__link">
                <span className="contact__link-label">Email</span>
                <span className="contact__link-value">harshishsbedi@gmail.com</span>
              </a>
              <a href="https://github.com/harshishbedi" target="_blank" rel="noopener noreferrer" className="contact__link">
                <span className="contact__link-label">GitHub</span>
                <span className="contact__link-value">github.com/harshishbedi</span>
              </a>
              <a href="https://linkedin.com/in/harshishbedi" target="_blank" rel="noopener noreferrer" className="contact__link">
                <span className="contact__link-label">LinkedIn</span>
                <span className="contact__link-value">linkedin.com/in/harshishbedi</span>
              </a>
            </div>
          </FadeIn>

          {/* Right: Form */}
          <FadeIn direction="right" delay={0.25}>
            <div className="contact__form-wrap">
              <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="contact__form">
                <div className="contact__field">
                  <label className="contact__label" htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="contact__input"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="contact__field">
                  <label className="contact__label" htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="contact__input"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div className="contact__field">
                  <label className="contact__label" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="contact__input contact__textarea"
                    placeholder="Tell me about your project..."
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="contact__submit">
                  Send Message
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
            </div>
          </FadeIn>
        </div>

        {/* Footer */}
        <FadeIn delay={0.4}>
          <footer className="contact__footer">
            <span>© {new Date().getFullYear()} Harshish Bedi</span>
            <span>Built with React + Three.js</span>
          </footer>
        </FadeIn>
      </div>
    </section>
  )
}
