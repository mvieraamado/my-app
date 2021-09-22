
const Item= ({item})=>{
    return(
        <div className="col">
            <div className="card">
                <img src={item?.image} className="card-img-top" alt={item?.name}/>
                <div className="card-body">
                    <h5 className="card-title">{item?.name}</h5>
                    <p className="card-text">${item?.price}</p>
                </div> 
            </div>
        </div>
    )
}

export default Item