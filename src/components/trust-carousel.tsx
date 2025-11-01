"use client"

import { useEffect, useRef } from "react"

const brands = [
  { name: "Bosch", color: "from-blue-600 to-blue-700" },
  { name: "Stanley", color: "from-yellow-600 to-yellow-700" },
  { name: "Black+Decker", color: "from-red-600 to-red-700" },
  { name: "Makita", color: "from-cyan-600 to-cyan-700" },
  { name: "Philips", color: "from-red-500 to-red-600" },
  { name: "DeWalt", color: "from-yellow-500 to-yellow-600" },
  { name: "Kärcher", color: "from-yellow-400 to-yellow-500" },
  { name: "Metabo", color: "from-green-600 to-green-700" },
]

export default function TrustCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return

    let scrollPosition = 0
    const speed = 1

    const animate = () => {
      scrollPosition += speed
      if (scrollPosition >= scroller.scrollWidth / 2) {
        scrollPosition = 0
      }
      scroller.style.transform = `translateX(-${scrollPosition}px)`
    }

    const interval = setInterval(animate, 20)

    const handleMouseEnter = () => clearInterval(interval)
    const handleMouseLeave = () => {
      scrollPosition = 0
    }

    carouselRef.current?.addEventListener("mouseenter", handleMouseEnter)
    carouselRef.current?.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      clearInterval(interval)
      carouselRef.current?.removeEventListener("mouseenter", handleMouseEnter)
      carouselRef.current?.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <section className="w-full py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-foreground/60 text-sm font-semibold mb-12 uppercase tracking-wider">
          Marcas de confianza
        </h2>

        <div ref={carouselRef} className="overflow-hidden rounded-lg">
          <div
            ref={scrollerRef}
            className="flex gap-8 whitespace-nowrap transition-transform"
            style={{ width: "fit-content" }}
          >
            {[...brands, ...brands].map((brand, index) => (
              <div key={index} className="flex-shrink-0 h-24 w-40 flex items-center justify-center">
                <div
                  className={`w-full h-full flex items-center justify-center rounded-lg bg-gradient-to-br ${brand.color} shadow-md hover:shadow-lg transition-shadow`}
                >
                  <div className="text-center px-4">
                    <span className="text-white font-bold text-lg">{brand.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-12 text-center">
          <div>
            <p className="text-2xl font-bold text-primary">20+</p>
            <p className="text-sm text-foreground/60">años en el mercado</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-primary">50+</p>
            <p className="text-sm text-foreground/60">marcas disponibles</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-primary">10K+</p>
            <p className="text-sm text-foreground/60">clientes satisfechos</p>
          </div>
        </div>
      </div>
    </section>
  )
}
