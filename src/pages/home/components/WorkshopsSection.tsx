import React from 'react';

const WorkshopsSection: React.FC = () => {
  return (
    <section id="workshops" className="py-20 bg-[#FDF8F5]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-xs tracking-[0.22em] uppercase mb-4 text-[#7E6E61]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Workshops
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
            style={{ fontFamily: 'Cormorant Garamond, serif', color: '#15110F' }}
          >
            Nail Workshops bei Glow Aesthetics
          </h2>
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-[#3A3129]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Strukturiertes Schulungskonzept für Russian Manicure, Nail Art und einen
            2-tägigen Basic-Kurs – inkl. Zertifikat, Goodie-Bag und Fokus auf Praxis.
          </p>
        </div>

        {/* Workshops Grid */}
        <div className="grid gap-8 md:gap-10 md:grid-cols-3">
          {/* Russian Manicure Workshop */}
          <article className="bg-white rounded-3xl border border-[#E4D8CF] shadow-[0_18px_60px_rgba(0,0,0,0.04)] px-6 py-7 md:px-7 md:py-8 flex flex-col items-center text-center md:items-start md:text-left">
            <div className="mb-4">
              <span
                className="inline-flex items-center px-4 py-1.5 rounded-full text-[0.7rem] tracking-[0.24em] uppercase bg-[#D7B8A3]/90 text-[#15110F]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Manicure · 1-tägig
              </span>
            </div>
            <h3
              className="text-2xl md:text-3xl font-bold mb-4 leading-snug"
              style={{ fontFamily: 'Cormorant Garamond, serif', color: '#15110F' }}
            >
              Russian Manicure Workshop
            </h3>

            <div className="grid gap-6 md:grid-cols-2 mb-6">
              <div>
                <h4
                  className="text-xs tracking-[0.22em] uppercase mb-2 text-[#7E6E61] text-center md:text-left"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Inhalt
                </h4>
                <ul
                  className="space-y-1.5 text-sm text-[#3A3129] text-center md:text-left"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <li>Deep Manicure mit Maniküre-Bits</li>
                  <li>Entfernen der (unsichtbaren) Nagelhaut</li>
                  <li>Naturnagel-Vorbereitung</li>
                  <li>Präziser Farbauftrag</li>
                </ul>
              </div>
              <div>
                <h4
                  className="text-xs tracking-[0.22em] uppercase mb-2 text-[#7E6E61] text-center md:text-left"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Inklusive
                </h4>
                <ul
                  className="space-y-1.5 text-sm text-[#3A3129] text-center md:text-left"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <li>Zertifikat</li>
                  <li>Goodie-Bag</li>
                </ul>
              </div>
            </div>

            <div className="mt-auto flex flex-col items-center justify-center md:flex-row md:items-end md:justify-between w-full">
              <div className="text-center md:text-left">
                <p
                  className="text-xs tracking-[0.22em] uppercase text-[#7E6E61] mb-1"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Gruppenschulung
                </p>
                <p
                  className="text-3xl md:text-4xl font-bold text-[#15110F]"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  350€
                </p>
                <p
                  className="text-xs mt-1 text-[#8A7A6F]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Einzelschulung 450€
                </p>
              </div>
            </div>
          </article>

          {/* Nail Art Workshop */}
          <article className="bg-white rounded-3xl border border-[#E4D8CF] shadow-[0_18px_60px_rgba(0,0,0,0.04)] px-6 py-7 md:px-7 md:py-8 flex flex-col items-center text-center md:items-start md:text-left">
            <div className="mb-4">
              <span
                className="inline-flex items-center px-4 py-1.5 rounded-full text-[0.7rem] tracking-[0.24em] uppercase bg-[#D7B8A3]/90 text-[#15110F]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Nail Art · 1-tägig
              </span>
            </div>
            <h3
              className="text-2xl md:text-3xl font-bold mb-4 leading-snug"
              style={{ fontFamily: 'Cormorant Garamond, serif', color: '#15110F' }}
            >
              Nail Art Workshop
            </h3>

            <div className="grid gap-6 md:grid-cols-2 mb-6">
              <div>
                <h4
                  className="text-xs tracking-[0.22em] uppercase mb-2 text-[#7E6E61] text-center md:text-left"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Inhalt
                </h4>
                <ul
                  className="space-y-1.5 text-sm text-[#3A3129] text-center md:text-left"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <li>French</li>
                  <li>Babyboomer (2 Arten)</li>
                  <li>Blooming Design</li>
                  <li>3D Flower</li>
                  <li>Chrome</li>
                  <li>Cat-Eye</li>
                </ul>
              </div>
              <div>
                <h4
                  className="text-xs tracking-[0.22em] uppercase mb-2 text-[#7E6E61] text-center md:text-left"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Inklusive
                </h4>
                <ul
                  className="space-y-1.5 text-sm text-[#3A3129] text-center md:text-left"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <li>Zertifikat</li>
                  <li>Goodie-Bag</li>
                </ul>
              </div>
            </div>

            <div className="mt-auto flex flex-col items-center justify-center md:flex-row md:items-end md:justify-between w-full">
              <div className="text-center md:text-left">
                <p
                  className="text-xs tracking-[0.22em] uppercase text-[#7E6E61] mb-1"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Gruppenschulung
                </p>
                <p
                  className="text-3xl md:text-4xl font-bold text-[#15110F]"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  250€
                </p>
                <p
                  className="text-xs mt-1 text-[#8A7A6F]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Einzelschulung 350€
                </p>
              </div>
            </div>
          </article>

          {/* Basic Schulung – Become a Nail Artist */}
          <article className="bg-white rounded-3xl border border-[#E4D8CF] shadow-[0_18px_60px_rgba(0,0,0,0.04)] px-6 py-7 md:px-7 md:py-8 flex flex-col items-center text-center md:items-start md:text-left">
            <div className="mb-4">
              <span
                className="inline-flex items-center px-4 py-1.5 rounded-full text-[0.7rem] tracking-[0.24em] uppercase bg-[#D7B8A3]/90 text-[#15110F]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Basic Schulung · 2-tägig
              </span>
            </div>
            <h3
              className="text-2xl md:text-3xl font-bold mb-4 leading-snug"
              style={{ fontFamily: 'Cormorant Garamond, serif', color: '#15110F' }}
            >
              Become a Nail Artist – Basic
            </h3>

            <div className="grid gap-6 md:grid-cols-2 mb-6">
              <div>
                <h4
                  className="text-xs tracking-[0.22em] uppercase mb-2 text-[#7E6E61] text-center md:text-left"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Inhalt
                </h4>
                <ul
                  className="space-y-1.5 text-sm text-[#3A3129] text-center md:text-left"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <li>Theorie &amp; Praxis</li>
                  <li>Grundlagen</li>
                  <li>Hygiene</li>
                  <li>Anatomie</li>
                  <li>Nagelformen</li>
                  <li>Produkt-Erklärung</li>
                  <li>Social Media Tipps</li>
                </ul>
              </div>
              <div>
                <h4
                  className="text-xs tracking-[0.22em] uppercase mb-2 text-[#7E6E61] text-center md:text-left"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Inklusive
                </h4>
                <ul
                  className="space-y-1.5 text-sm text-[#3A3129] text-center md:text-left"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <li>Zertifikat</li>
                  <li>Goodie-Bag</li>
                  <li>Nachbetreuung</li>
                </ul>
              </div>
            </div>

            <div className="mt-auto flex flex-col items-center justify-center md:flex-row md:items-end md:justify-between w-full">
              <div className="text-center md:text-left">
                <p
                  className="text-xs tracking-[0.22em] uppercase text-[#7E6E61] mb-1"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Gruppenschulung
                </p>
                <p
                  className="text-3xl md:text-4xl font-bold text-[#15110F]"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  599€
                </p>
                <p
                  className="text-xs mt-1 text-[#8A7A6F]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Einzelschulung 799€
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default WorkshopsSection;