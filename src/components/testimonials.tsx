"use client"

import { Card } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Juan García",
    role: "Contratista",
    image: "/professional-man-portrait.png",
    text: "Ferresur es mi ferretería de confianza. El asesoramiento es impecable y siempre encuentro lo que necesito. Gracias a su equipo, mis proyectos avanzan sin problemas.",
    rating: 5,
  },
  {
    name: "María López",
    role: "Propietaria",
    image: "/professional-woman-portrait.png",
    text: "Excelente atención y calidad de productos. Recomiendo Ferresur a todos mis amigos y colegas. Definitivamente volvería una y otra vez.",
    rating: 5,
  },
  {
    name: "Carlos Mendez",
    role: "Profesional Electricista",
    image: "/electrician-professional-portrait.jpg",
    text: "La mejor ferretería en Merlo. Productos certificados y precios justos. El personal siempre está disponible para responder mis dudas técnicas.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="w-full py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">Opiniones de Clientes</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Lo que dicen nuestros clientes sobre Ferresur.  
            <br />
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 flex flex-col hover:shadow-lg transition-shadow border-0 relative">
              <Quote className="w-5 h-5 text-accent/30 mb-3" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>

              <p className="text-foreground/80 mb-6 text-sm leading-relaxed flex-grow">{testimonial.text}</p>

              <div className="flex gap-3 items-center pt-4 border-t border-border">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="min-w-0">
                  <p className="font-bold text-primary text-sm">{testimonial.name}</p>
                  <p className="text-foreground/60 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Botón adicional para invitar a dejar reviews */}
        <div className="text-center mt-12">
          <a
            href="https://maps.app.goo.gl/eEuCSr8mWHsP5m7y7" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg shadow hover:bg-accent/90 transition"
          >
            Deja tu opinión en Google
          </a>
        </div>
      </div>
    </section>
  )
}
