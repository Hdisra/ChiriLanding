import { Heart, Mail, MapPin, MessageCircle } from 'lucide-react'
import Container from '@/components/ui/Container'
import Logo from '@/components/ui/Logo'
import { socialIcons } from '@/components/icons/SocialIcons'
import { site } from '@/data/site'
import { whatsappLink } from '@/lib/whatsapp'

export default function Footer() {
  const { contact } = site
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-brand-100 bg-brand-50/60">
      <Container className="grid gap-12 py-16 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">{site.description}</p>
          <div className="mt-6 flex gap-3">
            {site.social.map(({ name, label, href }) => {
              const Icon = socialIcons[name]
              return (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-full bg-white text-brand-500 ring-1 ring-brand-100 transition hover:bg-brand-500 hover:text-white"
                >
                  {Icon && <Icon className="size-4.5" />}
                </a>
              )
            })}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium">Navegación</h3>
          <ul className="mt-4 space-y-3 text-sm text-ink-soft">
            {site.nav.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition hover:text-brand-600">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-medium">Contacto</h3>
          <ul className="mt-4 space-y-3 text-sm text-ink-soft">
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-brand-600"
              >
                <MessageCircle className="size-4 text-brand-400" />
                {contact.whatsapp}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 transition hover:text-brand-600"
              >
                <Mail className="size-4 text-brand-400" />
                {contact.email}
              </a>
            </li>
            <li className="inline-flex items-center gap-2">
              <MapPin className="size-4 text-brand-400" />
              {contact.location}
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-brand-100">
        {/* Espacio extra a la derecha/abajo para no quedar bajo el botón flotante de WhatsApp */}
        <Container className="flex flex-col justify-between gap-2 pt-6 pb-24 text-xs text-ink-soft sm:flex-row sm:pr-24 sm:pb-6">
          <p>
            © {year} {site.name}. Todos los derechos reservados.
          </p>
          <p className="inline-flex items-center gap-1">
            Hecho a mano con <Heart className="size-3 fill-brand-400 text-brand-400" />
          </p>
        </Container>
      </div>
    </footer>
  )
}
