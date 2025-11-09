
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import StatCard from '../components/StatCard';
import { Page, StatCardData } from '../types';
import EscrowWalletPage from './EscrowWalletPage';

interface AdminDashboardProps {
  navigateTo: (page: Page) => void;
}

const statCardsData: StatCardData[] = [
    {
        title: "Active Escrows",
        value: "1,420",
        description: "Total value currently in escrow",
        icon: "pending_actions",
    },
    {
        title: "Pending Disputes",
        value: "8",
        description: "Awaiting admin resolution",
        icon: "report",
        warning: true,
    },
    {
        title: "Total Transaction Volume (30d)",
        value: "₦12,540,800",
        description: "",
        icon: "monitoring",
        change: "+5.2%",
        changeType: 'increase',
    }
];


const AdminDashboard: React.FC<AdminDashboardProps> = ({ navigateTo }) => {
  const [activeView, setActiveView] = useState('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeView) {
        case 'overview':
            return (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {statCardsData.map(data => <StatCard key={data.title} data={data} />)}
                </div>
            );
        case 'escrowWallet':
            return <EscrowWalletPage />;
        default:
            return null;
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-row bg-background-light dark:bg-background-dark">
      <Sidebar 
        navigateTo={navigateTo} 
        activeView={activeView} 
        setActiveView={setActiveView} 
        isOpen={isSidebarOpen}
        closeSidebar={() => setIsSidebarOpen(false)}
      />
      
      <main className="flex flex-1 flex-col transition-all duration-300">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-background-dark/80 px-4 sm:px-8 py-4 sticky top-0 z-10 backdrop-blur-sm">
            <div className="flex items-center gap-4">
                <button 
                  className="md:hidden text-gray-800 dark:text-gray-200"
                  onClick={() => setIsSidebarOpen(true)}
                  aria-label="Open sidebar"
                >
                  <span className="material-symbols-outlined">menu</span>
                </button>
                <h2 className="text-secondary dark:text-white text-lg sm:text-xl font-bold leading-tight tracking-[-0.015em]">
                    {activeView === 'overview' ? 'Dashboard Overview' : 'Escrow Wallet'}
                </h2>
            </div>
            <div className="flex flex-1 justify-end items-center gap-4">
                <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full size-10 bg-background-light dark:bg-gray-800 text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
                    <span className="material-symbols-outlined text-lg">notifications</span>
                </button>
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCyn7b6bHXhvMrVBH7QxoyEBVooQvx7Ia340bzRBXlnsH-zckMQ7H8a3Hm3VUBDnd9fTG99IwG1Q-YIjmbNPOEIXtJ_kMAUXs8NSlGsvjIeOkCt_AuzOVoXituOCruSqu7BRkmzuEIsFpOuOfySxwckpwnbS60QiW0FZlAZj2QEifnEV0QedAVgQ5Scu_h-PnHuvghPBeVYnTt31OUG8kGTbNN2kmQc5FZyFi4vh_ZQ2FWott9VHf1I5CjOiUumT58KVtKsg3KnbR0")'}}></div>
            </div>
        </header>

        <div className="p-4 sm:p-6 md:p-8">
            {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
