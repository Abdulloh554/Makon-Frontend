'use client'

import { useState, useEffect } from 'react'
import { getCurrentUser, register, logout, getPropertiesBySeller, useHydrated, syncProperties } from '@/lib/store'
import PropertyCard from '@/components/PropertyCard'
import PropertyModal from '@/components/PropertyModal'
import PageTransition from '@/components/PageTransition'
import StaggerGrid, { StaggerItem } from '@/components/StaggerGrid'
import LoginForm from '@/components/profile/LoginForm'
import ProfileHeader from '@/components/profile/ProfileHeader'
import EmptyState from '@/components/ui/EmptyState'
import type { User, Property } from '@/lib/types'
import { Home, Plus, Store } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function ProfilePage() {
  const router = useRouter()
  const hydrated = useHydrated()

  useEffect(() => { syncProperties() }, [])

  const [user, setUser] = useState<User | null>(() => {
    if (hydrated) return getCurrentUser()
    return null
  })
  const [showLogin, setShowLogin] = useState(() => {
    if (hydrated) return !getCurrentUser()
    return true
  })
  const [sellerMode, setSellerMode] = useState(false)

  useEffect(() => {
    const u = getCurrentUser()
    setUser(u)
    setShowLogin(!u)
  }, [hydrated])
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)

  function handleLogin() {
    setUser(getCurrentUser())
    setShowLogin(false)
    setSellerMode(false)
  }

  async function handleRegister(name: string, phone: string) {
    const user = await register(name, phone)
    setUser(getCurrentUser())
    setShowLogin(false)
    setSellerMode(false)
    return user
  }

  function handleLogout() {
    logout()
    setUser(null)
    setShowLogin(true)
    setSellerMode(false)
  }

  if (showLogin || !user) {
    if (sellerMode) {
      return (
        <PageTransition>
          <div className="flex-1 flex flex-col items-center justify-center px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const }}
              className="w-full max-w-sm space-y-5"
            >
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-200"
                >
                  <Store className="w-8 h-8 text-white" />
                </motion.div>
                <h1 className="text-xl font-bold text-gray-900">Sotuvchi sifatida ro'yxatdan o'tish</h1>
                <p className="text-sm text-gray-500 mt-1">Elonlaringizni joylashtiring va sotuvni boshlang</p>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSellerMode(false)}
                className="w-full py-2.5 rounded-xl bg-gray-100 text-gray-700 font-medium text-sm hover:bg-gray-200 transition-all"
              >
                Orqaga qaytish
              </motion.button>

              <LoginForm 
                onLogin={handleLogin} 
                onRegister={handleRegister}
                sellerOnly={true}
              />
            </motion.div>
          </div>
        </PageTransition>
      )
    }

    return (
      <PageTransition>
        <div className="flex-1 flex items-center justify-center px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const }}
            className="w-full max-w-sm space-y-3"
          >
            <LoginForm onLogin={handleLogin} onRegister={handleRegister} />

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSellerMode(true)}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold text-sm hover:from-amber-600 hover:to-orange-700 transition-all shadow-lg shadow-amber-200"
            >
              <div className="flex items-center justify-center gap-2">
                <Store className="w-4 h-4" />
                Sotuvchi sifatida ro'yxatdan o'tish
              </div>
            </motion.button>
          </motion.div>
        </div>
      </PageTransition>
    )
  }

  const myProperties = getPropertiesBySeller(user.id)

  return (
    <PageTransition>
      <ProfileHeader user={user} propertyCount={myProperties.length} onLogout={handleLogout} />

      <div className="flex-1 px-4 md:px-6 lg:px-8 pt-4 pb-24 lg:pb-8">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-gray-700">Mening elonlarim</h2>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => router.push('/add')}
            className="flex items-center gap-1 text-xs font-medium text-blue-600 hover:text-blue-700 transition-all"
          >
            <Plus className="w-3.5 h-3.5" />
            Yangi elon
          </motion.button>
        </div>

        {myProperties.length === 0 ? (
          <EmptyState
            icon={<Home className="w-8 h-8 text-gray-300" />}
            title="Hali elonlaringiz yo'q"
            action={{ label: "Birinchi elonni qo'shish", onClick: () => router.push('/add') }}
          />
        ) : (
          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
            {myProperties.map((p) => (
              <StaggerItem key={p.id}>
                <PropertyCard property={p} onClick={() => setSelectedProperty(p)} />
              </StaggerItem>
            ))}
          </StaggerGrid>
        )}
      </div>

      {selectedProperty && (
        <PropertyModal property={selectedProperty} onClose={() => setSelectedProperty(null)} />
      )}
    </PageTransition>
  )
}
