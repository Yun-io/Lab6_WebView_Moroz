import React, { useState, useMemo } from 'react';
import { PageId } from '../../types';
import { FEATURED_TOURS } from '../../data/mockData';
import { 
  Search, 
  Filter, 
  Star, 
  MapPin, 
  Calendar, 
  Plane, 
  Heart, 
  ArrowUpDown,
  Building2,
  Utensils,
  CalendarCheck2,
  X
} from 'lucide-react';

interface CatalogPageProps {
  onNavigate: (page: PageId, tourId?: string) => void;
  onOpenBooking: (tourId?: string) => void;
}

export const CatalogPage: React.FC<CatalogPageProps> = ({ onNavigate, onOpenBooking }) => {
  const [selectedCountry, setSelectedCountry] = useState<string>('all');
  const [selectedMeal, setSelectedMeal] = useState<string>('all');
  const [selectedStars, setSelectedStars] = useState<number | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'recommended' | 'price-asc' | 'price-desc' | 'rating'>('recommended');
  const [favorites, setFavorites] = useState<string[]>(['rixos-belek']);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const countries = [
    { id: 'all', label: 'Все страны' },
    { id: 'Турция', label: 'Турция', flag: '🇹🇷' },
    { id: 'ОАЭ', label: 'ОАЭ', flag: '🇦🇪' },
    { id: 'Египет', label: 'Египет', flag: '🇪🇬' },
    { id: 'Таиланд', label: 'Таиланд', flag: '🇹🇭' },
    { id: 'Мальдивы', label: 'Мальдивы', flag: '🇲🇻' },
    { id: 'Россия', label: 'Россия', flag: '🇷🇺' },
  ];

  const mealOptions = [
    { id: 'all', label: 'Любое питание' },
    { id: 'UAI', label: 'Ultra All Inclusive' },
    { id: 'AI', label: 'Все включено (AI)' },
    { id: 'HB', label: 'Завтрак + Ужин (HB)' },
    { id: 'BB', label: 'Только завтрак (BB)' },
  ];

  const toggleFavorite = (tourId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites(prev => 
      prev.includes(tourId) ? prev.filter(id => id !== tourId) : [...prev, tourId]
    );
  };

  const filteredTours = useMemo(() => {
    return FEATURED_TOURS.filter(tour => {
      if (selectedCountry !== 'all' && tour.country !== selectedCountry) return false;
      if (selectedMeal !== 'all' && tour.mealCode !== selectedMeal) return false;
      if (selectedStars !== 'all' && tour.hotelStars !== selectedStars) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = tour.title.toLowerCase().includes(q);
        const matchCountry = tour.country.toLowerCase().includes(q);
        const matchCity = tour.city.toLowerCase().includes(q);
        const matchHotel = tour.hotelName.toLowerCase().includes(q);
        if (!matchTitle && !matchCountry && !matchCity && !matchHotel) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // recommended
    });
  }, [selectedCountry, selectedMeal, selectedStars, searchQuery, sortBy]);

  return (
    <div className="w-full bg-slate-50 text-slate-900 pb-16">
      {/* Header Banner */}
      <div className="bg-slate-900 text-white py-8 px-4 sm:px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="flex items-center gap-2 text-xs text-teal-400 font-semibold">
            <button onClick={() => onNavigate('home')} className="hover:underline">Главная</button>
            <span>/</span>
            <span className="text-white">Каталог и поиск туров</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="font-black tracking-tight text-white text-2xl sm:text-3xl lg:text-4xl">
                Каталог туров турагентства TrawelWay
              </h1>
              <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
                Актуальные цены от официальных туроператоров на сезон 2026. Пакетные туры с прямыми рейсами, отелями и медстраховкой.
              </p>
            </div>

            <button
              onClick={() => onOpenBooking()}
              className="px-4 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs flex items-center gap-2 self-start md:self-auto shrink-0 transition-colors shadow-xs"
            >
              <CalendarCheck2 className="w-4 h-4" />
              <span>Заявка на индивидуальный подбор</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* SIDEBAR: Filters (Desktop) */}
          <aside className="hidden lg:block lg:col-span-3 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="font-extrabold text-sm text-slate-900 flex items-center gap-2">
                <Filter className="w-4 h-4 text-teal-600" />
                <span>Фильтры поиска</span>
              </span>
              {(selectedCountry !== 'all' || selectedMeal !== 'all' || selectedStars !== 'all' || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedCountry('all');
                    setSelectedMeal('all');
                    setSelectedStars('all');
                    setSearchQuery('');
                  }}
                  className="text-[11px] text-teal-700 font-bold hover:underline"
                >
                  Сбросить
                </button>
              )}
            </div>

            {/* Country Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 block">Страна назначения</label>
              <div className="space-y-1">
                {countries.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCountry(c.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-colors ${
                      selectedCountry === c.id
                        ? 'bg-teal-50 text-teal-900 font-bold border border-teal-200'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {c.flag && <span>{c.flag}</span>}
                      <span>{c.label}</span>
                    </span>
                    {selectedCountry === c.id && <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Hotel Stars */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <label className="text-xs font-bold text-slate-700 block">Категория отеля</label>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { val: 'all', label: 'Все' },
                  { val: 4, label: '4★' },
                  { val: 5, label: '5★ Lux' },
                ].map((st) => (
                  <button
                    key={st.val}
                    onClick={() => setSelectedStars(st.val as any)}
                    className={`py-2 px-1 rounded-xl text-xs font-bold text-center border transition-all ${
                      selectedStars === st.val
                        ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {st.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Meals */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <label className="text-xs font-bold text-slate-700 block">Тип питания</label>
              <div className="space-y-1">
                {mealOptions.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setSelectedMeal(m.id)}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs transition-colors ${
                      selectedMeal === m.id
                        ? 'bg-teal-50 text-teal-800 font-bold'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Direct flight badge info */}
            <div className="pt-2 border-t border-slate-100 bg-slate-50 p-3 rounded-xl border border-slate-100 text-[11px] text-slate-600 space-y-1">
              <div className="font-bold text-slate-900">Включено во все туры:</div>
              <div>✓ Прямой авиаперелет из РФ</div>
              <div>✓ Багаж 20-23 кг + ручная кладь</div>
              <div>✓ Групповой трансфер аэропорт-отель</div>
              <div>✓ Медстраховка на 40 000 $</div>
            </div>
          </aside>

          {/* MAIN COLUMN: Search & Results */}
          <main className="lg:col-span-9 space-y-4">
            
            {/* Search Input & Controls */}
            <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="flex flex-col sm:flex-row gap-3 items-center">
                {/* Search query input */}
                <div className="relative flex-1 w-full">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="Поиск по названию отеля, курорту или стране..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:border-teal-500 bg-slate-50"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Mobile Filter Toggle */}
                <button
                  onClick={() => setShowMobileFilters(!showMobileFilters)}
                  className="lg:hidden w-full sm:w-auto px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 shrink-0"
                >
                  <Filter className="w-3.5 h-3.5" />
                  <span>Фильтры</span>
                  {(selectedCountry !== 'all' || selectedMeal !== 'all' || selectedStars !== 'all') && (
                    <span className="w-2 h-2 rounded-full bg-teal-600" />
                  )}
                </button>

                {/* Sort selector */}
                <div className="flex items-center gap-1.5 w-full sm:w-auto justify-end">
                  <ArrowUpDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-2 focus:outline-hidden cursor-pointer"
                  >
                    <option value="recommended">Сначала рекомендуемые</option>
                    <option value="price-asc">Сначала дешевле</option>
                    <option value="price-desc">Сначала дороже</option>
                    <option value="rating">По рейтингу туристов</option>
                  </select>
                </div>
              </div>

              {/* Counter label */}
              <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
                <span>
                  Найдено предложений: <strong className="text-slate-900 font-extrabold">{filteredTours.length}</strong>
                </span>
                <span className="hidden sm:inline text-teal-700 font-medium">
                  Официальные цены без комиссий
                </span>
              </div>
            </div>

            {/* Mobile Filters Dropdown */}
            {showMobileFilters && (
              <div className="lg:hidden bg-white p-4 rounded-2xl border border-slate-200 shadow-lg space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-slate-800">Фильтры туров</span>
                  <button
                    onClick={() => setShowMobileFilters(false)}
                    className="text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-500 uppercase">Страна</label>
                  <div className="flex flex-wrap gap-1.5">
                    {countries.map(c => (
                      <button
                        key={c.id}
                        onClick={() => setSelectedCountry(c.id)}
                        className={`px-2.5 py-1 rounded-lg text-xs ${
                          selectedCountry === c.id
                            ? 'bg-teal-600 text-white font-bold'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                  <select
                    value={selectedMeal}
                    onChange={(e) => setSelectedMeal(e.target.value)}
                    className="w-full p-2 text-xs border border-slate-200 rounded-lg bg-slate-50"
                  >
                    {mealOptions.map(m => <option key={m.id} value={m.id}>{m.label}</option>)}
                  </select>
                  <select
                    value={selectedStars}
                    onChange={(e) => setSelectedStars(e.target.value as any)}
                    className="w-full p-2 text-xs border border-slate-200 rounded-lg bg-slate-50"
                  >
                    <option value="all">Все категории отелей</option>
                    <option value="5">Только 5★ Премиум</option>
                    <option value="4">Отели 4★</option>
                  </select>
                </div>
              </div>
            )}

            {/* Tours Cards List */}
            <div className="space-y-4">
              {filteredTours.map((tour) => {
                const isFav = favorites.includes(tour.id);
                return (
                  <div
                    key={tour.id}
                    className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-teal-400 hover:shadow-lg transition-all group flex flex-col md:flex-row"
                  >
                    {/* Image Area */}
                    <div 
                      onClick={() => onNavigate('tour', tour.id)}
                      className="relative shrink-0 overflow-hidden bg-slate-100 w-full md:w-72 aspect-16/10 md:aspect-auto cursor-pointer"
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
                        className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-slate-700 hover:text-rose-500 shadow-xs"
                        aria-label="В избранное"
                      >
                        <Heart className={`w-4 h-4 ${isFav ? 'fill-rose-500 text-rose-500' : ''}`} />
                      </button>

                      <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded-md bg-white/95 text-slate-900 text-[11px] font-bold shadow-xs">
                        {tour.durationDays} дней / {tour.durationNights} ночей
                      </div>
                    </div>

                    {/* Content Details Area */}
                    <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between min-w-0">
                      <div>
                        {/* Tags Strip */}
                        <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2 mb-2">
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded-md text-[11px] flex items-center gap-1 shrink-0">
                              <MapPin className="w-3 h-3 text-teal-600" />
                              <span>{tour.country}, {tour.city}</span>
                            </span>
                            <span className="text-slate-400 text-[11px] truncate">
                              Оператор: {tour.tourOperator}
                            </span>
                          </div>

                          <div className="flex items-center gap-1 font-bold text-slate-900 text-xs shrink-0">
                            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500 shrink-0" />
                            <span>{tour.rating}</span>
                          </div>
                        </div>

                        {/* Title */}
                        <h3 
                          onClick={() => onNavigate('tour', tour.id)}
                          className="font-extrabold text-slate-900 text-base sm:text-lg group-hover:text-teal-700 transition-colors mb-2 leading-snug line-clamp-2 cursor-pointer"
                        >
                          {tour.title}
                        </h3>

                        {/* Quick Spec Tags */}
                        <div className="gap-2 text-xs text-slate-600 mb-3 bg-slate-50 p-2.5 rounded-xl border border-slate-100 grid grid-cols-1 sm:grid-cols-2">
                          <div className="flex items-center gap-1.5 truncate">
                            <Building2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                            <span className="truncate">{tour.hotelName} {tour.beachLine ? `• ${tour.beachLine}` : ''}</span>
                          </div>
                          <div className="flex items-center gap-1.5 truncate">
                            <Utensils className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                            <span className="truncate">{tour.meals}</span>
                          </div>
                          <div className="flex items-center gap-1.5 truncate">
                            <Plane className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                            <span className="truncate">{tour.departureCity} (прямой рейс)</span>
                          </div>
                          <div className="flex items-center gap-1.5 truncate">
                            <Calendar className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                            <span className="truncate">Вылет: {tour.nextDates[0]}</span>
                          </div>
                        </div>
                      </div>

                      {/* Pricing and Action Footer */}
                      <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <div className="text-[10px] text-slate-400">Стоимость тура на 1 чел.:</div>
                          <div className="flex items-baseline gap-2">
                            <span className="text-xl sm:text-2xl font-black text-teal-800">
                              {tour.price.toLocaleString('ru-RU')} ₽
                            </span>
                            {tour.oldPrice && (
                              <span className="text-xs text-slate-400 line-through hidden sm:inline">
                                {tour.oldPrice.toLocaleString('ru-RU')} ₽
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => onNavigate('tour', tour.id)}
                            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
                          >
                            Подробнее
                          </button>
                          <button
                            onClick={() => onOpenBooking(tour.id)}
                            className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs transition-colors shadow-xs flex items-center gap-1.5"
                          >
                            <CalendarCheck2 className="w-3.5 h-3.5" />
                            <span>Забронировать</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Empty state if search finds nothing */}
            {filteredTours.length === 0 && (
              <div className="bg-white p-10 rounded-2xl border border-slate-200 text-center space-y-3">
                <Search className="w-10 h-10 text-slate-300 mx-auto" />
                <h4 className="font-bold text-base text-slate-800">По вашим фильтрам ничего не найдено</h4>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Попробуйте сбросить параметры фильтрации или обратитесь к менеджеру TrawelWay для индивидуального поиска.
                </p>
                <button
                  onClick={() => {
                    setSelectedCountry('all');
                    setSelectedMeal('all');
                    setSelectedStars('all');
                    setSearchQuery('');
                  }}
                  className="px-4 py-2 rounded-xl bg-teal-600 text-white text-xs font-bold"
                >
                  Сбросить все фильтры
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};
