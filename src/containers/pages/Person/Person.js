import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

import { Person } from '../../../components/pages/Person';
import { changePersonAC, fetchPersonInfo, fetchPersonList, changePagPageACC } from '../../../store/actions';
import { withGithubService } from '../../../hoc';
import { Spinner } from '../../../components/elements';
import { statuses } from '../../../helpers';

class PersonContainer extends Component {
	componentDidMount() {
		const {
			changePerson,
			fetchPersonInfo,
			fetchPersonList,
			match: {
				params: { id },
			},
		} = this.props;

		changePerson(id);
		fetchPersonInfo();
		fetchPersonList();
	}

	render() {
		const { status, ...rest } = this.props;

		if (status === statuses.REQUEST || !rest.personInfo) {
			return <Spinner />;
		}

		return <Person {...rest} />;
	}
}

const mapStateToProps = ({ person }) => {
	return {
		...person,
	};
};

const mapDispatchToProps = (dispatch, { githubService }) => {
	return bindActionCreators(
		{
			fetchPersonList: fetchPersonList(githubService),
			changePerson: changePersonAC,
			fetchPersonInfo: fetchPersonInfo(githubService),
			changePagPage: changePagPageACC
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
