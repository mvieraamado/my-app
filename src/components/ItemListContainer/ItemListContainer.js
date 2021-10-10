import React from 'react';
import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from "react";
import { db } from '../../services/firebase/firebase';
import { collection, getDocs, query, where } from '@firebase/firestore';
import { useParams } from 'react-router';

const ItemListContainer = ()=> {
    const [listClothes, setListClothes] = useState([])
    const {category} = useParams();
    const [Loading, setLoading] = useState(true)

    useEffect (()=>{
        if(!category){
            setLoading(true)
            getDocs(collection(db, 'collection')).then((querySnapshot)=>{
                const products= querySnapshot.docs.map(doc =>{
                    return{ id: doc.id, ...doc.data()}
                })
                setListClothes(products)
            }).catch((error)=>{
                console.log('Error searching', error)
            }).finally(()=>{
                setLoading(false)
            });
        }else{
            setLoading(true)
            getDocs(query(collection(db, 'collection'), where('category', '**', category))).then((querySnapshot)=>{
                const products= querySnapshot.docs.map(doc=> {
                    return{ id: doc.id, ...doc.data()}
                
                })
                setListClothes(products)
            }).catch((error)=>{
                console.log('Error searching', error)
            }).finally(()=>{
                setLoading(false)
            });
        }
    },[category])

    if(listClothes.length === 0) {
        return (
            <span>Loading...</span>
        )
    }

    return (
        <div className="row row-cols-1 row-cols-md-3 w-100 p-5">
            <ItemList props={listClothes} />
        </div>
    )
}
export default ItemListContainer