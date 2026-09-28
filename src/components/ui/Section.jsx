import { cn } from '@/lib/cn'
import Container from './Container'

const tones = {
  white: 'bg-white',
  soft: 'bg-brand-50',
}

/**
 * Envoltorio estándar de cada sección: espaciado vertical, fondo y contenedor.
 * tone: 'white' | 'soft' (rosa muy suave) — alterna tonos entre secciones para separarlas.
 */
export default function Section({ id, tone = 'white', className, children }) {
  return (
    <section id={id} className={cn('py-20 sm:py-28', tones[tone], className)}>
      <Container>{children}</Container>
    </section>
  )
}
