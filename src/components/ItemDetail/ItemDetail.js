const ItemDetail = ({name, price, description, stock})=> {
    return(
        <div>
            <h3>{name}</h3>
            <span>{price}</span>
            <p>{description}</p>
            <span>{stock}</span>
        </div>
    )
}

export default ItemDetail