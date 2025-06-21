
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const Filtro = () => {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('search') || '';
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

  // Todos os produtos para filtrar
  const allProducts = [
    {
      name: "Vestido Floral",
      description: "Leve, fresco e ideal para o verão.",
      colors: ["Azul", "Branco", "Rosa"],
      sizes: ["P", "M", "G"],
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=600&fit=crop&crop=center",
      whatsappLink: "#",
      category: "feminino"
    },
    {
      name: "Camisa Oversized",
      description: "Estilo urbano com conforto.",
      colors: ["Bege", "Preto"],
      sizes: ["M", "G", "GG"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=600&fit=crop&crop=center",
      whatsappLink: "#",
      category: "feminino"
    },
    {
      name: "Calça Wide Leg",
      description: "Modelagem moderna e versátil.",
      colors: ["Jeans claro", "Jeans escuro"],
      sizes: ["36", "38", "40", "42"],
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=500&h=600&fit=crop&crop=center",
      whatsappLink: "#",
      category: "feminino"
    },
    {
      name: "Blazer Elegante",
      description: "Sofisticação para todas as ocasiões.",
      colors: ["Preto", "Nude", "Marinho"],
      sizes: ["P", "M", "G", "GG"],
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=600&fit=crop&crop=center",
      whatsappLink: "#",
      category: "feminino"
    },
    {
      name: "Bolsa de Mão Estruturada",
      description: "Elegância e praticidade em cada detalhe.",
      colors: ["Preto", "Camel", "Burgundy"],
      sizes: ["Único"],
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=600&fit=crop&crop=center",
      whatsappLink: "#",
      category: "acessorios"
    },
    {
      name: "Colar Delicado Dourado",
      description: "Acabamento refinado para looks especiais.",
      colors: ["Dourado", "Prateado"],
      sizes: ["Único"],
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=600&fit=crop&crop=center",
      whatsappLink: "#",
      category: "acessorios"
    }
  ];

  useEffect(() => {
    if (searchTerm) {
      const filtered = allProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.colors.some(color => color.toLowerCase().includes(searchTerm.toLowerCase())) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(allProducts);
    }
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-lilicayol-black mb-4">
              {searchTerm ? `Resultados para "${searchTerm}"` : 'Todos os Produtos'}
            </h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-lilicayol-purple to-lilicayol-gold mx-auto mb-6"></div>
            <p className="text-lg font-inter text-lilicayol-gray max-w-2xl mx-auto">
              {filteredProducts.length > 0 
                ? `Encontramos ${filteredProducts.length} produto${filteredProducts.length > 1 ? 's' : ''} para você.`
                : 'Nenhum produto encontrado para sua busca.'
              }
            </p>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((produto, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <ProductCard {...produto} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-cormorant font-semibold text-lilicayol-black mb-4">
                Nenhum produto encontrado
              </h3>
              <p className="text-lilicayol-gray font-inter mb-8">
                Tente buscar por outros termos ou explore nossas categorias.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="/feminino" 
                  className="px-6 py-3 bg-lilicayol-purple text-white font-inter font-medium rounded-full hover:bg-lilicayol-purple-dark transition-colors duration-300"
                >
                  Ver Feminino
                </a>
                <a 
                  href="/acessorios" 
                  className="px-6 py-3 border-2 border-lilicayol-purple text-lilicayol-purple font-inter font-medium rounded-full hover:bg-lilicayol-purple hover:text-white transition-all duration-300"
                >
                  Ver Acessórios
                </a>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Filtro;
