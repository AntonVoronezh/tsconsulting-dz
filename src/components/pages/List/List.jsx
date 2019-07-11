import React from 'react';

import './List.css';
import { ListItem, Pagination, Search } from '../../elements';

const List = ({ users }) => {
	const list = users.map(user => {
		return <ListItem key={user.id} username={user.login} />;
	});
	return (
		<div className="row">
			<div className="col">
				<h3>Users</h3>
				<Search />
				<ul className="list-group">{list}</ul>
				<Pagination />
			</div>
		</div>
	);
};

export default List;
