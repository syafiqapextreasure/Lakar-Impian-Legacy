import brandLogoImg from './assets/images/lakar_brand_logo_1789409641972.jpg';
import heroKitchenImg from './assets/images/lakar_hero_kitchen_1789410116828.jpg';
import workerHeroImg from './assets/images/lakar_worker_hero_1789409661790.jpg';
import workerDrillImg from './assets/images/lakar_worker_drill_1789409682474.jpg';
import workerMeasureImg from './assets/images/lakar_worker_measure_1789409704168.jpg';
import workerTeamImg from './assets/images/lakar_worker_team_1789409725865.jpg';
import workerWorkshopImg from './assets/images/lakar_worker_workshop_1789409769723.jpg';

import kitchenBlackImg from './assets/images/lakar_kitchen_black_1789408038095.jpg';
import kitchenBlueImg from './assets/images/lakar_kitchen_blue_1789408055912.jpg';
import kitchenPinkImg from './assets/images/lakar_kitchen_pink_1789408071674.jpg';
import barCounterImg from './assets/images/lakar_bar_counter_1789408086944.jpg';
import shoeDividerImg from './assets/images/lakar_shoe_divider_1789408144575.jpg';
import tvWallImg from './assets/images/lakar_tv_wall_1789408171540.jpg';

import { ServiceItem, PackageItem, PortfolioItem, WorkerHighlight } from './types';

export const BUSINESS_INFO = {
  name: 'LAKAR IMPIAN LEGACY',
  subBrand: 'LAKAR DESIGN',
  registrationNo: 'MA0307747-A',
  phone: '011-2672 2982',
  phoneClean: '01126722982',
  whatsappUrl: 'https://wa.me/601126722982',
  contactPerson: 'Pqah Rosli',
  serviceAreas: ['Negeri Sembilan', 'Selangor'],
  motto: 'Impian Anda Misi Kami',
  secondaryMotto: 'Yang Murah Tak Semestinya Tak Berkualiti',
  transportFee: 'RM30 – RM50',
  transportNote: 'Bergantung pada jarak',
  installationNote: 'Barang / aksesori disediakan oleh pelanggan. Kami menyediakan tenaga kerja dan peralatan pemasangan.',
};

export const IMAGES = {
  logo: brandLogoImg,
  hero: heroKitchenImg,
  luxuryKitchen: heroKitchenImg,
  workerHero: workerHeroImg,
  workerDrill: workerDrillImg,
  workerMeasure: workerMeasureImg,
  workerTeam: workerTeamImg,
  workerWorkshop: workerWorkshopImg,
  kitchenBlack: kitchenBlackImg,
  kitchenBlue: kitchenBlueImg,
  kitchenPink: kitchenPinkImg,
  barCounter: barCounterImg,
  shoeDivider: shoeDividerImg,
  tvWall: tvWallImg,
};

