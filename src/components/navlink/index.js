import { Link } from "react-router-dom";
import './style.css';

export function NavLink(props) {
  return (
    <Link class='nav-link' {...props} />
  );
}

export function NavBrandLink(props) {
  return (
    <Link class='nav-brand-link' {...props} />
  );
}

