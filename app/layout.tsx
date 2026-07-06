import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FSSMarket - Premium Fifa Super Soccer Accounts',
  description: 'The safest marketplace for verified premium FSS accounts with instant delivery.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0F1117] text-white min-h-screen selection:bg-[#FFD400] selection:text-[#0F1117]`}>
        {children}
      </body>
    </html>
  )
}
