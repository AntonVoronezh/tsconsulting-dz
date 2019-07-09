import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { List } from '../../../components/pages/List';
import { fetchUsers } from '../../../store/actions';

class ListContainer extends Component {
	componentDidMount() {
		this.props.fetchUsers();
	}


	render() {
		return (
			<div>
				<List />
			</div>
		);
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
		},
		dispatch
	);
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ListContainer);
