import axios from 'axios';

export default class GithubService {
	_axiosInstance = axios.create({
		baseURL: 'https://api.github.com/',
		// withCredentials: true,
		headers: {
			'content-type': ' application/json',
		},
	});


	_getResourse =  (response, url) => {
		if (!response.status === 200) {
			throw new Error(`Could not fetch ${url}, resived ${response.status}`);
		}
		
		return response;
	};

	// tryLogin = async (email, password) => {
	// 	const endPoint = `users`;
	// 	const response = await this._axiosInstance.get(endPoint);

	// 	return this._getResourse(response, endPoint);
	// };

	getUsers = async () => {
		const endPoint = `users`;
		const response = await this._axiosInstance.get(endPoint);

		return this._getResourse(response, endPoint);
	};
	// getUsers = async id => {
	// 	const endPoint = `user-info/${id}`;
	// 	const response = await this._axiosInstance.get(endPoint);

	// 	return this._getResourse(response, endPoint);
	// };

}





// export default class AuthService {
// 	tryLogin(username, password) {
// 		const data = () => {
// 			if (username === 'aa' && password === '11') {
// 				return {
// 					status: 'ok',
// 					token: 'fbdfbsdfdfAsd9995-CVXVBXV9',
// 					user: {
// 						name: 'MITLabs',
// 					},
// 				};
// 			} else {
// 				return {
// 					status: 'err',
// 					message: 'wrong_email_or_password',
// 				};
// 			}
// 		};

// 		return new Promise((resolve, reject) => {
// 			setTimeout(() => {
// 				if (Math.random() > 0.8) {
// 					reject(new Error('Network Error'));
// 				} else {
// 					resolve(data());
// 				}
// 			}, 1200);
// 		});
// 	}
// }
