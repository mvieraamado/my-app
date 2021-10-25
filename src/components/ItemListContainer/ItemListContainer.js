import React from 'react';
import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import { getProducts } from '../../services/firebase/firebase';
import { Spinner } from '../Spinner/Spinner';

const ItemListContainer = ()=> {
    const [products, setListProducts] = useState([])
    const { categoryid } = useParams();
    const [, setLoading] = useState(true)

    useEffect (()=>{
        setLoading(true)
        getProducts('category', '==', categoryid).then(products=>{
            setListProducts(products)
        }).catch((error)=>{
            console.log(error)
        }).finally(()=>{
            setLoading(false)
        });
        
        return(()=>{
            setLoading(true)
            setListProducts([])
        })
    },[categoryid])

    if(products.length === 0) {
        return <Spinner/>
    }

    return (
        <div className="row row-cols-1 row-cols-md-3 w-100 p-5">
            <ItemList props={products} />
        </div>
    )
}
export default ItemListContainer