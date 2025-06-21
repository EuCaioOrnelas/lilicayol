
import React from 'react';

interface ProductCardProps {
  name: string;
  description: string;
  colors: string[];
  sizes: string[];
  image: string;
  whatsappLink: string;
}

const ProductCard = ({ name, description, colors, sizes, image, whatsappLink }: ProductCardProps) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-cormorant font-semibold text-lilicayol-black mb-2">
          {name}
        </h3>
        
        <p className="text-lilicayol-gray font-inter text-sm mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="space-y-3 mb-6">
          <div>
            <span className="text-xs font-inter font-semibold text-lilicayol-black uppercase tracking-wide mb-2 block">
              Cores disponíveis
            </span>
            <div className="flex flex-wrap gap-2">
              {colors.map((color, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-lilicayol-gray text-xs font-inter rounded-full border border-gray-200"
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
            <div className="flex flex-wrap gap-2">
              {sizes.map((size, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-lilicayol-gray text-xs font-inter rounded-full border border-gray-200"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <a
          href={whatsappLink}
          className="group/btn relative w-full block text-center py-3 bg-gradient-to-r from-lilicayol-purple to-lilicayol-purple-dark text-white font-inter font-medium rounded-full hover:from-lilicayol-purple-dark hover:to-lilicayol-purple transition-all duration-300 transform hover:scale-105 overflow-hidden"
        >
          <span className="relative z-10">Ver Produto</span>
          <div className="absolute inset-0 bg-gradient-to-r from-lilicayol-gold to-lilicayol-gold-dark opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
