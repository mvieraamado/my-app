import ItemDetail from '../ItemDetail/ItemDetail';
import { useEffect, useState } from "react";


const clothing= {id: 1,
     name: 'vestido arena', 
     image:'assets/vestido-verde-luna.jpg', 
     description: 'lorem ipsum', 
     price: 2100, 
     stock: 15
    }

function product () {
    return new Promise ((resolve, reject)=> {
        setTimeout(()=> resolve(clothing), 2000)
    })
}

const ItemDetailContainer = ()=> {
    const [clothing, setListClothes] = useState([])

    useEffect (()=>{
        const list = product()
        
        list.then(list=> {
            setListClothes (list)
        })
        
    },[])

    return (
        <div className="row row-cols-1 w-100 p-5">
            <ItemDetail props={clothing} />
        </div>
    )
}

export default ItemDetailContainer