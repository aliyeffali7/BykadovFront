'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { categories } from '@/lib/categories'

type Props = {
  open: boolean
  onClose: () => void
}

export default function MegaMenu({ open, onClose }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose()
      }
    }
    if (open) document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open, onClose])

  return (
    <div
      ref={ref}
      className={`absolute top-full left-0 right-0 transition-all duration-300 z-50 ${
        open
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-3 pointer-events-none'
      }`}
    >
      {/* Backdrop blur border */}
      <div className="border-b border-brand-border bg-brand-black/97 backdrop-blur-xl shadow-2xl shadow-black/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/shop/${cat.slug}`}
                onClick={onClose}
                className="group flex items-start gap-3 p-3 rounded-xl transition-all duration-200 hover:bg-white/5 border border-transparent hover:border-[#DDBC75]/15"
              >
                {cat.iconImage ? (
                  <Image src={cat.iconImage} alt={cat.name} width={24} height={24} className="object-contain mt-0.5 flex-shrink-0" />
                ) : (
                  <span className="text-2xl mt-0.5 flex-shrink-0">{cat.icon}</span>
                )}
                <div className="min-w-0">
                  <p className="text-sm font-medium text-white/85 group-hover:text-[#DDBC75] transition-colors truncate">
                    {cat.name}
                  </p>
                  <p className="text-[11px] text-white/35 mt-0.5 leading-tight">
                    {cat.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Footer row */}
          <div className="mt-6 pt-5 border-t border-brand-border flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-4">
              {['Yeni Gələnlər', 'Ən Çox Satılanlar', 'Endirim'].map((label) => (
                <Link
                  key={label}
                  href="#"
                  onClick={onClose}
                  className="text-xs font-semibold tracking-wide text-[#DDBC75]/70 hover:text-[#DDBC75] transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
            <Link
              href="/shop"
              onClick={onClose}
              className="flex items-center gap-1.5 text-xs font-medium text-white/50 hover:text-white transition-colors"
            >
              Bütün Məhsullara Bax <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
