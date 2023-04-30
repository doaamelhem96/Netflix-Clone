import { useEffect, useState } from "react";
import MovieList from '../movieList/MovieList';

export default function Home(){
    
    const url = process.env.REACT_APP_URL;

    const [trending, setTrending] = useState([]);

    async function fetchTrending(){

        const response = await fetch(`${url}/trending`);
        const trendingData = await response.json();
        setTrending(trendingData);
    }

    useEffect(() => {fetchTrending()}, []);

    function addCommentProp(comment, id){
       for (const movie of trending) {
             if (movie.id === id) { 
                 movie.comment = comment;
            }
        }
    }
    
    return (
        <>
        <MovieList data = {trending} addCommentProp = {addCommentProp}/>
        </>
    )
}