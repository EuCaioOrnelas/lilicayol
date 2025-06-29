
import React, { useState, useEffect, useCallback } from 'react';
import { X, Search, Package, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../integrations/supabase/client';
import { debounce } from 'lodash';

interface ProductImage {
  url: string;
  alt: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  image_url: string;
  images: ProductImage[] | null;
  quantity?: number | null;
  categories?: {
    id: string;
    name: string;
    image_url?: string | null;
  } | null;
}

interface Category {
  id: string;
  name: string;
  description: string | null;
  image_url: string | null;
}

interface SearchPopupProps {
  isOpen: boolean;
  onClose: () => void;
  searchTerm: string;
  onSearchTermChange: (term: string) => void;
}

const SearchPopup = ({ isOpen, onClose, searchTerm, onSearchTermChange }: SearchPopupProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);

  const debouncedSearch = useCallback(
    debounce(async (term: string) => {
      if (term.trim().length < 2) {
        setProducts([]);
        setCategories([]);
        return;
      }

      setLoading(true);
      try {
        // Buscar produtos
        const { data: productsData, error: productsError } = await supabase
          .from('products')
          .select(`
            id,
            name,
            description,
            image_url,
            images,
            quantity,
            categories (
              id,
              name,
              image_url
            )
          `)
          .or(`name.ilike.%${term}%,description.ilike.%${term}%`)
          .limit(8);

        // Buscar categorias
        const { data: categoriesData, error: categoriesError } = await supabase
          .from('categories')
          .select('*')
          .or(`name.ilike.%${term}%,description.ilike.%${term}%`)
          .limit(5);

        if (productsError) {
          console.error('Erro ao buscar produtos:', productsError);
        } else {
          // Converter images de Json para ProductImage[]
          const processedProducts = (productsData || []).map(product => ({
            ...product,
            images: Array.isArray(product.images) ? product.images as unknown as ProductImage[] : null
          }));
          setProducts(processedProducts);
        }

        if (categoriesError) {
          console.error('Erro ao buscar categorias:', categoriesError);
        } else {
          setCategories(categoriesData || []);
        }
      } catch (error) {
        console.error('Erro na busca:', error);
      } finally {
        setLoading(false);
      }
    }, 300),
    []
  );

  useEffect(() => {
    debouncedSearch(searchTerm);
  }, [searchTerm, debouncedSearch]);

  if (!isOpen) return null;

  const getProductImage = (product: Product) => {
    if (product.images && Array.isArray(product.images) && product.images.length > 0) {
      return product.images[0].url;
    }
    return product.image_url;
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center p-4 pt-20">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-96 overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2 flex-1">
            <Search size={20} className="text-lilicayol-beige" />
            <input
              type="text"
              placeholder="Pesquisar produtos ou categorias..."
              value={searchTerm}
              onChange={(e) => onSearchTermChange(e.target.value)}
              className="flex-1 outline-none font-inter text-lilicayol-black placeholder-lilicayol-gray"
              autoFocus
            />
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto">
          {loading ? (
            <div className="p-8 text-center">
              <div className="text-lilicayol-gray">Pesquisando...</div>
            </div>
          ) : searchTerm.trim().length < 2 ? (
            <div className="p-8 text-center">
              <div className="text-lilicayol-gray">Digite pelo menos 2 caracteres para pesquisar</div>
            </div>
          ) : products.length === 0 && categories.length === 0 ? (
            <div className="p-8 text-center">
              <div className="text-lilicayol-gray">Nenhum resultado encontrado</div>
            </div>
          ) : (
            <div className="p-4 space-y-6">
              {/* Resultados de Categorias */}
              {categories.length > 0 && (
                <div>
                  <h3 className="font-inter font-semibold text-lilicayol-black mb-3 flex items-center gap-2">
                    <Tag size={16} />
                    Categorias ({categories.length})
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <Link
                        key={category.id}
                        to={`/categoria/${category.id}`}
                        onClick={onClose}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-lilicayol-beige to-lilicayol-beige-dark rounded-lg flex items-center justify-center overflow-hidden">
                          {category.image_url ? (
                            <img
                              src={category.image_url}
                              alt={category.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <span className="text-white font-bold text-lg">
                              {category.name.charAt(0)}
                            </span>
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-inter font-semibold text-lilicayol-black">
                            {category.name}
                          </h4>
                          {category.description && (
                            <p className="text-sm text-lilicayol-gray line-clamp-1">
                              {category.description}
                            </p>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Resultados de Produtos */}
              {products.length > 0 && (
                <div>
                  <h3 className="font-inter font-semibold text-lilicayol-black mb-3 flex items-center gap-2">
                    <Package size={16} />
                    Produtos ({products.length})
                  </h3>
                  <div className="space-y-2">
                    {products.map((product) => (
                      <Link
                        key={product.id}
                        to={`/produto/${product.id}`}
                        onClick={onClose}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
                          <img
                            src={getProductImage(product)}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-inter font-semibold text-lilicayol-black">
                            {product.name}
                          </h4>
                          <p className="text-sm text-lilicayol-gray line-clamp-1">
                            {product.description}
                          </p>
                          <div className="flex items-center gap-4 mt-1">
                            {product.categories && (
                              <span className="text-xs px-2 py-1 bg-lilicayol-beige/20 text-lilicayol-beige rounded-full">
                                {product.categories.name}
                              </span>
                            )}
                            {product.quantity !== null && product.quantity !== undefined && (
                              <span className="text-xs text-lilicayol-gray">
                                {product.quantity} disponíveis
                              </span>
                            )}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPopup;
