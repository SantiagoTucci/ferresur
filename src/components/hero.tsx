"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return
      const scrollY = window.scrollY
      contentRef.current.style.opacity = Math.max(0, 1 - scrollY / 400).toString()
      contentRef.current.style.transform = `translateY(${scrollY * 0.5}px)`
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="inicio"
      className="min-h-screen w-full flex items-center justify-center bg-background relative overflow-hidden pt-16"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/placeholder.svg?height=1080&width=1920&query=construction%20tools%20hardware%20store)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
        }}
      />

      {/* Content */}
      <div ref={contentRef} className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight text-balance">
          Todo lo que necesitás para tus proyectos, en un solo lugar.
        </h1>

        <p className="text-lg sm:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto text-balance">
          Más de 20 años acompañando tus obras y reparaciones. Calidad, confianza y asesoramiento personalizado.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => scrollToSection("productos")}
            className="bg-accent hover:bg-accent/90 text-accent-foreground h-12 px-8 font-semibold"
          >
            Ver productos
          </Button>
          <Button
            onClick={() => scrollToSection("contacto")}
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary/5 h-12 px-8 font-semibold"
          >
            Contáctanos
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="text-center">
          <p className="text-sm text-foreground/60 mb-2">Desplázate</p>
          <svg className="w-6 h-6 text-accent mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