export const CABINETRY_SERVICES: ServiceItem[] = [
  {
    id: 'kitchen-cabinet',
    title: 'Kitchen Cabinet',
    description: 'Kabinet dapur custom mengikut ukuran dan susun atur ruang.',
    category: 'cabinet',
    badge: 'Popular',
    features: ['Ukuran tepat ikut dinding & dapur', 'Susun atur ergonomik & kemas', 'Material tahan lasak & kalis air']
  },
  {
    id: 'shoe-rack',
    title: 'Shoe Rack / Shoe Cabinet',
    description: 'Kabinet kasut untuk ruang masuk rumah yang lebih kemas.',
    category: 'cabinet',
    features: ['Sistem rak flip atau sliding', 'Laci penyimpanan kunci & stokin', 'Pengudaraan udara teratur']
  },
  {
    id: 'display-cabinet',
    title: 'Display Cabinet',
    description: 'Display cabinet custom untuk koleksi dan ruang dekorasi.',
    category: 'cabinet',
    features: ['Pintu kaca tempered jernih', 'Spotlight LED bertingkat', 'Susun atur bertingkat premium']
  },
  {
    id: 'tv-cabinet',
    title: 'TV Cabinet',
    description: 'TV cabinet dan feature wall mengikut konsep ruang tamu.',
    category: 'cabinet',
    features: ['Feature wall bersepadu', 'Penyembunyian wayar & soket kemas', 'Konsol terapung (floating console)']
  },
  {
    id: 'bar-counter',
    title: 'Bar Counter / Island Table',
    description: 'Island atau bar counter untuk ruang dapur yang lebih praktikal.',
    category: 'cabinet',
    features: ['Meja island sarapan serbaguna', 'Storan bawah meja luas', 'Sesuai untuk rumah moden']
  },
  {
    id: 'fluted-panel',
    title: 'Fluted Panel',
    description: 'Kemasan panel dekoratif untuk dinding dan feature area.',
    category: 'cabinet',
    features: ['Tekstur jalur moden & elegan', 'Pilihan tona kayu & warna gelap', 'Sesuai ruang tamu & bilik tidur']
  },
  {
    id: 'mirror',
    title: 'Mirror',
    description: 'Pemasangan dan penyelesaian cermin mengikut ruang.',
    category: 'cabinet',
    features: ['Cermin bevelled & backlit LED', 'Saiz custom ikut dinding', 'Memberi ilusi ruang lebih luas']
  },
  {
    id: 'sliding-door',
    title: 'Sliding Door Aluminium',
    description: 'Pemasangan sliding door aluminium mengikut keperluan.',
    category: 'cabinet',
    features: ['Bingkai aluminium kukuh & ringan', 'Gelangsar lancar & senyap', 'Pemisah ruang dapur basah & kering']
  },
  {
    id: 'tabletop',
    title: 'Tabletop (Pilihan Material)',
    description: 'Pilihan kemasan meja: Concrete, Quartz, & Sintered Stone.',
    category: 'cabinet',
    badge: '3 Pilihan',
    features: ['Concrete (Konkrit kukuh & tahan beban)', 'Quartz (Kalis calar, elegan & bersih)', 'Sintered Stone (Tahan haba tinggi & mewah)']
  }
];

export const INSTALLATION_SERVICES: ServiceItem[] = [
  {
    id: 'frame-mirror',
    title: 'Frame Gambar / Cermin Dinding',
    description: 'Pemasangan frame hiasan, khat, lukisan atau cermin dinding dengan paras rata (spirit level) yang tepat.',
    category: 'installation',
    badge: 'Kemas & Rata',
  },
  {
    id: 'clock-decor',
    title: 'Jam Dinding / Hiasan Dinding',
    description: 'Pemasangan jam dinding saiz besar, hiasan besi, wall art dan dekorasi tanpa merosakkan dinding.',
    category: 'installation',
  },
  {
    id: 'bathroom-accessories',
    title: 'Aksesori Sinki / Rak Bilik Air',
    description: 'Drill jubin bilik air secara cermat untuk pasang rak tuala, pemegang cermin, dan rak syampu.',
    category: 'installation',
    badge: 'Drill Jubin Cermat',
  },
  {
    id: 'tv-wall-bracket',
    title: 'Rak TV / Rak Dinding',
    description: 'Pemasangan TV wall bracket kukuh dan floating shelves dengan wall plug heavy-duty selamat.',
    category: 'installation',
    badge: 'Heavy Duty',
  },
  {
    id: 'drill-hanging',
    title: 'Drill & Hanging',
    description: 'Servis tebuk lubang dinding batu, kayu, partition gypsum board dengan peralatan drill lengkap.',
    category: 'installation',
    badge: 'Peralatan Lengkap',
  },
  {
    id: 'home-accessories',
    title: 'Pelbagai Aksesori Rumah',
    description: 'Rod langsir, rak kasut gantung, blind tingkap, cangkuk baju, dan pelbagai kelengkapan rumah serta pejabat.',
    category: 'installation',
  }
];

