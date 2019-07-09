import React from 'react';

import './List.css';

const List = ({ users }) => {
	const list = users.map(user => {
		return <li key={user.id}>{user.login}</li>;
	});
	return (
		<div className="row">
			<div className="col">
				<h3>Users</h3>
				<ul className="list-group">{list}</ul>
			</div>
		</div>
	);
};

export default List;
