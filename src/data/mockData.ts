import { Tour, Booking, UserProfile, ReviewItem, TravelOffice, TravelManager } from '../types';

export const AGENCY_INFO = {
  name: 'TrawelWay',
  legalName: 'ООО «ТрэвелВэй Туризм»',
  foundedYear: 2012,
  yearsOnMarket: 14,
  touristsCount: '185 000+',
  registryNumber: 'РТА №0028491',
  registryOrg: 'Единый федеральный реестр турагентов РФ',
  financialGuarantee: '50 000 000 ₽',
  guaranteeCompany: 'САО «ВСК Страхование»',
  phoneHotline: '+7 (800) 555-35-35',
  phoneMoscow: '+7 (495) 832-44-12',
  email: 'booking@trawelway.ru',
  telegram: '@trawelway_official',
  whatsapp: '+7 (926) 832-44-12',
  workingHours: 'Пн-Вс: 10:00 — 21:00 (Онлайн поддержка 24/7)'
};

export const PARTNER_OPERATORS = [
  { name: 'Coral Travel', logo: '🏝️', desc: 'Премиальные чартеры и отели' },
  { name: 'Библио Глобус', logo: '✈️', desc: 'Эксклюзивные контракты Аэрофлот' },
  { name: 'Anex Tour', logo: '☀️', desc: 'Лучшие отели Турции и Египта' },
  { name: 'Pegas Touristik', logo: '🌍', desc: 'Широкая сетка вылетов из регионов' },
  { name: 'Fun&Sun', logo: '⛵', desc: 'Семейный отдых и концепции Kids' },
  { name: 'Tez Tour', logo: '🌴', desc: 'Надежность и европейский сервис' }
];

