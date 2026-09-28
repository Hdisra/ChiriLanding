/**
 * CATÁLOGO
 * Para agregar un producto, copia un bloque { ... } y cambia sus datos.
 * El orden aquí es el orden en que aparecen en la página.
 *
 * - id:          identificador único, sin espacios (ej: 'tlacuachito')
 * - name:        nombre visible
 * - category:    categoría; los filtros del catálogo se generan solos a partir de estas
 * - description: texto corto (opcional)
 * - price:       precio base como número, ej: 250 (opcional). Si es null se muestra "A cotizar"
 * - images:      fotos de /public/images/productos. Con 2 o más se muestra un carrusel.
 *                Para agregar fotos nuevas ver fotos-originales/LEEME.md
 * - tags:        etiquetas sobre la foto (opcional). Ej: ['Personalizable']
 */

const img = (name) => `/images/productos/${name}.webp`

export const products = [
  {
    id: 'tlacuachito',
    name: 'Tlacuachito',
    category: 'Figuras',
    description: 'Tlacuachito sobre su calabaza, modelado y pintado a mano.',
    price: null,
    images: [img('tlacuachito-1'), img('tlacuachito-2'), img('tlacuachito-3')],
    tags: [],
  },
  {
    id: 'chirindongo',
    name: 'Chirindongo',
    category: 'Llaveros',
    description: 'Charm para bolsa con fresa, mariposa, estrella, inicial y paleta.',
    price: null,
    images: [img('chirindongo-1'), img('chirindongo-2')],
    tags: ['Personalizable'],
  },
  {
    id: 'amuleto',
    name: 'Amuleto',
    category: 'Joyería',
    description: 'Collar dorado con dijes de la suerte: cerezas, chile, carta y dado.',
    price: null,
    images: [img('amuleto')],
    tags: [],
  },
  {
    id: 'pumpkin',
    name: 'Pumpkin',
    category: 'Decoración',
    description: 'Espantapájaros de madera pintado a mano, perfecto para otoño.',
    price: null,
    images: [img('pumpkin-1'), img('pumpkin-2'), img('pumpkin-3')],
    tags: ['Temporada'],
  },
  {
    id: 'lunaria',
    name: 'Lunaria',
    category: 'Llaveros',
    description: 'Llavero de conejito, inicial con lunas y librito.',
    price: null,
    images: [img('lunaria')],
    tags: ['Personalizable'],
  },
  {
    id: 'bola-disco',
    name: 'Bola disco',
    category: 'Cuadros',
    description: 'Cuadro de bola disco con destellos, pintado sobre lienzo.',
    price: null,
    images: [img('bola-disco')],
    tags: [],
  },
  {
    id: 'tomas',
    name: 'Tomás',
    category: 'Figuras',
    description: 'Figura de perrito con collar, modelada y pintada a mano.',
    price: null,
    images: [img('tomas-1'), img('tomas-2')],
    tags: [],
  },
  {
    id: 'cattleya',
    name: 'Cattleya',
    category: 'Joyería',
    description: 'Collar delicado con una florecita rosa.',
    price: null,
    images: [img('cattleya')],
    tags: [],
  },
  {
    id: 'worry-stone',
    name: 'Worry stone',
    category: 'Figuras',
    description: 'Piedrita antiestrés con forma de catarina para llevar contigo.',
    price: null,
    images: [img('worry-stone-1'), img('worry-stone-2'), img('worry-stone-3')],
    tags: [],
  },
  {
    id: 'aceitunas',
    name: 'Aceitunas',
    category: 'Llaveros',
    description: 'Llavero de aceitunas para tu bolsa o mochila.',
    price: null,
    images: [img('aceitunas'), img('aceitunas-2')],
    tags: [],
  },
  {
    id: 'monarca',
    name: 'Monarca',
    category: 'Cuadros',
    description: 'Cuadro de mariposa monarca sobre lienzo.',
    price: null,
    images: [img('monarca')],
    tags: [],
  },
  {
    id: 'manola',
    name: 'Manola',
    category: 'Figuras',
    description: 'Figura de gatita, sentada o acostada.',
    price: null,
    images: [img('manola-1'), img('manola-2')],
    tags: [],
  },
  {
    id: 'suky',
    name: 'Suky',
    category: 'Llaveros',
    description: 'Llavero de control de videojuegos con detalles rosas.',
    price: null,
    images: [img('suky')],
    tags: [],
  },
  {
    id: 'brisa',
    name: 'Brisa',
    category: 'Joyería',
    description: 'Aretes rectangulares con puntitos en tonos turquesa.',
    price: null,
    images: [img('brisa')],
    tags: [],
  },
  {
    id: 'corsar',
    name: 'Corsar',
    category: 'Cuadros',
    description: 'Cuadro de bailarinas de ballet en rojo.',
    price: null,
    images: [img('corsar')],
    tags: [],
  },
  {
    id: 'rosita-alpm',
    name: 'Rosita ALPM',
    category: 'Llaveros',
    description: 'Llavero de rosa blanca con detalle de rosa roja.',
    price: null,
    images: [img('rosita-alpm')],
    tags: [],
  },
  {
    id: 'abstracto',
    name: 'Abstracto',
    category: 'Cuadros',
    description: 'Par de cuadros con formas abstractas en rosa.',
    price: null,
    images: [img('abstracto')],
    tags: [],
  },
  {
    id: 'alru',
    name: 'Alrú',
    category: 'Llaveros',
    description: 'Llavero de pelotitas de tenis en verde y rosa.',
    price: null,
    images: [img('alru')],
    tags: [],
  },
  {
    id: 'on-france',
    name: 'On France',
    category: 'Llaveros',
    description: 'Llavero con sobre, librito y paleta de pintor.',
    price: null,
    images: [img('on-france')],
    tags: [],
  },
]
