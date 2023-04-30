import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
<<<<<<< HEAD
import {useRef } from 'react';

export default  function ModalMovie (props){
 const commentRef = useRef();

 function submitHandler(e){
   e.preventDefault();
   let userComment = commentRef.current.value;

   let newTrend={...props.trendData, userComment}
   console.log(newTrend);

   props.commentHandler(newTrend,newTrend.id);
 }

 async function addToFavHandler(e){
   e.preventDefault();
 
   let url =`${process.env.REACT_APP_URL}/addMovie`;
   
   let data={
     title: props.trendData.title,
     overview: props.trendData.overview,
     
     poster_path : props.trendData.poster_path,
     comments : props.trendData.comments
 
   }
   const response = await fetch (url,{
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(data),
   })

   const receivedData = await response.json();
 console.log(1111,receivedData)

 if (response.status ===201){
   alert("successfully added to database")
 }

=======
import React, { useState } from 'react';
export default function ModalMovie(props) {

  const [comment, setComment] = useState('');


  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleAddToFavorite = () => {
    console.log('Added to favorite:', props.recipe.title, comment);

    props.handleClose();
  };

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.recipe.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={`https://image.tmdb.org/t/p/w500${props.recipe.poster_path}`} style ={{"max-width":"150px"}} alt={props.recipe.title} />
        <Form>
          <Form.Group controlId="comment">
            <Form.Label>Comment</Form.Label>
            <Form.Control type="text" placeholder="Enter your comment" value={comment} onChange={handleCommentChange} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleAddToFavorite}>
          Add to favorite
        </Button>

      </Modal.Footer>
    </Modal>
  );
>>>>>>> class-18
}

    return (
       <Modal show={props.show} onHide={props.handleClose} >
       <Modal.Header closeButton>
         <Modal.Title>{props.trendData.title}</Modal.Title>
       </Modal.Header>
        <img src={`https://image.tmdb.org/t/p/w500${props.trendData.poster_path}`} alt={props.trendData.title}/>
        <Modal.Body>
       
       {props.trendData.comments? props.trendData.comments: "No comment Added "}
       <br/>
       <Form>
         <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label>Add a comment</Form.Label>
           <Form.Control  ref={commentRef} type="text" placeholder="Enter your comment " />
           <Form.Text className="text-muted">enter your comment !!</Form.Text>
         </Form.Group>
         <Button variant="primary" type="submit" onClick={(e)=>submitHandler(e)}>
           Submit
         </Button>
         <pre></pre>
         <Button variant="primary" type="submit" onClick={(e)=>addToFavHandler(e)}>
           add to fav
         </Button>
       </Form>
       </Modal.Body>
        

        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    )
}