'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { ArrowRight, Sparkles } from 'lucide-react'

const CLOTHES_IMG = 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=85'
const PERFUME_IMG = 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=700&q=85'
const JEWELLERY_IMG = 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=700&q=85'
const MOBILE_BG = 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85'

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = parallaxRef.current
    if (!el) return
    const onScroll = () => {
      el.style.transform = `translateY(${window.scrollY * 0.15}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="relative w-full h-screen min-h-[680px] overflow-hidden bg-[#0b0d0d]">

      {/* ── Mobile background (hidden on lg+) ── */}
      <div className="absolute inset-0 lg:hidden">
        <Image src={MOBILE_BG} alt="ByKadov" fill className="object-cover object-top" priority />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(11,13,13,0.92) 0%, rgba(11,13,13,0.65) 60%, rgba(11,13,13,0.4) 100%)' }} />
      </div>

      {/* ── Desktop layout ─────────────────────────────────────── */}
      <div className="hidden lg:block absolute inset-0">
        {/* Dark base */}
        <div className="absolute inset-0 bg-[#0b0d0d]" />

        {/* Subtle gold glow left */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 55% 70% at 15% 55%, rgba(221,188,117,0.07) 0%, transparent 65%)' }} />

        {/* Image collage — right half */}
        <div ref={parallaxRef} className="absolute right-0 top-0 w-[52%] h-full will-change-transform">

          {/* Tall clothing image — left of collage */}
          <div
            className="absolute overflow-hidden rounded-2xl shadow-2xl"
            style={{
              left: '4%',
              top: '8%',
              width: '44%',
              height: '78%',
              transform: 'rotate(-2.5deg)',
              boxShadow: '0 30px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(221,188,117,0.12)',
            }}
          >
            <Image src={CLOTHES_IMG} alt="Fashion" fill className="object-cover" priority sizes="400px" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <span className="absolute bottom-3 left-3 text-[9px] tracking-[0.18em] uppercase text-[#DDBC75]/80 font-semibold bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full border border-[#DDBC75]/20">
              Clothing
            </span>
          </div>

          {/* Perfume image — top right */}
          <div
            className="absolute overflow-hidden rounded-2xl shadow-2xl"
            style={{
              right: '2%',
              top: '5%',
              width: '47%',
              height: '44%',
              transform: 'rotate(1.8deg)',
              boxShadow: '0 25px 60px rgba(0,0,0,0.65), 0 0 0 1px rgba(221,188,117,0.10)',
            }}
          >
            <Image src={PERFUME_IMG} alt="Perfumery" fill className="object-cover" sizes="360px" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <span className="absolute bottom-3 left-3 text-[9px] tracking-[0.18em] uppercase text-[#DDBC75]/80 font-semibold bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full border border-[#DDBC75]/20">
              Perfumery
            </span>
          </div>

          {/* Jewellery image — bottom right */}
          <div
            className="absolute overflow-hidden rounded-2xl shadow-2xl"
            style={{
              right: '2%',
              bottom: '6%',
              width: '47%',
              height: '44%',
              transform: 'rotate(-1.2deg)',
              boxShadow: '0 25px 60px rgba(0,0,0,0.65), 0 0 0 1px rgba(221,188,117,0.10)',
            }}
          >
            <Image src={JEWELLERY_IMG} alt="Jewellery" fill className="object-cover" sizes="360px" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <span className="absolute bottom-3 left-3 text-[9px] tracking-[0.18em] uppercase text-[#DDBC75]/80 font-semibold bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full border border-[#DDBC75]/20">
              Jewellery
            </span>
          </div>

          {/* Fade the collage into the dark bg on the left edge */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0b0d0d] to-transparent pointer-events-none" />
        </div>
      </div>

      {/* ── Noise texture ── */}
      <div className="absolute inset-0 hero-noise opacity-30 pointer-events-none" />

      {/* ── Content ───────────────────────────────────────────── */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl">

            {/* Eyebrow */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 border"
              style={{
                background: 'rgba(221,188,117,0.08)',
                borderColor: 'rgba(221,188,117,0.25)',
                animation: 'fadeUp 0.6s ease forwards',
              }}
            >
              <Sparkles size={13} className="text-[#DDBC75]" />
              <span className="text-xs font-medium tracking-[0.15em] uppercase text-[#DDBC75]">
                Seçilmiş Kolleksiyalar
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] mb-6"
              style={{ animation: 'fadeUp 0.7s 0.1s ease both' }}
            >
              <span className="block text-white">Stil</span>
              <span className="block text-gold-gradient">Yenidən Kəşf Et</span>
              <span className="block text-white/75 text-4xl sm:text-5xl lg:text-6xl font-normal italic mt-1">
                sənin üçün.
              </span>
            </h1>

            {/* Subtext */}
            <p
              className="text-base sm:text-lg text-white/50 leading-relaxed mb-10 max-w-md"
              style={{ animation: 'fadeUp 0.7s 0.2s ease both' }}
            >
              Moda, zərgərlik, ətriyyat, aksesuarlar və daha çox — hamısı bir yerdə əl ilə seçilmişdir.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4"
              style={{ animation: 'fadeUp 0.7s 0.3s ease both' }}
            >
              <a
                href="#categories"
                className="group flex items-center gap-3 px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-300"
                style={{
                  background: 'linear-gradient(105deg, #DDBC75 0%, #EDD494 50%, #C4A355 100%)',
                  color: '#1A1D1D',
                  boxShadow: '0 0 32px rgba(221,188,117,0.25)',
                }}
              >
                İndi Al
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#categories"
                className="flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-[#DDBC75] border border-[#DDBC75]/30 hover:border-[#DDBC75]/60 hover:bg-[#DDBC75]/5 transition-all duration-300"
              >
                Kateqoriyalara Bax
              </a>
            </div>

            {/* Category pills */}
            <div
              className="flex flex-wrap gap-2 mt-8"
              style={{ animation: 'fadeUp 0.7s 0.4s ease both' }}
            >
              {['Geyim', 'Ətriyyat', 'Zərgərlik', 'Aksesuarlar', 'Gözəllik'].map((cat) => (
                <span
                  key={cat}
                  className="text-[10px] tracking-[0.12em] uppercase font-medium px-3 py-1 rounded-full text-white/35 border border-white/8"
                  style={{ background: 'rgba(255,255,255,0.03)' }}
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll hint ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-[10px] tracking-[0.2em] uppercase text-white/25 font-medium">Sürüş</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#DDBC75]/35 to-transparent" />
      </div>
    </section>
  )
}
