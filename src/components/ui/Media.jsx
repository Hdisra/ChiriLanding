import { Flower2 } from 'lucide-react'
import { cn } from '@/lib/cn'

/**
 * Imagen con reemplazo automático: si no hay `src`, muestra un recuadro rosa.
 * Así la landing se ve bien mientras aún no tienes las fotos.
 * Usa loading="eager" solo en imágenes visibles al cargar la página (ej: Hero).
 */
export default function Media({ src, alt = '', label, loading = 'lazy', className, ...props }) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        className={cn('size-full object-cover', className)}
        {...props}
      />
    )
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        'flex size-full flex-col items-center justify-center gap-3 bg-linear-to-br from-brand-100 via-brand-50 to-brand-200 text-brand-400',
        className,
      )}
      {...props}
    >
      <Flower2 className="size-9" strokeWidth={1.25} />
      {label && <span className="px-6 text-center text-xs tracking-widest uppercase">{label}</span>}
    </div>
  )
}
