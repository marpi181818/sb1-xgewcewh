import React, { createContext, useContext, useState } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    // Header
    'nav.services': 'Servicios',
    'nav.about': 'Nosotros',
    'nav.gallery': 'Galería',
    'nav.contact': 'Contacto',
    
    // Hero
    'hero.title': 'MartinGardens',
    'hero.subtitle': 'Servicios Profesionales de Jardinería y Mantenimiento',
    'hero.description': 'Transformamos y mantenemos tus espacios verdes con la experiencia y dedicación de Jose Antonio Martín Domínguez',
    'hero.cta': 'Contactar Ahora',
    
    // Services
    'services.title': 'Nuestros Servicios',
    'services.gardening': 'Jardinería',
    'services.gardening.desc': 'Diseño, plantación y cuidado integral de jardines',
    'services.maintenance': 'Mantenimiento',
    'services.maintenance.desc': 'Mantenimiento regular de jardines y espacios verdes',
    'services.pools': 'Piscinas',
    'services.pools.desc': 'Mantenimiento y limpieza profesional de piscinas',
    'services.pest': 'Control de Plagas',
    'services.pest.desc': 'Eliminación segura y efectiva de plagas',
    'services.construction': 'Construcción',
    'services.construction.desc': 'Obras y construcción para espacios exteriores',
    'services.irrigation': 'Sistemas de Riego',
    'services.irrigation.desc': 'Instalación y mantenimiento de sistemas de riego',
    
    // About
    'about.title': 'Sobre Nosotros',
    'about.name': 'Jose Antonio Martín Domínguez',
    'about.role': 'Fundador y Especialista',
    'about.description': 'Con años de experiencia en el sector, Jose Antonio ha convertido MartinGardens en sinónimo de calidad y profesionalidad. Su pasión por los espacios verdes y su compromiso con la excelencia garantizan resultados excepcionales en cada proyecto.',
    
    // Gallery
    'gallery.title': 'Galería de Trabajos',
    'gallery.subtitle': 'Descubre algunos de nuestros proyectos realizados',
    
    // Contact
    'contact.title': 'Contacto',
    'contact.subtitle': 'Ponte en contacto con nosotros',
    'contact.phone': 'Teléfono',
    'contact.email': 'Email',
    'contact.whatsapp': 'WhatsApp',
  },
  en: {
    // Header
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'MartinGardens',
    'hero.subtitle': 'Professional Gardening and Maintenance Services',
    'hero.description': 'We transform and maintain your green spaces with the experience and dedication of Jose Antonio Martín Domínguez',
    'hero.cta': 'Contact Now',
    
    // Services
    'services.title': 'Our Services',
    'services.gardening': 'Gardening',
    'services.gardening.desc': 'Design, planting and comprehensive garden care',
    'services.maintenance': 'Maintenance',
    'services.maintenance.desc': 'Regular maintenance of gardens and green spaces',
    'services.pools': 'Pools',
    'services.pools.desc': 'Professional pool maintenance and cleaning',
    'services.pest': 'Pest Control',
    'services.pest.desc': 'Safe and effective pest elimination',
    'services.construction': 'Construction',
    'services.construction.desc': 'Construction and works for outdoor spaces',
    'services.irrigation': 'Irrigation Systems',
    'services.irrigation.desc': 'Installation and maintenance of irrigation systems',
    
    // About
    'about.title': 'About Us',
    'about.name': 'Jose Antonio Martín Domínguez',
    'about.role': 'Founder and Specialist',
    'about.description': 'With years of experience in the sector, Jose Antonio has made MartinGardens synonymous with quality and professionalism. His passion for green spaces and commitment to excellence guarantee exceptional results in every project.',
    
    // Gallery
    'gallery.title': 'Work Gallery',
    'gallery.subtitle': 'Discover some of our completed projects',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Get in touch with us',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.whatsapp': 'WhatsApp',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');
  
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['es']] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};