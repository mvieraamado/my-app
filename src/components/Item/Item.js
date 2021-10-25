import { Link} from 'react-router-dom';
import './item.css'

const Item= ({item})=>{
    return(
        <div className="col p-lg-4">
            <div className="card myCard">
                <img src= {`../../${item?.image}`} className="card-img-top" alt={item?.name}/>
                <div className="card-body">
                    <h5 className="card-title">{item?.name}</h5>
                    <p className="card-text">${item?.price}</p>
                    <Link to={`/item/${item?.id}`} className="btn btn-dark m-2">Ver detalles</Link>
                </div> 
            </div>
        </div>
    )
}

export default Item