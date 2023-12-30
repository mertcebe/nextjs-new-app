"use client";
import React from 'react'
import Input from '../input';
import Link from 'next/link';

export const getUser = async (id) => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return data.json();
}

const Button = ({id}) => {
    return (
        <>
            <Link href={`/users/${id}`} style={{pointerEvents: id?'all':"none"}}>open</Link>
        </>
    )
}

export default Button