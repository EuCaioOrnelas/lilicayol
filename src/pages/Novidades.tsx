
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const Novidades = () => {
  const novidades = [
    {
      name: "Vestido Midi Canelado",
      description: "Nova modelagem com textura exclusiva.",
      colors: ["Preto", "Camel", "Verde oliva"],
      sizes: ["P", "M", "G"],
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=600&fit=crop&crop=center",
      whatsappLink: "#"
    },
    {
      name: "Blazer Oversized Premium",
      description: "Peça statement para looks poderosos.",
      colors: ["Off white", "Preto", "Camel"],
      sizes: ["P", "M", "G", "GG"],
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=600&fit=crop&crop=center",
      whatsappLink: "#"
    },
    {
      name: "Conjunto Tricot",
      description: "Conforto e elegância em um só look.",
      colors: ["Bege", "Rosa", "Cinza"],
      sizes: ["P", "M", "G"],
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=500&h=600&fit=crop&crop=center",
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
              Novidades
            </h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-lilicayol-purple to-lilicayol-gold mx-auto mb-6"></div>
            <p className="text-lg font-inter text-lilicayol-gray max-w-2xl mx-auto">
              Descubra as últimas tendências da nossa coleção, 
              peças exclusivas que acabaram de chegar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {novidades.map((produto, index) => (
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

export default Novidades;
