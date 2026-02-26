import React, { useState } from 'react'
import { FadeIn } from './FadeIn'
import { PdfModal } from './PdfModal'
import { SectionAccent3D } from './SectionAccent3D'
import './Experience.css'
import { useSiteContent } from '../content/SiteContext'

function getPursuingTilt(seed, index) {
  const input = `${seed}-${index}`
  let hash = 0

  for (let i = 0; i < input.length; i += 1) {
    hash = ((hash << 5) - hash) + input.charCodeAt(i)
    hash |= 0
  }

  const intensity = 1.1 + (Math.abs(hash) % 180) / 100
  const direction = hash % 2 === 0 ? 1 : -1

  return Number((intensity * direction).toFixed(2))
}

export function Experience() {
  const [activeLetter, setActiveLetter] = useState(null)
  const { sections, experience } = useSiteContent()

  return (
    <section id="experience" className="experience section">
      <div className="experience__ornament" aria-hidden="true">
        <SectionAccent3D variant="experience" />
      </div>

      <div className="container">
        <FadeIn>
          <div className="section-label">
            <span className="section-number">{sections.experience.number}</span>
            <span className="section-title">{sections.experience.title}</span>
            <div className="section-line"></div>
          </div>
        </FadeIn>

        {/* Pursuing — dotted timeline (future) */}
        <div className="exp__timeline exp__timeline--pursuing">
          <div className="exp__timeline-line exp__timeline-line--dotted"></div>

          <FadeIn delay={0.1}>
            <div className="exp__pursuing-label">{experience.pursuingLabel}</div>
          </FadeIn>

          {experience.pursuing.map((item, index) => (
            <FadeIn
              key={index}
              direction={index % 2 === 0 ? 'right' : 'left'}
              delay={0.2 + index * 0.15}
            >
              <div className={`exp__item ${index % 2 === 0 ? 'exp__item--left' : 'exp__item--right'}`}>
                <div className="exp__dot exp__dot--hollow"></div>
                <div
                  className="exp__card exp__card--pursuing"
                  style={{ '--pursuing-tilt': getPursuingTilt(item.goal, index) }}
                >
                  <h3 className="exp__role">{item.goal}</h3>
                  <p className="exp__pursuing-detail">{item.detail}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Experience — solid timeline (present → past) */}
        <div className="exp__timeline">
          <div className="exp__timeline-line"></div>

          <FadeIn delay={0.1}>
            <div className="exp__pursuing-label">{experience.historyLabel}</div>
          </FadeIn>

          {experience.roles.map((exp, index) => (
            <FadeIn
              key={index}
              direction={index % 2 === 0 ? 'right' : 'left'}
              delay={0.1 + index * 0.15}
            >
              <div className={`exp__item ${index % 2 === 0 ? 'exp__item--left' : 'exp__item--right'}`}>
                <div className="exp__dot"></div>
                <div className="exp__card">
                  {exp.letterUrl && (
                    <button
                      type="button"
                      className="exp__letter-sticker"
                      aria-label={`Open recommendation letter for ${exp.company}`}
                      onClick={() =>
                        setActiveLetter({
                          title: exp.letterTitle || exp.role,
                          url: exp.letterUrl
                        })
                      }
                    >
                      <span>{exp.letterStickerText || 'LOR'}</span>
                      <svg
                        className="exp__letter-icon"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M3 9L9 3M9 3H4.5M9 3V7.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  )}
                  <div className="exp__period">{exp.period}</div>
                  <h3 className="exp__role">{exp.role}</h3>
                  <span className="exp__company">{exp.company}</span>
                  <ul className="exp__highlights">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <PdfModal
        pdfDocument={activeLetter}
        onClose={() => setActiveLetter(null)}
        closeText={experience.pdfCloseText}
        closeAriaLabel={experience.pdfCloseAriaLabel}
      />
    </section>
  )
}
