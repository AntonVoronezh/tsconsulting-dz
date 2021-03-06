const FETCH_PERSON_LIST_REQUEST = 'FETCH_PERSON_LIST_REQUEST';
const fetchPersonListRequestAC = () => ({
	type: FETCH_PERSON_LIST_REQUEST,
});

const FETCH_PERSON_LIST_SUCCESS = 'FETCH_PERSON_LIST_SUCCESS';
const fetchPersonListSuccessAC = list => ({
	type: FETCH_PERSON_LIST_SUCCESS,
	list,
});

const FETCH_PERSON_LIST_FAILURE = 'FETCH_PERSON_LIST_FAILURE';
const fetchPersonListFailureAC = errorMsg => ({
	type: FETCH_PERSON_LIST_FAILURE,
	errorMsg,
});

const FETCH_PERSON_REQUEST = 'FETCH_PERSON_REQUEST';
const fetchPersonRequestAC = () => ({
	type: FETCH_PERSON_REQUEST,
});

const FETCH_PERSON_SUCCESS = 'FETCH_PERSON_SUCCESS';
const fetchPersonSuccessAC = personInfo => ({
	type: FETCH_PERSON_SUCCESS,
	personInfo,
});

const FETCH_PERSON_FAILURE = 'FETCH_PERSON_FAILURE';
const fetchPersonFailureAC = errorMsg => ({
	type: FETCH_PERSON_FAILURE,
	errorMsg,
});

const ADD_TOTAL_COUNT = 'ADD_TOTAL_COUNT';
const addTotalCountAC = totalCount => ({
	type: ADD_TOTAL_COUNT,
	totalCount,
});

const CHANGE_PAG_PAGEF = 'CHANGE_PAG_PAGEF';
const changePagPageACC = pagPage => ({
	type: CHANGE_PAG_PAGEF,
	pagPage,
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

const fetchPersonList = service => () => async (dispatch, getState) => {
	const {
		person: { person, pagPage, totalCount },
	} = getState();

	dispatch(fetchPersonListRequestAC());
	try {
		const response = await service.getPersonList(person, pagPage);

		const { message, data } = response;
		if (!message) {
			dispatch(addTotalCountAC(totalCount))
			dispatch(fetchPersonListSuccessAC(data));
		} else {
			dispatch(fetchPersonListFailureAC(message));
		}
	} catch (err) {
		dispatch(fetchPersonListFailureAC(err.message));
	}
};

export {
	CHANGE_PERSON,
	changePersonAC,
	fetchPersonInfo,
	FETCH_PERSON_REQUEST,
	FETCH_PERSON_SUCCESS,
	FETCH_PERSON_FAILURE,
	fetchPersonList,
	FETCH_PERSON_LIST_REQUEST,
	FETCH_PERSON_LIST_SUCCESS,
	FETCH_PERSON_LIST_FAILURE,
	CHANGE_PAG_PAGEF,
	changePagPageACC
};
