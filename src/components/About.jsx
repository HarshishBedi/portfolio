import React from 'react'
import { FadeIn } from './FadeIn'
import './About.css'
import headshot from '../assets/headshot.jpg'
import { siteContent } from '../content/siteContent'
import { SectionAccent3D } from './SectionAccent3D'

function renderBioPart(part, index) {
  if (part.style === 'em') return <em key={index}>{part.text}</em>
  if (part.style === 'strong') return <strong key={index}>{part.text}</strong>
  return <React.Fragment key={index}>{part.text}</React.Fragment>
}

export function About() {
  const { sections, about } = siteContent

  return (
    <section id="about" className="about section">
      <div className="about__ornament" aria-hidden="true">
        <SectionAccent3D variant="about" />
      </div>

      <div className="container">
        <FadeIn>
          <div className="section-label">
            <span className="section-number">{sections.about.number}</span>
            <span className="section-title">{sections.about.title}</span>
            <div className="section-line"></div>
          </div>
        </FadeIn>

        <div className="about__grid">
          {/* Left: Image */}
          <FadeIn direction="left" delay={0.1} className="about__image-col">
            <div className="about__image-wrap">
              <img src={headshot} alt={about.imageAlt} className="about__image" />
            </div>
          </FadeIn>

          {/* Right: Content */}
          <div className="about__content">
            <FadeIn direction="right" delay={0.2}>
              <div className="about__bio-card">
                {about.bioParagraphs.map((paragraph, index) => (
                  <p key={index} className="about__bio">
                    {paragraph.map((part, partIndex) => renderBioPart(part, partIndex))}
                  </p>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.35}>
              <div className="about__edu">
                <h3 className="about__subtitle">{about.educationTitle}</h3>
                {about.education.map((item) => (
                  <div key={item.degree} className="about__edu-item">
                    <div className="about__edu-degree">{item.degree}</div>
                    <div className="about__edu-meta">
                      <span>{item.school}</span>
                      <span className="about__edu-year">{item.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Skills Marquee */}
        <FadeIn delay={0.4}>
          <div className="about__skills">
            <div className="about__marquee">
              <div className="about__marquee-track">
                {[...about.skills, ...about.skills].map((skill, i) => (
                  <span key={i} className="about__skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
