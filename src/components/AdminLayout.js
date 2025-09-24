'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function AdminLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn')
    router.push('/admin')
  }

  const navigation = [
    {
      name: 'Tableau de bord',
      href: '/admin/dashboard',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v0a2 2 0 01-2 2H10a2 2 0 01-2-2v0z" />
        </svg>
      )
    },
    {
      name: 'Réservations',
      href: '/admin/reservations',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      name: 'Statistiques',
      href: '/admin/stats',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      name: 'Paramètres',
      href: '/admin/settings',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ]

  return (
    <div className="min-h-screen bg-nude-100">
      {/* Sidebar pour mobile */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-nude-900 bg-opacity-75" onClick={() => setIsSidebarOpen(false)}></div>
          <div className="relative flex flex-col w-64 h-full bg-nude-50">
            <div className="flex items-center justify-between p-4 border-b border-nude-200">
              <h2 className="font-heading text-lg font-semibold text-nude-900">Administration</h2>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="text-nude-600 hover:text-nude-900"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="flex-1 p-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2 rounded-md text-nude-700 hover:bg-chalet-warm/20 hover:text-chalet-wood transition-colors font-ui"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Sidebar desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-col flex-1 bg-nude-50 border-r border-nude-200">
          {/* Logo */}
          <div className="flex items-center gap-3 p-6 border-b border-nude-200">
            <div className="relative w-8 h-8">
              <Image
                src="/images/logo.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="font-heading text-lg font-semibold text-nude-900">Administration</h2>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <div className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2 rounded-md text-nude-700 hover:bg-chalet-warm/20 hover:text-chalet-wood transition-colors font-ui"
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* Bouton déconnexion */}
          <div className="p-4 border-t border-nude-200">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 w-full px-3 py-2 rounded-md text-red-600 hover:bg-red-50 transition-colors font-ui"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Déconnexion
            </button>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="lg:pl-64">
        {/* Header mobile */}
        <div className="lg:hidden bg-nude-50 border-b border-nude-200 p-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="text-nude-600 hover:text-nude-900"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h1 className="font-heading text-lg font-semibold text-nude-900">Administration</h1>
            <button
              onClick={handleLogout}
              className="text-red-600 hover:text-red-800"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          </div>
        </div>

        {/* Contenu */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
