import { combineReducers } from 'redux';

import { listReducer } from './reducers';

const rootReducer = combineReducers({
	list: listReducer,
});

export default rootReducer;
