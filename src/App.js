import React, { Component } from 'react';
import Routes from './Routes';

class App extends Component {
	constructor(props) {
		super(props);

		// this.state = {
		// 	loggedIn: false
		// };
		this.store = this.props.store;
	}

	render() {
		return (
			<div className="App">
				<Routes store={this.store} />
			</div>
		);
	}
}

export default App;
