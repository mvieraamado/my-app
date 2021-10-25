import { useState } from 'react';
import Count from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom'
import { Spinner } from '../Spinner/Spinner';

const ItemDetail = ({item})=> {
    const [, setCart] = useState(true)
    const [ count, setCount] = useState(0)

    const handleOnClick = () => {
        setCart(true);
    }

    if(!item){
        return <Spinner/>
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
                            <p>Stock: {item.stock}</p>  
                             
                            { count > 0
                            ?<Link to={'/cart'} className="btn btn-dark m-2" onClick={handleOnClick}>Ir al carrito</Link>
                            :<Count props={item} setCount={setCount}/>}
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default ItemDetail