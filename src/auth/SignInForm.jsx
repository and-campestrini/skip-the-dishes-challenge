import React from 'react'
import CustomerService from '../services/Customer'

class SignInForm extends React.Component {
    constructor() {
        super()
        this.state = {email: '', password: ''};

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleEmailChange(event) {
        this.setState({...this.state, email: event.target.value})
    }

    handlePasswordChange(event) {
        this.setState({...this.state, password: event.target.value})
    }

    handleClick() {
        const state = this.state
        let body = {
            email: state.email,
            name: state.name,
            address: state.address,
            password: state.password
        }

        CustomerService.signUp(body)
    }

    render() {
        return (
            <div className="sign-up-form col-12">
                <form name="signupform">
                    <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input type="text" className="form-control" onChange={this.handleEmailChange} 
                            name="email" value={this.state.email}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" onChange={this.handlePasswordChange}
                            name="password" value={this.state.password}/>
                    </div>

                    <div className="form-group">
                        <button type="button" className="btn btn-primary btn-block" 
                            onClick={this.handleClick}>Sign Up</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignInForm
