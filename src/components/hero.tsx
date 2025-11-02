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
          backgroundImage: "url(/public/hero-image.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(18%)",
        }}
      />

      {/* Content */}
      <div ref={contentRef} className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight text-balance">
          Todo lo que necesitás para tus proyectos, en un solo lugar.
        </h1>

        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto text-balance">
          Más de 20 años acompañando tus obras y reparaciones. Calidad, confianza y asesoramiento personalizado.
        </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection("ambitos")}
              className="bg-accent hover:bg-accent/80 text-accent-foreground h-12 sm:h-14 px-8 font-semibold w-auto inline-flex"
            >
              Ver Categorías
            </Button>
            <Button
              onClick={() =>
                window.open(
                  "https://maps.app.goo.gl/eEuCSr8mWHsP5m7y7",
                  "_blank"
                )
              }
              variant="outline"
              className="text-primary hover:bg-primary/5 h-12 sm:h-14 px-8 font-semibold w-auto inline-flex"
            >
              Cómo llegar
            </Button>
          </div>
      </div>
    </section>
  )
}
