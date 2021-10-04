import { Link } from "react-router-dom";

const CartWidget = () =>{
    return(
        <div>
            <Link to={`/cart`}><img src="assets/cart.svg" className="icon" alt="icon" /></Link>
            <span>1</span>
        </div>
        
    )
}

export default CartWidget