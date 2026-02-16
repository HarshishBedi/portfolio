import React, { useState } from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { FiMail, FiPhone } from 'react-icons/fi'
import { FadeIn } from './FadeIn'
import './Contact.css'

export function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const form = e.target
    const formData = new FormData(form)

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      })

      if (res.ok) {
        setStatus('success')
        form.reset()
        setTimeout(() => setStatus('idle'), 4000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 4000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

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

            <div className="contact__icons">
              <a href="mailto:harshishsbedi@gmail.com" className="contact__icon" aria-label="Email">
                <FiMail size={22} />
                <span className="contact__icon-tooltip">Email</span>
              </a>
              <a href="tel:+17323222705" className="contact__icon" aria-label="Phone">
                <FiPhone size={22} />
                <span className="contact__icon-tooltip">Phone</span>
              </a>
              <a href="https://github.com/harshishbedi" target="_blank" rel="noopener noreferrer" className="contact__icon" aria-label="GitHub">
                <FaGithub size={22} />
                <span className="contact__icon-tooltip">GitHub</span>
              </a>
              <a href="https://linkedin.com/in/harshishbedi" target="_blank" rel="noopener noreferrer" className="contact__icon" aria-label="LinkedIn">
                <FaLinkedinIn size={22} />
                <span className="contact__icon-tooltip">LinkedIn</span>
              </a>
            </div>
          </FadeIn>

          {/* Right: Form */}
          <FadeIn direction="right" delay={0.25}>
            <div className="contact__form-wrap">
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="contact__form"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don't fill this out: <input name="bot-field" />
                  </label>
                </p>

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

                <button
                  type="submit"
                  className={`contact__submit ${status === 'sending' ? 'contact__submit--sending' : ''} ${status === 'success' ? 'contact__submit--success' : ''} ${status === 'error' ? 'contact__submit--error' : ''}`}
                  disabled={status === 'sending'}
                >
                  {status === 'idle' && (
                    <>
                      Send Message
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </>
                  )}
                  {status === 'sending' && 'Sending...'}
                  {status === 'success' && '✓ Sent!'}
                  {status === 'error' && 'Failed – try again'}
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