export const PACKAGES: PackageItem[] = [
  {
    id: 'pkg-kitchen',
    name: 'PAKEJ KITCHEN',
    tagline: 'Penyelesaian lengkap ruang dapur idaman keluarga',
    items: [
      'Kitchen Cabinet (Kabinet Bawah & Atas)',
      'Pilihan Tabletop (Concrete / Quartz / Sintered)',
      'Island Table atau Bar Counter Praktikal',
      'Penyediaan ruang dapur basah & kering'
    ],
    recommendedFor: 'Rumah baru, renovasi dapur, penggantian kabinet lama'
  },
  {
    id: 'pkg-living',
    name: 'PAKEJ LIVING',
    tagline: 'Konsep ruang tamu moden, kemas dan bergaya',
    items: [
      'TV Cabinet & Floating Console',
      'Display Cabinet berlampu LED',
      'Dinding Fluted Panel elegan',
      'Pemasangan Cermin Hiasan ruang tamu'
    ],
    recommendedFor: 'Ruang tamu rumah teres, semi-D & kondo'
  },
  {
    id: 'pkg-storage',
    name: 'PAKEJ STORAGE',
    tagline: 'Optimumkan ruang simpanan untuk rumah yang sentiasa rapi',
    items: [
      'Custom Shoe Cabinet / Shoe Rack bertingkat',
      'Custom Storage Cabinet mengikut sudut ruang',
      'Partition divider lorong masuk (foyer)',
      'Laci penyimpanan barangan serbaguna'
    ],
    recommendedFor: 'Ruang masuk rumah, stor praktikal, ruang terhad'
  },
  {
    id: 'pkg-installation',
    name: 'PAKEJ INSTALLATION',
    tagline: 'Khidmat tebuk & gantung lengkap untuk rumah & pejabat',
    items: [
      'Wall mounting bracket TV & rak dinding',
      'Frame gambar, cermin & jam dinding',
      'Aksesori bilik air & rak sinki',
      'Peralatan drill profesional disediakan'
    ],
    recommendedFor: 'Baru pindah rumah, pasang perabot sendiri, hiasan pejabat'
  }
];

export const WORKER_HIGHLIGHTS: WorkerHighlight[] = [
  {
    id: 'w-hero',
    caption: 'Tukang Mahir Tempatan',
    detail: 'Tukang tempatan yang mahir, mesra dan berpengalaman sedia memasang kabinet custom mengikut reka bentuk yang dipersetujui.',
    image: IMAGES.workerHero,
    tag: 'Tukang Lakar Impian'
  },
  {
    id: 'w-drill',
    caption: 'Drill & Pasang Engsel Cermat',
    detail: 'Penebukan dinding batu & partition yang teliti dengan pengukur waterpass, mata drill khas dan pelapik habuk kemas.',
    image: IMAGES.workerDrill,
    tag: 'Tebuk Dinding Cermat'
  },
  {
    id: 'w-measure',
    caption: 'Ukuran Tepat Di Lokasi',
    detail: 'Pemeriksaan aras waterpass dan ukuran dinding sebelum pemasangan bagi memastikan struktur kabinet rata dan kukuh.',
    image: IMAGES.workerMeasure,
    tag: 'Ketepatan Ukuran'
  },
  {
    id: 'w-team',
    caption: 'Kerjasama Pasukan Pemasang',
    detail: 'Pasukan installer berdedikasi bekerja bersama untuk menaikkan dan mengunci kabinet gantung dengan kemas dan selamat.',
    image: IMAGES.workerTeam,
    tag: 'Pasukan Tempatan'
  },
  {
    id: 'w-workshop',
    caption: 'Fabrikasi Bengkel Pertukangan',
    detail: 'Pemotongan panel dan kemasan tepi kayu berkualiti disiapkan rapi di bengkel pertukangan sebelum dihantar ke rumah pelanggan.',
    image: IMAGES.workerWorkshop,
    tag: 'Fabrikasi Bengkel'
  }
];

