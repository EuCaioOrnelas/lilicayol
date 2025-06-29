
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToProducts = () => {
    const productSection = document.getElementById('produtos');
    if (productSection) {
      productSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[60vh] sm:h-[70vh] bg-white flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4 md:px-8 text-center relative z-20">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-cormorant font-light text-lilicayol-black mb-4 sm:mb-6 leading-tight">
            Elegância
            <span className="block text-lilicayol-beige font-medium">Redefinida</span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl font-inter font-light text-lilicayol-gray mb-6 sm:mb-8 max-w-2xl mx-auto px-4 sm:px-0">
            Descubra a coleção mais sofisticada de roupas e acessórios, 
            criada especialmente para quem busca estilo e exclusividade.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
            <button 
              onClick={scrollToProducts}
              className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-lilicayol-beige text-white font-inter font-medium text-sm sm:text-base rounded-full hover:bg-lilicayol-beige-dark transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <span className="relative z-10">Explorar Novidades</span>
              <div className="absolute inset-0 bg-gradient-to-r from-lilicayol-beige to-lilicayol-gold rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
            
            <button 
              onClick={scrollToProducts}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-lilicayol-beige text-lilicayol-beige font-inter font-medium text-sm sm:text-base rounded-full hover:bg-lilicayol-beige-dark hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Ver Coleção
            </button>
          </div>
        </div>
      </div>

      {/* Seta indicativa para rolar para baixo */}
      <button
        onClick={scrollToProducts}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-lilicayol-beige hover:text-lilicayol-beige-hover transition-colors duration-300 z-20"
        aria-label="Ver produtos"
      >
        <ChevronDown size={28} className="sm:w-8 sm:h-8" />
      </button>
    </section>
  );
};

export default Hero;
