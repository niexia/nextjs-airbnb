import { Nunito } from 'next/font/google';
import './globals.css'
import Navbar from './components/navbar/Navbar';
import ClientOnly from './components/ClientOnly';
import RegisterModal from './components/Modal/RegisterModal';
import ToasterProvider from './providers/ToasterProviders';

export const metadata = {
  title: 'Airbnb',
  description: 'A Airbnb clone',
}

const font = Nunito({
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
