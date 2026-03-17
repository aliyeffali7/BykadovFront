import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { categories } from '@/lib/categories'

export const metadata = {
  title: 'Bütün Mağaza — ByKadov',
  description: 'ByKadov-da bütün kateqoriyalara baxın.',
}

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-brand-black">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 70% at 50% 0%, rgba(221,188,117,0.09) 0%, transparent 60%), linear-gradient(180deg, #111414 0%, #1A1D1D 100%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-[#DDBC75]/60 font-medium mb-4">
            Bütün Kateqoriyalar
          </p>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-white mb-4">
            Hər Şeyi Al
          </h1>
          <p className="text-white/40 text-lg max-w-md mx-auto">
            Tam seçilmiş kolleksiyamızı kəşf edin.
          </p>
        </div>
      </section>

      {/* Categories grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/shop/${cat.slug}`}
              className="group relative rounded-2xl overflow-hidden border border-brand-border hover:border-[#DDBC75]/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/40"
              style={{
                background: `linear-gradient(135deg, #1e2222 0%, #1A1D1D 100%)`,
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(ellipse 80% 80% at 50% 110%, ${cat.color}, transparent)`,
                }}
              />
              <div className="relative p-6 flex items-center gap-5">
                <span className="text-4xl flex-shrink-0">{cat.icon}</span>
                <div className="min-w-0">
                  <h2 className="font-serif text-xl font-semibold text-white group-hover:text-[#DDBC75] transition-colors">
                    {cat.name}
                  </h2>
                  <p className="text-sm text-white/40 mt-0.5">{cat.description}</p>
                  <p className="text-xs text-[#DDBC75]/50 mt-2 font-medium">
                    {cat.products.length} məhsul
                  </p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="ml-auto flex-shrink-0 text-[#DDBC75]/0 group-hover:text-[#DDBC75]/70 transition-all duration-300 translate-x-1 group-hover:translate-x-0"
                />
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
