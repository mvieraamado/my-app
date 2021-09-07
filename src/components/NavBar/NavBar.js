import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
    return(
    <nav className="NavBar">
        <div className="LeftNav">
            <div className="LeftNavigation">
                <button className="Option">Home</button>
                <button className="Option">About</button>
            </div>
        </div>
        <div className="RightNav">
            <div className="RightNavigation">
                <button className="Option">Log In</button>
            </div>
        </div>
        <CartWidget/>
    </nav>
    )
}

export default NavBar