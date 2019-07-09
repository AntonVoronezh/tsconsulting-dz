import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import store from './store/store';
import { GithubServiceProvider } from './helpers';
import { GithubService } from './services';
import * as serviceWorker from './serviceWorker';

const storeService = store();
const githubService = new GithubService();

ReactDOM.render(
	<Provider store={storeService}>
		<GithubServiceProvider value={githubService}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</GithubServiceProvider>
	</Provider>,

	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
