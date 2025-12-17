import React, { useState } from 'react';
import { Carousel } from '@mantine/carousel';

// ==================== MOCK DATA ====================
const destinations = [
  { id: 1, name: 'Barra de Navidad', type: 'PLAYA', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop', active: true },
  { id: 2, name: 'Melaque', type: 'PLAYA', image: null },
  { id: 3, name: 'Cuastecomates', type: 'PLAYA', image: null },
  { id: 4, name: 'La Manzanilla', type: 'PLAYA', image: null },
  { id: 5, name: 'Boca de Iguanas', type: 'PLAYA', image: null },
];

const experiences = [
  {
    id: 1,
    tag: 'EXPERIENCIAS',
    title: 'Club de Golf Costalegre',
    description: 'Entre selva y mar, El Tamarindo ofrece una experiencia de golf en perfecta armonía con la naturaleza.',
    image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1200&h=800&fit=crop',
  },
  {
    id: 2,
    tag: 'EXPERIENCIAS',
    title: 'Avistamiento de Ballenas',
    description: 'Vive la magia de observar ballenas jorobadas en su hábitat natural durante la temporada de migración.',
    image: 'https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=1200&h=800&fit=crop',
  },
  {
    id: 3,
    tag: 'EXPERIENCIAS',
    title: 'Liberación de Tortugas',
    description: 'Participa en la conservación marina liberando crías de tortuga en las playas de Costalegre.',
    image: 'https://images.unsplash.com/photo-1591025207163-942350e47db2?w=1200&h=800&fit=crop',
  },
];

const hotels = [
  {
    id: 1,
    name: 'Casitas Marakai',
    location: 'Playa Del Cocos, Jal.',
    contact: 'info@casitasmarakai.com',
    phone: '312 382 556',
    price: '$1790.00',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop',
    tags: ['Pet friendly', 'Alberca', 'Frente al mar'],
  },
  {
    id: 2,
    name: 'Troza Beach Resort',
    location: 'Boca de Tomates, Jal.',
    contact: 'info@troza.mx',
    phone: '322 898 863',
    price: '$2450.00',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop',
    tags: ['Pet friendly', 'Alberca', 'Frente al mar'],
  },
  {
    id: 3,
    name: 'Posada Pablo de Tarso',
    location: 'Melaque, Jal.',
    contact: 'info@posadapablo.com',
    phone: '315 355 5001',
    price: '$980.00',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop',
    tags: ['Alberca', 'Restaurante'],
  },
];

const blogPosts = [
  {
    id: 1,
    date: '15 junio 2024',
    title: 'Misterios del océano: secretos de las profundidades',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop',
  },
  {
    id: 2,
    date: '10 mayo 2024',
    title: 'Santuarios de vida: donde las tortugas vuelven al mar',
    image: 'https://images.unsplash.com/photo-1518467166778-b88f373ffec7?w=400&h=300&fit=crop',
  },
  {
    id: 3,
    date: '28 abril 2024',
    title: 'Recorriendo la costa: guía de playas escondidas',
    image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=400&h=300&fit=crop',
  },
];

// ==================== ICONS ====================
const PlayIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
    <path d="M10 8l6 4-6 4V8z" fill="currentColor"/>
  </svg>
);

const ArrowRight = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
  </svg>
);

const ArrowUpRight = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7v10"/>
  </svg>
);

const ChevronLeft = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
  </svg>
);

const ChevronRight = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
  </svg>
);

// ==================== HEADER ====================
const Header = () => (
  <header className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
    <nav className="max-w-4xl mx-auto bg-[#4a5c4a]/80 backdrop-blur-sm rounded-full px-8 py-3 flex items-center justify-center gap-6 md:gap-10">
      <a href="#destinos" className="text-white/90 hover:text-white text-sm tracking-wide transition-colors">
        Destinos
      </a>
      <a href="#experiencias" className="text-white/90 hover:text-white text-sm tracking-wide transition-colors">
        Experiencias
      </a>
      <a href="/" className="mx-4 md:mx-6">
        <span className="font-serif text-white text-2xl md:text-3xl tracking-wider">costalegre</span>
      </a>
      <a href="#hospedaje" className="text-white/90 hover:text-white text-sm tracking-wide transition-colors">
        Hospedaje
      </a>
      <a href="#blog" className="text-white/90 hover:text-white text-sm tracking-wide transition-colors">
        Blog
      </a>
    </nav>
  </header>
);

