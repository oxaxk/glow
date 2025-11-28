import { useState, useRef, useEffect } from 'react';

export default function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef<number>(0);
  const currentXRef = useRef<number>(0);
  const isDraggingRef = useRef<boolean>(false);

  const services = [
    {
      icon: 'ri-hand-heart-line',
      title: 'Russische Maniküre & Naturnägel',
      description:
        'Saubere Cuticle-Arbeit, präzise Vorbereitung und stabiler Aufbau – für Naturnägel, die gepflegt aussehen und lange halten.',
      image: '/images/services/russian-manicure.jpg'
    },
    {
      icon: 'ri-nail-polish-line',
      title: 'Neuset (Modellage)',
      description:
        'Neuset in den Längen S–XL mit klarer, moderner Form. Von schlicht bis auffälliger – abgestimmt auf deine Handform und deinen Alltag.',
      image: '/images/services/new-set.jpg'
    },
    {
      icon: 'ri-refresh-line',
      title: 'Auffüllen',
      description:
        'Regelmäßiges Auffüllen der Modellage in S–XL, inkl. Korrektur von Form und Aufbau. Für Nägel, die dauerhaft clean aussehen.',
      image: '/images/services/refill.jpg'
    },
    {
      icon: 'ri-star-smile-line',
      title: 'Tooth Gems',
      description:
        'Swarovski Tooth Gems, Lines und Echtgold-Steine – präzise gesetzt mit Fokus auf Haltbarkeit und schonender Behandlung des Zahnschmelzes.',
      image: '/images/services/tooth-gems.jpg'
    },
    {
      icon: 'ri-sparkling-line',
      title: 'Nail Art Designs',
      description:
        'Basic French, A-Color, Chrome, Cat-Eye, Specials & mehr – Nail Art Designs je nach Zeitaufwand und Detailgrad, passend zu deinem Look.',
      image: '/images/services/nail-art.jpg'
    },
    {
      icon: 'ri-team-line',
      title: 'Nail Workshops',
      description:
        'Deep Manicure, Bits-Technik, Naturnagelvorbereitung, French, Babyboomer, Blooming, 3D-Flowers, Chrome & Cat-Eye. Inkl. Zertifikat und Goodie-Bag.',
      image: '/images/services/workshop-russian.jpg'
    }
  ];

  const scrollToIndex = (index: number) => {
    const el = mobileScrollRef.current;
    if (!el) return;

    const child = el.children[index] as HTMLElement | undefined;
    if (child) {
      const offset = child.offsetLeft - (el.clientWidth - child.clientWidth) / 2;
      el.scrollTo({ left: offset, behavior: 'smooth' });
    }
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % services.length;
      scrollToIndex(newIndex);
      return newIndex;
    });
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + services.length) % services.length;
      scrollToIndex(newIndex);
      return newIndex;
    });
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToSlide = (index: number) => {
    if (index === currentIndex) return;
    setCurrentIndex(index);
    scrollToIndex(index);
  };

  // Touch/Mouse handlers for swipe functionality
  const handleStart = (clientX: number) => {
    if (isTransitioning) return;
    isDraggingRef.current = true;
    startXRef.current = clientX;
    currentXRef.current = clientX;
  };

  const handleMove = (clientX: number) => {
    if (!isDraggingRef.current || isTransitioning) return;
    currentXRef.current = clientX;
  };

  const handleEnd = () => {
    if (!isDraggingRef.current || isTransitioning) return;
    
    const deltaX = currentXRef.current - startXRef.current;
    const threshold = 50;

    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }

    isDraggingRef.current = false;
  };

  // Wheel handler for trackpad support
  const handleWheel = (e: React.WheelEvent) => {
    if (isTransitioning) return;
    
    // Check if it's a horizontal scroll (trackpad gesture)
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      e.preventDefault();
      
      if (e.deltaX > 30) {
        nextSlide();
      } else if (e.deltaX < -30) {
        prevSlide();
      }
    }
  };

  // Mobile scroll handler for snap carousel
  const handleMobileScroll = () => {
    const el = mobileScrollRef.current;
    if (!el) return;
    const newIndex = Math.round(el.scrollLeft / el.clientWidth);
    if (newIndex !== currentIndex) setCurrentIndex(newIndex);
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  const handleMouseLeave = () => {
    handleEnd();
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isDraggingRef.current) {
        handleEnd();
      }
    };

    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDraggingRef.current) {
        handleMove(e.clientX);
      }
    };

    document.addEventListener('mouseup', handleGlobalMouseUp);
    document.addEventListener('mousemove', handleGlobalMouseMove);

    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, []);


  return (
    <section id="services" className="py-14 lg:py-20" style={{ backgroundColor: '#FDF8F5' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 lg:mb-16">
          <h2
            className="text-4xl lg:text-5xl font-bold mb-3"
            style={{ fontFamily: 'Cormorant Garamond, serif', color: '#15110F' }}
          >
            Nails, Tooth Gems & Workshops
          </h2>
          <p
            className="text-sm md:text-base tracking-[0.22em] uppercase mb-4 text-[#7E6E61]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Glow Aesthetics &amp; Beauty · Regensburg
          </p>
          <p
            className="text-lg lg:text-xl opacity-85 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif', color: '#3A3129' }}
          >
            Russian Manicure, Modellage, Nail Art, Tooth Gems und 1-tägige Workshops – cleanes,
            modernes Nail- &amp; Beauty-Angebot mit Fokus auf präzise Ergebnisse.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">

          {/* Card Container with proper spacing - jetzt für alle Viewports */}
          <div className="w-full px-4 lg:px-20">
            <div
              ref={mobileScrollRef}
              className="w-full flex overflow-x-auto scroll-smooth snap-x snap-mandatory space-x-6 px-4"
              onScroll={handleMobileScroll}
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {services.map((svc) => (
                <div key={svc.title} className="shrink-0 w-[85%] md:w-[45%] lg:w-[320px] xl:w-[360px] snap-center">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-[520px] md:h-[500px] lg:h-[520px] flex flex-col">
                    <div className="relative h-[55%] overflow-hidden">
                      <img
                        src={svc.image}
                        alt={svc.title}
                        className="w-full h-full object-cover object-center"
                        draggable={false}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="px-6 pt-6 pb-6 md:pb-4 flex flex-col justify-start h-[38%]">
                      <div className="mb-0 flex items-start mt-0">
                        <h3
                          className="text-xl md:text-2xl font-bold mb-1 leading-snug"
                          style={{ fontFamily: 'Cormorant Garamond, serif', color: '#15110F' }}
                        >
                          {svc.title}
                        </h3>
                      </div>
                      <p
                        className="opacity-80 leading-relaxed text-base"
                        style={{ fontFamily: 'Inter, sans-serif', color: '#3A2A29' }}
                      >
                        {svc.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


          {/* Dots Navigation mit Pfeilen */}
          <div className="flex items-center justify-center mt-8 lg:mt-12 space-x-4">
            <button
              onClick={prevSlide}
              disabled={isTransitioning}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-[#C9B8B0] bg-white/80 hover:bg-white transition-all duration-200 cursor-pointer disabled:opacity-40"
            >
              <i className="ri-arrow-left-s-line text-lg" style={{ color: '#2A1F1F' }}></i>
            </button>

            <div className="flex space-x-3">
              <button
                onClick={() => goToSlide(0)}
                disabled={isTransitioning}
                className={`h-3 w-8 rounded-full transition-all duration-300 cursor-pointer disabled:opacity-50 ${
                  currentIndex === 0 ? 'opacity-100' : 'opacity-40'
                }`}
                style={{ backgroundColor: '#2A1F1F' }}
              />
              <button
                onClick={() => goToSlide(services.length - 1)}
                disabled={isTransitioning}
                className={`h-3 w-8 rounded-full transition-all duration-300 cursor-pointer disabled:opacity-50 ${
                  currentIndex === services.length - 1 ? 'opacity-100' : 'opacity-40'
                }`}
                style={{ backgroundColor: '#2A1F1F' }}
              />
            </div>

            <button
              onClick={nextSlide}
              disabled={isTransitioning}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-[#C9B8B0] bg-white/80 hover:bg-white transition-all duration-200 cursor-pointer disabled:opacity-40"
            >
              <i className="ri-arrow-right-s-line text-lg" style={{ color: '#2A1F1F' }}></i>
            </button>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-16">
          <a
            href="#contact"
            className="text-lg lg:text-xl font-semibold px-8 lg:px-12 py-3.5 lg:py-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 whitespace-nowrap"
            style={{ backgroundColor: '#F3D9D0', color: '#281C1C', fontFamily: 'Inter, sans-serif' }}
          >
            Anfrage über Kontaktformular
          </a>
        </div>
      </div>
    </section>
  );
}
