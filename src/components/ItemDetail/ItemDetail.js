import { useState } from 'react';
import Count from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom'

const ItemDetail = ({item})=> {
    const [count, setCount] = useState(0);
    const [cart, setCart] = useState(true)
    console.log('cantidad ' + count);

    const addToCart = () =>{
        setCart(false);
    }
    const handleOnClick = () => {
        setCart(true);
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
                            <Count props={item} initial={0} setCount={setCount} onAdd={addToCart}/>
                            <Link to={'/cart'} className="btn btn-primary m-2" onClick={handleOnClick}>Ir al carrito</Link>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default ItemDetail