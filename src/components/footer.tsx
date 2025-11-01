"use client"

import { Facebook, Instagram, MessageCircle, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    productos: [
      { label: "Herramientas", href: "#productos" },
      { label: "Electricidad", href: "#productos" },
      { label: "Plomería", href: "#productos" },
      { label: "Pintura", href: "#productos" },
    ],
    company: [
      { label: "Inicio", href: "#inicio" },
      { label: "Productos", href: "#productos" },
      { label: "Nosotros", href: "#nosotros" },
      { label: "Contacto", href: "#contacto" },
    ],
    legal: [
      { label: "Términos y Condiciones", href: "#" },
      { label: "Política de Privacidad", href: "#" },
      { label: "Política de Cookies", href: "#" },
    ],
  }

  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "#", color: "hover:text-blue-400" },
    { icon: Instagram, label: "Instagram", href: "#", color: "hover:text-pink-400" },
    { icon: MessageCircle, label: "WhatsApp", href: "#", color: "hover:text-green-400" },
  ]

  return (
    <footer className="w-full bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center animate-pulse">
                  <span className="text-primary font-bold">F</span>
                </div>
                <span className="font-bold text-lg">Ferresur</span>
              </div>
              <p className="text-primary-foreground/80 text-sm mb-4">
                Tu ferretería de confianza en Ituzaingó, brindando calidad y asesoramiento profesional.
              </p>

              <div className="space-y-2 text-sm">
                <div className="flex gap-2 items-center text-primary-foreground/70">
                  <Phone size={16} />
                  <span>+54 11 XXXX-XXXX</span>
                </div>
                <div className="flex gap-2 items-center text-primary-foreground/70">
                  <Mail size={16} />
                  <span>info@ferresur.com.ar</span>
                </div>
                <div className="flex gap-2 items-start text-primary-foreground/70">
                  <MapPin size={16} className="mt-0.5" />
                  <span>Ituzaingó, Buenos Aires</span>
                </div>
              </div>
            </div>

            {/* Productos Links */}
            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Categorías</h4>
              <ul className="space-y-2">
                {footerLinks.productos.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Empresa</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Legal</h4>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
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
            <p>Diseñado con cuidado para profesionales</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
