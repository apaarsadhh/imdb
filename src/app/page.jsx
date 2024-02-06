"use client"
import Results from "../components/Results";
import { useState, useEffect } from "react";

export default async function Home({ searchParams }) {
  const [results, setResults] = useState([]);
  const API_KEY = process.env.API_KEY;
  const genre = searchParams.genre || "fetchTrending";
  const fetchData = async () => {
    const res = await fetch(
      ` https://api.themoviedb.org/3/${
        genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
      }?api_key=${API_KEY}&language=en-US`,
      { next: { revalidate: 1000 } }
    );

    if (!res.ok) {
      throw new Error("Something went wrong");
    }

    const data = await res.json();
    setResults(data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Results results={results} />
    </div>
  );
}
