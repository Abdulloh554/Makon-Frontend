'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import PropertyModal from '@/components/PropertyModal'
import LoadingSpinner from '@/components/ui/LoadingSpinner'

const MapView = dynamic(() => import('@/components/MapView'), { ssr: false })
import { getProperties, useHydrated, syncProperties } from '@/lib/store'
import type { Property } from '@/lib/types'

export default function MapPage() {
  const hydrated = useHydrated()
  useEffect(() => { syncProperties() }, [])
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)
  const properties = hydrated ? getProperties() : []

  if (!hydrated) {
    return <div className="flex-1 flex items-center justify-center"><LoadingSpinner /></div>
  }

  return (
    <div className="flex-1 flex flex-col pb-20 lg:pb-0">
      <MapView properties={properties} onMarkerClick={setSelectedProperty} />
      {selectedProperty && (
        <PropertyModal property={selectedProperty} onClose={() => setSelectedProperty(null)} />
      )}
    </div>
  )
}
