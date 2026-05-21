"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToCalendly = () => {
    const calendlySection = document.getElementById("calendly")
    calendlySection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
<div className="flex items-center gap-2">
  <img 
    src="/logo.png" 
    alt="Zerocode Logo"
    className="h-16 w-auto"
  />
</div>

          {/* CTA Button */}
          <Button
            onClick={scrollToCalendly}
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
          >
            <span className="hidden sm:inline">Agenda tu llamada de diagn&oacute;stico</span>
            <span className="sm:hidden">Agendar llamada</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
