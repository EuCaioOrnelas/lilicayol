
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';
import { MessageCircle, Mail, MapPin, Clock, Phone, Instagram } from 'lucide-react';

const Contato = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-lilicayol-beige/10">
      <Header />
      <main className="pt-24 sm:pt-28 md:pt-32 px-3 sm:px-4 md:px-8">
        <div className="container mx-auto py-8 sm:py-12 md:py-16">
          {/* Hero Section */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="relative">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-lilicayol-black mb-4 sm:mb-6 relative px-4 sm:px-0">
                Entre em Contato
                <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-lilicayol-gold/20 rounded-full animate-pulse"></div>
              </h1>
              <div className="w-24 sm:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-lilicayol-beige via-lilicayol-gold to-lilicayol-beige mx-auto mb-6 sm:mb-8 rounded-full"></div>
              <p className="text-lg sm:text-xl font-inter text-lilicayol-gray max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                Estamos aqui para ajudar você a encontrar a peça perfeita. 
                <br className="hidden sm:block" />
                <span className="font-medium text-lilicayol-black">Entre em contato conosco para atendimento personalizado.</span>
              </p>
            </div>
          </div>

          {/* Contact Cards Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
              {/* WhatsApp Card */}
              <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 border-2 border-lilicayol-beige/20 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="relative mb-4 sm:mb-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                    <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 bg-lilicayol-gold rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-cormorant font-bold text-lilicayol-black mb-2 sm:mb-3">WhatsApp</h3>
                  <p className="text-lilicayol-gray mb-3 sm:mb-4 font-inter text-sm sm:text-base">Atendimento personalizado</p>
                  <a 
                    href="https://wa.me/5544991475572?text=Olá! Gostaria de conhecer mais sobre a LiliCayol 💎"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-base sm:text-lg font-semibold text-green-600 hover:text-green-700 transition-colors"
                  >
                    +55 44 9147-5572
                  </a>
                </CardContent>
              </Card>

              {/* Email Card */}
              <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 border-2 border-lilicayol-beige/20 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="relative mb-4 sm:mb-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-lilicayol-beige to-lilicayol-gold rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                    <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 bg-lilicayol-gold rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-cormorant font-bold text-lilicayol-black mb-2 sm:mb-3">E-mail</h3>
                  <p className="text-lilicayol-gray mb-3 sm:mb-4 font-inter text-sm sm:text-base">Suporte e dúvidas</p>
                  <a 
                    href="mailto:lilicayol@gmail.com"
                    className="inline-block text-base sm:text-lg font-semibold text-lilicayol-beige-dark hover:text-lilicayol-gold transition-colors break-words"
                  >
                    lilicayol@gmail.com
                  </a>
                </CardContent>
              </Card>

              {/* Location Card */}
              <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 border-2 border-lilicayol-beige/20 bg-white/80 backdrop-blur-sm sm:col-span-2 lg:col-span-1">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="relative mb-4 sm:mb-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                    <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 bg-lilicayol-gold rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-cormorant font-bold text-lilicayol-black mb-2 sm:mb-3">Localização</h3>
                  <p className="text-lilicayol-gray mb-3 sm:mb-4 font-inter text-sm sm:text-base">Nossa base de operações</p>
                  <p className="text-base sm:text-lg font-semibold text-lilicayol-beige-dark">
                    Paiçandu, PR
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Business Hours & Social Media */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Business Hours */}
              <Card className="bg-gradient-to-br from-white via-lilicayol-beige/5 to-lilicayol-gold/5 border-2 border-lilicayol-beige/30 shadow-xl">
                <CardContent className="p-6 sm:p-8 lg:p-10">
                  <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-lilicayol-beige to-lilicayol-gold rounded-full flex items-center justify-center shadow-lg">
                      <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-cormorant font-bold text-lilicayol-black">
                      Horário de Atendimento
                    </h2>
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex justify-between items-center p-3 sm:p-4 bg-white/60 rounded-lg border border-lilicayol-beige/20">
                      <span className="font-semibold text-lilicayol-black font-inter text-sm sm:text-base">Segunda à Sexta:</span>
                      <span className="text-lilicayol-gray font-inter text-sm sm:text-base">9h às 18h</span>
                    </div>
                    <div className="flex justify-between items-center p-3 sm:p-4 bg-white/60 rounded-lg border border-lilicayol-beige/20">
                      <span className="font-semibold text-lilicayol-black font-inter text-sm sm:text-base">Sábado:</span>
                      <span className="text-lilicayol-gray font-inter text-sm sm:text-base">9h às 14h</span>
                    </div>
                    <div className="flex justify-between items-center p-3 sm:p-4 bg-white/60 rounded-lg border border-lilicayol-beige/20">
                      <span className="font-semibold text-lilicayol-black font-inter text-sm sm:text-base">Domingo:</span>
                      <span className="text-lilicayol-gray font-inter text-sm sm:text-base">Fechado</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media & CTA */}
              <Card className="bg-gradient-to-br from-white via-lilicayol-beige/5 to-lilicayol-gold/5 border-2 border-lilicayol-beige/30 shadow-xl">
                <CardContent className="p-6 sm:p-8 lg:p-10">
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-lilicayol-beige to-lilicayol-gold rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                      <Instagram className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-cormorant font-bold text-lilicayol-black mb-3 sm:mb-4">
                      Siga-nos no Instagram
                    </h2>
                    <p className="text-lilicayol-gray font-inter mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                      Acompanhe nossos lançamentos, looks inspiradores e ofertas exclusivas
                    </p>
                    
                    <div className="space-y-4">
                      <a
                        href="https://instagram.com/lilicayol"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-inter font-semibold text-base sm:text-lg rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
                      >
                        <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                        @lilicayol
                      </a>
                      
                      <div className="flex items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-lilicayol-gray font-inter mt-4 sm:mt-6">
                        <div className="flex items-center gap-1 sm:gap-2">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-400 rounded-full"></div>
                          <span>Looks diários</span>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-2">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full"></div>
                          <span>Ofertas exclusivas</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action Final */}
          <div className="text-center mt-12 sm:mt-16 md:mt-20">
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-lilicayol-beige/10 via-lilicayol-gold/5 to-lilicayol-beige/10 rounded-2xl sm:rounded-3xl transform rotate-1"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 border border-lilicayol-beige/20">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-lilicayol-black mb-4 sm:mb-6">
                  Pronta para se Sentir
                  <span className="block text-lilicayol-beige-dark mt-1 sm:mt-2">Ainda Mais Elegante?</span>
                </h3>
                <p className="text-lg sm:text-xl font-inter text-lilicayol-gray max-w-2xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0">
                  Entre em contato conosco pelo WhatsApp e descubra peças únicas que valorizam sua beleza natural
                </p>
                <a
                  href="https://wa.me/5544991475572?text=Olá! Gostaria de conhecer mais sobre a LiliCayol 💎"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 sm:gap-4 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-lilicayol-beige via-lilicayol-beige-dark to-lilicayol-beige text-white font-inter font-semibold text-lg sm:text-xl rounded-full hover:from-lilicayol-beige-hover hover:via-lilicayol-beige-dark hover:to-lilicayol-beige-hover transition-all duration-500 transform hover:scale-105 shadow-2xl"
                >
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                  Conversar Agora
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contato;
