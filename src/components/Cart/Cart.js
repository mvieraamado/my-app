import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import ItemDetailCart from '../ItemDetail/ItemDetailCart';

const Cart= ()=>{
    const [listProductsCart, setListProductsCart] = useState([])
    const { clothesCart, clear } = useContext(CartContext);
    console.log(clothesCart)

    useEffect(()=>{
        const list= clothesCart
        console.log(list)
        setListProductsCart(list)
    },[])

    if(listProductsCart.length === 0){
        return <div>
            <div>
                <h3>Carrito vacío</h3>
                <Link to={`/collection`} className="btn">Volver a la tienda</Link>
            </div>
        </div>
    }

    const clearCart = () => {
        clear();
        setListProductsCart([]);
        console.log('limpiar')
    }
    
    function sumOfPrices(lista){
        let total=0;
        let precios = lista;
        precios.forEach(function(a){total += a.totalPrice;});
        console.log(total);
        return total;
    
    }
    
    return (
        <>
        <div>
            <div>
                {listProductsCart.map(e => <a key={e.id}><ItemDetailCart item={e}></ItemDetailCart></a>)}
            </div>
            <h5>Total: {sumOfPrices(listProductsCart)}</h5>
            <button type="button" className="btn" onClick={clearCart}>Vaciar carrito</button>
            <Link to={`/collection`} className="btn">Volver</Link>
        </div>
        </>
    )
}


export default Cart