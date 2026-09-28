import { Quote } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import { testimonials } from '@/data/testimonials'

export default function Testimonials() {
  return (
    <Section id="testimonios" tone="soft">
      <SectionHeading
        eyebrow="Testimonios"
        title={
          <>
            Lo que dicen <em>nuestros clientes</em>
          </>
        }
      />

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {testimonials.map(({ quote, name, detail }, i) => (
          <Reveal key={name} delay={i * 100} className="h-full">
            <figure className="flex h-full flex-col rounded-3xl bg-white p-8 ring-1 ring-brand-100">
              <Quote className="size-8 fill-brand-100 text-brand-300" />
              <blockquote className="mt-5 flex-1 leading-relaxed text-ink-soft">
                “{quote}”
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3 border-t border-brand-100 pt-6">
                <span className="grid size-10 place-items-center rounded-full bg-brand-100 font-display text-brand-600">
                  {name.charAt(0)}
                </span>
                <div>
                  <p className="font-medium">{name}</p>
                  {detail && <p className="text-sm text-ink-soft">{detail}</p>}
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
