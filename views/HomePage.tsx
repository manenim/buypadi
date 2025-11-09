
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Page, Product } from '../types';
import { 
    TRENDING_ADS, 
    RECOMMENDED_FOR_YOU, 
    RECENTLY_VIEWED, 
    DISCOUNT_ITEMS, 
    EXPLORE_PRODUCTS,
    NEW_CATEGORIES 
} from '../constants';

interface HomePageProps {
  navigateTo: (page: Page, product?: Product) => void;
}

const ProductSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
    return (
        <section className="relative">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-secondary dark:text-white">{title}</h2>
                <div className="hidden sm:flex items-center gap-2">
                    <button className="size-9 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800/50 text-secondary dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                        <span className="material-symbols-outlined text-xl">chevron_left</span>
                    </button>
                    <button className="size-9 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800/50 text-secondary dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                        <span className="material-symbols-outlined text-xl">chevron_right</span>
                    </button>
                </div>
            </div>
            <div className="flex overflow-x-auto gap-6 pb-4 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 no-scrollbar">
                {children}
            </div>
        </section>
    );
};

const HomePage: React.FC<HomePageProps> = ({ navigateTo }) => {
  const categoryIconColors: { [key: string]: string } = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    purple: 'bg-purple-100 text-purple-600',
    orange: 'bg-orange-100 text-orange-600',
    red: 'bg-red-100 text-red-600',
    yellow: 'bg-yellow-100 text-yellow-600',
  };

  return (
    <div className="layout-container flex h-full grow flex-col font-body">
      <Header navigateTo={navigateTo} />
      <main className="flex-1">
        <div className="relative bg-primary overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img alt="Faded background image of a laptop and phone" className="w-full h-full object-cover object-right opacity-[0.03]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvTRtAa9OqBlfpURngCfnkDuRoF4y9N-UHys_MhOZ5rET8y476fqhFF2HR3dGd-pZz_KPIZHqK1Nebo7EOr9szuAjzDrPE125AjIBmdj41BOIEPCj2xf9N5cVpcwR0loOFAWk--PuE_ojEIVO2y9r68JIHYNpRBKYndjnzP99laUgJZpeiJaGZAx1greAYJFLETED7yv-jnYTRJDKoQfIrNmis4kvRcPIJvMATMgwj2qJYhlFgdpBSCayeu5SW6Gv3slslVAYorWg"/>
            </div>
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
                <div className="max-w-3xl mx-auto">
                    <p className="text-sm text-white/80 mb-1">Good Afternoon, Chika 👋</p>
                    <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">What are you looking for today?</h1>
                    <div className="flex w-full items-stretch rounded-xl shadow-2xl bg-white overflow-hidden">
                        <div className="relative hidden sm:block">
                            <button className="flex h-full items-center gap-2 pl-4 pr-3 border-r border-gray-200 text-secondary hover:bg-gray-50 transition-colors">
                                <span className="material-symbols-outlined text-gray-500">location_on</span>
                                <span className="font-medium text-sm">Select Region</span>
                                <span className="material-symbols-outlined text-gray-500">expand_more</span>
                            </button>
                        </div>
                        <div className="relative flex-1">
                            <input className="form-input w-full min-w-0 resize-none rounded-none text-secondary placeholder:text-gray-500 focus:outline-0 focus:ring-0 border-none bg-transparent h-14 pl-4 pr-4 text-base font-normal leading-normal" placeholder="Search products or sellers" value=""/>
                        </div>
                        <button className="flex shrink-0 cursor-pointer items-center justify-center h-14 w-14 bg-secondary text-white hover:bg-secondary/90 transition-colors">
                            <span className="material-symbols-outlined">search</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="bg-white dark:bg-secondary/20 py-8 border-b border-gray-200 dark:border-gray-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {NEW_CATEGORIES.map(category => (
                         <a key={category.name} className="flex items-center justify-between gap-3 p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors" href="#">
                            <div className="flex items-center gap-3">
                                <div className={`flex items-center justify-center size-10 rounded-full ${categoryIconColors[category.color]} flex-shrink-0`}>
                                    <span className="material-symbols-outlined" style={{fontSize: '20px'}}>{category.icon}</span>
                                </div>
                                <span className="text-sm font-medium text-secondary dark:text-white/90">{category.name}</span>
                            </div>
                            <span className="material-symbols-outlined text-gray-400 dark:text-gray-500 text-base">chevron_right</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>

        <div className="flex flex-col flex-1 pb-16">
            <div className="layout-content-container flex flex-col max-w-7xl flex-1 px-4 sm:px-6 lg:px-8 mx-auto w-full pt-12">
                <div className="space-y-12">
                    <ProductSection title="Trending Ads">
                        {TRENDING_ADS.map(ad => (
                            <div key={ad.id} className="flex-none w-[calc(100%-2rem)] sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] group cursor-pointer" onClick={() => navigateTo('productDetail', ad)}>
                                <div className="relative overflow-hidden rounded-xl shadow-md bg-white dark:bg-gray-800/50 transition-all group-hover:shadow-lg">
                                    <div className="bg-center bg-no-repeat aspect-[16/9] bg-cover" style={{backgroundImage: `url("${ad.imageUrl}")`}}></div>
                                    <div className="p-4">
                                        <h3 className="font-semibold text-lg text-secondary dark:text-white truncate">{ad.name}</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{ad.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </ProductSection>

                    <ProductSection title="Recommended for You">
                        {RECOMMENDED_FOR_YOU.map(product => (
                             <div key={product.id} className="flex-none w-[calc(50%-0.75rem)] sm:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.125rem)] xl:w-[calc(20%-1.2rem)] group cursor-pointer" onClick={() => navigateTo('productDetail', product)}>
                                <div className="relative overflow-hidden rounded-xl shadow-md bg-white dark:bg-gray-800/50 transition-all group-hover:shadow-lg">
                                    <div className="bg-center bg-no-repeat aspect-square bg-cover" style={{backgroundImage: `url("${product.imageUrl}")`}}></div>
                                    <div className="p-4">
                                        <h3 className="font-semibold text-secondary dark:text-white truncate">{product.name}</h3>
                                        <p className="font-bold text-primary dark:text-accent text-lg">₦{product.price?.toLocaleString()}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </ProductSection>
                    
                    <ProductSection title="Recently Viewed">
                        {RECENTLY_VIEWED.map(product => (
                             <div key={product.id} className="flex-none w-[calc(50%-0.75rem)] sm:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.125rem)] xl:w-[calc(20%-1.2rem)] group cursor-pointer" onClick={() => navigateTo('productDetail', product)}>
                                <div className="relative overflow-hidden rounded-xl shadow-md bg-white dark:bg-gray-800/50 transition-all group-hover:shadow-lg">
                                    <div className="bg-center bg-no-repeat aspect-square bg-cover" style={{backgroundImage: `url("${product.imageUrl}")`}}></div>
                                    <div className="p-4">
                                        <h3 className="font-semibold text-secondary dark:text-white truncate">{product.name}</h3>
                                        <p className="font-bold text-primary dark:text-accent text-lg">₦{product.price?.toLocaleString()}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </ProductSection>

                    <ProductSection title="Discount Items">
                        {DISCOUNT_ITEMS.map(product => (
                            <div key={product.id} className="flex-none w-[calc(50%-0.75rem)] sm:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.125rem)] xl:w-[calc(20%-1.2rem)] group cursor-pointer" onClick={() => navigateTo('productDetail', product)}>
                                <div className="relative overflow-hidden rounded-xl shadow-md bg-white dark:bg-gray-800/50 transition-all group-hover:shadow-lg">
                                    <div className="absolute top-2 left-2 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">{product.discount}</div>
                                    <div className="bg-center bg-no-repeat aspect-square bg-cover" style={{backgroundImage: `url("${product.imageUrl}")`}}></div>
                                    <div className="p-4 space-y-1">
                                        <h3 className="font-semibold text-secondary dark:text-white truncate">{product.name}</h3>
                                        <div className="flex items-baseline gap-2">
                                            <p className="font-bold text-primary dark:text-accent text-lg">₦{product.price?.toLocaleString()}</p>
                                            <p className="text-sm text-gray-400 line-through">₦{product.originalPrice?.toLocaleString()}</p>
                                        </div>
                                        <div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-700/50">
                                            <div className="bg-gray-100 dark:bg-gray-700/50 rounded p-2 text-center">
                                                <p className="text-xs text-gray-600 dark:text-gray-300 font-medium">Ends in:</p>
                                                <p className="text-secondary dark:text-white font-bold text-lg tracking-wider">{product.timeLeft}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </ProductSection>
                    
                    <section>
                        <h2 className="text-xl sm:text-2xl font-bold text-secondary dark:text-white mb-6">Explore Marketplace</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
                            {EXPLORE_PRODUCTS.map(product => (
                                <div key={product.id} className="group cursor-pointer" onClick={() => navigateTo('productDetail', product)}>
                                    <div className="relative overflow-hidden rounded-xl shadow-md bg-white dark:bg-gray-800/50 transition-all group-hover:shadow-lg">
                                        <div className="bg-center bg-no-repeat aspect-square bg-cover" style={{backgroundImage: `url("${product.imageUrl}")`}}></div>
                                        <div className="p-4">
                                            <h3 className="font-semibold text-secondary dark:text-white truncate">{product.name}</h3>
                                            <p className="font-bold text-primary dark:text-accent text-lg">₦{product.price?.toLocaleString()}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;