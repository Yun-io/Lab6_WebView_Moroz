import React, { useState } from 'react';
import { PageId, DeviceView } from '../../types';
import { 
  CURRENT_USER, 
  USER_ACTIVE_BOOKING, 
  FEATURED_TOURS 
} from '../../data/mockData';
import { 
  User, 
  MapPin, 
  Calendar, 
  Plane, 
  Hotel, 
  QrCode, 
  Download, 
  Phone, 
  Heart, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  ShieldCheck, 
  CreditCard,
  FileText,
  Settings,
  LogOut,
  ChevronRight,
  Star
} from 'lucide-react';

interface AccountPageProps {
  onNavigate: (page: PageId) => void;
  device: DeviceView;
}

export const AccountPage: React.FC<AccountPageProps> = ({ onNavigate, device }) => {
  const [activeTab, setActiveTab] = useState<'trips' | 'favorites' | 'bonuses' | 'profile'>('trips');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const isMobile = device === 'mobile';
  const booking = USER_ACTIVE_BOOKING;

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 2500);
  };

  return (
    <div className="w-full bg-slate-50 text-slate-900 pb-12">
      {/* Profile Header Card */}
      <div className="bg-white border-b border-slate-200">
        <div className={`max-w-7xl mx-auto ${isMobile ? 'px-4 py-6' : 'px-6 py-8'}`}>
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4">
            {/* User Details */}
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <div className="relative">
                <img
                  src={CURRENT_USER.avatar}
                  alt={CURRENT_USER.firstName}
                  className="w-20 h-20 rounded-2xl object-cover ring-4 ring-teal-500/20 shadow-md"
                />
                <span className="absolute -bottom-1 -right-1 px-2 py-0.5 rounded-md bg-amber-500 text-slate-950 text-[10px] font-extrabold uppercase shadow-xs">
                  {CURRENT_USER.tier}
                </span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    {CURRENT_USER.firstName} {CURRENT_USER.lastName}
                  </h1>
                </div>
                <div className="text-xs text-slate-500 flex flex-wrap items-center justify-center sm:justify-start gap-x-2 gap-y-0.5">
                  <span className="truncate max-w-[200px]">{CURRENT_USER.email}</span>
                  <span className="text-slate-300">•</span>
                  <span>{CURRENT_USER.phone}</span>
                </div>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1 text-xs">
                  <span className="text-teal-700 font-bold bg-teal-50 px-2 py-0.5 rounded-md text-[11px]">
                    Загранпаспорт: {CURRENT_USER.passportNumber}
                  </span>
                  <span className="text-slate-400 text-[11px]">до {CURRENT_USER.passportExpiry}</span>
                </div>
              </div>
            </div>

            {/* Loyalty Miles Card */}
            <div className="bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white p-4 rounded-2xl shadow-lg sm:w-72 w-full space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-teal-300 font-medium">TrawelWay Club</span>
                <span className="px-1.5 py-0.5 rounded-sm bg-amber-400/20 text-amber-300 text-[10px] font-bold">
                  Кэшбэк 7%
                </span>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-white tracking-tight">
                  {CURRENT_USER.bonusMiles.toLocaleString('ru-RU')} <span className="text-sm font-normal text-teal-300">миль</span>
                </div>
                <div className="text-[11px] text-slate-400">До статуса Platinum: еще 5 500 миль</div>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                <div 
                  className="bg-teal-400 h-full rounded-full" 
                  style={{ width: `${CURRENT_USER.tierProgress}%` }}
                />
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 mt-6 overflow-x-auto no-scrollbar border-t border-slate-100 pt-3">
            <button
              onClick={() => setActiveTab('trips')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 ${
                activeTab === 'trips'
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Мои поездки ({CURRENT_USER.activeBookingsCount})</span>
            </button>

            <button
              onClick={() => setActiveTab('favorites')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 ${
                activeTab === 'favorites'
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Heart className="w-3.5 h-3.5" />
              <span>Избранное ({CURRENT_USER.favoriteToursCount})</span>
            </button>

            <button
              onClick={() => setActiveTab('bonuses')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 ${
                activeTab === 'bonuses'
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Бонусы и привилегии</span>
            </button>

            <button
              onClick={() => setActiveTab('profile')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 ${
                activeTab === 'profile'
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Settings className="w-3.5 h-3.5" />
              <span>Документы и профиль</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Tab Content */}
      <div className={`max-w-7xl mx-auto ${isMobile ? 'px-4 pt-6' : 'px-6 pt-8'}`}>
        {/* TAB 1: TRIPS */}
        {activeTab === 'trips' && (
          <div className="space-y-6">
            {/* Active Tour Highlight */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Предстоящее путешествие</span>
                </h3>
                <span className="text-xs text-slate-500 font-medium">Вылет через 42 дня</span>
              </div>

              {/* Booking Ticket Card */}
              <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-md">
                <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-12'}`}>
                  {/* Image & Location Badge */}
                  <div className={`${isMobile ? 'h-48' : 'col-span-4'} relative bg-slate-900`}>
                    <img
                      src={booking.coverImage}
                      alt={booking.tourTitle}
                      className="w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-emerald-500 text-slate-950 text-[11px] font-bold">
                      {booking.statusLabel}
                    </div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <div className="text-xs text-teal-300 font-semibold">{booking.destination}</div>
                      <div className="text-sm font-bold">{booking.dates}</div>
                    </div>
                  </div>

                  {/* Booking Details */}
                  <div className={`${isMobile ? 'p-4 sm:p-5' : 'col-span-8 p-6'} flex flex-col justify-between space-y-4`}>
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                        <div className="min-w-0">
                          <span className="text-[11px] text-slate-400 font-mono block">Ваучер: {booking.voucherCode}</span>
                          <h4 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5 leading-snug">{booking.tourTitle}</h4>
                        </div>
                        <div className="sm:text-right shrink-0">
                          <span className="text-[10px] text-slate-400 block sm:inline mr-1">Оплачено:</span>
                          <span className="text-base font-extrabold text-teal-700">
                            {booking.totalPrice.toLocaleString('ru-RU')} {booking.currency}
                          </span>
                        </div>
                      </div>

                      {/* Travel Details Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3.5 text-xs">
                        <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 min-w-0">
                          <Plane className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                          <div className="min-w-0">
                            <div className="font-bold text-slate-900 truncate">Авиарейс: {booking.flightNumber}</div>
                            <div className="text-[11px] text-slate-500">Вылет: {booking.departureTime}</div>
                            <div className="text-[11px] text-slate-500">Прилет: {booking.arrivalTime}</div>
                          </div>
                        </div>

                        <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 min-w-0">
                          <Hotel className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                          <div className="min-w-0">
                            <div className="font-bold text-slate-900 truncate">{booking.hotel}</div>
                            <div className="text-[11px] text-slate-500">Номер Deluxe Suite</div>
                            <div className="text-[11px] text-emerald-600 font-medium">Завтраки включены</div>
                          </div>
                        </div>
                      </div>

                      <div className="text-xs text-slate-500">
                        <span className="font-semibold text-slate-700">Туристы:</span> {booking.guestsText}
                      </div>
                    </div>

                    {/* Actions & QR Code */}
                    <div className="pt-3.5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                      {/* Simulated QR Voucher */}
                      <div className="flex items-center gap-2.5 w-full sm:w-auto">
                        <div className="w-11 h-11 bg-slate-900 text-white rounded-xl p-1.5 flex items-center justify-center shrink-0 shadow-xs">
                          <QrCode className="w-full h-full" />
                        </div>
                        <div className="text-[11px] min-w-0">
                          <div className="font-bold text-slate-900">QR-код регистрации</div>
                          <div className="text-slate-400 truncate">Покажите в аэропорту и в отеле</div>
                        </div>
                      </div>

                      {/* Download Button */}
                      <div className="flex items-center gap-2 w-full sm:w-auto">
                        <button
                          onClick={handleDownload}
                          className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-colors"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>{downloadSuccess ? 'Загружено!' : 'Скачать PDF'}</span>
                        </button>
                        <a
                          href={`tel:${booking.managerPhone}`}
                          className="px-3 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-xs font-semibold text-slate-700 flex items-center gap-1.5 shrink-0"
                          title="Консьерж"
                        >
                          <Phone className="w-3.5 h-3.5 text-teal-600" />
                          <span>Менеджер</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Past Completed Trips */}
            <div className="pt-4">
              <h3 className="text-base font-bold text-slate-900 mb-3">
                История путешествий (завершено 4 тура)
              </h3>
              <div className="space-y-3">
                {[
                  { title: 'Мальдивы: Виллы на воде и рифы', date: 'Май 2026', price: '219 000 ₽', rating: 5 },
                  { title: 'Рим и Тоскана: Винные холмы', date: 'Сентябрь 2025', price: '145 000 ₽', rating: 5 },
                  { title: 'Париж и замки Луары', date: 'Май 2025', price: '128 000 ₽', rating: 5 }
                ].map((past, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-500 flex items-center justify-center font-bold text-xs">
                        ✓
                      </div>
                      <div>
                        <h5 className="text-xs font-bold text-slate-900">{past.title}</h5>
                        <div className="text-[11px] text-slate-400">{past.date} • {past.price}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-0.5 text-amber-500 hidden sm:flex">
                        {[...Array(past.rating)].map((_, idx) => (
                          <Star key={idx} className="w-3 h-3 fill-amber-500" />
                        ))}
                      </div>
                      <button 
                        onClick={() => onNavigate('tour')}
                        className="text-xs font-semibold text-teal-700 hover:underline flex items-center gap-1"
                      >
                        <span>Повторить</span>
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: FAVORITES */}
        {activeTab === 'favorites' && (
          <div className="space-y-4">
            <h3 className="text-base font-bold text-slate-900">
              Сохраненные маршруты ({FEATURED_TOURS.length})
            </h3>
            <div className={`grid ${isMobile ? 'grid-cols-1 gap-4' : 'grid-cols-1 md:grid-cols-3 gap-6'}`}>
              {FEATURED_TOURS.slice(0, 3).map((t) => (
                <div key={t.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                  <img src={t.coverImage} alt={t.title} className="w-full h-36 object-cover" />
                  <div className="p-4 space-y-2">
                    <div className="text-[11px] font-bold text-teal-700 uppercase">{t.country}</div>
                    <h4 className="text-xs font-bold text-slate-900 line-clamp-1">{t.title}</h4>
                    <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                      <span className="text-sm font-extrabold text-slate-900">{t.price.toLocaleString('ru-RU')} ₽</span>
                      <button
                        onClick={() => onNavigate('tour')}
                        className="px-3 py-1.5 rounded-lg bg-teal-600 text-white text-xs font-bold"
                      >
                        Смотреть
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: BONUSES */}
        {activeTab === 'bonuses' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-6">
            <div>
              <h3 className="text-base font-bold text-slate-900">Бонусная программа TrawelWay Club</h3>
              <p className="text-xs text-slate-500 mt-1">
                Копите мили за каждый завершенный тур и оплачивайте ими до 30% стоимости новых путешествий.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="text-[11px] text-slate-400">Доступно к списанию</div>
                <div className="text-2xl font-extrabold text-teal-700 mt-1">14 500 ₽</div>
                <div className="text-[10px] text-slate-500 mt-0.5">1 миля = 1 рубль</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="text-[11px] text-slate-400">Текущий кэшбэк</div>
                <div className="text-2xl font-extrabold text-amber-600 mt-1">7%</div>
                <div className="text-[10px] text-slate-500 mt-0.5">Статус Gold Traveller</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="text-[11px] text-slate-400">Всего накоплено за 2026</div>
                <div className="text-2xl font-extrabold text-slate-900 mt-1">42 800</div>
                <div className="text-[10px] text-slate-500 mt-0.5">миль по программе лояльности</div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: PROFILE SETTINGS */}
        {activeTab === 'profile' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-5 max-w-2xl">
            <h3 className="text-base font-bold text-slate-900">Данные туриста для быстрого оформления</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Имя (латиницей)</label>
                <input
                  type="text"
                  defaultValue="ARTYOM"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 font-mono text-slate-900"
                />
              </div>
              <div>
                <label className="font-bold text-slate-700 block mb-1">Фамилия (латиницей)</label>
                <input
                  type="text"
                  defaultValue="MOROZOV"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 font-mono text-slate-900"
                />
              </div>
              <div>
                <label className="font-bold text-slate-700 block mb-1">Серия и номер загранпаспорта</label>
                <input
                  type="text"
                  defaultValue="75 18 903421"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 font-mono text-slate-900"
                />
              </div>
              <div>
                <label className="font-bold text-slate-700 block mb-1">Срок действия</label>
                <input
                  type="text"
                  defaultValue="14.08.2031"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-900"
                />
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button className="px-4 py-2 rounded-xl bg-teal-600 text-white text-xs font-bold">
                Сохранить изменения
              </button>
              <button 
                onClick={() => onNavigate('auth')}
                className="text-xs font-semibold text-rose-600 hover:underline flex items-center gap-1"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Выйти из аккаунта</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
