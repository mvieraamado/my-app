import { useEffect, useState } from "react"
import Item from "../Item/Item"
import ItemDetail from "../ItemDetail/ItemDetail"


const clothes= [
    {id: 1, name: 'vestido arena', description: 'lorem ipsum', price: 2100, stock: 15},
    {id: 2, name: 'vestido largo rojo luna', description: 'lorem ipsum', price: 2400, stock: 20},
    {id: 3, name: 'mono Isabel',  description: 'lorem ipsum', price: 2150, stock: 18},
    {id: 4, name: 'pantalon campana estampado', description: 'lorem ipsum', price: 1850, stock: 12},
    {id: 5, name: 'pantalon campana bolsillos', description: 'lorem ipsum', price: 1760, stock: 17},
    {id: 6, name: 'falda asimetrica', description: 'lorem ipsum', price: 1350, stock: 14},
    {id: 7, name: 'top tirante basico', description: 'lorem ipsum', price: 1100, stock: 25},
    {id: 8, name: 'blusa abotonada', description: 'lorem ipsum', price: 1230, stock: 23},
    {id: 9, name: 'blusa bali', description: 'lorem ipsum', price: 1400, stock: 20},
    {id: 10, name: 'blazer marino', description: 'lorem ipsum', price: 3100, stock: 15},
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

            <ItemDetail key='1' name='vestido arena' price='2100' description='lorem ipsum' stock='15'/>
        </div>
    )
}

export default ItemList