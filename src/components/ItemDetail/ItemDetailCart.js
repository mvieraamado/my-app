import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Spinner } from "../Spinner/Spinner";
import './itemDetailCart.css'

const ItemDetailCart= ({item})=>{
    const { removeItem, removeQuantity, clothesCart} = useContext(CartContext)
    if(!item){
        return <Spinner/>
    }

    const onRemoveCart = () => {
        removeItem(clothesCart, item);
        removeQuantity(item.quantity);
    }
    
    return (
        <>
        <tr>
            <td><img src={item.image} className="cardImage" alt={item.image}></img></td>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>${item.price}</td>
            <td>${item.totalPrice}</td>
            <td><button type="button" className="btn btn-white border-none" ><img src="assets/delete.svg" alt="icon-delete"onClick={onRemoveCart}/></button></td>
        </tr>
        </>
    )
}

export default ItemDetailCart