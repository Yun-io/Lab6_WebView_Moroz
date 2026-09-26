import React, { useState } from 'react';
import { PageId } from '../../types';
import { 
  AGENCY_INFO, 
  TRAVEL_OFFICES, 
  TRAVEL_MANAGERS
} from '../../data/mockData';
import { 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Clock, 
  Send, 
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  FileText,
  CreditCard,
  Plane
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenBooking }) => {
  const [selectedOffice, setSelectedOffice] = useState(TRAVEL_OFFICES[0].id);
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formDestination, setFormDestination] = useState('Турция');
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const activeOffice = TRAVEL_OFFICES.find(o => o.id === selectedOffice) || TRAVEL_OFFICES[0];

  const faqs = [
    {
      q: 'Как происходит бронирование и оплата тура?',
      a: 'Вы можете забронировать тур онлайн на сайте или в любом из наших офисов в Москве и Санкт-Петербурге. Для фиксации цены и бронирования рейса вносится предоплата от 20% (картой МИР, через СБП или по счету). Оставшаяся сумма оплачивается за 14 дней до вылета.'
    },
    {
      q: 'Какие гарантии предоставляет ваше турагентство?',
      a: 'TrawelWay официально зарегистрировано в Едином реестре турагентов РФ (номер РТА0019482). Наша профессиональная ответственность застрахована в САО «ВСК» с финансовым обеспечением на 50 000 000 рублей. Все договоры заключаются строго в соответствии с законодательством РФ.'
    },
    {
      q: 'Что входит в стоимость пакетного тура?',
      a: 'В стандартный пакет включены: прямой регулярный или чартерный перелет в обе стороны с багажом, групповой или индивидуальный трансфер аэропорт-отель-аэропорт, проживание в выбранном отеле с указанным типом питания, а также расширенная медицинская страховка на весь срок поездки.'
    },
    {
      q: 'Когда и как я получу документы на поездку?',
      a: 'Полный пакет документов (авиабилеты, ваучер на проживание и трансфер, медицинский полис и памятка туриста) высылается на вашу электронную почту за 2-4 дня до вылета после выписки чартерного или регулярного рейса авиакомпанией, либо выдается в офисе.'
    },
    {
      q: 'Помогаете ли вы с оформлением виз и загранпаспортов?',
      a: 'Да, наш визовый отдел сопровождает оформление виз (включая шенгенские, азиатские и арабские направления), подготавливает анкеты, брони отелей и авиабилетов, а также консультирует по срокам действия загранпаспортов.'
    }
  ];

  return (
    <div className="w-full bg-slate-50 text-slate-900 pb-16">
      {/* Hero Header */}
      <div className="bg-slate-900 text-white py-10 px-4 sm:px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-xs text-teal-400 font-semibold">
            <button onClick={() => onNavigate('home')} className="hover:underline">Главная</button>
            <span>/</span>
            <span className="text-white">О компании и офисы продаж</span>
          </div>

          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              <span>Официальное турагентство с 2012 года</span>
            </div>
            <h1 className="font-black tracking-tight text-white text-2xl sm:text-3xl lg:text-4xl leading-tight">
              Турагентство TrawelWay: надежный отдых с финансовой гарантией
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              14 лет организуем комфортный отдых. Более 185 000 туристов доверили нам свой отпуск. Входим в Единый реестр турагентов РФ и работаем со всеми туроператорами.
            </p>
          </div>

          {/* 4 Trust Stats Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-4">
            <div className="bg-slate-800 p-3.5 rounded-xl border border-slate-700">
              <div className="text-teal-400 font-black text-lg sm:text-xl">14 лет</div>
              <div className="text-[11px] text-slate-300">работы на рынке туризма</div>
            </div>
            <div className="bg-slate-800 p-3.5 rounded-xl border border-slate-700">
              <div className="text-teal-400 font-black text-lg sm:text-xl">№{AGENCY_INFO.registryNumber}</div>
              <div className="text-[11px] text-slate-300 truncate">в Реестре турагентов РФ</div>
            </div>
            <div className="bg-slate-800 p-3.5 rounded-xl border border-slate-700">
              <div className="text-teal-400 font-black text-lg sm:text-xl">50 млн ₽</div>
              <div className="text-[11px] text-slate-300">фингарантии САО «ВСК»</div>
            </div>
            <div className="bg-slate-800 p-3.5 rounded-xl border border-slate-700">
              <div className="text-teal-400 font-black text-lg sm:text-xl">185 000+</div>
              <div className="text-[11px] text-slate-300">довольных клиентов</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 space-y-14">
        {/* SECTION: Physical Offices */}
        <section className="space-y-6">
          <div>
            <div className="text-xs font-bold text-teal-700 uppercase tracking-wider mb-1">
              Офисы продаж
            </div>
            <h2 className="font-black text-slate-900 tracking-tight text-xl sm:text-3xl">
              Наши адреса и контакты
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Приходите на чашку кофе в любой из 4 офисов TrawelWay или бронируйте тур онлайн.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Offices Selector List */}
            <div className="lg:col-span-5 space-y-3">
              {TRAVEL_OFFICES.map(office => {
                const isSelected = office.id === selectedOffice;
                return (
                  <div
                    key={office.id}
                    onClick={() => setSelectedOffice(office.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-white border-teal-500 shadow-md ring-2 ring-teal-500/20'
                        : 'bg-white border-slate-200 hover:border-teal-300'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="font-extrabold text-slate-900 text-sm">{office.city}</span>
                        {office.isHeadquarters && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-teal-100 text-teal-800">
                            Флагманский офис
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-teal-600 font-semibold">
                        {isSelected ? '● Выбран' : 'Выбрать'}
                      </span>
                    </div>

                    <div className="text-xs font-bold text-teal-800 mb-1">{office.name}</div>
                    <div className="text-xs text-slate-600 space-y-1">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span className="truncate">{office.metro}</span>
                      </div>
                      <div className="text-[11px] text-slate-500 pl-5">
                        {office.address}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Active Office Detail Card */}
            <div className="lg:col-span-7 bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
                <div>
                  <span className="text-xs font-bold text-teal-700">{activeOffice.city}</span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">{activeOffice.name}</h3>
                </div>
                <a
                  href={`tel:${activeOffice.phone.replace(/[^0-9+]/g, '')}`}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-teal-50 text-teal-800 hover:bg-teal-100 font-bold text-xs transition-colors border border-teal-200 self-start sm:self-auto"
                >
                  <Phone className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>{activeOffice.phone}</span>
                </a>
              </div>

              {/* Office Specs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="space-y-1 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="font-bold text-slate-700 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Адрес:</span>
                  </div>
                  <p className="text-slate-600">{activeOffice.address}</p>
                  <p className="text-[11px] text-teal-700 font-medium">{activeOffice.metro}</p>
                </div>

                <div className="space-y-1 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="font-bold text-slate-700 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Часы работы:</span>
                  </div>
                  <p className="text-slate-600">{activeOffice.hours}</p>
                  <p className="text-[11px] text-emerald-600 font-medium">Без выходных и перерывов</p>
                </div>
              </div>

              {/* Office Map Mock */}
              <div className="relative h-44 rounded-xl overflow-hidden border border-slate-200 bg-gradient-to-br from-slate-100 to-teal-50/50 flex items-center justify-center p-4 text-center">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center mx-auto shadow-md">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="font-bold text-xs sm:text-sm text-slate-800">
                    {activeOffice.city}, {activeOffice.metro}
                  </div>
                  <div className="text-[11px] text-slate-500 max-w-sm">
                    {activeOffice.address} • Удобная бесплатная парковка для клиентов агентства
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: Travel Managers */}
        <section className="space-y-6">
          <div>
            <div className="text-xs font-bold text-teal-700 uppercase tracking-wider mb-1">
              Эксперты турагентства
            </div>
            <h2 className="font-black text-slate-900 tracking-tight text-xl sm:text-3xl">
              Команда ведущих тревел-менеджеров
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Персональные кураторы с опытом от 8 лет, которые лично проверяют курорты, пляжи и отели.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TRAVEL_MANAGERS.map(mgr => (
              <div key={mgr.id} className="bg-white rounded-2xl border border-slate-200 p-5 flex flex-col justify-between shadow-xs">
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <img
                      src={mgr.photo}
                      alt={mgr.name}
                      className="w-14 h-14 rounded-2xl object-cover border-2 border-teal-500 shrink-0"
                    />
                    <div className="min-w-0">
                      <h4 className="font-extrabold text-slate-900 text-sm truncate">{mgr.name}</h4>
                      <p className="text-xs text-teal-700 font-semibold truncate">{mgr.role}</p>
                      <span className="text-[10px] text-slate-500">{mgr.experience}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {mgr.specialization}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 text-[11px]">Телефон:</span>
                  <a href={`tel:${mgr.phone.replace(/[^0-9+]/g, '')}`} className="font-bold text-teal-800 hover:underline">
                    {mgr.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: FAQ Accordion */}
        <section className="space-y-6">
          <div>
            <div className="text-xs font-bold text-teal-700 uppercase tracking-wider mb-1">
              Вопросы и ответы
            </div>
            <h2 className="font-black text-slate-900 tracking-tight text-xl sm:text-3xl">
              Часто задаваемые вопросы
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Ответы на популярные вопросы о бронировании, оплате и страховке.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 divide-y divide-slate-100 overflow-hidden shadow-xs">
            {faqs.map((faq, idx) => (
              <div key={idx} className="transition-colors">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full py-4 px-5 sm:px-6 flex items-center justify-between text-left gap-4 hover:bg-slate-50"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-teal-600 shrink-0" />
                    <span className="font-extrabold text-xs sm:text-sm text-slate-800">{faq.q}</span>
                  </div>
                  {openFaq === idx ? (
                    <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-5 sm:px-6 pb-4 pt-1 text-xs text-slate-600 leading-relaxed pl-12 bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: Tour Request Form */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="max-w-2xl mx-auto text-center space-y-2 mb-6">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Заявка на индивидуальный подбор тура
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Укажите желаемое направление и контакты — менеджер TrawelWay свяжется с вами и пришлет подборку из 3 лучших вариантов с расчетом.
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Ваше имя</label>
                  <input
                    type="text"
                    required
                    placeholder="Алексей"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-200 text-xs focus:outline-hidden focus:border-teal-500 bg-slate-50"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Номер телефона</label>
                  <input
                    type="tel"
                    required
                    placeholder="+7 (999) 000-00-00"
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-200 text-xs focus:outline-hidden focus:border-teal-500 bg-slate-50"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Желаемое направление отдыха</label>
                <select
                  value={formDestination}
                  onChange={(e) => setFormDestination(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-xs focus:outline-hidden focus:border-teal-500 bg-slate-50 cursor-pointer"
                >
                  <option value="Турция">Турция 5★ All Inclusive (Анталья, Белек, Кемер)</option>
                  <option value="ОАЭ">ОАЭ и Дубай (Джумейра, Марина)</option>
                  <option value="Египет">Египет (Шарм-эль-Шейх, Хургада)</option>
                  <option value="Мальдивы">Мальдивы (Виллы над водой)</option>
                  <option value="Таиланд">Таиланд (Пхукет, Самуи)</option>
                  <option value="Россия">Сочи и Красная Поляна</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Получить расчет и подборку туров</span>
              </button>

              <div className="text-[10px] text-slate-400 text-center">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных в соответствии с ФЗ-152.
              </div>
            </form>
          ) : (
            <div className="max-w-md mx-auto p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
              <h4 className="font-extrabold text-sm text-emerald-900">Заявка успешно отправлена!</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Спасибо, {formName}! Тревел-менеджер TrawelWay свяжется с вами по номеру {formPhone} в течение 15 минут.
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};
