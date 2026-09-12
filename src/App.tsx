import { useState } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ServicesPage } from './components/ServicesPage';
import { BookingModal } from './components/BookingModal';
import { ElementorTemplateModal } from './components/ElementorTemplateModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
  const [elementorModalOpen, setElementorModalOpen] = useState<boolean>(false);

  const handleNavigate = (page: PageId) => {
    if (page === 'contact') {
      if (currentPage !== 'home') {
        setCurrentPage('home');
        setTimeout(() => {
          const contactEl = document.getElementById('contact-section');
          if (contactEl) {
            contactEl.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const contactEl = document.getElementById('contact-section');
        if (contactEl) {
          contactEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
      return;
    }

    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fbfbf9] text-gray-800 font-sans selection:bg-[#8bb47f] selection:text-white">
      {/* Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={() => setBookingModalOpen(true)}
      />

      {/* Main Content Pages */}
      <main className="flex-1 w-full">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenBooking={() => setBookingModalOpen(true)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenBooking={() => setBookingModalOpen(true)}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenBooking={() => setBookingModalOpen(true)}
          />
        )}

        {currentPage === 'blog' && (
          <section className="pt-32 pb-24 max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center space-y-3 mb-12">
              <span className="text-xs font-bold tracking-widest text-[#d97736] uppercase">
                INNERBLOOM JOURNAL
              </span>
              <h1 className="text-4xl font-bold text-[#1e2f1d]">Insights & Reflections</h1>
              <p className="text-sm text-gray-600 max-w-lg mx-auto">
                Articles, somatic grounding rituals, and therapeutic resources for women's wellness.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Somatic Experiencing 101: Reconnecting With Your Body',
                  date: 'September 2024',
                  excerpt: 'How listening to felt sense signals can alleviate chronic hypervigilance and restore safety.',
                  image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80',
                },
                {
                  title: 'Healing From Within: Breaking Generational Patterns',
                  date: 'August 2024',
                  excerpt: 'Understanding trauma as an embodied adaptive response rather than a personal failing.',
                  image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=600&q=80',
                },
                {
                  title: 'Breathwork Practices For Rapid Nervous System Reset',
                  date: 'July 2024',
                  excerpt: 'Three simple vagal nerve toning exercises you can practice in less than five minutes.',
                  image: 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=600&q=80',
                },
              ].map((post, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-emerald-900/5 flex flex-col"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-semibold text-emerald-700">{post.date}</span>
                      <h3 className="text-base font-bold text-gray-900 mt-1">{post.title}</h3>
                      <p className="text-xs text-gray-600 mt-2 leading-relaxed">{post.excerpt}</p>
                    </div>
                    <div className="pt-3">
                      <button
                        onClick={() => handleNavigate('home')}
                        className="text-xs font-semibold text-[#5e8252] hover:underline"
                      >
                        Read Full Story &rarr;
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-10">
              <button
                onClick={() => handleNavigate('home')}
                className="px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-[#5e8252] hover:bg-[#507045] shadow-sm transition-all"
              >
                Back to Home
              </button>
            </div>
          </section>
        )}
      </main>

      {/* Site Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />

      {/* Elementor Native JSON Export Modal */}
      <ElementorTemplateModal
        isOpen={elementorModalOpen}
        onClose={() => setElementorModalOpen(false)}
      />
    </div>
  );
}
