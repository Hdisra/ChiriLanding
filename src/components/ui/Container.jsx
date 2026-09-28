import { cn } from '@/lib/cn'

/** Ancho máximo y márgenes laterales consistentes en toda la página. */
export default function Container({ className, children }) {
  return (
    <div className={cn('mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8', className)}>{children}</div>
  )
}
