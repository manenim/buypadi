
import React, { useState, useCallback } from 'react';
import AdminDashboard from './views/AdminDashboard';
import HomePage from './views/HomePage';
import CreateListingPage from './views/CreateListingPage';
import ProductDetailPage from './views/ProductDetailPage';
import ChatPage from './views/ChatPage';
import { Page, Product } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const navigateTo = useCallback((page: Page, product?: Product) => {
    setCurrentPage(page);
    if (product) {
      setSelectedProduct(product);
    }
    window.scrollTo(0, 0);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage navigateTo={navigateTo} />;
      case 'adminDashboard':
        return <AdminDashboard navigateTo={navigateTo} />;
      case 'createListing':
        return <CreateListingPage navigateTo={navigateTo} />;
      case 'productDetail':
        return selectedProduct ? <ProductDetailPage product={selectedProduct} navigateTo={navigateTo} /> : <HomePage navigateTo={navigateTo} />;
      case 'chat':
        return <ChatPage navigateTo={navigateTo} />;
      default:
        return <HomePage navigateTo={navigateTo} />;
    }
  };

  return renderPage();
};

export default App;