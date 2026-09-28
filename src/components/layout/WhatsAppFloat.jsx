import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '@/lib/whatsapp'

/** Botón flotante de WhatsApp, siempre visible en la esquina inferior. */
export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed right-5 bottom-5 z-40 grid size-14 place-items-center rounded-full bg-brand-500 text-white shadow-xl shadow-brand-500/30 transition duration-300 hover:scale-110 hover:bg-brand-600"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-brand-400 opacity-30 motion-reduce:hidden" />
      <MessageCircle className="relative size-6" />
    </a>
  )
}
