'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const faqs = [
  {
    q: 'Sifarişimi necə verə bilərəm?',
    a: 'İstədiyiniz məhsulu seçin, ölçü və miqdarı təyin edin, "Səbətə Əlavə Et" düyməsini basın və ödəniş səhifəsinə keçin. Bütün prosess bir neçə dəqiqə çəkir.',
  },
  {
    q: 'Çatdırılma nə qədər vaxt aparır?',
    a: 'Bakı daxilində sifarişlər 1–2 iş günü ərzində çatdırılır. Regionlara çatdırılma 3–5 iş günü çəkir. Bütün sifarişlər təsdiq e-poçtu ilə izlənilə bilər.',
  },
  {
    q: 'Hansı ödəniş üsulları qəbul olunur?',
    a: 'Visa, Mastercard, bank köçürməsi və nağd ödəniş (kuryer vasitəsilə) qəbul edirik. Bütün onlayn ödənişlər SSL şifrələməsi ilə qorunur.',
  },
  {
    q: 'Məhsul ölçüsü uyğun gəlməsə nə edim?',
    a: 'Məhsul çatdırıldıqdan sonra 7 gün ərzində bizimlə əlaqə saxlayın. Eyni məhsulun digər ölçüsü ilə dəyişdirmə imkanı mövcuddur.',
  },
  {
    q: 'Məhsullar orijinaldırmı?',
    a: 'Bəli, ByKadov-da satılan bütün məhsullar diqqətlə seçilmiş, orijinal brendlərdən təmin edilir. Keyfiyyət bizim əsas prioritetimizdir.',
  },
  {
    q: 'Toplu sifariş vermək mümkündürmü?',
    a: 'Bəli, toplu sifarişlər üçün bizimlə birbaşa əlaqə saxlayın. Xüsusi qiymət və çatdırılma şərtləri müzakirə edilə bilər.',
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-brand-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left text-white/80 hover:text-white transition-colors"
      >
        <span className="text-sm font-medium">{q}</span>
        <ChevronDown
          size={16}
          className={`flex-shrink-0 text-[#DDBC75]/60 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-5 text-sm text-white/45 leading-relaxed border-t border-brand-border pt-4">
          {a}
        </div>
      )}
    </div>
  )
}

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-brand-black">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 60% at 50% 0%, rgba(221,188,117,0.08) 0%, transparent 65%), linear-gradient(180deg, #111414 0%, #1A1D1D 100%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-[#DDBC75]/60 font-medium mb-4">
            Kömək Mərkəzi
          </p>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-white mb-4">
            Tez-tez Soruşulan Suallar
          </h1>
          <p className="text-white/40 text-lg max-w-md mx-auto">
            Ən çox verilən suallara cavablar burada.
          </p>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 lg:py-20 border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* About */}
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[#DDBC75]/60 font-medium mb-4">
                Şirkət Haqqında
              </p>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-6">
                ByKadov kimdir?
              </h2>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                ByKadov, Azərbaycanda müasir həyat tərzi brendidir. Geyim, zərgərlik, ətriyyat, aksesuar və gözəllik sahəsindəki seçilmiş kolleksiyalarımız ilə hər müştərimizə özünəxas stil təqdim edirik.
              </p>
              <p className="text-white/50 text-sm leading-relaxed">
                Hər məhsul diqqətlə seçilir, keyfiyyəti yoxlanılır və sizə ən yaxşı şəkildə çatdırılır. Bizim üçün moda yalnız geyim deyil — özünü ifadə etmənin bir yoludur.
              </p>
            </div>

            {/* Contact & Info */}
            <div className="space-y-6">
              <p className="text-xs tracking-[0.2em] uppercase text-[#DDBC75]/60 font-medium mb-4">
                Əlaqə Məlumatları
              </p>
              {[
                { label: 'Ünvan', value: 'Bakı, Azərbaycan' },
                { label: 'E-poçt', value: 'info@bykadov.az' },
                { label: 'Telefon', value: '+994 XX XXX XX XX' },
                { label: 'İş saatları', value: 'B.e – Cümə: 09:00 – 18:00' },
              ].map(({ label, value }) => (
                <div key={label} className="flex gap-6 border-b border-brand-border pb-4">
                  <span className="text-xs text-white/30 w-28 flex-shrink-0 pt-0.5 uppercase tracking-wider">
                    {label}
                  </span>
                  <span className="text-sm text-white/65">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ accordion */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-24 space-y-3">
        <p className="text-xs tracking-[0.2em] uppercase text-[#DDBC75]/60 font-medium mb-8">
          Tez-tez Soruşulan Suallar
        </p>
        {faqs.map((item) => (
          <FaqItem key={item.q} q={item.q} a={item.a} />
        ))}
      </main>

      <Footer />
    </div>
  )
}
