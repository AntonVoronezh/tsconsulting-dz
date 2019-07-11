import React, { useState } from 'react';

const Search = () => {
	const [title, setTitle] = useState('');

	const onChangeTitle = e => {
		setTitle(title + e.target.value);
	};

	const searchHandler = e => {
		e.preventDefault();
	}

	return (
		<form className="form-inline my-2 my-lg-0" onSubmit={searchHandler}>
			<input
				className="form-control mr-sm-2"
				type="search"
				placeholder="Search"
				aria-label="Search"
				value={title}
				onChange={onChangeTitle}
			/>
			<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
				Search
			</button>
		</form>
	);
};

export default Search;
