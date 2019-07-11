import React from 'react';

import './List.css';
import { ListItem } from '../../elements';

const List = ({ users }) => {
	const list = users.map(user => {
		return <ListItem key={user.id} username={user.login} />;
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
