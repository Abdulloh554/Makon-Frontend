'use client'

import { motion } from 'framer-motion'
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react'

export type ToastType = 'success' | 'error' | 'info'

export interface ToastItem {
  id: string
  message: string
  type: ToastType
}

interface ToastProps {
  toast: ToastItem
  onDismiss: (id: string) => void
}

const icons: Record<ToastType, React.ReactNode> = {
  success: <CheckCircle className="w-5 h-5 text-green-500" />,
  error: <AlertCircle className="w-5 h-5 text-red-500" />,
  info: <Info className="w-5 h-5 text-blue-500" />,
}

const backgrounds: Record<ToastType, string> = {
  success: '#f0fdf4',
  error: '#fef2f2',
  info: '#E6F1FB',
}

const borders: Record<ToastType, string> = {
  success: '1px solid #bbf7d0',
  error: '1px solid #fecaca',
  info: '1px solid #bfdbfe',
}

export default function Toast({ toast, onDismiss }: ToastProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -30, scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      style={{
        background: backgrounds[toast.type],
        border: borders[toast.type],
        borderRadius: 14,
        padding: '12px 16px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.04)',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        minWidth: 280,
        maxWidth: 420,
        pointerEvents: 'auto',
      }}
    >
      {icons[toast.type]}
      <span className="text-sm font-medium text-gray-800 flex-1">{toast.message}</span>
      <button
        onClick={() => onDismiss(toast.id)}
        className="p-0.5 hover:bg-black/5 rounded-md transition-colors shrink-0"
      >
        <X className="w-4 h-4 text-gray-400" />
      </button>
    </motion.div>
  )
}
