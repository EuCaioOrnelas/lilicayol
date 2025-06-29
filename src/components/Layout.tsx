
import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  showHeaderFooter?: boolean;
}

const Layout = ({ children, showHeaderFooter = true }: LayoutProps) => {
  if (!showHeaderFooter) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20 sm:pt-24 md:pt-28 lg:pt-32">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
