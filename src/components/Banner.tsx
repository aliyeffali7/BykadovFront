'use client'

export default function Banner() {
  return (
    <section className="py-20 lg:py-28 overflow-hidden relative">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, #1a1f1f 0%, #1A1D1D 50%, #111414 100%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(221,188,117,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Decorative rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className="absolute rounded-full border border-[#DDBC75]/05"
            style={{
              width: `${n * 280}px`,
              height: `${n * 280}px`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs tracking-[0.25em] uppercase text-[#DDBC75]/70 font-medium mb-5">
          Yeni Mövsüm
        </p>
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Kəşf Et{' '}
          <span className="text-gold-gradient italic">Bahar Kolleksiyasını</span>
        </h2>
        <p className="text-white/45 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Bütün kateqoriyalarda yeni gələnlər. Zərif zərgərlikdən sadə küçə
          geyimlərinə qədər — mövsümün ən yaxşıları, sizin üçün seçilmişdir.
        </p>
        <a
          href="#categories"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-sm tracking-wide text-[#1A1D1D] transition-all duration-300 hover:shadow-xl hover:shadow-[#DDBC75]/20 hover:scale-[1.02]"
          style={{
            background: 'linear-gradient(105deg, #DDBC75 0%, #EDD494 50%, #C4A355 100%)',
          }}
        >
          Yeni Gələnləri Kəşf Et
        </a>
      </div>
    </section>
  )
}
