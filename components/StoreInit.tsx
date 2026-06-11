'use client'

import { useEffect } from 'react'
import { syncProperties, syncSellers, restoreSession } from '@/lib/store'

export default function StoreInit() {
  useEffect(() => {
    restoreSession()
    syncProperties()
    syncSellers()
  }, [])
  return null
}
