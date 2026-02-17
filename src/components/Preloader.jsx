import React, { useEffect, useState } from 'react'
import './Preloader.css'

export function Preloader({ isVisible }) {
  const [shouldRender, setShouldRender] = useState(isVisible)

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true)
      return undefined
    }

    const exitTimer = window.setTimeout(() => {
      setShouldRender(false)
    }, 420)

    return () => window.clearTimeout(exitTimer)
  }, [isVisible])

  if (!shouldRender) return null

  return (
    <div
      className={`preloader ${isVisible ? 'preloader--visible' : 'preloader--exit'}`}
      aria-hidden="true"
    >
      <div className="preloader__core">
        <div className="preloader__line">
          <span className="preloader__line-fill"></span>
        </div>
        <div className="preloader__dot"></div>
      </div>
    </div>
  )
}
