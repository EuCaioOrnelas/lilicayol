
import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Novidades', href: '#novidades' },
    { name: 'Feminino', href: '#feminino' },
    { name: 'Masculino', href: '#masculino' },
    { name: 'Acessórios', href: '#acessorios' },
    { name: 'Contato', href: '#contato' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        {/* Top bar with logo and search */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex-1"></div>
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-3xl md:text-4xl font-playfair font-bold text-lilicayol-black tracking-wide">
              Lilicayol
              <span className="block w-12 h-0.5 bg-gradient-to-r from-lilicayol-purple to-lilicayol-gold mx-auto mt-1"></span>
            </h1>
          </div>
          
          {/* Search */}
          <div className="flex-1 flex justify-end">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-lilicayol-gray" />
              <input
                type="text"
                placeholder="Buscar..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-lilicayol-purple focus:border-transparent transition-all duration-300 w-32 md:w-48"
              />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="relative">
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center justify-center space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-lilicayol-black font-inter font-medium hover:text-lilicayol-purple transition-colors duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-lilicayol-purple to-lilicayol-gold transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex justify-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-lilicayol-black hover:text-lilicayol-purple transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 py-4 animate-slide-up">
              <ul className="space-y-4">
                {menuItems.map((item) => (
                  <li key={item.name} className="text-center">
                    <a
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-lilicayol-black font-inter font-medium hover:text-lilicayol-purple transition-colors duration-300"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
