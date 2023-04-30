import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { useRef } from 'react';
import CommentMovie from '../CommentMovie/CommentMovie';
import './ModalMovie.css'

export default function ModalMovie(props){
    // console.log(props.data.id);
    const [showComment, setShowComment] = useState(false);
    const handleCommentBtn = () => setShowComment(!showComment);

    function commentBtnState () {
        return ( showComment ? 'Cancel comment' : 'Add comment')
    }

    const commentData = useRef();

    function commentHandler(){
        // console.log(commentData.current.value);
        let commentValue = (commentData.current.value || "");
        props.addCommentProp(commentValue, props.data.id);
    }

    async function addFavorite(){
        const url = `${process.env.REACT_APP_URL}/addMovie`;
        const data = {
            title : props.data.title,
            overview : props.data.overview,
            comments : props.data.comment,
        }

        const requestConfigs = { method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)};

        const response = await fetch(url, requestConfigs);
        const resData = await response.json();
        console.log(resData);
    }

    function addToFavHandler(){
        // console.log(props.data.id);
        props.handleClose();
        commentHandler();
        addFavorite();
    }

    return (
        <>
        <Modal id= "modal" show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>{props.data.title}</Modal.Title>
        </Modal.Header>
        <img id='modal-img' src = {`https://image.tmdb.org/t/p/w500/${props.data.posterPath}`} alt = {props.data.title}/>
        <Modal.Body>{props.data.overview}</Modal.Body>
        <p id = "comment">{`Your Comment : ${props.data.comment || "No comments added"}`}</p>
        {showComment ? <CommentMovie comment = {commentData}/> : null}
        <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose}>
            Close
            </Button>
            <Button variant="primary" onClick={handleCommentBtn}>
           {commentBtnState()}
            </Button>
            <Button variant="primary" onClick={addToFavHandler}>
            Save Changes
            </Button>
        </Modal.Footer>
        </Modal>
        </>
    );
}