import { Link } from "react-router-dom";

const CartWidget = ({seeQuantity}) =>{
    return(<>
        { seeQuantity > 0
        ?<div className="btn btn-white">
            <Link to={`/cart`}><img src="assets/cart.svg" alt="icon" /></Link>
            {seeQuantity}
        </div>
        :<></>
        }</>
    )
}

export default CartWidget
