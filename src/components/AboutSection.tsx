
import React from 'react';
import { Heart, Shield, Truck, Star, MessageCircle, Sparkles, Instagram } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Apresentação da Loja */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-lilicayol-black mb-4">
            Sobre a LiliCayol
          </h2>
          <div className="w-16 sm:w-24 h-0.5 bg-gradient-to-r from-lilicayol-beige to-lilicayol-gold mx-auto mb-6"></div>
          <p className="text-base sm:text-lg font-inter text-lilicayol-gray max-w-3xl mx-auto px-4 leading-relaxed">
            A LiliCayol nasceu da paixão por moda feminina autêntica e exclusiva. 
            Somos uma boutique online que seleciona cuidadosamente cada peça, 
            priorizando qualidade, estilo e conforto para mulheres que valorizam 
            a elegância em cada detalhe do seu dia a dia.
          </p>
        </div>

        {/* Vantagens de ser cliente */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="text-center group">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-lilicayol-beige rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-lilicayol-beige-dark transition-colors duration-300">
              <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-cormorant font-semibold text-lilicayol-black mb-2">
              Peças Exclusivas
            </h3>
            <p className="text-sm sm:text-base font-inter text-lilicayol-gray px-2">
              Coleções limitadas e cuidadosamente selecionadas para garantir exclusividade
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-lilicayol-beige rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-lilicayol-beige-dark transition-colors duration-300">
              <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-cormorant font-semibold text-lilicayol-black mb-2">
              Qualidade Garantida
            </h3>
            <p className="text-sm sm:text-base font-inter text-lilicayol-gray px-2">
              Tecidos nobres e acabamentos impecáveis em todas as nossas peças
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-lilicayol-beige rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-lilicayol-beige-dark transition-colors duration-300">
              <Truck className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-cormorant font-semibold text-lilicayol-black mb-2">
              Entrega Rápida
            </h3>
            <p className="text-sm sm:text-base font-inter text-lilicayol-gray px-2">
              Enviamos rapidamente para todo o Brasil com embalagem especial
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-lilicayol-beige rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-lilicayol-beige-dark transition-colors duration-300">
              <Star className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-cormorant font-semibold text-lilicayol-black mb-2">
              Atendimento VIP
            </h3>
            <p className="text-sm sm:text-base font-inter text-lilicayol-gray px-2">
              Consultoria personalizada via WhatsApp para encontrar o look perfeito
            </p>
          </div>
        </div>

        {/* Call to Action - Ofertas e Instagram */}
        <div className="text-center mt-16 sm:mt-20">
          <div className="relative max-w-4xl mx-auto">
            {/* Background decorativo */}
            <div className="absolute inset-0 bg-gradient-to-r from-lilicayol-beige/10 via-lilicayol-gold/5 to-lilicayol-beige/10 rounded-3xl transform rotate-1"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-lilicayol-beige/5 via-transparent to-lilicayol-beige/5 rounded-3xl transform -rotate-1"></div>
            
            {/* Conteúdo principal */}
            <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 sm:p-12 lg:p-16 border border-lilicayol-beige/20">
              {/* Ícone decorativo */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-lilicayol-beige to-lilicayol-gold rounded-full flex items-center justify-center shadow-lg">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-lilicayol-gold rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Título principal */}
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-lilicayol-black mb-6 leading-tight">
                Não Perca Nenhuma
                <span className="block text-lilicayol-beige-dark mt-2">Oferta Exclusiva</span>
              </h3>

              {/* Descrição elegante */}
              <p className="text-lg sm:text-xl font-inter text-lilicayol-gray max-w-2xl mx-auto mb-8 leading-relaxed">
                Receba em primeira mão nossas 
                <span className="font-medium text-lilicayol-black"> promoções exclusivas</span>, 
                <span className="font-medium text-lilicayol-black"> lançamentos</span> e 
                <span className="font-medium text-lilicayol-black"> descontos especiais</span>. 
                Faça parte da nossa comunidade VIP e tenha acesso às melhores ofertas antes de todo mundo.
              </p>

              {/* Botões elegantes */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-6">
                <a
                  href="https://wa.me/5544991475572?text=Olá! Gostaria de participar do grupo de ofertas exclusivas da LiliCayol 💎"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-lilicayol-beige via-lilicayol-beige-dark to-lilicayol-beige text-white font-inter font-medium text-base sm:text-lg rounded-full hover:from-lilicayol-beige-hover hover:via-lilicayol-beige-dark hover:to-lilicayol-beige-hover transition-all duration-500 transform hover:scale-105 hover:shadow-2xl shadow-xl border-2 border-lilicayol-beige/30"
                >
                  <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Grupo de Ofertas VIP</span>
                </a>
                
                <a
                  href="https://instagram.com/lilicayol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-white font-inter font-medium text-base sm:text-lg rounded-full hover:from-gray-700 hover:via-gray-800 hover:to-gray-700 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl shadow-xl border-2 border-gray-700/30"
                >
                  <Instagram className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Seguir @lilicayol</span>
                </a>
              </div>
              
              {/* Texto adicional */}
              <p className="text-sm font-inter text-lilicayol-gray/80 italic mb-4">
                Ofertas limitadas • Acesso exclusivo • Totalmente gratuito
              </p>

              <div className="flex items-center justify-center gap-8 text-xs sm:text-sm font-inter text-lilicayol-gray/70">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-lilicayol-gold rounded-full"></div>
                  <span>Descontos até 50%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-lilicayol-beige rounded-full"></div>
                  <span>Lançamentos em primeira mão</span>
                </div>
              </div>

              {/* Elementos decorativos */}
              <div className="absolute top-8 left-8 w-3 h-3 bg-lilicayol-gold/30 rounded-full animate-pulse"></div>
              <div className="absolute top-12 right-12 w-2 h-2 bg-lilicayol-beige/40 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute bottom-8 left-12 w-4 h-4 bg-lilicayol-beige/20 rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
