
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { supabase } from '../integrations/supabase/client';

interface ProductImage {
  url: string;
  alt: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  colors: string[];
  sizes: string[];
  image_url: string;
  images: ProductImage[] | null;
  button_link: string;
  quantity?: number | null;
  category_id?: string | null;
  categories?: {
    name: string;
  } | null;
}

const ProductSection = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [currentLimit, setCurrentLimit] = useState(9);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, error } = await supabase
          .from('products')
          .select(`
            *,
            categories (
              name
            )
          `);

        if (error) {
          console.error('Erro ao buscar produtos:', error);
        } else {
          // Converter images de Json para ProductImage[]
          const processedProducts = (data || []).map(product => ({
            ...product,
            images: Array.isArray(product.images) ? product.images as unknown as ProductImage[] : null
          }));
          console.log('Total de produtos carregados:', processedProducts.length);
          setProducts(processedProducts);
          setDisplayedProducts(processedProducts.slice(0, 9));
        }
      } catch (error) {
        console.error('Erro ao carregar produtos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleShowMore = () => {
    console.log('Botão Ver Mais clicado. Produtos totais:', products.length, 'Exibidos:', displayedProducts.length);
    setLoadingMore(true);
    const newLimit = currentLimit + 6;
    setCurrentLimit(newLimit);
    
    setTimeout(() => {
      setDisplayedProducts(products.slice(0, newLimit));
      setLoadingMore(false);
    }, 300);
  };

  const hasMoreProducts = displayedProducts.length < products.length;
  console.log('Tem mais produtos?', hasMoreProducts, 'Exibidos:', displayedProducts.length, 'Total:', products.length);

  if (loading) {
    return (
      <section id="produtos" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-lilicayol-black mb-4">
              Nossa Coleção
            </h2>
            <div className="w-16 sm:w-24 h-0.5 bg-gradient-to-r from-lilicayol-beige to-lilicayol-gold mx-auto mb-6"></div>
            <p className="text-base sm:text-lg font-inter text-lilicayol-gray max-w-2xl mx-auto px-4">
              Peças cuidadosamente selecionadas para mulheres que valorizam qualidade, 
              estilo e exclusividade em cada detalhe.
            </p>
          </div>
          <div className="flex justify-center items-center h-48 sm:h-64">
            <div className="text-base sm:text-lg text-lilicayol-gray">Carregando produtos...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="produtos" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-lilicayol-black mb-4">
            Nossa Coleção
          </h2>
          <div className="w-16 sm:w-24 h-0.5 bg-gradient-to-r from-lilicayol-beige to-lilicayol-gold mx-auto mb-6"></div>
          <p className="text-base sm:text-lg font-inter text-lilicayol-gray max-w-2xl mx-auto px-4">
            Peças cuidadosamente selecionadas para mulheres que valorizam qualidade, 
            estilo e exclusividade em cada detalhe.
          </p>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-12 sm:py-16">
            <p className="text-base sm:text-lg text-lilicayol-gray">
              Nenhum produto cadastrado ainda.
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {displayedProducts.map((product, index) => (
                <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <ProductCard
                    name={product.name}
                    description={product.description}
                    colors={product.colors}
                    sizes={product.sizes}
                    image={product.image_url}
                    images={product.images}
                    whatsappLink={`/produto/${product.id}`}
                    quantity={product.quantity}
                    categoryName={product.categories?.name}
                  />
                </div>
              ))}
            </div>

            {hasMoreProducts && (
              <div className="text-center mt-8 sm:mt-12">
                <button
                  onClick={handleShowMore}
                  disabled={loadingMore}
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-lilicayol-beige to-lilicayol-beige-dark text-white font-inter font-medium rounded-full hover:from-lilicayol-beige-hover hover:to-lilicayol-beige transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 text-sm sm:text-base"
                >
                  {loadingMore ? 'Carregando...' : 'Ver Mais Produtos'}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default ProductSection;
