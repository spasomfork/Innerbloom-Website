export type PageId = 'home' | 'about' | 'services' | 'blog' | 'contact';

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export interface NewsletterFormData {
  firstName: string;
  lastName: string;
  email: string;
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ServiceCardItem {
  id: string;
  title: string;
  description: string;
  image: string;
}
