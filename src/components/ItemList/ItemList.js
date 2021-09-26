import Item from '../Item/Item';

const ItemList = ({props})=>{

    return (
    props.map (element =>
        <Item key={element.id} item={element}/>
        )
    )
}

export default ItemList