import React from 'react';
import { Star, Award, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              {t('about.title')}
            </h2>
            
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-green-600 mb-2">
                {t('about.name')}
              </h3>
              <p className="text-lg text-gray-600 mb-4">
                {t('about.role')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('about.description')}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mx-auto mb-2">
                  <Star className="h-8 w-8 text-green-600" />
                </div>
                <p className="text-sm font-medium text-gray-900">Calidad</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mx-auto mb-2">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <p className="text-sm font-medium text-gray-900">Experiencia</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mx-auto mb-2">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <p className="text-sm font-medium text-gray-900">Confianza</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1458671/pexels-photo-1458671.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Jose Antonio working in garden"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-green-600 text-white p-6 rounded-xl shadow-lg">
              <p className="text-2xl font-bold">5+</p>
              <p className="text-sm">Años de experiencia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;