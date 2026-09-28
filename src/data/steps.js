import { MessageCircle, Palette, Hand, Gift } from 'lucide-react'

/**
 * PASOS PARA HACER UN PEDIDO (sección "Cómo pedir")
 * Íconos disponibles: https://lucide.dev/icons (impórtalos arriba por su nombre)
 */
export const steps = [
  {
    icon: MessageCircle,
    title: 'Cuéntanos tu idea',
    text: 'Elige algo del catálogo o envíanos una referencia de lo que imaginas.',
  },
  {
    icon: Palette,
    title: 'Diseñamos juntos',
    text: 'Definimos colores, tamaño y detalles. Te enviamos el presupuesto.',
  },
  {
    icon: Hand,
    title: 'Lo hacemos a mano',
    text: 'Con tu confirmación comenzamos a crear tu pieza, paso a paso.',
  },
  {
    icon: Gift,
    title: 'Llega a tus manos',
    text: 'Coordinamos envío o retiro, listo para disfrutar o regalar.',
  },
]
