import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import ItemDetailCart from '../ItemDetail/ItemDetailCart';
import { db } from '../../services/firebase/firebase';
import {collection, addDoc, getDoc, doc, Timestamp, writeBatch} from 'firebase/firestore';

const Cart= ()=>{
    const [listProductsCart, setListProductsCart] = useState([])
    const { clothesCart, clear, totalPrice} = useContext(CartContext);
    const [processingOrder, setProcessingOrder] = useState(false)
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

    function totalPrices(){
        return totalPrice
    }

    const confirmPurchase = () => {

        setProcessingOrder(true)
        const name = document.getElementById("name").value;
        const mobile = document.getElementById("mobile").value;
        const email = document.getElementById("email").value;

        const clearCart = () => {
            clear();
            setListProductsCart([]);
            console.log('limpiar')
        }

        // function sumOfPrices(lista){
        //     let total=0;
        //     let precios = lista;
        //     precios.forEach(function(a){total += a.totalPrice;});
        //     console.log(total);
        //     return total;
        
        // }

        const purchaseObject = {
            buyer: name,
            mobile: mobile,
            email: email,
            items: listProductsCart,
            total: totalPrices(listProductsCart),
            date: Timestamp.fromDate(new Date())
        }

        const batch = writeBatch(db)
        const outOfStock = []

        purchaseObject.items.forEach((prod, i) => {
            getDoc(doc(db, 'collection', prod.id)).then(DocumentSnapshot => {
                if(DocumentSnapshot.data().stock >= purchaseObject.items[i].quantity) {
                    batch.update(doc(db, 'collection', DocumentSnapshot.id), {
                        stock: DocumentSnapshot.data().stock - purchaseObject.items[i].quantity
                    })
                } else {
                    outOfStock.push({...DocumentSnapshot.data(), id: DocumentSnapshot.id})
                }

            })
        })

        if(outOfStock.length === 0) {
            console.log('Compra realizada con éxito')
            addDoc(collection(db, 'orders'), purchaseObject).then(() => {
                batch.commit().then(() => {
                })
            }).catch((error) => {
                console.log(error, 'Error al realizar la compra')
            }).finally(() => {
                setProcessingOrder(false)

            })
            clearCart();
        }
    }
    
    return (
        <>
        <div>
            <div>
                {listProductsCart.map(e => <a key={e.id}><ItemDetailCart item={e}></ItemDetailCart></a>)}
            </div>
            <span>Total: {totalPrices(listProductsCart)}</span>
            <button type="button" className="btn" onClick={clearCart}>Vaciar carrito</button>
            <Link to={`/collection`} className="btn">Volver</Link>
            <h5>Ingrese sus datos para finalizar compra</h5>
            <input type="text" id="name" placeholder="Nombre"></input>
            <input type="text" id="mobile" placeholder="Teléfono"></input>
            <input type="text" id="email" placeholder="Email"></input>
            <button onClick={() => confirmPurchase()} className="btn btn-success">Confirmar</button>
        </div>
        </>
    )
}


export default Cart