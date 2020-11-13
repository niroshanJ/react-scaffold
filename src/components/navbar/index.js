import { Navbar, Nav } from 'react-bootstrap';
import { NavLink, NavBrandLink } from '../navlink';
import './style.css';

function NavBar() {
  return (
    <Navbar bg="white" expand="lg">
      <Navbar.Brand>
        <NavBrandLink to='/'>
          MySite!
        </NavBrandLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
