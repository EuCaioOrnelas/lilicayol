
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { supabase } from '../integrations/supabase/client';

interface Product {
  id: string;
  name: string;
  description: string;
  colors: string[];
  sizes: string[];
  image_url: string;
  button_link: string;
  quantity?: number | null;
  category_id?: string | null;
}

interface Category {
  id: string;
  name: string;
  description: string | null;
}

const Categoria = () => {
  const { id } = useParams<{ id: string }>();
  const [category, setCategory] = useState<Category | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryAndProducts = async () => {
      if (!id) return;
      
      try {
        // Buscar categoria
        const { data: categoryData, error: categoryError } = await supabase
          .from('categories')
          .select('*')
          .eq('id', id)
          .maybeSingle();

        if (categoryError) {
          console.error('Erro ao buscar categoria:', categoryError);
        } else {
          setCategory(categoryData);
        }

        // Buscar produtos da categoria
        const { data: productsData, error: productsError } = await supabase
          .from('products')
          .select('*')
          .eq('category_id', id);

        if (productsError) {
          console.error('Erro ao buscar produtos:', productsError);
        } else {
          setProducts(productsData || []);
        }
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryAndProducts();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-24 sm:pt-28 md:pt-32">
          <div className="container mx-auto px-3 sm:px-4 md:px-8 py-12 sm:py-16">
            <div className="flex justify-center items-center h-64">
              <div className="text-base sm:text-lg text-lilicayol-gray">Carregando categoria...</div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!category) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-24 sm:pt-28 md:pt-32">
          <div className="container mx-auto px-3 sm:px-4 md:px-8 py-12 sm:py-16">
            <div className="text-center">
              <h1 className="text-xl sm:text-2xl font-playfair font-bold text-lilicayol-black mb-4">
                Categoria não encontrada
              </h1>
              <p className="text-lilicayol-gray text-sm sm:text-base">A categoria que você está procurando não existe.</p>
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
      <main className="pt-24 sm:pt-28 md:pt-32">
        <div className="container mx-auto px-3 sm:px-4 md:px-8 py-12 sm:py-16">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-lilicayol-black mb-3 sm:mb-4">
              {category.name}
            </h1>
            <div className="w-20 sm:w-24 h-0.5 bg-gradient-to-r from-lilicayol-beige to-lilicayol-gold mx-auto mb-4 sm:mb-6"></div>
            {category.description && (
              <p className="text-base sm:text-lg font-inter text-lilicayol-gray max-w-2xl mx-auto px-4 sm:px-0">
                {category.description}
              </p>
            )}
          </div>

          {products.length === 0 ? (
            <div className="text-center py-12 sm:py-16">
              <p className="text-base sm:text-lg text-lilicayol-gray">
                Nenhum produto encontrado nesta categoria.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {products.map((product, index) => (
                <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <ProductCard
                    name={product.name}
                    description={product.description}
                    colors={product.colors}
                    sizes={product.sizes}
                    image={product.image_url}
                    whatsappLink={`/produto/${product.id}`}
                    quantity={product.quantity}
                    categoryName={category.name}
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

export default Categoria;
