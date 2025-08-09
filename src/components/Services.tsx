import React from 'react';
import { 
  Leaf, 
  Scissors, 
  Droplets, 
  Bug, 
  Hammer, 
  Sprout 
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Leaf,
      title: t('services.gardening'),
      description: t('services.gardening.desc'),
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Scissors,
      title: t('services.maintenance'),
      description: t('services.maintenance.desc'),
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Droplets,
      title: t('services.pools'),
      description: t('services.pools.desc'),
      color: 'bg-cyan-100 text-cyan-600'
    },
    {
      icon: Bug,
      title: t('services.pest'),
      description: t('services.pest.desc'),
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: Hammer,
      title: t('services.construction'),
      description: t('services.construction.desc'),
      color: 'bg-gray-100 text-gray-600'
    },
    {
      icon: Sprout,
      title: t('services.irrigation'),
      description: t('services.irrigation.desc'),
      color: 'bg-emerald-100 text-emerald-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;