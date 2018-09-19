import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './views/home';
import NotFound from './views/fallback';
import Login from './views/login';

export default ({childProps}) => (
	<Switch>
		<Route path="/" exact component={Home} />
		<Route path="/login" exact component={Login} props={childProps} />
		{/* catch all unmatched routes */}
		<Route component={NotFound} />
	</Switch>
);
