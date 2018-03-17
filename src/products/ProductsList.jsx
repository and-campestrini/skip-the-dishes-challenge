import React from 'react'
import ProductItem from './ProductItem'
import ProductService from '../services/Products'

class ProductsList extends React.Component {
    constructor() {
        super()
        this.handleResults = this.handleResults.bind(this)
        this.state = {result: []}
    }

    componentDidMount() {
        ProductService.getAllProducts()
            .then(this.handleResults)
    }

    handleResults(result) {
        this.setState({result: result.data})
    }

    render() {
        return (<div>
            {this.state.result.map(
                product => <ProductItem product={product} 
                    key={product.id} 
                    onAddToCart={this.props.onAddToCart}
                    onRemoveFromCart={this.props.onRemoveFromCart}
                    isProductInTheCart={this.props.isProductInTheCart}/>)
            }
        </div>)
    }
}

export default ProductsList
