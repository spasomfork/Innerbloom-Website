import { TestimonialItem, FAQItem, ServiceCardItem } from './types';

export const SITE_INFO = {
  name: 'InnerBloom',
  tagline: 'Somatic Psychotherapy',
  phone: '+1 (555) 334-4321',
  phoneSecondary: '+1 (555) 334-4321',
  phoneContact: '+1 (555) 334-4321',
  phoneRaw: '+15553344321',
  email: 'contact@innerbloomtherapy.com',
  emailContact: 'contact@innerbloomtherapy.com',
  address: '123 Harmony Blossom Way, Suite 200, Portland, OR 97201, USA',
  addressAlt: '123 Harmony Blossom Way, Suite 200, Portland, OR 97201, USA',
  social: {
    facebook: 'innerbloomtherapy',
    twitter: '@innerbloom_psy',
    instagram: '@innerbloom.therapy',
    website: 'www.innerbloomtherapy.com',
  },
  youtubeVideoId: 'sz6-F1wYFkw',
};

export const IMAGES = {
  // Home Hero - woman sitting on wooden dock looking over calm waters
  homeHero: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1920&q=80',
  // Floral banner behind "About Us" on homepage
  flowerBanner: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1920&q=80',
  // Why choose us two photos
  meditationWater: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80',
  womanInLeaves: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
  // Services landscape image with blossom tree
  cherryBlossomGarden: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=1000&q=80',
  // FAQ wildflowers
  wildflowers: 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=800&q=80',
  // Contact form warm petals backdrop
  contactBackdrop: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1600&q=80',
  // Newsletter forest road
  autumnForestRoad: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  // About Page Hero - misty lake and mountain
  aboutHero: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80',
  // About Page pier dock with woman in white walking away
  pierTranquility: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1600&q=80',
  // Services Page Hero
  servicesHero: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1920&q=80',
  // Services Carousel images
  carouselGardenFountain: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1000&q=80',
  carouselSandMandala: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=600&q=80',
  carouselForestRiver: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80',
  // Services 3 cards
  serviceMindfulness: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
  serviceTrauma: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=80',
  serviceTransitions: 'https://images.unsplash.com/photo-1530968033775-2c92736b131e?auto=format&fit=crop&w=800&q=80',
  // Avatars
  avatar1: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
  avatar2: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
  avatar3: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
  avatar4: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
};

export const HOME_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    quote: 'If you are looking for some awesome, knowledgeable people to work with, these are the guys I highly recommend. Their friendliness and result-driven approach are what I love about them.',
    name: 'Elena Vance',
    role: 'PRODUCT DESIGNER',
    avatar: IMAGES.avatar1,
  },
  {
    id: 't2',
    quote: 'If you are looking for some awesome, knowledgeable people to work with, these are the guys I highly recommend. Their friendliness and result-driven approach are what I love about them.',
    name: 'Marcus Thorne',
    role: 'CREATIVE DIRECTOR',
    avatar: IMAGES.avatar4,
  },
  {
    id: 't3',
    quote: 'If you are looking for some awesome, knowledgeable people to work with, these are the guys I highly recommend. Their friendliness and result-driven approach are what I love about them.',
    name: 'Sophia Sterling',
    role: 'ARCHITECT',
    avatar: IMAGES.avatar2,
  },
];

export const SERVICES_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'st1',
    quote: 'Working with Dr. Sterling completely transformed how I process high-pressure burnout. For the first time in years, I can sit still without feeling an underlying current of dread.',
    name: 'Nadine Berger',
    role: 'Fashion Designer & Founder',
    avatar: IMAGES.avatar1,
  },
  {
    id: 'st2',
    quote: 'Her somatic approach gave me tangible, physical anchors when panic attacks threatened my daily routine. The shifts were subtle at first, then genuinely life-changing.',
    name: 'Robert Berger',
    role: 'Operations Director',
    avatar: IMAGES.avatar2,
  },
  {
    id: 'st3',
    quote: 'I had tried traditional talk therapy for years with minimal progress on my trauma. Somatic Experiencing unlocked the physical knot in my chest within three sessions.',
    name: 'Pascal Haas',
    role: 'Tech Entrepreneur',
    avatar: IMAGES.avatar3,
  },
  {
    id: 'st4',
    quote: 'The safety, warmth, and neurobiological insights provided here helped me rebuild trust in my own intuition after a devastating relationship transition.',
    name: 'Carmen Haas',
    role: 'Creative Freelancer',
    avatar: IMAGES.avatar4,
  },
];

export const HOME_FAQS: FAQItem[] = [
  {
    id: 'faq1',
    question: 'Why should I choose your company?',
    answer: "Use this space to answer the commonly asked question you've mentioned above. Make sure your answer is accurate and understandable by your users. Although you need to keep this short, your answer should contain all the details to match your user expectations.",
  },
  {
    id: 'faq2',
    question: 'How can somatic therapy help with anxiety?',
    answer: 'Somatic therapy bridges the gap between physical sensation and emotional regulation. By tuning into your bodily responses, identifying muscular tension patterns, and learning grounding breathwork, you develop somatic awareness that soothes the nervous system, down-regulates hypervigilance, and creates lasting resilience against anxiety triggers.',
  },
  {
    id: 'faq3',
    question: 'Is you worker is certified ?',
    answer: 'Yes, absolutely. Our lead somatic psychotherapist is a licensed professional clinical counselor (LPCC) holding advanced clinical certifications in Somatic Experiencing (SEP), trauma-informed somatic interventions, and integrative body-mind therapies with over a decade of dedicated clinical practice.',
  },
];

export const SERVICES_PAGE_CARDS: ServiceCardItem[] = [
  {
    id: 's1',
    title: 'Mindfulness-Based Somatic Therapy',
    description: 'Learn to listen to your body’s felt senses, disarm unconscious stress loops, and re-establish inner stillness using mindful somatosensory grounding.',
    image: IMAGES.serviceMindfulness,
  },
  {
    id: 's2',
    title: 'Trauma Recovery & Nervous System Reset',
    description: 'A gentle, non-cathartic approach to processing shock and developmental trauma by restoring vagal tone and releasing trapped physiological fight-or-flight energy.',
    image: IMAGES.serviceTrauma,
  },
  {
    id: 's3',
    title: 'Life & Emotional Transitions Support',
    description: 'Navigate career shifts, motherhood transitions, grief, or personal rebirth with emotional containment, body-based confidence, and aligned boundary work.',
    image: IMAGES.serviceTransitions,
  },
];
