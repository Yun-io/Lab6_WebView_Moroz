import React, { useState } from 'react';
import { PageId } from '../../types';
import { FEATURED_TOURS, CLIENT_REVIEWS, AGENCY_INFO, PARTNER_OPERATORS } from '../../data/mockData';
import { 
  Search, 
  MapPin, 
  Calendar, 
  Users, 
  Star, 
  ShieldCheck, 
  Plane, 
  Heart, 
  ChevronRight,
  Headphones,
  Award,
  CreditCard,
  Building2,
  Utensils,
  CalendarCheck2
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId, tourId?: string) => void;
  onOpenBooking: (tourId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenBooking }) => {
  const [searchDestination, setSearchDestination] = useState('');
  const [departureCity, setDepartureCity] = useState('Москва');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [favorites, setFavorites] = useState<string[]>(['rixos-belek']);

  const destinationCategories = [
    { id: 'all', label: '🔥 Горящие туры' },
    { id: 'turkey', label: '🇹🇷 Турция 5★' },
    { id: 'uae', label: '🇦🇪 ОАЭ и Дубай' },
    { id: 'egypt', label: '🇪🇬 Египет' },
    { id: 'thailand', label: '🇹🇭 Таиланд' },
    { id: 'maldives', label: '🇲🇻 Мальдивы' },
    { id: 'russia', label: '🇷🇺 Сочи и Россия' },
  ];

  const toggleFavorite = (tourId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites(prev => 
      prev.includes(tourId) ? prev.filter(id => id !== tourId) : [...prev, tourId]
    );
  };

  return (
    <div className="w-full bg-slate-50 text-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 text-white">
        {/* Background Image with Dark Tint */}
        <div className="absolute inset-0 z-0 opacity-35">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80"
            alt="Курорт"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 lg:py-20">
          {/* Tagline & Title */}
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              <span>Официальное турагентство • РТА №{AGENCY_INFO.registryNumber}</span>
            </div>

            <h1 className="font-black tracking-tight text-white text-2xl sm:text-4xl lg:text-5xl leading-tight">
              Поиск и бронирование пакетных туров с <span className="text-teal-400">TrawelWay</span>
            </h1>

            <p className="text-slate-300 text-xs sm:text-base leading-relaxed max-w-2xl mx-auto">
              Пакетные туры «Все включено» с прямыми рейсами, отелями 5★, трансфером и страховкой. Официальные цены туроператоров без скрытых комиссий.
            </p>
          </div>

          {/* Travel Agency Search Box */}
          <div className="mt-8 bg-white text-slate-800 rounded-2xl shadow-2xl border border-slate-100 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-end max-w-5xl mx-auto">
            {/* Input: Departure City */}
            <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200">
              <Plane className="w-4 h-4 text-teal-600 shrink-0" />
              <div className="flex-1 min-w-0">
                <label className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Город вылета</label>
                <select
                  value={departureCity}
                  onChange={(e) => setDepartureCity(e.target.value)}
                  className="w-full bg-transparent text-xs font-bold text-slate-800 focus:outline-hidden cursor-pointer"
                >
                  <option value="Москва">Москва (все а/п)</option>
                  <option value="Санкт-Петербург">Санкт-Петербург (LED)</option>
                  <option value="Екатеринбург">Екатеринбург (SVX)</option>
                  <option value="Казань">Казань (KZN)</option>
                </select>
              </div>
            </div>

            {/* Input: Destination */}
            <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200">
              <MapPin className="w-4 h-4 text-teal-600 shrink-0" />
              <div className="flex-1 min-w-0">
                <label className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Направление</label>
                <input
                  type="text"
                  placeholder="Турция, ОАЭ, Египет..."
                  value={searchDestination}
                  onChange={(e) => setSearchDestination(e.target.value)}
                  className="w-full bg-transparent text-xs font-semibold text-slate-800 focus:outline-hidden placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Input: Dates */}
            <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200">
              <Calendar className="w-4 h-4 text-teal-600 shrink-0" />
              <div className="flex-1 min-w-0">
                <label className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Даты тура</label>
                <div className="text-xs font-bold text-slate-800 truncate">Октябрь 2026</div>
              </div>
            </div>

            {/* Input: Guests */}
            <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200">
              <Users className="w-4 h-4 text-teal-600 shrink-0" />
              <div className="flex-1 min-w-0">
                <label className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Туристы</label>
                <div className="text-xs font-bold text-slate-800 truncate">2 взрослых</div>
              </div>
            </div>

            {/* Search Action Button */}
            <div>
              <button
                onClick={() => onNavigate('catalog')}
                className="w-full py-3 px-4 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-extrabold transition-colors shadow-md shadow-teal-600/30 flex items-center justify-center gap-2"
              >
                <Search className="w-4 h-4 shrink-0" />
                <span>Найти туры</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Pills Bar */}
      <section className="bg-white border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 overflow-x-auto no-scrollbar flex items-center gap-2">
          {destinationCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                if (cat.id !== 'all') {
                  onNavigate('catalog');
                }
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <span>{cat.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Trust Badges Strip */}
      <section className="bg-teal-900 text-white py-4 px-4 sm:px-6 border-b border-teal-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          <div className="flex items-center gap-3 bg-teal-950/40 p-2.5 rounded-xl border border-teal-800/40">
            <ShieldCheck className="w-5 h-5 text-teal-300 shrink-0" />
            <div className="min-w-0">
              <div className="font-bold text-white text-xs">Реестр турагентов РФ</div>
              <div className="text-[10px] text-teal-200 truncate">РТА №{AGENCY_INFO.registryNumber}</div>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-teal-950/40 p-2.5 rounded-xl border border-teal-800/40">
            <Award className="w-5 h-5 text-teal-300 shrink-0" />
            <div className="min-w-0">
              <div className="font-bold text-white text-xs">Фингарантии 50 млн ₽</div>
              <div className="text-[10px] text-teal-200 truncate">Защита в САО «ВСК»</div>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-teal-950/40 p-2.5 rounded-xl border border-teal-800/40">
            <CreditCard className="w-5 h-5 text-teal-300 shrink-0" />
            <div className="min-w-0">
              <div className="font-bold text-white text-xs">Рассрочка 0% на 6 мес.</div>
              <div className="text-[10px] text-teal-200 truncate">Без переплат от банков</div>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-teal-950/40 p-2.5 rounded-xl border border-teal-800/40">
            <Headphones className="w-5 h-5 text-teal-300 shrink-0" />
            <div className="min-w-0">
              <div className="font-bold text-white text-xs">Поддержка 24/7 в туре</div>
              <div className="text-[10px] text-teal-200 truncate">Горячая линия и чат</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Showcase Section: Featured Tours */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-3">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-teal-700 mb-1">
              Рекомендуемые туры сезона 2026
            </div>
            <h2 className="font-black text-slate-900 tracking-tight text-xl sm:text-3xl">
              Горящие путевки с вылетом из Москвы
            </h2>
          </div>
          <button
            onClick={() => onNavigate('catalog')}
            className="text-xs font-bold text-teal-700 hover:text-teal-800 flex items-center gap-1 shrink-0"
          >
            <span>Смотреть все туры в каталоге</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Featured Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_TOURS.slice(0, 3).map((tour) => {
            const isFav = favorites.includes(tour.id);
            return (
              <div
                key={tour.id}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-teal-300 transition-all flex flex-col"
              >
                {/* Image Container */}
                <div 
                  onClick={() => onNavigate('tour', tour.id)}
                  className="relative aspect-16/10 w-full overflow-hidden bg-slate-100 cursor-pointer"
                >
                  <img
                    src={tour.coverImage}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {tour.badge && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-[10px] font-bold tracking-tight bg-slate-900/85 text-white backdrop-blur-xs">
                      {tour.badge}
                    </div>
                  )}

                  <button
                    onClick={(e) => toggleFavorite(tour.id, e)}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-slate-700 hover:text-rose-500 transition-colors shadow-xs"
                    aria-label="В избранное"
                  >
                    <Heart className={`w-4 h-4 ${isFav ? 'fill-rose-500 text-rose-500' : ''}`} />
                  </button>

                  <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded-md bg-white/95 text-slate-900 text-[11px] font-bold shadow-xs">
                    {tour.durationDays} дней / {tour.durationNights} ночей
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5 gap-2">
                      <span className="font-bold text-teal-700 flex items-center gap-1 truncate">
                        <MapPin className="w-3 h-3 shrink-0" />
                        <span className="truncate">{tour.country}, {tour.city}</span>
                      </span>
                      <span className="flex items-center gap-1 font-bold text-slate-900 shrink-0">
                        <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500 shrink-0" />
                        {tour.rating}
                      </span>
                    </div>

                    <h3 
                      onClick={() => onNavigate('tour', tour.id)}
                      className="font-extrabold text-slate-900 text-base leading-snug group-hover:text-teal-700 transition-colors mb-2 line-clamp-2 cursor-pointer"
                    >
                      {tour.title}
                    </h3>

                    <div className="space-y-1 text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <div className="flex items-center gap-1.5 truncate">
                        <Building2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span className="truncate">{tour.hotelName}</span>
                      </div>
                      <div className="flex items-center gap-1.5 truncate">
                        <Utensils className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span className="truncate">{tour.meals}</span>
                      </div>
                      <div className="flex items-center gap-1.5 truncate">
                        <Plane className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span className="truncate">{tour.departureCity} (прямой)</span>
                      </div>
                    </div>
                  </div>

                  {/* Price & Booking Actions */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                    <div>
                      <div className="text-[10px] text-slate-400">Стоимость на 1 чел.:</div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-xl font-black text-slate-900">
                          {tour.price.toLocaleString('ru-RU')} ₽
                        </span>
                        {tour.oldPrice && (
                          <span className="text-xs text-slate-400 line-through hidden sm:inline">
                            {tour.oldPrice.toLocaleString('ru-RU')} ₽
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => onNavigate('tour', tour.id)}
                        className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors shrink-0"
                      >
                        Детали
                      </button>
                      <button
                        onClick={() => onOpenBooking(tour.id)}
                        className="px-3.5 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs transition-colors shadow-xs shrink-0 flex items-center gap-1"
                      >
                        <CalendarCheck2 className="w-3.5 h-3.5" />
                        <span>Бронь</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View Catalog Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => onNavigate('catalog')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-all shadow-md inline-flex items-center justify-center gap-2"
          >
            <span>Открыть полный каталог туров TrawelWay</span>
            <ChevronRight className="w-4 h-4 text-teal-400" />
          </button>
        </div>
      </section>

      {/* Partner Tour Operators Strip */}
      <section className="bg-white py-10 px-4 sm:px-6 border-y border-slate-200">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="text-center space-y-1">
            <h3 className="font-extrabold text-slate-900 text-base sm:text-xl">
              Прямые контракты с ведущими туроператорами
            </h3>
            <p className="text-xs text-slate-500">
              Гарантированные блоки мест на регулярных и чартерных рейсах без скрытых доплат
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
            {PARTNER_OPERATORS.map((op) => (
              <div key={op.name} className="p-3 rounded-xl border border-slate-100 bg-slate-50 text-center">
                <div className="text-xl mb-1">{op.logo}</div>
                <div className="font-bold text-xs text-slate-900">{op.name}</div>
                <div className="text-[10px] text-slate-500 truncate">{op.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="mb-6">
          <div className="text-xs font-bold text-teal-700 uppercase tracking-wider mb-1">
            Реальный опыт туристов
          </div>
          <h2 className="font-black text-slate-900 tracking-tight text-xl sm:text-3xl">
            Отзывы наших клиентов
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CLIENT_REVIEWS.map((rev) => (
            <div key={rev.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-2">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 shrink-0" />
                  ))}
                </div>
                <div className="font-bold text-xs text-teal-800 mb-1">{rev.tourTitle}</div>
                <p className="text-xs text-slate-600 leading-relaxed italic mb-4">"{rev.text}"</p>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                <img src={rev.avatar} alt={rev.author} className="w-9 h-9 rounded-full object-cover shrink-0" />
                <div className="min-w-0">
                  <div className="font-bold text-xs text-slate-900 truncate">{rev.author}</div>
                  <div className="text-[10px] text-slate-400 truncate">{rev.city} • {rev.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA to About / Offices */}
      <section className="bg-teal-900 text-white py-12 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h2 className="text-xl sm:text-3xl font-extrabold leading-snug">
            Ждем вас в офисах TrawelWay в Москве и Санкт-Петербурге!
          </h2>
          <p className="text-xs sm:text-sm text-teal-100 max-w-xl mx-auto leading-relaxed">
            Офисы на Тверской в Москве и на Невском в Петербурге открыты ежедневно. Подберем индивидуальное путешествие или оформим путевку онлайн.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('about')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-slate-900 font-bold text-xs hover:bg-teal-50 transition-colors shadow-md"
            >
              Адреса офисов и контакты
            </button>
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-teal-800 text-white font-bold text-xs hover:bg-teal-700 transition-colors border border-teal-600"
            >
              Оставить заявку на подбор
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
