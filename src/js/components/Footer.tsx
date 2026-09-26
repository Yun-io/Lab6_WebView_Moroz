import React from 'react';
import { PageId } from '../types';
import { Compass, Phone, Mail, MapPin, ShieldCheck, Heart } from 'lucide-react';
import { AGENCY_INFO } from '../data/mockData';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Trust */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-teal-500 flex items-center justify-center text-slate-950 font-bold shrink-0">
                <Compass className="w-5 h-5 text-slate-950" />
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                Trawel<span className="text-teal-400">Way</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Официальное туристическое агентство ведущих туроператоров РФ. Пакетные туры «Все включено», отели 5★, регулярные и чартерные рейсы с гарантией вылета.
            </p>
            <div className="space-y-1.5 text-xs text-teal-400 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 shrink-0 text-teal-400" />
                <span className="truncate">Реестровый номер: {AGENCY_INFO.registryNumber}</span>
              </div>
              <div className="text-[11px] text-slate-400 pl-6">
                Фингарантии {AGENCY_INFO.financialGuarantee} (САО «ВСК»)
              </div>
            </div>
          </div>

          {/* 3 Main Pages */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
              Разделы сайта
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button 
                  onClick={() => onNavigate('home')} 
                  className="hover:text-teal-400 transition-colors text-left font-medium flex items-center gap-2"
                >
                  <span className="text-teal-500 font-mono text-[11px]">01.</span>
                  <span>Главная страница (Поиск и акции)</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('catalog')} 
                  className="hover:text-teal-400 transition-colors text-left font-medium flex items-center gap-2"
                >
                  <span className="text-teal-500 font-mono text-[11px]">02.</span>
                  <span>Каталог туров (Фильтры по странам)</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('about')} 
                  className="hover:text-teal-400 transition-colors text-left font-medium flex items-center gap-2"
                >
                  <span className="text-teal-500 font-mono text-[11px]">03.</span>
                  <span>О компании и офисы продаж</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
              Популярные направления
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <span>🇹🇷</span>
                <button onClick={() => onNavigate('catalog')} className="hover:text-white transition-colors">
                  Турция (Анталья, Белек, Кемер)
                </button>
              </li>
              <li className="flex items-center gap-2">
                <span>🇦🇪</span>
                <button onClick={() => onNavigate('catalog')} className="hover:text-white transition-colors">
                  ОАЭ (Дубай, Абу-Даби, Рас-эль-Хайма)
                </button>
              </li>
              <li className="flex items-center gap-2">
                <span>🇪🇬</span>
                <button onClick={() => onNavigate('catalog')} className="hover:text-white transition-colors">
                  Египет (Шарм-эль-Шейх, Хургада)
                </button>
              </li>
              <li className="flex items-center gap-2">
                <span>🇹🇭</span>
                <button onClick={() => onNavigate('catalog')} className="hover:text-white transition-colors">
                  Таиланд (Пхукет, Паттайя, Самуи)
                </button>
              </li>
              <li className="flex items-center gap-2">
                <span>🇲🇻</span>
                <button onClick={() => onNavigate('catalog')} className="hover:text-white transition-colors">
                  Мальдивы (Виллы и резорты)
                </button>
              </li>
            </ul>
          </div>

          {/* Offices & Contacts */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
              Контакты и поддержка
            </h4>
            <div className="space-y-2 text-xs">
              <a 
                href="tel:+74958324412" 
                className="flex items-center gap-2 hover:text-white transition-colors font-bold text-teal-300"
              >
                <Phone className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>+7 (495) 832-44-12 (Москва)</span>
              </a>
              <div className="flex items-center gap-2 text-slate-400">
                <Phone className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>8 (800) 555-35-35 (Бесплатно по РФ)</span>
              </div>
              <div className="flex items-start gap-2 text-slate-400 pt-1">
                <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                <span>Москва, ул. Тверская, 12, стр. 2</span>
              </div>
              <div className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                <span>Санкт-Петербург, Невский проспект, 54</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <span>© 2012–2026 {AGENCY_INFO.legalName}. Все права защищены.</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-slate-400 text-xs">
            <span>Оплата через СБП</span>
            <span>•</span>
            <span>Карты МИР</span>
            <span>•</span>
            <span>Безналичный расчет для юрлиц</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
