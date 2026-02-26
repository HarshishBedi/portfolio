import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { FiArrowUpRight } from 'react-icons/fi'
import './Hero.css'
import { useSiteContent } from '../content/SiteContext'

import { HeroScene } from './Scene3D'

export function Hero() {
  const { profile, hero } = useSiteContent()
  const socialIconMap = {
    github: FaGithub,
    linkedin: FaLinkedinIn,
    leetcode: SiLeetcode,
  }

  return (
    <section id="hero" className="hero">
      {/* Three.js Background */}
      <div className="hero__canvas">
        <HeroScene />
      </div>

      <div className="container hero__content">
        <motion.div
          className="hero__meta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {hero.roleTags.map((tag, index) => (
            <React.Fragment key={tag}>
              {index > 0 && <span className="hero__tag-divider">&</span>}
              <span className="hero__tag">{tag}</span>
            </React.Fragment>
          ))}
        </motion.div>

        <motion.h1
          className="hero__name"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {profile.firstName}
          <br />
          <span className="hero__name-accent">{profile.lastName}</span>
        </motion.h1>

        <motion.p
          className="hero__desc"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {hero.description}
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {hero.socialButtons.map((button) => {
            const Icon = socialIconMap[button.key]
            const href = profile.links[button.key]
            if (!Icon || !href) return null

            return (
              <a
                key={button.key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hero__btn hero__btn--white hero__btn--icon"
                aria-label={button.label}
                title={button.label}
              >
                <Icon size={18} />
                <span className="hero__btn-tooltip">{button.label}</span>
              </a>
            )
          })}
          <a href="#contact" className="hero__btn hero__btn--accent">
            <FiArrowUpRight size={18} />
            {hero.ctaText}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span>{hero.scrollLabel}</span>
        <div className="hero__scroll-line"></div>
      </motion.div>
    </section>
  )
}
