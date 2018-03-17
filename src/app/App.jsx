import React from 'react'
import AuthPage from '../auth/AuthPage'
import './App.css'
import Market from '../market/Market'
import InternalLayout from '../layout/InternalLayout'

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12">
						<InternalLayout>
							<Market/>
						</InternalLayout>
					</div>
				</div>
			</div>
		)
	}
}

export default App
