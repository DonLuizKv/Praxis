import { useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export function useLogout() {
    const [isLoggingOut, setIsLoggingOut] = useState(false);
    const router = useRouter();

    const logout = async () => {
        setIsLoggingOut(true); 
        try {
            Cookies.remove("token"); 
            router.replace("/"); 
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
            setIsLoggingOut(false);
        }
    };

    return {
        logout,
        isLoggingOut,
    };
}
