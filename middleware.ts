import { NextResponse } from 'next/server'

export const middleware = (req:NextResponse) => {
    console.log('Hello middleware');
    return NextResponse.redirect(new URL('/',req.url))
}

export const config = {
    matcher: ['/about/:path*','/camp/:path*'],
}
