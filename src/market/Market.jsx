import React from 'react'
import ProductsList from '../products/ProductsList'
import Cart from '../cart/Cart'

class Market extends React.Component {
    constructor() {
        super()
        this.state = {cartItems: [], total: 0}

        this.onAddToCart = this.onAddToCart.bind(this)
        this.isProductInTheCart = this.isProductInTheCart.bind(this)
        this.onRemoveFromCart = this.onRemoveFromCart.bind(this)
    }

    onAddToCart(product) {
        let cartItemsCopy = this.state.cartItems.slice(0)
        cartItemsCopy.push(product)
        let total = this.calculateCartTotalValue(cartItemsCopy)

        this.setState({...this.state, total:total, cartItems: cartItemsCopy})
    }

    onRemoveFromCart(productToBeRemoved) {
        let cartItemsCopy = this.state.cartItems.slice(0)
        cartItemsCopy = cartItemsCopy.filter(product => product.id != productToBeRemoved.id)
        let total = this.calculateCartTotalValue(cartItemsCopy)

        this.setState({...this.state, total:total, cartItems: cartItemsCopy})
    }

    isProductInTheCart(productToBeChecked) {
        let returnValue = false
        this.state.cartItems.forEach(product => {
            if (product.id == productToBeChecked.id)
                returnValue = true
        })

        return returnValue
    }

    calculateCartTotalValue(cart) {
        let total = 0
        cart.forEach(product => total += product.price)

        return total
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-10">
                        <ProductsList cartItems={this.state.cartItems} 
                            onAddToCart={this.onAddToCart}
                            onRemoveFromCart={this.onRemoveFromCart} 
                            isProductInTheCart={this.isProductInTheCart}/>
                    </div>

                    <div className="col-2">
                        <Cart cartItems={this.state.cartItems} total={this.state.total}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Market
