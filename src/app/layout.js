import './globals.css'
import { Inter, Roboto } from 'next/font/google'
import Appbar from './components/appBar'
import Bottomnavigation from './components/bottomnavigation'
const roboto = Roboto({ subsets: ['latin'] , weight: ['400']})

export const metadata = {
  title: 'Order Food Online | Food Delivery App | STREETS FOODS',
  description: 'Order hygienic Street Foods.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
   
      <body className={roboto.className}>{children}
      <Appbar/>
      <Bottomnavigation/>
      </body>
    </html>
  )
}
