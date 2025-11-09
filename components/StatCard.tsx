
import React from 'react';
import { StatCardData } from '../types';

interface StatCardProps {
  data: StatCardData;
}

const StatCard: React.FC<StatCardProps> = ({ data }) => {
  const { title, value, description, icon, change, changeType, warning } = data;
  
  const changeColor = changeType === 'increase' ? 'text-success' : 'text-red-500';
  const iconColor = warning ? 'text-accent' : '';

  return (
    <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-background-dark/50 border border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="flex items-center justify-between text-gray-600 dark:text-gray-400">
        <p className="text-sm sm:text-base font-medium">{title}</p>
        <span className={`material-symbols-outlined ${iconColor}`}>{icon}</span>
      </div>
      <div className="flex items-baseline gap-3">
        <p className={`tracking-light text-2xl sm:text-3xl font-bold leading-tight ${warning ? 'text-accent' : 'text-secondary dark:text-white'}`}>{value}</p>
        {change && <p className={`${changeColor} text-sm sm:text-base font-medium leading-normal`}>{change}</p>}
      </div>
       {description && <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">{description}</p>}
    </div>
  );
};

export default StatCard;
