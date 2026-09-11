import React, { useState } from 'react';
import { PageId } from '../types';
import { IMAGES, SERVICES_PAGE_CARDS, SERVICES_TESTIMONIALS } from '../data';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate: _onNavigate, onOpenBooking }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const gallerySlides = [
    {
      id: 0,
      center: IMAGES.carouselGardenFountain,
      left: IMAGES.carouselSandMandala,
      right: IMAGES.carouselForestRiver,
      caption: 'Tranquil Formal Gardens & Healing Fountains',
    },
    {
      id: 1,
      center: IMAGES.carouselForestRiver,
      left: IMAGES.carouselGardenFountain,
      right: IMAGES.carouselSandMandala,
      caption: 'Flowing Waters & Living Nature Connection',
    },
    {
      id: 2,
      center: IMAGES.carouselSandMandala,
      left: IMAGES.carouselForestRiver,
      right: IMAGES.carouselGardenFountain,
      caption: 'Zen Grounding & Mindfulness Spaces',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % gallerySlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + gallerySlides.length) % gallerySlides.length);
  };

  const activeSlideData = gallerySlides[currentSlide];

  return (
    <div id="services-page" className="w-full">
      {/* 1. SERVICES HERO BANNER */}
      <section
        id="services-hero"
        className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center bg-cover bg-center text-white pt-28 pb-20"
        style={{
          backgroundImage: `url('${IMAGES.servicesHero}')`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#0d170d]/75 backdrop-brightness-90" />

        {/* Curved arch bottom edge matching screenshot */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none z-10">
          <svg
            className="relative block w-full h-12 sm:h-16 md:h-20 text-[#fbfbf9]"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            fill="currentColor"
          >
            <path d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z" />
          </svg>
        </div>

        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-5">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-md">
            Services
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed font-normal max-w-2xl mx-auto drop-shadow">
            A brief introduction of your services. You can introduce this section here and then list down those in the area below. Let it be attractive enough to entice users.
          </p>
        </div>
      </section>

      {/* 2. IMAGE GALLERY / CAROUSEL SECTION */}
      <section id="services-gallery-carousel" className="py-12 bg-[#fbfbf9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-center gap-4 sm:gap-6 py-4">
            {/* Left Preview Card */}
            <div
              onClick={prevSlide}
              className="hidden md:block w-48 lg:w-56 aspect-square rounded-2xl overflow-hidden shadow-md opacity-60 hover:opacity-90 transition-opacity cursor-pointer border border-emerald-900/10 shrink-0 transform scale-90"
            >
              <img
                src={activeSlideData.left}
                alt="Previous preview"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Center Main Featured Card */}
            <div className="w-full max-w-lg lg:max-w-xl aspect-[4/3] sm:aspect-[16/11] bg-white p-3 sm:p-4 rounded-3xl shadow-xl border border-emerald-900/10 overflow-hidden relative group">
              <div className="w-full h-full rounded-2xl overflow-hidden relative">
                <img
                  src={activeSlideData.center}
                  alt={activeSlideData.caption}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />

                {/* Left/Right Slide Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right Preview Card */}
            <div
              onClick={nextSlide}
              className="hidden md:block w-48 lg:w-56 aspect-square rounded-2xl overflow-hidden shadow-md opacity-60 hover:opacity-90 transition-opacity cursor-pointer border border-emerald-900/10 shrink-0 transform scale-90"
            >
              <img
                src={activeSlideData.right}
                alt="Next preview"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-2 pt-4">
            {gallerySlides.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                  currentSlide === idx ? 'w-6 bg-[#5e8252]' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUR SERVICES 3-CARD SECTION */}
      <section id="services-grid-list" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-14">
            <span className="text-xs font-bold tracking-widest text-[#d97736] uppercase">
              OPTIONAL SUBTITLE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2618]">Our Services</h2>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed pt-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eros dolor pellentesque sed luctus dapibus lobortis orci.
            </p>
          </div>

          {/* 3 Service Cards with Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES_PAGE_CARDS.map((card) => (
              <div
                key={card.id}
                className="bg-[#fbfbf9] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-emerald-900/5 flex flex-col group"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-[#1e2f1d] group-hover:text-[#5e8252] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed font-normal">
                      {card.description}
                    </p>
                  </div>
                  <div className="pt-2">
                    <button
                      onClick={onOpenBooking}
                      className="text-xs font-semibold text-[#5e8252] hover:text-[#45633b] transition-colors cursor-pointer flex items-center gap-1"
                    >
                      <span>Inquire about this service</span> &rarr;
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHAT OUR CLIENTS SAY (2x2 TESTIMONIAL GRID WITH MONSTERA LEAF) */}
      <section id="services-testimonials" className="py-24 bg-[#f8faf6] relative overflow-hidden">
        {/* Left Monstera Leaf Graphic */}
        <div className="absolute -left-12 top-10 w-44 sm:w-64 h-auto pointer-events-none opacity-80 z-0">
          <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-[#5e9643]">
            <path
              d="M100 10C50 10 10 50 10 100C10 150 50 190 100 190C150 190 190 150 190 100C190 50 150 10 100 10ZM70 40C75 40 85 55 80 65C75 75 60 70 55 60C50 50 65 40 70 40ZM40 100C40 90 55 85 65 90C75 95 70 110 60 115C50 120 40 110 40 100ZM70 160C65 160 50 150 55 140C60 130 75 135 80 145C85 155 75 160 70 160ZM130 40C135 40 150 50 145 60C140 70 125 65 120 55C115 45 125 40 130 40ZM160 100C160 110 145 115 135 110C125 105 130 90 140 85C150 80 160 90 160 100ZM130 160C125 160 115 155 120 145C125 135 140 130 145 140C150 150 135 160 130 160Z"
              fill="currentColor"
              fillOpacity="0.75"
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e2f1d]">
              What Our Clients Say
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">
              Let real testimonials do the speaking! Pick the best and display them in this section.
            </p>
            <div className="w-12 h-1 bg-[#86ab79] mx-auto rounded-full mt-2" />
          </div>

          {/* 2x2 Testimonial Cards Grid with Avatars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 pt-6">
            {SERVICES_TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="relative bg-white rounded-2xl p-7 sm:p-8 shadow-sm border border-emerald-900/5 text-center space-y-4 pt-10"
              >
                {/* Overlapping Avatar Circle */}
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  {t.quote}
                </p>

                <div className="pt-2">
                  <h4 className="text-xs font-bold text-gray-900">{t.name}</h4>
                  <p className="text-[10px] text-gray-500 tracking-wide mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TAKE ACTION NOW. CALL TO ACTION BANNER */}
      <section
        id="services-take-action-cta"
        className="py-20 bg-gradient-to-r from-[#62b694] via-[#4d9e7e] to-[#3a7c61] text-white text-center"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Take Action Now.
          </h2>

          <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-normal max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt nunc venenatis massa sagittis gravida at at arcu.
          </p>

          <div className="pt-3">
            <button
              id="cta-book-a-session-btn"
              onClick={onOpenBooking}
              className="px-8 py-3 rounded-md text-xs font-bold tracking-widest uppercase border-2 border-white text-white hover:bg-white hover:text-[#3a7c61] transition-all shadow-md active:scale-95 cursor-pointer"
            >
              BOOK A SESSION
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
