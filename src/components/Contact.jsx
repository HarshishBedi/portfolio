import React, { useState } from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { FiMail, FiPhone } from 'react-icons/fi'
import { FadeIn } from './FadeIn'
import './Contact.css'
import { useSiteContent } from '../content/SiteContext'
import { SectionAccent3D } from './SectionAccent3D'

export function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const { profile, sections, contact } = useSiteContent()
  const channelIconMap = {
    email: FiMail,
    phone: FiPhone,
    github: FaGithub,
    linkedin: FaLinkedinIn,
  }

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
      <div className="contact__ornament" aria-hidden="true">
        <SectionAccent3D variant="contact" />
      </div>

      <div className="container contact__inner">
        <FadeIn>
          <div className="section-label">
            <span className="section-number">{sections.contact.number}</span>
            <span className="section-title">{sections.contact.title}</span>
            <div className="section-line"></div>
          </div>
        </FadeIn>

        <div className="contact__layout">
          {/* Left: CTA */}
          <FadeIn direction="left" delay={0.15}>
            <h2 className="contact__heading">
              <span>{contact.heading.line1}</span>
              <span>{contact.heading.line2}</span>
              <span className="contact__heading-accent">{contact.heading.accent}</span>
            </h2>
            <p className="contact__text">{contact.blurb}</p>

            <div className="contact__icons">
              {contact.channels.map((channel) => {
                const Icon = channelIconMap[channel.key]
                const href = profile.links[channel.key]
                if (!Icon || !href) return null

                const external = channel.key === 'github' || channel.key === 'linkedin'

                return (
                  <a
                    key={channel.key}
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="contact__icon"
                    aria-label={channel.label}
                  >
                    <Icon size={22} />
                    <span className="contact__icon-tooltip">{channel.label}</span>
                  </a>
                )
              })}
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
                    {contact.form.honeypotLabel} <input name="bot-field" />
                  </label>
                </p>

                <div className="contact__field">
                  <label className="contact__label" htmlFor="name">{contact.form.nameLabel}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="contact__input"
                    placeholder={contact.form.namePlaceholder}
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="contact__field">
                  <label className="contact__label" htmlFor="email">{contact.form.emailLabel}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="contact__input"
                    placeholder={contact.form.emailPlaceholder}
                    required
                    autoComplete="email"
                  />
                </div>
                <div className="contact__field">
                  <label className="contact__label" htmlFor="message">{contact.form.messageLabel}</label>
                  <textarea
                    id="message"
                    name="message"
                    className="contact__input contact__textarea"
                    placeholder={contact.form.messagePlaceholder}
                    rows="5"
                    required
                    autoComplete="off"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={`contact__submit ${status === 'sending' ? 'contact__submit--sending' : ''} ${status === 'success' ? 'contact__submit--success' : ''} ${status === 'error' ? 'contact__submit--error' : ''}`}
                  disabled={status === 'sending'}
                >
                  {status === 'idle' && (
                    <>
                      {contact.form.submitIdle}
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </>
                  )}
                  {status === 'sending' && contact.form.submitSending}
                  {status === 'success' && contact.form.submitSuccess}
                  {status === 'error' && contact.form.submitError}
                </button>
              </form>
            </div>
          </FadeIn>
        </div>

        {/* Footer */}
        <FadeIn delay={0.4}>
          <footer className="contact__footer">
            <span>© {new Date().getFullYear()} {profile.fullName}</span>
            <span>{contact.footer.builtWith}</span>
          </footer>
        </FadeIn>
      </div>
    </section>
  )
}
