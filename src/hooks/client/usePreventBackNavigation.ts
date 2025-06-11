'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function usePreventBackNavigation() {
    const router = useRouter();

    useEffect(() => {
        // 1) Empujamos un estado idéntico para crear una entrada en el history
        window.history.pushState(null, '', window.location.pathname);

        const onPopState = () => {
            // 2) Cada vez que detectamos “atrás”, volvemos a inyectar la misma entrada
            window.history.pushState(null, '', window.location.pathname);
        };

        window.addEventListener('popstate', onPopState);

        return () => {
            window.removeEventListener('popstate', onPopState);
        };
    }, [router]);
}
