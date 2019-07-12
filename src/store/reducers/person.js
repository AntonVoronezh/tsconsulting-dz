import { ADD_PERSON_INFO
} from '../actions';
import { statuses } from '../../helpers';

const initialState = {
	person: '',
	personInfo: null,
	status: statuses.INIT,
	errorMsg: null,
	// totalCount: 0,
	// pagPage: 1,
	
	
};

const personReducer = (state = initialState, action) => {
	const { type, users, errorMsg, query, totalCount, pagPage } = action;
	switch (type) {
		// case FETCH_USERS_LIST_REQUEST: {
		// 	return {
		// 		...state,
		// 		status: statuses.REQUEST,
		// 		errorMsg: null,
		// 	};
		// }
		// case FETCH_USERS_LIST_SUCCESS: {
		// 	return {
		// 		...state,
		// 		status: statuses.SUCCESS,
		// 		users,
		// 		errorMsg: null,
		// 	};
		// }
		// case FETCH_USERS_LIST_FAILURE: {
		// 	return {
		// 		...state,
		// 		status: statuses.FAILURE,
		// 		errorMsg,
		// 	};
		// }
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
		case ADD_PERSON_INFO: {
			return {
				...state,
				pagPage,
			};
		}
		default:
			return state;
	}
};

export default personReducer;
