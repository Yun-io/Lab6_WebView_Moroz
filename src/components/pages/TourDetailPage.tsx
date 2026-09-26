import React, { useState } from 'react';
import { PageId, DeviceView } from '../../types';
import { FEATURED_TOURS, TRAVEL_MANAGERS } from '../../data/mockData';
import { 
  Star, 
  MapPin, 
  Check, 
  X, 
  Clock, 
  Heart, 
  Plane, 
  ArrowLeft, 
  Sparkles, 
  CheckCircle2, 
  Building2, 
  Utensils, 
  ShieldCheck, 
  PhoneCall, 
  Lock 
} from 'lucide-react';

interface TourDetailPageProps {
  onNavigate: (page: PageId, tourId?: string) => void;
  device: DeviceView;
  tourId?: string;
}

export const TourDetailPage: React.FC<TourDetailPageProps> = ({ onNavigate, device, tourId = 'rixos-belek' }) => {
  const tour = FEATURED_TOURS.find(t => t.id === tourId) || FEATURED_TOURS[0];
  
  const [selectedDate, setSelectedDate] = useState(tour.nextDates[0]);
  const [guestsCount, setGuestsCount] = useState(2);
  const [isBooked, setIsBooked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const isMobile = device === 'mobile';
  const totalPrice = tour.price * guestsCount;

  // Select manager
  const assignedManager = tour.country === 'Турция' 
    ? TRAVEL_MANAGERS[0] 
    : tour.country === 'ОАЭ' || tour.country === 'Мальдивы'
    ? TRAVEL_MANAGERS[1]
    : TRAVEL_MANAGERS[2];

  return (
    <div className="w-full bg-slate-50 text-slate-900 pb-16">
      {/* Breadcrumb Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className={`max-w-7xl mx-auto py-2.5 flex items-center justify-between ${isMobile ? 'px-4' : 'px-6'}`}>
          <div className="flex items-center gap-2 text-xs text-slate-500 truncate">
            <button 
              onClick={() => onNavigate('home')} 
              className="hover:text-teal-700 flex items-center gap-1 font-medium shrink-0"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Главная</span>
            </button>
            <span>/</span>
            <button 
              onClick={() => onNavigate('catalog')} 
              className="hover:text-teal-700 font-medium shrink-0"
            >
              Каталог
            </button>
            <span>/</span>
            <span className="text-slate-900 font-semibold truncate">{tour.country}</span>
          </div>

          <button
            onClick={() => setIsSaved(!isSaved)}
            className={`p-1.5 rounded-lg border text-xs flex items-center gap-1.5 transition-colors shrink-0 ${
              isSaved ? 'bg-rose-50 border-rose-200 text-rose-600 font-semibold' : 'border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-rose-500 text-rose-500' : ''}`} />
            <span className="hidden sm:inline">{isSaved ? 'В избранном' : 'Сохранить'}</span>
          </button>
        </div>
      </div>

      <div className={`max-w-7xl mx-auto ${isMobile ? 'px-4 pt-4' : 'px-6 pt-8'}`}>
        {/* Title & Key Attributes Header */}
        <div className="mb-6 space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-md bg-teal-100 text-teal-800 font-bold text-[11px]">
              {tour.badge || 'Пакетный тур'}
            </span>
            <span className="text-xs text-slate-500">Туроператор: <strong>{tour.tourOperator}</strong></span>
            <span className="text-xs text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Гарантированный вылет
            </span>
          </div>

          <h1 className={`font-extrabold text-slate-900 tracking-tight ${isMobile ? 'text-xl' : 'text-3xl lg:text-4xl'}`}>
            {tour.title}
          </h1>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-slate-600 pt-1">
            <span className="flex items-center gap-1 font-bold text-slate-900">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              {tour.rating}
              <span className="text-slate-400 font-normal">({tour.reviewsCount} отзывов)</span>
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-teal-600" />
              {tour.country}, {tour.city}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-teal-600" />
              {tour.durationDays} дней / {tour.durationNights} ночей
            </span>
            <span className="flex items-center gap-1 font-semibold text-teal-800">
              <Plane className="w-3.5 h-3.5 text-teal-600" />
              Вылет: {tour.departureCity}
            </span>
          </div>
        </div>

        {/* Photo Gallery Grid */}
        <div className={`gap-2 mb-8 ${
          isMobile 
            ? 'block' 
            : 'grid grid-cols-4 grid-rows-2 h-[380px] rounded-2xl overflow-hidden shadow-xs'
        }`}>
          <div className={`overflow-hidden rounded-2xl ${isMobile ? 'w-full aspect-16/10' : 'col-span-2 row-span-2 h-full'}`}>
            <img
              src={tour.gallery[0] || tour.coverImage}
              alt={tour.title}
              className="w-full h-full object-cover"
            />
          </div>
          {!isMobile && (
            <>
              <div className="h-full overflow-hidden">
                <img src={tour.gallery[1] || tour.coverImage} alt="Hotel 1" className="w-full h-full object-cover" />
              </div>
              <div className="h-full overflow-hidden">
                <img src={tour.gallery[2] || tour.coverImage} alt="Hotel 2" className="w-full h-full object-cover" />
              </div>
              <div className="h-full overflow-hidden">
                <img src={tour.gallery[3] || tour.coverImage} alt="Hotel 3" className="w-full h-full object-cover" />
              </div>
              <div className="relative h-full overflow-hidden bg-slate-800">
                <img src={tour.gallery[4] || tour.coverImage} alt="Hotel 4" className="w-full h-full object-cover opacity-70" />
                <div className="absolute inset-0 flex items-center justify-center text-white text-xs font-bold">
                  +16 фото отеля
                </div>
              </div>
            </>
          )}
        </div>

        {/* 4 Pillars Strip (Flight, Hotel, Meals, Insurance) */}
        <div className={`bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 mb-8 grid gap-4 shadow-xs ${
          isMobile ? 'grid-cols-1' : 'grid-cols-2 lg:grid-cols-4'
        }`}>
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[10px] text-slate-400 font-bold uppercase">Отель и номер</div>
              <div className="text-xs font-bold text-slate-900 truncate" title={tour.hotelName}>
                {tour.hotelName}
              </div>
              <div className="text-[10px] text-slate-500 truncate">{tour.roomType || 'Deluxe Room'}</div>
            </div>
          </div>

          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
              <Utensils className="w-5 h-5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[10px] text-slate-400 font-bold uppercase">Тип питания</div>
              <div className="text-xs font-bold text-slate-900 truncate" title={tour.meals}>
                {tour.meals}
              </div>
              <div className="text-[10px] text-emerald-600 font-semibold">Напитки включены</div>
            </div>
          </div>

          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
              <Plane className="w-5 h-5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[10px] text-slate-400 font-bold uppercase">Авиаперелет</div>
              <div className="text-xs font-bold text-slate-900 truncate">
                {tour.flightDetails?.airline || 'Прямой рейс'}
              </div>
              <div className="text-[10px] text-teal-700 font-semibold">Багаж 23 кг + ручная кладь</div>
            </div>
          </div>

          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[10px] text-slate-400 font-bold uppercase">Страхование</div>
              <div className="text-xs font-bold text-emerald-700 truncate">
                Покрытие $40 000
              </div>
              <div className="text-[10px] text-slate-500">САО «ВСК» включено</div>
            </div>
          </div>
        </div>

        {/* Content Layout: Left = Main description; Right = Booking Widget */}
        <div className={`grid gap-8 items-start ${isMobile ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-12'}`}>
          {/* Main Info Column */}
          <div className={`${isMobile ? 'w-full' : 'lg:col-span-8'} space-y-6`}>
            {/* Flight Spec Box */}
            {tour.flightDetails && (
              <div className="bg-white rounded-2xl border border-teal-200 p-5 shadow-xs space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <Plane className="w-4 h-4 text-teal-600" />
                    <span>Параметры авиарейса</span>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                    Прямой беспосадочный рейс
                  </span>
                </div>

                <div className={`grid gap-3 text-xs bg-slate-50 p-3.5 rounded-xl border border-slate-100 ${
                  isMobile ? 'grid-cols-1' : 'grid-cols-3'
                }`}>
                  <div>
                    <div className="text-[10px] text-slate-400">Авиакомпания:</div>
                    <div className="font-bold text-slate-800">{tour.flightDetails.airline}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400">Маршрут:</div>
                    <div className="font-bold text-slate-800">{tour.flightDetails.flightNumber}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400">Норма багажа:</div>
                    <div className="font-bold text-teal-800">{tour.flightDetails.baggage}</div>
                  </div>
                </div>
              </div>
            )}

            {/* Overview & Highlights */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
              <h2 className="text-lg font-bold text-slate-900">Описание отеля и курорта</h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {tour.description}
              </p>

              <div className="pt-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Преимущества данного тура:
                </h3>
                <div className={`grid gap-2.5 ${isMobile ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
                  {tour.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-800">
                      <Sparkles className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Included / Not Included Comparison */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
              <h3 className="text-base font-bold text-slate-900">Что входит в стоимость тура</h3>
              
              <div className={`grid gap-6 ${isMobile ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
                {/* Included */}
                <div className="space-y-2.5">
                  <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-600" />
                    Включено в пакет:
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {tour.included.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Not Included */}
                <div className="space-y-2.5">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                    <X className="w-4 h-4 text-slate-400" />
                    Оплачивается отдельно:
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-600">
                    {tour.notIncluded.map((notInc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <X className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                        <span>{notInc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Assigned Travel Manager Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 flex flex-col sm:flex-row items-center gap-4 shadow-xs">
              <img
                src={assignedManager.photo}
                alt={assignedManager.name}
                className="w-14 h-14 rounded-2xl object-cover ring-2 ring-teal-500/30 shrink-0"
              />
              <div className="space-y-1 text-center sm:text-left flex-1 min-w-0">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <h4 className="text-sm font-bold text-slate-900">{assignedManager.name}</h4>
                  <span className="text-[10px] bg-teal-100 text-teal-800 font-bold px-2 py-0.5 rounded-full">
                    {assignedManager.role}
                  </span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {assignedManager.experience}. Лично проверила отель {tour.hotelName}.
                </p>
                <div className="text-[11px] text-teal-700 font-semibold">
                  Прямой контакт: {assignedManager.phone}
                </div>
              </div>
              <button 
                onClick={() => onNavigate('about')}
                className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 whitespace-nowrap flex items-center gap-1.5 shrink-0"
              >
                <PhoneCall className="w-3.5 h-3.5 text-teal-600" />
                <span>Консультация</span>
              </button>
            </div>
          </div>

          {/* Booking Column (Non-sticky, clean layout) */}
          <div className={`${isMobile ? 'w-full' : 'lg:col-span-4'} space-y-4`}>
            <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-md space-y-5">
              {/* Price Tag */}
              <div className="pb-4 border-b border-slate-100">
                <div className="text-[11px] text-slate-400 font-medium">Стоимость тура на 1 человека:</div>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-2xl sm:text-3xl font-extrabold text-teal-900">
                    {tour.price.toLocaleString('ru-RU')} ₽
                  </span>
                  {tour.oldPrice && (
                    <span className="text-xs text-slate-400 line-through">
                      {tour.oldPrice.toLocaleString('ru-RU')} ₽
                    </span>
                  )}
                </div>
                <div className="text-[11px] text-emerald-700 font-semibold mt-1">
                  Прямой рейс + трансфер + страховка включены
                </div>
              </div>

              {/* Date Selection */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Дата вылета из Москвы:</label>
                <select
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-hidden focus:border-teal-500 cursor-pointer"
                >
                  {tour.nextDates.map((date, idx) => (
                    <option key={idx} value={date}>
                      {date} (Осталось 4 места)
                    </option>
                  ))}
                </select>
              </div>

              {/* Number of Travelers */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-700">Количество туристов:</label>
                  <span className="text-xs font-bold text-slate-900">{guestsCount} чел.</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((num) => (
                    <button
                      key={num}
                      onClick={() => setGuestsCount(num)}
                      className={`py-2 rounded-xl text-xs font-bold border transition-colors ${
                        guestsCount === num
                          ? 'bg-teal-600 text-white border-teal-600'
                          : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {num} {num === 1 ? 'взрослый' : 'взрослых'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Calculation Summary */}
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-500">
                  <span>{tour.price.toLocaleString('ru-RU')} ₽ × {guestsCount} чел.:</span>
                  <span className="font-semibold text-slate-800">{totalPrice.toLocaleString('ru-RU')} ₽</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Топливный сбор:</span>
                  <span className="text-emerald-700 font-semibold">Включен</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Медицинская страховка:</span>
                  <span className="text-emerald-700 font-semibold">Включена</span>
                </div>
                <div className="pt-2 border-t border-slate-200 flex justify-between font-extrabold text-sm text-slate-900">
                  <span>Итого к оплате:</span>
                  <span className="text-teal-800">{totalPrice.toLocaleString('ru-RU')} ₽</span>
                </div>
              </div>

              {/* Booking CTA Button */}
              {!isBooked ? (
                <button
                  onClick={() => setIsBooked(true)}
                  className="w-full py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-xs uppercase tracking-wider transition-colors shadow-md shadow-teal-600/30 flex items-center justify-center gap-2"
                >
                  <Lock className="w-4 h-4" />
                  <span>Забронировать тур</span>
                </button>
              ) : (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs text-center space-y-1">
                  <div className="font-bold flex items-center justify-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Заявка №TW-8492 принята!</span>
                  </div>
                  <p className="text-[11px] text-slate-600">
                    Менеджер {assignedManager.name} свяжется с вами в течение 10 минут для подтверждения бронирования.
                  </p>
                </div>
              )}

              <div className="text-[11px] text-slate-400 text-center space-y-0.5">
                <div>Предоплата 20%, остаток за 14 дней до вылета</div>
                <div>Договор турагентства и фингарантии ВСК</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
