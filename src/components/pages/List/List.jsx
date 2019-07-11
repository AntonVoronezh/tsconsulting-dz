import React from 'react';
import ReactPaginate from 'react-paginate';

import './List.css';
import { ListItem } from '../../elements';

const List = ({ users }) => {
	const list = users.map(user => {
		return <ListItem key={user.id} username={user.login} />;
	});
	return (
		<div className="row">
			<div className="col">
				<h3>Users</h3>
				<ul className="list-group">{list}</ul>
				

				<nav aria-label="Page navigation example">
  <ul className="pagination justify-content-end">
    <li className="page-item disabled">
      <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
    </li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li claclassNames="page-item">
      <a className="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>


				<ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'page-item'}
          pageCount={100}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
        //   onPageChange={this.handlePageClick}
		  containerClassName={'pagination'}
		  pageClassName={'page-item'}
		  previousClassName={'page-item'}
		  nextClassName={'page-item'}
		  pageLinkClassName={'page-link'}
		  previousLinkClassName={'page-link'}
		  nextLinkClassName={'page-link'}
        //   subContainerClassName={'page-item'}
          activeClassName={'active'}
        />
			</div>
		</div>
	);
};

export default List;
