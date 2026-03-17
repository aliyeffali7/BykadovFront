'use client'

import Link from 'next/link'
import Image from 'next/image'
import { type Product } from '@/lib/categories'
import { getProductImage } from '@/lib/productImages'

const badgeStyles: Record<string, string> = {
  Yeni: 'bg-[#DDBC75] text-[#1A1D1D]',
  Populyar: 'bg-white/10 text-white border border-white/20',
  Endirim: 'bg-red-500/80 text-white',
  Məhdud: 'bg-purple-500/80 text-white',
}

const cardBgs = [
  'linear-gradient(145deg, #222727 0%, #1e2424 100%)',
  'linear-gradient(145deg, #212626 0%, #1c2020 100%)',
  'linear-gradient(145deg, #202525 0%, #1b1f1f 100%)',
  'linear-gradient(145deg, #232828 0%, #1d2222 100%)',
  'linear-gradient(145deg, #1f2424 0%, #1a1e1e 100%)',
  'linear-gradient(145deg, #222626 0%, #1e2323 100%)',
]

type Props = { product: Product; index?: number; categorySlug: string }

export default function ProductCard({ product, index = 0, categorySlug }: Props) {
  return (
    <Link
      href={`/shop/${categorySlug}/${product.id}`}
      className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 block"
      style={{ background: cardBgs[index % cardBgs.length] }}
    >
      {/* Product image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={getProductImage(categorySlug, product.id)}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-[#DDBC75]/10 to-transparent" />

        {product.badge && (
          <span
            className={`absolute top-3 left-3 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full ${badgeStyles[product.badge] ?? 'bg-white/10 text-white'}`}
          >
            {product.badge}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="text-sm font-medium text-white/85 group-hover:text-white transition-colors line-clamp-2 mb-3 leading-snug">
          {product.name}
        </h3>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-baseline gap-2">
            <span className="text-base font-semibold text-[#DDBC75]">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-white/30 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <span className="text-[10px] text-white/30 group-hover:text-[#DDBC75]/60 transition-colors font-medium tracking-wide">
            Baxın →
          </span>
        </div>
      </div>
    </Link>
  )
}
