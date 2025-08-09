import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const heroImages = [
  {
    url: 'https://images.pexels.com/photos/1458671/pexels-photo-1458671.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Beautiful garden maintenance'
  },
  {
    url: 'https://images.pexels.com/photos/1055120/pexels-photo-1055120.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Professional landscaping'
  },
  {
    url: 'https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Pool maintenance service'
  },
  {
    url: 'https://images.pexels.com/photos/164005/the-interior-of-the-repair-interior-design-room-164005.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Garden design work'
  }
];

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Image Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-colors z-10"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-colors z-10"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow-lg">
          {t('hero.title')}
        </h1>
        <p className="text-xl md:text-2xl mb-4 font-light">
          {t('hero.subtitle')}
        </p>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          {t('hero.description')}
        </p>
        <button
          onClick={scrollToContact}
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          {t('hero.cta')}
        </button>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentImage ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;