export const FEATURED_TOURS: Tour[] = [
  {
    id: 'rixos-belek',
    title: 'Турция: Rixos Premium Belek 5★ Deluxe • Все включено',
    country: 'Турция',
    region: 'Средиземноморье',
    city: 'Белек / Анталья',
    departureCity: 'Москва (Внуково / Шереметьево)',
    tourOperator: 'Coral Travel',
    durationDays: 8,
    durationNights: 7,
    price: 89500,
    oldPrice: 108000,
    currency: '₽',
    rating: 4.96,
    reviewsCount: 312,
    badge: 'Хит продаж • Ultra All Inclusive',
    badgeColor: 'rose',
    coverImage: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Флагманский курортный комплекс на первой береговой линии Белека с песчаным пляжем протяженностью 1000 метров, доступом в тематический парк The Land of Legends, 8 ресторанами a la carte и SPA-центром Anjana.',
    highlights: [
      'Прямой авиаперелет регулярным рейсом Turkish Airlines с багажом 23 кг',
      'Концепция All Inclusive All Exclusive с импортными напитками 24/7',
      'Бесплатный трансфер и безлимитный вход в парк The Land of Legends',
      'Детский клуб Rixy Club с анимацией и отдельным рестораном',
      'Медицинская страховка туриста с покрытием $40 000'
    ],
    hotelName: 'Rixos Premium Belek 5★',
    hotelStars: 5,
    beachLine: '1-я пляжная линия (собственный пляж 1 км)',
    roomType: 'Deluxe Room Garden / Sea View (37 м²)',
    meals: 'Ultra All Inclusive (Круглосуточно)',
    mealCode: 'UAI',
    flightIncluded: true,
    flightDetails: {
      airline: 'Turkish Airlines (TK-418)',
      flightNumber: 'Москва (VKO) 04:15 → Анталья (AYT) 08:45',
      baggage: '23 кг багаж + 8 кг ручная кладь',
      direct: true
    },
    groupSize: 'Пакетный тур',
    difficulty: 'Легкий',
    nextDates: ['14–21 окт 2026', '22–29 окт 2026', '03–10 ноя 2026'],
    itinerary: [
      {
        day: 1,
        title: 'Вылет из Москвы и заселение в отель',
        description: 'Регистрация в аэропорту Внуково, прямой рейс в Анталью. Комфортабельный трансфер в отель Rixos Premium Belek. Приветственный коктейль, заселение в Deluxe Room, отдых на пляже.',
        meals: 'Ultra All Inclusive',
        hotel: 'Rixos Premium Belek 5★'
      },
      {
        day: 2,
        title: 'Релакс на пляже и посещение Anjana Spa',
        description: 'Отдых на закрытом песчаном пляже с белоснежными шатрами. Турецкий хаммам, сауна и бассейны в спа-центре Anjana. Вечерняя шоу-программа у бассейна.',
        meals: 'Ultra All Inclusive',
        hotel: 'Rixos Premium Belek 5★'
      },
      {
        day: 3,
        title: 'Поездка в тематический парк The Land of Legends',
        description: 'Бесплатный шаттл и VIP-вход в турецкий Диснейленд — парк The Land of Legends. Американские горки Hyper Coaster, водные аттракционы и вечерний парад лодок.',
        meals: 'Ultra All Inclusive',
        hotel: 'Rixos Premium Belek 5★'
      },
      {
        day: 4,
        title: 'Гастрономический день: A la Carte рестораны',
        description: 'Кулинарные мастер-классы от шеф-поваров, дегустация блюд османской кухни в ресторане Aksam и стейк-хаус Meat & Love. Живая музыка на террасе.',
        meals: 'Ultra All Inclusive',
        hotel: 'Rixos Premium Belek 5★'
      },
      {
        day: 5,
        title: 'Спорт, гольф и водные развлечения',
        description: 'Утренний стретчинг на пирсе, теннисные корты, водные лыжи и падлбординг на пляже. Анимационная программа для взрослых и детей.',
        meals: 'Ultra All Inclusive',
        hotel: 'Rixos Premium Belek 5★'
      }
    ],
    included: [
      'Прямой авиаперелет Москва — Анталья — Москва (Turkish Airlines)',
      'Багаж 23 кг и ручная кладь 8 кг на каждого пассажира',
      'Групповой трансфер на комфортабельном автобусе с кондиционером',
      'Проживание 7 ночей в номере категории Deluxe Room',
      'Питание по системе Ultra All Inclusive (включая рестораны a la carte)',
      'Медицинская страховка с покрытием 40 000 $ от ERV / ВСК',
      'Трансфер и безлимитный доступ в парк The Land of Legends',
      'Круглосуточная поддержка персонального тревел-менеджера TrawelWay'
    ],
    notIncluded: [
      'Индивидуальный VIP-трансфер на Mercedes Maybach (по желанию, +9 000 ₽)',
      'Аренда приватного пляжного павильона Cabana (по желанию)',
      'Личные расходы и сувениры'
    ]
  },
  {
    id: 'atlantis-dubai',
    title: 'ОАЭ: Atlantis The Palm 5★ • Пальма Джумейра',
    country: 'ОАЭ',
    region: 'Ближний Восток',
    city: 'Дубай',
    departureCity: 'Москва (Домодедово)',
    tourOperator: 'Библио-Глобус',
    durationDays: 7,
    durationNights: 6,
    price: 134000,
    oldPrice: 156000,
    currency: '₽',
    rating: 4.98,
    reviewsCount: 245,
    badge: 'Премиум • Аквапарк в подарок',
    badgeColor: 'teal',
    coverImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Легендарный отель на полумесяце Пальмы Джумейра с панорамным видом на Персидский залив и небоскребы Дубая. Безлимитный доступ в самый большой аквапарк мира Aquaventure и музей океана The Lost Chambers.',
    highlights: [
      'Прямой перелет регулярным рейсом Emirates или Flydubai',
      'Питание Полупансион (HB: завтрак + ужин в 16 ресторанах отеля)',
      'Бесплатный ежедневный доступ в аквапарк Aquaventure и океанариум',
      'Приватный песчаный пляж протяженностью 1,4 км',
      'Трансфер из международного аэропорта Дубая (DXB)'
    ],
    hotelName: 'Atlantis The Palm 5★ Deluxe',
    hotelStars: 5,
    beachLine: '1-я пляжная линия (Пальма Джумейра)',
    roomType: 'Ocean King Room (45 м²)',
    meals: 'Полупансион (Завтрак + Ужин)',
    mealCode: 'HB',
    flightIncluded: true,
    flightDetails: {
      airline: 'Emirates (EK-132)',
      flightNumber: 'Москва (DME) 09:20 → Дубай (DXB) 15:30',
      baggage: '25 кг багаж + 7 кг ручная кладь',
      direct: true
    },
    nextDates: ['20–26 окт 2026', '10–16 ноя 2026', '24–30 ноя 2026'],
    included: [
      'Авиаперелет Москва — Дубай — Москва',
      'Проживание в Atlantis The Palm 5★',
      'Завтраки и ужины Dine Around',
      'Аквапарк Aquaventure и Lost Chambers',
      'Трансфер аэропорт — отель — аэропорт',
      'Медстраховка с покрытием COVID-19'
    ],
    notIncluded: ['Туристический налог Дирхам (оплата на ресепшен)', 'Обеды']
  },
  {
    id: 'pickalbatros-sharm',
    title: 'Египет: Pickalbatros Laguna Vista 5★ • Шарм-эль-Шейх',
    country: 'Египет',
    region: 'Красное море',
    city: 'Шарм-эль-Шейх',
    departureCity: 'Москва / Санкт-Петербург',
    tourOperator: 'Anex Tour',
    durationDays: 8,
    durationNights: 7,
    price: 59900,
    oldPrice: 72000,
    currency: '₽',
    rating: 4.88,
    reviewsCount: 189,
    badge: 'Горящий тур • Все включено',
    badgeColor: 'amber',
    coverImage: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Один из лучших отелей Набк Бэй с песчаным пологим входом в море, живым коралловым рифом, 7 бассейнами и аквапарком. Идеален для семей с детьми и любителей снорклинга.',
    highlights: [
      'Прямой беспосадочный чартер из Москвы или Санкт-Петербурга',
      'Система All Inclusive с бесплатным мороженым и барами у бассейна',
      'Собственный песчаный пляж с длинным понтоном к рифу',
      'Детский клуб, водные горки и анимация на русском языке'
    ],
    hotelName: 'Pickalbatros Laguna Vista Resort 5★',
    hotelStars: 5,
    beachLine: '1-я пляжная линия',
    roomType: 'Standard Room Garden View (35 м²)',
    meals: 'Все включено (All Inclusive)',
    mealCode: 'AI',
    flightIncluded: true,
    flightDetails: {
      airline: 'Red Wings / Аэрофлот',
      flightNumber: 'Москва (SVO) 03:30 → Шарм (SSH) 08:15',
      baggage: '20 кг багаж + 5 кг ручная кладь',
      direct: true
    },
    nextDates: ['18–25 окт 2026', '26 окт – 02 ноя 2026', '08–15 ноя 2026'],
    included: [
      'Прямой авиаперелет чартером с багажом 20 кг',
      'Трансфер аэропорт — отель — аэропорт',
      'Проживание 7 ночей в отеле 5★',
      'Питание Все Включено',
      'Медицинская страховка'
    ],
    notIncluded: ['Въездная виза Египта ($25, если выезд за пределы Синая)', 'Дайвинг']
  },
  {
    id: 'centara-phuket',
    title: 'Таиланд: Centara Grand Beach Resort 5★ • Пхукет',
    country: 'Таиланд',
    region: 'Юго-Восточная Азия',
    city: 'Пхукет (Пляж Карон)',
    departureCity: 'Москва (Шереметьево)',
    tourOperator: 'Fun&Sun',
    durationDays: 11,
    durationNights: 10,
    price: 94500,
    oldPrice: 112000,
    currency: '₽',
    rating: 4.92,
    reviewsCount: 167,
    badge: '1-я линия • Пляж Карон',
    badgeColor: 'emerald',
    coverImage: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Утопающий в тропической зелени курорт в португальском колониальном стиле прямо на знаменитом пляже «поющих песков» Карон. Ленивая река, водные горки, спа-комплекс Cenvaree.',
    highlights: [
      'Прямой беспосадочный перелет Аэрофлот (Boeing 777-300ER)',
      'Единственный пятизвездочный отель с прямым выходом на пляж Карон без дороги',
      'Аквапарк с ленивой рекой и горками прямо на территории отеля',
      'Питание: богатые завтраки «шведский стол» с экзотическими фруктами'
    ],
    hotelName: 'Centara Grand Beach Resort Phuket 5★',
    hotelStars: 5,
    beachLine: '1-я пляжная линия (прямой выход на песок)',
    roomType: 'Deluxe Ocean Facing (52 м² с террасой)',
    meals: 'Завтраки (Bed & Breakfast)',
    mealCode: 'BB',
    flightIncluded: true,
    flightDetails: {
      airline: 'Аэрофлот (SU-274)',
      flightNumber: 'Москва (SVO) 21:05 → Пхукет (HKT) 10:40',
      baggage: '23 кг багаж + 10 кг ручная кладь',
      direct: true
    },
    nextDates: ['04–15 ноя 2026', '18–29 ноя 2026', '02–13 дек 2026'],
    included: [
      'Прямой регулярный перелет Аэрофлот туда-обратно',
      'Индивидуальный кондиционированный трансфер',
      'Проживание 10 ночей в Deluxe номере',
      'Завтраки шведский стол',
      'Медстраховка туриста'
    ],
    notIncluded: ['Обеды и ужины', 'Экскурсии на острова Пхи-Пхи']
  },
  {
    id: 'sun-siyam-maldives',
    title: 'Мальдивы: Sun Siyam Olhuveli 5★ • Вилла над водой',
    country: 'Мальдивы',
    region: 'Индийский океан',
    city: 'Южный Мале Атолл',
    departureCity: 'Москва (Шереметьево)',
    tourOperator: 'Pac Group',
    durationDays: 8,
    durationNights: 7,
    price: 189000,
    oldPrice: 220000,
    currency: '₽',
    rating: 4.99,
    reviewsCount: 114,
    badge: 'Water Villa • All Inclusive',
    badgeColor: 'indigo',
    coverImage: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Мальдивская идиллия: просторная вилла на сваях над бирюзовой лагуной со стеклянным полом и прямым спуском в океан. Питание All Inclusive с премиальными напитками, домашний риф с мантами и дельфинами.',
    highlights: [
      'Прямой рейс Москва — Мале (Аэрофлот)',
      'Скоростной катер из аэропорта прямо к пирсу резорта (45 минут)',
      'Проживание в Water Villa с панорамной террасой',
      'Снорклинг-сафари к мантовым рифам включено в тур'
    ],
    hotelName: 'Sun Siyam Olhuveli Maldives 5★',
    hotelStars: 5,
    beachLine: 'Вилла прямо над океаном',
    roomType: 'Deluxe Water Villa (64 м²)',
    meals: 'Все включено (All Inclusive)',
    mealCode: 'AI',
    flightIncluded: true,
    flightDetails: {
      airline: 'Аэрофлот (SU-320)',
      flightNumber: 'Москва (SVO) 22:10 → Мале (MLE) 09:15',
      baggage: '23 кг багаж + 10 кг ручная кладь',
      direct: true
    },
    nextDates: ['12–19 ноя 2026', '26 ноя – 03 дек 2026', '10–17 дек 2026'],
    included: [
      'Авиаперелет Москва — Мале — Москва',
      'Трансфер на скоростном катере',
      'Вилла на воде 7 ночей',
      'Питание Все Включено',
      'Зеленый налог (Green Tax)',
      'Страховка'
    ],
    notIncluded: ['Дайвинг с аквалангом PADI', 'Премиальные вина по меню']
  },
  {
    id: 'radisson-sochi',
    title: 'Россия: Radisson Collection Paradise 5★ • Сочи',
    country: 'Россия',
    region: 'Черноморское побережье',
    city: 'Сочи (Сириус / Имеретинка)',
    departureCity: 'Москва / Санкт-Петербург / Казань',
    tourOperator: 'TrawelWay Россия',
    durationDays: 6,
    durationNights: 5,
    price: 42000,
    oldPrice: 51000,
    currency: '₽',
    rating: 4.95,
    reviewsCount: 382,
    badge: 'Тур по России • 1-я линия',
    badgeColor: 'teal',
    coverImage: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Премиальный спа-курорт на первой линии Имеретинской набережной рядом с Олимпийским парком. Термальный комплекс «SIBO» площадью 2500 м², открытый подогреваемый бассейн с морской водой и рестораны итальянской кухни.',
    highlights: [
      'Прямой авиаперелет из Москвы в Сочи (AER) регулярным рейсом',
      'Безлимитный доступ в термальный спа-комплекс SIBO Spa',
      'Первая линия моря и живописная пешеходная набережная Сириуса',
      'Шикарные завтраки Super Breakfast Buffet'
    ],
    hotelName: 'Radisson Collection Paradise Resort & Spa 5★',
    hotelStars: 5,
    beachLine: '1-я береговая линия',
    roomType: 'Collection Superior Room (32 м² с балконом)',
    meals: 'Завтраки «Шведский стол»',
    mealCode: 'BB',
    flightIncluded: true,
    flightDetails: {
      airline: 'Аэрофлот / S7 Airlines',
      flightNumber: 'Москва (SVO/DME) 10:30 → Сочи (AER) 14:10',
      baggage: '23 кг багаж + 10 кг ручная кладь',
      direct: true
    },
    nextDates: ['15–20 окт 2026', '25–30 окт 2026', '05–10 ноя 2026'],
    included: [
      'Авиабилеты Москва — Сочи — Москва с багажом',
      'Индивидуальный трансфер в отель',
      'Проживание 5 ночей в номере Superior',
      'Завтраки шведский стол',
      'Посещение SIBO Spa и подогреваемых бассейнов'
    ],
    notIncluded: ['Курортный сбор (50 ₽/сутки)', 'Обеды и ужины']
  }
];

