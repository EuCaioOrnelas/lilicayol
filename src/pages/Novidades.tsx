import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
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

const Novidades = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentProducts = async () => {
      try {
        // Data de 30 dias atrás
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

        const { data, error } = await supabase
          .from('products')
          .select(`
            *,
            categories (
              name
            )
          `)
          .or(`created_at.gte.${thirtyDaysAgo.toISOString()},updated_at.gte.${thirtyDaysAgo.toISOString()}`)
          .order('updated_at', { ascending: false });

        if (error) {
          console.error('Erro ao buscar produtos recentes:', error);
        } else {
          // Converter images de Json para ProductImage[]
          const processedProducts = (data || []).map(product => ({
            ...product,
            images: Array.isArray(product.images) ? product.images as unknown as ProductImage[] : null
          }));
          setProducts(processedProducts);
        }
      } catch (error) {
        console.error('Erro ao carregar novidades:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentProducts();
  }, []);

  if (loading) {
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
            <div className="flex justify-center items-center h-64">
              <div className="text-lg text-lilicayol-gray">Carregando novidades...</div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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
              peças que foram adicionadas ou atualizadas nos últimos 30 dias.
            </p>
          </div>

          {products.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-lilicayol-gray">
                Nenhuma novidade nos últimos 30 dias.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((produto, index) => (
                <div key={produto.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <ProductCard
                    name={produto.name}
                    description={produto.description}
                    colors={produto.colors}
                    sizes={produto.sizes}
                    image={produto.image_url}
                    images={produto.images}
                    whatsappLink={`/produto/${produto.id}`}
                    quantity={produto.quantity}
                    categoryName={produto.categories?.name}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Novidades;
