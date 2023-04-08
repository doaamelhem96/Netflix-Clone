

import MovieList from '../movieList/MovieList'


import{ useState, useEffect } from 'react';


export default function Home(){
    const [recipes,setRecipes]=useState([])

    async function getRecipes(){
        const url=process.env.REACT_APP_URL;
        

        const response = await fetch(`${url}/trending`);
      

        const recipesData = await response.json();
      
       
        setRecipes(recipesData);
      

    }

  

    useEffect(()=>{
        getRecipes();
    },[])  

    return(
        <>
        <h2> this is Home Page</h2>
       
    

        <MovieList  recipes={recipes}/>
        </>
    )
}