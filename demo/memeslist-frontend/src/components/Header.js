import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header(){
    return(
        <Navbar bg="light" expand="lg">
        <Container>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/favlist">FavList</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    )
}

export default Header;