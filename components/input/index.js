"use client";
import React, { useState } from 'react'
import style from './page.module.css'
import Link from 'next/link';

const Input = () => {
    let [uid, setUid] = useState('');
    let [name, setName] = useState('');
    return (
        <>
            <input type="text" value={uid} className={style.userInput} onChange={(e) => {
                setUid(e.target.value);
            }} placeholder='uid' />
            <input type="text" value={name} className={style.userInput} onChange={(e) => {
                setName(e.target.value);
            }} placeholder='name' />
            {
                uid && name &&
                <Link href={`/users/${uid}?name=${name}`} onClick={() => {
                    setUid('');
                    setName('');
                }}>Go to user</Link>
            }
        </>
    )
}

export default Input