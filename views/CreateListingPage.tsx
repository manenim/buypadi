
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import { Page } from '../types';
import { CloudUploadIcon } from '../components/icons';

interface CreateListingPageProps {
    navigateTo: (page: Page) => void;
}

const InputField: React.FC<{ label: string, placeholder: string, type?: string, as?: 'textarea', rows?: number }> = ({ label, placeholder, type = 'text', as, rows }) => {
    const commonProps = {
        placeholder,
        className: "w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-transparent text-gray-900 dark:text-gray-200"
    };

    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{label}</label>
            {as === 'textarea' ? (
                <textarea {...commonProps} rows={rows}></textarea>
            ) : (
                <input type={type} {...commonProps} />
            )}
        </div>
    );
};

const CreateListingPage: React.FC<CreateListingPageProps> = ({ navigateTo }) => {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="bg-background-light dark:bg-background-dark">
            <Header navigateTo={navigateTo} />
            <main className="py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-8">
                        <h1 className="text-2xl md:text-3xl font-bold text-secondary dark:text-white">Create a New Listing</h1>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">Fill out the details below to post your item for sale.</p>
                    </div>
                    
                    <div className="bg-white dark:bg-secondary/20 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800">
                        <h2 className="text-xl font-semibold text-secondary dark:text-white mb-6">List Your Item</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Left Column: Form Fields */}
                            <div className="space-y-6">
                                <InputField label="Product Name" placeholder="e.g. Vegetable Soup Bowl" />
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Category</label>
                                        <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-transparent text-gray-900 dark:text-gray-200">
                                            <option>Select a category</option>
                                            <option>Electronics</option>
                                            <option>Fashion</option>
                                            <option>Home Goods</option>
                                        </select>
                                    </div>
                                    <InputField label="Price (₦)" placeholder="₦ 5000" type="number" />
                                </div>
                                
                                <InputField label="Description" placeholder="e.g. Describe the materials, size, and condition of your product..." as="textarea" rows={4} />
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Quantity in Stock</label>
                                    <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg w-fit">
                                        <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="px-4 py-2 text-xl font-light hover:bg-gray-100 dark:hover:bg-gray-700 rounded-l-lg">-</button>
                                        <input type="text" value={quantity} readOnly className="w-16 text-center border-l border-r border-gray-300 dark:border-gray-600 focus:outline-none py-2 bg-transparent" />
                                        <button onClick={() => setQuantity(q => q + 1)} className="px-4 py-2 text-xl font-light hover:bg-gray-100 dark:hover:bg-gray-700 rounded-r-lg">+</button>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Right Column: Image Upload */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Product Images</label>
                                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center flex flex-col items-center justify-center h-48 cursor-pointer hover:border-primary hover:bg-primary/10 transition">
                                    <CloudUploadIcon className="h-10 w-10 text-gray-400 dark:text-gray-500 mb-2" />
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Click to browse or drag & drop</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-500">(Max 5 images)</p>
                                </div>
                                <div className="flex space-x-4 mt-4">
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 border-primary">
                                        <img src="https://picsum.photos/seed/upload1/80/80" alt="uploaded thumbnail" className="object-cover w-full h-full" />
                                    </div>
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border border-gray-300 dark:border-gray-600">
                                         <img src="https://picsum.photos/seed/upload2/80/80" alt="uploaded thumbnail" className="object-cover w-full h-full opacity-50" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-4">
                            <Button variant="draft">Save Draft</Button>
                            <Button variant="primary">Publish Listing</Button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default CreateListingPage;
