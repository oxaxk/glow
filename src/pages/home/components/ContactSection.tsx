export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-[#FDF8F5]">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-4xl md:text-5xl font-bold mb-3 text-center"
          style={{ fontFamily: 'Cormorant Garamond, serif', color: '#15110F' }}
        >
          Kontakt &amp; Termin
        </h2>

        <p
          className="text-sm md:text-base tracking-[0.22em] uppercase mb-4 text-center text-[#7E6E61]"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Glow Aesthetics &amp; Beauty · Regensburg
        </p>

        <p
          className="text-lg md:text-xl mb-10 text-center text-[#3A3129] max-w-3xl mx-auto leading-relaxed"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Für Termine, Nail-Sets, Tooth Gems oder Workshops kannst du dich am schnellsten über WhatsApp
          oder direkt über dieses Formular melden.
        </p>

        <div className="mt-4 grid gap-10 md:grid-cols-[1.05fr,1.15fr] items-start">
          {/* Linke Infospalte */}
          <div className="space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
            <div
              className="inline-flex items-center rounded-full bg-[#D7B8A3]/90 px-4 py-2 text-sm font-medium"
              style={{ fontFamily: 'Inter, sans-serif', color: '#15110F' }}
            >
              <i className="ri-whatsapp-line mr-2 text-base" />
              Schnellste Antwort über WhatsApp
            </div>

            <div className="space-y-3">
              <h3
                className="text-2xl md:text-3xl font-bold"
                style={{ fontFamily: 'Cormorant Garamond, serif', color: '#15110F' }}
              >
                So erreichst du Glow Aesthetics &amp; Beauty
              </h3>
              <p
                className="text-base leading-relaxed text-[#5C4A45]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Schreib einfach über WhatsApp oder Instagram mit deinem Wunsch (Nail-Set, Tooth Gems oder
                Workshop). Über das Formular kannst du zusätzlich Details und Wunschtermin angeben – wir
                melden uns mit passenden Vorschlägen.
              </p>
            </div>

            <div
              className="rounded-2xl bg-white border border-[#E4D8CF] px-4 py-4 text-sm md:text-base space-y-1"
              style={{ fontFamily: 'Inter, sans-serif', color: '#3A3129' }}
            >
              <p className="font-semibold">Adresse</p>
              <p>Glow Aesthetics &amp; Beauty · Residenzstraße 3 · 93047 Regensburg (Neupfarrplatz)</p>
              <p className="pt-2 font-semibold">Öffnungszeiten</p>
              <p>Mo–Fr: 10:00–18:30 · Sa: 10:00–19:00</p>
            </div>

            <div className="pt-2 flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="https://wa.me/"
                className="inline-flex items-center px-6 py-3 font-semibold text-sm md:text-base rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
                style={{ backgroundColor: '#15110F', color: '#FFFFFF', fontFamily: 'Inter, sans-serif' }}
              >
                <i className="ri-whatsapp-line mr-2 text-lg" />
                WhatsApp schreiben
              </a>
              <a
                href="https://instagram.com/glowaesthetics.beauty"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 font-semibold text-sm md:text-base rounded-full border border-[#15110F] text-[#15110F] transition-all duration-300 hover:bg-[#15110F] hover:text-white hover:border-white"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <i className="ri-instagram-line mr-2 text-lg" />
                Instagram Profil
              </a>
            </div>
          </div>

          {/* Rechte Formular-Karte */}
          <div className="bg-white rounded-3xl shadow-[0_18px_60px_rgba(0,0,0,0.06)] border border-[#F0E2D9] px-6 py-7 md:px-7 md:py-8">
            <form className="grid gap-6 md:grid-cols-2 text-center md:text-left">
              <div className="md:col-span-2">
                <p
                  className="text-sm text-gray-600"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Alternativ kannst du hier dein Anliegen eintragen. Bitte nenne kurz gewünschte
                  Leistung, Länge/Form (falls bekannt) und ggf. Wunschdatum – wir melden uns mit
                  Rückfragen oder Terminvorschlägen.
                </p>
              </div>

              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-700"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Name*
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D7B8A3] focus:border-transparent"
                />
              </div>

              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-700"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  E-Mail (optional)
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D7B8A3] focus:border-transparent"
                />
              </div>

              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-700"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Gewünschte Leistung*
                </label>
                <select
                  required
                  className="w-full px-4 py-3 rounded-2xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#D7B8A3] focus:border-transparent"
                  style={{ backgroundPosition: 'right 1rem center' }}
                >
                  <option value="">Bitte auswählen</option>
                  <option value="russian-manicure">Russische Maniküre / Naturnägel</option>
                  <option value="modellage">Neuset (Modellage)</option>
                  <option value="auffuellen">Auffüllen</option>
                  <option value="nail-art">Nail Art / Design</option>
                  <option value="tooth-gems">Tooth Gems</option>
                  <option value="workshop-russian">Russian Manicure Workshop</option>
                  <option value="workshop-nailart">Nail Art Workshop</option>
                  <option value="beratung">Unsicher – bitte beraten</option>
                </select>
              </div>

              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-700"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Wunschtermin (optional)
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D7B8A3] focus:border-transparent"
                />
              </div>

              <div className="md:col-span-2">
                <label
                  className="block mb-2 text-sm font-medium text-gray-700"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Nachricht
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D7B8A3] focus:border-transparent"
                  placeholder="z. B. gewünschtes Nail-Set, Länge/Form, Tooth Gems, Workshop oder besondere Hinweise"
                />
              </div>

              <div className="md:col-span-2 flex justify-center md:justify-end">
                <button
                  type="submit"
                  className="px-8 py-3 rounded-full font-semibold text-base md:text-lg shadow-sm hover:shadow-md transition-all duration-300"
                  style={{ backgroundColor: '#15110F', color: '#FFFFFF', fontFamily: 'Inter, sans-serif' }}
                >
                  Anfrage senden
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
