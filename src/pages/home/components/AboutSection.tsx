export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#FDF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text links (Desktop), oben (Mobile) */}
          <div className="order-1 lg:order-1">
            <p
              className="text-xs tracking-[0.22em] uppercase mb-4 text-[#8C7B6A]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Studio
            </p>
            <h2
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              style={{ fontFamily: 'Cormorant Garamond, serif', color: '#15110F' }}
            >
              Glow Aesthetics &amp; Beauty
              <span
                className="block mt-2 text-sm md:text-base tracking-[0.18em] uppercase text-[#7E6E61]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Nails · Aesthetics · Beauty · Regensburg
              </span>
            </h2>

            <div
              className="space-y-5 text-sm md:text-base leading-relaxed text-[#3A3129]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <p>
                Glow Aesthetics &amp; Beauty ist ein modernes Nail- &amp; Beauty-Studio direkt in
                der Regensburger Innenstadt – mit Fokus auf Russian Manicure, präzise Nail-Art
                Designs und Tooth Gems.
              </p>
              <p>
                Statt überladenen Full-Designs liegt der Fokus auf sauberen Formen, klaren Lines
                und hochwertigen Materialien. Naturnägel, Babyboomer, Chrome, French &amp; Specials
                werden so gestaltet, dass sie zu deiner Handform und deinem Alltag passen.
              </p>
              <p>
                Neben dem Studio-Betrieb gibt es eine wachsende Workshop-Pipeline: 1-tägige Russian
                Manicure Workshops und Nail-Art-Workshops inkl. Zertifikat &amp; Goodie-Bag – für
                Einsteigerinnen und fortgeschrittene Nail Artists.
              </p>
            </div>

            <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center mt-0.5">
                  <i className="ri-hand-heart-line text-2xl" style={{ color: '#15110F' }} />
                </div>
                <div>
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
              </div>

              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center mt-0.5">
                  <i className="ri-brush-line text-2xl" style={{ color: '#15110F' }} />
                </div>
                <div>
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
          </div>

          {/* Bild & Trust-Card rechts (Desktop), unten (Mobile) */}
          <div className="order-2 lg:order-2 flex flex-col justify-center items-center lg:items-center lg:pl-6 mt-10 lg:mt-0">
            <div className="rounded-[32px] overflow-hidden shadow-[0_26px_70px_rgba(0,0,0,0.12)] bg-white mb-5 lg:mb-7 w-full max-w-md lg:max-w-lg">
              <img
                src="/images/about/glow-studio.jpg"
                alt="Glow Aesthetics &amp; Beauty Studio in Regensburg"
                className="w-full h-[380px] md:h-[460px] object-cover object-center"
              />
            </div>

            <div className="mt-4 w-full max-w-md lg:max-w-lg flex justify-center">
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
