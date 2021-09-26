import Count from '../ItemCount/ItemCount'

const ItemDetail = ({props})=> {
    return(
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <img src={`../../${props.image}`} alt='imagen'/>
                </div>
                <div className="col-6">
                    <h3>{props.name}</h3>
                    <span>{props.price}</span>
                    <p>{props.description}</p>
                    <span>{props.stock}</span>
                    <Count props={props}/>
                </div>
            </div> 
        </div>
    )
}

export default ItemDetail