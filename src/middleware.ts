import { NextRequest, NextResponse } from 'next/server';

const publicPaths = [
    '/',
    '/auth'
];

const isPublicPath = (path: string): boolean => {
    if (publicPaths.includes(path)) {
        return true;
    }

    return false;
};

async function verifyTokenWithBackend(token: string): Promise<{ valid: boolean; role: string }> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/verify`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        const data = await response.json();
        return {
            valid: response.ok,
            role: data.role
        };
    } catch (error) {
        console.error('Error verificando token:', error);
        return { valid: false, role: '' };
    }
}

export async function middleware(req: NextRequest) {

    const path = req.nextUrl.pathname;
    const token = req.cookies.get('token')?.value;

    // Si está en ruta pública y tiene token, redirigir según su rol
    if (isPublicPath(path) && token) {
        const response = await verifyTokenWithBackend(token);
        if (response.valid) {
            if (response.role === 'admin') {
                return NextResponse.redirect(new URL('/admin', req.url));
            }
            if (response.role === 'student') {
                return NextResponse.redirect(new URL('/student', req.url));
            }
        }
    }

    // Permitir acceso a rutas públicas sin token
    if (isPublicPath(path)) {
        return NextResponse.next();
    }

    // Si no hay token y no es ruta pública, redirigir a /
    if (!token) {
        return NextResponse.redirect(new URL('/', req.url));
    }

    // Verificar token para rutas protegidas
    const response = await verifyTokenWithBackend(token);
    if (!response.valid) {
        const redirectResponse = NextResponse.redirect(new URL('/', req.url));
        redirectResponse.cookies.delete('token');
        return redirectResponse;
    }

    // Verificar acceso según rol
    if (response.role === 'student' && path.startsWith('/admin')) {
        return NextResponse.redirect(new URL('/student', req.url));
    }

    // Si es admin o está en su ruta correspondiente, permitir acceso
    if (response.role === 'admin' || path.startsWith('/admin')) {
        return NextResponse.next();
    }

    // Redirigir a la ruta correspondiente según rol
    if (response.role === 'admin' && !path.startsWith('/admin')) {
        return NextResponse.redirect(new URL('/admin', req.url));
    }
    if (response.role === 'student' && !path.startsWith('/student')) {        
        return NextResponse.redirect(new URL('/student', req.url));
    }
    console.log('⛳ Middleware ejecutándose en:', req.nextUrl.pathname);
    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
