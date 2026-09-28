import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/cn'

/**
 * Aparece con un fade suave al entrar en pantalla.
 * delay (ms) sirve para escalonar elementos: delay={i * 100}
 * Respeta la preferencia del sistema de "reducir movimiento".
 */
export default function Reveal({ as: Tag = 'div', delay = 0, className, children }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        'transition duration-700 ease-out motion-reduce:transition-none',
        visible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-6 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100',
        className,
      )}
    >
      {children}
    </Tag>
  )
}
