import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  const openWhatsApp = () => {
    window.open('https://wa.me/34650984309', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-green-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-green-100">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="bg-white/10 rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <Phone className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {t('contact.phone')}
            </h3>
            <p className="text-green-100 text-lg">
              +34 650 98 43 09
            </p>
          </div>

          <div className="text-center">
            <div className="bg-white/10 rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <Mail className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {t('contact.email')}
            </h3>
            <p className="text-green-100 text-lg">
              martingardens@hotmail.com
            </p>
          </div>

          <div className="text-center">
            <div className="bg-white/10 rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {t('contact.whatsapp')}
            </h3>
            <button
              onClick={openWhatsApp}
              className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Contactar WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;