import React from 'react'

const Item = (props) => {
    const { item, onRemoveClick } = props

    return(
        <li>
            Company: {item.company}
            <button onClick={() => {onRemoveClick(item._id)}}>Remove</button>
            <ul>
                <li>Ticker: {item.ticker}</li>
                <li>Price: {item.price}</li>
            </ul>
        </li>
    )
}

export default Item