export const TRAVEL_OFFICES: TravelOffice[] = [
  {
    id: 'moscow-tverskaya',
    city: 'Москва',
    name: 'Флагманский офис «Тверская»',
    metro: 'м. Пушкинская / Тверская / Чеховская',
    address: 'ул. Тверская, д. 12, стр. 2 (вход с Тверской, 2 этаж)',
    hours: 'Ежедневно: с 10:00 до 21:00 (без выходных)',
    phone: '+7 (495) 832-44-12',
    email: 'tverskaya@trawelway.ru',
    isHeadquarters: true
  },
  {
    id: 'spb-nevsky',
    city: 'Санкт-Петербург',
    name: 'Офис продаж «Невский»',
    metro: 'м. Гостиный Двор / Невский Проспект',
    address: 'Невский проспект, д. 54 (БЦ «Пассаж», оф. 312)',
    hours: 'Пн — Сб: с 10:00 до 20:00, Вс: с 11:00 до 18:00',
    phone: '+7 (812) 412-88-90',
    email: 'spb@trawelway.ru'
  },
  {
    id: 'ekb-lenina',
    city: 'Екатеринбург',
    name: 'Офис продаж «Европа»',
    metro: 'м. Площадь 1905 года',
    address: 'ул. Ленина, д. 25 (ТЦ «Европа», 4 этаж)',
    hours: 'Пн — Пт: с 10:00 до 19:00, Сб: с 11:00 до 17:00',
    phone: '+7 (343) 301-20-40',
    email: 'ekb@trawelway.ru'
  },
  {
    id: 'online-russia',
    city: 'Все регионы РФ',
    name: 'Центр дистанционного бронирования 24/7',
    metro: 'Онлайн / СБП / Договор по SMS',
    address: 'Электронное оформление путевок с QR-договором по всей России',
    hours: 'Круглосуточно, 24/7 без праздников',
    phone: '+7 (800) 555-35-35',
    email: 'online@trawelway.ru'
  }
];

