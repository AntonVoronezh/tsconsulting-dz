import React from 'react';

import { GithubServiceConsumer } from '../helpers';

const withGithubService = () => Wrapped => {
	return props => {
		return (
			<GithubServiceConsumer>
				{githubService => {
					return <Wrapped {...props} githubService={githubService} />;
				}}
			</GithubServiceConsumer>
		);
	};
};

export default withGithubService;
