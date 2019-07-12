import {
	CHANGE_PERSON,
	FETCH_PERSON_FAILURE,
	FETCH_PERSON_REQUEST,
	FETCH_PERSON_SUCCESS,
	FETCH_PERSON_LIST_REQUEST,
	FETCH_PERSON_LIST_SUCCESS,
	FETCH_PERSON_LIST_FAILURE,
	CHANGE_PAG_PAGEF,
} from '../actions';
import { statuses } from '../../helpers';

const initialState = {
	person: '',
	list: [],
	personInfo: null,
	status: statuses.INIT,
	errorMsg: null,
	totalCount: 0,
	pagPage: 1,
};

const personReducer = (state = initialState, action) => {
	const { type, errorMsg, pagPage, person, personInfo, list } = action;
	switch (type) {
		case CHANGE_PAG_PAGEF: {
			return {
				...state,
				pagPage,
			};
		}
		case CHANGE_PERSON: {
			return {
				...state,
				person,
			};
		}
		case FETCH_PERSON_REQUEST: {
			return {
				...state,
				status: statuses.REQUEST,
				errorMsg: null,
			};
		}
		case FETCH_PERSON_SUCCESS: {
			return {
				...state,
				status: statuses.SUCCESS,
				personInfo,
				totalCount: personInfo.public_repos,
				errorMsg: null,
			};
		}
		case FETCH_PERSON_FAILURE: {
			return {
				...state,
				status: statuses.FAILURE,
				errorMsg,
			};
		}
		case FETCH_PERSON_LIST_REQUEST: {
			return {
				...state,
				status: statuses.REQUEST,
				errorMsg: null,
			};
		}
		case FETCH_PERSON_LIST_SUCCESS: {
			return {
				...state,
				status: statuses.SUCCESS,
				list,
				errorMsg: null,
			};
		}
		case FETCH_PERSON_LIST_FAILURE: {
			return {
				...state,
				status: statuses.FAILURE,
				errorMsg,
			};
		}
		default:
			return state;
	}
};

export default personReducer;
