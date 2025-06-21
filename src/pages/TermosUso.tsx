
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermosUso = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold text-lilicayol-black mb-4">
                Termos de Uso
              </h1>
              <div className="w-24 h-0.5 bg-gradient-to-r from-lilicayol-purple to-lilicayol-gold mx-auto mb-6"></div>
              <p className="text-lg font-inter text-lilicayol-gray">
                Condições para uso de nossos serviços
              </p>
            </div>

            <div className="space-y-12 text-lilicayol-black">
              <section className="bg-gray-50/50 p-8 rounded-2xl border border-gray-100">
                <h2 className="text-2xl font-cormorant font-semibold mb-6 text-lilicayol-purple">
                  1. Aceitação dos Termos
                </h2>
                <div className="space-y-4 font-inter leading-relaxed">
                  <p>
                    Ao acessar e usar o site da Lilicayol, você concorda com estes termos de uso. 
                    Se não concordar com alguma parte destes termos, não utilize nossos serviços.
                  </p>
                </div>
              </section>

              <section className="bg-gradient-to-br from-lilicayol-purple/5 to-lilicayol-gold/5 p-8 rounded-2xl border border-lilicayol-purple/10">
                <h2 className="text-2xl font-cormorant font-semibold mb-6 text-lilicayol-purple">
                  2. Uso do Site
                </h2>
                <div className="space-y-4 font-inter leading-relaxed">
                  <p>
                    Você pode usar nosso site para:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Navegar e visualizar nossos produtos</li>
                    <li>Fazer pedidos através do WhatsApp</li>
                    <li>Entrar em contato conosco</li>
                    <li>Acessar informações sobre a marca</li>
                  </ul>
                </div>
              </section>

              <section className="bg-gray-50/50 p-8 rounded-2xl border border-gray-100">
                <h2 className="text-2xl font-cormorant font-semibold mb-6 text-lilicayol-purple">
                  3. Produtos e Preços
                </h2>
                <div className="space-y-4 font-inter leading-relaxed">
                  <p>
                    Todos os produtos estão sujeitos à disponibilidade. Reservamo-nos o direito de 
                    descontinuar qualquer produto a qualquer momento. Os preços são informados 
                    diretamente via WhatsApp e podem variar sem aviso prévio.
                  </p>
                </div>
              </section>

              <section className="bg-gradient-to-br from-lilicayol-purple/5 to-lilicayol-gold/5 p-8 rounded-2xl border border-lilicayol-purple/10">
                <h2 className="text-2xl font-cormorant font-semibold mb-6 text-lilicayol-purple">
                  4. Política de Trocas e Devoluções
                </h2>
                <div className="space-y-4 font-inter leading-relaxed">
                  <p>
                    Aceitamos trocas em até 7 dias após o recebimento do produto, desde que:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>O produto esteja em perfeito estado</li>
                    <li>Mantenha as etiquetas originais</li>
                    <li>Não tenha sido usado ou lavado</li>
                    <li>Seja comunicado via WhatsApp</li>
                  </ul>
                </div>
              </section>

              <section className="bg-gray-50/50 p-8 rounded-2xl border border-gray-100">
                <h2 className="text-2xl font-cormorant font-semibold mb-6 text-lilicayol-purple">
                  5. Propriedade Intelectual
                </h2>
                <div className="space-y-4 font-inter leading-relaxed">
                  <p>
                    Todo o conteúdo do site, incluindo textos, imagens, logotipos e design, 
                    é propriedade da Lilicayol e está protegido por direitos autorais. 
                    É proibida a reprodução sem autorização prévia.
                  </p>
                </div>
              </section>

              <section className="bg-gradient-to-br from-lilicayol-purple/5 to-lilicayol-gold/5 p-8 rounded-2xl border border-lilicayol-purple/10">
                <h2 className="text-2xl font-cormorant font-semibold mb-6 text-lilicayol-purple">
                  6. Limitação de Responsabilidade
                </h2>
                <div className="space-y-4 font-inter leading-relaxed">
                  <p>
                    A Lilicayol não se responsabiliza por danos indiretos, incidentais ou 
                    consequenciais decorrentes do uso de nossos produtos ou serviços, 
                    exceto quando exigido por lei.
                  </p>
                </div>
              </section>

              <section className="bg-gray-50/50 p-8 rounded-2xl border border-gray-100">
                <h2 className="text-2xl font-cormorant font-semibold mb-6 text-lilicayol-purple">
                  7. Alterações nos Termos
                </h2>
                <div className="space-y-4 font-inter leading-relaxed">
                  <p>
                    Reservamo-nos o direito de modificar estes termos a qualquer momento. 
                    As alterações entrarão em vigor imediatamente após a publicação no site.
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

export default TermosUso;
