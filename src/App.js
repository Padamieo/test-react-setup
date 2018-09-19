import React, { Component } from 'react';
import Routes from './Routes';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loggedIn: false
		};
	}

	render() {
		return (
			<div className="App">
				<Routes />
			</div>
		);
	}
}

export default App;
