import Navbar from '@/components/Navbar'
import './globals.css'
import {
  Inter,
  Poppins,
  Karla,
  Markazi_Text,
  League_Spartan,
} from 'next/font/google'
import Footer from '@/components/Footer'

// const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
})
const league = League_Spartan({
  subsets: ['latin'],
  variable: '--league-spartan',
  weight: ['400', '500', '600', '700', '800'],
})
const karla = Karla({
  subsets: ['latin'],
  variable: '--font-karla',
  weight: ['400', '500', '600'],
})
const markazi = Markazi_Text({
  subsets: ['latin'],
  variable: '--font-markazi',
  weight: ['400', '500', '600', '700'],
})

export const metadata = {
  title: 'Citrus Grove Restaurant',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={`m-0 h-full ${poppins.variable} ${karla.variable} ${markazi.variable} ${league.variable}`}
      >
        <section className="h-[120px]">
          <Navbar />
        </section>
        {children}
        <section className="bg-primary h-auto sm:py-12 py-6">
          <Footer />
        </section>
      </body>
    </html>
  )
}
