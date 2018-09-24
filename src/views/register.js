import React, { Component } from 'react';
import { Auth } from 'aws-amplify';

import { Input } from 'components/Input';

//class Login extends React.Component {
export default class register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			email: '',
		}

		this.checkAuth = this.checkAuth.bind(this);

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	render() {
		return (
			<div>
				<a href="#" onClick={this.checkAuth}>signup</a>
				<form type="submit">
					<Input label="Username" name="username" type="text" value={this.state.username} setValue={ this.handleChange } />
					<Input label="Password" name="password" type="password" value={this.state.password} setValue={ this.handleChange } />
					<Input label="Email" name="email" type="text" value={this.state.email} setValue={ this.handleChange } />
					<button onClick={this.handleSubmit} >Submit</button>
				</form>
			</div>
		);
	}

	handleChange(event) {
		this.setState({[event.target.name]: event.target.value});
	}

	setValue = (value) => {
		const prevValue = this.props.value;

		this.setState({
			value,
			dirty: this.state.dirty || (prevValue !== null && value !== prevValue),
		});

	};

	checkAuth(e) {
		e.preventDefault();
		console.log('checkAuth');
		console.log(this.state.username, this.state.password);

		// var params: {
		// 	Bucket: 'test-bucket-react-cognito'
		// };

		// var bucket = new AWS.S3({
		// 	params
		// });
		// console.log(bucket);
		// var s3 = new AWS.S3();

		// s3.listBuckets(params, function(err, data) {
		// 	if (err) console.log(err, err.stack); // an error occurred
		// 	else     console.log(data);           // successful response
		// });

		// Auth.currentAuthenticatedUser()
    // .then(data => console.log(data))
    // .catch(err => console.log('error', err));
		// let session = Auth.currentSession();
		// console.log(session);
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log('handleSubmit');
		console.log(this.state.username, this.state.password);

		// Auth.signUp({
		// this.state.username,
		// this.state.password,
		// attributes: {
		// 	email,
		// },
		// validationData: []  //optional
		// })
		// .then(data => console.log(data))
		// .catch(err => console.log(err));

		// Auth.currentAuthenticatedUser()
		// .then(user => {
	  //   return Auth.changePassword(user, 'Pancakes4You!', 'You4pancakes!');
		// })
		// .then(data => console.log(data))
		// .catch(err => console.log(err));
	}
}
