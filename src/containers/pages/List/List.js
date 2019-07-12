import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { List } from '../../../components/pages/List';
import { fetchUsers, addSearchQueryAC } from '../../../store/actions';
import { withGithubService } from '../../../hoc';
import { Spinner } from '../../../components/elements';
import { statuses } from '../../../helpers';

class ListContainer extends Component {
	// componentDidMount() {
	// 	this.props.fetchUsers();
	// }

	render() {
		const { status, users, fetchUsers, addQuery } = this.props;
		
		if (status === statuses.REQUEST) {
			return <Spinner />;
		}

		return <List users={users} fetchUsers={fetchUsers} addQuery={addQuery} />;
	}
}

const mapStateToProps = ({ list }) => {
	return {
		...list,
	};
};

const mapDispatchToProps = (dispatch, { githubService }) => {
	return bindActionCreators(
		{
			fetchUsers: fetchUsers(githubService),
			addQuery: addSearchQueryAC,
		},
		dispatch
	);
};

export default withGithubService()(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(ListContainer)
);
