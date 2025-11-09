
import React from 'react';
import { Page, Product } from '../types';

interface ProductHeaderProps {
  navigateTo: (page: Page, product?: Product) => void;
}

const ProductHeader: React.FC<ProductHeaderProps> = ({ navigateTo }) => {
  return (
    <header className="w-full bg-background-light dark:bg-background-dark border-b border-gray-200 dark:border-gray-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-3 text-secondary dark:text-white cursor-pointer" onClick={() => navigateTo('home')}>
                        <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" fill="currentColor"></path>
                        </svg>
                        <h1 className="text-xl font-bold">BuyPadi</h1>
                    </div>
                    <nav className="hidden md:flex items-center gap-6">
                        <a className="text-secondary dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal" href="#">Categories</a>
                        <a className="text-secondary dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal" href="#">Deals</a>
                        <a className="text-secondary dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal" href="#">Sell on BuyPadi</a>
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                        <span className="truncate">Log In</span>
                    </button>
                    <button className="hidden sm:flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-200 dark:bg-gray-700 text-secondary dark:text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                        <span className="truncate">Sign Up</span>
                    </button>
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDmottMHxUuDed9oxx3cBAp8SECV_gG9VaSxnm3uV1iMnHa7M377QYf9adybmLT08EwNdYvC1vxcdBbm1VTQcq2T1EBsCGCFo830dSBIfKndBwmOKRDG6AFejKnEdJLhSa-Kl0B16-Z1SLmySxUYWkx2UK6NreHGZD6NqITRnXlvQhVdk0XXwJmXiKjT7S3EQBhhwxou535-qM-y2szI-nHZkPWLs2NdBstm4G3WDB60rVjYWBH5itVenKOjct-8xXSu-YX39P4-g4")' }}></div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default ProductHeader;
