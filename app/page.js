import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        main page
        <Link href={'/fetch-dynamic'}>fetchDynamic</Link>
        <Link href={'/fetch-revalidate'}>fetchRevalidate</Link>
        <Link href={'/fetch-static'}>fetchStatic</Link>
      </div>
    </main>
  )
}