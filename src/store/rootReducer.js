import { combineReducers } from 'redux';

import { listReducer, personReducer } from './reducers';

const rootReducer = combineReducers({
	list: listReducer,
	person: personReducer,
});

export default rootReducer;
