import React, { createContext, useContext, useEffect, useState } from 'react'

/**
 * URL of the raw JSON Gist that contains all site content.
 * Update this to your own Gist raw URL after creating the Gist.
 */
const CONTENT_URL =
'https://gist.githubusercontent.com/HarshishBedi/08b0db7df1d30a7072da83c6d45342f2/raw/8d2f86579028c7e8d01051b996231cb5f47f7888/siteContent.json'

const SiteContext = createContext(null)

export function useSiteContent() {
  const ctx = useContext(SiteContext)
  if (!ctx) {
    throw new Error('useSiteContent must be used within a SiteProvider')
  }
  return ctx
}

export function SiteProvider({ fallback, children }) {
  const [content, setContent] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    let cancelled = false

    fetch(CONTENT_URL, { cache: 'no-cache' })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then((data) => {
        if (!cancelled) setContent(data)
      })
      .catch(() => {
        if (!cancelled) setError(true)
      })

    return () => {
      cancelled = true
    }
  }, [])

  // While loading, show the fallback (or the preloader already handles this)
  if (!content && !error) return fallback ?? null
  // On error, fall back to the bundled copy so the site never breaks
  if (error) {
    // Dynamic import of the local fallback
    return <FallbackLoader>{children}</FallbackLoader>
  }

  return <SiteContext.Provider value={content}>{children}</SiteContext.Provider>
}

/**
 * If the remote JSON fails to load, we gracefully fall back
 * to the local bundled siteContent so the site never goes blank.
 */
function FallbackLoader({ children }) {
  const [fallbackContent, setFallbackContent] = useState(null)

  useEffect(() => {
    import('./siteContent.js').then((mod) => {
      setFallbackContent(mod.siteContent)
    })
  }, [])

  if (!fallbackContent) return null

  return (
    <SiteContext.Provider value={fallbackContent}>
      {children}
    </SiteContext.Provider>
  )
}
