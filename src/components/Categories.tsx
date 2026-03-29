'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { categories } from '@/lib/categories'

export default function Categories() {
  const featured = categories.slice(0, 6)

  return (
    <section id="categories" className="py-24 lg:py-32 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 lg:mb-20 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#DDBC75] font-medium mb-3">
              Kataloqa görə baxın
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white leading-tight">
              Sevdiyiniz hər şey,
              <span className="text-gold-gradient"> bir yerdə.</span>
            </h2>
          </div>
          <Link
            href="/shop"
            className="self-start sm:self-auto flex items-center gap-2 text-sm text-[#DDBC75]/70 hover:text-[#DDBC75] transition-colors font-medium"
          >
            Bütün kataloqlar <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {featured.map((cat, i) => (
            <Link
              key={cat.slug}
              href={`/shop/${cat.slug}`}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 ${
                i === 0 || i === 3 ? 'col-span-2 lg:col-span-1' : ''
              }`}
              style={{ minHeight: i === 0 || i === 3 ? '220px' : '200px' }}
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${cat.cardImage}')` }}
              />
              {/* Dark overlay — deepens on hover */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300" />
              {/* Gold bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              {/* Hover border */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#DDBC75]/30 transition-colors duration-300" />

              {/* Content */}
              <div className="relative z-10 h-full p-6 sm:p-8 flex flex-col justify-between" style={{ minHeight: 'inherit' }}>
                <div className="flex justify-end">
                  <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 text-[#DDBC75]">
                    <ArrowUpRight size={20} />
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white mb-1 group-hover:text-[#DDBC75] transition-colors duration-300">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300">
                    {cat.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Remaining categories as pill links */}
        <div className="mt-6 flex flex-wrap gap-2">
          {categories.slice(6).map((cat) => (
            <Link
              key={cat.slug}
              href={`/shop/${cat.slug}`}
              className="px-4 py-2.5 rounded-full border border-brand-border text-sm text-white/50 hover:text-[#DDBC75] hover:border-[#DDBC75]/25 hover:bg-[#DDBC75]/5 transition-all"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
