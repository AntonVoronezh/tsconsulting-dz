import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import { List } from './containers/pages/List';

const App = () => {
	const initialState = { title: '', available: false };

	const [title, setTitle] = useState(initialState);

	return (
		<div className="container mt-20">
			<header>
				<h2>GitHub App for example</h2>
			</header>
			<main>
				<Switch>
					<Route path="/" exact render={() => <List />} />
					<Route path="/person" exact render={() => 1} />
					<Route render={() => <h2>Page not found</h2>} />
				</Switch>
			</main>
		</div>
	);
};

export default App;
