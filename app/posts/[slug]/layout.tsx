"use client"
import { useEffect } from "react"
import type React from "react"

import { usePathname } from "next/navigation"

// Component to force scroll to top on route change for this layout
function ScrollToTopOnMount() {
  const pathname = usePathname()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function PostLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollToTopOnMount />
      {children}
    </>
  )
}
