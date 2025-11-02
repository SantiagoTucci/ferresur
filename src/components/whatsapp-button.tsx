"use client"

import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  const handleClick = () => {
    window.open("https://wa.me/5491150988814?text=Hola%20Ferresur", "_blank")
  }
  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 animate-float"
      aria-label="Chat en WhatsApp"
    >
      <MessageCircle size={28} />
    </button>
  )
}
