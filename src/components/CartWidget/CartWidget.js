import { useState } from "react";
import { Link } from "react-router-dom";

const CartWidget = ({seeQuantity}) =>{
    const [cart, setCart]= useState(true)
    const handleOnClick= ()=>{
        setCart(true)
    }

    return(
        <div>
            <Link to={`/cart`}><img src="assets/cart.svg" className="icon" alt="icon" onClick={handleOnClick}/></Link>
            <span>{seeQuantity}</span>
        </div>
        
    )
}

export default CartWidget
