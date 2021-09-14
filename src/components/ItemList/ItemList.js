import { useEffect, useState } from "react"


const clothes= [
    {name: 'vestido arena', price: 2100, stock: 15},
    {name: 'vestido largo rojo luna', price: 2400, stock: 20},
    {name: 'mono Isabel', price: 2150, stock: 18},
    {name: 'pantalon campana estampado', price: 1850, stock: 12},
    {name: 'pantalon campana bolsillos', price: 1760, stock: 17},
    {name: 'falda asimetrica', price: 1350, stock: 14},
    {name: 'top tirante basico', price: 1100, stock: 25},
    {name: 'blusa abotonada', price: 1230, stock: 23},
    {name: 'blusa bali', price: 1400, stock: 20},
    {name: 'blazer marino', price: 3100, stock: 15},
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
            <ul>
                {listClothes.map (e => <li key="{e.id}">{e.name}</li>)}
            </ul>
        </div>
    )
}

export default ItemList