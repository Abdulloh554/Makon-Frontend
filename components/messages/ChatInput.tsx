'use client'

import { Send } from 'lucide-react'
import { motion } from 'framer-motion'

interface ChatInputProps {
  value: string
  onChange: (value: string) => void
  onSend: () => void
  placeholder?: string
}

export default function ChatInput({ value, onChange, onSend, placeholder = 'Xabar yozish...' }: ChatInputProps) {
  return (
    <div className="flex gap-2 py-3 border-t border-gray-100 bg-white">
      <input
        type="text" value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && onSend()}
        placeholder={placeholder}
        className="flex-1 px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
      />
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={onSend}
        disabled={!value.trim()}
        className="p-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 transition-all"
      >
        <Send className="w-5 h-5" />
      </motion.button>
    </div>
  )
}
