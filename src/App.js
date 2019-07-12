import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import { List } from './containers/pages/List';
import { Person } from './containers/pages/Person';

const App = () => {
	return (
		<div className="container mt-20">
			<header>
				<h2>GitHub App for example</h2>
			</header>
			<main>
				<Switch>
					<Route path="/" exact render={() => <List />} />
					<Route path="/person/:id" render={() => <Person />} />
					<Route render={() => <h2>Page not found</h2>} />
				</Switch>
			</main>
		</div>
	);
};

export default App;
