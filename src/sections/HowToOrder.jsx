import Reveal from '@/components/ui/Reveal'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import { steps } from '@/data/steps'

export default function HowToOrder() {
  return (
    <Section id="como-pedir" tone="soft">
      <SectionHeading
        eyebrow="Cómo pedir"
        title={
          <>
            Tu pieza en <em>{steps.length} simples</em> pasos
          </>
        }
        description="Un proceso cercano y sin complicaciones. Te acompañamos desde la idea hasta la entrega."
      />

      <ol className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map(({ icon: Icon, title, text }, i) => (
          <Reveal as="li" key={title} delay={i * 100}>
            <div className="h-full rounded-3xl bg-white p-8 ring-1 ring-brand-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/5">
              <div className="flex items-start justify-between">
                <span className="grid size-12 place-items-center rounded-2xl bg-brand-100 text-brand-600">
                  <Icon className="size-5" />
                </span>
                <span className="font-display text-4xl text-brand-200 italic">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-8 font-display text-xl">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{text}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
