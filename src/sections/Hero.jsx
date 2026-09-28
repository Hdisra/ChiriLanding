import { ArrowRight, Heart, Sparkles, Star } from 'lucide-react'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import Slideshow from '@/components/ui/Slideshow'
import { whatsappLink } from '@/lib/whatsapp'

// Fotos que van rotando en el arco del Hero (de public/images/productos)
const HERO_IMAGES = [
  { src: '/images/productos/amuleto.webp', alt: 'Collar Amuleto con dijes de la suerte' },
  { src: '/images/productos/lunaria.webp', alt: 'Llavero Lunaria de conejito' },
  { src: '/images/productos/cattleya.webp', alt: 'Collar Cattleya con flor rosa' },
  { src: '/images/productos/bola-disco.webp', alt: 'Cuadro Bola disco' },
  { src: '/images/productos/suky.webp', alt: 'Llavero Suky de control de videojuegos' },
]

const highlights = [
  { value: '100%', label: 'Hecho a mano' },
  { value: '+300', label: 'Pedidos entregados' },
  { value: '1 a 1', label: 'Diseño contigo' },
]

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Manchas de color decorativas */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-48 -right-40 size-144 rounded-full bg-brand-100 opacity-70 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 -left-40 size-96 rounded-full bg-brand-50 blur-3xl"
      />

      <Container className="relative grid items-center gap-16 lg:grid-cols-2">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-600 ring-1 ring-brand-100">
              <Sparkles className="size-4" />
              Hecho a mano · por pedido
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl">
              Piezas únicas, hechas <em className="whitespace-nowrap text-brand-500">a mano</em>{' '}
              para ti
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-pretty text-ink-soft">
              Creamos artesanías personalizadas para regalar, decorar o simplemente darte un gusto.
              Tú nos cuentas la idea, nosotros le damos forma.
            </p>
          </Reveal>

          <Reveal delay={300} className="mt-10 flex flex-wrap gap-4">
            <Button href={whatsappLink()} size="lg">
              Hacer mi pedido
              <ArrowRight className="size-4" />
            </Button>
            <Button href="#catalogo" variant="secondary" size="lg">
              Ver catálogo
            </Button>
          </Reveal>

          <Reveal delay={400}>
            <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-brand-100 pt-8">
              {highlights.map(({ value, label }) => (
                <div key={label} className="flex flex-col-reverse justify-end gap-1">
                  <dt className="text-xs text-ink-soft sm:text-sm">{label}</dt>
                  <dd className="font-display text-2xl sm:text-3xl">{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <HeroVisual />
      </Container>
    </section>
  )
}

function HeroVisual() {
  return (
    <Reveal delay={200} className="relative mx-auto w-full max-w-sm sm:max-w-md lg:mr-0">
      {/* Foto con forma de arco */}
      <div className="aspect-4/5 overflow-hidden rounded-t-full rounded-b-[2.5rem] ring-8 ring-brand-50">
        <Slideshow images={HERO_IMAGES} label="Tu foto principal" />
      </div>

      {/* Tarjetas flotantes */}
      <div className="absolute bottom-16 -left-4 flex animate-float items-center gap-3 rounded-2xl bg-white/90 p-4 shadow-xl shadow-brand-900/10 backdrop-blur motion-reduce:animate-none sm:-left-12">
        <span className="grid size-10 place-items-center rounded-full bg-brand-100 text-brand-600">
          <Heart className="size-5" />
        </span>
        <div>
          <p className="text-sm font-medium">Hecho con amor</p>
          <p className="text-xs text-ink-soft">Cada pieza es única</p>
        </div>
      </div>

      <div className="absolute top-24 -right-3 animate-float rounded-2xl bg-white/90 p-4 shadow-xl shadow-brand-900/10 backdrop-blur [animation-delay:-3s] motion-reduce:animate-none sm:-right-10">
        <div className="flex gap-0.5 text-brand-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-4 fill-current" />
          ))}
        </div>
        <p className="mt-1.5 text-xs text-ink-soft">+300 clientes felices</p>
      </div>
    </Reveal>
  )
}
