import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import myPhoto from '../../images/mh.PNG';
import {Link} from 'react-scroll'
import { useState } from 'react';


const Header = ({homeRef, handleNavClick}) => {
  const [isNavModalClose, setIsNavModalClose] = useState(true);

  
  return (
    <Navbar sticky="top" expand="md">
      <Container>
        <Link 
                  className='navbar-brand' 
                  smooth
                  duration={500}
                  style={{ cursor: "pointer" }}
                  activeClass="active"
                  offset={0}
                  spy
                  to="Home"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsNavModalClose(true);
                  }}>
            <img src={myPhoto} alt=""/>
            <h3>Mahmudul Hasan</h3>
            <h6>FrontEnd Developer</h6>
            </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link   
                  className="nav-link "
                  smooth
                  duration={500}
                  style={{ cursor: "pointer" }}
                  activeClass="active"
                  offset={0}
                  spy
                  to="Home"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsNavModalClose(true);
                  }}>
                Home
            </Link>
            <Link   
                  className="nav-link "
                  smooth
                  duration={500}
                  style={{ cursor: "pointer" }}
                  activeClass="active"
                  offset={0}
                  spy
                  to="About"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsNavModalClose(true);
                  }}>
                About
            </Link>
            <Link   
                  className="nav-link "
                  smooth
                  duration={500}
                  style={{ cursor: "pointer" }}
                  activeClass="active"
                  spy
                  to="Passion"
                  offset={0}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsNavModalClose(true);
                  }}>
                My Passion
            </Link>
            <Link   
                  className="nav-link "
                  smooth
                  duration={500}
                  style={{ cursor: "pointer" }}
                  activeClass="active"
                  spy
                  to="Resume"
                  offset={0}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsNavModalClose(true);
                  }}>
                Resume
            </Link>
            {/* <Link to="About" spy={true} smooth={true} offset={-100} duration={500}  >
            <Nav.Link className='links' >About Me</Nav.Link>
            </Link>
            <Link  to="Passion" spy={true} smooth={true} offset={-150} duration={500}>
            <Nav.Link className='links' >My Passion</Nav.Link>
            </Link> */}
            
            
            
            
            <Nav.Link className='links' href="#Portfolio">Portfolio</Nav.Link>
            <Nav.Link className='links' href="#Testimonial">Testimonial</Nav.Link>
            <Nav.Link className='links' href="#Contact">Contact</Nav.Link>
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