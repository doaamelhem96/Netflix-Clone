import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalMovie from '../modalMovie/ModalMovie';
import { useState } from 'react';
import './Movie.css';

export default function Movie(props){

    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    return (
        <div id="div">
        <Card id = 'card' style={{ width: '18rem' }}>
        <Card.Img style={{height :"400px"}} variant="top" src = {`https://image.tmdb.org/t/p/w500/${props.data.posterPath}`} />
        <Card.Body id="card-body">
            <Card.Title>{props.data.title}</Card.Title>
            <div id = 'button'>
            <Button id="add-fav-btn" variant="primary" onClick={handleShowModal}>Add to favorite list</Button>
            </div>
        </Card.Body>
        </Card>
        <ModalMovie data = {props.data} handleClose = {handleCloseModal} show = {showModal} addCommentProp = {props.addCommentProp} />
        </div>
    ) 
}