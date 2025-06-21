
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, Phone, Instagram, Send } from 'lucide-react';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode implementar o envio do formulário
    console.log('Formulário enviado:', formData);
    // Reset form
    setFormData({
      nome: '',
      email: '',
      assunto: '',
      mensagem: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-lilicayol-black mb-4">
              Contato
            </h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-lilicayol-purple to-lilicayol-gold mx-auto mb-6"></div>
            <p className="text-lg font-inter text-lilicayol-gray max-w-2xl mx-auto">
              Estamos aqui para ajudar. Entre em contato conosco através 
              dos canais abaixo ou envie uma mensagem.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Informações de Contato */}
            <div className="space-y-8">
              <h2 className="text-2xl font-cormorant font-semibold text-lilicayol-black mb-6">
                Fale Conosco
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-lilicayol-purple/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-lilicayol-purple" />
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-lilicayol-black mb-1">WhatsApp</h3>
                    <p className="text-lilicayol-gray font-inter">(11) 99999-9999</p>
                    <a 
                      href="https://wa.me/5511999999999" 
                      className="text-lilicayol-purple hover:text-lilicayol-purple-dark font-inter text-sm transition-colors duration-300"
                    >
                      Enviar mensagem
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-lilicayol-purple/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-lilicayol-purple" />
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-lilicayol-black mb-1">E-mail</h3>
                    <p className="text-lilicayol-gray font-inter">contato@lilicayol.com.br</p>
                    <a 
                      href="mailto:contato@lilicayol.com.br" 
                      className="text-lilicayol-purple hover:text-lilicayol-purple-dark font-inter text-sm transition-colors duration-300"
                    >
                      Enviar e-mail
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-lilicayol-purple/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-5 h-5 text-lilicayol-purple" />
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-lilicayol-black mb-1">Instagram</h3>
                    <p className="text-lilicayol-gray font-inter">@lilicayol</p>
                    <a 
                      href="#" 
                      className="text-lilicayol-purple hover:text-lilicayol-purple-dark font-inter text-sm transition-colors duration-300"
                    >
                      Seguir no Instagram
                    </a>
                  </div>
                </div>
              </div>

              {/* Horário de Atendimento */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-cormorant font-semibold text-lilicayol-black mb-4">
                  Horário de Atendimento
                </h3>
                <div className="space-y-2 text-sm font-inter text-lilicayol-gray">
                  <p>Segunda a Sexta: 9h às 18h</p>
                  <p>Sábado: 9h às 14h</p>
                  <p>Domingo: Fechado</p>
                </div>
              </div>
            </div>

            {/* Formulário de Contato */}
            <div>
              <h2 className="text-2xl font-cormorant font-semibold text-lilicayol-black mb-6">
                Envie uma Mensagem
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-inter font-medium text-lilicayol-black mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-lilicayol-purple focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-inter font-medium text-lilicayol-black mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-lilicayol-purple focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="assunto" className="block text-sm font-inter font-medium text-lilicayol-black mb-2">
                    Assunto
                  </label>
                  <select
                    id="assunto"
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-lilicayol-purple focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="duvidas">Dúvidas sobre produtos</option>
                    <option value="pedidos">Pedidos e encomendas</option>
                    <option value="trocas">Trocas e devoluções</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-inter font-medium text-lilicayol-black mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-lilicayol-purple focus:border-transparent transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-lilicayol-purple to-lilicayol-purple-dark text-white font-inter font-medium py-3 px-6 rounded-lg hover:from-lilicayol-purple-dark hover:to-lilicayol-purple transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contato;
