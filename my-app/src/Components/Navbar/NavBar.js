import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
const NavBar = () => {
    return (
        // <nav>
        //     <h1>recipes website</h1>
        //     <Link to="/">Home</Link>
        //     <Link to="/favRecipes">fav Recipes</Link>
        // </nav>


        <Navbar collapseOnSelect expand="lg" bg="primary" variant="light">
            <Container>

                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href='/Movie'>fav-Movies</Nav.Link>

                </Nav>
            </Container>
        </Navbar>
    )

}

export default NavBar;

