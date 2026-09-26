import React, { useState } from 'react';
import { PageId, DeviceView } from '../types';
import { 
  Compass, 
  Phone, 
  Menu, 
  X, 
  ShieldCheck
} from 'lucide-react';
import { CURRENT_USER, AGENCY_INFO } from '../data/mockData';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  device: DeviceView;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, device }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isMobile = device === 'mobile';

  const navItems: { id: PageId; label: string; badge?: string }[] = [
    { id: 'home', label: 'Главная' },
    { id: 'catalog', label: 'Каталог туров', badge: 'Хиты' },
    { id: 'tour', label: 'Тур в Турцию 5★', badge: 'UAI' },
    { id: 'about', label: 'О компании и офисы' },
  ];

  // MOBILE HEADER (Clean 390px layout)
  if (isMobile) {
    return (
      <header className="relative z-30 bg-white border-b border-slate-200 shadow-xs w-full">
        <div className="px-4 py-3 flex items-center justify-between gap-2">
          {/* Logo */}
          <button 
            onClick={() => onNavigate('home')} 
            className="flex items-center gap-2 text-left focus:outline-hidden min-w-0"
          >
            <div className="w-8 h-8 rounded-xl bg-teal-600 flex items-center justify-center text-white shrink-0 shadow-xs">
              <Compass className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="font-black text-sm tracking-tight text-slate-900 block leading-tight">
                Trawel<span className="text-teal-600">Way</span>
              </span>
              <span className="text-[10px] text-slate-500 block font-semibold truncate">
                РТА №{AGENCY_INFO.registryNumber}
              </span>
            </div>
          </button>

          {/* Quick Actions */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href="tel:+74958324412"
              className="p-2 rounded-xl bg-teal-50 text-teal-800 hover:bg-teal-100 flex items-center justify-center transition-colors"
              title="Позвонить в офис"
            >
              <Phone className="w-3.5 h-3.5 text-teal-700" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-slate-200 transition-colors"
              aria-label="Меню"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Nav Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-slate-100 bg-white px-4 py-3 space-y-1 shadow-lg">
            <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold px-2 py-1">
              Страницы сайта турагентства:
            </div>
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold transition-colors ${
                  currentPage === item.id 
                    ? 'bg-teal-50 text-teal-800' 
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>0{index + 1}. {item.label}</span>
                {item.badge && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-teal-100 text-teal-800">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}

            <div className="pt-2 border-t border-slate-100 mt-2">
              <a 
                href="tel:+74958324412" 
                className="flex items-center gap-2 text-xs font-bold text-slate-800 px-3 py-2 rounded-xl bg-slate-50"
              >
                <Phone className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                <span>+7 (495) 832-44-12</span>
                <span className="text-[10px] text-teal-700 bg-teal-100 px-1.5 py-0.5 rounded-sm ml-auto">
                  Москва Тверская
                </span>
              </a>
            </div>
          </div>
        )}
      </header>
    );
  }

  // DESKTOP HEADER (1280px layout)
  return (
    <header className="relative z-30 bg-white border-b border-slate-200 shadow-xs w-full">
      {/* Top micro bar for trust & contacts */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1.5 text-teal-400 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              <span>Единый реестр турагентов РФ: {AGENCY_INFO.registryNumber}</span>
            </span>
            <span className="text-slate-400 hidden sm:inline">•</span>
            <span className="text-slate-300 hidden sm:inline">Фингарантии 50 000 000 ₽ (САО «ВСК»)</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <a href="tel:+74958324412" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span className="font-bold text-white">{AGENCY_INFO.phoneMoscow}</span>
              <span className="text-[10px] px-1.5 py-0.2 bg-teal-500/20 text-teal-300 rounded-sm">Москва Тверская</span>
            </a>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400">Пн-Вс 10:00 — 21:00</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between gap-6">
        {/* Brand Logo */}
        <button 
          onClick={() => onNavigate('home')} 
          className="flex items-center gap-3 text-left focus:outline-hidden group shrink-0"
        >
          <div className="w-10 h-10 rounded-2xl bg-teal-600 flex items-center justify-center text-white shadow-md shadow-teal-600/20 group-hover:scale-105 transition-transform">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-black text-xl tracking-tight text-slate-900 leading-none">
                Trawel<span className="text-teal-600">Way</span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-teal-100 text-teal-800">
                Турагентство
              </span>
            </div>
            <span className="text-[11px] text-slate-500 font-medium block mt-0.5">
              Пакетные туры с перелетом и страховкой
            </span>
          </div>
        </button>

        {/* 4 Main Pages Navigation */}
        <nav className="flex items-center gap-1 bg-slate-100/90 p-1 rounded-2xl border border-slate-200">
          {navItems.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold tracking-tight transition-all flex items-center gap-1.5 ${
                currentPage === item.id
                  ? 'bg-white text-teal-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              <span className="text-teal-600 font-mono text-[11px]">0{idx + 1}.</span>
              <span>{item.label}</span>
              {item.badge && (
                <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded-md ${
                  currentPage === item.id 
                    ? 'bg-teal-600 text-white' 
                    : 'bg-teal-100 text-teal-800'
                }`}>
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* Contacts CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="tel:+78005553535"
            className="hidden xl:flex flex-col text-right"
          >
            <span className="text-xs font-bold text-slate-900">{AGENCY_INFO.phoneHotline}</span>
            <span className="text-[10px] text-teal-600 font-medium">Бесплатный звонок по РФ</span>
          </a>

          <button
            onClick={() => onNavigate('about')}
            className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-xs transition-colors"
          >
            Офисы турагентства
          </button>
        </div>
      </div>
    </header>
  );
};
