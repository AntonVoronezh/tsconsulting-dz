import React, { useState } from 'react';

import './App.css';

const App = () => {
	const initialState = { title: '', available: false };

	const [title, setTitle] = useState(initialState);

	return (
		<div className="container mt-20">
			<h2>GitHub App for example</h2>
			<div className="row">
				<div className="col">
					<h3>Users</h3>
				</div>
			</div>
		</div>
	);
};

export default App;