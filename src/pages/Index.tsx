
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ProductSection from '../components/ProductSection';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <AboutSection />
      <ProductSection />
    </Layout>
  );
};

export default Index;