export const PORTFOLIO_PROJECTS: PortfolioItem[] = [
  {
    id: 'p-1',
    title: 'Kabinet Dapur Hitam Moden & Kemasan Aluminium',
    category: 'Kitchen',
    categoryKey: 'kitchen',
    image: IMAGES.kitchenBlack,
    description: 'Reka bentuk kabinet dapur moden warna hitam dengan kemasan rim aluminium elegan, dipadankan dengan tabletop quartz putih dan lampu gantung warm.',
    tag: 'Kabinet Dapur'
  },
  {
    id: 'p-2',
    title: 'Kabinet Dapur Royal Blue Shaker & Pemegang Emas',
    category: 'Kitchen',
    categoryKey: 'kitchen',
    image: IMAGES.kitchenBlue,
    description: 'Kabinet dapur konsep shaker tona royal blue dengan pemegang emas brushed brass, menara oven & mikrogelombang serta susun atur praktikal.',
    tag: 'Shaker Style'
  },
  {
    id: 'p-3',
    title: 'Kabinet Dapur Pastel Pink & Tabletop Marble Corak Urat',
    category: 'Kitchen',
    categoryKey: 'kitchen',
    image: IMAGES.kitchenPink,
    description: 'Kabinet dapur kemasan tona pastel blush pink dengan tabletop kuarza bercorak marble putih, sinki hitam dan hood keluli tahan karat.',
    tag: 'Warna Kustom'
  },
  {
    id: 'p-4',
    title: 'Bar Counter & Kabinet Display Kaca Lampu LED',
    category: 'Cabinet',
    categoryKey: 'cabinet',
    image: IMAGES.barCounter,
    description: 'Meja bar counter island dengan permukaan granit hitam berkilat dan display cabinet kaca bertingkat dengan lampu sorot warm untuk koleksi.',
    tag: 'Bar Counter'
  },
  {
    id: 'p-5',
    title: 'Feature Wall TV Moden & Panel Fluted Lampu Tersembunyi',
    category: 'TV / Feature Wall',
    categoryKey: 'tv',
    image: IMAGES.tvWall,
    description: 'TV cabinet dengan feature wall fluted panel berjalur kayu gelap, konsol terapung dan pencahayaan lampu LED strip tersembunyi yang mewah.',
    tag: 'Feature Wall'
  },
  {
    id: 'p-6',
    title: 'Kabinet Kasut Foyer Penuh & Divider Pembahagi Ruang',
    category: 'Cabinet',
    categoryKey: 'cabinet',
    image: IMAGES.shoeDivider,
    description: 'Kabinet kasut dari lantai ke siling tona ira kayu jati asli dengan ruang display niche tengah dan kisi-kisi divider pemisah ruang masuk.',
    tag: 'Penyimpan & Divider'
  },
  {
    id: 'p-7',
    title: 'Pemasangan Engsel & Drill Perkakasan Teliti',
    category: 'Installation',
    categoryKey: 'installation',
    image: IMAGES.workerDrill,
    description: 'Tukang kami memasang engsel soft-close dan pemegang kabinet dengan drill tanpa merosakkan permukaan laminate.',
    tag: 'Tukang Di Tapak'
  },
  {
    id: 'p-8',
    title: 'Pemeriksaan Aras & Penyelarasan Wall Cabinet',
    category: 'Installation',
    categoryKey: 'installation',
    image: IMAGES.workerMeasure,
    description: 'Pemeriksaan waterpass dan ukuran dinding sebelum mengikat kabinet gantung bagi memastikan ia rata dan kukuh sepanjang hayat.',
    tag: 'Pemasangan Teliti'
  },
  {
    id: 'p-9',
    title: 'Kerjasama Pasukan Pemasang Lakar Impian',
    category: 'Installation',
    categoryKey: 'installation',
    image: IMAGES.workerTeam,
    description: 'Pasukan installer terlatih kami bekerjasama menaikkan kabinet gantung dengan kemas, memastikan tiada calar atau kerosakan.',
    tag: 'Kerja Berpasukan'
  },
  {
    id: 'p-10',
    title: 'Fabrikasi Panel Kabinet di Bengkel Pertukangan',
    category: 'Cabinet',
    categoryKey: 'cabinet',
    image: IMAGES.workerWorkshop,
    description: 'Tukang kami memotong dan memasang panel perabot berkualiti tinggi di bengkel pertukangan sebelum dibawa ke rumah pelanggan.',
    tag: 'Bengkel Pertukangan'
  },
  {
    id: 'p-11',
    title: 'Khidmat Pasang Kabinet Oleh Tukang Tempatan',
    category: 'Drill & Hanging',
    categoryKey: 'drill',
    image: IMAGES.workerHero,
    description: 'Tukang tempatan Lakar Impian Legacy bersiap sedia dengan perkakasan drill lengkap untuk khidmat pemasangan di Negeri Sembilan & Selangor.',
    tag: 'Tenaga Kerja Tempatan'
  },
  {
    id: 'p-12',
    title: 'Kabinet Dapur Mewah & Island Bar Terrazzo',
    category: 'Kitchen',
    categoryKey: 'kitchen',
    image: IMAGES.luxuryKitchen,
    description: 'Rekaan moden kontemporari menggabungkan kemasan kayu walnut mewah, lampu LED strip suam, backsplash marmar dan island bar terrazzo eksklusif.',
    tag: 'Rekaan Eksklusif'
  }
];

