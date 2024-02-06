"use client"
import React, { useState, useEffect} from "react";
import Results from "./Results";

const SearchPage = () => {
  const [results, setResults] = useState("");
  const fetchData = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&language=en-US&include_adult=false`,
      { next: { revalidate: 10 } }
    );
    if (!res.ok) {
      throw new error("error fetching data");
    }
    const data = await res.json();
    setResults(data.results);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {results && results.length === 0 && (
        <h1 className="text-center pt-6">No result found</h1>
      )}

      {results && <Results results={results} />}
    </div>
  );
};

export default SearchPage;
