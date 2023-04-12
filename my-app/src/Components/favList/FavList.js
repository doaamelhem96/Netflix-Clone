

import {useEffect, useState} from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
    
    
    export default function FavList(){
    
        const [FavList,setFavList ] = useState([]);
    
    
        async function getFavList(){
             
            let url2="https://movies-library-1io6.onrender.com/getMovies";
    
            let response = await fetch(url2,{
                method: 'GET',
            })
    
            let recivedData = await response.json();
            setFavList(recivedData)
    
           
        }
    
        async function handleDelete(id){
            let url =`${process.env.REACT_APP_URL}/DELETE/${id}`;
    
            let response = await fetch(url,{
    
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                },
            })
      
    
            if(response.status === 204){
                getFavList();
                 alert("successfully deleted !!")
    
            }
        }
        

        async function handleUpdate(id){
            let url =`${process.env.REACT_APP_URL}/UPDATE/${id}`;
            console.log(url)
            let response = await fetch(url,{
               
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
            })
            console.log(response)
            
        }
       
        useEffect(()=>{
            getFavList();
    
            
    
        },[])
    
    
    
        return(
            <>
            <h2> Fav List </h2>
    
            {
                FavList && FavList.map(trend=>{
                    return(
                     
                        <Card style={{ width: "18rem" }}>
                        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${trend.poster_path}`} />
                        <Card.Body>
                          <Card.Title>{trend.title}</Card.Title>                   
                          <Card.Text>{trend.comments}</Card.Text>
                          <Button variant="primary" onClick={()=>handleDelete(trend.id)}> Delete </Button>
                          <p></p>
                          <Button variant="primary" onClick={()=>handleUpdate(trend.id)}> Update </Button>
                        </Card.Body>
                      </Card>
                    )
    
    
                })
            }
            </>
        )
    }