import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <Navbar expand="lg" bg="light" data-bs-theme="light" className="custom-navbar">
      <Container fluid>
        <Navbar.Brand
          onClick={() => navigate("/", { replace: true })}
          style={{ cursor: "pointer" }}
        >
          My App
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link onClick={() => navigate("/", { replace: true })}>
              Login
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/Home", { replace: true })}>
              Home
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
