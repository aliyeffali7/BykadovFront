import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import { categories, getCategoryBySlug, getProductById } from '@/lib/categories'
import { getProductThumbnails } from '@/lib/productImages'

export async function generateStaticParams() {
  return categories.flatMap((cat) =>
    cat.products.map((p) => ({ slug: cat.slug, productId: String(p.id) }))
  )
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string; productId: string }
}) {
  const product = getProductById(params.slug, Number(params.productId))
  const cat = getCategoryBySlug(params.slug)
  return {
    title: product ? `${product.name} — ByKadov` : 'ByKadov',
    description: product?.description ?? cat?.longDescription,
  }
}

// Placeholder detail rows based on category
function getDetailRows(categorySlug: string): { label: string; value: string }[] {
  const map: Record<string, { label: string; value: string }[]> = {
    clothing: [
      { label: 'Material', value: '100% Premium Kətan / Üzvi Pambıq' },
      { label: 'Ölçü Uyğunluğu', value: 'Rahat, ölçüyə uyğun' },
      { label: 'Baxım', value: 'Soyuq suda əllə yuyun, düz qurudun' },
      { label: 'Mənşə', value: 'Portuqaliyada hazırlanmışdır' },
    ],
    'women-accessories': [
      { label: 'Material', value: 'Həqiqi dəri / Premium parça' },
      { label: 'Ölçülər', value: 'Əksər ölçülərə uyğundur' },
      { label: 'Baxım', value: 'Yalnız yerli təmizlənmə' },
      { label: 'Mənşə', value: 'İtaliyada əllə hazırlanmışdır' },
    ],
    'temporary-tattoos': [
      { label: 'Müddət', value: '7–14 gün davam edir' },
      { label: 'Tətbiq', value: 'Su transferi, 30 saniyə' },
      { label: 'Uyğundur', value: 'Dəri üçün təhlükəsiz, dərmatolog sınaqdan keçirilmişdir' },
      { label: 'Ölçü', value: 'Dəstdə müxtəlif ölçülər' },
    ],
    'home-decor': [
      { label: 'Material', value: 'Əl işi təbii materiallar' },
      { label: 'Ölçülər', value: 'Ölçü üçün məhsul şəklinə baxın' },
      { label: 'Baxım', value: 'Nəm bezlə silin' },
      { label: 'Mənşə', value: 'Usta tərəfindən hazırlanmışdır' },
    ],
    jewellery: [
      { label: 'Material', value: '18k qızıl örtüklü / Saf gümüş' },
      { label: 'Örtük', value: 'Qararma əleyhinə örtük' },
      { label: 'Baxım', value: 'Su və ətirdən uzaq saxlayın' },
      { label: 'Qablaşdırma', value: 'Hədiyyə qutusunda gəlir' },
    ],
    beauty: [
      { label: 'Dəri Növü', value: 'Bütün dəri növləri' },
      { label: 'Tərkib', value: 'Təmiz formula, paraben-siz' },
      { label: 'Həcm', value: 'Məhsul etiketinə baxın' },
      { label: 'Saxlama Müddəti', value: 'Açılmamış 24 ay' },
    ],
    bags: [
      { label: 'Material', value: 'Vegan dəri / Təbii toxunma' },
      { label: 'Bağlama', value: 'Fermuarlı / Maqnit' },
      { label: 'Qayış', value: 'Tənzimlənən & çıxarılan' },
      { label: 'Astar', value: 'Cibli saten iç' },
    ],
    shoes: [
      { label: 'Material', value: 'Dəri üst, rezin taban' },
      { label: 'Ölçüləmə', value: 'Ölçüyə uyğun — arada qalırsa böyük ölçü seçin' },
      { label: 'Topuq Hündürlüyü', value: 'Stilə görə dəyişir' },
      { label: 'Baxım', value: 'Dəri kondisioneri tövsiyə olunur' },
    ],
    perfumes: [
      { label: 'Konsentrasiya', value: 'Eau de Parfum (EDP)' },
      { label: 'Üst Notlar', value: 'Sitrus, Berqamot' },
      { label: 'Əsas Notlar', value: 'Kəhrəba, Müşk, Sandal Ağacı' },
      { label: 'Uzunömürlülük', value: 'Dəridə 8–12 saat' },
    ],
    seasonal: [
      { label: 'Məzmun', value: 'Seçilmiş mövsümi məhsullar' },
      { label: 'Nəşr', value: 'Məhdud — stok qurtarana qədər' },
      { label: 'Hədiyyəyə Hazır', value: 'Premium hədiyyə qutusunda gəlir' },
      { label: 'Mövcudluq', value: 'Yalnız cari mövsüm' },
    ],
  }
  return map[categorySlug] ?? []
}

