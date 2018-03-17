import React from 'react'

class Cart extends React.Component {
    render() {
        return (
            <div>
                <small>{this.props.cartItems.length} items in your cart</small>
                <p>Total: $ {this.props.total}</p>
            </div>
        )
    }
}

export default Cart
