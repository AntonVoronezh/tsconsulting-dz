import { FETCH_USERS_LIST_REQUEST, FETCH_USERS_LIST_SUCCESS, FETCH_USERS_LIST_FAILURE } from '../actions';


const initialState = {
	users: [],
	status: statuses.INIT,
	isLoggedIn: false,
	errorMsg: null,
};

const listRreducer = (state = initialState, action) => {
	const { type, page } = action;
	switch (type) {
		case CHANGE_ACTIVE_PAGE: {
			return {
				...state,
				activePage: page,
			};
		}
		default:
			return state;
	}
};

export default listRreducer;
