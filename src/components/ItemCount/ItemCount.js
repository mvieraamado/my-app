import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";

const Counter = ({props, setCount})=>{
    const [quantity, setQuantity] = useState(0)
    const {addItem} = useContext(CartContext)
     
    const remove = ()=>{
        if (quantity > 0){
        setQuantity(quantity -1)
    }};
    
    const add = ()=>{
        if(quantity < props.stock){ 
            setQuantity(quantity +1)
        }
    }

    const onAddToCart = ()=>{
        addItem(props, quantity)
        setCount(quantity)
        console.log('agregado')
    }

    return(
        <div className="d-flex justify-content-center flex-column">
            <div>
                <p>{quantity}</p>
                <button onClick= {remove} className="btn btn-secondary m-2">-</button>
                <button onClick= {add} className="btn btn-secondary m-2">+</button>
            </div>
            <div>
                <button onClick={()=> onAddToCart()} className="btn btn-secondary">Agregar al carrito</button>
            </div>
        </div>
    )
}

export default Counter