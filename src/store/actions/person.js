const FETCH_PERSON_LIST_REQUEST = 'FETCH_PERSON_LIST_REQUEST';
const fetchPersonListRequestAC = () => ({
	type: FETCH_PERSON_LIST_REQUEST,
});

const FETCH_PERSON_LIST_SUCCESS = 'FETCH_PERSON_LIST_SUCCESS';
const fetchPersonListSuccessAC = person => ({
	type: FETCH_PERSON_LIST_SUCCESS,
	person,
});

const FETCH_PERSON_LIST_FAILURE = 'FETCH_PERSON_LIST_FAILURE';
const fetchPersonListFailureAC = errorMsg => ({
	type: FETCH_PERSON_LIST_FAILURE,
	errorMsg,
});

const FETCH_PERSON_REQUEST = 'FETCH_PERSON_REQUEST';
const fetchPersonRequestAC = () => ({
	type: FETCH_PERSON_LIST_REQUEST,
});

const FETCH_PERSON_SUCCESS = 'FETCH_PERSON_SUCCESS';
const fetchPersonSuccessAC = person => ({
	type: FETCH_PERSON_LIST_SUCCESS,
	person,
});

const FETCH_PERSON_FAILURE = 'FETCH_PERSON_FAILURE';
const fetchPersonFailureAC = errorMsg => ({
	type: FETCH_PERSON_LIST_FAILURE,
	errorMsg,
});

const ADD_TOTAL_COUNT = 'ADD_TOTAL_COUNT';
const addTotalCountAC = totalCount => ({
	type: ADD_TOTAL_COUNT,
	totalCount,
});

const CHANGE_PAG_PAGE = 'CHANGE_PAG_PAGE';
const changePagPageAC = pagPage => ({
	type: CHANGE_PAG_PAGE,
	pagPage,
});

const ADD_PERSON_INFO = 'ADD_PERSON_INFO';
const addPersonInfoAC = personInfo => ({
	type: ADD_PERSON_INFO,
	personInfo,
});

const CHANGE_PERSON = 'CHANGE_PERSON';
const changePersonAC = person => ({
	type: CHANGE_PERSON,
	person,
});

const fetchPersonInfo = service => () => async (dispatch, getState) => {
	const {
		person: { person },
	} = getState();

	dispatch(fetchPersonRequestAC());

	try {
		const response = await service.getPersonByName(person);

		const { message, data } = response;

		if (!message) {
			dispatch(fetchPersonSuccessAC(data));
		} else {
			dispatch(fetchPersonFailureAC(message));
		}
	} catch (err) {
		dispatch(fetchPersonFailureAC(err.message));
	}
};

// const fetchPersonList = service => () => async (dispatch, getState) => {
// 	const {
// 		list: { query, pagPage },
// 	} = getState();

// 	dispatch(fetchPERSONListRequestAC());

// 	try {
// 		const response = await service.getPERSONBySearch(query, pagPage);

// 		const { message, data : {total_count, items} } = response;

// 		if (!message) {
// 			dispatch(addTotalCountAC(total_count))
// 			dispatch(fetchPERSONListSuccessAC(items));
// 		} else {
// 			dispatch(fetchPERSONListFailureAC(message));
// 		}
// 	} catch (err) {
// 		dispatch(fetchPERSONListFailureAC(err.message));
// 	}
// };

export {
	CHANGE_PERSON,
	changePersonAC,
	ADD_PERSON_INFO,
	fetchPersonInfo,
	FETCH_PERSON_REQUEST,
	FETCH_PERSON_SUCCESS,
	FETCH_PERSON_FAILURE,
};
