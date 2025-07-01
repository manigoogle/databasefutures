"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { HomeIcon } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [heroVisibleHeight, setHeroVisibleHeight] = useState(0)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    if (isHomePage) {
      const heroElement = document.getElementById("home-hero-banner")
      if (heroElement) {
        setHeroVisibleHeight(heroElement.offsetHeight * 0.7)
      } else {
        setHeroVisibleHeight(window.innerHeight * 0.7) // Fallback to viewport height percentage
      }
    }
  }, [isHomePage, pathname])

  useEffect(() => {
    const handleScroll = () => {
      if (isHomePage) {
        setIsScrolled(window.scrollY > heroVisibleHeight && heroVisibleHeight > 0)
      } else {
        setIsScrolled(true) // Always "scrolled" style (visible with gradient) on blog pages
      }
    }
    handleScroll() // Initial check
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isHomePage, heroVisibleHeight])

  const headerBaseClasses = "sticky top-0 z-50 transition-all duration-300 ease-in-out"
  const headerBackgroundClasses = "bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 shadow-sm backdrop-blur-sm"
  let headerVisibilityClasses = ""

  if (isHomePage) {
    if (isScrolled) {
      headerVisibilityClasses = "opacity-100 translate-y-0"
    } else {
      // Still apply gradient for smooth transition, but hide it
      headerVisibilityClasses = "opacity-0 -translate-y-full pointer-events-none"
    }
  } else {
    // Blog pages: always visible with gradient background
    headerVisibilityClasses = "opacity-100 translate-y-0"
  }

  const titleBaseClasses =
    "font-serif font-bold text-brand-heading hover:text-brand-accent transition-colors text-center"
  const titleDynamicClasses = isHomePage
    ? isScrolled
      ? "text-xl sm:text-2xl"
      : "text-xl sm:text-2xl" // For layout calculation, though invisible
    : "text-lg sm:text-xl"

  const paddingDynamicClasses = isHomePage
    ? isScrolled
      ? "py-3 sm:py-4"
      : "py-3 sm:py-4" // For layout calculation
    : "py-2 sm:py-3"

  return (
    <header className={`${headerBaseClasses} ${headerBackgroundClasses} ${headerVisibilityClasses}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-300 ease-in-out ${paddingDynamicClasses}`}
        >
          {!isHomePage ? (
            <Link href="/" aria-label="Go to homepage" className="text-brand-heading hover:text-brand-accent">
              <HomeIcon size={22} strokeWidth={2.5} />
            </Link>
          ) : (
            <div style={{ width: 22 }} /> // Placeholder for spacing on homepage to keep title centered
          )}
          <Link href="/" className={`${titleBaseClasses} ${titleDynamicClasses} mx-auto px-2`}>
            Cloud Tech I Thought I Understood
          </Link>
          <div style={{ width: 22 }} /> {/* Placeholder for spacing to balance HomeIcon/empty space */}
        </div>
      </div>
    </header>
  )
}
