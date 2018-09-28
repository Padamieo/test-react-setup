import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './views/home';
import NotFound from './views/fallback';
import Login from './views/login';
import Logout from './views/logout';
import Register from './views/register';

//redux
import { voteAngular } from './actions'

//export default ({childProps}) => (
export default class Routes extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store;
		this.childProps = this.props;
	}

	handleVoteAngular = () => {
		this.store.dispatch(voteAngular());
		console.log(this.store.getState());
	}

	render() {
		return (
			<div>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/login" exact component={Login} props={this.childProps} />

					<Route path="/logout" exact component={Logout} props={this.childProps} />

					<Route path="/register" exact component={Register} props={this.childProps} />
					{/* catch all unmatched routes */}
					<Route component={NotFound} />
				</Switch>
				<a href="#" onClick={this.handleVoteAngular}>Routes</a>
			</div>
		)
	}
}

//);
