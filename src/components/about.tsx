"use client"

import { CheckCircle, Award, Users } from "lucide-react"

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

  return (
    <section id="nosotros" className="w-full py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <img src="/hardware-store-ferreteria-shelves-professional.jpg" alt="Ferretería Ferresur" className="w-full h-full object-cover" />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">Sobre Ferresur</h2>
            <p className="text-lg text-foreground/80 mb-4">
              Ferresur nació hace más de 20 años en Merlo, brindando asesoramiento técnico y materiales de calidad para
              cada proyecto.
            </p>
            <p className="text-lg text-foreground/80 mb-8">
              Nuestra misión es ser el aliado confiable de contratistas, profesionales y propietarios, ofreciendo
              productos certificados y un equipo especializado listo para guiarte en cada compra.
            </p>

            <div className="space-y-4">
              {highlights.map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="flex gap-4 items-start">
                    <Icon className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-primary mb-1">{item.title}</h3>
                      <p className="text-foreground/70 text-sm">{item.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
