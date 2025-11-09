
import React, { useState } from 'react';
import { Page, Product } from '../types';
import { RELATED_ITEMS } from '../constants';
import ProductHeader from '../components/ProductHeader';

interface ProductDetailPageProps {
  product: Product;
  navigateTo: (page: Page, product?: Product) => void;
}

const galleryImages = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD5FMzraIibW4S21BSuFJUMqXz7xTV-NrjI3T3kbnqWRn-s6IJpxbRDTt17JdgkTHVg0hmXkE-v6klc1KGp28Zn6DBTO7Y12C8f37DZE_Th_p7pAqN3YKy3bHkuDjel-U5aQ5B2CqC2P2Vj9dVJUn3aMY5eBAz-MYG62UnBOWiQjdNpb1a0nJElKiIJifAxT8MhNWlaV_z8Vm1YOEbtNeGqquCssWYDjxDvy7Zb62AfJg4h5UOlv9I2iPBf9AJBfNB5_Jlq-EyQkk8',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDAhNqW4VLyHc-InFoG6c7WTecPTgogdq4v0FfDIka4t6eM1s_EcRt_O9yfzbSi-JEeXmkWewwGHrzu1jGGYKgHeAFOEe9t_3oTFdWJDWfMFX-jQY89WF-Cn95Eqhzim2aYLBIkZMoaG0D5l9hIx9BEvWyDFiqlTGhJB2daWz88xodHtauUekr9nWCExyBXQnayCa-xLAgqP0FW3w529fyBqL18dg0GgVYGYGDuixng2qZoUs_AyWUUClKQh3AXBeGFAocIHvcTHOA',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD9FZzOGaZgNy6AQ6um7vg40jR0INssB_6jI8LEAFNKKxsWCQWgKGSkIG9HzC2Rha40hPWPR3srOXbj5wJlV2RzC7pRe-FM9pTfVuQlHOFnr7xfrCpvaMR_1Ge2l-tgjfZeAPRqpLZUIebkS3wr0WuL72TWU7Aw3VM5OuNS1c8-D3jwHbDvLp7ovv7pqzu0gMFBp_efU-oPRbQtG4S-R7AA6Ku_SaQcJcDAILRUOmjhEEWzqm3Dyy0yTFYYdTG3E8XZ224kCLZAafw',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAN_eLKqVPi1HLtTFLLKMdS-budkNhTM8n9lv-aBOl5t2UahF0EM68LXHLvOeFVS0yljPInyT2QtlHO4AAvmQRUW_Vy9HS9jVmLjK4mMSHJwlKhN6cb_8665qddyP7IIpcTVRXIRKaHc1Q2tdlNC4o_zsbcJQPXH2bR_ywStm4DDgW5w0gKKCUuRpVlwo7Zh4IJFsim8mv6eacme6Roec-pveP9DO8WcSR-rMAz56In-uzve4CiSnHN0EqHa0feTlqeCpq9vfBvxac',
];

