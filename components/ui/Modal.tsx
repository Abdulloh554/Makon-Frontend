'use client'

import { useEffect } from 'react'
import { X } from 'lucide-react'

interface ModalProps {
  open: boolean
  onClose: () => void
  children: React.ReactNode
  maxWidth?: string
  showClose?: boolean
}

export default function Modal({
  open,
  onClose,
  children,
  maxWidth = 'max-w-sm',
  showClose = true,
}: ModalProps) {
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div
        className={`bg-white rounded-2xl w-full ${maxWidth} p-6 shadow-2xl animate-scale-in relative`}
      >
        {showClose && (
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-1 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}
        {children}
      </div>
    </div>
  )
}
