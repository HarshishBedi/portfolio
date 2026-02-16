import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/*
  Reusable scroll-triggered fade-in wrapper.
  
  Props:
  - direction: 'up' | 'down' | 'left' | 'right' (default: 'up')
  - delay: seconds (default: 0)
  - duration: seconds (default: 0.7)
  - distance: pixels (default: 40)
  - className: optional
  - children: content
  - once: boolean (default: true)
*/
export function FadeIn({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  distance = 40,
  className = '',
  once = true,
  ...props
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-80px' })

  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...directions[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

/* Stagger container for groups of FadeIn children */
export function StaggerGroup({ children, className = '', stagger = 0.1 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        visible: {
          transition: { staggerChildren: stagger }
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}
