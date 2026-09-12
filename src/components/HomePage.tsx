import React, { useState } from 'react';
import { PageId, ContactFormData, NewsletterFormData } from '../types';
import {
  SITE_INFO,
  IMAGES,
  HOME_TESTIMONIALS,
  HOME_FAQS,
} from '../data';
import {
  Phone,
  Heart,
  Sprout,
  ShieldCheck,
  UserCheck,
  Sparkles,
  Smile,
  Compass,
  ChevronDown,
  ChevronRight,
  MapPin,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Globe,
  CheckCircle2,
  ArrowRight,
  Quote,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenBooking }) => {
  // FAQ accordion state
  const [openFaqId, setOpenFaqId] = useState<string>('faq1');

  // Contact Form state
  const [contactForm, setContactForm] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [contactErrors, setContactErrors] = useState<Record<string, string>>({});
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);

  // Newsletter Form state
  const [newsletterForm, setNewsletterForm] = useState<NewsletterFormData>({
    firstName: '',
    lastName: '',
    email: '',
  });
  const [newsletterErrors, setNewsletterErrors] = useState<Record<string, string>>({});
  const [newsletterSubmitting, setNewsletterSubmitting] = useState(false);
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  // FAQ Toggle
  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? '' : id));
  };

  // Contact form submission
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    if (!contactForm.firstName.trim()) errors.firstName = 'First name is required';
    if (!contactForm.lastName.trim()) errors.lastName = 'Last name is required';
    if (!contactForm.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(contactForm.email)) {
      errors.email = 'Please enter a valid email';
    }
    if (!contactForm.message.trim()) errors.message = 'Please enter your message';

    if (Object.keys(errors).length > 0) {
      setContactErrors(errors);
      return;
    }

    setContactErrors({});
    setContactSubmitting(true);
    setTimeout(() => {
      setContactSubmitting(false);
      setContactSuccess(true);
    }, 600);
  };

  const handleResetContact = () => {
    setContactSuccess(false);
    setContactForm({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    });
  };

  // Newsletter submission
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    if (!newsletterForm.firstName.trim()) errors.firstName = 'First name is required';
    if (!newsletterForm.lastName.trim()) errors.lastName = 'Last name is required';
    if (!newsletterForm.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(newsletterForm.email)) {
      errors.email = 'Please enter a valid email';
    }

    if (Object.keys(errors).length > 0) {
      setNewsletterErrors(errors);
      return;
    }

    setNewsletterErrors({});
    setNewsletterSubmitting(true);
    setTimeout(() => {
      setNewsletterSubmitting(false);
      setNewsletterSuccess(true);
    }, 500);
  };

  const handleResetNewsletter = () => {
    setNewsletterSuccess(false);
    setNewsletterForm({ firstName: '', lastName: '', email: '' });
  };

  return (
    <div id="home-page" className="w-full">
      {/* 1. HERO SECTION */}
      <section
        id="home-hero"
        className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat text-white pt-24 pb-16"
        style={{
          backgroundImage: `url('${IMAGES.homeHero}')`,
        }}
      >
        {/* Dark subtle overlay matching screenshot */}
        <div className="absolute inset-0 bg-black/45 md:bg-black/40 backdrop-brightness-95" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <p className="text-sm md:text-base font-medium text-[#c0dbb7] tracking-wider drop-shadow-sm">
            A peace of mind like never before.
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.15] drop-shadow-md">
            Healing through
            <br />
            Compassion,
            <br />
            Growth, and
            <br />
            Connection
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-sm">
            At InnerBloom Somatic Psychotherapy, we help women navigate life's emotional transitions with a focus on healing trauma, reducing anxiety, and fostering personal growth.
          </p>

          {/* Phone CTA */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              id="hero-phone-link"
              href={`tel:${SITE_INFO.phoneRaw}`}
              className="inline-flex items-center gap-3 text-lg md:text-xl font-bold text-white hover:text-emerald-300 transition-colors group cursor-pointer"
            >
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-4 h-4 text-emerald-300" />
              </span>
              <span>{SITE_INFO.phone}</span>
            </a>

            <button
              id="hero-book-session-btn"
              onClick={onOpenBooking}
              className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#5e8252] hover:bg-[#507045] text-white shadow-lg transition-all"
            >
              Book A Session
            </button>
          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE US SECTION */}
      <section id="why-choose-us" className="py-20 bg-[#f9fbf8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2618]">Why Choose Us</h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              At <strong className="font-semibold text-gray-900">InnerBloom Somatic Psychotherapy</strong>, we understand that healing is a deeply personal journey. Our approach is centered around offering compassionate, holistic care that focuses on the mind-body connection. Here's why you should choose us:
            </p>
            {/* Green divider bar */}
            <div className="w-12 h-1 bg-[#86ab79] mx-auto rounded-full mt-3" />
          </div>

          {/* 4 Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-[#eef3eb] p-7 rounded-2xl border border-emerald-900/5 text-center space-y-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-white text-[#567b4b] flex items-center justify-center mx-auto shadow-sm">
                <Heart className="w-5 h-5 text-[#567b4b]" />
              </div>
              <h3 className="text-base font-bold text-[#1e2f1d]">Personalized Care</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                We tailor each session to your unique needs, creating a supportive space where you feel heard and understood.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#eef3eb] p-7 rounded-2xl border border-emerald-900/5 text-center space-y-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-white text-[#567b4b] flex items-center justify-center mx-auto shadow-sm">
                <Sprout className="w-5 h-5 text-[#567b4b]" />
              </div>
              <h3 className="text-base font-bold text-[#1e2f1d] leading-snug">
                Experienced and Compassionate Therapist
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                As a somatic therapist with extensive experience, I'm dedicated to supporting women in healing from trauma and anxiety.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#eef3eb] p-7 rounded-2xl border border-emerald-900/5 text-center space-y-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-white text-[#567b4b] flex items-center justify-center mx-auto shadow-sm">
                <ShieldCheck className="w-5 h-5 text-[#567b4b]" />
              </div>
              <h3 className="text-base font-bold text-[#1e2f1d]">Safe and Nurturing Environment</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Our practice provides a safe, confidential, and nurturing environment where you can explore your emotions, process trauma, and find balance.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#eef3eb] p-7 rounded-2xl border border-emerald-900/5 text-center space-y-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-white text-[#567b4b] flex items-center justify-center mx-auto shadow-sm">
                <UserCheck className="w-5 h-5 text-[#567b4b]" />
              </div>
              <h3 className="text-base font-bold text-[#1e2f1d]">Focus on Women's Wellness</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Our practice provides targeted support for women aged 25-50 during life's emotional transitions, focusing on trauma recovery, anxiety management, and personal growth.
              </p>
            </div>
          </div>

          {/* 2 Photos side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="overflow-hidden rounded-2xl shadow-sm aspect-video sm:aspect-[16/10]">
              <img
                src={IMAGES.meditationWater}
                alt="Woman in peaceful meditation by the sea"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-sm aspect-video sm:aspect-[16/10]">
              <img
                src={IMAGES.womanInLeaves}
                alt="Woman with serene natural green leaves"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </div>

          {/* 4 Stats Counters */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6 text-center">
            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-bold text-[#1f2e1d] font-sans">18</div>
              <div className="text-xs text-gray-500 font-medium mt-1">Home Delivery</div>
            </div>
            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-bold text-[#1f2e1d] font-sans">28</div>
              <div className="text-xs text-gray-500 font-medium mt-1">Happy People</div>
            </div>
            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-bold text-[#1f2e1d] font-sans">115</div>
              <div className="text-xs text-gray-500 font-medium mt-1">Tons Of Goods</div>
            </div>
            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-bold text-[#1f2e1d] font-sans">1</div>
              <div className="text-xs text-gray-500 font-medium mt-1">Personalization Of Sessions</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR SERVICES SECTION */}
      <section id="home-services" className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2618]">Our Services</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Landscape Photo with Green Banner Overlay */}
            <div className="lg:col-span-6 relative">
              <div className="overflow-hidden rounded-2xl shadow-lg aspect-[4/3]">
                <img
                  src={IMAGES.cherryBlossomGarden}
                  alt="Serene garden with blossoming tree"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Bottom left green badge */}
              <div className="absolute bottom-5 left-5 right-5 sm:right-auto sm:max-w-xs bg-[#729c48] text-white p-4 rounded-xl shadow-lg">
                <p className="text-sm sm:text-base font-bold leading-tight">
                  Let's Make Your Mind Beautiful And Stress Free!
                </p>
              </div>
            </div>

            {/* Right: Service list & Learn More CTA */}
            <div className="lg:col-span-6 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
                {/* 1. Mindfulness-Based Therapy */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#f0f5ed] flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-5 h-5 text-[#5e8252]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 leading-snug">
                      Mindfulness-Based Therapy
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      A line about the service you've mentioned above.
                    </p>
                  </div>
                </div>

                {/* 2. Anxiety Management */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#f0f5ed] flex items-center justify-center shrink-0 mt-0.5">
                    <Smile className="w-5 h-5 text-[#5e8252]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 leading-snug">
                      Anxiety Management
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      A line about the service you've mentioned above.
                    </p>
                  </div>
                </div>

                {/* 3. Trauma Recovery */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#f0f5ed] flex items-center justify-center shrink-0 mt-0.5">
                    <Sprout className="w-5 h-5 text-[#5e8252]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 leading-snug">
                      Trauma Recovery
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      A line about the service you've mentioned above.
                    </p>
                  </div>
                </div>

                {/* 4. Personal Growth */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#f0f5ed] flex items-center justify-center shrink-0 mt-0.5">
                    <Compass className="w-5 h-5 text-[#5e8252]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 leading-snug">
                      Personal Growth
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      A line about the service you've mentioned above.
                    </p>
                  </div>
                </div>

                {/* 5. Emotional Transitions */}
                <div className="flex items-start gap-3.5 sm:col-span-2">
                  <div className="w-10 h-10 rounded-full bg-[#f0f5ed] flex items-center justify-center shrink-0 mt-0.5">
                    <Heart className="w-5 h-5 text-[#5e8252]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 leading-snug">
                      Emotional Transitions
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      A line about the service you've mentioned above.
                    </p>
                  </div>
                </div>
              </div>

              {/* Learn More Button linking to Services Page */}
              <div className="pt-3">
                <button
                  id="services-learn-more-btn"
                  onClick={() => {
                    onNavigate('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-2.5 rounded-md text-xs font-semibold text-white bg-[#6d963c] hover:bg-[#5f8433] transition-all shadow-sm flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Green Leaf in bottom right */}
        <div className="absolute -bottom-8 right-4 w-28 h-28 pointer-events-none opacity-85 hidden sm:block">
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-[#75a342]">
            <path
              d="M10 90C40 90 80 70 90 20C70 40 40 40 20 60C15 65 12 75 10 90Z"
              fill="currentColor"
              fillOpacity="0.8"
            />
            <path d="M10 90C35 70 60 45 90 20" stroke="#fff" strokeWidth="2" />
          </svg>
        </div>
      </section>

      {/* 5. WHAT OUR CLIENTS SAY (TESTIMONIALS) */}
      <section id="home-testimonials" className="py-20 bg-[#f7faf5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-12">
            <span className="text-xs font-bold tracking-widest text-[#d97736] uppercase">
              [ TESTIMONIAL ]
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e2f1d]">
              What Our Clients Say
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">
              Let real testimonials do the speaking! Pick the best and display them in this section
            </p>
          </div>

          {/* 3 Dark Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HOME_TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-[#242624] text-white p-8 rounded-xl shadow-lg flex flex-col justify-between text-center space-y-6 relative border border-white/5"
              >
                {/* Quote Mark */}
                <div className="text-white flex justify-center">
                  <Quote className="w-8 h-8 text-white/90 rotate-180 fill-white" />
                </div>

                <p className="text-xs sm:text-sm text-gray-300 italic leading-relaxed font-serif">
                  "{t.quote}"
                </p>

                {/* Avatar and Name */}
                <div className="pt-2 flex flex-col items-center space-y-2">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white tracking-wide">{t.name}</h4>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold mt-0.5">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ'S SECTION */}
      <section id="home-faqs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Wildflowers Meadow Photo */}
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-3xl shadow-md aspect-square max-w-md mx-auto">
                <img
                  src={IMAGES.wildflowers}
                  alt="Wildflowers in sunshine"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: FAQ Accordions */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2618]">FAQ's</h2>
                <p className="text-xs sm:text-sm text-gray-500 mt-2 leading-relaxed">
                  Use these paragraphs to focus on the topic in the headline. Make sure you keep it short and attractive.
                </p>
              </div>

              {/* Accordion list */}
              <div className="space-y-4 pt-2">
                {HOME_FAQS.map((faq) => {
                  const isOpen = openFaqId === faq.id;
                  return (
                    <div
                      key={faq.id}
                      className={`border-b pb-4 transition-colors ${
                        isOpen ? 'border-emerald-200' : 'border-gray-200'
                      }`}
                    >
                      <button
                        id={`faq-btn-${faq.id}`}
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full flex items-center justify-between text-left py-2 font-medium cursor-pointer group"
                      >
                        <span
                          className={`text-sm sm:text-base font-semibold transition-colors ${
                            isOpen
                              ? 'text-[#558248]'
                              : 'text-gray-800 group-hover:text-[#558248]'
                          }`}
                        >
                          {faq.question}
                        </span>
                        <span className="shrink-0 ml-3 text-[#558248]">
                          {isOpen ? (
                            <ChevronDown className="w-5 h-5" />
                          ) : (
                            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#558248]" />
                          )}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="pt-2 pr-4 text-xs sm:text-sm text-gray-600 leading-relaxed animate-fadeIn">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. STAY CONNECTED (CONTACT FORM) */}
      <section id="contact-section" className="py-20 bg-[#f7faf5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-1">
            <span className="text-[11px] font-bold tracking-widest text-[#d97736] uppercase">
              WE'D LOVE TO HEAR FROM YOU
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e2f1d]">Stay Connected</h2>
          </div>

          {/* Contact Card with Warm Petals/Tropical Backdrop */}
          <div
            className="relative rounded-3xl overflow-hidden shadow-xl bg-cover bg-center border border-emerald-950/10"
            style={{
              backgroundImage: `url('${IMAGES.contactBackdrop}')`,
            }}
          >
            {/* Dark green tint backdrop */}
            <div className="absolute inset-0 bg-[#0f1a10]/80 backdrop-blur-xs" />

            <div className="relative z-10 p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 text-white">
              {/* Left Column: Reach Us Through */}
              <div className="lg:col-span-5 space-y-6 self-center">
                <span className="text-xs font-semibold tracking-wider text-emerald-300 uppercase">
                  REACH US THROUGH
                </span>

                <div className="space-y-4 text-sm text-gray-200">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                    <p className="leading-snug">{SITE_INFO.address}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                    <a
                      href={`tel:${SITE_INFO.phoneRaw}`}
                      className="hover:text-emerald-300 transition-colors"
                    >
                      {SITE_INFO.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                    <a
                      href={`mailto:${SITE_INFO.email}`}
                      className="hover:text-emerald-300 transition-colors"
                    >
                      {SITE_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Social Handles */}
                <div className="space-y-2.5 pt-3 border-t border-white/10 text-xs text-gray-300">
                  <div className="flex items-center gap-2.5">
                    <Facebook className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{SITE_INFO.social.facebook}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Twitter className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{SITE_INFO.social.twitter}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Instagram className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{SITE_INFO.social.instagram}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Globe className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{SITE_INFO.social.website}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="lg:col-span-7 bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/20">
                <div className="mb-6">
                  <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider block">
                    Send Us A Message
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">Contact Us</h3>
                </div>

                {contactSuccess ? (
                  <div className="py-8 text-center space-y-4 animate-fadeIn">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-lg font-bold text-white">Thank You for Connecting!</h4>
                      <p className="text-xs text-gray-300 max-w-sm mx-auto">
                        Your message has been received, {contactForm.firstName}. A member of our clinical team will get back to you within 24 business hours.
                      </p>
                    </div>
                    <button
                      onClick={handleResetContact}
                      className="px-5 py-2 text-xs font-semibold text-white bg-white/20 hover:bg-white/30 rounded-lg transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4 text-left">
                    {/* Name: First, Last */}
                    <div>
                      <label className="block text-xs font-medium text-gray-200 mb-1">
                        Name <span className="text-emerald-400">*</span>
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <input
                            type="text"
                            required
                            placeholder="First"
                            value={contactForm.firstName}
                            onChange={(e) =>
                              setContactForm({ ...contactForm, firstName: e.target.value })
                            }
                            className={`w-full px-3 py-2 text-sm bg-white text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400 ${
                              contactErrors.firstName ? 'ring-2 ring-red-400' : ''
                            }`}
                          />
                          <span className="text-[10px] text-gray-300 mt-0.5 block">First</span>
                        </div>
                        <div>
                          <input
                            type="text"
                            required
                            placeholder="Last"
                            value={contactForm.lastName}
                            onChange={(e) =>
                              setContactForm({ ...contactForm, lastName: e.target.value })
                            }
                            className={`w-full px-3 py-2 text-sm bg-white text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400 ${
                              contactErrors.lastName ? 'ring-2 ring-red-400' : ''
                            }`}
                          />
                          <span className="text-[10px] text-gray-300 mt-0.5 block">Last</span>
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-medium text-gray-200 mb-1">
                        Email <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={contactForm.email}
                        onChange={(e) =>
                          setContactForm({ ...contactForm, email: e.target.value })
                        }
                        className={`w-full px-3 py-2 text-sm bg-white text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400 ${
                          contactErrors.email ? 'ring-2 ring-red-400' : ''
                        }`}
                      />
                      {contactErrors.email && (
                        <p className="text-red-300 text-[11px] mt-0.5">{contactErrors.email}</p>
                      )}
                    </div>

                    {/* Comment or Message */}
                    <div>
                      <label className="block text-xs font-medium text-gray-200 mb-1">
                        Comment or Message <span className="text-emerald-400">*</span>
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={contactForm.message}
                        onChange={(e) =>
                          setContactForm({ ...contactForm, message: e.target.value })
                        }
                        className={`w-full px-3 py-2 text-sm bg-white text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400 ${
                          contactErrors.message ? 'ring-2 ring-red-400' : ''
                        }`}
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={contactSubmitting}
                        className="px-6 py-2.5 rounded-md text-xs font-bold text-white bg-[#729c48] hover:bg-[#63893e] transition-colors shadow-md cursor-pointer disabled:opacity-50"
                      >
                        {contactSubmitting ? 'Sending...' : 'Contact Us'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SUBSCRIBE TODAY SECTION */}
      <section id="subscribe-today" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Forest Road Photo */}
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-3xl shadow-lg aspect-[3/4] max-w-sm mx-auto">
                <img
                  src={IMAGES.autumnForestRoad}
                  alt="Path through autumn golden forest"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: Newsletter Signup Form */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2618]">
                  Subscribe Today
                </h2>
                <h4 className="text-base font-semibold text-gray-700 mt-2">
                  Newsletter Signup Form
                </h4>
              </div>

              {newsletterSuccess ? (
                <div className="bg-[#eef3eb] p-6 rounded-2xl border border-emerald-900/10 space-y-3 animate-fadeIn">
                  <div className="flex items-center gap-2 text-emerald-800 font-bold">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Subscription Confirmed!</span>
                  </div>
                  <p className="text-xs text-gray-600">
                    Thank you, <span className="font-semibold">{newsletterForm.firstName}</span>. You've been added to our monthly mindfulness reflections and wellness updates.
                  </p>
                  <button
                    onClick={handleResetNewsletter}
                    className="text-xs text-emerald-700 font-semibold underline hover:text-emerald-900 cursor-pointer"
                  >
                    Subscribe another email
                  </button>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-4 max-w-lg">
                  {/* Name * */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <input
                          type="text"
                          required
                          value={newsletterForm.firstName}
                          onChange={(e) =>
                            setNewsletterForm({ ...newsletterForm, firstName: e.target.value })
                          }
                          className="w-full px-3 py-2 text-sm bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                        <span className="text-[11px] text-gray-500 mt-0.5 block">First</span>
                      </div>
                      <div>
                        <input
                          type="text"
                          required
                          value={newsletterForm.lastName}
                          onChange={(e) =>
                            setNewsletterForm({ ...newsletterForm, lastName: e.target.value })
                          }
                          className="w-full px-3 py-2 text-sm bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                        <span className="text-[11px] text-gray-500 mt-0.5 block">Last</span>
                      </div>
                    </div>
                  </div>

                  {/* Email * */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={newsletterForm.email}
                      onChange={(e) =>
                        setNewsletterForm({ ...newsletterForm, email: e.target.value })
                      }
                      className="w-full px-3 py-2 text-sm bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                    {newsletterErrors.email && (
                      <p className="text-red-500 text-[11px] mt-0.5">{newsletterErrors.email}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={newsletterSubmitting}
                      className="px-6 py-2.5 rounded-md text-xs font-bold text-white bg-[#729c48] hover:bg-[#62893d] transition-colors shadow-sm cursor-pointer disabled:opacity-50"
                    >
                      {newsletterSubmitting ? 'Subscribing...' : 'Submit'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
