import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'CruiseWheels',
  description: 'Embark on a seamless journey with our premier car rental service. Discover the freedom of the open road as CruiseWheels provides a fleet of top-notch vehicles, ensuring every mile is a testament to comfort, reliability, and unforgettable adventures. Your travel experience begins with CruiseWheels – where the road becomes your playground',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className='relative overflow-hidden'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}