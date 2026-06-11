'use client'

import { motion } from 'framer-motion'

interface EmptyStateProps {
  icon?: React.ReactNode
  title: string
  description?: string
  action?: {
    label: string
    onClick: () => void
  }
  className?: string
}

export default function EmptyState({ icon, title, description, action, className = '' }: EmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className={`flex flex-col items-center justify-center py-24 ${className}`}
    >
      {/* Icon container with floating animation */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="relative mb-5"
      >
        <div
          className="w-20 h-20 rounded-3xl flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #f1f5f9, #e2e8f0)',
            boxShadow: '0 4px 20px rgba(15,23,42,0.07), inset 0 1px 0 rgba(255,255,255,0.8)',
          }}
        >
          <div className="text-slate-300 scale-125">
            {icon}
          </div>
        </div>
        {/* Subtle glow */}
        <div
          className="absolute inset-0 rounded-3xl opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)',
            filter: 'blur(8px)',
          }}
        />
      </motion.div>

      <p className="text-base font-bold text-slate-500 text-center">{title}</p>
      {description && (
        <p className="text-sm text-slate-400 mt-1.5 text-center max-w-xs">{description}</p>
      )}
      {action && (
        <motion.button
          whileHover={{ scale: 1.03, boxShadow: '0 10px 28px rgba(24,95,165,0.30)' }}
          whileTap={{ scale: 0.96 }}
          onClick={action.onClick}
          className="mt-5 px-6 py-2.5 rounded-2xl text-white text-sm font-bold transition-all"
          style={{
            background: 'linear-gradient(135deg, #185FA5, #378ADD)',
            boxShadow: '0 4px 14px rgba(24,95,165,0.22)',
          }}
        >
          {action.label}
        </motion.button>
      )}
    </motion.div>
  )
}
