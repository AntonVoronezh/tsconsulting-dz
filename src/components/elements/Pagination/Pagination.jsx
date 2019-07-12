import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ totalCount, length }) => {
	const pageCount = Math.ceil(totalCount / length);

	const onPageChange = e => {
		console.log(e)
	}

	const pag =
		totalCount !== 0 ? (
			<ReactPaginate
				previousLabel={'previous'}
				nextLabel={'next'}
				breakLabel={'...'}
				breakClassName={'page-item'}
				pageCount={pageCount}
				marginPagesDisplayed={2}
				pageRangeDisplayed={5}
				containerClassName={'pagination'}
				pageClassName={'page-item'}
				previousClassName={'page-item'}
				nextClassName={'page-item'}
				pageLinkClassName={'page-link'}
				previousLinkClassName={'page-link'}
				nextLinkClassName={'page-link'}
				activeClassName={'active'}
				onPageChange={onPageChange}
			/>
		) : null;

	return <div>{pag}</div>;
};

export default Pagination;
