
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Edit, Trash2, Package, Tag } from 'lucide-react';

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
  created_at: string;
  updated_at: string;
  categories?: {
    id: string;
    name: string;
  } | null;
}

interface ProductListProps {
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete: (productId: string, productName: string) => void;
}

const ProductList = ({ products, onEdit, onDelete }: ProductListProps) => {
  if (products.length === 0) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <p className="text-lilicayol-gray">Nenhum produto cadastrado ainda.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden">
          <div className="aspect-square overflow-hidden">
            <img
              src={product.image_url}
              alt={product.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <CardContent className="p-4">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-cormorant font-semibold text-lg text-lilicayol-black flex-1">
                {product.name}
              </h3>
              {product.categories && (
                <div className="flex items-center gap-1 ml-2">
                  <Tag size={14} className="text-lilicayol-beige" />
                  <span className="text-xs px-2 py-1 bg-lilicayol-beige/20 text-lilicayol-beige rounded-full whitespace-nowrap">
                    {product.categories.name}
                  </span>
                </div>
              )}
            </div>
            
            <p className="text-lilicayol-gray text-sm mb-3 line-clamp-2">
              {product.description}
            </p>
            
            <div className="space-y-2 mb-4">
              <div>
                <span className="text-xs font-semibold text-lilicayol-black uppercase tracking-wide">
                  Cores:
                </span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {product.colors.map((color, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-xs rounded-full"
                    >
                      {color}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <span className="text-xs font-semibold text-lilicayol-black uppercase tracking-wide">
                  Tamanhos:
                </span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {product.sizes.map((size, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-xs rounded-full"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>

              {product.quantity !== null && product.quantity !== undefined && (
                <div className="flex items-center gap-2 mt-2 p-2 bg-lilicayol-beige/10 rounded-lg">
                  <Package size={16} className="text-lilicayol-beige" />
                  <span className="text-sm font-medium text-lilicayol-black">
                    Restam {product.quantity} {product.quantity === 1 ? 'peça' : 'peças'}
                  </span>
                </div>
              )}
            </div>

            <div className="flex gap-2">
              <Button
                onClick={() => onEdit(product)}
                size="sm"
                variant="outline"
                className="flex-1 flex items-center gap-2"
              >
                <Edit size={14} />
                Editar
              </Button>
              <Button
                onClick={() => onDelete(product.id, product.name)}
                size="sm"
                variant="destructive"
                className="flex-1 flex items-center gap-2"
              >
                <Trash2 size={14} />
                Excluir
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProductList;
