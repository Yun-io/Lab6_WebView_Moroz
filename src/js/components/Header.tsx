import React, { useState } from 'react';
import { PageId } from '../types';
import { 
  Compass, 
  Phone, 
  Menu, 
  X, 
  ShieldCheck,
  CalendarCheck2
} from 'lucide-react';
import { AGENCY_INFO } from '../data/mockData';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  currentPage, 
  onNavigate,
  onOpenBooking 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string; badge?: string }[] = [
    { id: 'home', label: 'Главная' },
    { id: 'catalog', label: 'Каталог туров', badge: 'Хиты' },
    { id: 'about', label: 'О компании' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs w-full">
      {/* Top micro bar with agency registry & contacts */}
      <div className="bg-slate-950 text-slate-300 text-xs py-1.5 px-4 sm:px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-[11px]">
            <span className="flex items-center gap-1.5 text-teal-400 font-semibold truncate">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              <span>Реестр турагентов: {AGENCY_INFO.registryNumber}</span>
            </span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="text-slate-400 hidden md:inline">Фингарантии 50 000 000 ₽ (САО «ВСК»)</span>
          </div>

          <div className="flex items-center gap-3 text-[11px]">
            <a 
              href="tel:+74958324412" 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span className="font-bold text-white">{AGENCY_INFO.phoneMoscow}</span>
              <span className="hidden sm:inline text-[10px] px-1.5 py-0.2 bg-teal-500/20 text-teal-300 rounded-sm">
                Москва Тверская
              </span>
            </a>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="text-slate-400 hidden sm:inline">Пн-Вс 10:00 — 21:00</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <button 
          onClick={() => onNavigate('home')} 
          className="flex items-center gap-2.5 sm:gap-3 text-left focus:outline-hidden group shrink-0"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-teal-600 flex items-center justify-center text-white shadow-md shadow-teal-600/20 group-hover:scale-105 transition-transform shrink-0">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-black text-lg sm:text-xl tracking-tight text-slate-900 leading-none">
                Trawel<span className="text-teal-600">Way</span>
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-md bg-teal-100 text-teal-800">
                Турагентство
              </span>
            </div>
            <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium block mt-0.5 truncate">
              Горящие туры и путешествия «Все включено»
            </span>
          </div>
        </button>

        {/* 3 Main Pages Navigation (Desktop) */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/90 p-1 rounded-2xl border border-slate-200">
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

        {/* CTA and Actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onOpenBooking}
            className="flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-xs hover:shadow-md transition-all"
          >
            <CalendarCheck2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Подобрать тур</span>
            <span className="sm:hidden">Подбор</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-slate-200 transition-colors"
            aria-label="Открыть меню"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 py-3 space-y-2 shadow-xl animate-in slide-in-from-top-2 duration-150">
          <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold px-2 py-1">
            Навигация по сайту:
          </div>
          <div className="space-y-1">
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
          </div>

          <div className="pt-2 border-t border-slate-100 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 px-4 rounded-xl bg-teal-600 text-white font-bold text-xs text-center flex items-center justify-center gap-2"
            >
              <CalendarCheck2 className="w-4 h-4" />
              <span>Оставить заявку на подбор тура</span>
            </button>

            <a 
              href="tel:+74958324412" 
              className="flex items-center gap-2 text-xs font-bold text-slate-800 px-3 py-2.5 rounded-xl bg-slate-50"
            >
              <Phone className="w-3.5 h-3.5 text-teal-600 shrink-0" />
              <span>+7 (495) 832-44-12</span>
              <span className="text-[10px] text-teal-700 bg-teal-100 px-1.5 py-0.5 rounded-sm ml-auto">
                Москва
              </span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
