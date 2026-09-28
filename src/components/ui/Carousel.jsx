import { Children, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/cn'

/**
 * Carrusel deslizable: swipe en celular, flechas (al pasar el mouse) en desktop y puntos abajo.
 * Cada hijo es una diapositiva. Con un solo hijo se muestra sin controles.
 *
 *   <Carousel label="Fotos de Amuleto">
 *     <Media src="/images/productos/a.webp" />
 *     <Media src="/images/productos/b.webp" />
 *   </Carousel>
 */
export default function Carousel({ label, className, children }) {
  const slides = Children.toArray(children)
  const total = slides.length
  const trackRef = useRef(null)
  const [current, setCurrent] = useState(0)

  if (total <= 1) return <div className={cn('size-full', className)}>{slides}</div>

  const goTo = (index) => {
    const track = trackRef.current
    const target = (index + total) % total // al llegar al final vuelve al inicio
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    track.scrollTo({ left: target * track.clientWidth, behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  // Mantiene el punto activo sincronizado también cuando se desliza con el dedo
  const handleScroll = () => {
    const track = trackRef.current
    setCurrent(Math.round(track.scrollLeft / track.clientWidth))
  }

  return (
    <div
      role="region"
      aria-roledescription="carrusel"
      aria-label={label}
      className={cn('group/carousel relative size-full', className)}
    >
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex size-full snap-x snap-mandatory [scrollbar-width:none] overflow-x-auto overscroll-x-contain [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            role="group"
            aria-roledescription="diapositiva"
            aria-label={`${i + 1} de ${total}`}
            className="size-full shrink-0 snap-center snap-always overflow-hidden"
          >
            {slide}
          </div>
        ))}
      </div>

      <ArrowButton direction="prev" onClick={() => goTo(current - 1)} />
      <ArrowButton direction="next" onClick={() => goTo(current + 1)} />

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-ink/25 px-2 py-1.5 backdrop-blur-sm">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Ver imagen ${i + 1}`}
            aria-current={i === current}
            className={cn(
              'h-1.5 rounded-full transition-all duration-300',
              i === current ? 'w-4 bg-white' : 'w-1.5 bg-white/60 hover:bg-white',
            )}
          />
        ))}
      </div>
    </div>
  )
}

function ArrowButton({ direction, onClick }) {
  const isPrev = direction === 'prev'
  const Icon = isPrev ? ChevronLeft : ChevronRight

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isPrev ? 'Imagen anterior' : 'Imagen siguiente'}
      className={cn(
        'absolute top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-ink shadow-md backdrop-blur transition duration-300 hover:bg-white hover:text-brand-600',
        // En pantallas táctiles se desliza con el dedo, así que las flechas se ocultan
        'opacity-0 group-hover/carousel:opacity-100 focus-visible:opacity-100 pointer-coarse:hidden',
        isPrev ? 'left-3' : 'right-3',
      )}
    >
      <Icon className="size-4" />
    </button>
  )
}
