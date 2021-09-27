import Count from '../ItemCount/ItemCount'

const ItemDetail = ({item})=> {
    return(
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <img src={item.image} alt='imagen'/>
                </div>
                <div className="col-6">
                    <h3>{item.name}</h3>
                    <span>{item.price}</span>
                    <p>{item.description}</p>
                    <span>{item.stock}</span>
                    <Count props={item}/>
                </div>
            </div> 
        </div>
    )
}

export default ItemDetail