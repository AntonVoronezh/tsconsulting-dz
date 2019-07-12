import { CHANGE_PERSON
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
	const { type, errorMsg, totalCount, pagPage, person } = action;
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
		case CHANGE_PERSON: {
			return {
				...state,
				person,
			};
		}
		default:
			return state;
	}
};

export default personReducer;
