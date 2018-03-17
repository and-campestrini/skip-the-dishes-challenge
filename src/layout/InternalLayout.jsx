import React from 'react'
import './internal-layout.css'

class InternalLayout extends React.Component {

    render() {
        return (
            <div className="internal-layout">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand">Skip Challenge</a>
                </nav>

                {this.props.children}
            </div>
        )
    }

}

export default InternalLayout
