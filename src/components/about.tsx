"use client"

import { CheckCircle, Award, Users } from "lucide-react"
import { motion, useAnimation, useInView } from "framer-motion"
import { useRef, useEffect } from "react"

export default function About() {
  const highlights = [
    {
      icon: Award,
      title: "Confianza",
      desc: "20 años de trayectoria comprobada",
    },
    {
      icon: CheckCircle,
      title: "Calidad",
      desc: "Productos certificados y garantizados",
    },
    {
      icon: Users,
      title: "Asesoramiento",
      desc: "Equipo especializado y atento",
    },
  ]

  // Referencia para controlar la animación al hacer scroll
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [inView, controls])

  return (
    <section id="nosotros" className="w-full py-20 bg-muted overflow-hidden">
      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Contenido con animaciones por partes */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
            }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">Sobre Ferresur</h2>
            <p className="text-lg text-foreground/80 mb-4">
              Ferresur nació hace más de 20 años en Ituzaingó, brindando asesoramiento técnico y materiales de calidad para
              cada proyecto.
            </p>

            <div className="space-y-4">
              {highlights.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, x: -30 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: index * 0.2 } },
                    }}
                    className="flex gap-4 items-start"
                  >
                    <Icon className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-primary mb-1">{item.title}</h3>
                      <p className="text-foreground/70 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Video con animación desde la derecha */}
          <motion.div
            className="relative h-96 rounded-lg overflow-hidden shadow-lg"
            variants={{
              hidden: { opacity: 0, x: 60 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
            }}
          >
            <video
              src="/video-adentro.webm"
              className="w-full h-full object-cover brightness-90"
              autoPlay
              loop
              muted
              playsInline
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
