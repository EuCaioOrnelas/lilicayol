
import React, { useState } from 'react';
import { Search, Menu, X, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import SearchPopup from './SearchPopup';
import CategoriesPopup from './CategoriesPopup';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchPopupOpen, setIsSearchPopupOpen] = useState(false);
  const [isCategoriesPopupOpen, setIsCategoriesPopupOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Novidades', href: '/novidades' },
    { name: 'Categorias', href: '#', onClick: () => setIsCategoriesPopupOpen(true) },
    { name: 'Contato', href: '/contato' }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setIsSearchPopupOpen(true);
    }
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (value.trim()) {
      setIsSearchPopupOpen(true);
    } else {
      setIsSearchPopupOpen(false);
    }
  };

  const handleSearchPopupClose = () => {
    setIsSearchPopupOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
          {/* Top bar with logo and search */}
          <div className="flex items-center justify-between mb-2 sm:mb-4">
            <div className="flex-1 md:block hidden"></div>
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-lilicayol-black tracking-wide hover:text-lilicayol-beige transition-colors duration-300">
                  Lilicayol
                  <span className="block w-8 sm:w-10 md:w-12 h-0.5 bg-gradient-to-r from-lilicayol-beige to-lilicayol-gold mx-auto mt-1"></span>
                </h1>
              </Link>
            </div>
            
            {/* Search - Hidden on small screens */}
            <div className="flex-1 justify-end hidden md:flex">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-lilicayol-gray" />
                <input
                  type="text"
                  placeholder="Buscar produtos..."
                  value={searchTerm}
                  onChange={handleSearchInputChange}
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-lilicayol-beige focus:border-transparent transition-all duration-300 w-32 md:w-48"
                />
              </form>
            </div>

            {/* Mobile search icon */}
            <div className="flex-1 flex justify-end md:hidden">
              <button className="p-2 text-lilicayol-black hover:text-lilicayol-beige transition-colors duration-300">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Mobile search bar - shown when search icon is clicked */}
          <div className="mb-3 md:hidden">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-lilicayol-gray" />
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={searchTerm}
                onChange={handleSearchInputChange}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-lilicayol-beige focus:border-transparent transition-all duration-300 text-sm"
              />
            </form>
          </div>

          {/* Navigation */}
          <nav className="relative">
            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center justify-center space-x-6 lg:space-x-8">
              {menuItems.map((item) => (
                <li key={item.name}>
                  {item.onClick ? (
                    <button
                      onClick={item.onClick}
                      className="text-lilicayol-black font-inter font-medium hover:text-lilicayol-beige transition-colors duration-300 relative group flex items-center gap-1 text-sm lg:text-base"
                    >
                      {item.name}
                      <ChevronDown size={14} />
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-lilicayol-beige to-lilicayol-gold transition-all duration-300 group-hover:w-full"></span>
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-lilicayol-black font-inter font-medium hover:text-lilicayol-beige transition-colors duration-300 relative group text-sm lg:text-base"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-lilicayol-beige to-lilicayol-gold transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex justify-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-lilicayol-black hover:text-lilicayol-beige transition-colors duration-300"
              >
                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 py-3 animate-slide-up shadow-lg">
                <ul className="space-y-3">
                  {menuItems.map((item) => (
                    <li key={item.name} className="text-center">
                      {item.onClick ? (
                        <button
                          onClick={() => {
                            item.onClick();
                            setIsMenuOpen(false);
                          }}
                          className="text-lilicayol-black font-inter font-medium hover:text-lilicayol-beige transition-colors duration-300 text-base py-2"
                        >
                          {item.name}
                        </button>
                      ) : (
                        <Link
                          to={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="text-lilicayol-black font-inter font-medium hover:text-lilicayol-beige transition-colors duration-300 text-base py-2 block"
                        >
                          {item.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </nav>
        </div>
      </header>

      {/* Search Popup */}
      <SearchPopup
        isOpen={isSearchPopupOpen}
        onClose={handleSearchPopupClose}
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
      />

      {/* Categories Popup */}
      <CategoriesPopup
        isOpen={isCategoriesPopupOpen}
        onClose={() => setIsCategoriesPopupOpen(false)}
      />
    </>
  );
};

export default Header;
