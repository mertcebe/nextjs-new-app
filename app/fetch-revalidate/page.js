import React from 'react'

const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

const fetchRevalidateData = async () => {
    const staticData = await fetch(`${apiUrl}/1`, {
        next: {
            revalidate: 10
        }
    });
    await staticData.json();
    console.log('revalidate data fetch ediliyor...');

    return new Date().toLocaleTimeString('tr');
}

const FetchRevalidatePage = async () => {
    const revalidateFetchTime = await fetchRevalidateData();
    return (
        <div>
            time: {revalidateFetchTime.toString()}
        </div>
    )
}

export default FetchRevalidatePage