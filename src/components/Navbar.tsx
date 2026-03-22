'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search, ChevronDown, Menu, X } from 'lucide-react'
import MegaMenu from './MegaMenu'
import { categories } from '@/lib/categories'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mega menu on scroll
  useEffect(() => {
    if (scrolled) setMegaOpen(false)
  }, [scrolled])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-brand-black border-b border-brand-border shadow-lg shadow-black/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* ── Logo ─────────────────────────────── */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="ByKadov"
              width={160}
              height={40}
              className="object-contain"
              priority
            />
          </Link>

          {/* ── Desktop Nav ──────────────────────── */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Shop — triggers MegaMenu */}
            <button
              onClick={() => setMegaOpen((v) => !v)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                megaOpen
                  ? 'text-[#DDBC75] bg-white/5'
                  : 'text-white/70 hover:text-[#DDBC75] hover:bg-white/5'
              }`}
            >
              Mağaza
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${megaOpen ? 'rotate-180' : ''}`}
              />
            </button>

            <Link
              href="#featured"
              className="px-4 py-2 text-sm font-medium text-white/70 hover:text-[#DDBC75] hover:bg-white/5 rounded-lg transition-all duration-200"
            >
              Yeni Gələnlər
            </Link>
            <Link
              href="#"
              className="px-4 py-2 text-sm font-medium text-white/70 hover:text-[#DDBC75] hover:bg-white/5 rounded-lg transition-all duration-200"
            >
              Endirim
            </Link>
            <Link
              href="#"
              className="px-4 py-2 text-sm font-medium text-white/70 hover:text-[#DDBC75] hover:bg-white/5 rounded-lg transition-all duration-200"
            >
              Haqqımızda
            </Link>
          </nav>

          {/* ── Right Icons ──────────────────────── */}
          <div className="flex items-center gap-1">
<button className="p-2.5 text-white/60 hover:text-[#DDBC75] transition-colors rounded-lg hover:bg-white/5">
              <Search size={19} />
            </button>
            {/* Mobile hamburger */}
            <button
              className="lg:hidden ml-1 p-2.5 text-white/60 hover:text-[#DDBC75] transition-colors rounded-lg hover:bg-white/5"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── MegaMenu (desktop) ───────────────────────────────── */}
      <div className="hidden lg:block">
        <MegaMenu open={megaOpen} onClose={() => setMegaOpen(false)} />
      </div>

      {/* ── Mobile Drawer ────────────────────────────────────── */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        } bg-brand-black/98 backdrop-blur-xl border-t border-brand-border overflow-y-auto`}
      >
        <div className="px-4 py-4">
          {/* Mobile quick links */}
          <div className="flex gap-3 mb-4 pb-4 border-b border-brand-border">
            {['Yeni Gələnlər', 'Endirim', 'Haqqımızda'].map((l) => (
              <Link
                key={l}
                href="#"
                onClick={() => setMobileOpen(false)}
                className="text-sm text-white/60 hover:text-[#DDBC75] transition-colors"
              >
                {l}
              </Link>
            ))}
          </div>
          {/* All categories */}
          <p className="text-[10px] tracking-[0.15em] uppercase text-[#DDBC75]/50 font-medium mb-3">
            Kataloq
          </p>
          <div className="grid grid-cols-2 gap-1.5">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/shop/${cat.slug}`}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2.5 p-3 rounded-xl border border-brand-border hover:border-[#DDBC75]/20 hover:bg-white/3 transition-all"
              >
                {cat.iconImage ? (
                  <Image src={cat.iconImage} alt={cat.name} width={22} height={22} className="object-contain" />
                ) : (
                  <span className="text-xl">{cat.icon}</span>
                )}
                <span className="text-sm text-white/75 truncate">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
