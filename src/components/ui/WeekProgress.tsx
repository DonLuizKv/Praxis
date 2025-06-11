import React from 'react';

interface WeekProgressProps {
    percentage: number;
    size: number;
    strokeWidth: number;
}

export default function WeekProgress({ percentage, size, strokeWidth }: WeekProgressProps) {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference * (1 - percentage / 100);

    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <svg width={size} height={size}>
                {/* Fondo del círculo */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    strokeWidth={strokeWidth}
                    fill="none"
                    stroke="#C8C8C8"
                    opacity={0.3}
                />
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius - strokeWidth}
                    stroke='#C8C8C8'
                    strokeWidth="5"
                    strokeDasharray="0 10"
                    strokeLinecap="round"
                    pathLength="100"
                    fill="none"
                />
                {/* Progreso */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="#fff"
                    strokeWidth={strokeWidth}
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    transform={`rotate(-90 ${size / 2} ${size / 2})`}
                    strokeLinecap="round"
                    style={{ transition: 'stroke-dashoffset 0.5s ease' }}
                />
            </svg>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center flex flex-col gap-0">
                <div className="text-[3rem] font-bold text-white">{percentage}%</div>
                <div className="text-[1rem] flex flex-col text-white">
                    <p>Prácticas</p>
                    <p>Completadas</p>
                </div>
            </div>
        </div>
    );
}
