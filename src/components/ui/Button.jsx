import { cn } from '@/lib/cn'

const variants = {
  primary:
    'bg-brand-500 text-white shadow-lg shadow-brand-500/25 hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-brand-500/35',
  secondary: 'bg-white text-ink ring-1 ring-brand-200 hover:text-brand-600 hover:ring-brand-400',
  // Para usar sobre fondos rosa
  light:
    'bg-white text-brand-600 shadow-lg shadow-brand-900/15 hover:-translate-y-0.5 hover:bg-brand-50',
  outlineLight: 'text-white ring-1 ring-white/60 hover:bg-white/10 hover:ring-white',
}

const sizes = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

/**
 * Botón de la marca. Con `href` se renderiza como link (los externos abren en otra pestaña).
 * variant: 'primary' | 'secondary' | 'light' | 'outlineLight'
 * size:    'sm' | 'md' | 'lg'
 */
export default function Button({
  href,
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-full font-medium transition duration-300',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500',
    variants[variant],
    sizes[size],
    className,
  )

  if (href) {
    const isExternal = href.startsWith('http')
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
