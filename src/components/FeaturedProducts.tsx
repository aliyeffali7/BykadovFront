'use client'

import Link from 'next/link'
import ProductCard from './ProductCard'
import { categories } from '@/lib/categories'

// Pull 2 products from each of the first 4 categories for homepage variety
const featured = categories
  .slice(0, 4)
  .flatMap((c) => c.products.slice(0, 2).map((p) => ({ ...p, category: c.name, slug: c.slug })))

export default function FeaturedProducts() {
  return (
    <section id="featured" className="py-24 lg:py-32 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 lg:mb-16 text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-[#DDBC75] font-medium mb-3">
            Sizin üçün seçilmişdir
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white">
            Seçilmiş Məhsullar
          </h2>
          <div className="mt-4 mx-auto w-16 h-px bg-gradient-to-r from-transparent via-[#DDBC75] to-transparent" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {featured.map((product, i) => (
            <div key={`${product.slug}-${product.id}`} className="group/wrap">
              <ProductCard product={product} index={i} categorySlug={product.slug} />
              <Link
                href={`/shop/${product.slug}`}
                className="block text-center text-[10px] text-[#DDBC75]/30 hover:text-[#DDBC75]/60 mt-2 transition-colors"
              >
                {product.category}
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            href="/shop"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-sm font-semibold text-[#1A1D1D] transition-all duration-300 hover:shadow-xl hover:shadow-[#DDBC75]/20 hover:scale-[1.02]"
            style={{
              background: 'linear-gradient(105deg, #DDBC75 0%, #EDD494 50%, #C4A355 100%)',
            }}
          >
            Bütün Məhsulları Gör
          </Link>
        </div>
      </div>
    </section>
  )
}
