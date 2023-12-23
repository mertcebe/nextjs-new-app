import { notFound } from 'next/navigation';
import React from 'react'

const page = async ({ params, searchParams }) => {
    if(searchParams.name === 'not'){
        notFound();
    }
    return (
        <div>
            User name: {searchParams.name}
            <br />
            User uid: {params.uid}
        </div>
    )
}

export default page