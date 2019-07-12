import { CHANGE_PERSON, FETCH_PERSON_FAILURE, FETCH_PERSON_REQUEST, FETCH_PERSON_SUCCESS } from '../actions';
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
	const { type, errorMsg, totalCount, pagPage, person, personInfo } = action;
	switch (type) {
		// case ADD_TOTAL_COUNT: {
		// 	return {
		// 		...state,
		// 		totalCount,
		// 	};
		// }
		// case CHANGE_PAG_PAGE: {
		// 	return {
		// 		...state,
		// 		pagPage,
		// 	};
		// }
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
		default:
			return state;
	}
};

export default personReducer;
