import { site } from '@/data/site'

/** 1500 -> "$1,500" (según la configuración de moneda en site.js) */
export function formatPrice(value) {
  const { symbol, locale } = site.currency
  return `${symbol}${value.toLocaleString(locale)}`
}
