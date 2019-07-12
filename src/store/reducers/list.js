import {
	FETCH_USERS_LIST_REQUEST,
	FETCH_USERS_LIST_SUCCESS,
	FETCH_USERS_LIST_FAILURE,
	ADD_SEARCH_QUERY,
	ADD_TOTAL_COUNT,
	CHANGE_PAG_PAGE,
} from '../actions';
import { statuses } from '../../helpers';

const initialState = {
	users: [],
	totalCount: 0,
	pagPage: 1,
	status: statuses.INIT,
	errorMsg: null,
	query: '',
};

const listRreducer = (state = initialState, action) => {
	const { type, users, errorMsg, query, totalCount, pagPage } = action;
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
		case ADD_TOTAL_COUNT: {
			return {
				...state,
				totalCount,
			};
		}
		case CHANGE_PAG_PAGE: {
			return {
				...state,
				pagPage,
			};
		}
		default:
			return state;
	}
};

export default listRreducer;
