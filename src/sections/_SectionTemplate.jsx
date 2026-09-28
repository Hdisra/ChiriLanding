/**
 * PLANTILLA PARA UNA NUEVA SECCIÓN
 *
 * 1. Copia este archivo con un nombre nuevo, ej: src/sections/Gallery.jsx
 * 2. Cambia el nombre de la función, el `id` y el contenido.
 * 3. Agrégala en src/App.jsx en el orden que quieras.
 * 4. (Opcional) Agrega un link al menú en src/data/site.js -> nav: { label, href: '#tu-id' }
 *
 * Si la sección tiene una lista que crecerá (fotos, precios, etc.),
 * crea un archivo en src/data/ y recórrelo con .map(), como en Catalog.jsx.
 */
import Reveal from '@/components/ui/Reveal'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'

export default function SectionTemplate() {
  return (
    <Section id="nueva-seccion" tone="white">
      <SectionHeading
        eyebrow="Etiqueta"
        title={
          <>
            Título con una palabra <em>destacada</em>
          </>
        }
        description="Descripción corta de la sección."
      />

      <Reveal className="mt-12">{/* Contenido de la sección */}</Reveal>
    </Section>
  )
}
