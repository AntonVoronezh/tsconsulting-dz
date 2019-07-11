import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = () => {
	return (
		<ReactPaginate
			previousLabel={'previous'}
			nextLabel={'next'}
			breakLabel={'...'}
			breakClassName={'page-item'}
			pageCount={100}
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
		/>
	);
};

export default Pagination;
