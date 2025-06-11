'use client';

import { usePathname } from 'next/navigation';
import AnimatedBackground from '../landing/AnimatedBackground';

export default function AnimatedLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const showCanvas = ['/', '/auth', '/student', '/admin'].includes(pathname);

    return (
        <>
            {showCanvas && <AnimatedBackground />}
            {children}
        </>
    );
}