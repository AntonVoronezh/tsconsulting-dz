import React from 'react';

import './List.css';
import { ListItem, Pagination } from '../../elements';

const List = ({ users }) => {
	const list = users.map(user => {
		return <ListItem key={user.id} username={user.login} />;
	});
	return (
		<div className="row">
			<div className="col">
				<h3>Users</h3>
				<form class="form-inline my-2 my-lg-0">
					<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
					<button class="btn btn-outline-success my-2 my-sm-0" type="submit">
						Search
					</button>
				</form>

				<ul className="list-group">{list}</ul>

				<Pagination />
			</div>
		</div>
	);
};

export default List;
