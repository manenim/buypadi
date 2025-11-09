
import React from 'react';
import { Page } from '../types';

interface HeaderProps {
  navigateTo: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ navigateTo }) => {
  return (
    <header className="sticky top-0 z-20 w-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="mx-auto flex max-w-7xl items-center justify-between whitespace-nowrap px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center gap-4 text-secondary dark:text-white cursor-pointer" onClick={() => navigateTo('home')}>
          <div className="size-6 text-primary">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_6_535)">
                <path clipRule="evenodd" d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z" fill="currentColor" fillRule="evenodd"></path>
              </g>
              <defs>
                <clipPath id="clip0_6_535">
                  <rect fill="white" height="48" width="48"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
          <h2 className="text-xl font-bold tracking-[-0.015em]">BuyPadi.ng</h2>
        </div>
        <div className="flex flex-1 justify-end items-center gap-6">
          <div className="hidden md:flex items-center gap-8">
            <a className="text-secondary/90 dark:text-white/90 text-sm font-semibold leading-normal hover:text-primary transition-colors" href="#">Marketplace</a>
            <a className="text-secondary/90 dark:text-white/90 text-sm font-semibold leading-normal hover:text-primary transition-colors" href="#">My Orders</a>
          </div>
          <button 
            onClick={() => navigateTo('createListing')}
            className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors shadow-sm"
          >
            <span className="truncate">Sell</span>
          </button>
          <div 
            onClick={() => navigateTo('adminDashboard')}
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 cursor-pointer" 
            style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDG139ibgOfy3RNYYjSl_n7x4PAw-dsrWWti6kMxS-sZoUWvoBQB4tE2-9n83WHPz4PO8yiS44xpyuycopFbuRli3XehKoORtI_ffOIHDPQhA9wM1thftsQSqRvycixtjTowaA0aSD6BP8gYh_bHv2XEdspRhyG_tu7gNcULm5zX_3B_e5Gp8l-n2jQIqxLuIiY8UmOtf15ikB5Io6xKdu6ciCgqPcLPj-_EpRE3u9m6j5s49XxOJaWaL8uoTBz69Z0qK525BJUJR0")'}}
          ></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
