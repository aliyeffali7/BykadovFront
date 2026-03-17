// Curated Unsplash image pools per category (6 images, cycling for 12 products)
const BASE = 'https://images.unsplash.com/photo-'
const Q = '?auto=format&fit=crop&w=600&q=80'
const QHQ = '?auto=format&fit=crop&w=1200&q=85'

const pools: Record<string, string[]> = {
  clothing: [
    `${BASE}1515886657613-9f3515b0c78f${Q}`,
    `${BASE}1551232864-3f0890e1777e${Q}`,
    `${BASE}1572804013309-59a88b7e92f1${Q}`,
    `${BASE}1509631179647-0177331693ae${Q}`,
    `${BASE}1583496661160-fb5218524f59${Q}`,
    `${BASE}1490481651871-ab68de25d43d${Q}`,
  ],
  'women-accessories': [
    `${BASE}1553062407-98eeb64c6a62${Q}`,
    `${BASE}1601370552-696dc42db3a4${Q}`,
    `${BASE}1618354691373-d851c5c3a990${Q}`,
    `${BASE}1576828831022-ca41d3905fb7${Q}`,
    `${BASE}1608667351180-f07b2e62b3da${Q}`,
    `${BASE}1584917865442-de89df76afd3${Q}`,
  ],
  'temporary-tattoos': [
    `${BASE}1562156425-26f47c3b6c49${Q}`,
    `${BASE}1506629082955-511b1aa562c8${Q}`,
    `${BASE}1565804606907-b85fc18b0f21${Q}`,
    `${BASE}1519681393784-d120267933ba${Q}`,
    `${BASE}1603575448174-6a5b4cbab84d${Q}`,
    `${BASE}1524504388-57c6ce9c8843${Q}`,
  ],
  'home-decor': [
    `${BASE}1586023492125-27b2c045efd7${Q}`,
    `${BASE}1555041469-a586c61ea9bc${Q}`,
    `${BASE}1556909114-44e3e70034e2${Q}`,
    `${BASE}1540518614846-7eded433c457${Q}`,
    `${BASE}1538688554366-621d749b9d8b${Q}`,
    `${BASE}1558618666-fcd25c85cd64${Q}`,
  ],
  jewellery: [
    `${BASE}1515562141207-7a88fb7ce338${Q}`,
    `${BASE}1617038260897-41a1f14a8ca0${Q}`,
    `${BASE}1599643478518-a784e5dc4c8f${Q}`,
    `${BASE}1573408301185-9521e7c33022${Q}`,
    `${BASE}1535632787350-4e68ef0ac584${Q}`,
    `${BASE}1611591437281-460bfbe1220a${Q}`,
  ],
  beauty: [
    `${BASE}1596462502278-27bfdc403348${Q}`,
    `${BASE}1522335789203-aabd1fc54bc9${Q}`,
    `${BASE}1571781926291-c477ebfd024b${Q}`,
    `${BASE}1580870069867-74c57ee1bb07${Q}`,
    `${BASE}1596178060810-72f53ce9a65c${Q}`,
    `${BASE}1522338242992-e1d3ebe7c9b7${Q}`,
  ],
  bags: [
    `${BASE}1584917865442-de89df76afd3${Q}`,
    `${BASE}1590874103328-eac38a683ce7${Q}`,
    `${BASE}1566150905458-1bf1eb99d4bc${Q}`,
    `${BASE}1548036161-4f36a5c3b6d0${Q}`,
    `${BASE}1584592740039-cddf0671f3d4${Q}`,
    `${BASE}1598532163257-ae3c6b2524b6${Q}`,
  ],
  shoes: [
    `${BASE}1542291026-7eec264c27ff${Q}`,
    `${BASE}1560769629-975ec94e6a86${Q}`,
    `${BASE}1603808033192-082d6919d3e1${Q}`,
    `${BASE}1515347619252-60a4bf4fff4f${Q}`,
    `${BASE}1543163521-1bf539c55dd2${Q}`,
    `${BASE}1508214751196-bcfd4ca60f91${Q}`,
  ],
  perfumes: [
    `${BASE}1592945403244-b3fbafd7f539${Q}`,
    `${BASE}1541643600914-78b084683702${Q}`,
    `${BASE}1563170351-be9e2abae78d${Q}`,
    `${BASE}1594035910387-3ab45f7a7c2d${Q}`,
    `${BASE}1587017539504-67cfbaf225d8${Q}`,
    `${BASE}1566977776052-6079bfb8baca${Q}`,
  ],
  seasonal: [
    `${BASE}1469334031218-e382a71b716b${Q}`,
    `${BASE}1490481651871-ab68de25d43d${Q}`,
    `${BASE}1540518614846-7eded433c457${Q}`,
    `${BASE}1573408301185-9521e7c33022${Q}`,
    `${BASE}1596462502278-27bfdc403348${Q}`,
    `${BASE}1584917865442-de89df76afd3${Q}`,
  ],
}

/** Returns the main product image URL */
export function getProductImage(categorySlug: string, productId: number): string {
  const pool = pools[categorySlug] ?? pools.clothing
  return pool[(productId - 1) % pool.length]
}

/** Returns 4 image URLs for the product detail page thumbnail strip */
export function getProductThumbnails(categorySlug: string, productId: number): string[] {
  const pool = pools[categorySlug] ?? pools.clothing
  const start = (productId - 1) % pool.length
  return Array.from({ length: 4 }, (_, i) => pool[(start + i) % pool.length].replace(Q, QHQ))
}

export const HERO_IMAGE =
  `${BASE}1469334031218-e382a71b716b?auto=format&fit=crop&w=1920&q=85`
