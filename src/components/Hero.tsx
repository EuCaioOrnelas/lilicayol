
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
    <section className="relative h-screen bg-gradient-to-br from-white to-gray-50 flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-cormorant font-light text-lilicayol-black mb-6 leading-tight">
            Elegância
            <span className="block text-lilicayol-purple font-medium">Redefinida</span>
          </h2>
          
          <p className="text-xl md:text-2xl font-inter font-light text-lilicayol-gray mb-8 max-w-2xl mx-auto">
            Descubra a coleção mais sofisticada de roupas e acessórios, 
            criada especialmente para quem busca estilo e exclusividade.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button 
              onClick={scrollToProducts}
              className="group relative px-8 py-4 bg-lilicayol-purple text-white font-inter font-medium rounded-full hover:bg-lilicayol-purple-dark transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <span className="relative z-10">Explorar Novidades</span>
              <div className="absolute inset-0 bg-gradient-to-r from-lilicayol-purple to-lilicayol-gold rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
            
            <button 
              onClick={scrollToProducts}
              className="px-8 py-4 border-2 border-lilicayol-purple text-lilicayol-purple font-inter font-medium rounded-full hover:bg-lilicayol-purple hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Ver Coleção
            </button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-lilicayol-gold rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-16 w-1 h-1 bg-lilicayol-purple rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-lilicayol-gold rounded-full animate-pulse delay-700"></div>
      </div>

      {/* Seta indicativa para rolar para baixo */}
      <button
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-lilicayol-purple hover:text-lilicayol-purple-dark transition-colors duration-300"
        aria-label="Ver produtos"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
