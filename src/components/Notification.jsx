import React, { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiArrowUpRight } from 'react-icons/fi'
import { useSiteContent } from '../content/SiteContext'
import './Notification.css'

const STORAGE_KEY = 'career-announce-dismissed-v1'
const CONFETTI_COLORS = ['#4285F4', '#EA4335', '#FBBC04', '#34A853']

function Confetti() {
  const pieces = useMemo(
    () =>
      Array.from({ length: 150 }, (_, i) => {
        const size = 7 + Math.random() * 9
        return {
          id: i,
          left: Math.random() * 100, // vw
          size,
          color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
          isCircle: Math.random() > 0.55,
          sway: (Math.random() * 2 - 1) * 80, // horizontal drift in px
          spin: (Math.random() > 0.5 ? 1 : -1) * (360 + Math.random() * 540),
          duration: 2.6 + Math.random() * 2.8,
          delay: Math.random() * 3.5,
        }
      }),
    []
  )

  return (
    <div className="announce__confetti" aria-hidden="true">
      {pieces.map((p) => (
        <motion.span
          key={p.id}
          className="announce__confetti-piece"
          style={{
            left: `${p.left}vw`,
            width: p.size,
            height: p.isCircle ? p.size : p.size * 0.5,
            borderRadius: p.isCircle ? '50%' : '1px',
            background: p.color,
          }}
          initial={{ y: '-12vh', x: 0, opacity: 0, rotate: 0 }}
          animate={{
            y: '114vh',
            x: [0, p.sway, -p.sway * 0.5, p.sway * 0.3, 0],
            rotate: p.spin,
            opacity: [0, 1, 1, 1, 0.85],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}

export function Notification({ onResolved }) {
  const { notification } = useSiteContent()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Signal "resolved" right away if there's nothing to show or it was already
    // dismissed this session — so anything waiting on it (the hero hat) proceeds.
    if (!notification) {
      onResolved?.()
      return undefined
    }
    try {
      if (window.sessionStorage.getItem(STORAGE_KEY)) {
        onResolved?.()
        return undefined
      }
    } catch {
      /* storage unavailable — show anyway */
    }
    const timer = window.setTimeout(() => setIsVisible(true), 900)
    return () => window.clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notification])

  const close = () => {
    setIsVisible(false)
    try {
      window.sessionStorage.setItem(STORAGE_KEY, '1')
    } catch {
      /* ignore */
    }
    onResolved?.()
  }

  useEffect(() => {
    if (!isVisible) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') close()
    }
    window.document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      window.document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [isVisible])

  if (!notification) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="announce"
          role="dialog"
          aria-modal="true"
          aria-label={notification.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          onClick={close}
        >
          <Confetti />

          <motion.div
            className="announce__card"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 40, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 240, damping: 22 }}
          >
            <div className="announce__inner">
            <span className="announce__shine" aria-hidden="true" />

            <button
              type="button"
              className="announce__close"
              onClick={close}
              aria-label="Dismiss"
            >
              <FiX size={18} />
            </button>

            <motion.span
              className="announce__icon"
              initial={{ scale: 0, rotate: -30 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 14, delay: 0.15 }}
            >
              <span className="announce__icon-ring" aria-hidden="true" />
              <img
                src="/assets/Google_Favicon_2025.svg.png"
                alt="Google"
                className="announce__icon-img"
                width={40}
                height={40}
              />
            </motion.span>

            <motion.span
              className="announce__eyebrow"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
            >
              Big news
            </motion.span>

            <motion.h2
              className="announce__title"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              {notification.title}
            </motion.h2>

            <motion.p
              className="announce__text"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.52, duration: 0.55 }}
            >
              {notification.expandedBody || notification.body}
            </motion.p>

            <motion.div
              className="announce__dots"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.5 }}
            >
              <span className="announce__dot" style={{ background: '#4285F4' }} />
              <span className="announce__dot" style={{ background: '#EA4335' }} />
              <span className="announce__dot" style={{ background: '#FBBC04' }} />
              <span className="announce__dot" style={{ background: '#34A853' }} />
            </motion.div>

            <motion.div
              className="announce__actions"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.72, duration: 0.5 }}
            >
              {notification.cta?.href && (
                <a
                  className="announce__btn announce__btn--primary"
                  href={notification.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {notification.cta.label}
                  <FiArrowUpRight size={16} />
                </a>
              )}
            </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
