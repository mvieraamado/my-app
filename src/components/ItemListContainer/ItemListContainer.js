import React from 'react'

const ItemListContainer = ({welcome, functionality})=>{
    return(
        <div>
            <h3>{welcome}</h3>
            <p>{functionality}</p>
        </div>
    )
}

export default ItemListContainer