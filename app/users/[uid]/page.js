"use client";
import { getUser } from '@/components/button';
import { notFound } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const page = async ({ params, searchParams }) => {
    let [user, setUser] = useState();
    useEffect(() => {
        getUser(params.uid)
            .then((snapshot) => {
                setUser(snapshot);
            })
    }, []);
    if (searchParams.name === 'not') {
        notFound();
    }
    return (
        <div>
            User name: {user?.name}
            <br />
            User uid: {user?.id}
        </div>
    )
}

export default page