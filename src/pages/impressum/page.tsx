import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function Impressum() {
  return (
    <div className="min-h-screen bg-[#FDF8F5]">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <h1 className="text-4xl font-bold mb-8" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#15110F' }}>
            Impressum
          </h1>
          
          <div className="prose prose-lg max-w-none" style={{ color: '#3A3129' }}>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ fontFamily: 'Cormorant Garamond, serif', color: '#15110F' }}
            >
              Angaben gemäß § 5 TMG
            </h2>
            
            <div className="mb-8">
              <p className="mb-2">
                <strong>Glow Aesthetics &amp; Beauty</strong><br />
                Residenzstraße 3<br />
                93047 Regensburg<br />
                Deutschland<br />
                Kontakt: Instagram @glowaesthetics.beauty &middot; WhatsApp (siehe Profil)<br />
                Terminvereinbarung nach Vereinbarung
              </p>
            </div>

            <h2
              className="text-2xl font-semibold mb-4 mt-8"
              style={{ fontFamily: 'Cormorant Garamond, serif', color: '#15110F' }}
            >
              EU-Streitschlichtung
            </h2>
            <p className="mb-4">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" 
                 className="text-blue-600 hover:underline ml-1">
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p className="mb-8">
              Weitere Kontaktmöglichkeiten bestehen über Instagram oder WhatsApp (siehe Profil).
            </p>

            <h2
              className="text-2xl font-semibold mb-4 mt-8"
              style={{ fontFamily: 'Cormorant Garamond, serif', color: '#15110F' }}
            >
              Verbraucherstreitbeilegung/Universalschlichtungsstelle
            </h2>
            <p className="mb-8">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <h2
              className="text-2xl font-semibold mb-4 mt-8"
              style={{ fontFamily: 'Cormorant Garamond, serif', color: '#15110F' }}
            >
              Haftung für Inhalte
            </h2>
            <p className="mb-4">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
              allgemeinen Gesetzen verantwortlich. 
              Eine permanente inhaltliche Kontrolle der verlinkten Inhalte ist nicht zumutbar.
            </p>

            <h2
              className="text-2xl font-semibold mb-4 mt-8"
              style={{ fontFamily: 'Cormorant Garamond, serif', color: '#15110F' }}
            >
              Haftung für Links
            </h2>
            <p className="mb-4">
              Diese Seite enthält Links zu externen Buchungs‑ und Social‑Media‑Plattformen (z. B. Instagram, WhatsApp). 
              Für deren Inhalte übernimmt Glow Aesthetics &amp; Beauty keine Haftung. Verantwortlich bleibt stets der jeweilige Betreiber.
            </p>

            <h2
              className="text-2xl font-semibold mb-4 mt-8"
              style={{ fontFamily: 'Cormorant Garamond, serif', color: '#15110F' }}
            >
              Urheberrecht
            </h2>
            <p className="mb-4">
              Alle Fotos, Texte und Designs auf dieser Seite sind urheberrechtlich geschützt.  
              Eine Nutzung oder Vervielfältigung ist nur nach vorheriger schriftlicher Zustimmung erlaubt.
            </p>

            <div className="mt-12 pt-8 border-t-2" style={{ borderColor: '#C9B8B0' }}>
              <p className="text-sm opacity-70">
                Stand: November 2025
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}