// ==================== HERO SECTION ====================
const HeroSection = () => (
  <section className="relative h-screen min-h-[700px] overflow-hidden bg-black">
    {/* Video Background */}
    <video 
      autoPlay 
      muted 
      loop 
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" type="video/mp4" />
    </video>
    
    {/* Overlay sutil */}
    <div className="absolute inset-0 bg-black/10" />
    
    <Header />
    
    {/* Botón Ver el video - esquina inferior derecha */}
    <div className="absolute bottom-8 right-8 z-10">
      <button className="flex items-center gap-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white pl-6 pr-5 py-3 rounded-full transition-all duration-300 border border-white/30">
        <span className="text-sm font-medium">Ver el video</span>
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
          <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </button>
    </div>
  </section>
);

// ==================== WELCOME SECTION ====================
const WelcomeSection = () => (
  <section className="py-24 px-8 bg-white">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div className="text-center md:text-left">
        <span className="text-xs tracking-[0.2em] text-[#0f3d4a]/60 uppercase">Bienvenido</span>
        <h2 className="font-serif text-5xl md:text-6xl text-[#0f3d4a] mt-4 mb-4">Costalegre</h2>
        <p className="font-serif italic text-xl text-[#3bb4a4] mb-6">
          no solo se visita, <span className="text-[#d4a855]">se siente</span>
        </p>
        <p className="text-[#0f3d4a]/70 leading-relaxed max-w-md">
          Bienvenido a Costalegre, un rincón del Pacífico donde la naturaleza dicta el ritmo y el lujo se vive en silencio. Playas vírgenes, selvas profundas y pueblos con alma te invitan a desconectarte del ruido y volver a lo esencial.
        </p>
      </div>
      
      <div className="relative">
        <div className="relative w-full aspect-square max-w-md mx-auto">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <defs>
              <clipPath id="blob-clip">
                <path d="M45.3,-51.2C58.3,-40.9,68.2,-25.6,71.2,-8.6C74.2,8.4,70.3,27.1,59.8,40.5C49.3,53.9,32.2,62,14.1,66.3C-4,70.6,-23.1,71.1,-38.7,63.4C-54.3,55.7,-66.4,39.8,-71.2,22.1C-76,4.4,-73.5,-15.1,-64.4,-30.4C-55.3,-45.7,-39.6,-56.8,-23.4,-66.1C-7.2,-75.4,9.5,-82.9,25.8,-79.8C42.1,-76.7,58,-61.5,45.3,-51.2Z" transform="translate(100 100)" />
              </clipPath>
            </defs>
            <image 
              href="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&h=600&fit=crop"
              width="200" 
              height="200" 
              clipPath="url(#blob-clip)"
              preserveAspectRatio="xMidYMid slice"
            />
          </svg>
        </div>
      </div>
    </div>
  </section>
);

