import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import './PdfModal.css'

export function PdfModal({
  pdfDocument,
  onClose,
  closeText = 'Close',
  closeAriaLabel = 'Close PDF viewer',
}) {
  useEffect(() => {
    if (!pdfDocument) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    window.document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [pdfDocument, onClose])

  if (!pdfDocument) return null

  const modalNode = (
    <div
      className="pdf-modal__overlay"
      role="dialog"
      aria-modal="true"
      aria-label={pdfDocument.title}
      onClick={onClose}
    >
      <div className="pdf-modal__surface" onClick={(event) => event.stopPropagation()}>
        <button
          type="button"
          className="pdf-modal__close"
          onClick={onClose}
          aria-label={closeAriaLabel}
        >
          {closeText}
        </button>

        <iframe
          className="pdf-modal__doc"
          src={`${pdfDocument.url}#page=1&view=Fit&zoom=page-fit&toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0`}
          title={pdfDocument.title}
        />
      </div>
    </div>
  )

  if (typeof window === 'undefined') return null

  return createPortal(modalNode, window.document.body)
}
