import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import Logo from '@/components/ui/Logo'
import { site } from '@/data/site'
import { cn } from '@/lib/cn'
import { whatsappLink } from '@/lib/whatsapp'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition duration-300',
        open
          ? 'bg-white shadow-sm shadow-brand-900/5'
          : scrolled
            ? 'bg-white/85 shadow-sm shadow-brand-900/5 backdrop-blur-md'
            : 'bg-transparent',
      )}
    >
      <Container className="flex h-18 items-center justify-between">
        <Logo />

        <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
          {site.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-soft transition hover:text-brand-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href={whatsappLink()} size="sm">
            Hacer pedido
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          className="-mr-2 rounded-full p-2 text-ink transition hover:bg-brand-50 md:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </Container>

      {open && (
        <div id="mobile-menu" className="border-t border-brand-100 md:hidden">
          <Container className="flex flex-col py-4">
            {site.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className="rounded-xl px-3 py-3 text-ink transition hover:bg-brand-50 hover:text-brand-600"
              >
                {link.label}
              </a>
            ))}
            <Button href={whatsappLink()} onClick={close} className="mt-3">
              Hacer pedido
            </Button>
          </Container>
        </div>
      )}
    </header>
  )
}
