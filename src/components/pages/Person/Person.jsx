import React from 'react';

import './Person.css';
import { PersonListItem, Pagination } from '../../elements';

const Person = ({
	person,
	list,
	totalCount,
	changePagPage,
	pagPage,
	fetchPersonList,
	personInfo: { avatar_url, name, followers, following },
}) => {
	const avatar = avatar_url ? <img src={avatar_url} alt={person} style={{ width: '100px' }} /> : null;
	const nameRes = name ? name : null;
	const followersRes = followers ? followers : null;
	const followingRes = following ? following : null;

	const listRep =
		list &&
		list.map(({ full_name, description }, id) => {
			return <PersonListItem key={id} name={full_name} desc={description} />;
		});

	const listL = list ? <ul className="list-group">{listRep}</ul> : null;

	return (
		<div className="row">
			<div className="col">
				<h3>{nameRes}</h3>
				<div className="card">
					<ul className="list-group list-group-flush">
						<li className="list-group-item">{avatar}</li>
						<li className="list-group-item">followers - {followersRes}</li>
						<li className="list-group-item">following- {followingRes}</li>
					</ul>
				</div>
				{listL}
				{list.length !== 0 ? (
					<Pagination
						totalCount={totalCount}
						length={list.length}
						changePagPage={changePagPage}
						fetchPersonList={fetchPersonList}
						pagPage={pagPage}
					/>
				) : null}
			</div>
		</div>
	);
};

export default Person;
