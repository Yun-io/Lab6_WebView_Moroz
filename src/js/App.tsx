import React, { useState, useEffect } from 'react';
import { PageId, Tour } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { CatalogPage } from './components/pages/CatalogPage';
import { TourDetailPage } from './components/pages/TourDetailPage';
import { AboutPage } from './components/pages/AboutPage';
import { BookingModal } from './components/BookingModal';
import { FEATURED_TOURS } from './data/mockData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedTourId, setSelectedTourId] = useState<string>('rixos-belek');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingTour, setBookingTour] = useState<Tour | null>(null);

  // Sync with browser URL hash
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash.startsWith('tour')) {
        const parts = hash.split('/');
        if (parts[1]) {
          setSelectedTourId(parts[1]);
        }
        setCurrentPage('tour');
      } else if (hash === 'catalog') {
        setCurrentPage('catalog');
      } else if (hash === 'about') {
        setCurrentPage('about');
      } else {
        setCurrentPage('home');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateToPage = (page: PageId, tourId?: string) => {
    if (tourId) {
      setSelectedTourId(tourId);
      window.location.hash = `tour/${tourId}`;
    } else {
      window.location.hash = page === 'home' ? '' : page;
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (tourId?: string) => {
    if (tourId) {
      const found = FEATURED_TOURS.find((t) => t.id === tourId);
      setBookingTour(found || null);
    } else {
      setBookingTour(null);
    }
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-teal-500 selection:text-white">
      {/* Site Header */}
      <Header
        currentPage={currentPage}
        onNavigate={navigateToPage}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Pages */}
      <main className="flex-1 w-full overflow-x-hidden">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateToPage}
            onOpenBooking={handleOpenBooking}
          />
        )}
        {currentPage === 'catalog' && (
          <CatalogPage
            onNavigate={navigateToPage}
            onOpenBooking={handleOpenBooking}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage
            onNavigate={navigateToPage}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}
        {currentPage === 'tour' && (
          <TourDetailPage
            onNavigate={navigateToPage}
            device="desktop"
            tourId={selectedTourId}
          />
        )}
      </main>

      {/* Site Footer */}
      <Footer onNavigate={navigateToPage} />

      {/* Quick Booking & Tour Request Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialTour={bookingTour}
      />
    </div>
  );
}
