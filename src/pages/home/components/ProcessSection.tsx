export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Anfrage & Termin',
      description:
        'Du meldest dich über WhatsApp oder Instagram, nennst Wunschleistung oder Workshop und bekommst einen passenden Termin vorgeschlagen.',
      icon: 'ri-whatsapp-line'
    },
    {
      number: '02',
      title: 'Beratung & Designplanung',
      description:
        'Vor Ort besprechen wir Länge, Form, Stil & ggf. Tooth Gems oder Workshop-Fokus – abgestimmt auf deinen Alltag und deine Handform.',
      icon: 'ri-pencil-ruler-line'
    },
    {
      number: '03',
      title: 'Behandlung & Ablauf',
      description:
        'Russian Manicure, Modellage, Nail Art, Tooth Gems oder Workshop: präzise Arbeitsweise mit Fokus auf Komfort, Hygiene und Details.',
      icon: 'ri-magic-line'
    },
    {
      number: '04',
      title: 'Finish & Aftercare',
      description:
        'Abschluss-Finish, Fotos und klare Aftercare-Empfehlungen – inkl. Infos zu Auffüllterminen oder weiteren Schulungen.',
      icon: 'ri-hand-heart-line'
    }
  ];

  return (
    <section className="py-20 bg-[#FDF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-xs tracking-[0.22em] uppercase mb-4 text-[#8D6E5D]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Ablauf
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
            style={{ fontFamily: 'Cormorant Garamond, serif', color: '#15110F' }}
          >
            Ablauf bei Glow Aesthetics &amp; Beauty
          </h2>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-[#3A3129]/85"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Wie ein Termin in Regensburg abläuft – von deiner Anfrage bis zum fertigen Nail-Set,
            Tooth Gems oder Workshop-Tag in vier klaren Schritten.
          </p>
        </div>

        <div className="relative mt-12">
          {/* Horizontale Linie hinter den Steps (nur Desktop) */}
          <div className="hidden lg:block absolute top-10 left-[6%] right-[6%] h-px bg-[#E2D3C7]" />

          <div className="relative z-10 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="relative mb-6 flex flex-col items-center">
                  <div
                    className="w-20 h-20 rounded-full bg-white border border-[#C9B8B0] flex items-center justify-center shadow-[0_12px_30px_rgba(72,54,38,0.10)] group-hover:scale-105 transition-transform duration-300"
                  >
                    <i className={`${step.icon} text-2xl`} style={{ color: '#2A1F1F' }} />
                  </div>
                  <div className="absolute -bottom-5 flex items-center justify-center">
                    <span
                      className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#2A1F1F] text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-white"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Mobile: Vertikale Verbindungslinie */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden w-px h-10 bg-[#E2D3C7] mb-4" />
                )}

                <h3
                  className="mt-4 text-xl md:text-2xl font-bold mb-3 leading-snug"
                  style={{ fontFamily: 'Cormorant Garamond, serif', color: '#15110F' }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm md:text-base leading-relaxed text-[#3A2A29]/85"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
