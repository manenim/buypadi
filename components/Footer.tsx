
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-secondary/20 border-t border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
                <p className="text-sm text-gray-500 dark:text-gray-400">&copy; 2024 BuyPadi.ng. All rights reserved.</p>
                <div className="flex space-x-6 text-secondary dark:text-white/90">
                    <a href="#" className="text-sm hover:text-primary transition-colors">About Us</a>
                    <a href="#" className="text-sm hover:text-primary transition-colors">Terms of Service</a>
                    <a href="#" className="text-sm hover:text-primary transition-colors">Privacy Policy</a>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
