import React, { useState, useMemo } from 'react';
import { PageId, DeviceView } from '../../types';
import { FEATURED_TOURS } from '../../data/mockData';
import { 
  Search, 
  Filter, 
  Star, 
  MapPin, 
  Calendar, 
  Plane, 
  CheckCircle2, 
  Heart, 
  ArrowUpDown,
  SlidersHorizontal,
  Building2,
  Utensils,
  X,
  PhoneCall
} from 'lucide-react';

interface CatalogPageProps {
  onNavigate: (page: PageId, tourId?: string) => void;
  device: DeviceView;
}

export const CatalogPage: React.FC<CatalogPageProps> = ({ onNavigate, device }) => {
  const [selectedCountry, setSelectedCountry] = useState<string>('all');
  const [selectedMeal, setSelectedMeal] = useState<string>('all');
  const [selectedStars, setSelectedStars] = useState<number | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'recommended' | 'price-asc' | 'price-desc' | 'rating'>('recommended');
  const [favorites, setFavorites] = useState<string[]>(['rixos-belek']);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const isMobile = device === 'mobile';

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
            <span>Главная</span>
            <span>/</span>
            <span className="text-white">Каталог и поиск туров</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className={`font-extrabold tracking-tight text-white ${isMobile ? 'text-2xl' : 'text-3xl lg:text-4xl'}`}>
                Каталог туров турагентства TrawelWay
              </h1>
              <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
                Пакетные путевки с перелетом, трансфером, отелями 5★ и медицинской страховкой. Прямые контракты с туроператорами.
              </p>
            </div>

            <div className="flex items-center gap-2 bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700 text-xs text-slate-200 shrink-0">
              <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
              <span>Фингарантии 50 млн ₽ • РТА №0028491</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
        {/* Quick Country Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-6">
          {countries.map(c => (
            <button
              key={c.id}
              onClick={() => setSelectedCountry(c.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold shrink-0 transition-all flex items-center gap-1.5 shadow-xs ${
                selectedCountry === c.id
                  ? 'bg-teal-700 text-white shadow-teal-700/20'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-teal-400'
              }`}
            >
              {c.flag && <span>{c.flag}</span>}
              <span>{c.label}</span>
              {c.id !== 'all' && (
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  selectedCountry === c.id ? 'bg-teal-800 text-teal-200' : 'bg-slate-100 text-slate-500'
                }`}>
                  {FEATURED_TOURS.filter(t => t.country === c.id).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Filters and List Grid */}
        <div className={`grid gap-6 items-start ${isMobile ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-4'}`}>
          {/* Left Sidebar Filters (Desktop ONLY) */}
          {!isMobile && (
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <Filter className="w-4 h-4 text-teal-600" />
                  <span>Фильтры подбора</span>
                </div>
                <button
                  onClick={() => {
                    setSelectedCountry('all');
                    setSelectedMeal('all');
                    setSelectedStars('all');
                    setSearchQuery('');
                  }}
                  className="text-xs text-teal-700 hover:underline font-medium"
                >
                  Сбросить
                </button>
              </div>

              {/* Search Input */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Поиск по отелю или курорту</label>
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Rixos, Belek, Дубай..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:border-teal-500 bg-slate-50"
                  />
                </div>
              </div>

              {/* Stars */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700">Класс отеля</label>
                <div className="grid grid-cols-2 gap-1.5">
                  {[
                    { value: 'all', label: 'Все звезды' },
                    { value: 5, label: '5★ Премиум' },
                    { value: 4, label: '4★ Отели' }
                  ].map(opt => (
                    <button
                      key={String(opt.value)}
                      onClick={() => setSelectedStars(opt.value as any)}
                      className={`py-1.5 px-2 rounded-lg text-xs font-medium border text-center transition-colors ${
                        selectedStars === opt.value
                          ? 'bg-teal-50 border-teal-600 text-teal-800 font-bold'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Meal Type */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Тип питания</label>
                <div className="space-y-1">
                  {mealOptions.map(m => (
                    <button
                      key={m.id}
                      onClick={() => setSelectedMeal(m.id)}
                      className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs transition-colors flex items-center justify-between ${
                        selectedMeal === m.id
                          ? 'bg-teal-50 text-teal-800 font-bold'
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <span className="truncate">{m.label}</span>
                      {selectedMeal === m.id && <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Included in All Tours Notice */}
              <div className="bg-teal-50 p-3 rounded-xl border border-teal-100 text-[11px] text-teal-900 space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-teal-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>В каждый тур включено:</span>
                </div>
                <ul className="list-disc list-inside space-y-0.5 text-slate-600 text-[10px]">
                  <li>Авиаперелет туда и обратно с багажом</li>
                  <li>Трансфер аэропорт — отель</li>
                  <li>Медицинская страховка</li>
                </ul>
              </div>

              {/* Fast Assistance Box */}
              <div className="bg-slate-900 text-white p-4 rounded-xl text-center space-y-2">
                <div className="text-xs font-bold">Нужна помощь с выбором?</div>
                <p className="text-[11px] text-slate-300">
                  Эксперты TrawelWay подберут тур под ваш бюджет за 15 минут.
                </p>
                <button
                  onClick={() => onNavigate('about')}
                  className="w-full py-2 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Связаться с офисом</span>
                </button>
              </div>
            </div>
          )}

          {/* Right Main Tours List */}
          <div className={`${isMobile ? 'w-full' : 'lg:col-span-3'} space-y-4`}>
            {/* Sorting & Result Count Bar */}
            <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs font-semibold text-slate-700">
                Найдено предложений: <span className="text-teal-700 font-bold text-sm">{filteredTours.length}</span>
              </div>

              <div className="flex items-center gap-2">
                {/* Mobile Filter Toggle Button */}
                {isMobile && (
                  <button
                    onClick={() => setShowMobileFilters(!showMobileFilters)}
                    className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-800 border border-slate-200 text-xs font-bold flex items-center gap-1.5"
                  >
                    <SlidersHorizontal className="w-3.5 h-3.5 text-teal-600" />
                    <span>Фильтры</span>
                  </button>
                )}

                {/* Sort Selector */}
                <div className="flex items-center gap-1 text-xs text-slate-600">
                  <ArrowUpDown className="w-3.5 h-3.5 text-slate-400 hidden sm:inline" />
                  <span className="hidden sm:inline">Сортировка:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1 text-xs font-semibold text-slate-800 focus:outline-hidden focus:border-teal-500 cursor-pointer"
                  >
                    <option value="recommended">Рекомендуемые</option>
                    <option value="price-asc">По цене (сначала доступные)</option>
                    <option value="price-desc">По цене (сначала дорогие)</option>
                    <option value="rating">По рейтингу отеля</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Mobile Filters Drawer */}
            {isMobile && showMobileFilters && (
              <div className="bg-white p-4 rounded-2xl border border-teal-200 shadow-md space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-slate-900">Быстрые фильтры</span>
                  <button onClick={() => setShowMobileFilters(false)} className="p-1 text-slate-400">
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="space-y-2">
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
                    onClick={() => onNavigate('tour', tour.id)}
                    className={`bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-teal-400 hover:shadow-lg transition-all cursor-pointer group ${
                      isMobile ? 'flex flex-col' : 'flex flex-col md:flex-row'
                    }`}
                  >
                    {/* Image Area */}
                    <div className={`relative shrink-0 overflow-hidden bg-slate-100 ${
                      isMobile ? 'w-full aspect-16/10' : 'w-full md:w-72 aspect-16/10 md:aspect-auto'
                    }`}>
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
                        <h3 className="font-extrabold text-slate-900 text-base sm:text-lg group-hover:text-teal-700 transition-colors mb-2 leading-snug line-clamp-2">
                          {tour.title}
                        </h3>

                        {/* Quick Spec Tags */}
                        <div className={`gap-2 text-xs text-slate-600 mb-3 bg-slate-50 p-2.5 rounded-xl border border-slate-100 ${
                          isMobile ? 'flex flex-col space-y-1' : 'grid grid-cols-1 sm:grid-cols-2'
                        }`}>
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
                            <span className="truncate">{tour.departureCity} (прямой)</span>
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
                          <div className="text-[10px] text-slate-400">Стоимость за тур на 1 чел.:</div>
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

                        <button
                          onClick={() => onNavigate('tour', tour.id)}
                          className="px-5 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs transition-colors shadow-xs"
                        >
                          Подробнее о туре
                        </button>
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
          </div>
        </div>
      </div>
    </div>
  );
};
