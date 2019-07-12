import React from 'react';

import './List.css';
import { ListItem, Pagination, Search } from '../../elements';

const List = ({ users, fetchUsers, addQuery, totalCount }) => {

	const listUsers = users.map(user => {
		return <ListItem key={user.id} username={user.login} />;
	});

	const list = users ? <ul className="list-group">{listUsers}</ul> : null;

	return (
		<div className="row">
			<div className="col">
				<h3>Users</h3>
				<Search fetchUsers={fetchUsers} addQuery={addQuery}/>
				{list}
				<Pagination totalCount={totalCount} length={users.length}/>
			</div>
		</div>
	);
};

export default List;
