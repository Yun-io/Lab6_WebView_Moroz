export interface Tour {
  id: string;
  title: string;
  country: string;
  region: string;
  city: string;
  departureCity: string;
  tourOperator: string;
  durationDays: number;
  durationNights: number;
  price: number;
  oldPrice?: number;
  currency: string;
  rating: number;
  reviewsCount: number;
  badge?: string;
  badgeColor?: 'emerald' | 'amber' | 'rose' | 'teal' | 'indigo';
  coverImage: string;
  gallery: string[];
  description: string;
  highlights: string[];
  hotelName: string;
  hotelStars: number;
  beachLine?: string;
  roomType?: string;
  meals: string;
  mealCode?: 'UAI' | 'AI' | 'FB' | 'HB' | 'BB' | 'RO';
  flightIncluded: boolean;
  flightDetails?: {
    airline: string;
    flightNumber: string;
    baggage: string;
    direct: boolean;
  };
  groupSize?: string;
  difficulty?: 'Легкий' | 'Средний' | 'Активный';
  nextDates: string[];
  itinerary?: {
    day: number;
    title: string;
    description: string;
    meals: string;
    hotel?: string;
  }[];
  included: string[];
  notIncluded: string[];
}

export interface Booking {
  id: string;
  tourId: string;
  tourTitle: string;
  destination: string;
  dates: string;
  guestsCount: number;
  guestsText: string;
  totalPrice: number;
  currency: string;
  status: 'confirmed' | 'pending' | 'completed' | 'cancelled';
  statusLabel: string;
  coverImage: string;
  hotel: string;
  flightNumber: string;
  departureTime: string;
  arrivalTime: string;
  voucherCode: string;
  managerName: string;
  managerPhone: string;
}

export interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatar: string;
  bonusMiles: number;
  tier: 'Silver' | 'Gold' | 'Platinum';
  tierProgress: number;
  passportNumber: string;
  passportExpiry: string;
  activeBookingsCount: number;
  completedTripsCount: number;
  favoriteToursCount: number;
}

export interface ReviewItem {
  id: string;
  author: string;
  city: string;
  avatar: string;
  rating: number;
  date: string;
  tourTitle: string;
  text: string;
}

export interface TravelOffice {
  id: string;
  city: string;
  name: string;
  metro: string;
  address: string;
  hours: string;
  phone: string;
  email: string;
  isHeadquarters?: boolean;
}

export interface TravelManager {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialization: string;
  photo: string;
  phone: string;
  telegram: string;
}

export type PageId = 'home' | 'catalog' | 'tour' | 'about' | 'auth' | 'account';
export type DeviceView = 'desktop' | 'mobile';
export type DisplayLayout = 'interactive' | 'figma-desktop' | 'figma-mobile' | 'figma-all';
