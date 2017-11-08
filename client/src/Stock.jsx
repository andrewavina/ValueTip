import React from 'react'

const Item = (props) => {
    const { item, onRemoveClick } = props

    return(
        <li>
            {item.company}
            <button onClick={() => {onRemoveClick(item._id)}}>Remove</button>
        </li>
    )
}

export default Item