// ==================== MAP/DESTINATIONS SECTION ====================
const MapSection = () => {
  const [activeDestination, setActiveDestination] = useState(destinations[0]);
  
  return (
    <section id="destinos" className="relative py-20 overflow-hidden" style={{ backgroundColor: '#3bb4a4' }}>
      {/* Topographic Pattern Background */}
      <div className="absolute inset-0 opacity-30">
        <svg width="100%" height="100%" className="absolute inset-0">
          <pattern id="topo-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M0,50 Q25,30 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-[#2d8a7c]"/>
            <path d="M0,70 Q25,50 50,70 T100,70" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-[#2d8a7c]"/>
            <path d="M0,30 Q25,10 50,30 T100,30" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-[#2d8a7c]"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#topo-pattern)"/>
        </svg>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="text-white">
            <span className="text-xs tracking-[0.2em] uppercase opacity-80">Ubicación</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6">
              Un paraíso trazado<br />en la costa
            </h2>
            <p className="opacity-90 leading-relaxed max-w-md mb-8">
              Explora los destinos imperdibles de Costalegre, desde playas escondidas hasta santuarios naturales, todo está a un viaje de distancia.
            </p>
            
            <button className="flex items-center gap-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-6 py-3 rounded-full transition-all duration-300 border border-white/30">
              <span className="text-sm">Ver en el mapa</span>
              <ArrowUpRight />
            </button>
            
            {/* Mini Map */}
            <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-4 w-48">
              <div className="aspect-[4/3] bg-[#f5f1ea]/20 rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 100 80" className="w-full h-full p-2 opacity-60">
                  <path d="M10,40 L30,20 L50,35 L70,15 L90,30 L90,70 L10,70 Z" fill="#2d8a7c" opacity="0.5"/>
                  <circle cx="35" cy="45" r="5" fill="#d4a855" stroke="white" strokeWidth="2"/>
                </svg>
              </div>
            </div>
          </div>
          
          {/* Right - Map Illustration */}
          <div className="relative hidden lg:block">
            <div className="aspect-square max-w-lg mx-auto">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                <rect x="0" y="0" width="150" height="400" fill="#3bb4a4"/>
                <path d="M150,0 L180,50 L200,100 L180,150 L200,200 L220,250 L200,300 L180,350 L200,400 L400,400 L400,0 Z" fill="#e8a54b"/>
                <path d="M200,50 L250,30 L300,60 L280,120 L320,150 L300,200 L340,250 L300,300 L350,350 L400,320 L400,100 L350,50 L300,80 L250,60 Z" fill="#9b7bb8"/>
                <path d="M300,200 L350,180 L400,220 L400,320 L350,300 L320,260 Z" fill="#c4a67c"/>
                {[
                  { x: 190, y: 320, name: 'Barra de Navidad' },
                  { x: 180, y: 280, name: 'Melaque' },
                  { x: 175, y: 240, name: 'Cuastecomates' },
                  { x: 170, y: 200, name: 'La Manzanilla' },
                  { x: 165, y: 160, name: 'Boca de Iguanas' },
                ].map((dot, i) => (
                  <circle 
                    key={i}
                    cx={dot.x} 
                    cy={dot.y} 
                    r="6" 
                    fill={activeDestination.name === dot.name ? '#0f3d4a' : '#3bb4a4'}
                    stroke="white"
                    strokeWidth="2"
                    className="cursor-pointer transition-all duration-300"
                  />
                ))}
                <g transform="translate(200, 310)">
                  <rect x="0" y="0" width="120" height="28" rx="4" fill="#0f3d4a"/>
                  <text x="60" y="18" textAnchor="middle" fill="white" fontSize="10" fontFamily="sans-serif">
                    {activeDestination.name}
                  </text>
                </g>
                <text x="350" y="80" fill="#0f3d4a" fontSize="10" opacity="0.6">Guadalajara</text>
                <text x="380" y="380" fill="#0f3d4a" fontSize="10" opacity="0.6">Colima</text>
                <g transform="translate(100, 280)">
                  <circle cx="0" cy="0" r="20" fill="none" stroke="white" strokeWidth="0.5" opacity="0.4"/>
                  <text x="0" y="-8" textAnchor="middle" fill="white" fontSize="8" opacity="0.6">N</text>
                </g>
              </svg>
            </div>
          </div>
        </div>
        
        {/* Destinations Slider */}
        <div className="mt-12">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {destinations.map((dest) => (
              <button
                key={dest.id}
                onClick={() => setActiveDestination(dest)}
                className={`flex-shrink-0 w-64 rounded-2xl overflow-hidden transition-all duration-300 ${
                  activeDestination.id === dest.id ? 'ring-2 ring-white' : ''
                }`}
              >
                {dest.image ? (
                  <div className="relative h-44">
                    <img src={dest.image} alt={dest.name} className="w-full h-full object-cover"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
                    <div className="absolute bottom-4 left-4 text-white text-left">
                      <span className="text-xs tracking-wider opacity-80">{dest.type}</span>
                      <h3 className="font-medium flex items-center gap-2">
                        {dest.name}
                        <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                          <ArrowRight />
                        </span>
                      </h3>
                    </div>
                  </div>
                ) : (
                  <div className="h-44 bg-[#f5f1ea] p-6 text-left">
                    <span className="text-xs tracking-wider text-[#0f3d4a]/60">{dest.type}</span>
                    <h3 className="font-medium text-[#0f3d4a] mt-1">{dest.name}</h3>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== EXPERIENCES SECTION ====================
const ExperiencesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  return (
    <section id="experiencias" className="py-20 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <h2 className="font-serif text-4xl md:text-5xl text-[#0f3d4a]">
            ¿Qué hacer en Costalegre?
          </h2>
          <button className="flex items-center gap-2 border border-[#0f3d4a]/30 text-[#0f3d4a] px-6 py-3 rounded-full hover:bg-[#0f3d4a] hover:text-white transition-all duration-300">
            <span className="text-sm">Explorar las experiencias</span>
          </button>
        </div>
        
        <div className="relative">
          <Carousel
            slideSize="100%"
            slideGap="md"
            loop
            withControls={false}
            onSlideChange={setCurrentSlide}
            classNames={{
              root: 'w-full',
              viewport: 'overflow-hidden rounded-3xl',
            }}
          >
            {experiences.map((exp) => (
              <Carousel.Slide key={exp.id}>
                <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden">
                  <img 
                    src={exp.image} 
                    alt={exp.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"/>
                  <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white max-w-lg">
                    <span className="text-xs tracking-[0.2em] uppercase opacity-80">{exp.tag}</span>
                    <h3 className="font-serif text-3xl md:text-4xl mt-3 mb-4">{exp.title}</h3>
                    <p className="opacity-90 leading-relaxed mb-6">{exp.description}</p>
                    <button className="flex items-center gap-2 text-sm hover:gap-4 transition-all duration-300">
                      <span>Explorar</span>
                      <ArrowRight />
                    </button>
                  </div>
                  <div className="absolute bottom-8 right-8 text-white/80">
                    <span className="text-2xl font-light">{currentSlide + 1}</span>
                    <span className="text-sm opacity-60">/{experiences.length}</span>
                  </div>
                </div>
              </Carousel.Slide>
            ))}
          </Carousel>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all z-10">
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

// ==================== LODGING SECTION ====================
const LodgingSection = () => (
  <section id="hospedaje" className="py-20 px-8 bg-[#f5f1ea]">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <span className="text-xs tracking-[0.2em] text-[#0f3d4a]/60 uppercase">Hospedaje</span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#0f3d4a] mt-4 mb-6">
            Tu refugio frente al mar te espera
          </h2>
          <p className="text-[#0f3d4a]/70 leading-relaxed mb-8">
            Hospédate en lugares únicos que combinan privacidad, diseño y conexión con el entorno. Cada hotel es una experiencia en sí misma.
          </p>
          <button className="flex items-center gap-2 border border-[#0f3d4a]/30 text-[#0f3d4a] px-6 py-3 rounded-full hover:bg-[#0f3d4a] hover:text-white transition-all duration-300">
            <span className="text-sm">Explorar hospedajes</span>
          </button>
          <div className="flex gap-2 mt-8">
            <button className="w-10 h-10 rounded-full border border-[#0f3d4a]/30 flex items-center justify-center text-[#0f3d4a] hover:bg-[#0f3d4a] hover:text-white transition-all">
              <ChevronLeft />
            </button>
            <button className="w-10 h-10 rounded-full border border-[#0f3d4a]/30 flex items-center justify-center text-[#0f3d4a] hover:bg-[#0f3d4a] hover:text-white transition-all">
              <ChevronRight />
            </button>
          </div>
        </div>
        
        <div className="lg:col-span-3 grid md:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48">
                <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover"/>
                <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                  {hotel.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded-full bg-white/90 text-[#0f3d4a]">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="absolute bottom-3 right-3 bg-[#0f3d4a] text-white px-3 py-1 rounded-full text-sm">
                  {hotel.price}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-[#0f3d4a] text-lg mb-3">{hotel.name}</h3>
                <div className="space-y-2 text-sm text-[#0f3d4a]/70">
                  <p><span className="text-[#0f3d4a]/50">Ubicación:</span> {hotel.location}</p>
                  <p><span className="text-[#0f3d4a]/50">Contacto:</span> {hotel.contact}</p>
                  <p><span className="text-[#0f3d4a]/50">Teléfono:</span> {hotel.phone}</p>
                </div>
                <button className="mt-4 flex items-center gap-2 text-[#d4a855] hover:gap-3 transition-all duration-300 text-sm font-medium">
                  <span>Ir al sitio web</span>
                  <ArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ==================== CTA BANNER ====================
const CTABanner = () => (
  <section className="relative h-[500px] overflow-hidden">
    <div 
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1591025207163-942350e47db2?w=1920&h=1080&fit=crop')`,
      }}
    >
      <div className="absolute inset-0 bg-[#0f3d4a]/50"/>
    </div>
    <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
      <h2 className="font-serif text-4xl md:text-6xl mb-4">Siente el equilibrio</h2>
      <p className="tracking-[0.3em] uppercase text-sm opacity-80">Costalegre te espera</p>
    </div>
  </section>
);

// ==================== BLOG SECTION ====================
const BlogSection = () => (
  <section id="blog" className="py-20 px-8 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <span className="text-xs tracking-[0.2em] text-[#0f3d4a]/60 uppercase">Blog</span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#0f3d4a] mt-4 mb-6">
            Historias que inspiran a viajar
          </h2>
          <p className="text-[#0f3d4a]/70 leading-relaxed mb-8">
            Descubre relatos, consejos y lugares que hacen de Costalegre un destino inolvidable.
          </p>
          <button className="flex items-center gap-2 border border-[#0f3d4a]/30 text-[#0f3d4a] px-6 py-3 rounded-full hover:bg-[#0f3d4a] hover:text-white transition-all duration-300">
            <span className="text-sm">Explorar el blog</span>
          </button>
          <div className="flex gap-2 mt-8">
            <button className="w-10 h-10 rounded-full border border-[#0f3d4a]/30 flex items-center justify-center text-[#0f3d4a] hover:bg-[#0f3d4a] hover:text-white transition-all">
              <ChevronLeft />
            </button>
            <button className="w-10 h-10 rounded-full border border-[#0f3d4a]/30 flex items-center justify-center text-[#0f3d4a] hover:bg-[#0f3d4a] hover:text-white transition-all">
              <ChevronRight />
            </button>
          </div>
        </div>
        
        <div className="lg:col-span-3 grid md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="relative h-56 rounded-2xl overflow-hidden mb-4">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/90 px-3 py-1 rounded-full text-xs text-[#0f3d4a]">
                  {post.date}
                </div>
              </div>
              <h3 className="font-medium text-[#0f3d4a] mb-3 group-hover:text-[#3bb4a4] transition-colors">
                {post.title}
              </h3>
              <button className="flex items-center gap-2 text-[#d4a855] text-sm font-medium group-hover:gap-3 transition-all duration-300">
                <span>Leer más</span>
                <ArrowRight />
              </button>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ==================== FOOTER ====================
const Footer = () => (
  <footer className="bg-[#0f3d4a] text-white py-16 px-8">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <div className="flex items-end gap-2 mb-2">
            <span className="font-serif text-2xl tracking-wider">costalegre</span>
            <svg className="w-6 h-8 text-[#3bb4a4]" viewBox="0 0 24 32" fill="currentColor">
              <path d="M12,0 C12,0 4,8 4,16 C4,24 12,32 12,32 C12,32 20,24 20,16 C20,8 12,0 12,0 Z M12,20 C10,20 8,18 8,16 C8,12 12,8 12,8 C12,8 16,12 16,16 C16,18 14,20 12,20 Z"/>
            </svg>
          </div>
          <p className="text-white/60 text-sm italic">Jalisco, México</p>
        </div>
        
        <div>
          <nav className="space-y-3">
            <a href="#destinos" className="block text-white/80 hover:text-white transition-colors">Destinos</a>
            <a href="#experiencias" className="block text-white/80 hover:text-white transition-colors">Experiencias</a>
            <a href="#hospedaje" className="block text-white/80 hover:text-white transition-colors">Hospedaje</a>
            <a href="#blog" className="block text-white/80 hover:text-white transition-colors">Blog</a>
          </nav>
        </div>
        
        <div>
          <nav className="space-y-3">
            <a href="#" className="block text-white/60 hover:text-white transition-colors text-sm">Aviso de privacidad</a>
            <a href="#" className="block text-white/60 hover:text-white transition-colors text-sm">Términos y condiciones</a>
            <a href="#" className="block text-white/60 hover:text-white transition-colors text-sm">Política de cookies</a>
          </nav>
        </div>
        
        <div>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-12 pt-8 border-t border-white/10">
        <p className="text-white/40 text-sm">
          Costalegre © 2024 Todos los derechos Reservados
        </p>
      </div>
    </div>
  </footer>
);

// ==================== MAIN COMPONENT ====================
export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <HeroSection />
      <WelcomeSection />
      <MapSection />
      <ExperiencesSection />
      <LodgingSection />
      <CTABanner />
      <BlogSection />
      <Footer />
    </div>
  );
}