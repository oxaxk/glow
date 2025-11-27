import { useState } from 'react';
import Button from '../base/Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FDF8F5]/90 backdrop-blur-xl border-b border-[#E4DAD4] shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LEFT — LOGO */}
        <a href="/" className="cursor-pointer">
          <span
            className="text-base md:text-lg font-semibold tracking-[0.32em] uppercase"
            style={{ fontFamily: 'Cormorant Garamond, serif', color: '#15110F', letterSpacing: '0.32em' }}
          >
            GLOW AESTHETICS
          </span>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center space-x-5">
          <a
            href="/#hero"
            className="text-xs md:text-sm font-medium tracking-[0.22em] uppercase px-3 py-2 rounded-full hover:bg-[#E9D9CF] hover:text-[#15110F] transition-colors"
            style={{ color: '#2A1F1F' }}
          >
            Start
          </a>
          <a
            href="/#services"
            className="text-xs md:text-sm font-medium tracking-[0.22em] uppercase px-3 py-2 rounded-full hover:bg-[#E9D9CF] hover:text-[#15110F] transition-colors"
            style={{ color: '#2A1F1F' }}
          >
            Behandlungen
          </a>
          <a
            href="/#workshops"
            className="text-xs md:text-sm font-medium tracking-[0.22em] uppercase px-3 py-2 rounded-full hover:bg-[#E9D9CF] hover:text-[#15110F] transition-colors"
            style={{ color: '#2A1F1F' }}
          >
            Workshops
          </a>
          <a
            href="/#prices"
            className="text-xs md:text-sm font-medium tracking-[0.22em] uppercase px-3 py-2 rounded-full hover:bg-[#E9D9CF] hover:text-[#15110F] transition-colors"
            style={{ color: '#2A1F1F' }}
          >
            Preise &amp; Pakete
          </a>
          <a
            href="/#contact"
            className="text-xs md:text-sm font-medium tracking-[0.22em] uppercase px-3 py-2 rounded-full hover:bg-[#E9D9CF] hover:text-[#15110F] transition-colors"
            style={{ color: '#2A1F1F' }}
          >
            Anfrage
          </a>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden w-9 h-9 flex items-center justify-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-3xl`} style={{ color: '#15110F' }}></i>
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#FDF8F5]/98 backdrop-blur-xl border-t border-[#E4DAD4] px-6 py-6 flex flex-col space-y-4">
          <a
            href="/#hero"
            className="text-sm font-medium tracking-[0.22em] uppercase"
            style={{ color: '#2A1F1F' }}
          >
            Start
          </a>
          <a
            href="/#services"
            className="text-sm font-medium tracking-[0.22em] uppercase"
            style={{ color: '#2A1F1F' }}
          >
            Behandlungen
          </a>
          <a
            href="/#workshops"
            className="text-sm font-medium tracking-[0.22em] uppercase"
            style={{ color: '#2A1F1F' }}
          >
            Workshops
          </a>
          <a
            href="/#prices"
            className="text-sm font-medium tracking-[0.22em] uppercase"
            style={{ color: '#2A1F1F' }}
          >
            Preise &amp; Pakete
          </a>
          <a
            href="/#contact"
            className="text-sm font-medium tracking-[0.22em] uppercase"
            style={{ color: '#2A1F1F' }}
          >
            Anfrage
          </a>
        </div>
      )}
    </header>
  );
}
