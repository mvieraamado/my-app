import ItemDetail from '../ItemDetail/ItemDetail';
import { useEffect, useState } from "react";
import { useParams } from 'react-router';


function getProducts () {
    return new Promise ((resolve, reject)=> {
        const ind= [
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
        setTimeout(()=> resolve(ind), 2000)
    })
}


const ItemDetailContainer = ()=> {
    const { name } = useParams();
    console.log(name);
    const [products, setListClothes] = useState(undefined);
    

    useEffect (()=>{
        const list = getProducts();
        
        list.then(list=>{
            console.log(list)
            const lista = list.find(prod=> prod.name === name)
            setListClothes (lista)
        })
        return(()=>{
            setListClothes(undefined)
        }
            
        )
        
    },[name])

    return (
        <ItemDetail item={products} />
    )
}

export default ItemDetailContainer