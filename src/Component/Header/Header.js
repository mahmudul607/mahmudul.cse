import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import myPhoto from '../../images/mh.PNG';

function Header() {
  return (
    <Navbar sticky="top" style={{background:'var(--bg-color'}} expand="md">
      <Container>
        <Navbar.Brand href="#home">
            <img src={myPhoto} alt=""/>
            <h3>Mahmudul Hasan</h3>
            <h6>FrontEnd Developer</h6>
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#About">About Me</Nav.Link>
            <Nav.Link href="#Passion">My Passion</Nav.Link>
            <Nav.Link href="#Resume">Resume</Nav.Link>
            <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#Testimonial">Testimonial</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
        <div className='social-icons'>
            social icons area
            
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;