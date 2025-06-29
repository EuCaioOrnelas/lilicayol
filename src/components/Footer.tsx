
import React from 'react';
import { Heart, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-50 to-white border-t border-gray-100">
      <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo e Descrição */}
          <div className="sm:col-span-2 lg:col-span-2 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-playfair font-bold text-lilicayol-black mb-3 sm:mb-4">
              LiliCayol
            </h2>
            <p className="text-lilicayol-gray font-inter text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 max-w-md mx-auto sm:mx-0">
              Peças cuidadosamente selecionadas para mulheres que valorizam qualidade, 
              estilo e exclusividade em cada detalhe. Moda feminina com elegância e sofisticação.
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4">
              <a
                href="https://instagram.com/lilicayol"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-lilicayol-beige hover:border-lilicayol-beige hover:text-white transition-all duration-300 group"
              >
                <Instagram size={16} className="sm:w-[18px] sm:h-[18px] text-lilicayol-gray group-hover:text-white" />
              </a>
              <a
                href="mailto:lilicayol@gmail.com.br"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-lilicayol-beige hover:border-lilicayol-beige hover:text-white transition-all duration-300 group"
              >
                <Mail size={16} className="sm:w-[18px] sm:h-[18px] text-lilicayol-gray group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Links Úteis */}
          <div className="text-center sm:text-left">
            <h3 className="font-cormorant font-semibold text-lilicayol-black mb-3 sm:mb-4 text-base sm:text-lg">
              Links Úteis
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="/" className="text-lilicayol-gray hover:text-lilicayol-beige transition-colors duration-300 text-xs sm:text-sm font-inter">
                  Início
                </a>
              </li>
              <li>
                <a href="/novidades" className="text-lilicayol-gray hover:text-lilicayol-beige transition-colors duration-300 text-xs sm:text-sm font-inter">
                  Novidades
                </a>
              </li>
              <li>
                <a href="/contato" className="text-lilicayol-gray hover:text-lilicayol-beige transition-colors duration-300 text-xs sm:text-sm font-inter">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Informações */}
          <div className="text-center sm:text-left">
            <h3 className="font-cormorant font-semibold text-lilicayol-black mb-3 sm:mb-4 text-base sm:text-lg">
              Informações
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="/politicas-privacidade" className="text-lilicayol-gray hover:text-lilicayol-beige transition-colors duration-300 text-xs sm:text-sm font-inter">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="/termos-uso" className="text-lilicayol-gray hover:text-lilicayol-beige transition-colors duration-300 text-xs sm:text-sm font-inter">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-gray-200 mt-6 sm:mt-8 pt-4 sm:pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
            <p className="text-lilicayol-gray text-xs sm:text-sm font-inter text-center md:text-left">
              © {currentYear} LiliCayol. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-2 text-lilicayol-gray text-xs sm:text-sm font-inter">
              <span>Feito com</span>
              <Heart size={14} className="sm:w-4 sm:h-4 text-lilicayol-beige fill-current" />
              <span>para você</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
