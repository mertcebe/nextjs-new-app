"use client";
import Link from 'next/link'
import styles from './page.module.css'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react';

export default function Home() {
  let router = useRouter();
  const handleClick = (href) => {
    router.push(href);
  }
  console.log('qwdqwd')
  return (
    <main className={styles.main}>
      <div>
        main page
        <button onClick={() => { handleClick('/users') }}>go to users</button>
        {/* <Link href={'/fetch-dynamic'}>fetchDynamic</Link>
        <Link href={'/fetch-revalidate'}>fetchRevalidate</Link>
        <Link href={'/fetch-static'}>fetchStatic</Link> */}
      </div>
    </main>
  )
}