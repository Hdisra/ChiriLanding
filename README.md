# Chiri · Landing de artesanías por pedido

Landing minimalista en **React + Vite + TailwindCSS v4**, con paleta blanco y rosa.

## Cómo correrla

```bash
npm install      # solo la primera vez
npm run dev      # servidor local en http://localhost:5173
npm run build    # genera la versión final en /dist
npm run format   # ordena el código y las clases de Tailwind
npm run images   # optimiza las fotos nuevas de fotos-originales/
```

## Estructura

```
src/
├── App.jsx              ← orden de las secciones (reordena / quita / agrega aquí)
├── index.css            ← TEMA: colores, tipografías y animaciones
├── data/                ← CONTENIDO editable, sin tocar componentes
│   ├── site.js          ← nombre, menú, WhatsApp, email, redes, moneda
│   ├── products.js      ← catálogo
│   ├── steps.js         ← pasos de "Cómo pedir"
│   ├── testimonials.js  ← testimonios
│   └── faqs.js          ← preguntas frecuentes
├── sections/            ← una sección de la página por archivo
│   ├── Hero.jsx
│   ├── Marquee.jsx      ← cinta rosa animada con frases
│   ├── Catalog.jsx
│   ├── HowToOrder.jsx
│   ├── About.jsx
│   ├── Testimonials.jsx
│   ├── Faq.jsx
│   ├── Contact.jsx
│   └── _SectionTemplate.jsx  ← plantilla para crear secciones nuevas
├── components/
│   ├── layout/          ← Navbar, Footer, botón flotante de WhatsApp
│   ├── ui/              ← piezas reutilizables: Button, Section, SectionHeading, Media, Reveal...
│   ├── cards/           ← ProductCard
│   └── icons/           ← íconos de redes sociales
└── lib/                 ← utilidades (links de WhatsApp, formato de precios, cn)
public/
└── images/productos/    ← fotos optimizadas (.webp) que usa la página
fotos-originales/        ← fotos pesadas originales (NO se publican)
scripts/
└── optimize-images.js   ← convierte fotos-originales/ en .webp livianos
```

## Tareas comunes

**Cambiar WhatsApp, email o redes** → `src/data/site.js`. Todos los botones de pedido usan ese número.

**Agregar un producto** → copia un bloque en `src/data/products.js`. Si usas una categoría nueva,
el filtro aparece solo. Con `price: null` se muestra "A cotizar". Si `images` tiene 2 o más fotos,
la tarjeta muestra un carrusel. El catálogo muestra 9 piezas y un botón "Ver todo"
(cámbialo con `INITIAL_COUNT` en `Catalog.jsx`).

**Agregar fotos**

1. Deja las fotos en `fotos-originales/` (ej: `Manola (3).png`).
2. Corre `npm run images` → crea `public/images/productos/manola-3.webp` (~100 KB en vez de ~5 MB).
3. Usa el nombre en `src/data/products.js`: `images: [img('manola-1'), img('manola-3')]`.

Las fotos del Hero (van rotando) están en `HERO_IMAGES` de `Hero.jsx` y la de "Nosotros" en
`ABOUT_IMAGE` de `About.jsx`. Si falta una foto se muestra un recuadro rosa.

**Cambiar los colores** → edita la escala `--color-brand-*` en `src/index.css`. Toda la página usa
esas variables (`bg-brand-500`, `text-brand-600`, etc.).

**Cambiar tipografías** → cambia el link de Google Fonts en `index.html` y `--font-sans` /
`--font-display` en `src/index.css`.

**Agregar una sección**

1. Copia `src/sections/_SectionTemplate.jsx` con un nombre nuevo.
2. Cambia su `id` y contenido.
3. Impórtala y ubícala en `src/App.jsx`.
4. (Opcional) agrega el link al menú en `site.nav`.

**Resaltar palabras en títulos** → envuélvelas en `<em>`; se muestran en cursiva rosa:
`title={<>Nuestras <em>creaciones</em></>}`

## Componentes UI disponibles

| Componente       | Uso                                                                    |
| ---------------- | ---------------------------------------------------------------------- |
| `Section`        | Envoltorio de sección: `id`, `tone="white" \| "soft"`                  |
| `SectionHeading` | Título estándar: `eyebrow`, `title`, `description`, `align`            |
| `Button`         | `variant`: primary, secondary, light, outlineLight · `size`: sm/md/lg  |
| `Media`          | Imagen con reemplazo rosa si falta `src`                               |
| `Carousel`       | Carrusel deslizable con flechas y puntos; cada hijo es una diapositiva |
| `Slideshow`      | Imágenes que rotan solas con fundido (`images`, `interval`)            |
| `Reveal`         | Aparición suave al hacer scroll (`delay` en ms)                        |
| `Container`      | Ancho máximo y márgenes laterales                                      |