export const TIMELINE_STEPS = [
  { step: '01', title: 'Lawatan Tapak', desc: 'Kami datang ke rumah atau pejabat anda untuk melihat ruang dan mengambil ukuran sebenar.' },
  { step: '02', title: 'Perbincangan', desc: 'Mendengar citarasa, keperluan harian keluarga, konsep ruang dan bajet yang anda rancang.' },
  { step: '03', title: 'Lukisan 2D', desc: 'Penyediaan pelan susun atur dan lukisan reka bentuk teknikal agar anda jelas gambaran projek.' },
  { step: '04', title: 'Pemilihan Material', desc: 'Memilih material kabinet (melamine, 4G glass, aluminium) serta jenis tabletop yang dimahukan.' },
  { step: '05', title: 'Pembuatan', desc: 'Fabrikasi teliti di bengkel pertukangan menggunakan mesin pemotong dan edging berkualiti.' },
  { step: '06', title: 'Pemasangan', desc: 'Pemasangan kemas di lokasi pelanggan oleh tukang berpengalaman serta pembersihan tapak kerja.' }
];

export const WHY_CHOOSE_US_CARDS = [
  {
    title: 'Kemas & Selamat',
    desc: 'Pemasangan dibuat dengan teliti, perataan tepat, dan kekemasan tapak kerja dipastikan sebelum selesai.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Peralatan Lengkap',
    desc: 'Peralatan kerja disediakan untuk proses pemasangan seperti pelbagai saiz drill, wall plug berkualiti dan waterpass.',
    icon: 'Wrench'
  },
  {
    title: 'Rekaan Mengikut Keperluan',
    desc: 'Kabinet custom mengikut ukuran dan ruang sebenar rumah anda, tiada ruang terbuang atau sudut terbiar.',
    icon: 'Ruler'
  },
  {
    title: 'Harga Berpatutan',
    desc: 'Penyelesaian mengikut keperluan dan bajet pelanggan. Yang murah tak semestinya tak berkualiti!',
    icon: 'Sparkles'
  }
];

export const ORDER_STEPS = [
  {
    step: '1',
    title: 'WhatsApp Kami',
    desc: 'Hantar gambar ruang atau barang yang ingin dipasang terus ke WhatsApp kami.'
  },
  {
    step: '2',
    title: 'Beritahu Lokasi',
    desc: 'Nyatakan kawasan anda di Negeri Sembilan atau Selangor untuk jadual servis.'
  },
  {
    step: '3',
    title: 'Bincang Keperluan',
    desc: 'Beritahu jenis kabinet atau kerja pemasangan yang diperlukan mengikut citarasa anda.'
  },
  {
    step: '4',
    title: 'Sebut Harga',
    desc: 'Kami akan maklumkan cadangan dan anggaran berdasarkan skop kerja secara telus.'
  },
  {
    step: '5',
    title: 'Lawatan / Pemasangan',
    desc: 'Lawatan tapak atau kerja pemasangan akan disusun mengikut persetujuan tarikh anda.'
  }
];

export const SERVICE_OPTIONS = [
  'Kitchen Cabinet',
  'Shoe Cabinet',
  'Display Cabinet',
  'TV Cabinet',
  'Sliding Door Aluminium',
  'Bar Counter / Island Table',
  'Tabletop',
  'Fluted Panel',
  'Mirror',
  'Frame / Cermin Dinding',
  'Jam / Hiasan Dinding',
  'Rak TV / Rak Dinding',
  'Aksesori Bilik Air',
  'Drill & Hanging',
  'Lain-lain'
];
