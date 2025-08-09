import React from 'react';
import { Leaf, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="text-xl font-bold text-gray-900">MartinGardens</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              {t('nav.services')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              {t('nav.gallery')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              {t('nav.contact')}
            </button>
          </nav>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setLanguage('es')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  language === 'es'
                    ? 'bg-green-600 text-white'
                    : 'text-gray-700 hover:text-green-600'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  language === 'en'
                    ? 'bg-green-600 text-white'
                    : 'text-gray-700 hover:text-green-600'
                }`}
              >
                EN
              </button>
            </div>
            <Globe className="h-5 w-5 text-gray-600" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;