function getDescription(name: string, categorySlug: string): string {
  const descriptions: Record<string, string> = {
    clothing:
      `${name} premium təbii lifdən hazırlanmış gərdərob əsasıdır. Səhər qəhvəsindən axşam çıxışlarına qədər gününüzü rahat keçirəcəksiniz. Rahat siluet hər bədən növünə yaraşır.`,
    'women-accessories':
      `${name} ilə istənilən görünüşünüzü tamamlayın. Yüksək keyfiyyətli materiallardan diqqətlə hazırlanmış bu parça, gündəlik geyimlərinizdən zərif axşam stilinizə qədər mükəmməl son toxunuşu əlavə edir.`,
    'temporary-tattoos':
      `${name} ilə öhdəliksiz stilinizi ifadə edin. Peşəkar dərəcəli mürəkkəb transfer texnologiyası bunların inanılmaz dərəcədə real görünməsini təmin edir. Su keçirməz və dəri üçün təhlükəsiz formula iki həftəyə qədər davam edir.`,
    'home-decor':
      `${name} ilə məkana istilik və xarakter qatın. Hər parça öz sənətkarlığı və zaman keçməz estetikası üçün diqqətlə seçilmişdir. İstənilən otağın hissini dəyişdirən sadə bir əlavə.`,
    jewellery:
      `${name} hər gün taxmaq üçün və ya xüsusi günlər üçün qorunan əbədi bir parçadır. Detallarına diqqət yetirilərək hazırlanmış bu parça işığı gözəl şəkildə tutaraq istənilən görünüşü tamamlayır.`,
    beauty:
      `Təmiz, effektiv tərkiblərlə formalaşdırılmış ${name} sevidiyiniz görünür nəticələr vermək üçün dizayn edilmişdir. Gündəlik istifadə üçün yumşaq, dəri üçün real fərq yaradan güclü.`,
    bags:
      `${name} hərəkətdə olan müasir qadın üçün dizayn edilmişdir. Estetikadan ödün vermədən geniş yer və düşünülmüş organizasiya təklif edən bu çanta stil ilə praktikliyi birləşdirir.`,
    shoes:
      `${name} ilə inamla addım atın. Bütün gün rahatlıq üçün dizayn edilmiş və diqqət cəlb edən siluetli bu ayaqqabılar, dəfələrlə əlsiz durmayacağınız ayaqqabılardır.`,
    perfumes:
      `${name} hekayənizi danışan sofistike bir ətirdir. Təzə üst notlarla açılan və zəngin, davamlı bir bazaya dərindən çatan bütövləşdirici bir qarışıq. Maksimum proyeksiya üçün nəbz nöqtələrinə çəkin.`,
    seasonal:
      `${name} diqqətlə seçilmiş mövsümi bir təklif olub, yalnız məhdud müddət ərzində mövcuddur. Bu kolleksiyadan hər parça uzun müddət sonra da qiymətləndirəcəyiniz keyfiyyətli məhsullarla mövsümün ruhunu qeyd edir.`,
  }
  return descriptions[categorySlug] ?? `Discover the ${name} — a carefully curated piece from our ByKadov collection.`
}

