import axios from 'axios';

export default class GithubService {
	_axiosInstance = axios.create({
		baseURL: 'https://api.github.com/',
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

	getUsers = async () => {
		const endPoint = `users`;
		const response = await this._axiosInstance.get(endPoint);

		return this._getResourse(response, endPoint);
	};

	getUsersBySearch = async (text, page) => {
		const endPoint = `search/users?q=${text}&page=${page}`;
		const response = await this._axiosInstance.get(endPoint);

		return this._getResourse(response, endPoint);
	};

	getPersonByName = async (name) => {
		const endPoint = `users/${name}`;
		const response = await this._axiosInstance.get(endPoint);

		return this._getResourse(response, endPoint);
	};

	getPersonList = async (person, page) => {
		const endPoint = `users/${person}/repos?page=${page}`;
		const response = await this._axiosInstance.get(endPoint);

		return this._getResourse(response, endPoint);
	};


}



