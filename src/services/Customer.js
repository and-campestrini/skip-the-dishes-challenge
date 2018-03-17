const axios = require('axios')

const CustomerService = function() {
    const signIn = function(body) {
        let config = {
            params: {
                email: body.email,
                password: body.password
            }
        }

        return axios.post('/api/v1/Customer/auth', null, config)
    }

    const signUp = function(body) {
        return axios.post('/api/v1/Customer', body)
    }

    return {
        signIn,
        signUp
    }
}();

export default CustomerService
