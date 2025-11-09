// FIX: Import React to resolve type errors for React.ComponentType
import React from 'react';

export type Page = 'home' | 'adminDashboard' | 'createListing' | 'productDetail' | 'chat';

export interface Product {
  id: number;
  name: string;
  price?: number;
  originalPrice?: number;
  imageUrl: string;
  category: string;
  discount?: string;
  timeLeft?: string;
  description?: string;
  sellerName?: string;
}

export interface Category {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface NewCategory {
    name: string;
    icon: string;
    color: string;
}

export interface StatCardData {
    title: string;
    value: string;
    description: string;
    icon: string;
    change?: string;
    changeType?: 'increase' | 'decrease';
    warning?: boolean;
}

export interface EscrowTransaction {
    id: string;
    date: string;
    type: 'Deposit' | 'Withdrawal' | 'Payout' | 'Refund';
    amount: number;
    status: 'Completed' | 'Pending' | 'Failed';
    description: string;
}

export interface Message {
  id: number;
  sender: 'buyer' | 'seller';
  text: string;
  time: string;
  avatar: string;
}

export interface Chat {
  id: number;
  name: string;
  product: string;
  lastMessage: string;
  avatar: string;
  online: boolean;
  messages: Message[];
}