export const TRAVEL_MANAGERS: TravelManager[] = [
  {
    id: 'mgr-1',
    name: 'Екатерина Соколова',
    role: 'Ведущий тревел-эксперт по Турции и ОАЭ',
    experience: '9 лет в туризме • Лично проверила 140+ отелей',
    specialization: 'Премиальные резорты Belek, Palm Jumeirah, раннее бронирование',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    phone: '+7 (495) 832-44-12 доб. 104',
    telegram: '@sokolova_trawel'
  },
  {
    id: 'mgr-2',
    name: 'Михаил Воронов',
    role: 'Специалист по экзотическим направлениям',
    experience: '8 лет в туризме • Эксперт по Мальдивам и Азии',
    specialization: 'Мальдивы, Таиланд, виллы над водой, свадебные путешествия',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    phone: '+7 (495) 832-44-12 доб. 108',
    telegram: '@voronov_trawel'
  },
  {
    id: 'mgr-3',
    name: 'Анна Мельникова',
    role: 'Эксперт по семейному отдыху и турам с детьми',
    experience: '6 лет в туризме • Сертифицированный эксперт Fun&Sun',
    specialization: 'Отели с аквапарками, пологим песком, детскими клубами и All Inclusive',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    phone: '+7 (495) 832-44-12 доб. 112',
    telegram: '@melnikova_trawel'
  }
];

