
const Item= ({name, price, stock})=>{
    return(
        <div className="Item">
            <h5>{name}</h5>
            <p>${price}</p>
            <span>Stock: {stock}</span>
        </div>
    )
}

export default Item