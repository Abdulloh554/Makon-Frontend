'use client'

import { motion } from 'framer-motion'

interface PageHeaderProps {
  title: string
  icon?: React.ReactNode
  subtitle?: string | React.ReactNode
  rightContent?: React.ReactNode
  className?: string
}

export default function PageHeader({ title, icon, subtitle, rightContent, className = '' }: PageHeaderProps) {
  return (
    <div
      className={`px-4 md:px-6 lg:px-8 py-3.5 sticky top-0 z-10 ${className}`}
      style={{
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(24px) saturate(180%)',
        WebkitBackdropFilter: 'blur(24px) saturate(180%)',
        borderBottom: '1px solid rgba(226,232,240,0.7)',
      }}
    >
      <div className="flex items-center gap-2.5">
        {icon && (
          <motion.div
            initial={{ rotate: -12, scale: 0.75, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
          >
            {icon}
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          className="text-lg font-bold text-slate-900 tracking-tight"
        >
          {title}
        </motion.h1>
        {rightContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="ml-auto"
          >
            {rightContent}
          </motion.div>
        )}
      </div>
      {subtitle && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.3 }}
          className="mt-0.5"
        >
          {typeof subtitle === 'string' ? (
            <p className="text-sm text-slate-500">{subtitle}</p>
          ) : (
            subtitle
          )}
        </motion.div>
      )}
    </div>
  )
}
