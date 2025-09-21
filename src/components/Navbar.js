"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl fixed w-full z-50 top-0 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/10 before:to-transparent before:pointer-events-none">
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
          <div className="hidden md:flex items-center space-x-8 relative z-10">
            <Link
              href="/"
              className="text-white hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-ui font-medium transition-all duration-300 hover:bg-white/10"
            >
              Accueil
            </Link>
            <Link
              href="/restaurant"
              className="text-white hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-ui font-medium transition-all duration-300 hover:bg-white/10"
            >
              Restaurant
            </Link>
            <Link
              href="/bar-fromage"
              className="text-white hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-ui font-medium transition-all duration-300 hover:bg-white/10"
            >
              Bar à Fromage
            </Link>
            <Link
              href="/boutique"
              className="text-white hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-ui font-medium transition-all duration-300 hover:bg-white/10"
            >
              Boutique
            </Link>
            <Link
              href="/reservation"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-white px-6 py-2 rounded-full text-sm font-ui font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Réserver
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-ui font-medium transition-all duration-300 hover:bg-white/10"
            >
              Contact
            </Link>
            <Link
              href="/admin"
              className="text-white/70 hover:text-yellow-300 px-3 py-2 rounded-md text-xs font-ui font-medium transition-all duration-300"
            >
              Admin
            </Link>
          </div>

          {/* Menu mobile */}
          <div className="md:hidden flex items-center relative z-10">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-yellow-300 focus:outline-none focus:text-yellow-300 transition-colors duration-300"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menu mobile ouvert avec effet glass */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/10 backdrop-blur-xl border-t border-white/20">
              <Link
                href="/"
                className="block text-white hover:text-yellow-300 hover:bg-white/10 px-3 py-2 rounded-md text-base font-ui font-medium transition-all duration-300"
              >
                Accueil
              </Link>
              <Link
                href="/restaurant"
                className="block text-white hover:text-yellow-300 hover:bg-white/10 px-3 py-2 rounded-md text-base font-ui font-medium transition-all duration-300"
              >
                Restaurant
              </Link>
              <Link
                href="/bar-fromage"
                className="block text-white hover:text-yellow-300 hover:bg-white/10 px-3 py-2 rounded-md text-base font-ui font-medium transition-all duration-300"
              >
                Bar à Fromage
              </Link>
              <Link
                href="/boutique"
                className="block text-white hover:text-yellow-300 hover:bg-white/10 px-3 py-2 rounded-md text-base font-ui font-medium transition-all duration-300"
              >
                Boutique
              </Link>
              <Link
                href="/reservation"
                className="block bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-white px-3 py-2 rounded-md text-base font-ui font-semibold transition-all duration-300"
              >
                Réserver
              </Link>
              <Link
                href="/contact"
                className="block text-white hover:text-yellow-300 hover:bg-white/10 px-3 py-2 rounded-md text-base font-ui font-medium transition-all duration-300"
              >
                Contact
              </Link>
              <Link
                href="/admin"
                className="block text-white/70 hover:text-yellow-300 hover:bg-white/10 px-3 py-2 rounded-md text-sm font-ui font-medium transition-all duration-300"
              >
                Admin
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
