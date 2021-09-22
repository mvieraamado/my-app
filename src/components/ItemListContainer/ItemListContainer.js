import React from 'react';
import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from "react";


const clothes= [
    {id: 1, name: 'vestido arena', image:'assets/vestido-verde-luna.jpg', description: 'lorem ipsum', price: 2100, stock: 15},
    {id: 2, name: 'vestido largo verde luna', image:'assets/vestido-verde-luna.jpg', description: 'lorem ipsum', price: 2400, stock: 20},
    {id: 3, name: 'mono Isabel', image:'assets/vestido-verde-luna.jpg', description: 'lorem ipsum', price: 2150, stock: 18},
    {id: 4, name: 'pantalon campana estampado', image:'assets/vestido-verde-luna.jpg', description: 'lorem ipsum', price: 1850, stock: 12},
    {id: 5, name: 'pantalon campana bolsillos', image:'assets/vestido-verde-luna.jpg', description: 'lorem ipsum', price: 1760, stock: 17},
    {id: 6, name: 'falda asimetrica', image:'assets/vestido-verde-luna.jpg', description: 'lorem ipsum', price: 1350, stock: 14},
    {id: 7, name: 'top tirante basico', image:'assets/vestido-verde-luna.jpg', description: 'lorem ipsum', price: 1100, stock: 25},
    {id: 8, name: 'blusa abotonada', image:'assets/vestido-verde-luna.jpg', description: 'lorem ipsum', price: 1230, stock: 23},
    {id: 9, name: 'blusa bali', image:'assets/vestido-verde-luna.jpg', description: 'lorem ipsum', price: 1400, stock: 20},
    {id: 10, name: 'blazer marino', image:'assets/vestido-verde-luna.jpg', description: 'lorem ipsum', price: 3100, stock: 15},
]

function lista () {
    return new Promise ((resolve, reject)=> {
        setTimeout(()=> resolve(clothes), 2000)
    })
}

const ItemListContainer = ()=> {
    const [listClothes, setListClothes] = useState([])

    useEffect (()=>{
        const list = lista()
        
        list.then(list=> {
            setListClothes (list)
        })
        
    },[])

    if(listClothes.length === 0) {
        return (
            <span>Loading...</span>
        )
    }

    return (
        <div className="row row-cols-1 row-cols-md-4 w-100 p-5">
            <ItemList props={listClothes} />
        </div>
    )
}
export default ItemListContainer