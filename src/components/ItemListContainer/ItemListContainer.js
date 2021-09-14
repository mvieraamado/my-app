import React from 'react'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({welcome, functionality})=>{
    return(
        <div>
            <h3>{welcome}</h3>
            <p>{functionality}</p>
            <ItemList />
        </div>
    )
}

export default ItemListContainer