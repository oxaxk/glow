import { useEffect, useState } from 'react';

const aboutImages = [
  {
    src: '/images/about/1.png',
    alt: 'Behandlungsplatz im Glow Aesthetics & Beauty Studio in Regensburg',
  },
  {
    src: '/images/about/2.png',
    alt: 'Detailaufnahme einer Russian Manicure im Studio',
  },
  {
    src: '/images/about/3.png',
    alt: 'Nail-Art Farben und Tools im Glow Aesthetics & Beauty Studio',
  },
  {
    src: '/images/about/4.png',
    alt: 'Kundin während einer ruhigen Behandlungssession im Studio',
  },
  {
    src: '/images/about/5.png',
    alt: 'Workshop-Situation mit Modell und Trainerin im Studio',
  },
];

export default function AboutSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % aboutImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-20 bg-[#FDF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text links (Desktop), oben (Mobile) */}
          <div className="order-1 lg:order-1">
            <p
              className="text-xs tracking-[0.22em] uppercase mb-4 text-[#8C7B6A] text-center lg:text-left"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Über uns
            </p>
            <h2
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-center lg:text-left"
              style={{ fontFamily: 'Cormorant Garamond, serif', color: '#15110F' }}
            >
              Wer wir sind
              <span
                className="block mt-2 text-sm md:text-base tracking-[0.18em] uppercase text-[#7E6E61]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Glow Aesthetics &amp; Beauty · Regensburg
              </span>
            </h2>

            <div
              className="space-y-5 text-sm md:text-base leading-relaxed text-[#3A3129] text-center lg:text-left"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <p>
                Bei uns steht die 1:1 Betreuung im Vordergrund: ein ruhiger Platz, feste Termine ohne
                Durchschleusen und genug Zeit, damit jede Behandlung sauber vorbereitet und sauber
                beendet wird.
              </p>
              <p>
                Wir arbeiten mit klaren Abläufen – von der Vorbereitung der Nagelplatte bis zum Finish.
                Werkzeuge, Fräseraufsätze und Materialien sind strukturiert, damit Russian Manicure,
                dezente Designs und Haltbarkeit zusammenpassen.
              </p>
              <p>
                Viele Kundinnen kommen regelmäßig wieder: für Auffülltermine, kleine Design-Updates
                oder um neue Behandlungen auszuprobieren. Parallel bauen wir das Workshop-Angebot im
                Studio Schritt für Schritt aus.
              </p>
            </div>

            <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col items-center text-center md:text-left md:items-center">
                <div className="flex items-center justify-center mb-3">
                  <i className="ri-hand-heart-line text-2xl" style={{ color: '#15110F' }} />
                </div>
                <h3
                  className="text-lg md:text-2xl font-semibold mb-1"
                  style={{ fontFamily: 'Cormorant Garamond, serif', color: '#15110F' }}
                >
                  Russian Manicure &amp; Naturnägel
                </h3>
                <p
                  className="text-sm leading-relaxed text-[#5C4A45]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Saubere Cuticle-Arbeit, präzise Formen und langlebige Ergebnisse für Alltag &amp;
                  Events.
                </p>
              </div>

              <div className="flex flex-col items-center text-center md:text-left md:items-center">
                <div className="flex items-center justify-center mb-3">
                  <i className="ri-brush-line text-2xl" style={{ color: '#15110F' }} />
                </div>
                <h3
                  className="text-lg md:text-2xl font-semibold mb-1"
                  style={{ fontFamily: 'Cormorant Garamond, serif', color: '#15110F' }}
                >
                  Workshops &amp; Tooth Gems
                </h3>
                <p
                  className="text-sm leading-relaxed text-[#5C4A45]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  1-Tages-Schulungen, klare Abläufe und präzise gesetzte Swarovski &amp;
                  Echtgold-Tooth Gems.
                </p>
              </div>
            </div>
          </div>

          {/* Bild-Karussell & Trust-Card rechts (Desktop), unten (Mobile) */}
          <div className="order-2 lg:order-2 flex flex-col justify-center items-center lg:items-center lg:pl-6 mt-10 lg:mt-0">
            <div className="relative rounded-[32px] overflow-hidden shadow-[0_26px_70px_rgba(0,0,0,0.12)] bg-white mb-5 lg:mb-7 w-full max-w-md lg:max-w-lg h-[380px] md:h-[460px]">
              {aboutImages.map((image, index) => (
                <img
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ease-in-out ${
                    index === activeIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>

            <div className="flex justify-center gap-2 mb-3">
              {aboutImages.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors border ${
                    index === activeIndex ? 'bg-[#15110F] border-[#15110F]' : 'bg-[#E4D8CF] border-[#D2C4B8]'
                  }`}
                  aria-label={`Bild ${index + 1} anzeigen`}
                />
              ))}
            </div>

            <div className="mt-1 w-full max-w-md lg:max-w-lg flex justify-center">
              <div
                className="bg-white rounded-2xl px-5 py-4 shadow-[0_16px_40px_rgba(0,0,0,0.06)] border w-full flex items-center gap-3"
                style={{ borderColor: '#E4D8CF' }}
              >
                <div className="w-10 h-10 rounded-full bg-[#F7EBE1] flex items-center justify-center">
                  <i className="ri-map-pin-line text-lg" style={{ color: '#15110F' }} />
                </div>
                <div>
                  <div
                    className="text-sm font-semibold mb-0.5"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#15110F' }}
                  >
                    Zentral am Neupfarrplatz
                  </div>
                  <div
                    className="text-xs text-[#5C4A45]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Residenzstraße 3 · Regensburg – gut erreichbar mit ÖPNV &amp; Parkhäusern.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
