import { Gem, Hand, Leaf } from 'lucide-react'
import Media from '@/components/ui/Media'
import Reveal from '@/components/ui/Reveal'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import { site } from '@/data/site'

// Idealmente una foto del taller o de quien crea las piezas
const ABOUT_IMAGE = {
  src: '/images/productos/chirindongo-2.webp',
  alt: 'Mano sosteniendo el charm Chirindongo hecho a mano',
}

const values = [
  {
    icon: Hand,
    title: 'Hecho a mano',
    text: 'Cada pieza pasa por nuestras manos de principio a fin.',
  },
  {
    icon: Leaf,
    title: 'Materiales nobles',
    text: 'Elegimos materiales de calidad y, cuando podemos, de proveedores locales.',
  },
  {
    icon: Gem,
    title: 'Piezas únicas',
    text: 'Ninguna es igual a otra: la tuya será solo tuya.',
  },
]

export default function About() {
  return (
    <Section id="nosotros">
      <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="aspect-square overflow-hidden rounded-[2.5rem]">
            <Media src={ABOUT_IMAGE.src} alt={ABOUT_IMAGE.alt} label="Foto del taller" />
          </div>
          <div className="absolute -right-2 -bottom-6 rounded-3xl bg-brand-500 px-7 py-5 text-white shadow-xl shadow-brand-500/30 sm:-right-6">
            <p className="font-display text-4xl">+5</p>
            <p className="text-sm text-brand-100">años creando</p>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            align="left"
            eyebrow="Nosotros"
            title={
              <>
                Detrás de cada pieza hay <em>una historia</em>
              </>
            }
          />
          <Reveal delay={100}>
            <p className="mt-6 text-lg leading-relaxed text-pretty text-ink-soft">
              {site.name} nació de las ganas de crear cosas bonitas con las manos. Hoy hacemos
              piezas por pedido para personas que buscan algo especial, con detalles pensados
              especialmente para ellas.
            </p>
          </Reveal>

          <ul className="mt-10 space-y-6">
            {values.map(({ icon: Icon, title, text }, i) => (
              <Reveal as="li" key={title} delay={150 + i * 100} className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-500 ring-1 ring-brand-100">
                  <Icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-medium">{title}</h3>
                  <p className="mt-1 text-sm text-ink-soft">{text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
