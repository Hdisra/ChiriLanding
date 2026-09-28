import { MessageCircle } from 'lucide-react'
import Button from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'
import Section from '@/components/ui/Section'
import { InstagramIcon } from '@/components/icons/SocialIcons'
import { site } from '@/data/site'
import { whatsappLink } from '@/lib/whatsapp'

export default function Contact() {
  const instagram = site.social.find((s) => s.name === 'instagram')

  return (
    <Section id="contacto" className="pt-0 sm:pt-0">
      <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-brand-500 px-6 py-16 text-center text-white sm:px-16 sm:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -left-24 size-72 rounded-full bg-brand-400/60 blur-2xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -bottom-32 size-96 rounded-full bg-brand-600/50 blur-2xl"
        />

        <div className="relative mx-auto max-w-2xl">
          <p className="text-sm font-medium tracking-[0.2em] text-brand-100 uppercase">
            Hagamos algo juntos
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-balance sm:text-6xl">
            ¿Tienes una idea? <em>La hacemos realidad.</em>
          </h2>
          <p className="mt-6 text-lg text-pretty text-brand-50">
            Escríbenos y te respondemos con una propuesta y presupuesto, sin compromiso.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href={whatsappLink()} variant="light" size="lg">
              <MessageCircle className="size-5" />
              Escribir por WhatsApp
            </Button>
            {instagram && (
              <Button href={instagram.href} variant="outlineLight" size="lg">
                <InstagramIcon className="size-5" />
                Ver Instagram
              </Button>
            )}
          </div>

          <p className="mt-8 text-sm text-brand-100">
            o escríbenos a{' '}
            <a
              href={`mailto:${site.contact.email}`}
              className="font-medium text-white underline underline-offset-4"
            >
              {site.contact.email}
            </a>
          </p>
        </div>
      </Reveal>
    </Section>
  )
}
