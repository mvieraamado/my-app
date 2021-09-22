import CartWidget from '../CartWidget/CartWidget';
import './navBar.css';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return(
    <nav className="navbar navbar-expand-lg navbar-light NavBar">
        <div className="container-fluid">
            <Link to="/" activeClassName="navlink" className="Option">Dreams</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse d-flex justify-content-lg-center navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item m-1">
                        <button className="Option">Home</button>
                    </li>
                    <li className="nav-item m-1">
                        <button className="Option">About</button>
                    </li>
                    <NavLink to="/collection" activeClassName="navlink" className="Option m-2">Collection</NavLink>
                    <li className="nav-item m-1">
                        <button className="Option">Contact</button>
                    </li>
                    
                </ul>
                <div className="OptionLeft d-flex justify-content-lg-space-around">
                    <button className="Option">Log In</button>
                    <CartWidget />  
                </div>
            </div>
        </div>
        
    </nav>
    )
}

export default NavBar