
import React, { useState, useEffect } from 'react';
import { X, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../integrations/supabase/client';

interface Category {
  id: string;
  name: string;
  description: string | null;
  image_url: string | null;
}

interface CategoriesPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const CategoriesPopup = ({ isOpen, onClose }: CategoriesPopupProps) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      if (!isOpen) return;

      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('categories')
          .select('*')
          .order('name');

        if (error) {
          console.error('Erro ao buscar categorias:', error);
        } else {
          setCategories(data || []);
        }
      } catch (error) {
        console.error('Erro ao carregar categorias:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-96 overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <Tag size={20} className="text-lilicayol-beige" />
            <h3 className="font-inter font-semibold text-lilicayol-black">
              Todas as Categorias
            </h3>
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
              <div className="text-lilicayol-gray">Carregando categorias...</div>
            </div>
          ) : categories.length === 0 ? (
            <div className="p-8 text-center">
              <div className="text-lilicayol-gray">Nenhuma categoria disponível</div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/categoria/${category.id}`}
                  onClick={onClose}
                  className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-lilicayol-beige transition-all group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-lilicayol-beige to-lilicayol-beige-dark rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform overflow-hidden">
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
                      <h4 className="font-inter font-semibold text-lilicayol-black mb-1">
                        {category.name}
                      </h4>
                      {category.description && (
                        <p className="text-sm text-lilicayol-gray">
                          {category.description}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPopup;
