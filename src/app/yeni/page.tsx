import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import { categories } from '@/lib/categories'

export const metadata = {
  title: 'Yeni Gələnlər — ByKadov',
  description: 'ByKadov-a ən son əlavə edilən məhsullar.',
}

export default function YeniPage() {
  // Collect all products that have a dateAdded, attach categorySlug, sort newest first
  const newProducts = categories
    .flatMap((cat) =>
      cat.products
        .filter((p) => p.dateAdded)
        .map((p) => ({ ...p, categorySlug: cat.slug }))
    )
    .sort((a, b) => (b.dateAdded! > a.dateAdded! ? 1 : -1))
    .slice(0, 16)

  return (
    <div className="min-h-screen bg-brand-black">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 60% at 50% 0%, rgba(221,188,117,0.10) 0%, transparent 65%), linear-gradient(180deg, #111414 0%, #1A1D1D 100%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-[#DDBC75]/60 font-medium mb-4">
            Ən Son Əlavələr
          </p>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-white mb-4">
            Yeni Gələnlər
          </h1>
          <p className="text-white/40 text-lg max-w-md mx-auto">
            Hər kateqoriyadan ən yeni məhsullar, tarixə görə sıralanmışdır.
          </p>
        </div>
      </section>

      {/* Products grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 pb-24">
        <p className="text-xs text-white/30 mb-8 font-medium">
          {newProducts.length} məhsul
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {newProducts.map((product, i) => (
            <ProductCard
              key={`${product.categorySlug}-${product.id}`}
              product={product}
              index={i}
              categorySlug={product.categorySlug}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
