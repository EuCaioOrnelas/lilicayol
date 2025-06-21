
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const Feminino = () => {
  const roupasFemininas = [
    {
      name: "Vestido Floral",
      description: "Leve, fresco e ideal para o verão.",
      colors: ["Azul", "Branco", "Rosa"],
      sizes: ["P", "M", "G"],
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=600&fit=crop&crop=center",
      whatsappLink: "#"
    },
    {
      name: "Camisa Oversized",
      description: "Estilo urbano com conforto.",
      colors: ["Bege", "Preto"],
      sizes: ["M", "G", "GG"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=600&fit=crop&crop=center",
      whatsappLink: "#"
    },
    {
      name: "Calça Wide Leg",
      description: "Modelagem moderna e versátil.",
      colors: ["Jeans claro", "Jeans escuro"],
      sizes: ["36", "38", "40", "42"],
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=500&h=600&fit=crop&crop=center",
      whatsappLink: "#"
    },
    {
      name: "Blazer Elegante",
      description: "Sofisticação para todas as ocasiões.",
      colors: ["Preto", "Nude", "Marinho"],
      sizes: ["P", "M", "G", "GG"],
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=600&fit=crop&crop=center",
      whatsappLink: "#"
    },
    {
      name: "Saia Midi",
      description: "Elegância clássica reinventada.",
      colors: ["Preto", "Camel", "Bordô"],
      sizes: ["36", "38", "40", "42"],
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=600&fit=crop&crop=center",
      whatsappLink: "#"
    },
    {
      name: "Conjunto Alfaiataria",
      description: "Power dressing com toque feminino.",
      colors: ["Preto", "Cinza", "Azul marinho"],
      sizes: ["P", "M", "G"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=600&fit=crop&crop=center",
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
              Moda Feminina
            </h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-lilicayol-purple to-lilicayol-gold mx-auto mb-6"></div>
            <p className="text-lg font-inter text-lilicayol-gray max-w-2xl mx-auto">
              Uma coleção pensada para a mulher moderna que busca elegância 
              e versatilidade em cada peça.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roupasFemininas.map((produto, index) => (
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

export default Feminino;
