import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { Menu, X, Phone, Code2 } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
  onOpenElementorModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenBooking,
  onOpenElementorModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#152014]/95 backdrop-blur-md shadow-md py-3'
          : 'bg-gradient-to-b from-black/60 via-black/25 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo Box */}
        <button
          id="brand-logo-btn"
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 bg-white/95 hover:bg-white text-gray-900 px-3.5 py-2 rounded-md shadow-sm border border-gray-200 transition-all group text-left cursor-pointer"
          title="InnerBloom Home"
        >
          {/* Logo emblem */}
          <div className="w-9 h-9 rounded-md bg-[#eef5ee] flex items-center justify-center border border-emerald-200 shrink-0">
            <svg
              className="w-6 h-6 text-[#497040] group-hover:scale-105 transition-transform"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 40C24 40 24 24 24 20M24 20C24 16 18 10 12 12C6 14 10 24 24 20ZM24 20C24 16 30 10 36 12C42 14 38 24 24 20ZM24 20C24 14 20 6 24 4C28 6 24 14 24 20Z"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="16" cy="18" r="2" fill="#588550" />
              <circle cx="32" cy="18" r="2" fill="#588550" />
              <circle cx="24" cy="10" r="2" fill="#3c6034" />
            </svg>
          </div>
          <div>
            <div className="text-xs tracking-[0.2em] font-semibold text-[#1e2f1d] leading-none uppercase">
              InnerBloom
            </div>
            <div className="text-[9px] tracking-[0.15em] text-gray-500 uppercase mt-0.5 font-medium">
              Somatic Psychotherapy
            </div>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav" className="hidden md:flex items-center space-x-7 lg:space-x-9">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm tracking-wide transition-colors font-medium relative py-1 cursor-pointer ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-gray-200 hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8bb47f] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Actions: Elementor JSON preview & Book A Call CTA */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Elementor template button */}
          <button
            id="open-elementor-template-btn"
            onClick={onOpenElementorModal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-emerald-200/90 hover:text-emerald-100 bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-500/30 transition-all cursor-pointer"
            title="View Native Elementor JSON Templates"
          >
            <Code2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Elementor JSON</span>
          </button>

          {/* Book A Call CTA Button */}
          <button
            id="book-a-call-nav-btn"
            onClick={onOpenBooking}
            className="px-5 py-2 rounded-full text-xs tracking-wider font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/60 hover:border-white transition-all shadow-sm cursor-pointer active:scale-95"
          >
            Book A Call
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            id="mobile-elementor-btn"
            onClick={onOpenElementorModal}
            className="p-2 text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 rounded-full"
            aria-label="Elementor template"
          >
            <Code2 className="w-4 h-4" />
          </button>
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="sm:hidden bg-[#152014]/98 border-b border-emerald-900/40 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 animate-fadeIn"
        >
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                  currentPage === item.id
                    ? 'bg-emerald-900/50 text-white font-semibold'
                    : 'text-gray-200 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-emerald-900/40 flex flex-col gap-2.5">
            <button
              id="mobile-book-a-call-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 rounded-full text-center text-xs tracking-wider font-semibold text-white bg-[#5e8252] hover:bg-[#507045] transition-colors"
            >
              Book A Call
            </button>
            <div className="flex items-center justify-center gap-2 text-xs text-emerald-200/80 py-1">
              <Phone className="w-3.5 h-3.5" />
              <span>113 334 433 221</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
