const axios = require('axios')

const ProductService = function() {
    const getAllProducts = function() {
        return axios.get('/api/v1/Product',)
    }

    return {
        getAllProducts
    }
}();

export default ProductService
