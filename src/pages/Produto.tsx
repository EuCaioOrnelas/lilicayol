import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCarousel from '../components/ProductCarousel';
import { supabase } from '../integrations/supabase/client';
import { AlertCircle } from 'lucide-react';

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
  images: ProductImage[];
  button_link: string;
  quantity?: number | null;
  category_id?: string | null;
  categories?: {
    name: string;
  } | null;
}

const Produto = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      
      try {
        const { data, error } = await supabase
          .from('products')
          .select(`
            *,
            categories (
              name
            )
          `)
          .eq('id', id)
          .maybeSingle();

        if (error) {
          console.error('Erro ao buscar produto:', error);
        } else if (data) {
          // Converter images de Json para ProductImage[]
          const processedProduct = {
            ...data,
            images: Array.isArray(data.images) ? data.images as unknown as ProductImage[] : []
          };
          setProduct(processedProduct);
        }
      } catch (error) {
        console.error('Erro ao buscar produto:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-20 sm:pt-24 lg:pt-32">
          <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
            <div className="flex justify-center items-center h-48 sm:h-64">
              <div className="text-base sm:text-lg text-lilicayol-gray">Carregando produto...</div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-20 sm:pt-24 lg:pt-32">
          <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
            <div className="text-center">
              <h1 className="text-xl sm:text-2xl font-playfair font-bold text-lilicayol-black mb-4">
                Produto não encontrado
              </h1>
              <p className="text-lilicayol-gray text-sm sm:text-base">O produto que você está procurando não existe.</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Preparar imagens para o carousel
  const productImages: ProductImage[] = [];
  
  // Adicionar imagens do campo images (novo formato)
  if (product.images && Array.isArray(product.images)) {
    productImages.push(...product.images);
  }
  
  // Se não há imagens no novo formato, usar image_url como fallback
  if (productImages.length === 0 && product.image_url) {
    productImages.push({
      url: product.image_url,
      alt: product.name
    });
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20 sm:pt-24 lg:pt-32">
        <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Carrossel de imagens do produto */}
            <div className="aspect-square overflow-hidden rounded-lg">
              <ProductCarousel
                images={productImages}
                productName={product.name}
                className="w-full h-full"
              />
            </div>

            {/* Informações do produto */}
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-lilicayol-black mb-2">
                  {product.name}
                </h1>
                {product.categories && (
                  <p className="text-lilicayol-beige font-inter text-sm uppercase tracking-wide">
                    {product.categories.name}
                  </p>
                )}
              </div>

              {/* Aviso sobre compra */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 sm:p-4 flex items-start gap-3">
                <AlertCircle size={20} className="text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-amber-800 font-inter text-sm">
                    <span className="font-semibold">Importante:</span> A compra não é realizada diretamente pelo site. 
                    Clique em "Entrar em Contato" para finalizar sua compra via WhatsApp com atendimento personalizado.
                  </p>
                </div>
              </div>

              <p className="text-lilicayol-gray font-inter text-base sm:text-lg leading-relaxed">
                {product.description}
              </p>

              {product.quantity !== null && product.quantity !== undefined && (
                <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                  <p className="text-sm font-inter text-lilicayol-black">
                    <span className="font-semibold">Disponibilidade:</span> {product.quantity} unidades
                  </p>
                </div>
              )}

              {/* Cores disponíveis */}
              {product.colors && product.colors.length > 0 && (
                <div>
                  <h3 className="text-base sm:text-lg font-cormorant font-semibold text-lilicayol-black mb-3">
                    Cores Disponíveis
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color, index) => (
                      <span
                        key={index}
                        className="px-3 py-2 sm:px-4 sm:py-2 bg-gray-100 text-lilicayol-gray text-sm font-inter rounded-full border border-gray-200"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Tamanhos disponíveis */}
              {product.sizes && product.sizes.length > 0 && (
                <div>
                  <h3 className="text-base sm:text-lg font-cormorant font-semibold text-lilicayol-black mb-3">
                    Tamanhos
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size, index) => (
                      <span
                        key={index}
                        className="px-3 py-2 sm:px-4 sm:py-2 bg-gray-100 text-lilicayol-gray text-sm font-inter rounded-full border border-gray-200"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Botão de contato */}
              <div className="pt-4 sm:pt-6">
                <a
                  href={product.button_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center py-3 sm:py-4 bg-gradient-to-r from-lilicayol-beige to-lilicayol-beige-dark text-white font-inter font-medium rounded-full hover:from-lilicayol-beige-dark hover:to-lilicayol-beige-dark transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  Entrar em Contato pelo WhatsApp
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

export default Produto;
