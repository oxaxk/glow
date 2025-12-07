import React, { useState, useRef } from 'react';

export default function SpecialsSection() {
  const prices = [
    {
      title: 'Maniküre & Naturnägel',
      badge: 'NATURNAGEL',
      badgeColor: 'bg-[#D7B8A3]',
      groups: [
        { label: 'Russische Maniküre – Säubern der Nägel', price: '10€' },
        { label: 'Maniküre Natur Gel', price: '35€' },
        { label: 'Maniküre mit Shellack', price: '40€' },
        { label: 'Maniküre Auffüllen', price: '30€' },
        { label: 'Maniküre mit Design', price: 'ab 40€' },
      ],
    },
    {
      title: 'Aufpreise & Extras',
      badge: 'AUFPREISE',
      badgeColor: 'bg-[#D7B8A3]',
      groups: [
        { label: 'Einfarbig', price: '5€' },
        { label: 'French', price: '5€' },
        { label: 'Design (je nach Zeitaufwand)', price: 'ab 5€' },
        { label: 'Steine (ab 7 Steinen)', price: '0,50€/Stk' },
        { label: 'Charms', price: 'ab 3€' },
      ],
    },
    {
      title: 'Neuset (Modellage)',
      badge: 'MODELLAGE',
      badgeColor: 'bg-[#D7B8A3]',
      groups: [
        { label: 'S', price: '39€' },
        { label: 'M', price: '49€' },
        { label: 'L', price: '59€' },
        { label: 'XL', price: '69€' },
      ],
    },
    {
      title: 'Auffüllen',
      badge: 'AUFFÜLLEN',
      badgeColor: 'bg-[#D7B8A3]',
      groups: [
        { label: 'S', price: '35€' },
        { label: 'M', price: '45€' },
        { label: 'L', price: '55€' },
        { label: 'XL', price: '65€' },
      ],
    },
    {
      title: 'Tooth Gems · Swarovski & Echtgold',
      badge: 'TOOTH GEMS',
      badgeColor: 'bg-[#D7B8A3]',
      groups: [
        { label: '1 Swarovski Crystal Stein rund', price: '39€' },
        { label: 'Jeder weitere Stein', price: '10€' },
        { label: 'Kristall Line (1 Zahn)', price: '59€' },
        { label: 'Swarovski Herz / Stern / etc.', price: '49€' },
        { label: 'Swarovski Schmetterling', price: '49€' },
        { label: 'Swarovski Blume', price: '59€' },
        { label: 'Echtgold-Steine', price: 'auf Anfrage' },
      ],
    },
    {
      title: 'Nail Designs',
      badge: 'DESIGNS',
      badgeColor: 'bg-[#D7B8A3]',
      groups: [
        { label: 'Basic French', price: '38€' },
        { label: 'A Color', price: '38€' },
        { label: 'Specials', price: '45–50€' },
      ],
    },
    {
      title: 'Russian Manicure Workshop',
      badge: 'WORKSHOP',
      badgeColor: 'bg-[#D7B8A3]',
      groups: [
        { label: 'Gruppenschulung (1 Tag)', price: '350€' },
        { label: 'Einzelschulung (1 Tag)', price: '450€' },
        { label: 'Inhalt: Deep Manicure, Bits-Technik, Naturnagelvorbereitung, Praxis', price: '' },
      ],
    },
    {
      title: 'Nail Art Workshop',
      badge: 'WORKSHOP',
      badgeColor: 'bg-[#D7B8A3]',
      groups: [
        { label: 'Gruppenschulung (1 Tag)', price: '250€' },
        { label: 'Einzelschulung (1 Tag)', price: '350€' },
        { label: 'Inhalt: French, Babyboomer, Blooming, 3D-Flowers, Chrome, Cat-Eye', price: '' },
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const lastScrollTime = useRef<number>(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + prices.length) % prices.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % prices.length);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const diffX = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diffX) > 50) {
      if (diffX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const now = Date.now();
    const timeDelta = now - lastScrollTime.current;

    // Nur reagieren, wenn horizontale Bewegung dominiert
    if (Math.abs(e.deltaX) > 20 && Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      // Rate-Limiting, damit ein Swipe nicht zig Slides weiter springt
      if (timeDelta < 400) return;

      if (e.deltaX > 0) {
        handleNext();
      } else {
        handlePrev();
      }

      lastScrollTime.current = now;
    }
  };

  return (
    <section id="prices" className="py-20 bg-[#FDF8F5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif', color: '#15110F' }}
          >
            Preise &amp; Leistungen
          </h2>
          <p
            className="text-sm md:text-base tracking-[0.22em] uppercase mb-4 text-[#7E6E61]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Glow Aesthetics &amp; Beauty · Regensburg
          </p>
          <p
            className="text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif', color: '#3A3129' }}
          >
            Alle Preise für Maniküre, Modellage, Nail Art, Tooth Gems &amp; Workshops – transparent
            &amp; übersichtlich.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onWheel={handleWheel}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {prices.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2 sm:px-4">
                  <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                    <div className="px-6 py-5 flex flex-col flex-1">
                      <div
                        className={`mb-3 w-fit ${item.badgeColor} text-white rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wide`}
                      >
                        {item.badge}
                      </div>

                      <h3
                        className="text-xl md:text-2xl font-bold mb-4 leading-snug break-words"
                        style={{ fontFamily: 'Cormorant Garamond, serif', color: '#15110F' }}
                      >
                        {item.title}
                      </h3>

                      <div className="mb-4">
                        {item.groups.map((g, i) => (
                          <div
                            key={i}
                            className={`py-1.5 ${i > 0 ? 'border-t border-gray-100' : ''}`}
                          >
                            {g.price ? (
                              <div
                                className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-4 text-base md:text-lg"
                                style={{ fontFamily: 'Inter, sans-serif', color: '#3A2A29' }}
                              >
                                <span>{g.label}</span>
                                <span className="whitespace-nowrap text-right">{g.price}</span>
                              </div>
                            ) : (
                              <p
                                className="text-sm leading-snug md:text-base md:leading-snug pr-4"
                                style={{ fontFamily: 'Inter, sans-serif', color: '#4B4641' }}
                              >
                                {g.label}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>

                      {item.subGroups && (
                        <div className="pt-4 mt-2 border-t border-gray-200">
                          <p
                            className="uppercase text-sm font-bold opacity-70 mb-2"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            {item.subTitle}
                          </p>

                          {item.subGroups.map((s, i) => (
                            <div
                              key={i}
                              className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-4 text-base md:text-lg mb-1"
                              style={{ fontFamily: 'Inter, sans-serif', color: '#3A2A29' }}
                            >
                              <span>{s.label}</span>
                              <span className="whitespace-nowrap text-right">{s.price}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={handlePrev}
              className="h-9 w-9 rounded-full border border-gray-300 flex items-center justify-center text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
            >
              ‹
            </button>

            <div className="flex items-center gap-2">
              {prices.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    idx === activeIndex ? 'bg-[#2A1F1F]' : 'bg-gray-300'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="h-9 w-9 rounded-full border border-gray-300 flex items-center justify-center text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
