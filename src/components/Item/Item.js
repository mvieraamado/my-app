import { Link} from 'react-router-dom';


const Item= ({item})=>{
    return(
        <div className="col">
            <div className="card">
                <img src={item?.image} className="card-img-top" alt={item?.name}/>
                <div className="card-body">
                    <h5 className="card-title">{item?.name}</h5>
                    <p className="card-text">${item?.price}</p>
                    <Link to={`/item/${item?.id}`} className="btn btn-secondary m-2">Ver Producto</Link>
                </div> 
            </div>
        </div>
    )
}

export default Item