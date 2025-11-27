export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Laura G.',
      rating: 5,
      text: 'Meine Russian Manicure inkl. Natur Gel sah noch nie so sauber aus. Die Form passt perfekt zu meiner Hand und hält richtig lange.',
      image: null
    },
    {
      name: 'Sofia M.',
      rating: 5,
      text: 'Neuset in M mit French – super präzise gearbeitet, keine Liftings und die Nägel sehen auch nach Wochen noch ordentlich aus.',
      image: null
    },
    {
      name: 'Nadine R.',
      rating: 5,
      text: 'Ich lasse regelmäßig auffüllen und mache zwischendurch Nail Art dazu. Maniküre & Design werden immer genau so umgesetzt, wie wir es besprechen.',
      image: null
    },
    {
      name: 'Elif K.',
      rating: 5,
      text: 'Meine Tooth Gems wurden sehr präzise gesetzt. Mir wurde alles erklärt, es tat nichts weh und das Ergebnis sieht super clean aus.',
      image: null
    },
    {
      name: 'Jessica T.',
      rating: 5,
      text: 'Russian Manicure Workshop: sehr strukturiert, viel Praxis und alle Fragen wurden beantwortet. Ich habe direkt mehr Sicherheit im Studioalltag.',
      image: null
    },
    {
      name: 'Mariam S.',
      rating: 5,
      text: 'Nail Art Workshop & Auffüllen – perfekte Kombination. Man merkt, dass viel Wert auf Technik, Hygiene und Details gelegt wird.',
      image: null
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
            Stimmen
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
            style={{ fontFamily: 'Cormorant Garamond, serif', color: '#15110F' }}
          >
            Erfahrungen bei Glow Aesthetics &amp; Beauty
          </h2>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-[#3A3129]/85"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Russian Manicure, Modellage, Nail Art, Tooth Gems &amp; Workshops – echte Rückmeldungen
            von Kundinnen, die auf präzise, saubere und moderne Ergebnisse setzen.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="flex flex-col h-full rounded-3xl bg-white/90 border border-[#F1E2D7] shadow-[0_18px_45px_rgba(72,54,38,0.06)] px-6 py-6 md:px-7 md:py-7 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(72,54,38,0.12)] transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-11 h-11 rounded-full overflow-hidden bg-[#F3D9D0]/80 flex items-center justify-center text-sm font-semibold text-[#5A4036]">
                  {testimonial.image ? (
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span>{testimonial.name.charAt(0)}</span>
                  )}
                </div>

                <div className="flex-1">
                  <h4
                    className="text-lg md:text-xl font-bold leading-snug"
                    style={{ fontFamily: 'Cormorant Garamond, serif', color: '#15110F' }}
                  >
                    {testimonial.name}
                  </h4>
                  <div className="mt-1 flex items-center gap-2">
                    <div className="flex items-center gap-0.5 text-[#D0A97F] text-sm">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i key={i} className="ri-star-fill" />
                      ))}
                    </div>
                    <span
                      className="text-xs uppercase tracking-[0.18em] text-[#A48877]"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {testimonial.rating}.0 / 5.0
                    </span>
                  </div>
                </div>
              </div>

              <p
                className="text-sm md:text-[0.95rem] leading-relaxed text-[#3A2A29]/90 italic"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                “{testimonial.text}”
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
