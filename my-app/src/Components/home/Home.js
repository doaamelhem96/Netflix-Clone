import { useEffect, useState } from "react";
import MovieList from '../movieList/MovieList';
<<<<<<< HEAD

export default function Home(){
    
    const url = process.env.REACT_APP_URL;

    const [trending, setTrending] = useState([]);

=======
import './Home.css';
export default function Home(){
    
    const url = process.env.REACT_APP_URL;

    const [trending, setTrending] = useState([]);

>>>>>>> class-18
    async function fetchTrending(){

        const response = await fetch(`${url}/trending`);
        const trendingData = await response.json();
        setTrending(trendingData);
    }

    useEffect(() => {fetchTrending()}, []);
<<<<<<< HEAD

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
=======
    
    return (
        <>
        <MovieList data = {trending}/>
>>>>>>> class-18
        </>
    )
}