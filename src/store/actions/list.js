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

const ADD_TOTAL_COUNT = 'ADD_TOTAL_COUNT';
const addTotalCountAC = totalCount => ({
	type: ADD_TOTAL_COUNT,
	totalCount,
});

const fetchUsers = service => () => async (dispatch, getState) => {
	const {
		list: { query, pagPage },
	} = getState();

	dispatch(fetchUsersListRequestAC());

	try {
		const response = await service.getUsersBySearch(query, pagPage);

		const { message, data : {total_count, items} } = response;

		if (!message) {
			dispatch(addTotalCountAC(total_count))
			dispatch(fetchUsersListSuccessAC(items));
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
	ADD_TOTAL_COUNT
};
