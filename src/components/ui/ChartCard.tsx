"use client"
import { Chart } from "chart.js/auto";
import { useEffect, useRef, useImperativeHandle, forwardRef } from "react";

interface ChartCardProps {
    type: "line" | "bar" | "pie" | "doughnut";
    disabledLabels?: boolean;
    data?: {
        labels: string[],
        datasets: {
            label?: string,
            data: number[],
            backgroundColor: string[],
            borderColor?: string[],
            borderWidth?: number,
        }[],
    },
    staticRender?: boolean; // <- NUEVA PROP
}

const ChartCard = forwardRef(function ChartCard(
    { type, data, staticRender = false, disabledLabels = false }: ChartCardProps,
    ref: React.Ref<{ getImage: () => string | null }>
) {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const chartInstanceRef = useRef<Chart | null>(null);
    const initializedOnce = useRef(false); // <- para staticRender

    useEffect(() => {
        if (!chartRef.current) return;

        // Solo destruir y recrear si no es render estático o si es la primera vez
        if (staticRender && initializedOnce.current) return;

        if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
        }

        chartInstanceRef.current = new Chart(chartRef.current, {
            type,
            data: data || {
                labels: [],
                datasets: []
            },
            options: {
                responsive: !staticRender,
                maintainAspectRatio: false,
                aspectRatio: 2,
                animation: staticRender ? false : undefined,
                plugins: {
                    title: {
                        display: true,
                        text: data?.datasets[0].label || "",
                        font: {
                            size: 18,
                        },

                    },
                    legend: {
                        display: !disabledLabels,
                    },
                    tooltip: {
                        enabled: false, // no mostrar tooltips
                    }
                },

            },
        });

        initializedOnce.current = true;

        return () => {
            if (!staticRender) {
                chartInstanceRef.current?.destroy();
            }
        };
    }, [type, data, staticRender, disabledLabels]);

    // Método para exportar imagen
    useImperativeHandle(ref, () => ({
        getImage: () => chartRef.current?.toDataURL("image/png") || null,
    }));

    return (
        <canvas ref={chartRef} className="w-full h-full"></canvas>
    );
});

export default ChartCard;
