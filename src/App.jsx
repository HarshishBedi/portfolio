import React, { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Preloader } from './components/Preloader'
import { SiteProvider } from './content/SiteContext'

function AppShell() {
  const [isReady, setIsReady] = useState(false)
  const [showPostReveal, setShowPostReveal] = useState(false)

  useEffect(() => {
    const startedAt = Date.now()
    let readyTimer

    const markReady = () => {
      const elapsed = Date.now() - startedAt
      const minimumIntroMs = 650
      const delay = Math.max(0, minimumIntroMs - elapsed)

      readyTimer = window.setTimeout(() => {
        setIsReady(true)
      }, delay)
    }

    if (window.document.readyState === 'complete') {
      markReady()
    } else {
      window.addEventListener('load', markReady, { once: true })
    }

    return () => {
      window.removeEventListener('load', markReady)
      if (readyTimer) window.clearTimeout(readyTimer)
    }
  }, [])

  useEffect(() => {
    if (!isReady) {
      window.document.body.style.overflow = 'hidden'
      return () => {
        window.document.body.style.overflow = ''
      }
    }

    window.document.body.style.overflow = ''
    return undefined
  }, [isReady])

  useEffect(() => {
    if (!isReady) return undefined

    const preloaderExitMs = 420
    const revealDurationMs = 900

    const startTimer = window.setTimeout(() => {
      setShowPostReveal(true)
    }, preloaderExitMs)

    const endTimer = window.setTimeout(() => {
      setShowPostReveal(false)
    }, preloaderExitMs + revealDurationMs)

    return () => {
      window.clearTimeout(startTimer)
      window.clearTimeout(endTimer)
    }
  }, [isReady])

  return (
    <>
      <Preloader isVisible={!isReady} />
      {showPostReveal && <div className="app-reveal app-reveal--active" aria-hidden="true"></div>}
      <main id="app" className={`app-shell ${isReady ? 'app-shell--ready' : ''}`}>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

function App() {
  return (
    <SiteProvider fallback={<Preloader isVisible />}>
      <AppShell />
    </SiteProvider>
  )
}

export default App
