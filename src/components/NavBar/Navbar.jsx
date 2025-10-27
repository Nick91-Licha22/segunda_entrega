import { Link } from 'react-router-dom';
import CartWidget from './CartWidget'; 
import './Navbar.css'; 

function NavBar() {
    return (
        <nav className="navbar">
            <Link className="logo-container" to="/">
                <img src="/img/logoverduleria.png" alt="Logo" width="40" height="40" className="logo" />
                <span className="store-name">S&N Verdulería</span>
            </Link>
            <ul className="nav-links"> 
                <li className="nav-item">
                    <Link className="nav-link" to="/category/frutas">Frutas</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/category/verduras">Verduras</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/offers">Ofertas</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contacto">Contacto</Link>
                </li>
            </ul>
            
            <CartWidget />
            
        </nav>
    );
}

export default NavBar;