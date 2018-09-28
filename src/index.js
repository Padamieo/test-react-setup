import React from 'react';
import Amplify from 'aws-amplify';
// import { withAuthenticator } from 'aws-amplify-react';
import App from './App';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';

import config from './config';

//Amplify.Logger.LOG_LEVEL = 'DEBUG';
import 'index.css';

//redux
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
let store = createStore(reducers);

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

		// authenticationFlowType: 'USER_PASSWORD_AUTH'
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

function render() {
	ReactDOM.render(
		<Provider store={store}>
			<Router>
				<App store={ store } />
			</Router>
		</Provider>,
		document.getElementById('root')
	);
}

store.subscribe(render);
render();
