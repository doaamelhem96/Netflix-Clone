import Form from 'react-bootstrap/Form';


export default function CommentMovie (props){
  
    return (
        <>
        <Form id = 'form'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows={3} placeholder="Add your comment here"/>
            </Form.Group>
        </Form>
        </>
    );
}