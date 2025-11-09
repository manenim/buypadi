import React from 'react';
import Button from './Button';

interface ConfirmationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmButtonText?: string;
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({ 
  isOpen, 
  onClose, 
  onConfirm, 
  title, 
  message, 
  confirmButtonText = 'Confirm' 
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 transition-opacity duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog-title"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-background-dark/90 dark:border dark:border-gray-700 rounded-xl shadow-2xl p-6 w-full max-w-md transform transition-all scale-95 opacity-0 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'scale-in 0.2s forwards' }}
      >
        <h2 id="dialog-title" className="text-xl font-bold text-secondary dark:text-white mb-4">{title}</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">{message}</p>
        <div className="flex justify-end space-x-4">
          <Button variant="secondary" onClick={onClose} size="sm">Cancel</Button>
          <Button variant="primary" onClick={onConfirm} size="sm">{confirmButtonText}</Button>
        </div>
      </div>
       <style>{`
        @keyframes scale-in {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scale-in {
          animation: scale-in 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default ConfirmationDialog;