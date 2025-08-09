import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const galleryImages = [
  {
    url: 'https://images.pexels.com/photos/1458671/pexels-photo-1458671.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Garden maintenance work'
  },
  {
    url: 'https://images.pexels.com/photos/1055120/pexels-photo-1055120.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Professional landscaping'
  },
  {
    url: 'https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Pool maintenance'
  },
  {
    url: 'https://images.pexels.com/photos/1049422/pexels-photo-1049422.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Garden design'
  },
  {
    url: 'https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Irrigation system'
  },
  {
    url: 'https://images.pexels.com/photos/1458671/pexels-photo-1458671.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Pest control work'
  },
  {
    url: 'https://images.pexels.com/photos/1055120/pexels-photo-1055120.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Construction work'
  },
  {
    url: 'https://images.pexels.com/photos/1049422/pexels-photo-1049422.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Completed garden project'
  },
  {
    url: 'https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Modern garden design'
  }
];

const Gallery: React.FC = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const previousImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('gallery.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('gallery.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 text-white transition-colors z-10"
              >
                <X className="h-6 w-6" />
              </button>
              
              <button
                onClick={previousImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 text-white transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 text-white transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              <img
                src={galleryImages[selectedImage].url}
                alt={galleryImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;