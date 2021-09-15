import { useEffect, useState } from "react"
import Item from "../Item/Item"


const clothes= [
    {id: 1, name: 'vestido arena', price: 2100, stock: 15},
    {id: 2, name: 'vestido largo rojo luna', price: 2400, stock: 20},
    {id: 3, name: 'mono Isabel', price: 2150, stock: 18},
    {id: 4, name: 'pantalon campana estampado', price: 1850, stock: 12},
    {id: 5, name: 'pantalon campana bolsillos', price: 1760, stock: 17},
    {id: 6, name: 'falda asimetrica', price: 1350, stock: 14},
    {id: 7, name: 'top tirante basico', price: 1100, stock: 25},
    {id: 8, name: 'blusa abotonada', price: 1230, stock: 23},
    {id: 9, name: 'blusa bali', price: 1400, stock: 20},
    {id: 10, name: 'blazer marino', price: 3100, stock: 15},
]

function lista () {
    return new Promise ((resolve, reject)=> {
        setTimeout(()=> resolve(clothes), 2000)
    })
}

const ItemList = ()=> {
    const [listClothes, setListClothes] = useState([])

    useEffect (()=>{
        const list = lista()
        
        list.then(list=> {
            setListClothes (list)
        })
        
    },[])

    return (
        <div className="ItemList">
            {listClothes.map (element =>
                <Item key={element.id} name={element.name} price={element.price} stock={element.stock}/>
            )}
        </div>
    )
}

export default ItemList