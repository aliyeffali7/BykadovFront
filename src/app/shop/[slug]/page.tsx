import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, SlidersHorizontal } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import { categories, getCategoryBySlug } from '@/lib/categories'

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const cat = getCategoryBySlug(params.slug)
  return {
    title: cat ? `${cat.name} — ByKadov` : 'ByKadov',
    description: cat?.longDescription,
  }
}

const sortOptions = ['Seçilmiş', 'Qiymət: Aşağıdan Yuxarı', 'Qiymət: Yuxarıdan Aşağı', 'Yeni Gələnlər']
const filterGroups = [
  { label: 'Qiymət', options: ['$30-dan aşağı', '$30 – $75', '$75 – $150', '$150+'] },
  { label: 'Mövcudluq', options: ['Stokda var', 'Sifariş'] },
]

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const cat = getCategoryBySlug(params.slug)
  if (!cat) notFound()

  return (
    <div className="min-h-screen bg-brand-black">
      <Navbar />

      {/* ── Category Hero ─────────────────────────── */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 70% 80% at 60% 0%, ${cat.color}, transparent 65%), linear-gradient(180deg, #111414 0%, #1A1D1D 100%)`,
          }}
        />
        <div className="absolute inset-0 hero-noise opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-white/35 mb-8 font-medium">
            <Link href="/" className="hover:text-[#DDBC75] transition-colors">
              Əsas Səhifə
            </Link>
            <ChevronRight size={12} className="text-white/20" />
            <Link href="/shop" className="hover:text-[#DDBC75] transition-colors">
              Mağaza
            </Link>
            <ChevronRight size={12} className="text-white/20" />
            <span className="text-white/60">{cat.name}</span>
          </nav>

          <div className="flex items-end gap-6">
            {cat.iconImage ? (
              <Image src={cat.iconImage} alt={cat.name} width={60} height={60} className="object-contain" />
            ) : (
              <span className="text-5xl lg:text-6xl">{cat.icon}</span>
            )}
            <div>
              <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                {cat.name}
              </h1>
              <p className="text-white/45 text-base mt-2 max-w-lg leading-relaxed">
                {cat.longDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Filter Bar ───────────────────────────────── */}
      <div className="sticky top-16 lg:top-20 z-30 bg-brand-black/95 backdrop-blur-md border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 py-3 flex-wrap">
            <div className="flex items-center gap-2 flex-shrink-0">
              <SlidersHorizontal size={15} className="text-[#DDBC75]/60" />
              <span className="text-xs font-medium text-white/40">Filtr:</span>
              {filterGroups.map((g) => (
                <div key={g.label} className="relative group">
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-white/55 border border-brand-border hover:border-[#DDBC75]/30 hover:text-[#DDBC75] transition-all">
                    {g.label}
                    <ChevronRight size={11} className="rotate-90" />
                  </button>
                  {/* Dropdown hint */}
                  <div className="absolute top-full left-0 mt-1 w-40 bg-brand-surface border border-brand-border rounded-xl p-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity shadow-xl z-40">
                    {g.options.map((o) => (
                      <button
                        key={o}
                        className="w-full text-left px-3 py-2 text-xs text-white/55 hover:text-[#DDBC75] hover:bg-white/5 rounded-lg transition-colors"
                      >
                        {o}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="text-xs text-white/30 hidden sm:block">Sırala:</span>
              <select className="bg-transparent text-xs text-white/55 border border-brand-border rounded-full px-3 py-1.5 hover:border-[#DDBC75]/30 hover:text-[#DDBC75] transition-all cursor-pointer outline-none">
                {sortOptions.map((o) => (
                  <option key={o} value={o} className="bg-brand-black">
                    {o}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* ── Products Grid ────────────────────────────── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <p className="text-xs text-white/30 mb-6 font-medium">
          {cat.products.length} məhsul
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {cat.products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} categorySlug={cat.slug} />
          ))}
        </div>

        {/* More products CTA */}
        <div className="text-center mt-16">
          <p className="text-sm text-white/30 mb-4">
            Kolleksiyamız böyüdükcə daha çox məhsul gələcək.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-[#DDBC75] border border-[#DDBC75]/25 hover:border-[#DDBC75]/50 hover:bg-[#DDBC75]/5 transition-all"
          >
            Əsas Səhifəyə Qayıt
          </Link>
        </div>
      </main>

      {/* ── Other Categories ─────────────────────────── */}
      <section className="border-t border-brand-border py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs tracking-[0.15em] uppercase text-[#DDBC75]/50 font-medium mb-6">
            Daha çoxunu kəşf et
          </p>
          <div className="flex flex-wrap gap-2">
            {categories
              .filter((c) => c.slug !== cat.slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/shop/${c.slug}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-brand-border text-sm text-white/50 hover:text-[#DDBC75] hover:border-[#DDBC75]/25 transition-all"
                >
                  {c.iconImage ? (
                    <Image src={c.iconImage} alt={c.name} width={16} height={16} className="object-contain" />
                  ) : (
                    <span>{c.icon}</span>
                  )}
                  {c.name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
