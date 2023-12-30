import React from 'react'

const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

const fetchDynamicData = async () => {
    const staticData = await fetch(`${apiUrl}/1`, {
        cache: 'no-store'
    });
    await staticData.json();
    console.log('dynamic data fetch ediliyor...');

    return new Date().toLocaleTimeString('tr');
}

const FetchDynamicPage = async () => {
    const dynamicFetchTime = await fetchDynamicData();
    return (
        <div>
            time: {dynamicFetchTime.toString()}
        </div>
    )
}

export default FetchDynamicPage