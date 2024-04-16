import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const response = NextResponse.next();
    
    // Generate a unique nonce. This should be a secure method in a production environment.
    const nonce = crypto.randomUUID();

    // Set the Content-Security-Policy header using the nonce
    const csp = `script-src 'self' 'nonce-${nonce}';`;
    response.headers.set('Content-Security-Policy', csp);
    
    return response;
}


export const config = {
    matcher: '/',
};
 
