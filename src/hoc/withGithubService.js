import React from 'react';

import { GithubServiceConsumer } from '../helpers';

const withGithubService = () => Wrapped => {
	return props => {
		return (
			<GithubServiceConsumer>
				{GithubService => {
					return <Wrapped {...props} githubService={GithubService} />;
				}}
			</GithubServiceConsumer>
		);
	};
};

export default withGithubService;
