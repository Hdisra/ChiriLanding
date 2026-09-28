# Fotos originales

Deja aquí las fotos tal cual salen de la cámara o del editor (.png, .jpg, .webp).

Luego corre:

```bash
npm run images
```

Eso crea versiones livianas en `public/images/productos/` con nombres simples:

| Foto original         | Ruta para usar en la landing          |
| --------------------- | ------------------------------------- |
| `Tomás (1).png`       | `/images/productos/tomas-1.webp`      |
| `Rosita ALPM.png`     | `/images/productos/rosita-alpm.webp`  |

Después agrega esas rutas en `src/data/products.js` (campo `images`).

> Esta carpeta NO se publica con la web (las originales pesan varios MB cada una).
