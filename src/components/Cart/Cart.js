import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import ItemDetailCart from '../ItemDetail/ItemDetailCart';
import { db } from '../../services/firebase/firebase';
import {collection, addDoc, getDoc, doc, Timestamp, writeBatch} from 'firebase/firestore';

const Cart= ()=>{
    const { clothesCart, clear, getTotal} = useContext(CartContext);
    // eslint-disable-next-line
    const [processingOrder, setProcessingOrder] = useState(false) 

    if(clothesCart.length === 0){
        return <>
            <div>
                <h3>Carrito vacío</h3>
                <Link to={`/collection`} className="btn btn-dark m-4">Volver a la tienda</Link>
            </div>
        </>
    }

    const confirmPurchase = () => {

        setProcessingOrder(true)
        const inputName = document.getElementById("inputName").value;
        const inputName2 = document.getElementById("inputName2").value;
        const inputMobile = document.getElementById("inputMobile").value;
        const inputEmail = document.getElementById("inputEmail").value;

        const purchaseObject = {
            firstName: inputName,
            lastName: inputName2,
            mobile: inputMobile,
            email: inputEmail,
            items: clothesCart,
            total: getTotal(),
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
            clear();
        }
    }
    
    return (
        <div className="p-3">
            <h3 className="p-4">Carrito</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Producto</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio unitario</th>
                        <th scope="col">Precio final</th>
                    </tr>
                </thead>
            {clothesCart.map(e => <tbody key={e.id}><ItemDetailCart item={e}></ItemDetailCart></tbody>
            )}</table>
            <h5 className="pb-4">Total: ${getTotal()}</h5>
            <button type="button" className="btn btn-danger m-2" onClick={clear}>Vaciar carrito</button>
            <Link to={`/collection`} className="btn btn-dark m-2">Volver</Link>
            <div className="w-100 p-5 mt-3">
                <h5>Ingrese sus datos si desea confirmar la compra</h5>
                <form className="row g-3">
                    <div className="col-12">
                        <input type="text" className="form-control" id="inputName" placeholder="Nombre" required/>
                    </div>
                    <div className="col-12">
                        <input type="text" className="form-control" id="inputName2" placeholder="Apellido" required/>
                    </div>
                    <div className="col-12">
                        <input type="text" className="form-control" id="inputMobile" placeholder="Teléfono" required/>
                    </div>
                    <div className="col-12">
                        <input type="email" className="form-control" id="inputEmail" placeholder="nombre@ejemplo.com" required/>
                    </div>
                    <div className="col-12">
                        <button onClick={() => confirmPurchase()} className="btn btn-dark">Confirmar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Cart