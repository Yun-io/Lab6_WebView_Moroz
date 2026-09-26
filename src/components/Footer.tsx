import React from 'react';
import { PageId, DeviceView } from '../types';
import { Compass, Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';
import { AGENCY_INFO } from '../data/mockData';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  device: DeviceView;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, device }) => {
  const isMobile = device === 'mobile';

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 w-full">
      <div className={`max-w-7xl mx-auto ${isMobile ? 'px-4 py-8' : 'px-6 py-12'}`}>
        {/* Main Footer Content */}
        <div className={`grid ${isMobile ? 'grid-cols-1 gap-6' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'}`}>
          {/* Brand & Legal Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-teal-500 flex items-center justify-center text-slate-900 font-bold shrink-0">
                <Compass className="w-5 h-5 text-slate-900" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Trawel<span className="text-teal-400">Way</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Официальное турагентство ведущих туроператоров РФ. Пакетные туры «Все включено», отели 5★, чартеры и регулярные рейсы.
            </p>
            <div className="space-y-1 text-xs text-teal-400 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span className="truncate">Реестровый номер: {AGENCY_INFO.registryNumber}</span>
              </div>
              <div className="text-[11px] text-slate-400 pl-6">
                Фингарантии {AGENCY_INFO.financialGuarantee} (САО «ВСК»)
              </div>
            </div>
          </div>

          {/* 4 Core Travel Agency Pages for Figma */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Страницы сайта
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => onNavigate('home')} 
                  className="hover:text-teal-400 transition-colors text-left font-medium"
                >
                  01. Главная (Поиск и витрина)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('catalog')} 
                  className="hover:text-teal-400 transition-colors text-left font-medium"
                >
                  02. Каталог туров (Фильтры по странам)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('tour')} 
                  className="hover:text-teal-400 transition-colors text-left font-medium"
                >
                  03. Карточка тура: Турция 5★ Rixos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('about')} 
                  className="hover:text-teal-400 transition-colors text-left font-medium"
                >
                  04. О компании и офисы продаж
                </button>
              </li>
            </ul>
          </div>

          {/* Popular Directions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Популярные страны
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>🇹🇷 Турция (Белек, Кемер, Анталья)</li>
              <li>🇦🇪 ОАЭ (Дубай, Пальма Джумейра)</li>
              <li>🇪🇬 Египет (Шарм-эль-Шейх, Хургада)</li>
              <li>🇹🇭 Таиланд (Пхукет, Самуи)</li>
              <li>🇲🇻 Мальдивы (Виллы над водой)</li>
              <li>🇷🇺 Россия (Сочи, Красная Поляна)</li>
            </ul>
          </div>

          {/* Offices & Contacts */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Офисы и поддержка
            </h4>
            <div className="space-y-2 text-xs">
              <a href="tel:+74958324412" className="flex items-center gap-2 hover:text-white transition-colors font-bold text-teal-300">
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
                <span>СПб, Невский проспект, 54</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <span>© 2012–2026 {AGENCY_INFO.legalName}. Все права защищены.</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-slate-400 text-xs">
            <span>Оплата через СБП</span>
            <span>•</span>
            <span>Карты МИР</span>
            <span>•</span>
            <span>Безналичный расчет для юр. лиц</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
