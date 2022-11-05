import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container className="justify-content-end">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="./" className="mr-3">
              Home
            </Nav.Link>
            <NavDropdown
              title="Activities"
              id="basic-nav-dropdown"
              className="mr-3"
            >
              <NavDropdown.Item href="./activities/computer">
                Computer
              </NavDropdown.Item>
              <NavDropdown.Item href="./activities/volunteer">
                Volunteer
              </NavDropdown.Item>
              <NavDropdown.Item href="./activities/others">
                Others
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="./projects" className="mr-3">
              Projects
            </Nav.Link>
            <Nav.Link href="./hobbies" className="mr-3">
              Hobbies
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
