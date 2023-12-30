"use client";
import React, { useState } from 'react'
import style from './page.module.css'
import Button from '../button';
import Link from 'next/link';

const Input = ({ children }) => {
    let [id, setId] = useState();
    return (
        <>
            <input type="text" className={style.userInput} onChange={(e) => {
                setId(e.target.value);
            }} placeholder='id' />
            <Link href={{
                pathname: `/users/${id}`,
                query: { type: 'search' }
            }} prefetch={true}>go to profile</Link>
        </>
    )
}

export default Input