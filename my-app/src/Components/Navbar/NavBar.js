
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
const  NavBar =()=>{
    return (
        
       


        <Navbar bg="dark" variant="dark">
            <Container>
                
                <Nav className="me-auto">
                     <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/fav">Fav-Movies</Nav.Link>

                </Nav>
            </Container>
        </Navbar>
    )

}

export default NavBar;

