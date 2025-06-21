
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const Acessorios = () => {
  const acessorios = [
    {
      name: "Bolsa de Mão Estruturada",
      description: "Elegância e praticidade em cada detalhe.",
      colors: ["Preto", "Camel", "Burgundy"],
      sizes: ["Único"],
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=600&fit=crop&crop=center",
      whatsappLink: "#"
    },
    {
      name: "Colar Delicado Dourado",
      description: "Acabamento refinado para looks especiais.",
      colors: ["Dourado", "Prateado"],
      sizes: ["Único"],
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=600&fit=crop&crop=center",
      whatsappLink: "#"
    },
    {
      name: "Óculos de Sol Retro",
      description: "Proteção e estilo em uma só peça.",
      colors: ["Preto", "Tortoise", "Dourado"],
      sizes: ["Único"],
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&h=600&fit=crop&crop=center",
      whatsappLink: "#"
    },
    {
      name: "Lenço de Seda",
      description: "Versatilidade para compor diversos looks.",
      colors: ["Floral", "Listrado", "Liso"],
      sizes: ["70x70cm"],
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=500&h=600&fit=crop&crop=center",
      whatsappLink: "#"
    },
    {
      name: "Relógio Minimalista",
      description: "Design atemporal com elegância moderna.",
      colors: ["Dourado", "Prateado", "Rose Gold"],
      sizes: ["Único"],
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=600&fit=crop&crop=center",
      whatsappLink: "#"
    },
    {
      name: "Carteira de Couro",
      description: "Sofisticação e organização em suas mãos.",
      colors: ["Preto", "Camel", "Nude"],
      sizes: ["Único"],
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=600&fit=crop&crop=center",
      whatsappLink: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-lilicayol-black mb-4">
              Acessórios
            </h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-lilicayol-purple to-lilicayol-gold mx-auto mb-6"></div>
            <p className="text-lg font-inter text-lilicayol-gray max-w-2xl mx-auto">
              Detalhes que fazem a diferença. Acessórios cuidadosamente selecionados 
              para complementar seu estilo único.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {acessorios.map((produto, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <ProductCard {...produto} />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Acessorios;
