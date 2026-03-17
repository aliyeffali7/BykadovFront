import Image from 'next/image'

export default function Footer() {
  const links = {
    Mağaza: ['Geyim', 'Qadın Aksesuarları', 'Müvəqqəti Döymələr', 'Ev & Dekor', 'Zərgərlik', 'Gözəllik'],
    Yardım: ['Tez-tez Soruşulan Suallar', 'Çatdırılma Məlumatı', 'Geri Qaytarma', 'Sifarişi İzlə', 'Bizimlə Əlaqə'],
    Şirkət: ['ByKadov Haqqında', 'Davamlılıq', 'Karyera', 'Mətbuat'],
  }

  return (
    <footer className="bg-brand-dark border-t border-brand-border">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="relative h-16 w-64 mb-4">
              <Image src="/logo.png" alt="ByKadov" fill className="object-contain" />
            </div>
            <p className="text-sm text-white/40 leading-relaxed mb-6 max-w-xs">
              Müasir fərd üçün seçilmiş stil. Keyfiyyətli parçalar, diqqətlə seçilmişdir.
            </p>
            <div className="flex gap-3">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-brand-border flex items-center justify-center text-white/40 hover:text-[#DDBC75] hover:border-[#DDBC75]/30 transition-all duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              {/* TikTok */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 rounded-full border border-brand-border flex items-center justify-center text-white/40 hover:text-[#DDBC75] hover:border-[#DDBC75]/30 transition-all duration-200"
              >
                <svg width="13" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.79a8.18 8.18 0 0 0 4.78 1.52V6.86a4.85 4.85 0 0 1-1.01-.17z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-xs tracking-[0.15em] uppercase font-semibold text-[#DDBC75]/70 mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-white/40 hover:text-white/80 transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} ByKadov. Bütün hüquqlar qorunur.
          </p>
          <a
            href="https://desinftec.az"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/20 hover:text-[#DDBC75]/60 transition-colors"
          >
            DESINFTEC tərəfindən hazırlanmışdır
          </a>
          <div className="flex gap-5">
            {['Gizlilik Siyasəti', 'Şərtlər', 'Kukilər'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-white/25 hover:text-white/50 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
