import React from 'react';
import ReactDOM from 'react-dom';

import AWS from 'AWS-SDK';
console.log(AWS);

class Todo extends React.Component {
	constructor(props) {
		super(props);
		// this.state = {
		//     items: [],
		//     text: ''
		// }
		// this.handleChange = this.handleChange.bind(this);
		// this.handleSubmit = this.handleSubmit.bind(this);
		//AWS.Login.setClientId('YOUR-CLIENT-ID');
		window.onAmazonLoginReady = function() {
			//amazon.Login.setClientId('YOUR-CLIENT-ID');
		};
	}

	render() {
		return (
			<div>
				<div id="amazon-root"></div>
				<a href="#" id="LoginWithAmazon" onClick={this.handleSubmit}>
					<img border="0" alt="Login with Amazon"
						src="https://images-na.ssl-images-amazon.com/images/G/01/lwa/btnLWA_gold_156x32.png"
						width="156" height="32" />
				 </a>
			</div>
		);
	}

	handleChange(e) {
		//this.setState({ text: e.target.value });
	}

	handleSubmit(e) {
		console.log(e);
		console.log('submitting');
		var options = {};
		options.scope = 'profile';
		amazon.Login.authorize(options, function(response) {
			if ( response.error ) {
				alert('oauth error ' + response.error);
			return;
			}
			amazon.Login.retrieveProfile(response.access_token, function(response) {
				alert('Hello, ' + response.profile.Name);
				alert('Your e-mail address is ' + response.profile.PrimaryEmail);
				alert('Your unique ID is ' + response.profile.CustomerId);
				if ( window.console && window.console.log )
					window.console.log(response);
			});
		});
	}

}


ReactDOM.render(
	<Todo />,
	document.getElementById('root')
);
