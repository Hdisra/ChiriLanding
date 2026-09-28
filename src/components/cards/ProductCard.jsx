import { ArrowUpRight } from 'lucide-react'
import Carousel from '@/components/ui/Carousel'
import Media from '@/components/ui/Media'
import { formatPrice } from '@/lib/format'
import { productOrderLink } from '@/lib/whatsapp'

export default function ProductCard({ product }) {
  const { name, category, description, price, images = [], tags = [] } = product

  return (
    <article className="group">
      <div className="relative aspect-4/5 overflow-hidden rounded-3xl bg-brand-50">
        {images.length > 0 ? (
          <Carousel label={`Fotos de ${name}`}>
            {images.map((src, i) => (
              <Media
                key={src}
                src={src}
                alt={images.length > 1 ? `${name}, foto ${i + 1}` : name}
                className="transition duration-700 ease-out group-hover:scale-105"
              />
            ))}
          </Carousel>
        ) : (
          <Media alt={name} />
        )}

        {tags.length > 0 && (
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-brand-600 backdrop-blur"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* En desktop aparece al pasar el mouse; en celulares siempre está visible */}
        <a
          href={productOrderLink(product)}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-4 bottom-4 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-medium text-ink shadow-lg shadow-brand-900/10 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-brand-500 hover:text-white focus-visible:translate-y-0 focus-visible:opacity-100 pointer-fine:translate-y-3 pointer-fine:opacity-0"
        >
          Pedir
          <ArrowUpRight className="size-4" />
        </a>
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between gap-4">
          <p className="text-xs font-medium tracking-[0.2em] text-brand-500 uppercase">
            {category}
          </p>
          <p className="text-sm font-medium whitespace-nowrap">
            {price ? `Desde ${formatPrice(price)}` : 'A cotizar'}
          </p>
        </div>
        <h3 className="mt-1.5 font-display text-xl">{name}</h3>
        {description && <p className="mt-1 text-sm text-ink-soft">{description}</p>}
      </div>
    </article>
  )
}
