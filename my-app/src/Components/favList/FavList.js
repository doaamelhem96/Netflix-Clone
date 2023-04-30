import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import CommentMovie from "../CommentMovie/CommentMovie";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './FavList.css';

export default function FavList (){
    
    const [favMovies, setFavMovies] = useState([]);
    
    const updatedComment = useRef();
    
    const [updateBtn, setUpdateBtn] = useState(false);
    const handleUpdateBtn = () => setUpdateBtn(!updateBtn);
    
    function updateBtnState () {
        return ( updateBtn ? 'Save' : 'Update comment');
    }

    async function favoriteMovies(){

        const url = `${process.env.REACT_APP_URL}/getMovies`;

        const response = await fetch(url);
        const resData = await response.json();
        setFavMovies(resData);
    }

    async function handleDelete(id){
        const url = `${process.env.REACT_APP_URL}/DELETE/${id}`;
        const response = await fetch(url, {method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }});

       if(response.status === 204) { 
        favoriteMovies();
        }
    }

    async function handleUpdate(id){
        const url = `${process.env.REACT_APP_URL}/UPDATE/${id}`;
        const data = {comments : updatedComment.current.value};
        console.log(updatedComment.current.value);
        console.log(id);
        await fetch(url, {method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data) });
       
        favoriteMovies();
    }

    
    function updateAction(id){
        handleUpdateBtn();
        if (updateBtn === true) {
            console.log(id);
          
            handleUpdate(id);  
            
        }       
    }

    useEffect(() => {favoriteMovies()}, []);

    return (
        <div id="container">
        { favMovies && favMovies.map(movie => {
            return (
                <Card id = 'card' style={{ width: '18rem' }}>
                <Card.Body id="card-body">
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>{movie.overview}</Card.Text>
                    <p>{movie.comments}</p>
                    {updateBtn ? <CommentMovie comment = {updatedComment}/> : null}
                    <div id = 'button'>
                    <Button variant="primary" onClick={() => handleDelete(movie.id)}>Delete</Button>
                    <Button variant="primary" onClick={() => updateAction(movie.id)}>{updateBtnState()}</Button>
                    </div>
                </Card.Body>
                </Card>
            )
        })}
        </div>
    )

} 