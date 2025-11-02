"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Contact() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [isMapLoaded, setIsMapLoaded] = useState(false)
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setIsMapLoaded(true), 500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting && !visibleIndexes.includes(index)) {
            setVisibleIndexes((prev) => [...prev, index])
          }
        })
      },
      {
        threshold: 0.2,
      }
    )

    const elements = containerRef.current?.querySelectorAll(".contact-item")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [visibleIndexes])

  const contactDetails = [
    { icon: MapPin, title: "Dirección", content: "Ituzaingó, Buenos Aires, Argentina" },
    { icon: Phone, title: "Teléfono", content: "+54 11 50988814" },
    { icon: Mail, title: "Email", content: "javiertucci@hotmail.com" },
    { icon: Clock, title: "Horario", content: "Lunes - Sábado: 8:30-13:00 | 15:00-19:00" },
  ]

  return (
    <section id="contacto" className="w-full py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">Contáctanos</h2>
          <p className="text-foreground/70">Estamos disponibles para responder tus preguntas</p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactDetails.map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    data-index={index}
                    className={`contact-item flex gap-4 p-4 bg-background rounded-lg border border-border 
                      transition-all duration-700 ease-out
                      ${visibleIndexes.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                      hover:border-accent`}
                  >
                    <Icon className="w-6 h-6 text-accent flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-primary mb-1">{item.title}</h3>
                      <p className="text-foreground/70 text-sm">{item.content}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Embedded Map */}
          <div
            ref={mapRef}
            className="w-full h-64 rounded-lg overflow-hidden bg-muted border border-border shadow-md"
          >
            {isMapLoaded && (
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.2889449119816!2d-58.6713662!3d-34.6635585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc1b8142bf71d%3A0x9bd5b996324fd41a!2sFerreter%C3%ADa%20Ferresur!5e0!3m2!1ses!2sar!4v1698830000000!5m2!1ses!2sar"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