const RelatedProductCard: React.FC<{ product: Product, onClick: () => void }> = ({ product, onClick }) => (
    <div className="flex flex-col group/card snap-start w-48 sm:w-56 lg:w-64 flex-shrink-0 cursor-pointer" onClick={onClick}>
        <div className="relative overflow-hidden rounded-lg shadow-md aspect-[4/3]">
            <div className="absolute inset-0 bg-center bg-no-repeat bg-cover transition-transform duration-300 group-hover/card:scale-105" style={{ backgroundImage: `url("${product.imageUrl}")` }}></div>
        </div>
        <div className="pt-3">
            <h3 className="font-semibold text-secondary dark:text-white/90">{product.name}</h3>
            <p className="text-lg font-bold text-primary mt-1">₦{product.price?.toLocaleString()}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">from {product.sellerName}</p>
        </div>
    </div>
);

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product, navigateTo }) => {
    const [activeImage, setActiveImage] = useState(galleryImages[0]);

    const staticProductData = {
        name: "iPhone 16 Pro Max",
        price: 850000,
        description: "Brand new, sealed iPhone 16 Pro Max with 256GB storage in Natural Titanium. Unlocked for all carriers. Comes with a full 1-year Apple warranty. Experience the future of mobile with the powerful A18 Bionic chip, pro-level camera system, and stunning ProMotion display.",
        specs: [
            { label: "Processor", value: "A18 Bionic Chip" },
            { label: "RAM", value: "8 GB" },
            { label: "Storage", value: "256 GB" },
            { label: "Main Camera", value: "48MP Wide, 12MP Ultra Wide, 12MP Telephoto" },
            { label: "Display", value: "6.9\" Super Retina XDR with ProMotion" },
        ],
        seller: {
            name: "TechHaven NG",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuARDprcDoBQsMJSFJ4rBEy41fywkLxrnI896rtwhQQTCK8DhUC08GjFmNwCopJbaVgKTGjSeEEPfH2KhuAt4WbcP9cI-AxShPleVhnceTYkImZBqf0qCG23XIekr8aoddFizZmWYoDnoGJq2hQwmxXPed0Z6k1RdLqY56XiHIYS4Yp8ILTQqX6UHwopBnC0QnpDBK2u7cp92tCy4fO8HfNynYPcdVBa-Cizqc7drv3C0BHv-at34fTlLuKxDqk9JCTWZtfqkczOA-0",
            since: "Jan 2022",
            listings: 15,
        }
    }

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-secondary dark:text-white/90">
            <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
                <ProductHeader navigateTo={navigateTo} />
                <main className="w-full max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
                        {/* Left Column: Image Gallery & 3D View */}
                        <div className="flex flex-col gap-6 lg:sticky top-24">
                            <div className="flex flex-col gap-4">
                                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg bg-gray-100 dark:bg-card-dark">
                                    <div className="w-full h-full bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url("${activeImage}")` }}></div>
                                </div>
                                <div className="relative">
                                    <div className="flex overflow-x-auto py-2 gap-3 snap-x snap-mandatory scroll-smooth no-scrollbar">
                                        {galleryImages.map((img, index) => (
                                            <div 
                                                key={index}
                                                className={`aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-75 transition-opacity border-2 flex-shrink-0 w-[88px] sm:w-24 snap-start ${activeImage === img ? 'border-primary shadow-md' : 'border-transparent'}`}
                                                onClick={() => setActiveImage(img)}
                                            >
                                                <div className="w-full h-full bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url("${img}")` }}></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="relative w-full aspect-square min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] rounded-xl shadow-lg bg-gray-100 dark:bg-card-dark flex flex-col items-center justify-center p-4 cursor-grab active:cursor-grabbing">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
                                </div>
                                <div className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-0" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCToKCUTzhLzmCzOamCb_jqlMi9WMcwFuRno2_BxFzc-lOZbfRpPQkzUFYLpGWHRO0eHaYijz6RTI0LC24cOXLoCznpYjSTu0b5awhdnI_4TetI3h93kso5_BDv5eG0vTzgtK2HnTBb5Is0sLFwhWVleAO0w3LmO9t-yU1IC-WTp9Oz1X2bJEIt4ylWI0WuIx-ZMZGLcyrGDrvDimwTIotCcUR3Y9rwpfOzXYIV5lnAJhkZqUXaCVwgWet7YUDHCFRZkcDNb5fzCtM")' }}></div>
                                <div className="absolute top-3 left-3 bg-white/80 dark:bg-black/60 backdrop-blur-sm p-1.5 rounded-full text-xs font-medium text-secondary dark:text-white/80 flex items-center gap-1.5">
                                    <span className="material-symbols-outlined text-lg">3d_rotation</span>
                                    <span className="hidden sm:inline">3D View</span>
                                </div>
                                <button aria-label="Fullscreen 3D View" className="absolute top-3 right-3 bg-white/80 dark:bg-black/60 backdrop-blur-sm p-1.5 rounded-full text-secondary dark:text-white/80 hover:bg-white dark:hover:bg-black/80 transition-colors">
                                    <span className="material-symbols-outlined text-lg">fullscreen</span>
                                </button>
                                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white/80 dark:bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-secondary dark:text-white/80 pointer-events-none">
                                    <span className="material-symbols-outlined text-base">drag_pan</span>
                                    <span>Click & drag to rotate</span>
                                    <span className="mx-1 text-gray-400">|</span>
                                    <span className="material-symbols-outlined text-base">zoom_in</span>
                                    <span>Scroll to zoom</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Product Details */}
                        <div className="flex flex-col gap-8">
                            <div>
                                <h1 className="text-secondary dark:text-white text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight">{staticProductData.name}</h1>
                                <div className="flex items-center justify-between mt-3">
                                    <p className="text-secondary dark:text-white text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">₦{staticProductData.price.toLocaleString()}</p>
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center text-accent">
                                            <span className="material-symbols-outlined fill" style={{ fontSize: '20px' }}>star</span>
                                            <span className="material-symbols-outlined fill" style={{ fontSize: '20px' }}>star</span>
                                            <span className="material-symbols-outlined fill" style={{ fontSize: '20px' }}>star</span>
                                            <span className="material-symbols-outlined fill" style={{ fontSize: '20px' }}>star</span>
                                            <span className="material-symbols-outlined text-gray-300 dark:text-gray-600" style={{ fontSize: '20px' }}>star</span>
                                        </div>
                                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">(Seller rating)</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button className="flex-1 flex items-center justify-center rounded-lg h-14 px-6 bg-primary text-white text-base font-bold shadow-md hover:bg-primary/90 transition-transform active:scale-95">
                                        <span>Buy Now</span>
                                    </button>
                                    <button 
                                        onClick={() => navigateTo('chat')}
                                        className="flex-1 flex items-center justify-center rounded-lg h-14 px-6 border-2 border-primary text-primary dark:border-primary dark:text-primary text-base font-bold hover:bg-primary/10 transition-colors"
                                    >
                                        <span>Negotiate Price</span>
                                    </button>
                                </div>
                                <button className="flex w-full items-center justify-center gap-2 rounded-lg h-12 px-6 border-2 border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary transition-colors text-base font-bold">
                                    <span className="material-symbols-outlined">compare_arrows</span>
                                    <span>Add to Compare</span>
                                </button>
                            </div>
                            <div className="bg-white dark:bg-card-dark rounded-xl shadow-lg p-6">
                                <h2 className="font-bold text-lg mb-3">Product Description</h2>
                                <div className="text-gray-700 dark:text-gray-300 space-y-3">
                                    <p>{staticProductData.description}</p>
                                </div>
                                <hr className="my-6 border-gray-200 dark:border-gray-700" />
                                <h3 className="font-bold text-lg mb-4">Technical Specifications</h3>
                                <div className="space-y-3 text-sm">
                                    {staticProductData.specs.map(spec => (
                                        <div key={spec.label} className="grid grid-cols-2 gap-x-4">
                                            <p className="font-medium text-gray-500 dark:text-gray-400">{spec.label}</p>
                                            <p className="font-semibold text-secondary dark:text-white/90">{spec.value}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-primary text-white rounded-xl shadow-lg p-6">
                                <h2 className="font-bold text-lg mb-4">Seller Information</h2>
                                <div className="flex items-center gap-4">
                                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12" style={{ backgroundImage: `url("${staticProductData.seller.avatar}")` }}></div>
                                    <div className="flex-1">
                                        <p className="font-semibold">{staticProductData.seller.name}</p>
                                        <div className="flex items-center gap-1 text-accent">
                                            <span className="material-symbols-outlined fill" style={{ fontSize: '20px' }}>star</span>
                                            <span className="material-symbols-outlined fill" style={{ fontSize: '20px' }}>star</span>
                                            <span className="material-symbols-outlined fill" style={{ fontSize: '20px' }}>star</span>
                                            <span className="material-symbols-outlined fill" style={{ fontSize: '20px' }}>star</span>
                                            <span className="material-symbols-outlined text-white/50" style={{ fontSize: '20px' }}>star</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mt-4 text-sm text-white/80">
                                    <div>
                                        <p className="font-medium">On BuyPadi since:</p>
                                        <p className="font-semibold text-white">{staticProductData.seller.since}</p>
                                    </div>
                                    <div>
                                        <p className="font-medium">Active Listings:</p>
                                        <p className="font-semibold text-white">{staticProductData.seller.listings} items</p>
                                    </div>
                                </div>
                                <a className="mt-4 block w-full text-center text-white font-semibold hover:underline text-sm" href="#">View Seller's Other Items</a>
                            </div>
                            <div className="bg-white dark:bg-card-dark rounded-xl shadow-lg p-6 text-sm">
                                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                    <span className="material-symbols-outlined text-base">location_on</span>
                                    <span>Item Location: Lagos, Lekki Phase 1</span>
                                </div>
                            </div>
                            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-700/50 rounded-xl p-4">
                                <div className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-accent mt-0.5">lightbulb</span>
                                    <div>
                                        <h3 className="font-bold text-secondary dark:text-white">Safety Tips for Buyers</h3>
                                        <ul className="list-disc list-inside mt-2 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                                            <li>Meet seller in a public place.</li>
                                            <li>Check the item before you pay.</li>
                                            <li>Pay only after collecting the item.</li>
                                            <li>Use BuyPadi Escrow for secure transactions.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-full mt-16">
                        <h2 className="text-2xl font-bold text-secondary dark:text-white mb-4">Related Items</h2>
                        <div className="relative">
                            <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scroll-smooth no-scrollbar">
                                {RELATED_ITEMS.map(item => (
                                    <RelatedProductCard key={item.id} product={item} onClick={() => navigateTo('productDetail', item)} />
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
                <div className="fixed bottom-6 right-6 z-50">
                    <a className="flex items-center justify-center bg-secondary dark:bg-card-dark text-white rounded-full shadow-lg h-16 w-16 group hover:w-auto hover:px-6 transition-all duration-300 ease-in-out overflow-hidden" href="#">
                        <div className="relative h-16 w-16 flex items-center justify-center flex-shrink-0">
                            <span className="material-symbols-outlined text-3xl">compare_arrows</span>
                            <div className="absolute top-2 right-2 bg-primary text-white text-xs font-bold rounded-full size-5 flex items-center justify-center">1</div>
                        </div>
                        <span className="ml-2 text-base font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-150">Compare Items</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;