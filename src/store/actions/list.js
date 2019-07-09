const FETCH_USERS_LIST_REQUEST = 'FETCH_USERS_LIST_REQUEST';
const fetchUsersListRequestAC = () => ({
	type: FETCH_USERS_LIST_REQUEST,
});

const FETCH_USERS_LIST_SUCCESS = 'FETCH_USERS_LIST_SUCCESS';
const fetchUsersListSuccessAC = data => ({
	type: FETCH_USERS_LIST_SUCCESS,
	data,
});

const FETCH_USERS_LIST_FAILURE = 'FETCH_USERS_LIST_FAILURE';
const fetchUsersListFailureAC = errorMsg => ({
	type: FETCH_USERS_LIST_FAILURE,
	errorMsg,
});

export { FETCH_USERS_LIST_REQUEST, FETCH_USERS_LIST_SUCCESS, FETCH_USERS_LIST_FAILURE };
