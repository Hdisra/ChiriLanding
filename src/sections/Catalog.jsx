import { useState } from 'react'
import ProductCard from '@/components/cards/ProductCard'
import Button from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import { products } from '@/data/products'
import { cn } from '@/lib/cn'
import { whatsappLink } from '@/lib/whatsapp'

const ALL = 'Todos'
// Los filtros se generan a partir de las categorías de src/data/products.js
const categories = [ALL, ...new Set(products.map((p) => p.category))]
// Cuántas piezas se muestran antes del botón "Ver todo el catálogo"
const INITIAL_COUNT = 9

export default function Catalog() {
  const [active, setActive] = useState(ALL)
  const [showAll, setShowAll] = useState(false)

  const filtered = active === ALL ? products : products.filter((p) => p.category === active)
  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT)

  return (
    <Section id="catalogo">
      <SectionHeading
        eyebrow="Catálogo"
        title={
          <>
            Inspírate con nuestras <em>creaciones</em>
          </>
        }
        description="Todas las piezas se pueden personalizar: colores, nombres, tamaños y detalles."
      />

      <Reveal className="mt-10 flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            aria-pressed={active === category}
            className={cn(
              'rounded-full px-5 py-2 text-sm font-medium transition',
              active === category
                ? 'bg-brand-500 text-white shadow-md shadow-brand-500/25'
                : 'bg-brand-50 text-ink-soft hover:bg-brand-100 hover:text-brand-600',
            )}
          >
            {category}
          </button>
        ))}
      </Reveal>

      <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((product, i) => (
          <Reveal key={product.id} delay={(i % 3) * 100}>
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>

      {visible.length < filtered.length && (
        <div className="mt-14 flex justify-center">
          <Button variant="secondary" onClick={() => setShowAll(true)}>
            Ver todo el catálogo ({filtered.length})
          </Button>
        </div>
      )}

      <Reveal className="mt-16 text-center text-ink-soft">
        ¿Tienes otra idea en mente?{' '}
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-brand-600 underline decoration-brand-200 underline-offset-4 transition hover:decoration-brand-500"
        >
          Escríbenos y la hacemos realidad
        </a>
      </Reveal>
    </Section>
  )
}
