"use client";
import React from 'react'
import Input from '../input';

export const getUser = async (id) => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return data.json();
}

const Button = ({id}) => {
    return (
        <>
            <button onClick={async () => {
                const data = await getUser(id);
                console.log(data);
            }}>open</button>
        </>
    )
}

export default Button