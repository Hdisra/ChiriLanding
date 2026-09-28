import { useEffect, useState } from 'react'
import { cn } from '@/lib/cn'
import Media from './Media'

/**
 * Presentación automática: las imágenes se van cambiando con un fundido suave.
 * images: [{ src, alt }]   interval: milisegundos entre cada imagen
 * Si el sistema pide "reducir movimiento", se queda fija en la primera.
 */
export default function Slideshow({ images, interval = 4000, label, className }) {
  const [current, setCurrent] = useState(0)
  const total = images.length

  useEffect(() => {
    if (total <= 1) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const timer = setInterval(() => setCurrent((i) => (i + 1) % total), interval)
    return () => clearInterval(timer)
  }, [total, interval])

  if (total === 0) return <Media label={label} className={className} />

  return (
    <div className={cn('relative size-full', className)}>
      {images.map(({ src, alt }, i) => (
        <Media
          key={src}
          src={src}
          alt={alt}
          loading={i === 0 ? 'eager' : 'lazy'}
          aria-hidden={i !== current}
          className={cn(
            'absolute inset-0 transition-opacity duration-1000 ease-in-out',
            i === current ? 'opacity-100' : 'opacity-0',
          )}
        />
      ))}
    </div>
  )
}
