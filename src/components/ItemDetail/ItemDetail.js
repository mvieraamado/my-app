import Count from '../ItemCount/ItemCount'

const ItemDetail = ({item})=> {
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
                            <span>{item.stock}</span>
                            <Count props={item}/>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default ItemDetail