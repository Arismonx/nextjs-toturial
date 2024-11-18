import React from 'react'
import Navbar from './coponents/navbar/page'
import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page',
  keywords: 'home, page, nextjs',
}

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

export default layout
