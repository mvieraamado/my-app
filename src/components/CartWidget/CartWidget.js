import { useState } from "react";
import { Link } from "react-router-dom";

const CartWidget = ({seeQuantity}) =>{
    const [cart, setCart]= useState(true)
    const handleOnClick= ()=>{
        setCart(true)
    }
    if(seeQuantity <= 0){
        return<span className="d-none">{seeQuantity}</span>    
    }
    return(
        <div>
            <Link to={`/cart`}><img src="assets/cart.svg" className="icon" alt="icon" onClick={handleOnClick}/></Link>
            <span>{seeQuantity}</span>
        </div>
        
    )
}

export default CartWidget
