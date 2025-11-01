"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

// Array de clientes con logos
const clients = [
  { name: "UCA", logo: "../public/brands/uca.jpg" },
  { name: "Janos", logo: "../public/brands/janos.jpg" },
  { name: "Bosch", logo: "/logos/bosch.png" },
  { name: "Makita", logo: "/logos/makita.png" },
  { name: "Philips", logo: "/logos/philips.png" },
  { name: "DeWalt", logo: "/logos/dewalt.png" },
]

export default function TrustCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [scrollWidth, setScrollWidth] = useState(0)

  // Animación vertical al aparecer
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 })
    }
  }, [inView, controls])

  // Scroll automático infinito
  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return

    let scrollPos = 0
    const speed = 1

    const animate = () => {
      scrollPos += speed
      if (scrollPos >= scroller.scrollWidth / 2) scrollPos = 0
      scroller.style.transform = `translateX(-${scrollPos}px)`
      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <section ref={ref} className="w-full py-26 bg-muted">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-center text-foreground/60 text-sm font-semibold mb-12 uppercase tracking-wider">
          Nuestros clientes confían en nosotros
        </h2>

        {/* Carousel */}
        <div className="overflow-hidden rounded-lg">
          <div
            ref={scrollerRef}
            className="flex gap-8 whitespace-nowrap w-max"
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 h-24 w-40 flex items-center justify-center"
              >
                <div className="w-full h-full flex items-center justify-center rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-16 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 text-center">
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
      </motion.div>
    </section>
  )
}
