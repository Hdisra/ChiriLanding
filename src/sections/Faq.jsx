import { Plus } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import { faqs } from '@/data/faqs'
import { whatsappLink } from '@/lib/whatsapp'

export default function Faq() {
  return (
    <Section id="faq">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Preguntas frecuentes"
            title={
              <>
                ¿Tienes <em>dudas</em>?
              </>
            }
            description="Aquí respondemos lo que más nos preguntan. Si no encuentras tu respuesta, escríbenos."
          />
          <Reveal delay={100} className="mt-6">
            <a
              href={whatsappLink('¡Hola! Tengo una pregunta 😊')}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand-600 underline decoration-brand-200 underline-offset-4 transition hover:decoration-brand-500"
            >
              Hacer una pregunta
            </a>
          </Reveal>
        </div>

        <Reveal delay={100} className="divide-y divide-brand-100 border-y border-brand-100">
          {faqs.map(({ question, answer }) => (
            // `name` compartido: al abrir una pregunta se cierra la anterior
            <details key={question} name="faq" className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium transition hover:text-brand-600 [&::-webkit-details-marker]:hidden">
                {question}
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-500 transition duration-300 group-open:rotate-45 group-open:bg-brand-500 group-open:text-white">
                  <Plus className="size-4" />
                </span>
              </summary>
              <p className="mt-4 pr-12 leading-relaxed text-ink-soft">{answer}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </Section>
  )
}
