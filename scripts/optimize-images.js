/**
 * Optimiza las fotos para la web.
 *
 * Toma las fotos de fotos-originales/ y crea versiones livianas (.webp)
 * en public/images/productos/, con nombres simples: "Tomás (1).png" -> "tomas-1.webp".
 * Solo procesa las fotos nuevas o modificadas.
 *
 * Uso: npm run images
 */
import { mkdir, readdir, stat } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const ROOT = fileURLToPath(new URL('..', import.meta.url))
const INPUT_DIR = path.join(ROOT, 'fotos-originales')
const OUTPUT_DIR = path.join(ROOT, 'public/images/productos')
const WIDTH = 960 // ancho final en px; el alto se ajusta proporcionalmente
const QUALITY = 80
const EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.webp', '.avif', '.tif', '.tiff'])

function slugify(name) {
  return name
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // quita acentos
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

const files = (await readdir(INPUT_DIR)).filter((file) =>
  EXTENSIONS.has(path.extname(file).toLowerCase()),
)
await mkdir(OUTPUT_DIR, { recursive: true })

let skipped = 0
for (const file of files) {
  const input = path.join(INPUT_DIR, file)
  const outputName = `${slugify(path.parse(file).name)}.webp`
  const output = path.join(OUTPUT_DIR, outputName)

  const [source, existing] = await Promise.all([stat(input), stat(output).catch(() => null)])
  if (existing && existing.mtimeMs >= source.mtimeMs) {
    skipped++
    continue
  }

  const info = await sharp(input)
    .rotate() // respeta la orientación de fotos de celular
    .resize({ width: WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(output)

  console.log(
    `✓ ${file}  ->  /images/productos/${outputName}  (${Math.round(info.size / 1024)} KB)`,
  )
}

if (skipped) console.log(`(${skipped} sin cambios)`)
