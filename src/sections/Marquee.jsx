import { Sparkles } from 'lucide-react'

// Frases de la cinta animada
const words = [
  'Hecho a mano',
  'Por pedido',
  'Piezas únicas',
  'Regalos con alma',
  'Diseño personalizado',
  'Envíos a todo el país',
]

export default function Marquee() {
  // Se duplica la lista para que el loop sea continuo
  const items = [...words, ...words]

  return (
    <div className="overflow-hidden bg-brand-500 py-4 text-white">
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        {items.map((word, i) => (
          <span
            key={i}
            aria-hidden={i >= words.length}
            className="flex items-center gap-6 pr-6 font-display text-xl whitespace-nowrap italic sm:text-2xl"
          >
            {word}
            <Sparkles className="size-4 text-brand-200" />
          </span>
        ))}
      </div>
    </div>
  )
}
