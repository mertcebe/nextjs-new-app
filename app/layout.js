import { Inter } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'
import style from './page.module.css'
import Input from '@/components/input'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <div className={style.navbar}>
            <Link href={`/users`}>Users</Link>
            <Link href={`/profile`}>profile</Link>
            <Input />
          </div>
        </main>
        {children}
      </body>
    </html>
  )
}
