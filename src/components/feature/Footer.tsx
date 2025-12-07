export default function Footer() {
  return (
    <footer className="bg-[#FDF8F5] py-14 text-[#15110F]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Logo & Description */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start">
            <h3
              className="text-xl md:text-2xl font-bold mb-1 tracking-[0.22em] uppercase"
              style={{ fontFamily: 'Cormorant Garamond, serif', color: '#15110F' }}
            >
              Glow Aesthetics &amp; Beauty
            </h3>
            <p
              className="text-[#7E6E61] mb-6 max-w-md text-sm md:text-base mx-auto md:mx-0"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Cleanes Nail- &amp; Beauty-Studio in Regensburg – spezialisiert auf Russian Manicure,
              Modellage, Nail Art, Tooth Gems und ausgewählte Workshops.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="https://instagram.com/glowaesthetics.beauty"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white border border-[#E2D3C7] rounded-full flex items-center justify-center hover:border-[#C9B8B0] hover:bg-[#FBF4EF] transition-colors"
              >
                <i className="ri-instagram-line text-[#15110F] text-lg"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4
              className="font-semibold text-xl md:text-2xl mb-4"
              style={{ color: '#15110F', fontFamily: 'Cormorant Garamond, serif' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2" style={{ fontFamily: 'Inter, sans-serif' }}>
              <li>
                <a href="/#services" className="text-[#7A655C] hover:text-[#15110F] transition-colors">
                  Leistungen
                </a>
              </li>
              <li>
                <a href="/#prices" className="text-[#7A655C] hover:text-[#15110F] transition-colors">
                  Preise &amp; Pakete
                </a>
              </li>
              <li>
                <a href="/#workshops" className="text-[#7A655C] hover:text-[#15110F] transition-colors">
                  Workshops
                </a>
              </li>
              <li>
                <a href="/#about" className="text-[#7A655C] hover:text-[#15110F] transition-colors">
                  Studio
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-[#7A655C] hover:text-[#15110F] transition-colors">
                  Kontakt &amp; Termin
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#E2D3C7] mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p
            className="text-[#8A7A6F] text-xs md:text-sm text-center md:text-left"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            © 2025 Glow Aesthetics &amp; Beauty. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 justify-center md:justify-end" style={{ fontFamily: 'Inter, sans-serif' }}>
            <a href="/impressum" className="text-[#8A7A6F] hover:text-[#15110F] text-xs md:text-sm transition-colors">
              Impressum
            </a>
            <a href="/datenschutz" className="text-[#8A7A6F] hover:text-[#15110F] text-xs md:text-sm transition-colors">
              Datenschutz
            </a>
            <a href="https://slicker.agency/" className="text-[#8A7A6F] hover:text-[#15110F] text-xs md:text-sm transition-colors">
              by Slicker
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
