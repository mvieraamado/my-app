import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";

const Counter = ({props, setCount, onAdd, initial})=>{
    const [count, setItemCount] = useState(initial)
    const {quantity, changeQuantity, addItem, clothesCart, setClothesCart} = useContext(CartContext)

    setCount(count)
     
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
            : addItem([newProduct]);
        } 
        onAdd();
        console.log(clothesCart)
        console.log(quantity)      
    }

    return(
        <div className="d-flex justify-content-center flex-column">
            <div>
                <p>{count}</p>
                <button onClick= {remove} className="btn btn-secondary m-2">-</button>
                <button onClick= {add} className="btn btn-secondary m-2">+</button>
            </div>
            <div>
                <button onClick={onAddToCart} className="btn btn-secondary">Agregar al carrito</button>
            </div>
        </div>
    )
}

export default Counter