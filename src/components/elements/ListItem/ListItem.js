import React from 'react';
import { Link } from 'react-router-dom';

import './ListItem.css';

const ListItem = ({ username }) => {
	return <li className="list-group-item mb-1">
	<Link to={`person/${username}`}>
	{/* <Link to="person/username"> */}
	<div>
		{username}
	</div>
	</Link>
	</li>;
};

export default ListItem;
