import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white dark:bg-gray-800/50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group flex-shrink-0 w-[240px] md:w-[280px]">
      <div className="relative">
        <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover" />
        {product.discount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            {product.discount}
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-base font-semibold text-secondary dark:text-white truncate group-hover:text-primary">{product.name}</h3>
        <div className="flex items-baseline mt-2">
            <p className="text-lg font-bold text-primary dark:text-accent">₦{product.price?.toLocaleString()}</p>
            {product.originalPrice && (
                <p className="text-sm text-gray-500 dark:text-gray-400 line-through ml-2">₦{product.originalPrice.toLocaleString()}</p>
            )}
        </div>
        {product.timeLeft && (
            <div className="mt-2 text-xs text-red-600 font-mono bg-red-100 rounded px-2 py-1 inline-block">
                {product.timeLeft}
            </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;