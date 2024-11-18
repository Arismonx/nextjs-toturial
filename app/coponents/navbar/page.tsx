import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className='flex items-center justify-between'>
                <ul className='flex space-x-4'>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/info">Info</Link>
                    </li>
                </ul>
                <div className='flex space-x-4'>
                    <Link href="/login">Login</Link>
                    <Link href="/register">Register</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
