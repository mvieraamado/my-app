import { useState, createContext } from "react";

export const CartContext = createContext([])

export const CartContextProvider = ({children}) =>{
    const [clothesCart, setClothesCart]= useState([])
    const [quantity, setQuantity]= useState(0)
    const [totalPrice, setTotalPrice] = useState(0);

    function removeItem(cont, item){
        let i= cont.indexOf(item)
        if(i !== -1){
            cont.splice(i, 1)
        }
    }

    const removeQuantity = (itemQuantity) => {
        setQuantity(quantity-itemQuantity);
      };
    
    const changeQuantity = (count) => {
          setQuantity(count);
      };
    const changeTotalPrice = (priceTotal) => {
        setTotalPrice(priceTotal);
    };

    const clear =()=>{
        setClothesCart(undefined)
        setQuantity(0)
        setClothesCart([])
    };

    const addItem= (quantity, item)=>{
        setClothesCart(quantity, item)
    };

    const getTotal = () => {
        let total = 0
        clothesCart.forEach(prod => {
            total = total + prod.price * prod.quantity
        })
        return total
    }

    return (
        <CartContext.Provider 
        value={{
            clothesCart,
            addItem,
            clear,
            quantity,
            removeItem,
            setClothesCart,
            changeQuantity,
            changeTotalPrice,
            removeQuantity,
            totalPrice,
            getTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}