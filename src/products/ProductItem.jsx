import React from 'react'
import ProductOrderButton from './ProductOrderButton'
import './product-item.css'

class ProductItem extends React.Component {
    render() {
        const product = this.props.product

        return (
            <div className="product-item">
                <div className="row">
                    <div className="col-9">
                        <h5>{product.name}</h5>
                        <p>{product.description}</p>
                    </div>

                    <div className="col-1 text-right">
                        <dl>
                            <dt>Price</dt>
                            <dd>${product.price}</dd>
                        </dl>
                    </div>

                    <div className="col-2 text-center">
                        <ProductOrderButton product={product}
                            onAddToCart={() => this.props.onAddToCart(product)}
                            onRemoveFromCart={() => this.props.onRemoveFromCart(product)}
                            isProductInTheCart={this.props.isProductInTheCart} />
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductItem
