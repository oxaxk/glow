import React from 'react';

const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-[#FDF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-xs tracking-[0.22em] uppercase mb-4 text-[#8D6E5D]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Instagram
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
            style={{ fontFamily: 'Cormorant Garamond, serif', color: '#15110F' }}
          >
            Unser Studio auf Instagram
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed text-[#3A3129]/85 mb-2"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Hier siehst du aktuelle Sets, Russian Manicure, Tooth Gems und Einblicke ins Studio. Noch mehr
            Content gibt es auf
            <span className="font-semibold"> @glowaesthetics.beauty</span>.
          </p>
        </div>

        <div className="mt-10">
          <div className="rounded-[32px] bg-white/80 border border-[#E8D6CC] shadow-[0_18px_45px_rgba(72,54,38,0.06)] px-4 py-5 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
            {/* Mobile: horizontal scroll, Desktop: Collage */}
            <div className="-mx-2 sm:mx-0">
              <div className="flex gap-3 overflow-x-auto pb-3 sm:grid sm:grid-cols-3 sm:gap-5 sm:overflow-visible">
                <div className="min-w-[220px] sm:min-w-0">
                  <div className="rounded-3xl overflow-hidden shadow-md shadow-black/5">
                    <img
                      src="/images/instagram/glow-1.jpg"
                      alt="Glow Aesthetics & Beauty Instagram Impression 1"
                      className="w-full h-64 object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="min-w-[220px] sm:min-w-0">
                  <div className="rounded-3xl overflow-hidden shadow-md shadow-black/5">
                    <img
                      src="/images/instagram/glow-2.jpg"
                      alt="Glow Aesthetics & Beauty Instagram Impression 2"
                      className="w-full h-64 object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="min-w-[220px] sm:min-w-0">
                  <div className="rounded-3xl overflow-hidden shadow-md shadow-black/5">
                    <img
                      src="/images/instagram/glow-3.jpg"
                      alt="Glow Aesthetics & Beauty Instagram Impression 3"
                      className="w-full h-64 object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <a
                href="https://instagram.com/glowaesthetics.beauty"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#C9B8B0] px-6 py-2.5 text-sm md:text-base font-semibold text-[#2A1F1F] hover:bg-[#FBF4EF] hover:border-[#BFA8A0] transition-colors"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.8"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm8.5 3.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zM12 7.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5z"
                  />
                </svg>
                Profil auf Instagram öffnen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
