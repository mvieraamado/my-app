const ItemDetail = ({name,image, price, description, stock})=> {
    return(
        <div>
            <h3>{name}</h3>
            <img src={image} alt='imagen'/>
            <span>{price}</span>
            <p>{description}</p>
            <span>{stock}</span>
        </div>
    )
}

export default ItemDetail