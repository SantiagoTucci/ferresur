"use client"

import { useEffect, useRef, useState } from "react"
import { Facebook, MessageCircle, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const socialLinks = [
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=100078710022533",
      color: "hover:text-blue-400",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/5491150988814",
      color: "hover:text-green-400",
    },
  ]

  return (
    <footer
      ref={containerRef}
      className={`w-full bg-primary text-primary-foreground transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
    >
      {/* Main Footer Content */}
      <div className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <span className="font-bold text-lg">Ferresur</span>
              </div>
              <p className="text-primary-foreground/80 text-sm mb-4">
                Tu ferretería de confianza en Ituzaingó, brindando calidad y asesoramiento profesional.
              </p>
            </div>

            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <span className="font-bold text-lg">Nuestros datos</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex gap-2 items-center text-primary-foreground/70">
                  <Phone size={16} />
                  <span>+54 11 50988814</span>
                </div>
                <div className="flex gap-2 items-center text-primary-foreground/70">
                  <Mail size={16} />
                  <span>javiertucci@hotmail.com</span>
                </div>
                <div className="flex gap-2 items-start text-primary-foreground/70">
                  <MapPin size={16} className="mt-0.5" />
                  <span>Ituzaingó, Buenos Aires</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Síguenos</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 bg-accent/20 hover:bg-accent/30 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color}`}
                      aria-label={social.label}
                      title={social.label}
                    >
                      <Icon size={20} />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-primary-foreground/70 text-sm">
            <p>© {currentYear} Ferresur. Todos los derechos reservados.</p>
            <p>
              Diseñado por{" "}
              <a
                href="https://www.instagram.com/tucciwebstudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Tucciwebstudio
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
