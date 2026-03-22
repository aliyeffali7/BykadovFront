export type Category = {
  slug: string
  name: string
  description: string
  longDescription: string
  icon: string
  iconImage?: string
  color: string
  products: Product[]
}

export type Product = {
  id: number
  name: string
  price: number
  originalPrice?: number
  badge?: string
  tag?: string
  description?: string
  details?: string[]
}

export const categories: Category[] = [
  {
    slug: 'clothing',
    name: 'Geyim',
    description: 'Gündəlik geyimlər & ifadəli parçalar',
    longDescription:
      'Sadə əsaslardan göz oxşayan ifadəli görünüşlərə qədər — hər parça keyfiyyət, rahatlıq və stil üçün seçilmişdir.',
    icon: '👗',
    color: 'rgba(221,188,117,0.10)',
    products: [
      { id: 1, name: 'Kətan Geniş Köynək', price: 67, badge: 'Yeni' },
      { id: 2, name: 'Geniş Balaq Şalvar', price: 89 },
      { id: 3, name: 'Toxunma Midi Don', price: 112, badge: 'Populyar' },
      { id: 4, name: 'Qısaldılmış Blazer — Qum Rəngi', price: 134 },
      { id: 5, name: 'Saten Ətək', price: 58, badge: 'Endirim', originalPrice: 79 },
      { id: 6, name: 'Pambıq Geniş T-Shirt', price: 34 },
      { id: 7, name: 'Yüksək Bel Düz Cins', price: 95 },
      { id: 8, name: 'Açıq Arxa Kətan Bluz', price: 72, badge: 'Yeni' },
      { id: 9, name: 'Büzməli Midi Ətək', price: 81 },
      { id: 10, name: 'Toxunma Krop Kardiqan', price: 63 },
      { id: 11, name: 'Çiçəkli Sarınma Paltarı', price: 99, badge: 'Populyar' },
      { id: 12, name: 'Yük Şalvarı', price: 87 },
    ],
  },
  {
    slug: 'women-accessories',
    name: 'Qadın Aksesuarları',
    description: 'Şərflər, kəmərlər, papaqlar & daha çox',
    longDescription:
      'Bir görünüşü tamamlayan son toxunuşlar. Hər əhval-ruhiyyə və mərasim üçün seçilmiş aksesuarlar.',
    icon: '🧣',
    color: 'rgba(221,188,117,0.08)',
    products: [
      { id: 1, name: 'İpək Bandana Şərfi', price: 38, badge: 'Yeni' },
      { id: 2, name: 'Geniş Kənarlı Günəş Papağı', price: 52 },
      { id: 3, name: 'Toxunma Dəri Kəmər', price: 44 },
      { id: 4, name: 'Saç Pencəsi Dəsti', price: 22, badge: 'Populyar' },
      { id: 5, name: 'Saten Baş Bandı', price: 18 },
      { id: 6, name: 'Böyük Günəş Eynəyi', price: 65, badge: 'Yeni' },
      { id: 7, name: 'Kaşmir Sarınma Şərfi', price: 98, badge: 'Endirim', originalPrice: 130 },
      { id: 8, name: 'Dəri Əlcəklər', price: 55 },
      { id: 9, name: 'Sikkə Kisəsi Açar Zənciri', price: 28 },
      { id: 10, name: 'Məxmər Saç Bağı Dəsti', price: 15 },
      { id: 11, name: 'İnci Saç Sancaqları', price: 19, badge: 'Yeni' },
      { id: 12, name: 'Yun Bere — Konyak', price: 41 },
    ],
  },
  {
    slug: 'temporary-tattoos',
    name: 'Tattoo',
    description: 'Cəsarətli dizaynlar, öhdəliksiz',
    longDescription:
      'Peşəkar müvəqqəti tattoo ki, real görünür və iki həftəyə qədər davam edir. Rəssamlar tərəfindən dizayn edilmişdir, hamı tərəfindən sevilir.',
    icon: '✦',
    iconImage: '/icons/tattoo.png',
    color: 'rgba(221,188,117,0.10)',
    products: [
      { id: 1, name: 'Çiçəkli Sarmaşıq Dəsti (12 ədəd)', price: 12, badge: 'Populyar' },
      { id: 2, name: 'Həndəsi Əjdaha', price: 9, badge: 'Yeni' },
      { id: 3, name: 'Minimal Xətt Üzlər', price: 14 },
      { id: 4, name: 'İlan & Gül Dəsti', price: 11 },
      { id: 5, name: 'Göy Ay & Ulduzlar', price: 10, badge: 'Populyar' },
      { id: 6, name: 'Yapon Dalğa Qolu', price: 18, badge: 'Yeni' },
      { id: 7, name: 'Ərəb Xəttatlıq Dəsti', price: 13 },
      { id: 8, name: 'Pələng Portreti', price: 9 },
      { id: 9, name: 'Kəpənək Çiyin Dəsti', price: 11, badge: 'Endirim', originalPrice: 15 },
      { id: 10, name: 'Mikro Ürək Nöqtələri', price: 7 },
      { id: 11, name: 'Qəbilə Qol Bandı', price: 10 },
      { id: 12, name: 'Vəhşi Çiçək Çəmən Dəsti', price: 15, badge: 'Yeni' },
    ],
  },
  {
    slug: 'home-decor',
    name: 'Ev & Dekor',
    description: 'Yaşayış məkanınızı dəyişin',
    longDescription:
      'Hər otağa istilik, faktura və fərdilik qatan əbədi ev əşyaları.',
    icon: '🕯',
    color: 'rgba(221,188,117,0.09)',
    products: [
      { id: 1, name: 'Əl İşi Keramik Vaza', price: 48, badge: 'Yeni' },
      { id: 2, name: 'Kətan Dekorativ Yastıq Dəsti', price: 65 },
      { id: 3, name: 'Mis Şamdan', price: 34, badge: 'Populyar' },
      { id: 4, name: 'Toxunma Pambıq Xalı — Fil Dişi', price: 149 },
      { id: 5, name: 'Terracotta Saksı Dəsti (3 ədəd)', price: 42 },
      { id: 6, name: 'Şüşə Asma İşıq', price: 87, badge: 'Yeni' },
      { id: 7, name: 'Qurudulmuş Pampas Otu Dəstəsi', price: 29 },
      { id: 8, name: 'Rattan Sini Dəsti', price: 38, badge: 'Endirim', originalPrice: 52 },
      { id: 9, name: 'Ətirli Soya Şamı', price: 24 },
      { id: 10, name: 'Makrame Divar Bəzəyi', price: 56, badge: 'Yeni' },
      { id: 11, name: 'Mərmər Altlıqlar (4 ədəd)', price: 32 },
      { id: 12, name: 'Məxmər Pərdə Panelləri', price: 119 },
    ],
  },
  {
    slug: 'jewellery',
    name: 'Zərgərlik',
    description: 'Zaman keçməz parçalar, qızıl anlar',
    longDescription:
      'Hər gün taxmaq üçün və ya xüsusi günlər üçün hazırlanmış saflaşdırılmış zərgərlik.',
    icon: '💎',
    iconImage: '/icons/jewellery.png',
    color: 'rgba(221,188,117,0.14)',
    products: [
      { id: 1, name: 'Qızıl Zəncir Boyunbağı — 18k', price: 89, badge: 'Yeni' },
      { id: 2, name: 'İnci Sallanan Sırğalar', price: 54 },
      { id: 3, name: 'Qatlamalı Qolbaq Dəsti', price: 67, badge: 'Populyar' },
      { id: 4, name: 'Minimalist Üzük Dəsti', price: 39 },
      { id: 5, name: 'Qalın Qızıl Halqa Sırğalar', price: 48, badge: 'Yeni' },
      { id: 6, name: 'Pave Kristal Sırğalar', price: 35 },
      { id: 7, name: 'Burulmuş İp Bilərzik', price: 58, badge: 'Endirim', originalPrice: 79 },
      { id: 8, name: 'Medalyon Boyunbağısı', price: 72 },
      { id: 9, name: 'Tənzimlənən Möhür Üzüyü', price: 45, badge: 'Yeni' },
      { id: 10, name: 'Muncuqlu Boğazlıq', price: 28 },
      { id: 11, name: 'Brilyant Kəsim Üzüklər', price: 95 },
      { id: 12, name: 'İlan Bilərziki', price: 84, badge: 'Populyar' },
    ],
  },
  {
    slug: 'beauty',
    name: 'Gözəllik & Dəri Baxımı',
    description: 'İçindən par, xaricindən parla',
    longDescription:
      'Təmiz, effektiv gözəllik. Dərinizi örtmək üçün deyil, qeyd etmək üçün hazırlanmış məhsullar.',
    icon: '✿',
    color: 'rgba(221,188,117,0.07)',
    products: [
      { id: 1, name: 'İtburnu Üz Yağı 30ml', price: 44, badge: 'Populyar' },
      { id: 2, name: 'C Vitamini Serumu', price: 52, badge: 'Yeni' },
      { id: 3, name: 'Nəmləndirici Vərəqli Maska Dəsti', price: 28 },
      { id: 4, name: 'Dodaq Parıltısı Kolleksiyası (6 rəng)', price: 35 },
      { id: 5, name: 'Mineral SPF 50 Günəş Kremi', price: 38 },
      { id: 6, name: 'Retinol Gecə Kremi', price: 67, badge: 'Yeni' },
      { id: 7, name: 'Yeşim Gua Sha Dəsti', price: 29, badge: 'Endirim', originalPrice: 42 },
      { id: 8, name: 'Qaş Laminasiya Dəsti', price: 34 },
      { id: 9, name: 'Qidalandırıcı Əl Kremi', price: 18 },
      { id: 10, name: 'Göz Kölgəsi Palitri — Nude', price: 48, badge: 'Populyar' },
      { id: 11, name: 'Misellar Təmizləyici Su', price: 22 },
      { id: 12, name: 'Tonlu Nəmləndirici SPF', price: 41, badge: 'Yeni' },
    ],
  },
  {
    slug: 'bags',
    name: 'Çantalar & Əl Çantaları',
    description: 'Dünyanı stilinizlə daşıyın',
    longDescription:
      'Strukturlu iş çantalarından rahat həftə sonu torbalarına qədər — hər yerə gedən çantalar.',
    icon: '👜',
    color: 'rgba(221,188,117,0.09)',
    products: [
      { id: 1, name: 'Mini Yapışıq Çiyin Çantası', price: 115, badge: 'Yeni' },
      { id: 2, name: 'Toxunma Rafya Torba', price: 88 },
      { id: 3, name: 'Dəri Klac Axşam Çantası', price: 99, badge: 'Populyar' },
      { id: 4, name: 'Kətan Alış-veriş Çantası', price: 45 },
      { id: 5, name: 'Zəncir Qayışlı Çiyin Çantası', price: 134, badge: 'Yeni' },
      { id: 6, name: 'Zamş Vedrə Çantası', price: 108, badge: 'Endirim', originalPrice: 145 },
      { id: 7, name: 'Bel Çantası — Vegan Dəri', price: 129 },
      { id: 8, name: 'Kəmər Çantası', price: 67 },
      { id: 9, name: 'Saman Bazar Səbəti', price: 52, badge: 'Yeni' },
      { id: 10, name: 'İpli İpək Kisə', price: 38 },
      { id: 11, name: 'Üst Qulplu Qutu Çanta', price: 155 },
      { id: 12, name: 'Çevrilən Kəmər Çantası', price: 91, badge: 'Populyar' },
    ],
  },
  {
    slug: 'shoes',
    name: 'Ayaqqabılar',
    description: 'Növbəti görünüşünüzə addım atın',
    longDescription:
      'Estetika ilə rahatlığı birləşdirən seçilmiş ayaqqabılar. Hər addım, yüksəldilmişdir.',
    icon: '👠',
    color: 'rgba(221,188,117,0.08)',
    products: [
      { id: 1, name: 'Blok Topuqlu Mule — Bej', price: 89, badge: 'Yeni' },
      { id: 2, name: 'Platformalı Krossovkalar', price: 112 },
      { id: 3, name: 'Bağlı Sandallar — Qızıl', price: 78, badge: 'Populyar' },
      { id: 4, name: 'Chelsea Botinkaları — Qara', price: 145 },
      { id: 5, name: 'Loaferlər — Konyak Dəri', price: 134, badge: 'Yeni' },
      { id: 6, name: 'Kətan Espadrillər', price: 55 },
      { id: 7, name: 'Sivri Burunlu Düz Ayaqqabılar', price: 87, badge: 'Endirim', originalPrice: 110 },
      { id: 8, name: 'Biləkqayışlı Topuqlu Ayaqqabılar', price: 99 },
      { id: 9, name: 'Geyin-Çıxar Mokasinlər', price: 68, badge: 'Yeni' },
      { id: 10, name: 'Diz Üstü Çizmələr', price: 189 },
      { id: 11, name: 'Nazik Sandallar', price: 62 },
      { id: 12, name: 'Diz Boyu Çizmələr — Dəvə', price: 175, badge: 'Populyar' },
    ],
  },
  {
    slug: 'perfumes',
    name: 'Ətriyyat',
    description: 'Hekayənizi danışan qoxular',
    longDescription:
      'Müstəqil evlərdən və sevimli brendlərdən lüks ətirlər. İmza iyinizi tapın.',
    icon: '🌸',
    color: 'rgba(221,188,117,0.08)',
    products: [
      { id: 1, name: 'Oud & Kəhrəba EDP 50ml', price: 95, badge: 'Populyar' },
      { id: 2, name: 'Rose Noir Parfum 30ml', price: 78, badge: 'Yeni' },
      { id: 3, name: 'Sitrus Çiçəyi EDP 75ml', price: 62 },
      { id: 4, name: 'Vanil Müşk EDP 50ml', price: 71 },
      { id: 5, name: 'Sidr & İris EDP', price: 88, badge: 'Yeni' },
      { id: 6, name: 'Ağ Çay Bədən Dumanı', price: 35 },
      { id: 7, name: 'Şərq Ədviyyatı Parfumu', price: 105, badge: 'Endirim', originalPrice: 130 },
      { id: 8, name: 'Su Çiçəkləri EDP 60ml', price: 58 },
      { id: 9, name: 'Sandal Ağacı Xəyalları', price: 84, badge: 'Yeni' },
      { id: 10, name: 'Təzə Kətan EDP', price: 49 },
      { id: 11, name: 'Kəşf Dəsti — 5 Mini', price: 55, badge: 'Populyar' },
      { id: 12, name: 'Gecəyarısı Yasəmən EDP', price: 79 },
    ],
  },
  {
    slug: 'seasonal',
    name: 'Mövsümi Xüsusiyyətlər',
    description: 'Hər mövsüm məhdud buraxılışlar',
    longDescription:
      'Eksklüziv mövsümi kolleksiyalar və məhdud nəşr parçalar. Hər il mövsümünü qeyd edən seçilmiş buraxılışlar.',
    icon: '🌿',
    color: 'rgba(221,188,117,0.12)',
    products: [
      { id: 1, name: 'Bahar Kolleksiyası Hədiyyə Qutusu', price: 89, badge: 'Məhdud' },
      { id: 2, name: 'Yay Kətan Dəsti', price: 120, badge: 'Yeni' },
      { id: 3, name: 'Payız Şam Kolleksiyası', price: 54 },
      { id: 4, name: 'Bayram Zərgərlik Dəsti', price: 145, badge: 'Məhdud' },
      { id: 5, name: 'Bayram Şərf & Papaq Dəsti', price: 78 },
      { id: 6, name: 'Valentina Çiçəkli Döymələr', price: 14, badge: 'Məhdud' },
      { id: 7, name: 'Yay Saman Kolleksiyası', price: 65, badge: 'Yeni' },
      { id: 8, name: 'Qış Dəri Baxım Dəsti', price: 92 },
      { id: 9, name: 'Qızıl Saat Çanta Dəsti', price: 135, badge: 'Məhdud' },
      { id: 10, name: 'Ramazan Kolleksiyası', price: 110, badge: 'Yeni' },
      { id: 11, name: 'Yeni İl Ziyafət Parıltısı', price: 68 },
      { id: 12, name: 'Ad Günü Qutusu — Lüks', price: 99, badge: 'Populyar' },
    ],
  },
]

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}

export function getProductById(categorySlug: string, productId: number): Product | undefined {
  const cat = getCategoryBySlug(categorySlug)
  return cat?.products.find((p) => p.id === productId)
}
