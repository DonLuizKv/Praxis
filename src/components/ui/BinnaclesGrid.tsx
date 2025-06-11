import React, { useState } from 'react';
import { IconCaretLeftFilled, IconCaretRightFilled } from '@tabler/icons-react';
import { Student } from '@/types/Users';

const ITEMS_PER_PAGE = 100;

const getColor = (count: number) => {
    if (count >= 16) return 'bg-[#3AB354]';
    if (count >= 13) return 'bg-[#B33A3A]';
    if (count >= 9) return 'bg-[#B33A3A]/70';
    if (count >= 5) return 'bg-[#B33A3A]/50';
    if (count >= 1) return 'bg-[#B33A3A]/30';
    return 'bg-[#c8c8c8]';
};

export default function BinnaclesGrid({ data }: { data: Student[] }) {
    const [currentPage, setCurrentPage] = useState(0);

    // const totalFakeData = Array.from({ length: 200 }, (_, i) => ({
    //     id: i + 1,
    //     binnacles: Array.from({ length: Math.floor(Math.random() * 17) }),
    // }));

    const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
    const startIndex = currentPage * ITEMS_PER_PAGE;
    const currentData = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handlePrev = () => setCurrentPage(p => Math.max(p - 1, 0));
    const handleNext = () => setCurrentPage(p => Math.min(p + 1, totalPages - 1));

    return (
        <article className="h-full w-full bg-[#f1f1f1] border border-[#c8c8c8] rounded-lg px-4 py-3 flex flex-col justify-between gap-2">
            <aside className='flex flex-col'>
                <h2 className="text-xl font-semibold">Resumen de Bitácoras</h2>
                <p className='text-sm text-[#707070]'>
                    Cada cuadricula representa a un estudiante, el color varia segun el numero de bitacoras.
                </p>
            </aside>

            <aside className="h-full w-full">
                <div className='grid grid-cols-[repeat(auto-fill,minmax(1rem,1fr))] items-start gap-1'>
                    {currentData.map((student, i) => (
                        <div
                            key={i}
                            className={`w-4 h-4 rounded-sm relative ${getColor(student.binnacles.length)} cursor-pointer group`}
                        >
                            <span className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap bg-[#232121] flex-col gap-1 items-center text-white text-[.8rem] rounded-[6px] px-2 py-1 hidden group-hover:flex max-w-[100px]">
                                <p className="text-wrap">{student.name}</p>
                                <p><b>{student.binnacles.length} </b>/ 16</p>
                            </span>
                        </div>
                    ))}
                </div>
            </aside>

            <aside className="flex justify-between items-center max-md:flex-col ">
                <div className="flex items-center gap-2">
                    <button onClick={handlePrev} disabled={currentPage === 0} className="disabled:opacity-30">
                        <IconCaretLeftFilled size={24} />
                    </button>
                    <button onClick={handleNext} disabled={currentPage >= totalPages - 1} className="disabled:opacity-30">
                        <IconCaretRightFilled size={24} />
                    </button>
                </div>

                <div className="flex items-center gap-2">
                    <p className='text-[.8rem] font-semibold'>0</p>
                    <div className="flex flex-wrap items-center gap-1">
                        <span className='w-4 h-4 rounded-sm bg-[#c8c8c8]'></span>
                        <span className='w-4 h-4 rounded-sm bg-[#B33A3A]/30'></span>
                        <span className='w-4 h-4 rounded-sm bg-[#B33A3A]/50'></span>
                        <span className='w-4 h-4 rounded-sm bg-[#B33A3A]/70'></span>
                        <span className='w-4 h-4 rounded-sm bg-[#B33A3A]'></span>
                        <span className='w-4 h-4 rounded-sm bg-[#3AB354]'></span>
                    </div>
                    <p className='text-[.8rem] font-semibold'>16</p>
                </div>
            </aside>
        </article>
    );
}
