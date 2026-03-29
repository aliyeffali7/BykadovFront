import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { categories } from '@/lib/categories'

export const metadata = {
  title: 'Kataloq — ByKadov',
  description: 'ByKadov-da bütün kataloqlara baxın.',
}

// Gap-free bento layout — every row sums to exactly 3 columns:
// Row 1+2: Geyim(2×2) + Qadın(1×1) + Tattoo(1×1)  → 2+1 / 2+1 = ✓
// Row 3:   Ev(1×1)    + Zərgərlik(2×1)             → 1+2      = ✓
// Row 4:   Gözəllik(1×1) + Çantalar(1×1) + Ayaqqabılar(1×1) → 1+1+1 = ✓
// Row 5:   Ətriyyat(2×1) + Mövsümi(1×1)            → 2+1      = ✓
const layout = [
  { col: 2, row: 2 }, // 0 Geyim
  { col: 1, row: 1 }, // 1 Qadın Aks.
  { col: 1, row: 1 }, // 2 Tattoo
  { col: 1, row: 1 }, // 3 Ev & Dekor
  { col: 2, row: 1 }, // 4 Zərgərlik   — wide (was tall; fixes the gap)
  { col: 1, row: 1 }, // 5 Gözəllik
  { col: 1, row: 1 }, // 6 Çantalar
  { col: 1, row: 1 }, // 7 Ayaqqabılar
  { col: 2, row: 1 }, // 8 Ətriyyat
  { col: 1, row: 1 }, // 9 Mövsümi
]

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-brand-black">
      <Navbar />

      <main className="pt-20 lg:pt-24 pb-20">
        {/* Page title row */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex items-end justify-between">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#DDBC75]/60 font-medium mb-2">
              Bütün Kataloqlar
            </p>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white">
              Mağaza
            </h1>
          </div>
          <p className="text-sm text-white/30 hidden sm:block">
            {categories.length} kateqoriya
          </p>
        </div>

        {/* Bento grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 auto-rows-[220px] lg:auto-rows-[260px]" style={{ gridAutoFlow: 'dense' }}>
            {categories.map((cat, i) => {
              const span = layout[i] ?? { col: 1, row: 1 }
              return (
                <Link
                  key={cat.slug}
                  href={`/shop/${cat.slug}`}
                  className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/60"
                  style={{
                    gridColumn: span.col === 2 ? 'span 2' : 'span 1',
                    gridRow:    span.row === 2 ? 'span 2' : 'span 1',
                  }}
                >
                  {/* Background image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${cat.cardImage}')` }}
                  />
                  {/* Overlays */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                  {/* Gold border on hover */}
                  <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#DDBC75]/35 transition-colors duration-300" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 lg:p-7 flex flex-col justify-between">
                    {/* Top */}
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] tracking-[0.2em] uppercase text-white/50 font-medium bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full">
                        {cat.products.length} məhsul
                      </span>
                      <ArrowUpRight
                        size={20}
                        className="text-[#DDBC75]/0 group-hover:text-[#DDBC75] transition-all duration-300 translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"
                      />
                    </div>
                    {/* Bottom */}
                    <div>
                      <h2 className={`font-serif font-bold text-white group-hover:text-[#DDBC75] transition-colors duration-300 leading-tight mb-1 ${
                        span.col === 2 || span.row === 2 ? 'text-3xl lg:text-4xl' : 'text-xl lg:text-2xl'
                      }`}>
                        {cat.name}
                      </h2>
                      <p className="text-sm text-white/55 group-hover:text-white/75 transition-colors duration-300">
                        {cat.description}
                      </p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
