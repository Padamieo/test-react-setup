import React from 'react';
import Amplify, { Auth, Storage } from 'aws-amplify';
// import { withAuthenticator } from 'aws-amplify-react';
import ReactDOM from 'react-dom';

import 'index.css';

//import AWS from 'AWS-SDK';
console.log(Amplify);

Amplify.configure({
});

function 	Input(props){
	return (
		<div>
			<label>{props.name}</label>
			<input type={props.name} name={props.name} value={props.value} onChange={props.handleChange} />
		</div>
	)
}

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		    username: '',
		    password: ''
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	render() {
		return (
			<div>
				<form type="submit">
					<Input name={'username'} value={this.state.username} handleChange={this.handleChange} />
					<Input name={'password'} value={this.state.password} handleChange={this.handleChange} />
					<button onClick={this.handleSubmit} >Submit</button>
				</form>
			</div>
		);
	}

	handleChange(event) {
		this.setState({[event.target.name]: event.target.value});
	}

	handleSubmit(e) {
		console.log('submitting');
		console.log(this.state);
		Auth.signIn(this.sate.username, this.state.password)
    .then(user => console.log('user', user))
    .catch(err => console.log('error', err));

		// var options = {};
		// options.scope = 'profile';
		// amazon.Login.authorize(options, function(response) {
		// 	if ( response.error ) {
		// 		alert('oauth error ' + response.error);
		// 	return;
		// 	}
		// 	amazon.Login.retrieveProfile(response.access_token, function(response) {
		// 		alert('Hello, ' + response.profile.Name);
		// 		alert('Your e-mail address is ' + response.profile.PrimaryEmail);
		// 		alert('Your unique ID is ' + response.profile.CustomerId);
		// 		if ( window.console && window.console.log )
		// 			window.console.log(response);
		// 	});
		// });

	}
}


ReactDOM.render(
	<App />,
	document.getElementById('root')
);
