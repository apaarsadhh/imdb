import React from 'react'
import Results from '../../components/results'




export default async function searchPage(params) {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&language=en-US&include_adult=false`,
        { next: { revalidate: 10 } })

    if (!res.ok) {
        throw new error("error fetching data")
    }

    const data = await res.json();
    const results = data.results;

    return (
        <div>
            {results && results.length === 0 && (
                <h1 className='text-center pt-6'>No result found</h1>
            )}

            {results && <Results results={results} />}
        </div>
    )
}
