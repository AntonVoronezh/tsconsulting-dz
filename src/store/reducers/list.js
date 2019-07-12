import {
	FETCH_USERS_LIST_REQUEST,
	FETCH_USERS_LIST_SUCCESS,
	FETCH_USERS_LIST_FAILURE,
	ADD_SEARCH_QUERY,
} from '../actions';
import { statuses } from '../../helpers';

const initialState = {
	users: [],
	status: statuses.INIT,
	errorMsg: null,
	query: '',
};

const listRreducer = (state = initialState, action) => {
	const { type, users, errorMsg, query } = action;
	switch (type) {
		case FETCH_USERS_LIST_REQUEST: {
			return {
				...state,
				status: statuses.REQUEST,
				errorMsg: null,
			};
		}
		case FETCH_USERS_LIST_SUCCESS: {
			return {
				...state,
				status: statuses.SUCCESS,
				users,
				errorMsg: null,
			};
		}
		case FETCH_USERS_LIST_FAILURE: {
			return {
				...state,
				status: statuses.FAILURE,
				errorMsg,
			};
		}
		case ADD_SEARCH_QUERY: {
			return {
				...state,
				query,
			};
		}
		default:
			return state;
	}
};

export default listRreducer;
