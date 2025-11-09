import React, { useState, useEffect, useCallback } from 'react';
import { Page, Chat, Message } from '../types';
import ConfirmationDialog from '../components/ConfirmationDialog';

const initialChats: Chat[] = [
    { 
        id: 1,
        name: 'Jide O.', 
        product: "Ankara Fabric",
        lastMessage: "Let's settle for ₦11,000.", 
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjLiAfwAtbSqLKyr4_TW7sBpzP-RHt4ELFdswlunie_lnOGR2QYqDp3QlGdjxIJi6IcxpC5teFfhC574lGv7_xFR2NIHzDGHLppuWcywY937vM79ikQ4gJqCfC6RXmT2roIAkK65vWs_NXaIItVWLBNFvie1TjtbFIb8Ma-L9VXMSyQDCy64hR1kxR2MFb_G3MsMLPbnxP5a6ujYPjts3qpRTd1KCd_dRUzSO0q_-JbBtZP_4pu9oiR9Xw5Ok9csyx7ax_ZXgCphE', 
        online: true, 
        messages: [
            { id: 1, sender: 'seller', text: 'Hello! Thanks for your interest in the Ankara Fabric. How can I help you?', time: '10:45 AM', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-7zbf3FW4IOpRp29er7nICX9W7V57sGOfepMmIw8FPZiAPB36DROPRhRvvqWj7NVzhKxodBjcAXLSGJcwqLhKU20jnqLUbhWBHbs3Ppex7Ufjgd8Hz2LAk_QUTdK1eIW3soLnt5_IWKMPEb8HyCp_e_lKLvTrVZYb1CvHRie8_MUZ_T6G-2xlU8Y0hZpV-uxIiZSQmUZJM50wclpdI0Vz9uFwqyu9yjrVIuLFhiEq4LQCtU07TbwLHy_asXQKWc9jSgXp4AKvEgI' },
            { id: 2, sender: 'buyer', text: 'Can you do ₦10,500?', time: '10:46 AM', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfeKMJFDUzn2aokPFcLvGUgGeNR_4EM57inb_sGlgM3qy_Lnu2suIfBoGCIfVHwP-Wkmp5S436-yfRtvgDRwbAwy4_PQS7hvkzDrKgAkNkeOL1CY3dQN20-kUFgajTvXjj9KLDK9vMLZbuJEiUTPnOmCAfEUDleMNyWgnwWVPaltVcMIEPh3zEu04okDwvEvAncEWg1X3FkdZ_4Sw5BF1HXMMYbgwJAUJnTefbv32ab3xX0Ul0xZfNRCBzi6Y8s4nOypJ6J-9TP_Q' },
            { id: 3, sender: 'seller', text: 'Let\'s settle for ₦11,000.', time: '10:48 AM', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRPJf8syaK3LPkciLZPPU_SvvchZM86TNLHZ2eF-B2x3y2wg71xbsBVxJ8QUTAuXvRoAZHJnQxo4AQw3A2n-6p-MYRYTnZy3k8Zukdw4gNPOnTRmg87cjw5-P1YSDQ-WOS2QbqS7-9qFrchMB4mIKGQsB5tGLTbBJgMXH4eF9wGPr2z-a7XDk3uBtKrM6B7Y6LhhzsG0sSwK91i23LnHNiSkclo6Xeqplq9soM2VmBHOoucAEeHL38_KuSijP941cXnIzyHNGz-IE' }
        ]
    },
    { 
        id: 2,
        name: 'Amina K.', 
        product: "Leather Handbag",
        lastMessage: "Okay, I've shipped it.", 
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjBJbRg0PB9DDfohrFQmamuisbnaxySS2Pr-qppDAIXh_bC4hxOpwKkKH9bRiSAbsjEsjh40mk7DqbmMskE4TI4XDTV7iqYI48LYQyx6PKOS0JYLVIUng0Av50VXOUSx2R3Yh-xCk0t9aNzTVMfnor-XL3VQU9j_uUBedKk48Cy8DGrFKYFMaC-0nEMQ8jhqkiPpP9TbfoOj9j6HUMe7ocS3rfPre-J47y4nacEmFgIQ3Ejs5Fg2kvDmz8dlAQY9NszFsoU9xPmQk', 
        online: false,
        messages: [
            { id: 1, sender: 'buyer', text: "Has the item been shipped?", time: "Yesterday", avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfeKMJFDUzn2aokPFcLvGUgGeNR_4EM57inb_sGlgM3qy_Lnu2suIfBoGCIfVHwP-Wkmp5S436-yfRtvgDRwbAwy4_PQS7hvkzDrKgAkNkeOL1CY3dQN20-kUFgajTvXjj9KLDK9vMLZbuJEiUTPnOmCAfEUDleMNyWgnwWVPaltVcMIEPh3zEu04okDwvEvAncEWg1X3FkdZ_4Sw5BF1HXMMYbgwJAUJnTefbv32ab3xX0Ul0xZfNRCBzi6Y8s4nOypJ6J-9TP_Q' },
            { id: 2, sender: 'seller', text: "Okay, I've shipped it.", time: "Yesterday", avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjBJbRg0PB9DDfohrFQmamuisbnaxySS2Pr-qppDAIXh_bC4hxOpwKkKH9bRiSAbsjEsjh40mk7DqbmMskE4TI4XDTV7iqYI48LYQyx6PKOS0JYLVIUng0Av50VXOUSx2R3Yh-xCk0t9aNzTVMfnor-XL3VQU9j_uUBedKk48Cy8DGrFKYFMaC-0nEMQ8jhqkiPpP9TbfoOj9j6HUMe7ocS3rfPre-J47y4nacEmFgIQ3Ejs5Fg2kvDmz8dlAQY9NszFsoU9xPmQk'}
        ]
    },
    { 
        id: 3,
        name: 'Bola T.', 
        product: "Vintage Watch",
        lastMessage: 'Is this still available?', 
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACUmWqBWre9NQ7jKSh8Z9YJNT-9TmdkAJGnLXc9wE4av5LiMlHIglRc0ly90M3xl8Mhr19dxlH8YmtK9PeCNLnXOLHzn4vrA45bGwlMiHOAOIqxle7e8PMHNSy2zngN6m0vf8QYZ141RqrRCqqwEyw4A_T1a-Wiw1s_G0jdaYdZ-bFrXbTvPHHZCm-0_22iR_KrXl2JNhrKgSi-2wX-c72uXPYr6XQttXIoXD70wfWYQeAONWaUlujogbMtJUfrrgm1ggwPgsgObI', 
        online: false,
        messages: [
            { id: 1, sender: 'buyer', text: 'Is this still available?', time: "2 days ago", avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfeKMJFDUzn2aokPFcLvGUgGeNR_4EM57inb_sGlgM3qy_Lnu2suIfBoGCIfVHwP-Wkmp5S436-yfRtvgDRwbAwy4_PQS7hvkzDrKgAkNkeOL1CY3dQN20-kUFgajTvXjj9KLDK9vMLZbuJEiUTPnOmCAfEUDleMNyWgnwWVPaltVcMIEPh3zEu04okDwvEvAncEWg1X3FkdZ_4Sw5BF1HXMMYbgwJAUJnTefbv32ab3xX0Ul0xZfNRCBzi6Y8s4nOypJ6J-9TP_Q' },
        ]
    }
];


const quickReplies = [
    "Can you do ₦10,500?", "What's your best offer?", "I'll take it for ₦11,000.",
    "Is this price firm?", "I'm looking for a better deal.", "Can we split the difference?",
];

interface ChatPageProps {
  navigateTo: (page: Page) => void;
}

const ChatPage: React.FC<ChatPageProps> = ({ navigateTo }) => {
    const [chats, setChats] = useState<Chat[]>(initialChats);
    const [activeChatId, setActiveChatId] = useState<number | null>(initialChats.length > 0 ? initialChats[0].id : null);
    const [timerSeconds, setTimerSeconds] = useState(23 * 3600 + 58 * 60 + 12);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimerSeconds(prev => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    
    const formatTime = (seconds: number) => {
        const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
        const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
        const s = String(seconds % 60).padStart(2, '0');
        return `${h}:${m}:${s}`;
    };

    const handleChatSelect = (chatId: number) => {
        setActiveChatId(chatId);
        setIsMenuOpen(false);
    };

    const handleSendMessage = useCallback((text: string) => {
        if (!text.trim() || !activeChatId) return;

        const date = new Date();
        const newBuyerMessage: Message = {
            id: date.getTime(),
            sender: 'buyer',
            text: text,
            time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfeKMJFDUzn2aokPFcLvGUgGeNR_4EM57inb_sGlgM3qy_Lnu2suIfBoGCIfVHwP-Wkmp5S436-yfRtvgDRwbAwy4_PQS7hvkzDrKgAkNkeOL1CY3dQN20-kUFgajTvXjj9KLDK9vMLZbuJEiUTPnOmCAfEUDleMNyWgnwWVPaltVcMIEPh3zEu04okDwvEvAncEWg1X3FkdZ_4Sw5BF1HXMMYbgwJAUJnTefbv32ab3xX0Ul0xZfNRCBzi6Y8s4nOypJ6J-9TP_Q',
        };

        const updatedChats = chats.map(chat => {
            if (chat.id === activeChatId) {
                return { 
                    ...chat, 
                    messages: [...chat.messages, newBuyerMessage],
                    lastMessage: text
                };
            }
            return chat;
        });
        setChats(updatedChats);

        // Simulate seller reply
        setTimeout(() => {
            const newSellerMessage: Message = {
                id: new Date().getTime() + 1,
                sender: 'seller',
                text: 'Okay, let me consider your offer.',
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-7zbf3FW4IOpRp29er7nICX9W7V57sGOfepMmIw8FPZiAPB36DROPRhRvvqWj7NVzhKxodBjcAXLSGJcwqLhKU20jnqLUbhWBHbs3Ppex7Ufjgd8Hz2LAk_QUTdK1eIW3soLnt5_IWKMPEb8HyCp_e_lKLvTrVZYb1CvHRie8_MUZ_T6G-2xlU8Y0hZpV-uxIiZSQmUZJM50wclpdI0Vz9uFwqyu9yjrVIuLFhiEq4LQCtU07TbwLHy_asXQKWc9jSgXp4AKvEgI',
            };
             const finalChats = updatedChats.map(chat => {
                if (chat.id === activeChatId) {
                    return { 
                        ...chat, 
                        messages: [...chat.messages, newSellerMessage],
                        lastMessage: newSellerMessage.text
                    };
                }
                return chat;
            });
            setChats(finalChats);
        }, 2000);

    }, [activeChatId, chats]);
    
    const handleDeleteChat = () => {
        setIsMenuOpen(false);
        setIsDialogOpen(true);
    };

    const handleConfirmDelete = () => {
        if (!activeChatId) return;
        const remainingChats = chats.filter(chat => chat.id !== activeChatId);
        setChats(remainingChats);
        setActiveChatId(remainingChats.length > 0 ? remainingChats[0].id : null);
        setIsDialogOpen(false);
    };

    const activeChat = chats.find(chat => chat.id === activeChatId);

    return (
        <div className="relative flex h-screen w-full flex-col overflow-hidden font-display">
            <div className="flex h-full grow">
                {/* Chat List Sidebar */}
                <aside className="hidden md:flex h-full w-full max-w-sm flex-shrink-0 flex-col border-r border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
                    <div className="flex h-full flex-col justify-between p-4">
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-3">
                                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAVA_RYnGzaZ2O7NJviI3exvUedbbxR-fDcL4W_SnJzHR9BqWUmcMl-mp-RgUsmColQU4qieyNN2fP_3vCo0TIaCXWlXQeU09_jhlWdnXDfYp53SA1mvdamOYnB6cRZoRcpnOJThJZ8pmqIkXDU-d2U59eqg2_EUdTCweg1kw6J-5wyqOOVyu5s2otHPPDfsl57ScGKwBgYQuKS2wadIC1Pc6kZx2bjijeERzeT4P4FuCPZmECVwGUW-y4MkptI27Yv_EvKchFVKvs")' }}></div>
                                <div className="flex flex-col">
                                    <h1 className="text-secondary dark:text-white text-base font-semibold leading-normal">Tunde Adebayo</h1>
                                    <p className="text-primary text-sm font-normal leading-normal">My Chats</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                {chats.map(chat => (
                                     <div key={chat.id} onClick={() => handleChatSelect(chat.id)} className={`flex cursor-pointer items-center gap-4 rounded-lg px-4 py-3 ${activeChatId === chat.id ? 'bg-primary/10' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}>
                                        <div className="relative">
                                            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12" style={{ backgroundImage: `url("${chat.avatar}")` }}></div>
                                            {chat.online && <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full border-2 border-white bg-green-500"></span>}
                                        </div>
                                        <div className="flex flex-col justify-center overflow-hidden">
                                            <p className="text-secondary dark:text-white text-base font-semibold leading-normal truncate">{chat.name}</p>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal truncate">{chat.lastMessage}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] shadow-sm hover:bg-primary/90">
                            <span className="truncate">New Chat</span>
                        </button>
                    </div>
                </aside>
                {/* Main Chat Window */}
                <main className="flex flex-1 flex-col bg-background-light dark:bg-background-dark">
                    {activeChat ? (
                        <>
                            <header className="flex flex-shrink-0 items-center gap-4 border-b border-gray-200 bg-white px-6 py-3 dark:border-gray-700 dark:bg-gray-900">
                                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12" style={{ backgroundImage: `url("${activeChat.avatar}")` }}></div>
                                <div className="flex flex-col justify-center">
                                    <p className="text-secondary dark:text-white text-base font-semibold leading-normal">{activeChat.name}</p>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">Negotiating for: '{activeChat.product}'</p>
                                </div>
                                <div className="ml-auto relative">
                                    <button onClick={() => setIsMenuOpen(prev => !prev)} className="text-secondary dark:text-gray-300 flex size-9 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                                        <span className="material-symbols-outlined">more_vert</span>
                                    </button>
                                    {isMenuOpen && (
                                        <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-10 border dark:border-gray-700">
                                            <button onClick={handleDeleteChat} className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                                                <span className="material-symbols-outlined text-base">delete</span>
                                                Delete Chat
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </header>
                            <div className="flex flex-1 flex-col overflow-y-auto">
                                <div className="sticky top-0 z-10 bg-background-light px-6 py-4 shadow-sm dark:bg-background-dark">
                                    <div className="flex items-center justify-center gap-3 rounded-lg border border-gray-200 bg-white p-3 dark:border-gray-700 dark:bg-gray-800">
                                        <span className="material-symbols-outlined text-primary dark:text-accent">timer</span>
                                        <div className="text-center">
                                            <p className="text-sm font-medium text-secondary dark:text-gray-200">Time left for you to respond</p>
                                            <p className="text-lg font-bold text-primary dark:text-white">{formatTime(timerSeconds)}</p>
                                        </div>
                                        <button className="text-primary dark:text-accent text-sm font-semibold hover:underline">Extend</button>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-5 p-6">
                                    {activeChat.messages.map((msg) => (
                                        <div key={msg.id} className={`flex items-end gap-3 ${msg.sender === 'buyer' ? 'self-end' : 'self-start'}`}>
                                            {msg.sender === 'seller' && <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-8 shrink-0" style={{ backgroundImage: `url("${msg.avatar}")` }}></div>}
                                            <div className={`flex flex-col gap-1 ${msg.sender === 'buyer' ? 'items-end' : 'items-start'}`}>
                                                <p className={`text-base font-normal leading-normal flex max-w-md rounded-lg px-4 py-3 shadow-sm ${
                                                    msg.sender === 'buyer' 
                                                    ? 'rounded-br-none bg-buyer-bubble text-white' 
                                                    : 'rounded-bl-none bg-seller-bubble text-secondary dark:bg-gray-700 dark:text-gray-200'
                                                }`}>{msg.text}</p>
                                                <span className={`text-xs text-gray-500 dark:text-gray-400 ${msg.sender === 'buyer' ? 'pr-1' : 'pl-1'}`}>{msg.time}</span>
                                            </div>
                                            {msg.sender === 'buyer' && <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-8 shrink-0" style={{ backgroundImage: `url("${msg.avatar}")` }}></div>}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <footer className="flex-shrink-0 border-t border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900">
                                <div className="flex flex-col gap-3">
                                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                                    {quickReplies.map((reply, index) => (
                                        <button key={index} onClick={() => handleSendMessage(reply)} className="flex items-center justify-center rounded-lg h-10 px-3 py-2 bg-gray-100 text-secondary text-sm font-medium leading-normal text-center hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700">
                                            {reply}
                                        </button>
                                    ))}
                                    </div>
                                    <div className="mt-2 flex items-center gap-3">
                                        <button onClick={() => handleSendMessage("I'd like to send a formal offer.")} className="flex flex-1 items-center justify-center rounded-lg h-12 px-5 bg-primary/20 text-primary text-sm font-semibold leading-normal shadow-sm hover:bg-primary/30 dark:bg-primary/30 dark:text-white dark:hover:bg-primary/40">Send Offer</button>
                                        <button onClick={() => handleSendMessage("I accept your offer!")} className="flex flex-1 items-center justify-center rounded-lg h-12 px-5 bg-accent text-secondary text-sm font-semibold leading-normal shadow-sm hover:bg-accent/90">Accept Offer</button>
                                    </div>
                                </div>
                                <div className="mt-3 flex items-center justify-center gap-1">
                                    <span className="material-symbols-outlined text-sm text-gray-500 dark:text-gray-400" style={{ fontSize: '16px' }}>lock</span>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">All transactions are secured by BuyPadi Escrow</p>
                                </div>
                            </footer>
                        </>
                    ) : (
                        <div className="flex flex-1 items-center justify-center text-center text-gray-500 dark:text-gray-400">
                            <p>Select a chat to start messaging.</p>
                        </div>
                    )}
                </main>
            </div>
            <ConfirmationDialog
                isOpen={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                onConfirm={handleConfirmDelete}
                title="Delete Chat"
                message="Are you sure you want to permanently delete this chat history? This action cannot be undone."
                confirmButtonText='Delete'
            />
        </div>
    );
};

export default ChatPage;