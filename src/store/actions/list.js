const FETCH_USERS_LIST_REQUEST = 'FETCH_USERS_LIST_REQUEST';
const fetchUsersListRequestAC = () => ({
	type: FETCH_USERS_LIST_REQUEST,
});

const FETCH_USERS_LIST_SUCCESS = 'FETCH_USERS_LIST_SUCCESS';
const fetchUsersListSuccessAC = users => ({
	type: FETCH_USERS_LIST_SUCCESS,
	users,
});

const FETCH_USERS_LIST_FAILURE = 'FETCH_USERS_LIST_FAILURE';
const fetchUsersListFailureAC = errorMsg => ({
	type: FETCH_USERS_LIST_FAILURE,
	errorMsg,
});

const ADD_SEARCH_QUERY = 'ADD_SEARCH_QUERY';
const addSearchQueryAC = query => ({
	type: ADD_SEARCH_QUERY,
	query,
});

const fetchUsers = service => () => async (dispatch, getState) => {
	const {
		list: { query },
	} = getState();

	dispatch(fetchUsersListRequestAC());

	try {
		const response = await service.getUsersBySearch(query);

		const { message, data } = response;

		if (!message) {
			dispatch(fetchUsersListSuccessAC(data));
		} else {
			dispatch(fetchUsersListFailureAC(message));
		}
	} catch (err) {
		dispatch(fetchUsersListFailureAC(err.message));
	}
};

export {
	FETCH_USERS_LIST_REQUEST,
	FETCH_USERS_LIST_SUCCESS,
	FETCH_USERS_LIST_FAILURE,
	fetchUsers,
	ADD_SEARCH_QUERY,
	addSearchQueryAC,
};
