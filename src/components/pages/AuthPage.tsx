import React, { useState } from 'react';
import { PageId, DeviceView } from '../../types';
import { 
  Compass, 
  Mail, 
  Lock, 
  User, 
  Phone, 
  Eye, 
  EyeOff, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface AuthPageProps {
  onNavigate: (page: PageId) => void;
  device: DeviceView;
}

export const AuthPage: React.FC<AuthPageProps> = ({ onNavigate, device }) => {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [showPassword, setShowPassword] = useState(false);
  
  // Form State
  const [email, setEmail] = useState('artyommoroz07@gmail.com');
  const [password, setPassword] = useState('TravelSafe2026!');
  const [name, setName] = useState('Артём Морозов');
  const [phone, setPhone] = useState('+7 (926) 554-19-82');
  const [rememberMe, setRememberMe] = useState(true);
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const isMobile = device === 'mobile';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onNavigate('account');
    }, 600);
  };

  const fillDemo = () => {
    setEmail('artyommoroz07@gmail.com');
    setPassword('TravelSafe2026!');
    setName('Артём Морозов');
    setPhone('+7 (926) 554-19-82');
  };

  return (
    <div className="w-full min-h-[calc(100vh-140px)] bg-slate-100 flex items-center justify-center py-8 px-4">
      <div className={`w-full max-w-4xl bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden ${
        isMobile ? 'max-w-md' : 'grid grid-cols-12'
      }`}>
        {/* Left Visual Column (Desktop only) */}
        {!isMobile && (
          <div className="col-span-5 relative bg-gradient-to-br from-teal-800 via-teal-900 to-slate-900 text-white p-8 flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-0 opacity-25">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80"
                alt="Travel scenic"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Top brand */}
            <div className="relative z-10 space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-teal-400 text-slate-950 flex items-center justify-center font-bold">
                  <Compass className="w-5 h-5" />
                </div>
                <span className="text-xl font-extrabold tracking-tight">
                  Trawel<span className="text-teal-400">Way</span>
                </span>
              </div>
              <p className="text-xs text-teal-100/80 leading-relaxed">
                Персональный кабинет туриста. Ваши маршруты, электронные ваучеры и персональные скидки.
              </p>
            </div>

            {/* Club Benefits list */}
            <div className="relative z-10 space-y-3 my-6">
              <div className="text-xs font-bold uppercase tracking-wider text-teal-300">
                Преимущества клуба:
              </div>
              <ul className="space-y-2.5 text-xs text-teal-50">
                <li className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>5 000 бонусов при регистрации</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-teal-300 shrink-0" />
                  <span>Доступ к закрытым спецтарифам</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-300 shrink-0" />
                  <span>Электронные ваучеры всегда под рукой</span>
                </li>
              </ul>
            </div>

            {/* Quote */}
            <div className="relative z-10 pt-4 border-t border-teal-700/50 text-[11px] text-teal-200/80 italic">
              «Мир — это книга, и те, кто не путешествуют, читают лишь одну страницу.»
            </div>
          </div>
        )}

        {/* Right Form Column */}
        <div className={`${isMobile ? 'p-4 sm:p-6' : 'col-span-7 p-8'} flex flex-col justify-center`}>
          {/* Header & Mode Switcher */}
          <div className="mb-5 text-center sm:text-left">
            {isMobile && (
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-xl bg-teal-600 text-white flex items-center justify-center">
                  <Compass className="w-4 h-4" />
                </div>
                <span className="text-base font-extrabold text-slate-900">
                  Trawel<span className="text-teal-600">Way</span>
                </span>
              </div>
            )}
            
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              {mode === 'signin' ? 'Вход в TrawelWay' : 'Регистрация аккаунта'}
            </h2>
            <p className="text-[11px] sm:text-xs text-slate-500 mt-1">
              {mode === 'signin'
                ? 'Войдите для доступа к вашим поездкам и милям'
                : 'Создайте аккаунт и получите 5 000 бонусов на первый тур'}
            </p>

            {/* Segmented Switcher */}
            <div className="mt-3.5 p-1 bg-slate-100 rounded-xl flex items-center gap-1">
              <button
                type="button"
                onClick={() => setMode('signin')}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                  mode === 'signin'
                    ? 'bg-white text-teal-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Вход
              </button>
              <button
                type="button"
                onClick={() => setMode('signup')}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                  mode === 'signup'
                    ? 'bg-white text-teal-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>Регистрация</span>
                <span className="ml-1 text-[10px] text-amber-600 font-extrabold">+5 000</span>
              </button>
            </div>
          </div>

          {/* Social Logins */}
          <div className="space-y-2 mb-5">
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                className="py-2.5 px-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-xs font-semibold text-slate-700 flex items-center justify-center gap-2 transition-colors"
              >
                <span className="font-bold text-red-500">G</span>
                <span>Google</span>
              </button>
              <button
                type="button"
                className="py-2.5 px-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-xs font-semibold text-slate-700 flex items-center justify-center gap-2 transition-colors"
              >
                <span className="font-bold text-red-600">Я</span>
                <span>Яндекс ID</span>
              </button>
            </div>
            <div className="flex items-center gap-3 my-3">
              <div className="flex-1 h-px bg-slate-200" />
              <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">или через email</span>
              <div className="flex-1 h-px bg-slate-200" />
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3.5">
            {mode === 'signup' && (
              <>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 block">Ваше имя и фамилия</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="Иван Петров"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-hidden focus:border-teal-600 bg-slate-50/50"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 block">Номер телефона</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+7 (999) 000-00-00"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-hidden focus:border-teal-600 bg-slate-50/50"
                    />
                  </div>
                </div>
              </>
            )}

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 block">Электронная почта</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-hidden focus:border-teal-600 bg-slate-50/50"
                />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700">Пароль</label>
                {mode === 'signin' && (
                  <button type="button" className="text-[11px] font-semibold text-teal-700 hover:underline">
                    Забыли пароль?
                  </button>
                )}
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-9 pr-10 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-hidden focus:border-teal-600 bg-slate-50/50"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Checkbox */}
            <div className="pt-1">
              {mode === 'signin' ? (
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 text-teal-600 rounded-sm border-slate-300 focus:ring-teal-500"
                  />
                  <span className="text-xs text-slate-600">Запомнить меня на этом устройстве</span>
                </label>
              ) : (
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="w-4 h-4 mt-0.5 text-teal-600 rounded-sm border-slate-300 focus:ring-teal-500"
                  />
                  <span className="text-[11px] text-slate-500 leading-tight">
                    Я согласен с условиями оферты и обработкой персональных данных
                  </span>
                </label>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition-all shadow-md shadow-teal-600/30 flex items-center justify-center gap-2 mt-2"
            >
              {submitted ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  <span>Успешный вход...</span>
                </>
              ) : (
                <>
                  <span>{mode === 'signin' ? 'Войти в личный кабинет' : 'Зарегистрироваться'}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            {/* Quick Demo Helper */}
            <div className="pt-2 text-center">
              <button
                type="button"
                onClick={fillDemo}
                className="text-[11px] text-slate-400 hover:text-teal-700 transition-colors underline"
              >
                Быстро заполнить демо-данные (Артём Морозов)
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
