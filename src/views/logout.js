import React, { Component } from 'react';
import { Auth } from 'aws-amplify';

import { Input } from 'components/Input';

//class Login extends React.Component {
export default class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			password: ''
		}

		//console.log(this.prop);

		this.getCurrent = this.getCurrent.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	render() {
		return (
			<div>
				<a href="#" onClick={this.getCurrent}>get current</a>
				<form type="submit">
					<button onClick={this.handleSubmit} >Logout</button>
				</form>
			</div>
		);
	}

	// handleChange(event) {
	// 	this.setState({[event.target.name]: event.target.value});
	// }

	getCurrent(e) {
		// e.preventDefault();
		console.log('checkAuth');
		console.log(this);

		// Auth.currentAuthenticatedUser()
    // .then(data => console.log(data))
    // .catch(err => console.log('error', err));
		// let session = Auth.currentSession();
		// console.log(session);

	}

	handleSubmit(e) {
		e.preventDefault();
		console.log('handleSubmit');

		Auth.signOut()
			.then(data => console.log(data))
			.catch(err => console.log(err));
	}
}