export const CLIENT_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Дмитрий Васильев',
    city: 'Москва',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '12 сен 2026',
    tourTitle: 'Rixos Premium Belek 5★ (Турция)',
    text: 'Бронировали через TrawelWay в офисе на Тверской. Менеджер Екатерина помогла выбрать номер с видом на море и организовала индивидуальный трансфер. Отдых прошел идеально: отель шикарный, сервис на высоте!'
  },
  {
    id: 'rev-2',
    author: 'Елена и Артур Григорьевы',
    city: 'Санкт-Петербург',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '28 авг 2026',
    tourTitle: 'Atlantis The Palm 5★ (ОАЭ)',
    text: 'Покупали тур на годовщину свадьбы. TrawelWay предоставили бесплатный апгрейд и приятный комплимент от отеля. Аквапарк Aquaventure превзошел все ожидания. Спасибо за надежность!'
  },
  {
    id: 'rev-3',
    author: 'Семья Корнеевых',
    city: 'Екатеринбург',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '19 авг 2026',
    tourTitle: 'Pickalbatros Laguna Vista 5★ (Египет)',
    text: 'Летали с двумя детьми 4 и 7 лет. Анна подобрала отель с идеальным песчаным заходом в море и детскими горками. Питание отличное, ни разу не пожалели. Будем обращаться снова!'
  }
];

