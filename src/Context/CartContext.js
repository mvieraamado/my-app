import { useState, createContext } from "react";

export const CartContext = createContext([])

export const CartContextProvider = ({children}) =>{
    const [clothesCart, setClothesCart]= useState([])
    const [quantity, setQuantity]= useState(0)

    function removeItem(cont, item){
        let i= cont.indexOf(item)
        if(i !== -1){
            cont.splice(i, 1)
        }
    }
    const clear =()=>{
        setClothesCart(undefined)
        setQuantity(0)
        setClothesCart([])
    };

    const addItem= (quantity, item)=>{
        setClothesCart(quantity, item)
    };

    return (
        <CartContext.Provider 
        value={{
            clothesCart,
            addItem,
            clear,
            quantity,
            removeItem,
            setClothesCart
        }}>
            {children}
        </CartContext.Provider>
    )
}