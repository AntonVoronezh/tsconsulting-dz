import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router";

import { Person } from '../../../components/pages/Person';
import { changePersonAC } from '../../../store/actions';
import { withGithubService } from '../../../hoc';
import { Spinner } from '../../../components/elements';
import { statuses } from '../../../helpers';

class PersonContainer extends Component {
	componentDidMount() {
		const {changePerson, match: {params : {id}}} = this.props

		changePerson(id);
	}

	render() {
		const { status, match: {params : {id}}  } = this.props;

		if (status === statuses.REQUEST) {
			return <Spinner />;
		}

		return <Person person={id}/>;


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
			// fetchUsers: fetchUsers(githubService),
			changePerson: changePersonAC,
			// changePagPage: changePagPageAC
		},
		dispatch
	);
};

export default withGithubService()(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(withRouter(PersonContainer))
);
