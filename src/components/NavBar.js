import { Container, Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
      <Navbar variant='dark' sticky="top">
        <Container>
            <Navbar.Brand href="/">Panpan Films</Navbar.Brand>
          <Nav>
            <Nav.Link href="#trending">Trending</Nav.Link>
            <Nav.Link href="#action">Action</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
};

export default NavBar;
