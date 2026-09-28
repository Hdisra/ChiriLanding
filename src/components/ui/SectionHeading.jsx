import { cn } from '@/lib/cn'
import Reveal from './Reveal'

/**
 * Título estándar de sección.
 * En `title` puedes resaltar palabras con <em>: title={<>Nuestras <em>creaciones</em></>}
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}) {
  return (
    <Reveal className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && (
        <p className="text-sm font-medium tracking-[0.2em] text-brand-500 uppercase">{eyebrow}</p>
      )}
      <h2 className="mt-3 font-display text-4xl leading-tight text-balance sm:text-5xl [&_em]:text-brand-500">
        {title}
      </h2>
      {description && <p className="mt-5 text-lg text-pretty text-ink-soft">{description}</p>}
    </Reveal>
  )
}
