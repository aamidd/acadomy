import './globals.css'
import { Cairo } from 'next/font/google'
import CustomHead from './CustomHead'
import { ThemeProvider } from './theme-context'


const inter = Cairo({weight: '400', subsets: ['latin'] })

export const metadata = {
  title: 'Acadomy',
  description: 'Discover and develop your talents with Acadomy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider>
        <CustomHead/>
        {children}
      </ThemeProvider>
        </body>
    </html>
  )
}