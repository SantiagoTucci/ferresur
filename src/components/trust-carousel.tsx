"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useInView, useMotionValue, useTransform, animate } from "framer-motion"

// Array de clientes con logos
const clients = [
  { name: "UCA", logo: "/brands/uca.webp" },
  { name: "Janos", logo: "/brands/janos.webp" },
  { name: "CAI", logo: "/brands/cai.webp" },
  { name: "Sanitarios Alvarez", logo: "/brands/sanitarios-alvarez.webp" },
  { name: "CAAI", logo: "/brands/caai.webp" },
  { name: "GEI Ituzaingó", logo: "/brands/gei.webp" },
]

export default function TrustCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null)

  // Animación de entrada
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0 })
  }, [inView, controls])

  // Scroll automático infinito
  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return

    let scrollPos = 0
    const speed = 1

    const animateScroll = () => {
      scrollPos += speed
      if (scrollPos >= scroller.scrollWidth / 2) scrollPos = 0
      scroller.style.transform = `translateX(-${scrollPos}px)`
      requestAnimationFrame(animateScroll)
    }

    animateScroll()
  }, [])

  // --- Animación de números ---
  const AnimatedNumber = ({
    from,
    to,
    suffix = "",
  }: {
    from: number
    to: number
    suffix?: string
  }) => {
    const motionValue = useMotionValue(from)
    const rounded = useTransform(motionValue, (latest) => Math.floor(latest))
    const [display, setDisplay] = useState(from)

    useEffect(() => {
      const controls = animate(motionValue, to, {
        duration: 2,
        ease: "easeOut",
      })

      const unsubscribe = rounded.on("change", (v) => setDisplay(v))
      return () => {
        unsubscribe()
        controls.stop()
      }
    }, [to])

    return (
      <span>
        {display}
        {suffix}
      </span>
    )
  }

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
          <div ref={scrollerRef} className="flex gap-8 whitespace-nowrap w-max">
            {[...clients, ...clients].map((client, index) => (
              <div key={index} className="flex-shrink-0 h-24 w-40 flex items-center justify-center p-1">
                <div className="w-full h-full flex items-center justify-center rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
                  <img src={client.logo} alt={client.name} className="max-h-16 object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats con animación */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 text-center">
          <div className="flex flex-col items-center">
            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2">
              {inView && <AnimatedNumber from={0} to={11} suffix="+" />}
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-foreground/70 font-medium">
              años en el mercado
            </p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2">
              {inView && <AnimatedNumber from={0} to={50} suffix="+" />}
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-foreground/70 font-medium">
              marcas disponibles
            </p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2">
              {inView && <AnimatedNumber from={0} to={8000} suffix="+" />}
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-foreground/70 font-medium">
              clientes satisfechos
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
