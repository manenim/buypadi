
import React from 'react';

interface SparklineChartProps {
  data: number[];
  className?: string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

const SparklineChart: React.FC<SparklineChartProps> = ({
  data,
  className,
  strokeColor = 'rgba(255, 255, 255, 0.7)',
  fillColor = 'rgba(255, 255, 255, 0.1)',
  strokeWidth = 2,
}) => {
  if (!data || data.length < 2) return null;
  
  const width = 100; // use a fixed aspect ratio basis
  const height = 30;

  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min === 0 ? 1 : max - min;

  const points = data
    .map((d, i) => {
      const x = (i / (data.length - 1)) * width;
      const y = height - ((d - min) / range) * height;
      return `${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(' ');
  
  const fillPoints = `${points} ${width},${height} 0,${height}`;

  return (
    <svg 
      className={className} 
      viewBox={`0 0 ${width} ${height}`} 
      preserveAspectRatio="none"
      aria-label="A line chart showing balance changes over the last 7 days."
    >
      <defs>
        <linearGradient id="sparkline-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: fillColor, stopOpacity: 0.5 }} />
          <stop offset="100%" style={{ stopColor: fillColor, stopOpacity: 0 }} />
        </linearGradient>
      </defs>
      <polyline
        fill="none"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        points={points}
        vectorEffect="non-scaling-stroke"
      />
      <polygon
        fill="url(#sparkline-gradient)"
        points={fillPoints}
      />
    </svg>
  );
};

export default SparklineChart;
