import React from 'react'

export default function ProductOrderButton(props) {
    if (!props.isProductInTheCart(props.product)) {
        return (
            <button className="btn btn-primary" 
                onClick={() => props.onAddToCart(props.product)}>Order</button>
        )
    }

    return (
        <button className="btn btn-danger"
            onClick={() => props.onRemoveFromCart(props.product)}>Remove</button>
    )
}
