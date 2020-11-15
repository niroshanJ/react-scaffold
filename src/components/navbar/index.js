import { Navbar, Nav } from 'react-bootstrap';
import { NavLink, NavBrandLink } from '../navlink';
import './style.css';

function NavBar() {
  return (
    <Navbar bg="transparent" expand="lg" className="navbar-fixed-top" fixed='top'>
      <Navbar.Brand>
        <NavBrandLink to='/'>
          Niroshan Jayathilaka
        </NavBrandLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavLink to="/repositories">Repositories</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
