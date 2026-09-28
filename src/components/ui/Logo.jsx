import { site } from '@/data/site'
import { cn } from '@/lib/cn'

/** Logo de texto. Para usar una imagen, reemplaza el contenido por <img src="/logo.svg" />. */
export default function Logo({ className }) {
  return (
    <a
      href="#inicio"
      className={cn('font-display text-2xl tracking-tight italic', className)}
      aria-label={`${site.name}, ir al inicio`}
    >
      {site.name}
      <span className="text-brand-500">.</span>
    </a>
  )
}
