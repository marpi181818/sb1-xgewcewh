import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/34650984309', '_blank');
  };

  return (
    <>
      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={openWhatsApp}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
          aria-label="Contact via WhatsApp"
        >
          <MessageCircle className="h-8 w-8" />
        </button>
        
        {/* Email below WhatsApp button */}
        <div className="mt-2 bg-white rounded-lg shadow-lg p-3 text-center">
          <p className="text-xs text-gray-600 font-medium">Email:</p>
          <a 
            href="mailto:martingardens@hotmail.com"
            className="text-xs text-green-600 hover:text-green-700 font-medium"
          >
            martingardens@hotmail.com
          </a>
        </div>
      </div>
    </>
  );
};

export default WhatsAppButton;