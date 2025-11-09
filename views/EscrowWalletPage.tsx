
import React, { useState } from 'react';
import Button from '../components/Button';
import { EscrowTransaction } from '../types';
import SparklineChart from '../components/SparklineChart';
import ConfirmationDialog from '../components/ConfirmationDialog';

const mockTransactions: EscrowTransaction[] = [
    { id: 'TXN78901', date: '2024-07-22', type: 'Payout', amount: 150000, status: 'Completed', description: 'Sale of "Used Macbook Pro 13"' },
    { id: 'TXN78902', date: '2024-07-21', type: 'Deposit', amount: 289000, status: 'Completed', description: 'Purchase of "Samsung Galaxy S21"' },
    { id: 'TXN78903', date: '2024-07-21', type: 'Withdrawal', amount: 500000, status: 'Pending', description: 'Withdrawal to Zenith Bank' },
    { id: 'TXN78904', date: '2024-07-20', type: 'Refund', amount: 45000, status: 'Completed', description: 'Refund for "Nike Air Max" dispute' },
    { id: 'TXN78905', date: '2024-07-19', type: 'Payout', amount: 8300000, status: 'Completed', description: 'Sale of "Toyota Camry 2018"' },
    { id: 'TXN78906', date: '2024-07-18', type: 'Deposit', amount: 3200000, status: 'Failed', description: 'Purchase of "3 Bedroom Flat, Lekki"' },
];

const statusStyles = {
    Completed: 'bg-green-100 text-green-800',
    Pending: 'bg-yellow-100 text-yellow-800',
    Failed: 'bg-red-100 text-red-800',
};

const balanceHistory = [14.8, 15.1, 15.0, 15.3, 15.2, 15.5, 15.23]; // In millions

const EscrowWalletPage: React.FC = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [dialogContent, setDialogContent] = useState({
        title: '',
        message: '',
        onConfirm: () => {},
    });

    const handleWithdrawClick = () => {
        setDialogContent({
            title: 'Confirm Withdrawal',
            message: 'Are you sure you want to initiate a withdrawal of funds from your escrow wallet? This action cannot be undone.',
            onConfirm: () => {
                console.log('Withdrawal confirmed!');
                setIsDialogOpen(false);
            },
        });
        setIsDialogOpen(true);
    };

    const handleStatementClick = () => {
        setDialogContent({
            title: 'Generate Statement',
            message: 'Do you want to generate and view your transaction statement for the last 30 days?',
            onConfirm: () => {
                console.log('Statement generation confirmed!');
                setIsDialogOpen(false);
            },
        });
        setIsDialogOpen(true);
    };


    return (
        <div className="space-y-6 sm:space-y-8">
            {/* Balance and Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-gradient-to-br from-primary to-green-700 p-6 rounded-xl shadow-lg text-white flex flex-col justify-between">
                    <div>
                        <p className="font-medium text-white/80">Total Escrow Balance</p>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white my-2">₦15,234,500.75</h2>
                    </div>
                    <div className="mt-4">
                        <SparklineChart 
                            data={balanceHistory}
                            className="w-full h-16"
                        />
                        <div className="flex items-center space-x-2 text-sm mt-1">
                            <span className="text-green-300 font-semibold">+1.8%</span>
                            <span className="text-white/70">in the last 7 days</span>
                        </div>
                    </div>
                </div>
                <div className="bg-white dark:bg-background-dark/50 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center space-y-4">
                    <Button variant="primary" size="md" className="w-full" onClick={handleWithdrawClick}>Withdraw Funds</Button>
                    <Button variant="secondary" size="md" className="w-full" onClick={handleStatementClick}>View Statement</Button>
                </div>
            </div>

            {/* Recent Transactions Table */}
            <div className="bg-white dark:bg-background-dark/50 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                 <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">Recent Transactions</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[640px] text-left">
                        <thead className="bg-gray-100 dark:bg-background-dark/80">
                            <tr>
                                <th className="p-4 font-semibold text-sm text-gray-600 dark:text-gray-400 hidden sm:table-cell">Transaction ID</th>
                                <th className="p-4 font-semibold text-sm text-gray-600 dark:text-gray-400">Date</th>
                                <th className="p-4 font-semibold text-sm text-gray-600 dark:text-gray-400">Type</th>
                                <th className="p-4 font-semibold text-sm text-gray-600 dark:text-gray-400">Amount</th>
                                <th className="p-4 font-semibold text-sm text-gray-600 dark:text-gray-400">Status</th>
                                <th className="p-4 font-semibold text-sm text-gray-600 dark:text-gray-400 hidden lg:table-cell">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mockTransactions.map((tx) => (
                                <tr key={tx.id} className="border-b border-gray-200 dark:border-gray-700 last:border-b-0 hover:bg-gray-100/50 dark:hover:bg-gray-800/50">
                                    <td className="p-4 text-sm text-gray-700 dark:text-gray-300 font-mono hidden sm:table-cell">{tx.id}</td>
                                    <td className="p-4 text-sm text-gray-700 dark:text-gray-300">{tx.date}</td>
                                    <td className="p-4 text-sm text-gray-700 dark:text-gray-300 font-medium">{tx.type}</td>
                                    <td className="p-4 text-sm text-gray-900 dark:text-white font-semibold">₦{tx.amount.toLocaleString()}</td>
                                    <td className="p-4 text-sm">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusStyles[tx.status]}`}>
                                            {tx.status}
                                        </span>
                                    </td>
                                    <td className="p-4 text-sm text-gray-600 dark:text-gray-400 max-w-xs truncate hidden lg:table-cell">{tx.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <ConfirmationDialog
                isOpen={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                onConfirm={dialogContent.onConfirm}
                title={dialogContent.title}
                message={dialogContent.message}
            />
        </div>
    );
};

export default EscrowWalletPage;
