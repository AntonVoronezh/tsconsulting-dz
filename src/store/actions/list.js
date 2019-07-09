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

const fetchUsers = service => () => async (dispatch, getState) => {
	// const {
	// 	login: { userNameText, passwordText },
	// } = getState();

	dispatch(fetchUsersListRequestAC());

	try {
		const response = await service.getUsers();
		debugger
		const { login, message, status } = response;

		if (status === 'ok') {
			dispatch(fetchUsersListSuccessAC());
		} else if (status === 'err') {
			dispatch(fetchUsersListFailureAC(message));
		}
	} catch (err) {
		dispatch(fetchUsersListFailureAC(err.message));
	}
};

export { FETCH_USERS_LIST_REQUEST, FETCH_USERS_LIST_SUCCESS, FETCH_USERS_LIST_FAILURE };
