import React from 'react';

import './Person.css';
import { ListItem, Pagination, Search } from '../../elements';

const Person = ({ person, users, fetchUsers, addQuery, totalCount, changePagPage, pagPage }) => {
	debugger
	// const listUsers = users.map(user => {
	// 	return <ListItem key={user.id} username={user.login} />;
	// });

	// const list = users ? <ul className="list-group">{listUsers}</ul> : null;

	return (
		<div className="row">
			<div className="col">
				<h3>Person</h3>
				{/* {list} */}
				{/* <Pagination
					totalCount={totalCount}
					length={users.length}
					changePagPage={changePagPage}
					fetchUsers={fetchUsers}
					pagPage={pagPage}
				/> */}
			</div>
		</div>
	);
};

export default Person;
