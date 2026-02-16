import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { FiArrowUpRight } from 'react-icons/fi'
import { HeroScene } from './Scene3D'
import './Hero.css'

export function Hero() {
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
          <span className="hero__tag">Machine Learning Engineer</span>
          <span className="hero__tag-divider">&</span>
          <span className="hero__tag">Software Developer</span>
        </motion.div>

        <motion.h1
          className="hero__name"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          Harshish
          <br />
          <span className="hero__name-accent">Singh Bedi</span>
        </motion.h1>

        <motion.p
          className="hero__desc"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Building high-frequency trading parsers, document intelligence systems,
          and scalable ML infrastructure. Currently at Rutgers University.
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a href="https://github.com/harshishbedi" target="_blank" rel="noopener noreferrer" className="hero__btn hero__btn--white">
            <FaGithub size={18} />
            GitHub
          </a>
          <a href="https://leetcode.com/harshishbedi" target="_blank" rel="noopener noreferrer" className="hero__btn hero__btn--white">
            <SiLeetcode size={18} />
            LeetCode
          </a>
          <a href="#contact" className="hero__btn hero__btn--accent">
            <FiArrowUpRight size={18} />
            Get in Touch
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
        <span>Scroll</span>
        <div className="hero__scroll-line"></div>
      </motion.div>
    </section>
  )
}
