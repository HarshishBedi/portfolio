import React, { createContext, useContext } from 'react'
import { siteContent } from './siteContent'

const SiteContext = createContext(null)

export function useSiteContent() {
  const ctx = useContext(SiteContext)
  if (!ctx) {
    throw new Error('useSiteContent must be used within a SiteProvider')
  }
  return ctx
}

// Keep every environment on the versioned repository content. This makes
// production behavior match local development and avoids stale external data.
export function SiteProvider({ children }) {
  return <SiteContext.Provider value={siteContent}>{children}</SiteContext.Provider>
}
