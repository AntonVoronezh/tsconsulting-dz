import React from 'react';

import './Person.css';
import { ListItem, Pagination } from '../../elements';

const Person = ({ person, personInfo: { avatar_url, name, followers, following } }) => {
	const avatar = avatar_url ? <img src={avatar_url} alt={person} style={{ width: '100px' }} /> : null;
	const nameRes = name ? name : null;
	const followersRes = followers ? followers : null;
	const followingRes = following ? following : null;

	// const listUsers = users.map(user => {
	// 	return <ListItem key={user.id} username={user.login} />;
	// });

	// const list = users ? <ul className="list-group">{listUsers}</ul> : null;

	return (
		<div className="row">
			<div className="col">
				<h3>{nameRes}</h3>
				<div class="card">
					<ul class="list-group list-group-flush">
						<li class="list-group-item">{avatar}</li>
						<li class="list-group-item">followers - {followersRes}</li>
						<li class="list-group-item">following- {followingRes}</li>
					</ul>
				</div>
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
