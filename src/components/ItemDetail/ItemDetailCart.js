import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const ItemDetailCart= ({item})=>{
    const { removeItem, removeQuantity, clothesCart} = useContext(CartContext)

console.log(item.totalPrice)
    if(!item){
        return <div>
        <h3>Loading...</h3>
        </div>
    }
    
    const onRemoveCart = () => {
        removeItem(clothesCart, item);
        removeQuantity(item.quantity);
        console.log('Eliminar')

    }

    return (
    <div className="card bg-transparent" >
        <p>Producto en carrito</p>
        <img src={item.image} className="card-img-top" alt="..."></img>
        <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">Precio $: {item.price}</p>
            <p className="card-text">Agregados: {item.quantity}</p>
            <p className="card-text">Precio total $: {item.totalPrice}</p>
            <button type="button" className="btn btn-danger" onClick={onRemoveCart}>Eliminar</button>
        </div>
    </div>
    )
}

export default ItemDetailCart