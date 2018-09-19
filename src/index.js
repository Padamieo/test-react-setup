import React from 'react';
import Amplify from 'aws-amplify';
// import { withAuthenticator } from 'aws-amplify-react';
import App from './App';
import ReactDOM from 'react-dom';

import Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';

import config from './config';

//Amplify.Logger.LOG_LEVEL = 'DEBUG';
import 'index.css';

Amplify.configure({
	Auth:{
		mandatorySignIn: true,
		region: config.cognito.REGION,
		userPoolId: config.cognito.USER_POOL_ID,
		identityPoolId: config.cognito.IDENTITIY_POOL_ID,
		userPoolWebClientId: config.cognito.APP_CLIENT_ID,

		// OPTIONAL - Configuration for cookie storage
		// cookieStorage: {
		// // REQUIRED - Cookie domain (only required if cookieStorage is provided)
		// 		domain: 'localhost:3000',
		// // OPTIONAL - Cookie path
		// 		path: '/',
		// // OPTIONAL - Cookie expiration in days
		// 		expires: 365,
		// // OPTIONAL - Cookie secure flag
		// 		secure: true
		// },

		authenticationFlowType: 'USER_PASSWORD_AUTH'
	},
	API: {
		endpoints: [
			{
				name: 'testAPI',
				endpoint: config.apiGateway.URL,
				region: config.apiGateway.REGION
			}
		]
	}
});

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('root')
);