export const USER_ACTIVE_BOOKING: Booking = {
  id: 'TW-89214',
  tourId: 'rixos-belek',
  tourTitle: 'Турция: Rixos Premium Belek 5★ Deluxe • Все включено',
  destination: 'Белек, Турция',
  dates: '14 окт — 21 окт 2026 (7 ночей)',
  guestsCount: 2,
  guestsText: '2 взрослых (Артём Морозов, Екатерина Иванова)',
  totalPrice: 179000,
  currency: '₽',
  status: 'confirmed',
  statusLabel: 'Оплачено 100% • Ваучер выписан',
  coverImage: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
  hotel: 'Rixos Premium Belek 5★ (Deluxe Room Sea View)',
  flightNumber: 'TK-418 (Turkish Airlines, Москва VKO → Анталья AYT)',
  departureTime: '14 окт 2026, 04:15 (VKO)',
  arrivalTime: '14 окт 2026, 08:45 (AYT)',
  voucherCode: 'VCH-TRW-2026-RIX-9941',
  managerName: 'Екатерина Соколова (Офис «Тверская»)',
  managerPhone: '+7 (495) 832-44-12 доб. 104'
};

export const CURRENT_USER: UserProfile = {
  id: 'usr-9281',
  firstName: 'Артём',
  lastName: 'Морозов',
  email: 'artyommoroz07@gmail.com',
  phone: '+7 (926) 554-19-82',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
  bonusMiles: 14500,
  tier: 'Gold',
  tierProgress: 75,
  passportNumber: '75 18 903421',
  passportExpiry: '14.08.2031',
  activeBookingsCount: 1,
  completedTripsCount: 4,
  favoriteToursCount: 3
};
