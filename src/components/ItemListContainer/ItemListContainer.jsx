import React from 'react'

const ItemListContainer = ({greeting}) => {
    return (
        <div className="greeting">
                <h3 className="card-title">{greeting}</h3>
        </div>
        
    )
}

export default ItemListContainer