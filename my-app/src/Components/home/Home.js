import { useEffect, useState } from "react";
import MovieList from '../movieList/MovieList';
import './Home.css';
export default function Home(){
    
    const url = process.env.REACT_APP_URL;

    const [trending, setTrending] = useState([]);

    async function fetchTrending(){

        const response = await fetch(`${url}/trending`);
        const trendingData = await response.json();
        setTrending(trendingData);
    }

    useEffect(() => {fetchTrending()}, []);
    
    return (
        <>
        <MovieList data = {trending}/>
        </>
    )
}