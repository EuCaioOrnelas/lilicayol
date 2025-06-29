
import React from 'react';
import { Package, Tag } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ProductCarousel from './ProductCarousel';

interface ProductImage {
  url: string;
  alt: string;
}

interface ProductCardProps {
  name: string;
  description: string;
  colors: string[];
  sizes: string[];
  image: string;
  images?: ProductImage[];
  whatsappLink: string;
  quantity?: number | null;
  categoryName?: string | null;
}

const ProductCard = ({ name, description, colors, sizes, image, images, whatsappLink, quantity, categoryName }: ProductCardProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  // Se whatsappLink começa com /produto/, é um link interno
  const isProductLink = whatsappLink.startsWith('/produto/');

  // Preparar imagens para o carousel
  const productImages: ProductImage[] = [];
  
  // Adicionar imagens do campo images (novo formato)
  if (images && Array.isArray(images)) {
    productImages.push(...images);
  }
  
  // Se não há imagens no novo formato, usar image como fallback
  if (productImages.length === 0 && image) {
    productImages.push({
      url: image,
      alt: name
    });
  }

  // Truncar descrição para homepage
  const truncateDescription = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  const displayDescription = isHomePage ? truncateDescription(description) : description;

  return (
    <div className="group bg-white rounded-lg overflow-hidden border border-gray-300/50 hover:border-gray-400/50 shadow-sm hover:shadow-md transition-all duration-500 transform hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <div className="w-full h-64 sm:h-72 md:h-80">
          <ProductCarousel
            images={productImages}
            productName={name}
            className="w-full h-full group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Indicador de quantidade no canto superior direito */}
        {quantity !== null && quantity !== undefined && (
          <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-white/90 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-1 rounded-full shadow-lg">
            <div className="flex items-center gap-1 sm:gap-2">
              <Package size={12} className="sm:w-3.5 sm:h-3.5 text-lilicayol-beige" />
              <span className="text-xs font-medium text-lilicayol-black">
                Restam {quantity}
              </span>
            </div>
          </div>
        )}

        {/* Categoria no canto superior esquerdo */}
        {categoryName && (
          <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-lilicayol-beige/90 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-1 rounded-full shadow-lg">
            <div className="flex items-center gap-1 sm:gap-2">
              <Tag size={12} className="sm:w-3.5 sm:h-3.5 text-white" />
              <span className="text-xs font-medium text-white">
                {categoryName}
              </span>
            </div>
          </div>
        )}
      </div>
      
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-cormorant font-semibold text-lilicayol-black mb-2 line-clamp-2">
          {name}
        </h3>
        
        <p className="text-lilicayol-gray font-inter text-sm mb-4 leading-relaxed line-clamp-3">
          {displayDescription}
        </p>
        
        <div className="space-y-3 mb-6">
          <div>
            <span className="text-xs font-inter font-semibold text-lilicayol-black uppercase tracking-wide mb-2 block">
              Cores disponíveis
            </span>
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {colors.map((color, index) => (
                <span
                  key={index}
                  className="px-2 py-1 sm:px-3 sm:py-1 bg-gray-100 text-lilicayol-gray text-xs font-inter rounded-full border border-gray-200"
                >
                  {color}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <span className="text-xs font-inter font-semibold text-lilicayol-black uppercase tracking-wide mb-2 block">
              Tamanhos
            </span>
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {sizes.map((size, index) => (
                <span
                  key={index}
                  className="px-2 py-1 sm:px-3 sm:py-1 bg-gray-100 text-lilicayol-gray text-xs font-inter rounded-full border border-gray-200"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {isProductLink ? (
          <Link
            to={whatsappLink}
            className="group/btn relative w-full block text-center py-3 bg-gradient-to-r from-lilicayol-beige to-lilicayol-beige-dark text-white font-inter font-medium rounded-full hover:from-lilicayol-beige-dark hover:to-lilicayol-beige-dark transition-all duration-300 transform hover:scale-105 overflow-hidden text-sm sm:text-base"
          >
            <span className="relative z-10">Ver Produto</span>
            <div className="absolute inset-0 bg-gradient-to-r from-lilicayol-beige-dark to-lilicayol-beige-dark opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
          </Link>
        ) : (
          <a
            href={whatsappLink}
            className="group/btn relative w-full block text-center py-3 bg-gradient-to-r from-lilicayol-beige to-lilicayol-beige-dark text-white font-inter font-medium rounded-full hover:from-lilicayol-beige-dark hover:to-lilicayol-beige-dark transition-all duration-300 transform hover:scale-105 overflow-hidden text-sm sm:text-base"
          >
            <span className="relative z-10">Ver Produto</span>
            <div className="absolute inset-0 bg-gradient-to-r from-lilicayol-beige-dark to-lilicayol-beige-dark opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
