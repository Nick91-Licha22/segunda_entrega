import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import logo from '../../assets/img/logoverduleria.png';
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo-container">
        <img src={logo} alt="S&N Verduleria" className="logo" />
        <span className="store-name">S&N Verduleria</span>
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/category/frutas">Frutas</Link>
        </li>
        <li>
          <Link to="/category/verduras">Verduras</Link>
        </li>
        <li>
          <a href="#">Ofertas</a>
        </li>
        <li>
          <a href="#">Contacto</a>
        </li>
      </ul>
      <Link to="/cart" className="cart-link">
        <CartWidget />
      </Link>
    </nav>
  );
}