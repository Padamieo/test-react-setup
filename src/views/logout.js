import React, { Component } from 'react';
import { Auth } from 'aws-amplify';

import { Input } from 'components/Input';

//redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { voteAngular } from 'actions'

//class Login extends React.Component {
export class Logout extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			password: ''
		}

		//this.store = this.props.store;
		console.log(this.props);

		this.getCurrent = this.getCurrent.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleVoteAngular = () => {
		this.props.voteAngular();
		//console.log(this.store.getState());
	}

	render() {
		return (
			<div>
				<p>{this.props.angular}</p>
				<a href="#" onClick={this.getCurrent}>get current</a>
				<form type="submit">
					<button onClick={this.handleSubmit} >Logout</button>
				</form>
				<a href="#" onClick={this.handleVoteAngular}>Logout</a>
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

const mapStateToProps = ({ angular }) => ({
	angular
});

const mapDispatchToProps = {
	voteAngular
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
