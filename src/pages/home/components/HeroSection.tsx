import { useState, useEffect } from 'react';
import Button from '../../../components/base/Button';

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // Scrolling down & past 100px
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="bg-[#FDF7F2]/90 backdrop-blur-xl border-b border-[#E4D8CF] shadow-sm">
          <div className="max-w-6xl mx-auto px-6 py-3.5 md:py-4 flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="cursor-pointer">
              <span
                className="text-base md:text-lg font-semibold tracking-[0.32em] uppercase"
                style={{ fontFamily: 'Cormorant Garamond, serif', color: '#15110F', letterSpacing: '0.32em' }}
              >
                GLOW AESTHETICS
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#services"
                className="text-xs md:text-sm font-medium tracking-[0.22em] uppercase px-3 py-2 rounded-full hover:bg-[#E9D9CF] hover:text-[#15110F] transition-colors"
                style={{ color: '#2A1F1F' }}
              >
                Behandlungen
              </a>
              <a
                href="#about"
                className="text-xs md:text-sm font-medium tracking-[0.22em] uppercase px-3 py-2 rounded-full hover:bg-[#E9D9CF] hover:text-[#15110F] transition-colors"
                style={{ color: '#2A1F1F' }}
              >
                Studio
              </a>
              <a
                href="#prices"
                className="text-xs md:text-sm font-medium tracking-[0.22em] uppercase px-3 py-2 rounded-full hover:bg-[#E9D9CF] hover:text-[#15110F] transition-colors"
                style={{ color: '#2A1F1F' }}
              >
                Preise & Pakete
              </a>
              <a
                href="#contact"
                className="text-xs md:text-sm font-medium tracking-[0.22em] uppercase px-3 py-2 rounded-full hover:bg-[#E9D9CF] hover:text-[#15110F] transition-colors"
                style={{ color: '#2A1F1F' }}
              >
                Anfrage
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden w-8 h-8 flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i
                className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl`}
                style={{ color: '#2A1F1F' }}
              ></i>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-[#E5D8CC] px-6 pb-4 pt-3 bg-[#F5EDE7]/95">
              <div className="flex flex-col space-y-4">
                <a
                  href="#services"
                  className="text-sm font-medium tracking-[0.22em] uppercase px-1 py-1 rounded-full"
                  style={{ color: '#2E2A27' }}
                >
                  Behandlungen
                </a>
                <a
                  href="#about"
                  className="text-sm font-medium tracking-[0.22em] uppercase px-1 py-1 rounded-full"
                  style={{ color: '#2E2A27' }}
                >
                  Studio
                </a>
                <a
                  href="#prices"
                  className="text-sm font-medium tracking-[0.22em] uppercase px-1 py-1 rounded-full"
                  style={{ color: '#2E2A27' }}
                >
                  Preise & Pakete
                </a>
                <a
                  href="#contact"
                  className="text-sm font-medium tracking-[0.22em] uppercase px-1 py-1 rounded-full"
                  style={{ color: '#2E2A27' }}
                >
                  Anfrage
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Background – Video (mobile & desktop) mit softem Glow-Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Mobile video (< md) */}
        <video
          className="block md:hidden absolute inset-0 w-full h-full object-cover"
          src="/videos/hero-mobile.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        {/* Desktop video (>= md) */}
        <video
          className="hidden md:block absolute inset-0 w-full h-full object-cover"
          src="/videos/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        {/* Leichter Creme-Overlay im Glow-Stil */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FDF7F2]/75 via-[#F8F1EC]/60 to-[#FEFCFA]/75" />
      </div>
      
      <div className="relative z-10 flex-1 flex items-center justify-center w-full px-4 sm:px-6 pb-24 md:pb-16 pt-32">
        <div className="w-full max-w-5xl text-center mx-auto md:text-left md:mx-0">
          <div className="bg-[#F7EBE1]/95 rounded-[32px] px-6 py-10 md:px-12 md:py-14 shadow-[0_28px_60px_rgba(0,0,0,0.04)] border border-[#E4D8CF]">
            <p
              className="text-[0.7rem] md:text-xs tracking-[0.32em] uppercase mb-5 text-[#8C7B6A]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              NAILS · AESTHETICS · BEAUTY
            </p>

            <h1
              className="text-[2.5rem] md:text-[4rem] leading-[0.9] font-bold mb-6 text-[#15110F]"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              GLOW AESTHETICS &amp; BEAUTY
              <span
                className="block mt-3 text-[0.7rem] md:text-xs tracking-[0.4em] uppercase text-[#7E6E61]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                REGENSBURG
              </span>
            </h1>

            <p
              className="text-base md:text-lg mb-8 md:mb-10 text-[#3A3129] max-w-3xl mx-auto md:mx-0 leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Nail- &amp; Beauty-Studio im Herzen von Regensburg – spezialisiert auf Russian
              Manicure, moderne Nail-Art-Designs, Tooth Gems und ausgewählte 1-Tages-Workshops.
            </p>

            <div className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-start items-center">
              <Button
                href="#workshops"
                size="lg"
                className="text-sm md:text-base px-8 py-3.5 rounded-full bg-[#D7B8A3] text-[#15110F] hover:bg-[#C5A390]"
              >
                <i className="ri-brush-line mr-3 text-xl md:text-2xl"></i>
                Nail Workshops ansehen
              </Button>

              <Button
                href="#contact"
                size="lg"
                className="text-sm md:text-base px-8 py-3.5 rounded-full border-[#15110F] bg-[#E7D6C8] text-[#15110F] hover:bg-[#15110F] hover:text-white"
              >
                <i className="ri-whatsapp-line mr-3 text-xl md:text-2xl"></i>
                Termin &amp; Anfrage stellen
              </Button>
            </div>

            <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[#E4D8CF] pt-8 md:pt-10">
              <div className="text-left">
                <p
                  className="text-xs tracking-[0.22em] uppercase mb-2 text-[#8C7B6A]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Studio
                </p>
                <p
                  className="text-sm md:text-base leading-relaxed text-[#3A3129]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Präzise Russian Manicure, Naturnägel, Babyboomer, Chrome &amp; flexible Designs.
                </p>
              </div>

              <div className="text-left">
                <p
                  className="text-xs tracking-[0.22em] uppercase mb-2 text-[#8C7B6A]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Workshops
                </p>
                <p
                  className="text-sm md:text-base leading-relaxed text-[#3A3129]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  1-tägige Russian Manicure &amp; Nail-Art-Workshops inkl. Zertifikat &amp;
                  Goodie-Bag.
                </p>
              </div>

              <div className="text-left">
                <p
                  className="text-xs tracking-[0.22em] uppercase mb-2 text-[#8C7B6A]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Tooth Gems
                </p>
                <p
                  className="text-sm md:text-base leading-relaxed text-[#3A3129]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Swarovski Tooth Gems &amp; Echtgold-Varianten – präzise gesetzt mit Aftercare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
