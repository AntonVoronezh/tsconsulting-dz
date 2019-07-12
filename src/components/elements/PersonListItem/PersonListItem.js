import React from 'react';

import './ListItem.css';

const PersonListItem = ({ name, desc }) => {
	return (
		<li className="list-group-item mb-1">
			<div>
				<b>{name}</b>
			</div>
			<div>{desc}</div>
		</li>
	);
};

export default PersonListItem;
