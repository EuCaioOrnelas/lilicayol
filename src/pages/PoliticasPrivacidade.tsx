
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PoliticasPrivacidade = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold text-lilicayol-black mb-4">
                Políticas de Privacidade
              </h1>
              <div className="w-24 h-0.5 bg-gradient-to-r from-lilicayol-purple to-lilicayol-gold mx-auto mb-6"></div>
              <p className="text-lg font-inter text-lilicayol-gray">
                Sua privacidade é nossa prioridade
              </p>
            </div>

            <div className="space-y-12 text-lilicayol-black">
              <section className="bg-gray-50/50 p-8 rounded-2xl border border-gray-100">
                <h2 className="text-2xl font-cormorant font-semibold mb-6 text-lilicayol-purple">
                  1. Informações que Coletamos
                </h2>
                <div className="space-y-4 font-inter leading-relaxed">
                  <p>
                    Na Lilicayol, coletamos apenas as informações necessárias para oferecer a melhor experiência de compra:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Nome completo e informações de contato</li>
                    <li>Endereço de entrega</li>
                    <li>Histórico de compras e preferências</li>
                    <li>Dados de navegação para melhorar nossos serviços</li>
                  </ul>
                </div>
              </section>

              <section className="bg-gradient-to-br from-lilicayol-purple/5 to-lilicayol-gold/5 p-8 rounded-2xl border border-lilicayol-purple/10">
                <h2 className="text-2xl font-cormorant font-semibold mb-6 text-lilicayol-purple">
                  2. Como Usamos suas Informações
                </h2>
                <div className="space-y-4 font-inter leading-relaxed">
                  <p>
                    Utilizamos suas informações para:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Processar e entregar seus pedidos</li>
                    <li>Comunicar sobre novidades e promoções</li>
                    <li>Melhorar nossos produtos e serviços</li>
                    <li>Fornecer suporte ao cliente personalizado</li>
                  </ul>
                </div>
              </section>

              <section className="bg-gray-50/50 p-8 rounded-2xl border border-gray-100">
                <h2 className="text-2xl font-cormorant font-semibold mb-6 text-lilicayol-purple">
                  3. Proteção de Dados
                </h2>
                <div className="space-y-4 font-inter leading-relaxed">
                  <p>
                    Implementamos medidas de segurança rigorosas para proteger suas informações pessoais. 
                    Seus dados são criptografados e armazenados em servidores seguros, acessíveis apenas 
                    por pessoal autorizado.
                  </p>
                </div>
              </section>

              <section className="bg-gradient-to-br from-lilicayol-purple/5 to-lilicayol-gold/5 p-8 rounded-2xl border border-lilicayol-purple/10">
                <h2 className="text-2xl font-cormorant font-semibold mb-6 text-lilicayol-purple">
                  4. Seus Direitos
                </h2>
                <div className="space-y-4 font-inter leading-relaxed">
                  <p>
                    Você tem direito a:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Acessar seus dados pessoais</li>
                    <li>Solicitar correção de informações</li>
                    <li>Solicitar exclusão de seus dados</li>
                    <li>Retirar seu consentimento a qualquer momento</li>
                  </ul>
                </div>
              </section>

              <section className="bg-gray-50/50 p-8 rounded-2xl border border-gray-100">
                <h2 className="text-2xl font-cormorant font-semibold mb-6 text-lilicayol-purple">
                  5. Contato
                </h2>
                <div className="space-y-4 font-inter leading-relaxed">
                  <p>
                    Para questões sobre privacidade, entre em contato conosco através do e-mail 
                    <a href="mailto:privacidade@lilicayol.com.br" className="text-lilicayol-purple hover:text-lilicayol-purple-dark transition-colors ml-1">
                      privacidade@lilicayol.com.br
                    </a>
                  </p>
                </div>
              </section>
            </div>

            <div className="text-center mt-16">
              <p className="text-sm font-inter text-lilicayol-gray">
                Última atualização: {new Date().toLocaleDateString('pt-BR')}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PoliticasPrivacidade;
