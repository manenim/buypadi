
import React from 'react';
import { Page } from '../types';

interface SidebarProps {
  navigateTo: (page: Page) => void;
  activeView: string;
  setActiveView: (view: string) => void;
  isOpen: boolean;
  closeSidebar: () => void;
}

const NavItem: React.FC<{ icon: string; label: string; active?: boolean; onClick?: () => void; }> = ({ icon, label, active, onClick }) => (
    <a 
        onClick={onClick}
        href="#"
        className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
            active 
            ? 'bg-primary/20 border-l-4 border-primary text-white' 
            : 'text-gray-300 hover:bg-white/10'
        }`}
    >
        <span className="material-symbols-outlined">{icon}</span>
        <p className="text-sm font-medium leading-normal">{label}</p>
    </a>
);

const Sidebar: React.FC<SidebarProps> = ({ navigateTo, activeView, setActiveView, isOpen, closeSidebar }) => {
  return (
    <>
      {/* Overlay for mobile */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={closeSidebar}
      ></div>

      <aside className={`fixed top-0 left-0 h-screen w-64 flex-col bg-secondary text-white z-30 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:sticky md:translate-x-0`}>
          <div className="flex flex-col gap-4 p-4 h-full">
              <div className="flex items-center gap-3 px-3 py-2 cursor-pointer" onClick={() => navigateTo('home')}>
                  <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAEixyyotj_o_TxpPUUV2lA9JEVNlgtsvqt9a-17_pjxe4JTDpdUKZ6eXo4GrZI5PvpaT22Ov2WmeQHQCptxANlNHhl5sz8r_e1p0YFEc0-MjDctoNuya_0V2IohmrNJn9AwZptf2oRvCVpn3jTMxWXZZmy-t455aWGo5lCNG2tJcCCx2yTYvrffw89N4h5XFf4l40JYbNNd7fBExKpSuJmNVvKgbTMsVs6fXYnh3X3e5vsYeXg98LzVWp2UUQ7hI0QhUm_CB2tR-E")'}}></div>
                  <h1 className="text-white text-lg font-bold">BuyPadi.ng</h1>
              </div>
              <nav className="flex flex-col gap-2 mt-4">
                  <NavItem 
                      icon="dashboard" 
                      label="Dashboard" 
                      active={activeView === 'overview'}
                      onClick={() => { setActiveView('overview'); closeSidebar(); }}
                  />
                  <NavItem icon="group" label="Users" onClick={closeSidebar} />
                  <NavItem icon="storefront" label="Sellers" onClick={closeSidebar} />
                  <NavItem icon="receipt_long" label="Transactions" onClick={closeSidebar} />
                  <NavItem icon="gavel" label="Disputes" onClick={closeSidebar} />
                  <NavItem 
                      icon="account_balance_wallet" 
                      label="Escrow Wallet"
                      active={activeView === 'escrowWallet'}
                      onClick={() => { setActiveView('escrowWallet'); closeSidebar(); }}
                  />
              </nav>
          </div>
      </aside>
    </>
  );
};

export default Sidebar;
