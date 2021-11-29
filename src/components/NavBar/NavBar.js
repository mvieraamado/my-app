import CartWidget from '../CartWidget/CartWidget';
import '../NavBar/navBar.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { Link, NavLink } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../Context/CartContext';
import { getCategories } from '../../services/firebase/firebase';

const NavBar = () => {
    const { quantity } = useContext(CartContext);
    const [categories, setCategories]= useState([]);

    useEffect(()=>{
        getCategories().then(categories =>{
            setCategories(categories)
        }).catch((error)=>{
            console.log(error)
        })
        return ()=> {
            setCategories()
        }
    }, [])

    return(
    <nav className="navbar navbar-expand-lg navbar-light navBar">
        <div className="container-fluid">
            <Link to="/" className="logo">DREAMS</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse w-100" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                    <li className="nav-item m-2">
                        <NavLink to="/collection" className="nav-link active option mt-1" aria-current="page">Colección</NavLink>
                    </li>
                    <li className="nav-item dropdown m-2 d-flex flex-column justify-content-center">
                        <button className="nav-link dropdown-toggle option mt-1 pt-2 text-center" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        Categorías
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        {categories?.map(category => <NavLink key={category.id} to={`/category/${category.id}`} activeClassName="NavLink" className="dropdownItem">{category.description}</NavLink>)}
                        </ul>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <CartWidget seeQuantity={quantity}/> 
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default NavBar