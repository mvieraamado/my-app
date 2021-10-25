import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";

const Counter = ({props,setCount})=>{
    const [count, setItemCount] = useState(0)
    const {quantity, changeQuantity, addItem, clothesCart, setClothesCart} = useContext(CartContext)

    const remove = ()=>{
        if (count > 0){
        setItemCount(count -1)
    }};
    
    const add = ()=>{
        if(count < props.stock){ 
            setItemCount(count +1)
        }
    }

    const precioTotal = props.price * count;

    const onAddToCart = () =>{
        const productsCartId = clothesCart?.map(item=> item.id)
        changeQuantity(quantity + count);
        setItemCount(0)

        if (productsCartId?.includes(props.id)) {
            const updateCart = clothesCart?.map (i => {
                if (i.id === props.id){
                    let oldPrice = i.totalPrice
                    let oldQuantity = i.quantity
                    return{
                        ...i,
                        totalPrice: precioTotal + oldPrice,
                        quantity: count + oldQuantity
                    }
                }else{
                    return i
                }
            })
            setClothesCart(updateCart)
            }else{const newProduct = {
            ...props,
            totalPrice: precioTotal,
            quantity: count,
            };
      
            clothesCart
            ? addItem([...clothesCart, newProduct]) 
            : addItem([newProduct])
        } 
        setCount(count)
    }
    return(
        <>
        <div>
            <p>{count}</p>
            <button  onClick= {remove} className="btn btn-dark m-2">-</button>
            <button onClick= {add} className="btn btn-dark m-2">+</button>
        </div>
        <div>
            <button onClick={onAddToCart} className="btn btn-dark">Añadir al carrito</button>
        </div>
        </>
    )
}

export default Counter