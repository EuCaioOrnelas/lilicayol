
import React from 'react';
import { Instagram, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-lilicayol-black to-gray-900 text-white py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-8 right-8 w-32 h-32 bg-gradient-to-br from-lilicayol-purple/10 to-lilicayol-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-8 left-8 w-24 h-24 bg-gradient-to-br from-lilicayol-gold/10 to-lilicayol-purple/10 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-playfair font-bold mb-4">
              Lilicayol
              <span className="block w-16 h-0.5 bg-gradient-to-r from-lilicayol-purple to-lilicayol-gold mt-2"></span>
            </h3>
            <p className="text-gray-300 font-inter leading-relaxed mb-6 max-w-md">
              Uma boutique online dedicada à elegância e sofisticação, oferecendo peças únicas 
              para mulheres que valorizam o estilo autêntico.
            </p>
            
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/5511999999999"
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-inter font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Phone size={20} />
              WhatsApp
            </a>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-cormorant font-semibold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-lilicayol-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-inter text-sm">
                    contato@lilicayol.com.br
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-lilicayol-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-inter text-sm">
                    (11) 99999-9999
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-cormorant font-semibold mb-6">Redes Sociais</h4>
            <div className="flex flex-col gap-4">
              <a
                href="#"
                className="group flex items-center gap-3 text-gray-300 hover:text-lilicayol-purple transition-all duration-300"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-700 rounded-full flex items-center justify-center group-hover:from-lilicayol-purple group-hover:to-lilicayol-purple-dark transition-all duration-300 shadow-lg">
                  <Instagram size={18} />
                </div>
                <span className="font-inter text-sm">@lilicayol</span>
              </a>
              
              <a
                href="#"
                className="group flex items-center gap-3 text-gray-300 hover:text-lilicayol-gold transition-all duration-300"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-700 rounded-full flex items-center justify-center group-hover:from-lilicayol-gold group-hover:to-lilicayol-gold-dark transition-all duration-300 shadow-lg">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <span className="font-inter text-sm">Lilicayol</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 font-inter text-sm">
              © {currentYear} Lilicayol. Todos os direitos reservados.
            </p>
            
            <div className="flex gap-6">
              <Link 
                to="/politicas-privacidade" 
                className="text-gray-400 hover:text-lilicayol-purple font-inter text-sm transition-colors duration-300"
              >
                Política de Privacidade
              </Link>
              <Link 
                to="/termos-uso" 
                className="text-gray-400 hover:text-lilicayol-purple font-inter text-sm transition-colors duration-300"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
