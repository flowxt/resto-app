'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-nude-50/95 backdrop-blur-md shadow-lg fixed w-full z-50 top-0 border-b border-nude-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Logo Restaurant"
                width={60}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
          </div>
          
          {/* Menu desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-nude-800 hover:text-chalet-wood px-3 py-2 rounded-md text-sm font-ui font-medium transition-colors">
              Accueil
            </Link>
            <Link href="/restaurant" className="text-nude-800 hover:text-chalet-wood px-3 py-2 rounded-md text-sm font-ui font-medium transition-colors">
              Restaurant
            </Link>
            <Link href="/bar-fromage" className="text-nude-800 hover:text-chalet-wood px-3 py-2 rounded-md text-sm font-ui font-medium transition-colors">
              Bar à Fromage
            </Link>
            <Link href="/boutique" className="text-nude-800 hover:text-chalet-wood px-3 py-2 rounded-md text-sm font-ui font-medium transition-colors">
              Boutique
            </Link>
            <Link href="/reservation" className="bg-chalet-wood hover:bg-nude-800 text-nude-50 px-4 py-2 rounded-md text-sm font-ui font-medium transition-colors shadow-md">
              Réserver
            </Link>
            <Link href="/contact" className="text-nude-800 hover:text-chalet-wood px-3 py-2 rounded-md text-sm font-ui font-medium transition-colors">
              Contact
            </Link>
            <Link href="/admin" className="text-nude-600 hover:text-chalet-wood px-3 py-2 rounded-md text-xs font-ui font-medium transition-colors">
              Admin
            </Link>
          </div>

          {/* Menu mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-nude-800 hover:text-chalet-wood focus:outline-none focus:text-chalet-wood"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menu mobile ouvert */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-nude-50 border-t border-nude-200">
              <Link href="/" className="block text-nude-800 hover:text-chalet-wood px-3 py-2 rounded-md text-base font-ui font-medium">
                Accueil
              </Link>
              <Link href="/restaurant" className="block text-nude-800 hover:text-chalet-wood px-3 py-2 rounded-md text-base font-ui font-medium">
                Restaurant
              </Link>
              <Link href="/bar-fromage" className="block text-nude-800 hover:text-chalet-wood px-3 py-2 rounded-md text-base font-ui font-medium">
                Bar à Fromage
              </Link>
              <Link href="/boutique" className="block text-nude-800 hover:text-chalet-wood px-3 py-2 rounded-md text-base font-ui font-medium">
                Boutique
              </Link>
              <Link href="/reservation" className="block bg-chalet-wood hover:bg-nude-800 text-nude-50 px-3 py-2 rounded-md text-base font-ui font-medium">
                Réserver
              </Link>
              <Link href="/contact" className="block text-nude-800 hover:text-chalet-wood px-3 py-2 rounded-md text-base font-ui font-medium">
                Contact
              </Link>
              <Link href="/admin" className="block text-nude-600 hover:text-chalet-wood px-3 py-2 rounded-md text-sm font-ui font-medium">
                Admin
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
