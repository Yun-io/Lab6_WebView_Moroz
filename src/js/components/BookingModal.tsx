import React, { useState } from 'react';
import { Tour } from '../types';
import { FEATURED_TOURS, AGENCY_INFO } from '../data/mockData';
import { 
  X, 
  Calendar, 
  Users, 
  Phone, 
  User, 
  Plane, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  MapPin,
  Clock
} from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTour?: Tour | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialTour = null,
}) => {
  const [selectedTourId, setSelectedTourId] = useState<string>(
    initialTour?.id || FEATURED_TOURS[0].id
  );
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [departureCity, setDepartureCity] = useState('Москва');
  const [departureDate, setDepartureDate] = useState('2026-10-15');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingCode, setBookingCode] = useState('');

  if (!isOpen) return null;

  const currentTour = FEATURED_TOURS.find((t) => t.id === selectedTourId) || initialTour || FEATURED_TOURS[0];
  const totalPrice = currentTour.price * adults + Math.round(currentTour.price * 0.6) * children;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const randomCode = 'TW-' + Math.floor(100000 + Math.random() * 900000);
      setBookingCode(randomCode);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setFullName('');
    setPhone('');
    setComment('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-3xl shadow-2xl max-w-xl w-full border border-slate-100 overflow-hidden text-slate-900 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 to-teal-950 text-white p-5 sm:p-6 relative">
          <button
            onClick={handleResetAndClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Закрыть"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Официальное бронирование туроператора</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
            {isSuccess ? 'Заявка успешно принята!' : 'Бронирование и подбор тура'}
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            {isSuccess 
              ? 'Ваш персональный тревел-менеджер свяжется с вами в течение 10 минут' 
              : 'Фиксация спеццены без предоплаты. Бесплатная консультация эксперта'}
          </p>
        </div>

        {/* Content */}
        {isSuccess ? (
          <div className="p-6 sm:p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase font-extrabold tracking-wider text-slate-400">
                Номер бронирования
              </span>
              <div className="text-2xl sm:text-3xl font-mono font-black text-slate-900 tracking-wider">
                {bookingCode}
              </div>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Спасибо, <span className="font-bold text-slate-900">{fullName || 'Уважаемый клиент'}</span>! Информация по туру 
                <span className="font-semibold text-teal-700"> «{currentTour.title}»</span> отправлена вашему менеджеру.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left space-y-2 text-xs text-slate-600">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Направление:</span>
                <span className="font-bold text-slate-800">{currentTour.country}, {currentTour.city}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Отель:</span>
                <span className="font-bold text-slate-800">{currentTour.hotelName} {currentTour.hotelStars}★</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Туристы:</span>
                <span className="font-bold text-slate-800">{adults} взр.{children > 0 ? `, ${children} реб.` : ''}</span>
              </div>
              <div className="flex justify-between items-center border-t border-slate-200 pt-2">
                <span className="font-semibold text-slate-700">Ориентировочная сумма:</span>
                <span className="font-extrabold text-teal-700 text-sm">{totalPrice.toLocaleString('ru-RU')} ₽</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={handleResetAndClose}
                className="flex-1 py-3 px-6 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm shadow-md transition-colors"
              >
                Вернуться на сайт
              </button>
              <a
                href={`tel:${AGENCY_INFO.phoneMoscow.replace(/[^\d+]/g, '')}`}
                className="py-3 px-6 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition-colors text-center"
              >
                Позвонить менеджеру
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
            {/* Tour selector banner */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <img
                  src={currentTour.coverImage}
                  alt={currentTour.hotelName}
                  className="w-12 h-12 rounded-xl object-cover shrink-0"
                />
                <div className="min-w-0">
                  <div className="text-[11px] text-teal-700 font-bold flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>{currentTour.country} • {currentTour.durationNights} ночей</span>
                  </div>
                  <div className="font-bold text-xs text-slate-900 truncate">
                    {currentTour.hotelName} {currentTour.hotelStars}★
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    {currentTour.meals} • Перелет включен
                  </div>
                </div>
              </div>
              <div className="text-right shrink-0">
                <div className="text-[10px] text-slate-400">за тур от</div>
                <div className="font-black text-sm text-teal-700">
                  {totalPrice.toLocaleString('ru-RU')} ₽
                </div>
              </div>
            </div>

            {/* If opening modal generally, allow changing tour */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Выберите направление или отель
              </label>
              <select
                value={selectedTourId}
                onChange={(e) => setSelectedTourId(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 bg-white focus:outline-hidden focus:ring-2 focus:ring-teal-500"
              >
                {FEATURED_TOURS.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.country}: {t.hotelName} {t.hotelStars}★ ({t.durationNights} ночей, {t.price.toLocaleString('ru-RU')} ₽/чел)
                  </option>
                ))}
              </select>
            </div>

            {/* Departure details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Город вылета
                </label>
                <div className="relative">
                  <Plane className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <select
                    value={departureCity}
                    onChange={(e) => setDepartureCity(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 bg-white focus:outline-hidden focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="Москва">Москва (SVO/DME/VKO)</option>
                    <option value="Санкт-Петербург">Санкт-Петербург (LED)</option>
                    <option value="Казань">Казань (KZN)</option>
                    <option value="Екатеринбург">Екатеринбург (SVX)</option>
                    <option value="Сочи">Сочи (AER)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Желаемая дата вылета
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="date"
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 bg-white focus:outline-hidden focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>
            </div>

            {/* Guests count */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Взрослые (12+)
                </label>
                <div className="flex items-center border border-slate-200 rounded-xl bg-white px-2 py-1">
                  <button
                    type="button"
                    onClick={() => setAdults(Math.max(1, adults - 1))}
                    className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold flex items-center justify-center text-sm"
                  >
                    -
                  </button>
                  <span className="flex-1 text-center text-xs font-bold">{adults}</span>
                  <button
                    type="button"
                    onClick={() => setAdults(Math.min(6, adults + 1))}
                    className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold flex items-center justify-center text-sm"
                  >
                    +
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Дети (до 11 лет)
                </label>
                <div className="flex items-center border border-slate-200 rounded-xl bg-white px-2 py-1">
                  <button
                    type="button"
                    onClick={() => setChildren(Math.max(0, children - 1))}
                    className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold flex items-center justify-center text-sm"
                  >
                    -
                  </button>
                  <span className="flex-1 text-center text-xs font-bold">{children}</span>
                  <button
                    type="button"
                    onClick={() => setChildren(Math.min(4, children + 1))}
                    className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold flex items-center justify-center text-sm"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-3 pt-1 border-t border-slate-100">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Ваше имя <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="Например, Александр Иванов"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 bg-white focus:outline-hidden focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Номер телефона (WhatsApp / звонок) <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    placeholder="+7 (999) 000-00-00"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 bg-white focus:outline-hidden focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Пожелания к поездке (необязательно)
                </label>
                <textarea
                  rows={2}
                  placeholder="Первая линия, тихий номер, детская кроватка или конкретный отель..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 bg-white focus:outline-hidden focus:ring-2 focus:ring-teal-500 resize-none"
                />
              </div>
            </div>

            {/* Agreement note */}
            <div className="text-[11px] text-slate-500 leading-tight">
              Нажимая кнопку, вы соглашаетесь на обработку персональных данных согласно №152-ФЗ.
            </div>

            {/* Actions */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-2xl bg-teal-600 hover:bg-teal-700 active:scale-[0.99] text-white font-extrabold text-sm shadow-lg shadow-teal-600/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Отправка заявки...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Забронировать тур за {totalPrice.toLocaleString('ru-RU')} ₽</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
