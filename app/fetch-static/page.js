import { redirect } from 'next/navigation';
import React from 'react'

const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

const fetchStaticData = async () => {
    const staticData = await fetch(`${apiUrl}/1`, {
        cache: 'force-cache'
    });
    await staticData.json();
    console.log('static data fetch ediliyor...');

    return new Date().toLocaleTimeString('tr');
}

const FetchStaticPage = async ({searchParams}) => {
    console.log(searchParams)
    if(searchParams.type){
        redirect('/');
    }
    const staticFetchTime = await fetchStaticData();
    return (
        <div>
            time: {staticFetchTime.toString()}
        </div>
    )
}

export default FetchStaticPage