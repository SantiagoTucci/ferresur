"use client"

import { Card } from "@/components/ui/card"
import { motion, useAnimation, useInView } from "framer-motion"
import { useRef, useEffect } from "react"

const workAreas = [
  {
    id: 1,
    name: "Herramientas y Construcción",
    image: "/herramientas-construccion.webp",
    description: "Proveemos herramientas de alta calidad para todo tipo de proyectos de construcción y bricolaje.",
  },
  {
    id: 2,
    name: "Electricidad",
    image: "/public/electricidad.webp",
    description: "Materiales eléctricos certificados y asesoramiento profesional para instalaciones seguras.",
  },
  {
    id: 3,
    name: "Plomería",
    image: "/plomeria.webp",
    description: "Suministros de plomería para obras nuevas o reparaciones, con garantía de calidad.",
  },
  {
    id: 4,
    name: "Pintura y Decoración",
    image: "/pintura-decoracion.webp",
    description: "Pinturas y accesorios para proyectos de decoración y renovación de espacios.",
  },
  {
    id: 5,
    name: "Jardinería",
    image: "/jardineria.webp",
    description: "Herramientas y materiales para el cuidado y mantenimiento de jardines y espacios verdes.",
  },
  {
    id: 6,
    name: "Seguridad y Protección",
    image: "/seguridad.webp",
    description: "Equipamiento y herramientas para garantizar la seguridad en obras y proyectos, cumpliendo normas vigentes.",
  },
]

function AnimatedCard({ area }: { area: any }) {
  const ref = useRef(null)
  const controls = useAnimation()
  const inView = useInView(ref, { once: false, margin: "-100px" })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [inView, controls])

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Card className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer border-0">
        <div className="relative overflow-hidden h-50 md:h-64 bg-muted">
          <img
            src={area.image || "/placeholder.svg"}
            alt={area.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-bold text-primary mb-2">{area.name}</h3>
          <p className="text-foreground/70 text-sm">{area.description}</p>
        </div>
      </Card>
    </motion.div>
  )
}

export default function WorkAreas() {
  return (
    <section id="ambitos" className="w-full py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">Ámbitos en los que trabajamos</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Descubre los diferentes ámbitos en los que Ferresur ofrece sus productos y servicios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workAreas.map((area) => (
            <AnimatedCard key={area.id} area={area} />
          ))}
        </div>
      </div>
    </section>
  )
}
