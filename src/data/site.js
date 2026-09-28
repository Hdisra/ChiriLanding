/**
 * CONFIGURACIÓN GENERAL DEL SITIO
 * Marca, menú, contacto y redes. Lo que cambies aquí se refleja en toda la landing.
 */
export const site = {
  name: 'Chiri',
  tagline: 'Artesanías hechas a mano, por pedido',
  description:
    'Creamos piezas artesanales únicas y personalizadas, hechas a mano con cariño para ti o para regalar.',

  // Links del menú. El href debe coincidir con el `id` de la sección (ver src/sections).
  nav: [
    { label: 'Catálogo', href: '#catalogo' },
    { label: 'Cómo pedir', href: '#como-pedir' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Preguntas', href: '#faq' },
    { label: 'Contacto', href: '#contacto' },
  ],

  contact: {
    // TODO: reemplazar por el número real, con código de país (se ignoran espacios y signos).
    whatsapp: '+00 000 000 0000',
    // Mensaje que aparece ya escrito al abrir WhatsApp desde los botones generales.
    whatsappMessage: '¡Hola! Quiero hacer un pedido 🌸',
    email: 'hola@tumarca.com',
    location: 'Envíos a todo el país',
  },

  // `name` define el ícono: 'instagram' | 'facebook' (ver src/components/icons/SocialIcons.jsx)
  social: [
    { name: 'instagram', label: 'Instagram', href: 'https://instagram.com/tu_usuario' },
    { name: 'facebook', label: 'Facebook', href: 'https://facebook.com/tu_pagina' },
  ],

  // Formato de precios del catálogo: 1500 -> "$1,500"
  currency: { symbol: '$', locale: 'es-MX' },
}
