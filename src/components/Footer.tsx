import React from 'react';
import { PageId } from '../types';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { SITE_INFO } from '../data';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer id="site-footer" className="bg-[#121c11] text-[#b8c7b4] border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Brand Logo & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#5d8350] flex items-center justify-center text-white shadow-sm">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
                  <path d="M12 12L2.1 7.1" />
                  <path d="M12 12v10" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white tracking-wide">InnerBloom</span>
            </div>
            <p className="text-sm text-[#94a890] leading-relaxed pr-2">
              Tell people about what you've been doing, your experience and many more awesome things that will entice them further to know you more.
            </p>
            <div className="flex items-center gap-4 text-xs text-[#7e967a] pt-1">
              <button
                onClick={() => {
                  onNavigate('home');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-emerald-300 transition-colors cursor-pointer"
              >
                Home
              </button>
              <span>•</span>
              <button
                onClick={() => {
                  onNavigate('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-emerald-300 transition-colors cursor-pointer"
              >
                About
              </button>
              <span>•</span>
              <button
                onClick={() => {
                  onNavigate('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-emerald-300 transition-colors cursor-pointer"
              >
                Services
              </button>
            </div>
          </div>

          {/* Column 2: Contact Info */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-white tracking-wider">Contact Info</h4>
            <div className="space-y-2.5 text-sm text-[#94a890]">
              <p className="leading-snug">{SITE_INFO.address}</p>
              <p>
                <a
                  href={`tel:${SITE_INFO.phoneRaw}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE_INFO.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${SITE_INFO.email}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE_INFO.email}
                </a>
              </p>
            </div>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-white tracking-wider">Service</h4>
            <ul className="space-y-2 text-sm text-[#94a890]">
              <li>
                <button
                  onClick={() => {
                    onNavigate('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Fertilization Heading
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Shrub Planting
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Waste Disposal
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Garden Care
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Grass Cutting
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Get In Touch */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-white tracking-wider">Get In Touch</h4>
            <p className="text-sm text-[#94a890]">
              Follow our community updates and mindfulness practices.
            </p>
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="#facebook"
                id="footer-social-fb"
                aria-label="Facebook"
                onClick={(e) => e.preventDefault()}
                className="w-8 h-8 rounded-sm bg-[#5d8350] hover:bg-[#6e995f] text-white flex items-center justify-center transition-colors shadow-sm"
              >
                <Facebook className="w-4 h-4 fill-white" />
              </a>
              <a
                href="#twitter"
                id="footer-social-tw"
                aria-label="Twitter"
                onClick={(e) => e.preventDefault()}
                className="w-8 h-8 rounded-sm bg-[#5d8350] hover:bg-[#6e995f] text-white flex items-center justify-center transition-colors shadow-sm"
              >
                <Twitter className="w-4 h-4 fill-white" />
              </a>
              <a
                href="#instagram"
                id="footer-social-ig"
                aria-label="Instagram"
                onClick={(e) => e.preventDefault()}
                className="w-8 h-8 rounded-sm bg-[#5d8350] hover:bg-[#6e995f] text-white flex items-center justify-center transition-colors shadow-sm"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-14 pt-8 border-t border-emerald-900/30 flex flex-col sm:flex-row items-center justify-between text-xs text-[#72856e] gap-3">
          <p>Copyright © 2024 Innerbloom</p>
          <p>Powered by Innerbloom</p>
        </div>
      </div>
    </footer>
  );
};
