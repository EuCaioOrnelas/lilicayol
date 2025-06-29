
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';

interface ProductImage {
  url: string;
  alt: string;
}

interface ProductCarouselProps {
  images: ProductImage[];
  productName: string;
  className?: string;
}

const ProductCarousel = ({ images, productName, className = "" }: ProductCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const location = useLocation();
  
  // Verificar se está na página index (home)
  const isHomePage = location.pathname === '/';

  // Se não há imagens, não renderiza nada
  if (!images || images.length === 0) {
    console.log('ProductCarousel: Nenhuma imagem encontrada para', productName);
    return null;
  }

  // Se está na página home, sempre mostra apenas a primeira imagem sem controles
  if (isHomePage) {
    console.log('ProductCarousel: Página home - mostrando apenas primeira imagem para', productName);
    return (
      <div className={className}>
        <img
          src={images[0].url}
          alt={images[0].alt || productName}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  // Se há apenas uma imagem na página individual, renderiza sem carousel
  if (images.length === 1) {
    console.log('ProductCarousel: Apenas uma imagem para', productName);
    return (
      <div className={className}>
        <img
          src={images[0].url}
          alt={images[0].alt || productName}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  const nextImage = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    console.log('ProductCarousel: Próxima imagem clicada para', productName, 'índice atual:', currentIndex);
    setCurrentIndex((prev) => {
      const newIndex = (prev + 1) % images.length;
      console.log('ProductCarousel: Novo índice:', newIndex);
      return newIndex;
    });
  };

  const prevImage = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    console.log('ProductCarousel: Imagem anterior clicada para', productName, 'índice atual:', currentIndex);
    setCurrentIndex((prev) => {
      const newIndex = (prev - 1 + images.length) % images.length;
      console.log('ProductCarousel: Novo índice:', newIndex);
      return newIndex;
    });
  };

  const goToImage = (index: number, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    console.log('ProductCarousel: Indo para imagem', index, 'para', productName);
    setCurrentIndex(index);
  };

  console.log('ProductCarousel: Renderizando', productName, 'com', images.length, 'imagens, índice atual:', currentIndex);

  return (
    <div className={`relative group ${className}`}>
      {/* Imagem principal */}
      <div className="w-full h-full overflow-hidden">
        <img
          src={images[currentIndex].url}
          alt={images[currentIndex].alt || `${productName} - Imagem ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-all duration-500"
        />
      </div>

      {/* Botões de navegação */}
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"
        aria-label="Imagem anterior"
        type="button"
      >
        <ChevronLeft size={16} />
      </button>

      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"
        aria-label="Próxima imagem"
        type="button"
      >
        <ChevronRight size={16} />
      </button>

      {/* Indicadores de pontos */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={(e) => goToImage(index, e)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentIndex 
                ? 'bg-white scale-110' 
                : 'bg-white/60 hover:bg-white/80'
            }`}
            aria-label={`Ir para imagem ${index + 1}`}
            type="button"
          />
        ))}
      </div>

      {/* Contador de imagens */}
      <div className="absolute bottom-2 right-2 bg-black/60 text-white px-2 py-1 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default ProductCarousel;
