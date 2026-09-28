import { site } from '@/data/site'

/** Arma un link de WhatsApp con un mensaje ya escrito. */
export function whatsappLink(message = site.contact.whatsappMessage) {
  const phone = site.contact.whatsapp.replace(/\D/g, '')
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

/** Link para pedir un producto específico del catálogo. */
export function productOrderLink(product) {
  return whatsappLink(`¡Hola! Me interesa "${product.name}". ¿Me cuentas más para hacer un pedido?`)
}
