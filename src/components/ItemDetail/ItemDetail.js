import { useState } from 'react';
import Count from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom'

const ItemDetail = ({item})=> {
    const [quantity, setQuantity] = useState(0);
    console.log('cantidad ' + quantity);
    
    const addToCart = (productNumber)=>{
        setQuantity(productNumber)
        console.log('Producto agregado')
    }

    if(!item){
        return(
            <h1>Loading...</h1>
        )
    }
    return(
        <div className="container w-100 p-3">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`../../${item?.image}`} className="img-fluid rounded-start" alt={item?.name}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{item?.name}</h5>
                            <p className="card-text">${item?.price}</p>
                            <p className="card-text">{item.description}</p>
                            <span>Stock: {item.stock}</span>
                            <Count props={item} onConfirm={addToCart}/>
                            <Link to={'/cart'} className="btn btn-primary m-2">Ir al carrito</Link>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default ItemDetail