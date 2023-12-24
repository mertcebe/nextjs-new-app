"use client";
import { useEffect, useState } from 'react';
import styles from './page.module.css'
import Input from '@/components/input';
import { getUser } from '@/components/button';

export default function Home() {
  let [user, setUser] = useState();
  console.log('home');
  useEffect(() => {
    getUser(3)
    .then((snapshot) => {
      setUser(snapshot);
    })
  }, []);
  return (
    <main className={styles.main}>
      <div>
        main page
      </div>
      <Input />
      {user?user.name:''}
    </main>
  )
}