export default function ProductPage({
  params,
}: {
  params: { slug: string; productId: string }
}) {
  const cat = getCategoryBySlug(params.slug)
  const product = getProductById(params.slug, Number(params.productId))
  if (!cat || !product) notFound()

  const details = getDetailRows(cat.slug)
  const description = product.description ?? getDescription(product.name, cat.slug)
  const recommended = cat.products.filter((p) => p.id !== product.id).slice(0, 4)
  const thumbnails = getProductThumbnails(cat.slug, product.id)

  return (
    <div className="min-h-screen bg-brand-black">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 lg:pt-36 pb-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-white/35 mb-10 font-medium flex-wrap">
          <Link href="/" className="hover:text-[#DDBC75] transition-colors">Əsas Səhifə</Link>
          <ChevronRight size={12} className="text-white/20" />
          <Link href="/shop" className="hover:text-[#DDBC75] transition-colors">Mağaza</Link>
          <ChevronRight size={12} className="text-white/20" />
          <Link href={`/shop/${cat.slug}`} className="hover:text-[#DDBC75] transition-colors">{cat.name}</Link>
          <ChevronRight size={12} className="text-white/20" />
          <span className="text-white/60 line-clamp-1">{product.name}</span>
        </nav>

        {/* Product layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* ── Image Area ─────────────────────────── */}
          <div className="space-y-3">
            {/* Main image */}
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src={thumbnails[0]}
                alt={product.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              {product.badge && (
                <span
                  className={`absolute top-4 left-4 text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full ${
                    product.badge === 'Yeni' ? 'bg-[#DDBC75] text-[#1A1D1D]' :
                    product.badge === 'Endirim' ? 'bg-red-500/90 text-white' :
                    product.badge === 'Məhdud' ? 'bg-purple-500/90 text-white' :
                    'bg-white/10 text-white border border-white/20'
                  }`}
                >
                  {product.badge}
                </span>
              )}
            </div>

            {/* Thumbnail strip */}
            <div className="grid grid-cols-4 gap-3">
              {thumbnails.map((src, i) => (
                <div
                  key={i}
                  className={`relative aspect-square rounded-xl overflow-hidden cursor-pointer border transition-all duration-200 ${
                    i === 0 ? 'border-[#DDBC75]/50' : 'border-brand-border hover:border-[#DDBC75]/25'
                  }`}
                >
                  <Image src={src} alt={`${product.name} view ${i + 1}`} fill className="object-cover" sizes="150px" />
                </div>
              ))}
            </div>
          </div>

          {/* ── Product Info ────────────────────────── */}
          <div className="flex flex-col">
            {/* Category tag */}
            <Link
              href={`/shop/${cat.slug}`}
              className="text-xs font-medium tracking-[0.15em] uppercase text-[#DDBC75]/60 hover:text-[#DDBC75] transition-colors mb-3 w-fit"
            >
              {cat.icon} {cat.name}
            </Link>

            {/* Name */}
            <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-semibold text-[#DDBC75]">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-lg text-white/30 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                  <span className="text-sm font-medium text-red-400">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-sm text-white/55 leading-relaxed mb-8">
              {description}
            </p>

            {/* Size selector — only for clothing & shoes */}
            {(cat.slug === 'clothing' || cat.slug === 'shoes') && (
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold tracking-widest uppercase text-white/50">
                    Ölçü
                  </span>
                  <button className="text-xs text-[#DDBC75]/60 hover:text-[#DDBC75] transition-colors">
                    Ölçü cədvəli
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {(cat.slug === 'shoes'
                    ? ['36', '37', '38', '39', '40', '41']
                    : ['XS', 'S', 'M', 'L', 'XL']
                  ).map((size, i) => (
                    <button
                      key={size}
                      className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200 ${
                        i === 1
                          ? 'border-[#DDBC75] text-[#DDBC75] bg-[#DDBC75]/5'
                          : 'border-brand-border text-white/50 hover:border-[#DDBC75]/30 hover:text-white/80'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <span className="text-xs font-semibold tracking-widest uppercase text-white/50 block mb-3">
                Miqdar
              </span>
              <div className="flex items-center gap-3 w-fit">
                <button className="w-9 h-9 rounded-lg border border-brand-border text-white/60 hover:border-[#DDBC75]/30 hover:text-white transition-all flex items-center justify-center text-lg">
                  −
                </button>
                <span className="w-10 text-center text-sm font-medium text-white">1</span>
                <button className="w-9 h-9 rounded-lg border border-brand-border text-white/60 hover:border-[#DDBC75]/30 hover:text-white transition-all flex items-center justify-center text-lg">
                  +
                </button>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <button className="flex-1 py-4 rounded-xl bg-[#DDBC75] text-[#1A1D1D] text-sm font-bold tracking-wide hover:bg-[#c9aa60] transition-colors">
                Səbətə Əlavə Et
              </button>
              <button className="flex-1 py-4 rounded-xl border border-[#DDBC75]/30 text-[#DDBC75] text-sm font-bold tracking-wide hover:bg-[#DDBC75]/5 hover:border-[#DDBC75]/60 transition-all">
                İndi Al
              </button>
            </div>

            {/* Divider */}
            <div className="border-t border-brand-border pt-8">
              {/* Details table */}
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white/35 mb-4">
                Məhsul təfərrüatları
              </p>
              <div className="space-y-3">
                {details.map(({ label, value }) => (
                  <div key={label} className="flex gap-4">
                    <span className="text-xs text-white/35 w-24 flex-shrink-0 pt-0.5">{label}</span>
                    <span className="text-xs text-white/65">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust badges */}
            <div className="mt-8 pt-6 border-t border-brand-border flex flex-wrap gap-4">
              {['$80-dan yuxarı pulsuz çatdırılma', 'Asan geri qaytarma', 'Təhlükəsiz ödəniş'].map((badge) => (
                <span key={badge} className="text-[11px] text-white/30 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DDBC75]/40" />
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* ── Recommended Products ──────────────────── */}
      <section className="border-t border-brand-border py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-[10px] tracking-[0.18em] uppercase text-[#DDBC75]/50 font-medium mb-1">
                Bunları da bəyənə bilərsiniz
              </p>
              <h2 className="font-serif text-2xl lg:text-3xl font-bold text-white">
                {cat.name} brendindən daha çox
              </h2>
            </div>
            <Link
              href={`/shop/${cat.slug}`}
              className="text-xs font-medium text-[#DDBC75]/60 hover:text-[#DDBC75] transition-colors hidden sm:block"
            >
              Hamısına bax →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
            {recommended.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} categorySlug={cat.slug} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
