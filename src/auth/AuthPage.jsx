import React from 'react'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'
import './auth-page.css'

class AuthPage extends React.Component {
    render() {
        return (
            <div className="auth-page">
                <div className="row">
                    <div className="col-6">
                        <h2>Sign In</h2>
                        <SignInForm />
                    </div>

                    <div className="col-6">
                        <h2>Sign Up</h2>
                        <SignUpForm />
                    </div>
                </div>
            </div>
        )
    }
}

export default AuthPage