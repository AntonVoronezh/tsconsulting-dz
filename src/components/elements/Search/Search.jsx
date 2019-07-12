import React, { useState } from 'react';

const Search = ({ fetchUsers, addQuery }) => {
	const [query, setQuery] = useState('');

	const onChangeQuery = e => {
		setQuery(e.target.value);
	};

	const searchHandler = e => {
		e.preventDefault();
		addQuery(query.replace( / /g, "+"));
		fetchUsers();
	};

	return (
		<form className="form-inline my-2 my-lg-0" onSubmit={searchHandler}>
			<input
				className="form-control mr-sm-2"
				type="search"
				placeholder="Search"
				aria-label="Search"
				value={query}
				onChange={onChangeQuery}
			/>
			<button className="btn btn-outline-success my-2 my-sm-0" type="submit" disabled={query.length === 0}>
				Search
			</button>
		</form>
	);
};

export default Search;
