"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Fonction pour vérifier si un lien est actif
  const isActiveLink = (href) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  // Détecter le scroll pour adapter la navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 top-0 transition-all duration-500 ease-in-out ${
        scrolled
          ? "backdrop-blur-xl bg-white/10 border-b border-white/20 shadow-2xl"
          : "backdrop-blur-lg bg-white/5 border-b border-white/10 shadow-xl"
      }`}
      style={{
        background: scrolled
          ? "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.2) 100%)"
          : "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0.1) 100%)",
        boxShadow: scrolled
          ? "0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.2)"
          : "0 4px 24px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex-shrink-0 hover:scale-105 transition-transform duration-300"
            >
              <Image
                src="/images/logo.png"
                alt="Logo Restaurant"
                width={60}
                height={60}
                className="h-12 w-auto drop-shadow-lg"
              />
            </Link>
          </div>

          {/* Menu desktop */}
          <div className="hidden md:flex items-center space-x-2">
            <Link
              href="/"
              className="group relative px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 hover:scale-105"
              style={{
                textShadow:
                  "2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.6)",
                background: isActiveLink("/")
                  ? "rgba(139,69,19,0.3)"
                  : "rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
                border: isActiveLink("/")
                  ? "1px solid rgba(205,133,63,0.6)"
                  : "1px solid rgba(255,255,255,0.1)",
                color: isActiveLink("/") ? "#D2B48C" : "white",
              }}
            >
              <span className="relative z-10 group-hover:text-amber-200 transition-colors duration-300">
                Accueil
              </span>
            </Link>

            <Link
              href="/restaurant"
              className="group relative px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 hover:scale-105"
              style={{
                textShadow:
                  "2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.6)",
                background: isActiveLink("/restaurant")
                  ? "rgba(139,69,19,0.3)"
                  : "rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
                border: isActiveLink("/restaurant")
                  ? "1px solid rgba(205,133,63,0.6)"
                  : "1px solid rgba(255,255,255,0.1)",
                color: isActiveLink("/restaurant") ? "#D2B48C" : "white",
              }}
            >
              <span className="relative z-10 group-hover:text-amber-200 transition-colors duration-300">
                Restaurant
              </span>
            </Link>

            <Link
              href="/bar-fromage"
              className="group relative px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 hover:scale-105"
              style={{
                textShadow:
                  "2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.6)",
                background: isActiveLink("/bar-fromage")
                  ? "rgba(139,69,19,0.3)"
                  : "rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
                border: isActiveLink("/bar-fromage")
                  ? "1px solid rgba(205,133,63,0.6)"
                  : "1px solid rgba(255,255,255,0.1)",
                color: isActiveLink("/bar-fromage") ? "#D2B48C" : "white",
              }}
            >
              <span className="relative z-10 group-hover:text-amber-200 transition-colors duration-300">
                Bar à Fromage
              </span>
            </Link>

            <Link
              href="/boutique"
              className="group relative px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 hover:scale-105"
              style={{
                textShadow:
                  "2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.6)",
                background: isActiveLink("/boutique")
                  ? "rgba(139,69,19,0.3)"
                  : "rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
                border: isActiveLink("/boutique")
                  ? "1px solid rgba(205,133,63,0.6)"
                  : "1px solid rgba(255,255,255,0.1)",
                color: isActiveLink("/boutique") ? "#D2B48C" : "white",
              }}
            >
              <span className="relative z-10 group-hover:text-amber-200 transition-colors duration-300">
                Boutique
              </span>
            </Link>

            <Link
              href="/contact"
              className="group relative px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 hover:scale-105"
              style={{
                textShadow:
                  "2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.6)",
                background: isActiveLink("/contact")
                  ? "rgba(139,69,19,0.3)"
                  : "rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
                border: isActiveLink("/contact")
                  ? "1px solid rgba(205,133,63,0.6)"
                  : "1px solid rgba(255,255,255,0.1)",
                color: isActiveLink("/contact") ? "#D2B48C" : "white",
              }}
            >
              <span className="relative z-10 group-hover:text-amber-200 transition-colors duration-300">
                Contact
              </span>
            </Link>

            {/* Bouton Réserver premium */}
            <Link
              href="/reservation"
              className="group relative ml-4 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
              style={{
                background:
                  "linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)",
                boxShadow:
                  "0 4px 20px rgba(251,191,36,0.4), inset 0 1px 0 rgba(255,255,255,0.2)",
                textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <span className="text-black font-bold">Réserver</span>
            </Link>

            {/* Admin discret */}
            <Link
              href="/admin"
              className="group relative ml-2 px-3 py-2 rounded-lg text-white/60 font-medium text-xs transition-all duration-300 hover:text-white/80"
              style={{
                textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              Admin
            </Link>
          </div>

          {/* Menu mobile button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-full text-white transition-all duration-300 hover:scale-110"
              style={{
                textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
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

        {/* Menu mobile */}
        {isOpen && (
          <div className="md:hidden">
            <div
              className="py-4 space-y-2"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 100%)",
                backdropFilter: "blur(20px)",
                borderTop: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <Link
                href="/"
                className="block px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                style={{
                  textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                  background: isActiveLink("/")
                    ? "rgba(139,69,19,0.3)"
                    : "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                  border: isActiveLink("/")
                    ? "1px solid rgba(205,133,63,0.6)"
                    : "1px solid rgba(255,255,255,0.1)",
                  margin: "0 1rem",
                  color: isActiveLink("/") ? "#D2B48C" : "white",
                }}
                onClick={() => setIsOpen(false)}
              >
                Accueil
              </Link>

              <Link
                href="/restaurant"
                className="block px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                style={{
                  textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                  background: isActiveLink("/restaurant")
                    ? "rgba(139,69,19,0.3)"
                    : "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                  border: isActiveLink("/restaurant")
                    ? "1px solid rgba(205,133,63,0.6)"
                    : "1px solid rgba(255,255,255,0.1)",
                  margin: "0 1rem",
                  color: isActiveLink("/restaurant") ? "#D2B48C" : "white",
                }}
                onClick={() => setIsOpen(false)}
              >
                Restaurant
              </Link>

              <Link
                href="/bar-fromage"
                className="block px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                style={{
                  textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                  background: isActiveLink("/bar-fromage")
                    ? "rgba(139,69,19,0.3)"
                    : "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                  border: isActiveLink("/bar-fromage")
                    ? "1px solid rgba(205,133,63,0.6)"
                    : "1px solid rgba(255,255,255,0.1)",
                  margin: "0 1rem",
                  color: isActiveLink("/bar-fromage") ? "#D2B48C" : "white",
                }}
                onClick={() => setIsOpen(false)}
              >
                Bar à Fromage
              </Link>

              <Link
                href="/boutique"
                className="block px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                style={{
                  textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                  background: isActiveLink("/boutique")
                    ? "rgba(139,69,19,0.3)"
                    : "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                  border: isActiveLink("/boutique")
                    ? "1px solid rgba(205,133,63,0.6)"
                    : "1px solid rgba(255,255,255,0.1)",
                  margin: "0 1rem",
                  color: isActiveLink("/boutique") ? "#D2B48C" : "white",
                }}
                onClick={() => setIsOpen(false)}
              >
                Boutique
              </Link>

              <Link
                href="/contact"
                className="block px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                style={{
                  textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                  background: isActiveLink("/contact")
                    ? "rgba(139,69,19,0.3)"
                    : "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                  border: isActiveLink("/contact")
                    ? "1px solid rgba(205,133,63,0.6)"
                    : "1px solid rgba(255,255,255,0.1)",
                  margin: "0 1rem",
                  color: isActiveLink("/contact") ? "#D2B48C" : "white",
                }}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              {/* Bouton Réserver mobile */}
              <Link
                href="/reservation"
                className="block mx-4 mt-4 px-6 py-4 rounded-full font-bold text-center transition-all duration-300 hover:scale-105"
                style={{
                  background:
                    "linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)",
                  boxShadow: "0 4px 20px rgba(251,191,36,0.4)",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
                onClick={() => setIsOpen(false)}
              >
                <span className="text-black font-bold">Réserver une place</span>
              </Link>

              {/* Admin mobile */}
              <Link
                href="/admin"
                className="block px-4 py-2 text-center text-white/60 font-medium text-xs border-t border-white/10 mt-4 pt-4"
                style={{
                  textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                }}
                onClick={() => setIsOpen(false)}
              >
                Administration
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
